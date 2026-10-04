import type { Metadata } from "next";
import "./globals.css";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "Aquí no hay nada que ver · Tulipán 58",
  // Una 404 no debe competir en el indice con las paginas reales.
  robots: { index: false, follow: true },
};

/**
 * 404 para URLs que no casan con ninguna ruta.
 *
 * Hace falta este archivo, y no basta con un not-found por grupo, porque
 * el sitio tiene dos layouts raiz, (es) y (en). Ante una URL que no casa
 * con nada, Next no puede elegir grupo y por tanto no puede elegir
 * layout: sin global-not-found cae a su pantalla por defecto, que es
 * blanca, en Helvetica y en ingles.
 *
 * Por eso este componente renderiza su propio <html>: no hereda ninguno.
 *
 * Va en espanol porque es la lengua por defecto del sitio y la raiz no
 * lleva prefijo. El equivalente en ingles vive en (en)/not-found.
 */
export default function GlobalNotFound() {
  return (
    <html lang="es-MX">
      <body>
        <NotFoundContent lang="es" />
      </body>
    </html>
  );
}
