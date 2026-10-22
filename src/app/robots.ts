import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Decisión por agente, no una regla general para "bots de IA".
 *
 * Los rastreadores de IA no hacen lo mismo entre sí: unos alimentan
 * búsqueda y citación, otros entrenamiento. Mezclarlos en una sola
 * regla es tomar una decisión sin saber cuál.
 *
 * Para una cafetería de barrio, aparecer citada cuando alguien pregunta
 * "¿dónde tomo café de especialidad cerca de Gran Santa Fe?" es
 * exactamente lo que se busca. Por eso se permite todo de forma
 * explícita en lugar de por omisión.
 *
 * Los nombres y sus consecuencias cambian. Antes de editarlos, verificar
 * en la documentación vigente de cada proveedor:
 * - OpenAI:     help.openai.com/en/articles/12627856
 * - Perplexity: docs.perplexity.ai/docs/resources/perplexity-crawlers
 * - Anthropic:  privacy.anthropic.com/en/articles/8896518
 * - Google:     developers.google.com/crawling/docs/crawlers-fetchers
 *
 * /llms.txt y /en/llms.txt existen desde ahora, derivados de Sanity
 * por src/lib/llms-txt.ts. El juicio sobre la propuesta no cambia: no es un
 * estándar acordado entre proveedores y nada garantiza que un producto
 * concreto lo lea, así que sigue por detrás de rastreabilidad, HTML
 * semántico, JSON-LD y contenido útil. Lo que cambió es el cálculo:
 * cuesta poco y el fallo que evita, un asistente inventando el horario
 * de una cafetería que solo abre por la mañana, lo paga un cliente que
 * llega a la puerta cerrada.
 *
 * No se declara en robots.txt. La directiva Sitemap está definida para
 * sitemaps XML; colgar ahí otra cosa es inventar sintaxis. Quien busque
 * /llms.txt lo busca en su ruta por convención.
 */

// /studio es el CMS: no hay nada que indexar y sirve una app pesada que
// gasta presupuesto de rastreo para nada.
const BLOQUEADO = ["/studio", "/studio/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: BLOQUEADO },

      // Búsqueda y citación en asistentes: permitidos a propósito.
      { userAgent: "OAI-SearchBot", allow: "/", disallow: BLOQUEADO },
      { userAgent: "PerplexityBot", allow: "/", disallow: BLOQUEADO },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: BLOQUEADO },
      { userAgent: "Claude-User", allow: "/", disallow: BLOQUEADO },

      // Entrenamiento y grounding. Son distintos de los de búsqueda:
      // bloquearlos no mejora ni empeora la posición en Google.
      // Se permiten porque el contenido es público y describir con
      // precisión un negocio real no tiene contrapartida aquí.
      { userAgent: "GPTBot", allow: "/", disallow: BLOQUEADO },
      { userAgent: "ClaudeBot", allow: "/", disallow: BLOQUEADO },
      { userAgent: "Google-Extended", allow: "/", disallow: BLOQUEADO },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
