import Link from "next/link";
import type { PageContent } from "@/sanity/queries";
import type { Lang } from "@/types/content";
import { l } from "@/types/content";
import { hrefFor, UI, type Slug } from "@/lib/i18n";

/**
 * Armazon de las paginas que no son la home.
 *
 * Reutiliza el sistema documentado en DESIGN.md: fondo cremita, eyebrow
 * mas titular en la reticula de seccion, cuerpo en mono. No introduce
 * tokens ni patrones nuevos.
 *
 * El enlace de vuelta no es decorativo: hoy el sitio no tiene enlazado
 * interno porque solo habia una pagina, y una pagina sin salida es un
 * callejon.
 */
export default function PageShell({
  page,
  lang,
  children,
}: {
  page: PageContent;
  lang: Lang;
  children: React.ReactNode;
}) {
  const ui = UI[lang];
  const parrafos = (l(page, "intro", lang) ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="section page" id="contenido">
      <div className="container">
        {/* Estas paginas no llevan nav, asi que sin esto no habria forma
            de cambiar de idioma ni de volver. Un enlace reciproco por
            pagina es ademas lo que hace seguible el hreflang. */}
        <div className="page-top">
          <p className="page-back">
            <Link href={hrefFor("", lang)} data-umami-event={`volver-inicio-${page.slug}`}>
              {ui.volver}
            </Link>
          </p>
          <div className="lang-toggle">
            <Link
              href={hrefFor(page.slug as Slug, "es")}
              className={`lang-toggle-btn ${lang === "es" ? "lang-toggle-btn--active" : ""}`}
              hrefLang="es-MX"
              aria-current={lang === "es" ? "true" : undefined}
              aria-label="Español"
              data-umami-event={`lang-switch-es-${page.slug}`}
            >
              ES
            </Link>
            <Link
              href={hrefFor(page.slug as Slug, "en")}
              className={`lang-toggle-btn ${lang === "en" ? "lang-toggle-btn--active" : ""}`}
              hrefLang="en"
              aria-current={lang === "en" ? "true" : undefined}
              aria-label="English"
              data-umami-event={`lang-switch-en-${page.slug}`}
            >
              EN
            </Link>
          </div>
        </div>

        <div className="section-head">
          {l(page, "eyebrow", lang) ? (
            <p className="eyebrow">{l(page, "eyebrow", lang)}</p>
          ) : null}
          <h1 className="section-head-title">{l(page, "title", lang)}</h1>
        </div>

        <div className="page-intro">
          {parrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {children}
      </div>
    </main>
  );
}
