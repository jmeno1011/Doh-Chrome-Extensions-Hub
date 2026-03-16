import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout-header";
import Footer from "@/components/layout-footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Chrome Extensions Hub",
  description:
    "A static, JSON-driven hub for Doh Kim's Chrome extensions, project pages, and privacy policies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var stored = window.localStorage.getItem("theme");
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var theme = stored || (prefersDark ? "dark" : "light");
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.classList.toggle("light", theme !== "dark");
              })();
            `,
          }}
        />
      </head>
      <Analytics />
      <body className="theme-bg theme-text min-h-screen">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Header />

          <main className="flex-1">
            <div className="page-shell py-10">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
