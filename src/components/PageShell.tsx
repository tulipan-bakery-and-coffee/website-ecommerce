import Link from "next/link";
import type { PageContent } from "@/sanity/queries";

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
  children,
}: {
  page: PageContent;
  children: React.ReactNode;
}) {
  const parrafos = (page.intro_es ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main className="section page" id="contenido">
      <div className="container">
        <p className="page-back">
          <Link href="/" data-umami-event={`volver-inicio-${page.slug}`}>
            Tulipán 58
          </Link>
        </p>

        <div className="section-head">
          {page.eyebrow_es ? <p className="eyebrow">{page.eyebrow_es}</p> : null}
          <h1 className="section-head-title">{page.title_es}</h1>
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
