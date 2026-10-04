import Image from "next/image";
import { getFindSection } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import type { Lang } from "@/types/content";

const COPY = {
  es: {
    code: "Error 404",
    before: "Aquí no hay nada que ver, visítanos en",
    place: "Gran Santa Fe, Caucel",
    home: "Ir al inicio",
  },
  en: {
    code: "Error 404",
    before: "Nothing to see here. Come see us in",
    place: "Gran Santa Fe, Caucel",
    home: "Go to the home page",
  },
} as const;

/**
 * Cuerpo del 404, compartido por los tres sitios donde puede aparecer:
 * global-not-found para URLs que no casan con ninguna ruta, y el
 * not-found de cada grupo de idioma para los notFound() que lanzan las
 * paginas cuando falta su contenido en Sanity.
 *
 * El enlace al mapa sale de Sanity para que no exista una segunda copia
 * de la direccion que pueda quedarse vieja.
 */
export default async function NotFoundContent({ lang }: { lang: Lang }) {
  let mapsUrl = fallbackContent.find.mapsUrl;
  try {
    const find = await getFindSection();
    if (find?.mapsUrl) mapsUrl = find.mapsUrl;
  } catch {
    // Una 404 que falla por no poder consultar el CMS seria peor que
    // una 404 con un enlace de respaldo.
  }

  const t = COPY[lang];
  const home = lang === "en" ? "/en" : "/";

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

      <p className="nf-code">{t.code}</p>

      <h1 className="nf-title">
        {t.before}{" "}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="404-mapa"
        >
          {t.place}
        </a>
        .
      </h1>

      <div className="nf-actions">
        <a href={home} className="btn btn-bordo" data-umami-event="404-inicio">
          {t.home}
        </a>
      </div>
    </main>
  );
}
