import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className=" theme-header-bg sticky top-0 z-50 backdrop-blur">
      <div className="page-shell header-height flex items-center justify-between">
        <div className="theme-primary flex items-center gap-4">
          <div className="theme-primary-bg flex size-9 items-center justify-center rounded-lg text-white">
            <span className="material-symbols-outlined">deployed_code</span>
          </div>
          <div>
            <Link
              href="/"
              className="tracking-brand font-display text-lg font-bold"
            >
              Chrome Extensions Hub
            </Link>
            <p className="theme-muted text-xs font-medium">
              A hub for my Chrome extensions and their privacy policies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="theme-muted theme-text-hover text-sm font-medium transition"
            >
              Projects
            </Link>
            <a
              href="mailto:privacy@whltn8282@gmail.com"
              className="theme-muted theme-text-hover text-sm font-medium transition"
            >
              Contact
            </a>
            <a
              href="https://github.com/jmeno1011"
              target="_blank"
              rel="noreferrer"
              className="theme-muted theme-text-hover text-sm font-medium transition"
            >
              GitHub
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
