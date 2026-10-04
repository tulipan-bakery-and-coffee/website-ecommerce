import type { Metadata } from "next";
import "./globals.css";
import UmamiTracker from "@/components/UmamiTracker";

const title = "Tulipán 58 · el café que camina contigo";
const description =
  "Café de especialidad en Gran Santa Fe, Mérida. Tostamos nuestro propio grano. Miércoles a sábado de 7:00 a 11:30, domingo de 8:00 a 12:00.";
const url = "https://tulipan.mx";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <UmamiTracker />
      </body>
    </html>
  );
}
