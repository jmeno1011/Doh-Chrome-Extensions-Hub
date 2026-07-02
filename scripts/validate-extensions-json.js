const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(process.cwd(), "data", "extensions.json");
const errors = [];

const requiredStringFields = [
  "id",
  "name",
  "slug",
  "category",
  "status",
  "platform",
  "version",
  "language",
  "description",
  "longDescription",
  "privacyPath",
];

const seenIds = new Set();
const seenSlugs = new Set();
const seenPrivacyPaths = new Set();

let extensions;

try {
  extensions = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (error) {
  fail(`data/extensions.json is not valid JSON: ${error.message}`);
}

if (!Array.isArray(extensions)) {
  fail("data/extensions.json must contain an array.");
}

extensions.forEach((extension, index) => {
  const label = `extensions[${index}]`;

  if (!isRecord(extension)) {
    errors.push(`${label} must be an object.`);
    return;
  }

  requiredStringFields.forEach((field) => {
    if (!isNonEmptyString(extension[field])) {
      errors.push(`${label}.${field} must be a non-empty string.`);
    }
  });

  if (typeof extension.github !== "string") {
    errors.push(`${label}.github must be a string.`);
  } else if (extension.github && !isHttpUrl(extension.github)) {
    errors.push(`${label}.github must be empty or an http(s) URL.`);
  }

  if (typeof extension.chromeStore !== "string") {
    errors.push(`${label}.chromeStore must be a string.`);
  } else if (extension.chromeStore && !isHttpUrl(extension.chromeStore)) {
    errors.push(`${label}.chromeStore must be empty or an http(s) URL.`);
  }

  if (isNonEmptyString(extension.slug) && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(extension.slug)) {
    errors.push(`${label}.slug must be kebab-case lowercase alphanumeric.`);
  }

  if (isNonEmptyString(extension.slug) && extension.privacyPath !== `/extensions/${extension.slug}/privacy`) {
    errors.push(`${label}.privacyPath must equal /extensions/${extension.slug}/privacy.`);
  }

  checkUnique(seenIds, extension.id, `${label}.id`);
  checkUnique(seenSlugs, extension.slug, `${label}.slug`);
  checkUnique(seenPrivacyPaths, extension.privacyPath, `${label}.privacyPath`);

  validatePrivacyPolicy(extension.privacyPolicy, `${label}.privacyPolicy`);
});

if (errors.length > 0) {
  console.error("Extension JSON validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Extension JSON validation passed (${extensions.length} extensions).`);

function validatePrivacyPolicy(policy, label) {
  if (!isRecord(policy)) {
    errors.push(`${label} must be an object.`);
    return;
  }

  ["productName", "lastUpdated", "summary", "contactEmail", "thirdPartiesDescription"].forEach((field) => {
    if (!isNonEmptyString(policy[field])) {
      errors.push(`${label}.${field} must be a non-empty string.`);
    }
  });

  if (isNonEmptyString(policy.lastUpdated) && !/^\d{4}-\d{2}-\d{2}$/.test(policy.lastUpdated)) {
    errors.push(`${label}.lastUpdated must use YYYY-MM-DD format.`);
  }

  if (isNonEmptyString(policy.contactEmail) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(policy.contactEmail)) {
    errors.push(`${label}.contactEmail must be an email address.`);
  }

  if (!Array.isArray(policy.sections) || policy.sections.length === 0) {
    errors.push(`${label}.sections must be a non-empty array.`);
  } else {
    policy.sections.forEach((section, index) => {
      const sectionLabel = `${label}.sections[${index}]`;
      if (!isRecord(section)) {
        errors.push(`${sectionLabel} must be an object.`);
        return;
      }
      ["title", "body"].forEach((field) => {
        if (!isNonEmptyString(section[field])) {
          errors.push(`${sectionLabel}.${field} must be a non-empty string.`);
        }
      });
    });
  }

  if (!Array.isArray(policy.dataPractices) || policy.dataPractices.length === 0) {
    errors.push(`${label}.dataPractices must be a non-empty array.`);
  } else {
    policy.dataPractices.forEach((practice, index) => {
      const practiceLabel = `${label}.dataPractices[${index}]`;
      if (!isRecord(practice)) {
        errors.push(`${practiceLabel} must be an object.`);
        return;
      }
      ["category", "title", "description"].forEach((field) => {
        if (!isNonEmptyString(practice[field])) {
          errors.push(`${practiceLabel}.${field} must be a non-empty string.`);
        }
      });
      ["collects", "sharedWithThirdParties"].forEach((field) => {
        if (typeof practice[field] !== "boolean") {
          errors.push(`${practiceLabel}.${field} must be a boolean.`);
        }
      });
    });
  }
}

function checkUnique(seen, value, label) {
  if (!isNonEmptyString(value)) {
    return;
  }

  if (seen.has(value)) {
    errors.push(`${label} must be unique. Duplicate value: ${value}`);
  }

  seen.add(value);
}

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
