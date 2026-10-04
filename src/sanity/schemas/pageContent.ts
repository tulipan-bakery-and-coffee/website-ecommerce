import { defineType, defineField } from "sanity";

/**
 * Metadatos y texto de apertura de las paginas que no son la home.
 *
 * Se identifica por `slug`, asi que una misma plantilla sirve para
 * /eventos, /menu e /identidad sin un tipo por pagina. El titulo y la
 * descripcion de cada una deben ser unicos: si se heredan de la home,
 * las paginas compiten entre si en lugar de sumar.
 */
export default defineType({
  name: "pageContent",
  title: "Página",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Ruta",
      type: "string",
      description: "Sin barra inicial: eventos, menu, identidad.",
      options: { list: ["eventos", "menu", "identidad"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "metaTitle_es", title: "Título SEO (ES)", type: "string", description: "Nombra la categoría y la zona. Único por página." }),
    defineField({ name: "metaTitle_en", title: "SEO title (EN)", type: "string" }),
    defineField({ name: "metaDescription_es", title: "Descripción SEO (ES)", type: "text", rows: 3 }),
    defineField({ name: "metaDescription_en", title: "SEO description (EN)", type: "text", rows: 3 }),
    defineField({ name: "eyebrow_es", title: "Eyebrow (ES)", type: "string" }),
    defineField({ name: "eyebrow_en", title: "Eyebrow (EN)", type: "string" }),
    defineField({ name: "title_es", title: "Titular (ES)", type: "string" }),
    defineField({ name: "title_en", title: "Headline (EN)", type: "string" }),
    defineField({
      name: "intro_es",
      title: "Entrada (ES)",
      type: "text",
      rows: 8,
      description:
        "Un párrafo por línea en blanco. El primero debería sostenerse solo y decir qué, dónde y cuándo: es el que un asistente puede citar.",
    }),
    defineField({ name: "intro_en", title: "Intro (EN)", type: "text", rows: 8 }),
  ],
  preview: {
    select: { title: "slug" },
    prepare({ title }) {
      return { title: `Página /${title ?? "?"}` };
    },
  },
});
