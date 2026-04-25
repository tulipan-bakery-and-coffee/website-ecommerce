import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow_es", title: "Eyebrow (ES)", type: "string" }),
    defineField({ name: "eyebrow_en", title: "Eyebrow (EN)", type: "string" }),
    defineField({ name: "title_es", title: "Title (ES)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "body1_es", title: "Body Paragraph 1 (ES)", type: "string" }),
    defineField({ name: "body1_en", title: "Body Paragraph 1 (EN)", type: "string" }),
    defineField({ name: "body2_es", title: "Body Paragraph 2 (ES)", type: "string" }),
    defineField({ name: "body2_en", title: "Body Paragraph 2 (EN)", type: "string" }),
    defineField({ name: "pull_es", title: "Pull Quote (ES)", type: "string" }),
    defineField({ name: "pull_en", title: "Pull Quote (EN)", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string" }),
            defineField({ name: "label_es", title: "Label (ES)", type: "string" }),
            defineField({ name: "label_en", title: "Label (EN)", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Section" };
    },
  },
});
