import Image from "next/image";
import Link from "next/link";
import { hrefFor, type Slug } from "@/lib/i18n";
import PrivacyNotice from "./PrivacyNotice";
import type { Lang, FooterContent, NavContent, PrivacyContent } from "@/types/content";
import { l } from "@/types/content";

interface FooterProps {
  t: FooterContent;
  nav: NavContent;
  lang: Lang;
  privacy: PrivacyContent;
  slug: Slug;
}

export default function Footer({ t, nav, lang, privacy, slug }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-top container">
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

        <div className="footer-col">
          <h2 className="footer-col-title">{l(t, "navLabel", lang)}</h2>
          <ul className="footer-list">
            {nav.links.map((link) => (
              <li key={link.key}>
                <a href={`${hrefFor(slug, lang)}#${link.key}`.replace("/#", "/#")} className="footer-link" data-umami-event={`footer-nav-${link.key}`}>
                  {l(link, "label", lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-col-title">{l(t, "socialLabel", lang)}</h2>
          <ul className="footer-list">
            <li>
              <a href="https://instagram.com/tulipan58mid" className="footer-link" target="_blank" rel="noopener noreferrer" data-umami-event="footer-social-instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/tulipan58mid" className="footer-link" target="_blank" rel="noopener noreferrer" data-umami-event="footer-social-facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/@tulipan58mid" className="footer-link" target="_blank" rel="noopener noreferrer" data-umami-event="footer-social-tiktok">
                TikTok
              </a>
            </li>
            <li>
              <a href="https://wa.me/5219844696732" className="footer-link" target="_blank" rel="noopener noreferrer" data-umami-event="footer-social-whatsapp">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-col-title">{l(t, "linksLabel", lang)}</h2>
          <ul className="footer-list">
            <li>
              <a href="https://tulipan.mx" className="footer-link" target="_blank" rel="noopener noreferrer" data-umami-event="footer-link-website">
                tulipan.mx
              </a>
            </li>
            <li>
              <Link
                href={hrefFor(slug, "es")}
                className={`footer-lang-btn ${lang === "es" ? "footer-lang-btn--active" : ""}`}
                hrefLang="es-MX"
                data-umami-event="footer-lang-switch-es"
              >
                Español
              </Link>
            </li>
            <li>
              <Link
                href={hrefFor(slug, "en")}
                className={`footer-lang-btn ${lang === "en" ? "footer-lang-btn--active" : ""}`}
                hrefLang="en"
                data-umami-event="footer-lang-switch-en"
              >
                English
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        {/* El <dialog> no puede vivir dentro de un <p>: este solo admite
            contenido de frase y aquello es contenido de flujo. HTML
            invalido, y rompia la hidratacion de React (error #418). El
            grupo es un <div> para que el dialogo sea hijo legitimo. */}
        <div className="footer-legal-group">
          <p className="footer-legal">{l(t, "legal", lang)}</p>
          <PrivacyNotice t={privacy} lang={lang} />
        </div>
        <p className="footer-credit">{l(t, "credit", lang)}</p>
      </div>
    </footer>
  );
}
