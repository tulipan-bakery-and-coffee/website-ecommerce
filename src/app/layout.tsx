import type { Metadata } from "next";
import "./globals.css";
import UmamiTracker from "@/components/UmamiTracker";

export const metadata: Metadata = {
  title: "tulipan58 · el cafe que camina contigo",
  description:
    "Cafe de especialidad en la calle tulipan 58, Merida, Yucatan. El cafe que camina contigo.",
  icons: {
    icon: "/assets/favicon.ico",
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
