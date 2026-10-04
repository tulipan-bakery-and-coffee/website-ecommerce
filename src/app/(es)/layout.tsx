import type { Metadata } from "next";
import "../globals.css";
import RootShell from "@/components/RootShell";
import { SITE_URL } from "@/lib/site";
import { languageAlternates } from "@/lib/i18n";

const title = "Tulipán 58 · Café de especialidad en Gran Santa Fe, Mérida";
const description =
  "Cafetería de especialidad en Gran Santa Fe, Caucel, Mérida. Grano de origen Veracruz, tostado por casas de Mérida y Veracruz. Miércoles a sábado de 7:00 a 11:30, domingo de 8:00 a 12:00.";
const url = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: languageAlternates(""),
  icons: {
    icon: "/assets/favicon.ico",
  },
  // El sitio se distribuye por WhatsApp e Instagram: la tarjeta es el
  // primer contacto real, no la pagina. La descripcion dice zona y
  // horario porque eso es lo que decide la visita.
  openGraph: {
    type: "website",
    url,
    siteName: "Tulipán 58",
    title,
    description,
    locale: "es_MX",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es">{children}</RootShell>;
}
