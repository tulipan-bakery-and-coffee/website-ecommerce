import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Key", type: "string" }),
            defineField({ name: "label_es", title: "Label (ES)", type: "string" }),
            defineField({ name: "label_en", title: "Label (EN)", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "cateringBanner_es",
      title: "Catering Banner (ES)",
      type: "string",
    }),
    defineField({
      name: "cateringBanner_en",
      title: "Catering Banner (EN)",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
