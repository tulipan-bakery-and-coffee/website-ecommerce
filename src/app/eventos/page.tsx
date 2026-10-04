import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, getEventsSection, getFaqItems } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import PageShell from "@/components/PageShell";
import Faq from "@/components/Faq";

const SLUG = "eventos";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent(SLUG).catch(() => null);
  if (!page) return {};
  return {
    title: page.metaTitle_es,
    description: page.metaDescription_es,
    // Canonical propio: sin esto hereda el de la home y las paginas
    // compiten entre si en lugar de sumar.
    alternates: { canonical: `/${SLUG}` },
    openGraph: {
      title: page.metaTitle_es,
      description: page.metaDescription_es,
      url: `/${SLUG}`,
      type: "website",
    },
  };
}

export default async function EventosPage() {
  const [page, faq, events] = await Promise.all([
    getPageContent(SLUG).catch(() => null),
    getFaqItems(SLUG).catch(() => []),
    getEventsSection().catch(() => null),
  ]);
  if (!page) notFound();

  const bullets = events?.bullets ?? fallbackContent.events.bullets;
  const wa = fallbackContent.find.whatsapp.replace(/\D/g, "");

  return (
    <PageShell page={page}>
      <ul className="page-bullets">
        {bullets.map((b, i) => (
          <li key={i}>{"text_es" in b ? b.text_es : String(b)}</li>
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
          Cuéntanos de tu evento
        </a>
        <Link href="/menu" className="btn btn-ghost" data-umami-event="eventos-a-menu">
          Ver la carta
        </Link>
      </div>
      <Faq items={faq} />
    </PageShell>
  );
}
