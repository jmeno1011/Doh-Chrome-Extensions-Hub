import React from "react";

interface HeroComponentProps {
  title: string;
  subtitle: string;
}

export default function HeroComponent({ title, subtitle }: HeroComponentProps) {
  return (
    <div className="hero-visual rounded-hero hero-wide relative overflow-hidden">
      <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
        <span className="theme-primary-bg tracking-label inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase text-white">
          {title}
        </span>
        <h1 className="theme-text text-xl font-black leading-tight tracking-tight md:text-3xl">
          {subtitle}
        </h1>
      </div>
    </div>
  );
}
