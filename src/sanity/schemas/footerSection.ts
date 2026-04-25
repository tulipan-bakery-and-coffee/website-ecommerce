import { defineType, defineField } from "sanity";

export default defineType({
  name: "footerSection",
  title: "Footer Section",
  type: "document",
  fields: [
    defineField({ name: "tagline_es", title: "Tagline (ES)", type: "string" }),
    defineField({ name: "tagline_en", title: "Tagline (EN)", type: "string" }),
    defineField({ name: "navLabel_es", title: "Nav Label (ES)", type: "string" }),
    defineField({ name: "navLabel_en", title: "Nav Label (EN)", type: "string" }),
    defineField({ name: "socialLabel_es", title: "Social Label (ES)", type: "string" }),
    defineField({ name: "socialLabel_en", title: "Social Label (EN)", type: "string" }),
    defineField({ name: "linksLabel_es", title: "Links Label (ES)", type: "string" }),
    defineField({ name: "linksLabel_en", title: "Links Label (EN)", type: "string" }),
    defineField({ name: "legal_es", title: "Legal (ES)", type: "string" }),
    defineField({ name: "legal_en", title: "Legal (EN)", type: "string" }),
    defineField({ name: "credit_es", title: "Credit (ES)", type: "string" }),
    defineField({ name: "credit_en", title: "Credit (EN)", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Footer Section" };
    },
  },
});
