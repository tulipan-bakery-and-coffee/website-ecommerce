import type { FaqItem } from "@/sanity/queries";

/**
 * Preguntas frecuentes, visibles y marcadas.
 *
 * Usa <details> nativo: abre y cierra sin JavaScript, es accesible por
 * teclado de serie y el contenido esta en el DOM aunque este cerrado,
 * que es lo que necesita un rastreador.
 *
 * El JSON-LD de FAQPage se emite junto al bloque, nunca por separado:
 * si el marcado se queda sin el texto visible, es marcar lo que no se
 * muestra.
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question_es,
      acceptedAnswer: { "@type": "Answer", text: f.answer_es },
    })),
  };

  return (
    <section className="faq" aria-label="Preguntas frecuentes">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="page-subtitle">Preguntas frecuentes</h2>
      <div className="faq-list">
        {items.map((f, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-question">{f.question_es}</summary>
            <p className="faq-answer">{f.answer_es}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
