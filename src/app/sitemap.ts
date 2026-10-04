import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Solo URLs canonicas e indexables. /studio queda fuera a proposito: no
 * hay nada que indexar y robots.ts ya lo bloquea.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/eventos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/identidad`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
