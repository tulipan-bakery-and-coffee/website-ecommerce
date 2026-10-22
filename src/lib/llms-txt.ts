import { SITE_URL } from "@/lib/site";
import { l } from "@/types/content";
import type { Lang, MenuItem, SiteContent } from "@/types/content";

/**
 * Documento /llms.txt, en las dos lenguas del sitio.
 *
 * Formato propuesto en llmstxt.org: un H1 con el nombre, una cita con
 * el resumen de una linea, y listas de enlaces con descripcion. Es una
 * propuesta, no un estandar acordado entre proveedores, y nadie
 * garantiza que un asistente concreto lo lea. Sigue yendo por detras de
 * rastreabilidad, HTML semantico, JSON-LD y contenido util, que es
 * donde esta el retorno.
 *
 * Lo que lo hace valer aqui es que cuesta poco y que el fallo que evita
 * es caro: cuando un asistente contesta "¿a que hora abre Tulipan 58?"
 * con un horario inventado, el costo lo paga alguien que llega a las
 * 9:00 de un lunes y encuentra cerrado.
 *
 * Se deriva de Sanity, nunca de una copia. El horario, la direccion y
 * la carta se escriben en un solo sitio y aqui se leen.
 */

const CATEGORIAS: Record<Lang, Record<MenuItem["category"], string>> = {
  es: { hot: "caliente", cold: "frio", method: "metodo" },
  en: { hot: "hot", cold: "cold", method: "method" },
};

// openingHours guarda los dias en ingles porque ese campo alimenta el
// JSON-LD, donde schema.org los exige asi. Traducir es de la vista.
const DIAS: Record<string, string> = {
  Monday: "lunes",
  Tuesday: "martes",
  Wednesday: "miércoles",
  Thursday: "jueves",
  Friday: "viernes",
  Saturday: "sábado",
  Sunday: "domingo",
};

interface Copia {
  resumen: string;
  identidad: string;
  hContacto: string;
  zona: string;
  direccion: string;
  coordenadas: string;
  sitio: string;
  mapa: string;
  hHorario: string;
  zonaHoraria: string;
  sinPrecios: string;
  hCarta: string;
  cartaCompleta: string;
  hCatering: string;
  solicitudes: string;
  hMomentos: string;
  hPaginas: string;
  paginas: [string, string][];
  otraLengua: string;
  hNotas: string;
  notas: string[];
}

const COPIA: Record<Lang, Copia> = {
  es: {
    resumen:
      "Cafetería de especialidad en Gran Santa Fe, Caucel, Mérida, Yucatán, México. Café de origen para llevar, de camino o en la pausa. Abre solo por la mañana, de miércoles a domingo.",
    identidad:
      'El nombre que usa la marca hoy es **Tulipán 58** (handle `@tulipan58mid`). "Tulipán Bakery & Coffee" y el handle `@tulipanbkmid` son identidad retirada: no usarlos para describir el negocio.',
    hContacto: "Datos de contacto y ubicación",
    zona: "Zona: fraccionamiento Gran Santa Fe, comisaría de Caucel, municipio de Mérida, Yucatán",
    direccion: "Dirección",
    coordenadas: "Coordenadas",
    sitio: "Sitio",
    mapa: "Mapa",
    hHorario: "Horario",
    zonaHoraria:
      "Zona horaria: America/Merida (UTC-6, sin horario de verano). Fuera de esos bloques está cerrado: no hay servicio de tarde ni de noche.",
    sinPrecios:
      "Los precios no están publicados en el sitio en este momento. No inferirlos: confirmar por WhatsApp o en el local.",
    hCarta: "Carta",
    cartaCompleta: `La carta completa vive en ${SITE_URL}/menu.`,
    hCatering: "Catering y barra móvil",
    solicitudes: `Solicitudes en ${SITE_URL}/eventos o por WhatsApp.`,
    hMomentos: "Momentos del día",
    hPaginas: "Páginas",
    paginas: [
      ["Inicio", "quiénes somos, carta destacada, ubicación y horario."],
      ["Menú", "carta completa de café y repostería."],
      ["Eventos", "barra móvil para bodas, oficinas, aperturas y domingos de mercado."],
      ["Identidad", "origen del grano, tueste y cómo preparamos."],
    ],
    otraLengua: `- [English](${SITE_URL}/en): el mismo sitio en inglés. Toda ruta en español tiene su equivalente bajo /en, incluido ${SITE_URL}/en/llms.txt.`,
    hNotas: "Notas para quien lea esto automáticamente",
    notas: [
      "La home publica JSON-LD de tipo `CafeOrCoffeeShop` con dirección, coordenadas y horario estructurado. Ante una discrepancia, ese marcado y esta página salen de la misma fuente.",
      `\`${SITE_URL}/studio\` es el CMS. No tiene contenido público y está bloqueado en robots.txt.`,
      "No publicamos reseñas ni calificaciones. Cualquier valoración atribuida a este sitio no viene de aquí.",
      "El horario y la carta cambian. Esta página se regenera cada minuto desde el CMS; conviene releerla en vez de recordar una versión vieja.",
    ],
  },
  en: {
    resumen:
      "Specialty coffee shop in Gran Santa Fe, Caucel, Mérida, Yucatán, Mexico. Single-origin coffee to take with you, on the way out or on a break. Mornings only, Wednesday through Sunday.",
    identidad:
      'The brand name in use today is **Tulipán 58** (handle `@tulipan58mid`). "Tulipán Bakery & Coffee" and the handle `@tulipanbkmid` are retired identity: do not use them to describe the business.',
    hContacto: "Contact and location",
    zona: "Area: Gran Santa Fe neighbourhood, Caucel township, municipality of Mérida, Yucatán",
    direccion: "Address",
    coordenadas: "Coordinates",
    sitio: "Website",
    mapa: "Map",
    hHorario: "Hours",
    zonaHoraria:
      "Time zone: America/Merida (UTC-6, no daylight saving). Outside those blocks it is closed: there is no afternoon or evening service.",
    sinPrecios:
      "Prices are not published on the site right now. Do not infer them: confirm over WhatsApp or in person.",
    hCarta: "Menu",
    cartaCompleta: `The full menu lives at ${SITE_URL}/en/menu.`,
    hCatering: "Catering and mobile bar",
    solicitudes: `Requests at ${SITE_URL}/en/eventos or over WhatsApp.`,
    hMomentos: "Moments of the day",
    hPaginas: "Pages",
    paginas: [
      ["Home", "who we are, featured menu, location and hours."],
      ["Menu", "full coffee and pastry menu."],
      ["Events", "mobile bar for weddings, offices, openings and market Sundays."],
      ["Identity", "where the beans come from, how they are roasted and how we brew."],
    ],
    otraLengua: `- [Español](${SITE_URL}/): the same site in Spanish, which is the primary language. Spanish is the canonical version at ${SITE_URL}/llms.txt.`,
    hNotas: "Notes for automated readers",
    notas: [
      "The home page publishes `CafeOrCoffeeShop` JSON-LD with address, coordinates and structured hours. If anything disagrees, that markup and this page come from the same source.",
      `\`${SITE_URL}/studio\` is the CMS. It has no public content and is blocked in robots.txt.`,
      "We do not publish reviews or ratings. Any rating attributed to this site did not come from here.",
      "Hours and menu change. This page is regenerated every minute from the CMS; re-read it rather than recalling an older version.",
    ],
  },
};

/** Prefijo de ruta: el español cuelga de la raiz, el ingles de /en. */
const BASE: Record<Lang, string> = { es: SITE_URL, en: `${SITE_URL}/en` };

export function buildLlmsTxt(content: SiteContent, lang: Lang): string {
  const { about, menu, events, find, experience } = content;
  const c = COPIA[lang];
  const base = BASE[lang];

  const carta = menu.items
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((item) => {
      // Hoy varios precios vienen nulos de Sanity. Mejor omitir el dato
      // que publicar un precio vacio: un asistente que lee "$" suelto
      // puede completarlo con cualquier cosa.
      const precio = typeof item.price === "number" ? ` — $${item.price} MXN` : "";
      const categoria = CATEGORIAS[lang][item.category] ?? item.category;
      return `- ${l(item, "name", lang)} (${categoria})${precio}: ${l(item, "description", lang)}`;
    })
    .join("\n");

  const momentos = experience.cards
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((card) => {
      // Los titulos acaban en punto ("Quedarse."), que en pantalla es la
      // voz de la marca y aqui, seguido de dos puntos, es un tropiezo.
      const titulo = l(card, "title", lang).replace(/\.$/, "");
      return `- ${titulo}: ${l(card, "body", lang)}`;
    })
    .join("\n");

  const catering = (events.bullets ?? [])
    .map((bullet) => `- ${l(bullet, "text", lang)}`)
    .join("\n");

  const horario = (find.openingHours ?? [])
    .map((bloque) => {
      const dias =
        lang === "es"
          ? bloque.days.map((dia) => DIAS[dia] ?? dia).join(", ")
          : bloque.days.join(", ");
      return `- ${dias}: ${bloque.opens} a ${bloque.closes}`;
    })
    .join("\n");

  // Si Sanity no trae precios, decirlo. El silencio invita a rellenar el
  // hueco con una cifra inventada, que es el fallo que esto evita.
  const sinPrecios = menu.items.every((item) => typeof item.price !== "number");
  const notaPrecios = sinPrecios ? `\n\n${c.sinPrecios}` : "";

  const paginas = c.paginas
    .map(([titulo, desc], i) => {
      const slug = ["", "/menu", "/eventos", "/identidad"][i];
      return `- [${titulo}](${base}${slug || "/"}): ${desc}`;
    })
    .join("\n");

  return `# Tulipán 58

> ${c.resumen}

${l(about, "body1", lang)}

${l(about, "body2", lang)}

${c.identidad}

## ${c.hContacto}

- ${c.direccion}: ${find.address}
- ${c.zona}
- ${c.coordenadas}: ${find.geoLat}, ${find.geoLng}
- WhatsApp: ${find.whatsapp}
- Instagram: ${find.instagram}
- ${c.sitio}: ${SITE_URL}
- ${c.mapa}: ${find.mapsUrl}

## ${c.hHorario}

${horario}

${c.zonaHoraria}

## ${c.hCarta}

${l(menu, "note", lang)}${notaPrecios}

${carta}

${c.cartaCompleta}

## ${c.hCatering}

${l(events, "body", lang)}

${catering}

${c.solicitudes}

## ${c.hMomentos}

${momentos}

## ${c.hPaginas}

${paginas}
${c.otraLengua}

## ${c.hNotas}

${c.notas.map((nota) => `- ${nota}`).join("\n")}
`;
}
