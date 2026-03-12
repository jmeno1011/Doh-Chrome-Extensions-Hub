import { ExtensionCard } from "@/components/ExtensionCard";
import HeroComponent from "@/components/hero-component";
import { getExtensions } from "@/lib/extensions";

export default function HomePage() {
  const extensions = getExtensions();

  return (
    <main className="flex flex-col gap-6">
      <HeroComponent
        title="Browser Tools"
        subtitle="Chrome extensions product pages, and privacy policies."
      />

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="theme-primary tracking-section text-sm uppercase">
              Projects
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Extension Gallery
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {extensions.map((extension) => (
            <ExtensionCard key={extension.id} extension={extension} />
          ))}
        </div>
      </section>
    </main>
  );
}
