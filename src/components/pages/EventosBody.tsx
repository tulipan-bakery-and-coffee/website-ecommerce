import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageContent, getEventsSection, getFaqItems } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import PageShell from "@/components/PageShell";
import type { Lang } from "@/types/content";
import { l } from "@/types/content";
import { hrefFor, UI } from "@/lib/i18n";
import Faq from "@/components/Faq";

const SLUG = "eventos";

export async function EventosBody({ lang }: { lang: Lang }) {
  const [page, faq, events] = await Promise.all([
    getPageContent(SLUG).catch(() => null),
    getFaqItems(SLUG).catch(() => []),
    getEventsSection().catch(() => null),
  ]);
  if (!page) notFound();

  const bullets = events?.bullets ?? fallbackContent.events.bullets;
  const ui = UI[lang];
  const wa = fallbackContent.find.whatsapp.replace(/\D/g, "");

  return (
    <PageShell page={page} lang={lang}>
      <ul className="page-bullets">
        {bullets.map((b, i) => (
          <li key={i}>{l(b, "text", lang)}</li>
        ))}
      </ul>

      <div className="page-ctas">
        <a
          href={`https://wa.me/${wa}`}
          className="btn btn-bordo"
          target="_blank"
          rel="noopener noreferrer"
          data-umami-event="eventos-whatsapp"
        >
          {ui.cuentanos}
        </a>
        <Link href={hrefFor("menu", lang)} className="btn btn-ghost" data-umami-event="eventos-a-menu">
          {ui.verCarta}
        </Link>
      </div>
      <Faq items={faq} lang={lang} />
    </PageShell>
  );
}
