import { defineType, defineField } from "sanity";

export default defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({ name: "name_es", title: "Name (ES)", type: "string" }),
    defineField({ name: "name_en", title: "Name (EN)", type: "string" }),
    defineField({ name: "description_es", title: "Description (ES)", type: "string" }),
    defineField({ name: "description_en", title: "Description (EN)", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Hot", value: "hot" },
          { title: "Cold", value: "cold" },
          { title: "Method", value: "method" },
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
    select: { title: "name_es", subtitle: "category" },
  },
});
