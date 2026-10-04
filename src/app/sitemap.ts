import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Solo URLs canonicas e indexables. /studio queda fuera a proposito: no
 * hay nada que indexar y robots.ts ya lo bloquea.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const rutas: { slug: string; freq: "weekly" | "monthly"; prio: number }[] = [
    { slug: "", freq: "weekly", prio: 1 },
    { slug: "eventos", freq: "monthly", prio: 0.8 },
    { slug: "menu", freq: "weekly", prio: 0.8 },
    { slug: "identidad", freq: "monthly", prio: 0.7 },
  ];

  // Cada URL declara su equivalente en la otra lengua. Sin reciprocidad
  // Google ignora las anotaciones, asi que ambas se publican juntas.
  return rutas.flatMap(({ slug, freq, prio }) => {
    const es = slug ? `${SITE_URL}/${slug}` : SITE_URL;
    const en = slug ? `${SITE_URL}/en/${slug}` : `${SITE_URL}/en`;
    const languages = { "es-MX": es, en, "x-default": es };
    return [
      { url: es, lastModified: now, changeFrequency: freq, priority: prio, alternates: { languages } },
      { url: en, lastModified: now, changeFrequency: freq, priority: prio - 0.1, alternates: { languages } },
    ];
  });
}
