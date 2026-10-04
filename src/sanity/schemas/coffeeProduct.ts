import { defineType, defineField } from "sanity";

/**
 * Los cafes que se sirven. El tueste NO es propio: lo hacen casas
 * tostadoras de Merida y Veracruz con las que hay relacion directa.
 *
 * El argumento no es tostar, es elegir el grano y declarar su origen.
 * Ver PRODUCT.md. Nunca escribir "tueste propio".
 *
 * Los campos replican la ficha de la bolsa a proposito. El dato
 * concreto es lo que se puede citar; "el mejor cafe de Merida" no.
 */
export default defineType({
  name: "coffeeProduct",
  title: "Café",
  type: "document",
  fields: [
    defineField({ name: "name_es", title: "Nombre (ES)", type: "string" }),
    defineField({ name: "name_en", title: "Name (EN)", type: "string" }),
    defineField({ name: "tagline_es", title: "Descriptor (ES)", type: "string" }),
    defineField({ name: "tagline_en", title: "Descriptor (EN)", type: "string" }),
    defineField({ name: "process_es", title: "Proceso (ES)", type: "string" }),
    defineField({ name: "process_en", title: "Process (EN)", type: "string" }),
    defineField({ name: "region", title: "Región", type: "string" }),
    defineField({ name: "roast_es", title: "Nivel de tueste (ES)", type: "string" }),
    defineField({ name: "roast_en", title: "Roast level (EN)", type: "string" }),
    defineField({ name: "method_es", title: "Ideal para (ES)", type: "string" }),
    defineField({ name: "method_en", title: "Ideal for (EN)", type: "string" }),
    defineField({ name: "colorPair", title: "Pareja de color", type: "string", options: { list: ["pair-bordo", "pair-verde", "pair-tulipan"] } }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
  preview: { select: { title: "name_es", subtitle: "region" } },
});
