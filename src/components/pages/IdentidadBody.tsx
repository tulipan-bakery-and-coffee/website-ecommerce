import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageContent, getCoffeeProducts, getFaqItems } from "@/sanity/queries";
import PageShell from "@/components/PageShell";
import type { Lang } from "@/types/content";
import { l } from "@/types/content";
import { hrefFor, UI } from "@/lib/i18n";
import Faq from "@/components/Faq";

const SLUG = "identidad";

export async function IdentidadBody({ lang }: { lang: Lang }) {
  const [page, faq, cafes] = await Promise.all([
    getPageContent(SLUG).catch(() => null),
    getFaqItems(SLUG).catch(() => []),
    getCoffeeProducts().catch(() => []),
  ]);
  if (!page) notFound();
  const ui = UI[lang];

  return (
    <PageShell page={page} lang={lang}>
      {/* La ficha de tueste del empaque, tal cual: pares etiqueta/valor
          separados por reglas. Es el lenguaje de detalle del sistema y
          el dato concreto que un asistente puede citar. */}
      <div className="page-cards">
        {cafes.map((c, i) => (
          <article key={i} className={`page-card ${c.colorPair}`}>
            <h2 className="page-card-title">{l(c, "name", lang)}</h2>
            <p className="page-card-tagline">{l(c, "tagline", lang)}</p>
            <dl className="page-spec">
              <dt>{ui.proceso}</dt>
              <dd>{l(c, "process", lang)}</dd>
              <dt>{ui.region}</dt>
              <dd>{c.region}</dd>
              <dt>{ui.tueste}</dt>
              <dd>{l(c, "roast", lang)}</dd>
              <dt>{ui.metodo}</dt>
              <dd>{l(c, "method", lang)}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="page-ctas">
        <Link href={hrefFor("menu", lang)} className="btn btn-bordo" data-umami-event="identidad-a-menu">
          {ui.verCarta}
        </Link>
        <Link href={hrefFor("eventos", lang)} className="btn btn-ghost" data-umami-event="identidad-a-eventos">
          {ui.barraEventos}
        </Link>
      </div>
      <Faq items={faq} lang={lang} />
    </PageShell>
  );
}
