"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { hrefFor, type Slug } from "@/lib/i18n";
import Image from "next/image";
import type { Lang, NavContent } from "@/types/content";
import { l } from "@/types/content";

interface NavProps {
  lang: Lang;
  t: NavContent;
  /** La pagina actual, para que el toggle lleve a su equivalente. */
  slug: Slug;
}

/**
 * Marca la seccion visible en el nav. El rootMargin recorta por arriba
 * la altura del nav sticky y por abajo la mayor parte del viewport, asi
 * que "activa" es la seccion que ocupa la franja superior, no la que
 * apenas asoma por el borde inferior.
 */
function useActiveSection(keys: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = keys
      .map((key) => document.getElementById(key))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // En orden de documento: gana la primera visible, no la ultima
        // que haya disparado el callback.
        const first = sections.find((el) => visible.has(el.id));
        setActive(first ? first.id : null);
      },
      { rootMargin: "-80px 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [keys]);

  return active;
}

export default function Nav({ lang, t, slug }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const keys = useMemo(() => t.links.map((link) => link.key), [t.links]);
  const active = useActiveSection(keys);

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <Link href={hrefFor("", lang)} className="nav-brand" data-umami-event="nav-logo-click">
          <Image
            src="/assets/isotipo-dark.webp"
            alt="Tulipan 58 isotipo"
            width={36}
            height={36}
            className="nav-brand-icon"
            loading="eager"
          />
          <span className="nav-wordmark font-display">tulipan58</span>
        </Link>

        <ul className={`nav-links ${mobileOpen ? "nav-links--open" : ""}`}>
          {t.links.map((link) => (
            <li key={link.key}>
              <a
                href={`${hrefFor(slug, lang)}#${link.key}`.replace("/#", "/#")}
                className={`nav-link ${active === link.key ? "nav-link--active" : ""}`}
                aria-current={active === link.key ? "true" : undefined}
                data-umami-event={`nav-link-${link.key}`}
                onClick={() => setMobileOpen(false)}
              >
                {l(link, "label", lang)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Enlaces, no botones: el idioma es parte de la URL. Un
              crawler puede seguirlos y el visitante puede compartir la
              version en la que esta. */}
          <div className="lang-toggle">
            <Link
              href={hrefFor(slug, "es")}
              className={`lang-toggle-btn ${lang === "es" ? "lang-toggle-btn--active" : ""}`}
              hrefLang="es-MX"
              aria-current={lang === "es" ? "true" : undefined}
              aria-label="Español"
              data-umami-event="lang-switch-es"
            >
              ES
            </Link>
            <Link
              href={hrefFor(slug, "en")}
              className={`lang-toggle-btn ${lang === "en" ? "lang-toggle-btn--active" : ""}`}
              hrefLang="en"
              aria-current={lang === "en" ? "true" : undefined}
              aria-label="English"
              data-umami-event="lang-switch-en"
            >
              EN
            </Link>
          </div>

          <a href={`${hrefFor(slug, lang)}#find`.replace("/#", "/#")} className="btn btn-bordo nav-cta" data-umami-event="nav-cta-encuentranos">
            {l(t, "cta", lang)}
          </a>

          <button
            className={`nav-hamburger ${mobileOpen ? "nav-hamburger--open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            data-umami-event="nav-mobile-menu-toggle"
          >
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
            <span className="nav-hamburger-line" />
          </button>
        </div>
      </div>
    </nav>
  );
}
