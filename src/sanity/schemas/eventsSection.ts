import { defineType, defineField } from "sanity";

export default defineType({
  name: "eventsSection",
  title: "Events Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow_es", title: "Eyebrow (ES)", type: "string" }),
    defineField({ name: "eyebrow_en", title: "Eyebrow (EN)", type: "string" }),
    defineField({ name: "title_es", title: "Title (ES)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "body_es", title: "Body (ES)", type: "string" }),
    defineField({ name: "body_en", title: "Body (EN)", type: "string" }),
    defineField({
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text_es", title: "Text (ES)", type: "string" }),
            defineField({ name: "text_en", title: "Text (EN)", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "cta_es", title: "CTA (ES)", type: "string" }),
    defineField({ name: "cta_en", title: "CTA (EN)", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Events Section" };
    },
  },
});
