import type { FindContent, MenuContent } from "@/types/content";
import { fallbackContent } from "@/lib/fallback-content";

/**
 * JSON-LD de la cafeteria, derivado de Sanity.
 *
 * Es lo que alimenta el panel lateral de Google, el paquete local y, cada
 * vez mas, lo que un asistente cita cuando alguien pregunta donde tomar
 * cafe de especialidad cerca de Gran Santa Fe.
 *
 * Se deriva del mismo contenido que lee la pagina. Una segunda copia de
 * la direccion o del horario se desincroniza: ya paso con el horario, que
 * llego a decir tres cosas distintas en tres sitios.
 *
 * No se marca aggregateRating ni review. No hay resenas en el sitio y
 * marcar lo que no se muestra es motivo de penalizacion.
 */
export function cafeJsonLd({
  find,
  menu,
  siteUrl,
}: {
  find: FindContent;
  menu: MenuContent;
  siteUrl: string;
}) {
  const precios = menu.items.map((item) => item.price).filter(Boolean);
  const rango =
    precios.length > 0
      ? `$${Math.min(...precios)}-$${Math.max(...precios)} MXN`
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/#cafeteria`,
    name: "Tulipán 58",
    alternateName: "Tulipán 58 Bakery & Coffee",
    description:
      "Cafetería de especialidad en Gran Santa Fe, Caucel, Mérida. Grano de origen Veracruz tostado por casas de Mérida y Veracruz, y repostería de casa para acompañar.",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: find.whatsapp,
    servesCuisine: "Café de especialidad",
    ...(rango ? { priceRange: rango } : {}),
    currenciesAccepted: "MXN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C. 11C Norte",
      addressLocality: "Caucel",
      addressRegion: "Yucatán",
      addressCountry: "MX",
      // Gran Santa Fe es el fraccionamiento, Caucel la comisaria y
      // Merida el municipio. Los tres importan para busqueda local.
      areaServed: "Gran Santa Fe, Caucel, Mérida",
    },
    // Las coordenadas no son contenido editorial: no cambian salvo que
    // el local se mude. Recurrir al respaldo aqui es seguro y evita que
    // el dato de mayor valor para busqueda local dependa de que alguien
    // se acuerde de rellenar dos campos en Studio.
    ...(() => {
      const lat = find.geoLat ?? fallbackContent.find.geoLat;
      const lng = find.geoLng ?? fallbackContent.find.geoLng;
      return lat && lng
        ? { geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng } }
        : {};
    })(),
    // El horario SI es editorial, y a proposito no recurre al respaldo:
    // si alguien corrige el horario en Sanity y olvida este campo, un
    // respaldo obsoleto le daria a Google un horario equivocado. Mejor
    // no marcar horario que marcarlo mal: una persona manejaria hasta
    // Caucel para encontrar cerrado.
    ...(find.openingHours?.length
      ? {
          openingHoursSpecification: find.openingHours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    hasMap: find.mapsUrl,
    hasMenu: `${siteUrl}/menu`,
    sameAs: [
      "https://instagram.com/tulipan58mid",
      "https://facebook.com/tulipan58mid",
      "https://tiktok.com/@tulipan58mid",
    ],
  };
}
