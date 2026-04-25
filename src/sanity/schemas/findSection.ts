import { defineType, defineField } from "sanity";

export default defineType({
  name: "findSection",
  title: "Find Us Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow_es", title: "Eyebrow (ES)", type: "string" }),
    defineField({ name: "eyebrow_en", title: "Eyebrow (EN)", type: "string" }),
    defineField({ name: "title_es", title: "Title (ES)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "addressLabel_es", title: "Address Label (ES)", type: "string" }),
    defineField({ name: "addressLabel_en", title: "Address Label (EN)", type: "string" }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "hoursLabel_es", title: "Hours Label (ES)", type: "string" }),
    defineField({ name: "hoursLabel_en", title: "Hours Label (EN)", type: "string" }),
    defineField({ name: "hours1_es", title: "Hours Line 1 (ES)", type: "string" }),
    defineField({ name: "hours1_en", title: "Hours Line 1 (EN)", type: "string" }),
    defineField({ name: "hours2_es", title: "Hours Line 2 (ES)", type: "string" }),
    defineField({ name: "hours2_en", title: "Hours Line 2 (EN)", type: "string" }),
    defineField({ name: "contactLabel_es", title: "Contact Label (ES)", type: "string" }),
    defineField({ name: "contactLabel_en", title: "Contact Label (EN)", type: "string" }),
    defineField({ name: "instagram", title: "Instagram", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
    defineField({ name: "website", title: "Website", type: "string" }),
    defineField({ name: "ctaMap_es", title: "CTA Map (ES)", type: "string" }),
    defineField({ name: "ctaMap_en", title: "CTA Map (EN)", type: "string" }),
    defineField({ name: "ctaWa_es", title: "CTA WhatsApp (ES)", type: "string" }),
    defineField({ name: "ctaWa_en", title: "CTA WhatsApp (EN)", type: "string" }),
    defineField({ name: "mapLabel_es", title: "Map Label (ES)", type: "string" }),
    defineField({ name: "mapLabel_en", title: "Map Label (EN)", type: "string" }),
    defineField({ name: "mapsUrl", title: "Google Maps URL", type: "string" }),
  ],
  preview: {
    prepare() {
      return { title: "Find Us Section" };
    },
  },
});
