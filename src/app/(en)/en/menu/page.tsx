import type { Metadata } from "next";
import { MenuBody } from "@/components/pages/MenuBody";
import { getPageContent } from "@/sanity/queries";
import { languageAlternates } from "@/lib/i18n";

const SLUG = "menu" as const;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent(SLUG).catch(() => null);
  if (!page) return {};
  const title = page.metaTitle_en ?? page.metaTitle_es;
  const description = page.metaDescription_en ?? page.metaDescription_es;
  return {
    title,
    description,
    alternates: {
      ...languageAlternates(SLUG),
      canonical: "/en/menu",
    },
    openGraph: { title, description, url: "/en/menu", type: "website" },
  };
}

export default function Page() {
  return <MenuBody lang="en" />;
}
