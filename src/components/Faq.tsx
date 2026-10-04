import type { FaqItem } from "@/sanity/queries";
import type { Lang } from "@/types/content";
import { l } from "@/types/content";
import { UI } from "@/lib/i18n";

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
export default function Faq({ items, lang }: { items: FaqItem[]; lang: Lang }) {
  if (items.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: l(f, "question", lang),
      acceptedAnswer: { "@type": "Answer", text: l(f, "answer", lang) },
    })),
  };

  return (
    <section className="faq" aria-label={UI[lang].preguntas}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="page-subtitle">{UI[lang].preguntas}</h2>
      <div className="faq-list">
        {items.map((f, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-question">{l(f, "question", lang)}</summary>
            <p className="faq-answer">{l(f, "answer", lang)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
