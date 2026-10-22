import Reveal from "./Reveal";
import type { Lang, FindContent } from "@/types/content";
import { l } from "@/types/content";
import { SITE_URL } from "@/lib/site";

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
          {l(t, "title", lang) ? (
            <Reveal delay={1}>
              <h2 className="section-head-title">{l(t, "title", lang)}</h2>
            </Reveal>
          ) : null}
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
                    <a href={SITE_URL} target="_blank" rel="noopener noreferrer" data-umami-event="contact-website">
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
              /* Sin iframe no se dibuja nada: el mapa SVG de relleno
                 trazaba calles del centro de Merida, que no es la
                 ubicacion. Un mapa falso miente; un bloque vacio no. */
              <span className="find-map-label">{l(t, "mapLabel", lang)}</span>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
