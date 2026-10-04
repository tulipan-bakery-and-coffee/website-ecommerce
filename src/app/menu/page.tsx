import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, getMenuItems, getPastryItems } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import PageShell from "@/components/PageShell";

const SLUG = "menu";

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

export default async function MenuPage() {
  const [page, bebidas, reposteria] = await Promise.all([
    getPageContent(SLUG).catch(() => null),
    getMenuItems().catch(() => []),
    getPastryItems().catch(() => []),
  ]);
  if (!page) notFound();

  const items = bebidas.length > 0 ? bebidas : fallbackContent.menu.items;

  return (
    <PageShell page={page}>
      <ul className="page-list">
        {items.map((item, i) => (
          <li key={i} className="page-row">
            <span className="page-row-name">{item.name_es}</span>
            <span className="page-row-price">${item.price}</span>
            <p className="page-row-desc">{item.description_es}</p>
          </li>
        ))}
      </ul>

      {reposteria.length > 0 ? (
        <>
          {/* La reposteria va despues y subordinada: acompana al cafe, no
              compite con el. Ver el principio 6 de PRODUCT.md. */}
          <h2 className="page-subtitle">Para acompañar</h2>
          <ul className="page-list page-list--secondary">
            {reposteria.map((p, i) => (
              <li key={i} className="page-row">
                <span className="page-row-name">{p.name_es}</span>
                {p.pairsWith_es ? (
                  <span className="page-row-pair">con {p.pairsWith_es}</span>
                ) : null}
                <p className="page-row-desc">{p.description_es}</p>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="page-ctas">
        <Link href="/identidad" className="btn btn-bordo" data-umami-event="menu-a-identidad">
          De dónde viene el café
        </Link>
        <Link href="/#find" className="btn btn-ghost" data-umami-event="menu-a-find">
          Cómo llegar
        </Link>
      </div>
    </PageShell>
  );
}
