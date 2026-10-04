import { defineType, defineField } from "sanity";

/**
 * Preguntas frecuentes reales, no relleno de acordeon.
 *
 * Se marcan con FAQPage de schema.org, y por eso tienen que mostrarse
 * visiblemente en la pagina: marcar lo que no se ve es motivo de
 * penalizacion. Mismo criterio por el que no se marca aggregateRating.
 */
export default defineType({
  name: "faqItem",
  title: "Pregunta frecuente",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Página",
      type: "string",
      options: { list: ["home", "eventos", "menu", "identidad"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "question_es", title: "Pregunta (ES)", type: "string" }),
    defineField({ name: "question_en", title: "Question (EN)", type: "string" }),
    defineField({ name: "answer_es", title: "Respuesta (ES)", type: "text", rows: 4 }),
    defineField({ name: "answer_en", title: "Answer (EN)", type: "text", rows: 4 }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
  preview: { select: { title: "question_es", subtitle: "page" } },
});
