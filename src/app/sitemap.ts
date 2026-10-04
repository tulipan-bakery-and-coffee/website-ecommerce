import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Hoy solo hay una URL indexable. El sitemap existe igual: es lo que se
 * envia a Search Console y lo que avisa de cambios con lastModified.
 *
 * Cuando se añadan /eventos, /menu e /identidad, entran aqui.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
