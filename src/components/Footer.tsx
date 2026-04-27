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
          <h4 className="footer-col-title">{l(t, "navLabel", lang)}</h4>
          <ul className="footer-list">
            {nav.links.map((link) => (
              <li key={link.key}>
                <a href={`#${link.key}`} className="footer-link" data-umami-event={`footer-nav-${link.key}`}>
                  {l(link, "label", lang)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">{l(t, "socialLabel", lang)}</h4>
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
          <h4 className="footer-col-title">{l(t, "linksLabel", lang)}</h4>
          <ul className="footer-list">
            <li>
              <a href="https://tulipan.mx" className="footer-link" target="_blank" rel="noopener noreferrer" data-umami-event="footer-link-website">
                tulipan.mx
              </a>
            </li>
            <li>
              <button
                className={`footer-lang-btn ${lang === "es" ? "footer-lang-btn--active" : ""}`}
                onClick={() => setLang("es")}
                data-umami-event="footer-lang-switch-es"
              >
                Espanol
              </button>
            </li>
            <li>
              <button
                className={`footer-lang-btn ${lang === "en" ? "footer-lang-btn--active" : ""}`}
                onClick={() => setLang("en")}
                data-umami-event="footer-lang-switch-en"
              >
                English
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p className="footer-legal">{l(t, "legal", lang)}</p>
        <p className="footer-credit">{l(t, "credit", lang)}</p>
      </div>
    </footer>
  );
}
