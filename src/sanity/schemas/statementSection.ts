import { defineType, defineField } from "sanity";

export default defineType({
  name: "statementSection",
  title: "Statement Section",
  type: "document",
  fields: [
    defineField({ name: "body1_es", title: "Body 1 (ES)", type: "string" }),
    defineField({ name: "body1_en", title: "Body 1 (EN)", type: "string" }),
    defineField({ name: "body2_es", title: "Body 2 (ES)", type: "string" }),
    defineField({ name: "body2_en", title: "Body 2 (EN)", type: "string" }),
    defineField({ name: "body3_es", title: "Body 3 (ES)", type: "string" }),
    defineField({ name: "body3_en", title: "Body 3 (EN)", type: "string" }),
    defineField({ name: "body4_es", title: "Body 4 (ES)", type: "string" }),
    defineField({ name: "body4_en", title: "Body 4 (EN)", type: "string" }),
    defineField({ name: "foot_es", title: "Foot (ES)", type: "string" }),
    defineField({ name: "foot_en", title: "Foot (EN)", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Statement Section" };
    },
  },
});
