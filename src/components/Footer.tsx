import Image from "next/image";
import type { Lang, FooterContent, NavContent } from "@/types/content";
import { l } from "@/types/content";

interface FooterProps {
  t: FooterContent;
  nav: NavContent;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Footer({ t, nav, lang, setLang }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* ── Brand column ────────────────────────────────────── */}
        <div className="footer-col footer-col--brand">
          <div className="footer-brand">
            <Image
              src="/assets/wordmark-verde.webp"
              alt="Tulipan 58"
              width={40}
              height={40}
              className="footer-brand-icon"
            />
            <span className="footer-wordmark font-display">tulipan58</span>
          </div>
          <p className="footer-tagline">{l(t, "tagline", lang)}</p>
        </div>

        {/* ── Nav column ──────────────────────────────────────── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{l(t, "navLabel", lang)}</h4>
          <ul className="footer-list">
            {nav.links.map((link) => (
              <li key={link.key}>
                <a href={`#${link.key}`} className="footer-link">
                  {l(link, "label", lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Social column ───────────────────────────────────── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{l(t, "socialLabel", lang)}</h4>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* ── Links column ────────────────────────────────────── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{l(t, "linksLabel", lang)}</h4>
          <ul className="footer-list">
            <li>
              <button
                className={`footer-lang-btn ${lang === "es" ? "footer-lang-btn--active" : ""}`}
                onClick={() => setLang("es")}
              >
                Espanol
              </button>
            </li>
            <li>
              <button
                className={`footer-lang-btn ${lang === "en" ? "footer-lang-btn--active" : ""}`}
                onClick={() => setLang("en")}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="footer-bottom container">
        <p className="footer-legal">{l(t, "legal", lang)}</p>
        <p className="footer-credit">{l(t, "credit", lang)}</p>
      </div>
    </footer>
  );
}
