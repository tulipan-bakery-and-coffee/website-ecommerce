import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/RootShell";
import { SITE_URL } from "@/lib/site";
import { languageAlternates } from "@/lib/i18n";

const title = "Tulipán 58 · Specialty coffee in Gran Santa Fe, Mérida";
const description =
  "Specialty coffee shop in Gran Santa Fe, Caucel, Mérida. Veracruz-origin beans, roasted by partner roasters in Mérida and Veracruz. Wednesday to Saturday 7:00 to 11:30, Sunday 8:00 to 12:00.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    ...languageAlternates(""),
    // En ingles el canonical apunta a /en, no a la raiz: son dos
    // paginas distintas, no duplicados.
    canonical: "/en",
  },
  icons: { icon: "/assets/favicon.ico" },
  openGraph: {
    type: "website",
    url: "/en",
    siteName: "Tulipán 58",
    title,
    description,
    locale: "en_US",
    alternateLocale: "es_MX",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}
