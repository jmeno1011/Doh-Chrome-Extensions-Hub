import React from "react";

export default function Footer() {
  return (
    <footer className="theme-bg theme-border mt-20 border-t py-6 flex flex-col gap-2">
      <div className="page-shell flex flex-col items-center gap-2 text-center">
        <div className="theme-primary flex items-center gap-2">
          <span className="material-symbols-outlined">deployed_code</span>
          <span className="font-display font-bold">Doh Kim Extensions</span>
        </div>
        <p className="theme-muted text-sm">
          © {new Date().getFullYear()} Doh Kim. All rights reserved.
        </p>
        <div className="theme-muted flex gap-6">
          <a
            href="https://github.com/jmeno1011"
            target="_blank"
            rel="noreferrer"
            className="theme-text-hover transition"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            href="mailto:whltn8282@gmail.com"
            className="theme-text-hover transition"
          >
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
