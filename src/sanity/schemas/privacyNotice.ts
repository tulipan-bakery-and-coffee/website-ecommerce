import { defineType, defineField } from "sanity";

export default defineType({
  name: "privacyNotice",
  title: "Aviso de Privacidad",
  type: "document",
  fields: [
    defineField({ name: "linkLabel_es", title: "Etiqueta del enlace (ES)", type: "string" }),
    defineField({ name: "linkLabel_en", title: "Link label (EN)", type: "string" }),
    defineField({ name: "title_es", title: "Título (ES)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({
      name: "body_es",
      title: "Cuerpo (ES)",
      type: "text",
      rows: 12,
      description:
        "Un párrafo por línea en blanco. Si cambia lo que mide Umami, se edita aquí y el sitio lo toma sin tocar código.",
    }),
    defineField({
      name: "body_en",
      title: "Body (EN)",
      type: "text",
      rows: 12,
    }),
    defineField({
      name: "updated",
      title: "Última actualización",
      type: "date",
      description: "Se muestra al pie del aviso.",
    }),
    defineField({ name: "closeLabel_es", title: "Etiqueta de cerrar (ES)", type: "string" }),
    defineField({ name: "closeLabel_en", title: "Close label (EN)", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Aviso de Privacidad" };
    },
  },
});
