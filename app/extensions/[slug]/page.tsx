import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getExtensionBySlug,
  getExtensions,
  getExtensionSlugs,
} from "@/lib/extensions";
import HeroComponent from "@/components/hero-component";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getExtensionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);

  if (!extension) {
    return {};
  }

  return {
    title: `${extension.name} | Chrome Extensions Hub`,
    description: extension.description,
  };
}

export const dynamicParams = false;

export default async function ExtensionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);

  if (!extension) {
    notFound();
  }

  const relatedExtensions = getExtensions().filter(
    (item) => item.slug !== extension.slug,
  );

  return (
    <main className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <HeroComponent title={extension.platform} subtitle={extension.name} />
        {/* <div className="detail-visual rounded-hero hero-wide relative aspect-video overflow-hidden">
          <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
            <span className="theme-primary-bg tracking-label inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase text-white">
              {extension.platform}
            </span>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              {extension.name}
            </h1>
          </div>
        </div> */}

        <div className="flex flex-col items-start gap-10 lg:flex-row">
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-bold">
                Project Overview
              </h2>
              <p className="theme-muted text-lg leading-relaxed">
                {extension.longDescription}
              </p>
            </div>

            {/* <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl font-bold">Key Features</h3>
              <ul className="grid gap-4 md:grid-cols-2">
                {extension.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="material-symbols-outlined theme-primary">
                      check_circle
                    </span>
                    <span className="theme-muted">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* <div className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-bold">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {extension.technologies.map((item) => (
                  <span
                    key={item}
                    className="theme-border-strong theme-chip theme-primary rounded-lg border px-4 py-1.5 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div> */}

            <div className="theme-border theme-surface rounded-panel border p-6">
              <h3 className="font-display text-xl font-bold">
                Privacy Summary
              </h3>
              <p className="theme-muted mt-4 text-sm leading-7">
                {extension.privacyPolicy.summary}
              </p>
              <p className="theme-primary tracking-meta mt-4 text-xs font-bold uppercase">
                Last updated {extension.privacyPolicy.lastUpdated}
              </p>
            </div>
          </div>

          <aside className="theme-border theme-surface w-full rounded-panel border p-6 lg:w-80">
            <h3 className="font-display text-xl font-bold">Project Details</h3>
            <div className="mt-5 flex flex-col gap-5">
              <div>
                <p className="theme-primary tracking-meta mb-1 text-xs font-bold uppercase">
                  Category
                </p>
                <p className="font-medium">{extension.category}</p>
              </div>
              <div>
                <p className="theme-primary tracking-meta mb-1 text-xs font-bold uppercase">
                  Version
                </p>
                <p className="font-medium">{extension.version}</p>
              </div>
              <div>
                <p className="theme-primary tracking-meta mb-1 text-xs font-bold uppercase">
                  Language
                </p>
                <p className="font-medium">{extension.language}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={extension.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <span className="material-symbols-outlined text-xl">code</span>
                GitHub Repository
              </a>
              {extension.chromeStore ? (
                <a
                  href={extension.chromeStore}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-primary-bg flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition hover:opacity-90"
                >
                  <span className="material-symbols-outlined text-xl">
                    open_in_new
                  </span>
                  Chrome Web Store
                </a>
              ) : (
                <div className="theme-border theme-muted rounded-xl border border-dashed px-4 py-3 text-sm">
                  Chrome Web Store link not added yet
                </div>
              )}
              <Link
                href={extension.privacyPath}
                className="theme-border theme-border-hover theme-text-hover flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-bold transition"
              >
                <span className="material-symbols-outlined text-xl">
                  policy
                </span>
                Privacy Policy
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
