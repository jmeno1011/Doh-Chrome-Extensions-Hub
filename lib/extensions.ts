import rawExtensions from "@/data/extensions.json";

type PrivacyPolicy = {
  productName: string;
  lastUpdated: string;
  summary: string;
  contactEmail: string;
  sections: {
    title: string;
    body: string;
  }[];
  dataPractices: {
    category: string;
    title: string;
    collects: boolean;
    description: string;
    sharedWithThirdParties: boolean;
  }[];
  thirdPartiesDescription: string;
};

export type Extension = {
  id: string;
  name: string;
  slug: string;
  category: string;
  status: string;
  platform: string;
  version: string;
  language: string;
  description: string;
  longDescription: string;
  github: string;
  chromeStore: string;
  privacyPath: string;
  privacyPolicy: PrivacyPolicy;
};

const extensions = rawExtensions as Extension[];

export function getExtensions() {
  return extensions;
}

export function getExtensionSlugs() {
  return extensions.map((extension) => extension.slug);
}

export function getExtensionBySlug(slug: string) {
  return extensions.find((extension) => extension.slug === slug);
}
