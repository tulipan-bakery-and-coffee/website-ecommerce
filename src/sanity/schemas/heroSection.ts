import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow_es", title: "Eyebrow (ES)", type: "string" }),
    defineField({ name: "eyebrow_en", title: "Eyebrow (EN)", type: "string" }),
    defineField({ name: "title1_es", title: "Title Line 1 (ES)", type: "string" }),
    defineField({ name: "title1_en", title: "Title Line 1 (EN)", type: "string" }),
    defineField({ name: "title2_es", title: "Title Line 2 (ES)", type: "string" }),
    defineField({ name: "title2_en", title: "Title Line 2 (EN)", type: "string" }),
    defineField({ name: "title3_es", title: "Title Line 3 (ES)", type: "string" }),
    defineField({ name: "title3_en", title: "Title Line 3 (EN)", type: "string" }),
    defineField({ name: "foot_es", title: "Foot Text (ES)", type: "string" }),
    defineField({ name: "foot_en", title: "Foot Text (EN)", type: "string" }),
    defineField({ name: "ctaPrimary_es", title: "CTA Primary (ES)", type: "string" }),
    defineField({ name: "ctaPrimary_en", title: "CTA Primary (EN)", type: "string" }),
    defineField({ name: "ctaSecondary_es", title: "CTA Secondary (ES)", type: "string" }),
    defineField({ name: "ctaSecondary_en", title: "CTA Secondary (EN)", type: "string" }),
    defineField({ name: "photoLabel_es", title: "Photo Label (ES)", type: "string" }),
    defineField({ name: "photoLabel_en", title: "Photo Label (EN)", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section" };
    },
  },
});
