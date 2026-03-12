import Link from "next/link";
import type { Extension } from "@/lib/extensions";

type ExtensionCardProps = {
  extension: Extension;
};

export function ExtensionCard({ extension }: ExtensionCardProps) {
  return (
    <article className="theme-border theme-surface theme-border-hover theme-shadow-hover group relative flex flex-col gap-4 rounded-panel border p-4 transition-all">
      <div className="detail-visual h-45 rounded-media relative overflow-hidden">
        <div className="absolute bottom-5 left-5 right-5">
          <span className="theme-primary-bg text-label-xs tracking-label inline-flex items-center rounded-full px-3 py-1 font-bold uppercase text-white">
            {extension.platform}
          </span>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
            {extension.name}
          </h3>
          <p className="mt-2 text-sm text-white/80">{extension.category}</p>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 px-1">
        <p className="theme-muted text-sm leading-7">{extension.description}</p>
        <Link
          href={`/extensions/${extension.slug}`}
          className="theme-border theme-border-hover theme-text-hover flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition whitespace-nowrap"
        >
          <span className="material-symbols-outlined icon-18">
            arrow_forward
          </span>
          View Details
        </Link>
      </div>
      {/* 
      <div className="mt-2 flex flex-wrap gap-3 px-1">
        <a
          href={extension.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          <span className="material-symbols-outlined icon-18">code</span>
          GitHub
        </a>
        {extension.chromeStore ? (
          <a
            href={extension.chromeStore}
            target="_blank"
            rel="noreferrer"
            className="theme-primary-bg flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            <span className="material-symbols-outlined icon-18">
              open_in_new
            </span>
            Chrome Store
          </a>
        ) : null}
      </div> */}
    </article>
  );
}
