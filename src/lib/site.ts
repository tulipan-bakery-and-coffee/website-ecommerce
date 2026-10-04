/**
 * Host canonico, en un solo sitio.
 *
 * El apex tulipan.mx redirige a www, asi que www es el host que responde
 * 200 y el que debe declararse en metadatos, canonical, sitemap y
 * JSON-LD. Antes metadataBase decia el apex y og:url apuntaba a una URL
 * que redirige, lo que obligaba a los buscadores a adivinar cual es la
 * version buena.
 */
export const SITE_URL = "https://www.tulipan.mx";
