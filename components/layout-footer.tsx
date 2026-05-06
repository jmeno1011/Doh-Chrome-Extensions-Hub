import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="theme-bg theme-border mt-20 scroll-mt-24 border-t py-6 flex flex-col gap-2"
    >
      <div className="page-shell flex flex-col items-center gap-2 text-center">
        <div className="theme-primary flex items-center gap-2">
          <span className="material-symbols-outlined">deployed_code</span>
          <span className="font-display font-bold">Doh Kim Extensions</span>
        </div>
        <p className="theme-muted text-sm">
          © {new Date().getFullYear()} Doh Kim. All rights reserved.
        </p>
        <div className="theme-muted flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-6">
          <a
            href="https://github.com/jmeno1011"
            target="_blank"
            rel="noreferrer"
            className="theme-text-hover flex items-center gap-2 transition"
          >
            <span className="material-symbols-outlined">code</span>
            GitHub
          </a>
          <a
            href="mailto:whltn8282@gmail.com"
            className="theme-text-hover flex items-center gap-2 transition"
          >
            <span className="material-symbols-outlined">alternate_email</span>
            whltn8282@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/dohyoungkim1011"
            target="_blank"
            rel="noreferrer"
            className="theme-text-hover flex items-center gap-2 transition"
          >
            <span className="material-symbols-outlined">badge</span>
            www.linkedin.com/in/dohyoungkim1011
          </a>
        </div>
      </div>
    </footer>
  );
}
