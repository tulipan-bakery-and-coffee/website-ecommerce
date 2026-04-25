"use client";

import { useState } from "react";
import Image from "next/image";
import type { Lang, NavContent } from "@/types/content";
import { l } from "@/types/content";

interface NavProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: NavContent;
}

export default function Nav({ lang, setLang, t }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <a href="#" className="nav-brand" data-umami-event="nav-logo-click">
          <Image
            src="/assets/isotipo-dark.webp"
            alt="Tulipan 58 isotipo"
            width={36}
            height={36}
            className="nav-brand-icon"
          />
          <span className="nav-wordmark font-display">tulipan58</span>
        </a>

        <ul className={`nav-links ${mobileOpen ? "nav-links--open" : ""}`}>
          {t.links.map((link) => (
            <li key={link.key}>
              <a
                href={`#${link.key}`}
                className="nav-link"
                data-umami-event={`nav-link-${link.key}`}
              >
                {l(link, "label", lang)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="lang-toggle">
            <button
              className={`lang-toggle-btn ${lang === "es" ? "lang-toggle-btn--active" : ""}`}
              onClick={() => setLang("es")}
              aria-label="Espanol"
              data-umami-event="lang-switch-es"
            >
              ES
            </button>
            <button
              className={`lang-toggle-btn ${lang === "en" ? "lang-toggle-btn--active" : ""}`}
              onClick={() => setLang("en")}
              aria-label="English"
              data-umami-event="lang-switch-en"
            >
              EN
            </button>
          </div>

          <a href="#find" className="btn btn-bordo nav-cta" data-umami-event="nav-cta-encuentranos">
            {l(t, "cta", lang)}
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
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
