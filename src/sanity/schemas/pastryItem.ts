import { defineType, defineField } from "sanity";

/**
 * Reposteria. Acompana al cafe, no compite con el: al reves de la
 * cafeteria tradicional, aqui el cafe manda. Ver el principio 6 de
 * PRODUCT.md. No se le da jerarquia propia ni se persigue posicionar
 * "reposteria Merida", que no es la pelea de este negocio.
 */
export default defineType({
  name: "pastryItem",
  title: "Repostería",
  type: "document",
  fields: [
    defineField({ name: "name_es", title: "Nombre (ES)", type: "string" }),
    defineField({ name: "name_en", title: "Name (EN)", type: "string" }),
    defineField({ name: "description_es", title: "Descripción (ES)", type: "text", rows: 2 }),
    defineField({ name: "description_en", title: "Description (EN)", type: "text", rows: 2 }),
    defineField({ name: "pairsWith_es", title: "Acompaña a (ES)", type: "string", description: "Con qué café marida. Es el encuadre del negocio." }),
    defineField({ name: "pairsWith_en", title: "Pairs with (EN)", type: "string" }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
  preview: { select: { title: "name_es", subtitle: "pairsWith_es" } },
});
