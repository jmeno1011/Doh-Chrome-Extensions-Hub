import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrivacyPolicy from "@/components/privacy-policy";
import { getExtensionBySlug, getExtensionSlugs } from "@/lib/extensions";

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
    title: `${extension.name} Privacy Policy | Chrome Extensions Hub`,
    description: `Privacy policy for ${extension.name}.`,
  };
}

export const dynamicParams = false;

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const extension = getExtensionBySlug(slug);

  if (!extension) {
    notFound();
  }

  return <PrivacyPolicy privacyContent={extension.privacyPolicy} />;
}
