"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextIsDark);
    root.classList.toggle("light", !nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-chip theme-line-hover theme-primary flex h-10 w-10 items-center justify-center rounded-xl transition"
    >
      <span className="material-symbols-outlined icon-20">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
