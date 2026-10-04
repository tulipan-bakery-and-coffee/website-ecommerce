import type { Lang } from "@/types/content";

/**
 * El idioma vive en la URL, no en el estado de React.
 *
 * Antes el toggle ES/EN cambiaba un useState y las dos lenguas
 * compartian una sola URL: Google solo indexaba espanol y la mitad del
 * trabajo de contenido era invisible. Ahora el espanol es la raiz y el
 * ingles cuelga de /en.
 *
 * El espanol se queda en la raiz a proposito: es la URL que ya esta
 * indexada y mover una URL viva cuesta mas que lo que gana.
 */
export const LANGS = ["es", "en"] as const;

/** Rutas canonicas en espanol. El ingles es la misma con /en delante. */
export const SLUGS = ["", "eventos", "menu", "identidad"] as const;
export type Slug = (typeof SLUGS)[number];

/** `/menu` en es, `/en/menu` en en. */
export function hrefFor(slug: Slug, lang: Lang): string {
  const base = slug ? `/${slug}` : "/";
  return lang === "en" ? (slug ? `/en/${slug}` : "/en") : base;
}

/** La misma pagina en la otra lengua, para el toggle. */
export function altHref(slug: Slug, from: Lang): string {
  return hrefFor(slug, from === "es" ? "en" : "es");
}

/**
 * hreflang reciproco mas x-default. Sin reciprocidad Google ignora las
 * anotaciones, asi que las dos paginas se declaran siempre juntas.
 */
export function languageAlternates(slug: Slug) {
  return {
    canonical: hrefFor(slug, "es"),
    languages: {
      "es-MX": hrefFor(slug, "es"),
      en: hrefFor(slug, "en"),
      "x-default": hrefFor(slug, "es"),
    },
  };
}

/**
 * Etiquetas de interfaz de las paginas internas. Son chrome, no
 * contenido editable: no justifican un documento en Sanity, pero si
 * tienen que existir en las dos lenguas.
 */
export const UI = {
  es: {
    volver: "Tulipán 58",
    paraAcompanar: "Para acompañar",
    con: "con",
    preguntas: "Preguntas frecuentes",
    cuentanos: "Cuéntanos de tu evento",
    verCarta: "Ver la carta",
    deDondeViene: "De dónde viene el café",
    comoLlegar: "Cómo llegar",
    barraEventos: "Barra para eventos",
    proceso: "Proceso",
    region: "Región",
    tueste: "Nivel de tueste",
    metodo: "Método",
  },
  en: {
    volver: "Tulipán 58",
    paraAcompanar: "To go alongside",
    con: "with",
    preguntas: "Frequently asked",
    cuentanos: "Tell us about your event",
    verCarta: "See the menu",
    deDondeViene: "Where the coffee comes from",
    comoLlegar: "Directions",
    barraEventos: "Bar for events",
    proceso: "Process",
    region: "Region",
    tueste: "Roast level",
    metodo: "Method",
  },
} as const;
