import { defineType, defineField } from "sanity";

export default defineType({
  name: "experienceCard",
  title: "Experience Card",
  type: "document",
  fields: [
    defineField({ name: "tag_es", title: "Tag (ES)", type: "string" }),
    defineField({ name: "tag_en", title: "Tag (EN)", type: "string" }),
    defineField({ name: "title_es", title: "Title (ES)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "body_es", title: "Body (ES)", type: "string" }),
    defineField({ name: "body_en", title: "Body (EN)", type: "string" }),
    defineField({
      name: "colorPair",
      title: "Color Pair",
      type: "string",
      options: {
        list: [
          { title: "Tulipan", value: "pair-tulipan" },
          { title: "Bordo", value: "pair-bordo" },
          { title: "Verde", value: "pair-verde" },
        ],
      },
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title_es", subtitle: "colorPair" },
  },
});
