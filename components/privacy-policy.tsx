import type { Extension } from "@/lib/extensions";

type PrivacyPolicyProps = {
  privacyContent: Extension["privacyPolicy"];
};

export default function PrivacyPolicy({ privacyContent }: PrivacyPolicyProps) {
  const {
    productName,
    lastUpdated,
    summary,
    contactEmail,
    sections,
    dataPractices,
    thirdPartiesDescription,
  } = privacyContent;

  return (
    <main className="font-display max-w-policy mx-auto px-6 py-8 leading-7">
      <header className="mb-8">
        <h1 className="text-policy-title font-bold">
          {productName} - Privacy Policy
        </h1>
        <p className="theme-muted text-base">Last updated: {lastUpdated}</p>
      </header>

      <section className="theme-border theme-soft-bg mb-8 rounded-xl border px-5 py-4">
        <p className="text-lg leading-8">{summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-bold">Data Collection & Use Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-base">
            <thead>
              <tr>
                <th className="theme-border border-b px-2 py-2 text-left font-bold">
                  Category
                </th>
                <th className="theme-border border-b px-2 py-2 text-left font-bold">
                  Collects?
                </th>
                <th className="theme-border border-b px-2 py-2 text-left font-bold">
                  Shared with third parties?
                </th>
              </tr>
            </thead>
            <tbody>
              {dataPractices.map((item) => (
                <tr key={item.title}>
                  <td className="theme-border border-b px-2 py-2 align-top">
                    <strong>{item.title}</strong>
                    <br />
                    <span className="theme-muted">{item.description}</span>
                  </td>
                  <td className="theme-border border-b px-2 py-2 align-top">
                    {item.collects ? "Yes" : "No"}
                  </td>
                  <td className="theme-border border-b px-2 py-2 align-top">
                    {item.sharedWithThirdParties ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="theme-muted mt-3 text-base">{thirdPartiesDescription}</p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="mb-3 text-2xl font-bold">{section.title}</h2>
          <p className="text-lg leading-8">{section.body}</p>
        </section>
      ))}

      {contactEmail ? (
        <footer className="mt-8 text-base">
          <p>For any questions about this policy, please contact:</p>
          <div className="mt-2 flex flex-col gap-2">
            <a
              className="theme-primary underline"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
            <a
              className="theme-primary underline"
              href="https://www.linkedin.com/in/dohyoungkim1011"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/dohyoungkim1011
            </a>
          </div>
        </footer>
      ) : null}
    </main>
  );
}
