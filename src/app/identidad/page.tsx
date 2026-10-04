import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, getCoffeeProducts } from "@/sanity/queries";
import PageShell from "@/components/PageShell";

const SLUG = "identidad";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent(SLUG).catch(() => null);
  if (!page) return {};
  return {
    title: page.metaTitle_es,
    description: page.metaDescription_es,
    alternates: { canonical: `/${SLUG}` },
    openGraph: {
      title: page.metaTitle_es,
      description: page.metaDescription_es,
      url: `/${SLUG}`,
      type: "website",
    },
  };
}

export default async function IdentidadPage() {
  const [page, cafes] = await Promise.all([
    getPageContent(SLUG).catch(() => null),
    getCoffeeProducts().catch(() => []),
  ]);
  if (!page) notFound();

  return (
    <PageShell page={page}>
      {/* La ficha de tueste del empaque, tal cual: pares etiqueta/valor
          separados por reglas. Es el lenguaje de detalle del sistema y
          el dato concreto que un asistente puede citar. */}
      <div className="page-cards">
        {cafes.map((c, i) => (
          <article key={i} className={`page-card ${c.colorPair}`}>
            <h2 className="page-card-title">{c.name_es}</h2>
            <p className="page-card-tagline">{c.tagline_es}</p>
            <dl className="page-spec">
              <dt>Proceso</dt>
              <dd>{c.process_es}</dd>
              <dt>Región</dt>
              <dd>{c.region}</dd>
              <dt>Nivel de tueste</dt>
              <dd>{c.roast_es}</dd>
              <dt>Método</dt>
              <dd>{c.method_es}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="page-ctas">
        <Link href="/menu" className="btn btn-bordo" data-umami-event="identidad-a-menu">
          Ver la carta
        </Link>
        <Link href="/eventos" className="btn btn-ghost" data-umami-event="identidad-a-eventos">
          Barra para eventos
        </Link>
      </div>
    </PageShell>
  );
}
