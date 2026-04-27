import Reveal from "./Reveal";
import type { Lang, FindContent } from "@/types/content";
import { l } from "@/types/content";

interface FindProps {
  t: FindContent;
  lang: Lang;
}

export default function Find({ t, lang }: FindProps) {
  return (
    <section className="section find" id="find">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">{l(t, "eyebrow", lang)}</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-head-title">{l(t, "title", lang)}</h2>
          </Reveal>
        </div>

        <div className="find-body">
          <Reveal className="find-info">
            <div>
              <div className="info-block">
                <div className="info-label">{l(t, "addressLabel", lang)}</div>
                <div className="info-value">{t.address}</div>
              </div>
              <div className="info-block">
                <div className="info-label">{l(t, "hoursLabel", lang)}</div>
                <div className="info-value info-value--body">
                  <div>{l(t, "hours1", lang)}</div>
                  <div>{l(t, "hours2", lang)}</div>
                </div>
              </div>
              <div className="info-block">
                <div className="info-label">{l(t, "contactLabel", lang)}</div>
                <div className="info-value info-value--body">
                  {t.instagram && (
                    <a href={`https://instagram.com/${t.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" data-umami-event="contact-instagram">
                      ig · {t.instagram}
                    </a>
                  )}
                  {t.whatsapp && (
                    <a href={`https://wa.me/${t.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" data-umami-event="contact-whatsapp">
                      wa · {t.whatsapp}
                    </a>
                  )}
                  {t.website && (
                    <a href={`https://${t.website}`} target="_blank" rel="noopener noreferrer" data-umami-event="contact-website">
                      web · {t.website}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="find-ctas">
              {t.mapsUrl && (
                <a href={t.mapsUrl} className="btn btn-bordo" target="_blank" rel="noopener noreferrer" data-umami-event="cta-open-maps">
                  {l(t, "ctaMap", lang)}
                </a>
              )}
              {t.whatsapp && (
                <a href={`https://wa.me/${t.whatsapp.replace(/\D/g, "")}`} className="btn btn-ghost" target="_blank" rel="noopener noreferrer" data-umami-event="cta-whatsapp-message">
                  {l(t, "ctaWa", lang)}
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={1} className="find-map" aria-label="mapa">
            {t.mapEmbedUrl ? (
              <iframe
                src={t.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={l(t, "mapLabel", lang)}
              />
            ) : (
              <>
                <svg className="street-map" viewBox="0 0 600 500" preserveAspectRatio="none">
                  <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35">
                    <line x1="0" y1="80" x2="600" y2="80" />
                    <line x1="0" y1="180" x2="600" y2="180" />
                    <line x1="0" y1="280" x2="600" y2="280" strokeWidth="2.5" opacity="0.55" />
                    <line x1="0" y1="380" x2="600" y2="380" />
                    <line x1="0" y1="460" x2="600" y2="460" />
                    <line x1="90" y1="0" x2="90" y2="500" />
                    <line x1="200" y1="0" x2="200" y2="500" />
                    <line x1="300" y1="0" x2="300" y2="500" strokeWidth="2.5" opacity="0.55" />
                    <line x1="420" y1="0" x2="420" y2="500" />
                    <line x1="530" y1="0" x2="530" y2="500" />
                  </g>
                  <g fill="currentColor" opacity="0.55" fontFamily='"Basis Grotesque Mono Pro", monospace' fontSize="9" letterSpacing="1.5" style={{ textTransform: 'uppercase' as const }}>
                    <text x="310" y="75" fontWeight="700">calle tulipan</text>
                    <text x="305" y="275" fontWeight="400">av. reforma</text>
                    <text x="12" y="175" fontWeight="400">c. 60</text>
                    <text x="12" y="375" fontWeight="400">c. 62</text>
                  </g>
                  <g fill="currentColor" opacity="0.06">
                    <rect x="90" y="80" width="110" height="100" />
                    <rect x="200" y="180" width="100" height="100" />
                    <rect x="420" y="280" width="110" height="100" />
                    <rect x="300" y="380" width="120" height="80" />
                  </g>
                </svg>
                <div className="map-pin animate-pulse-pin" aria-label="ubicacion">58</div>
                <div className="map-label">{l(t, "mapLabel", lang)}</div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
