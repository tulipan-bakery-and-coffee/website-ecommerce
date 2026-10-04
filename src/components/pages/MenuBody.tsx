import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageContent, getMenuItems, getPastryItems, getFaqItems } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import PageShell from "@/components/PageShell";
import type { Lang } from "@/types/content";
import { l } from "@/types/content";
import { hrefFor, UI } from "@/lib/i18n";
import Faq from "@/components/Faq";

const SLUG = "menu";

export async function MenuBody({ lang }: { lang: Lang }) {
  const [page, faq, bebidas, reposteria] = await Promise.all([
    getPageContent(SLUG).catch(() => null),
    getFaqItems(SLUG).catch(() => []),
    getMenuItems().catch(() => []),
    getPastryItems().catch(() => []),
  ]);
  if (!page) notFound();

  const items = bebidas.length > 0 ? bebidas : fallbackContent.menu.items;
  const ui = UI[lang];

  return (
    <PageShell page={page} lang={lang}>
      <ul className="page-list">
        {items.map((item, i) => (
          <li key={i} className="page-row">
            <span className="page-row-name">{l(item, "name", lang)}</span>
            <span className="page-row-price">${item.price}</span>
            <p className="page-row-desc">{l(item, "description", lang)}</p>
          </li>
        ))}
      </ul>

      {reposteria.length > 0 ? (
        <>
          {/* La reposteria va despues y subordinada: acompana al cafe, no
              compite con el. Ver el principio 6 de PRODUCT.md. */}
          <h2 className="page-subtitle">{ui.paraAcompanar}</h2>
          <ul className="page-list page-list--secondary">
            {reposteria.map((p, i) => (
              <li key={i} className="page-row">
                <span className="page-row-name">{l(p, "name", lang)}</span>
                {p.pairsWith_es ? (
                  <span className="page-row-pair">
                    {ui.con} {l(p, "pairsWith", lang)}
                  </span>
                ) : null}
                <p className="page-row-desc">{l(p, "description", lang)}</p>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="page-ctas">
        <Link href={hrefFor("identidad", lang)} className="btn btn-bordo" data-umami-event="menu-a-identidad">
          {ui.deDondeViene}
        </Link>
        <Link href={`${hrefFor("", lang)}#find`.replace("/#", "/#")} className="btn btn-ghost" data-umami-event="menu-a-find">
          {ui.comoLlegar}
        </Link>
      </div>
      <Faq items={faq} lang={lang} />
    </PageShell>
  );
}
