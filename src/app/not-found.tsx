import Image from "next/image";
import { getFindSection } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";

export const metadata = {
  title: "Aquí no hay nada que ver · Tulipán 58",
};

/**
 * La unica pantalla del sitio que el visitante no busco. Sin esto, Next
 * sirve su pagina por defecto: fondo blanco, Helvetica, en ingles. Y el
 * blanco puro es justo lo que prohibe la Regla del Papel Calido.
 *
 * El enlace al mapa sale de Sanity para que no haya una segunda copia
 * de la direccion que pueda quedarse vieja, como ya paso antes.
 *
 * Solo en espanol: el idioma vive en el estado de HomePage y esta
 * pantalla queda fuera de ese arbol.
 */
export default async function NotFound() {
  let mapsUrl = fallbackContent.find.mapsUrl;
  try {
    const find = await getFindSection();
    if (find?.mapsUrl) mapsUrl = find.mapsUrl;
  } catch {
    // Una 404 que falla por no poder consultar el CMS seria peor que
    // una 404 con un enlace de respaldo.
  }

  return (
    <main className="nf container">
      <Image
        src="/assets/isotipo-dark.webp"
        alt="Tulipán 58"
        width={72}
        height={72}
        className="nf-logo"
        priority
      />

      <p className="nf-code">Error 404</p>

      <h1 className="nf-title">
        Aquí no hay nada que ver, visítanos en{" "}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="404-mapa"
        >
          Gran Santa Fe
        </a>
        .
      </h1>

      <div className="nf-actions">
        <a href="/" className="btn btn-bordo" data-umami-event="404-inicio">
          Ir al inicio
        </a>
      </div>
    </main>
  );
}
