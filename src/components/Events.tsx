import Image from "next/image";
import Reveal from "./Reveal";
import type { Lang, EventsContent } from "@/types/content";
import { l } from "@/types/content";

interface EventsProps {
  t: EventsContent;
  lang: Lang;
}

export default function Events({ t, lang }: EventsProps) {
  return (
    <section className="section events" id="events">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">{l(t, "eyebrow", lang)}</p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-head-title">{l(t, "title", lang)}</h2>
          </Reveal>
        </div>

        <div className="events-body">
          {/* Left column: text */}
          <Reveal className="events-text">
            <p>{l(t, "body", lang)}</p>
            <ul className="events-bullets">
              {t.bullets?.map((bullet, i) => (
                <li key={i}>{l(bullet, "text", lang)}</li>
              ))}
            </ul>
            <a href="#find" className="btn btn-verde">
              {l(t, "cta", lang)}
            </a>
          </Reveal>

          {/* Right column: visual */}
          <Reveal delay={1} className="events-visual">
            <div className="events-ring" />
            <div className="events-ring-2" />
            <div className="events-orbit animate-orbit">
              <svg viewBox="0 0 300 300" width="100%" height="100%" aria-hidden="true">
                <defs>
                  <path id="orbit" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
                </defs>
                <text style={{
                  fontFamily: '"Basis Grotesque Mono Pro", monospace',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase' as const,
                  fill: 'rgba(255,237,187,0.8)',
                }}>
                  <textPath href="#orbit" startOffset="0">
                    · catering · eventos · bodas · oficinas · aperturas · domingos de mercado ·
                  </textPath>
                </text>
              </svg>
            </div>
            <Image
              src="/assets/seal-58.webp"
              alt="tulipan58"
              width={200}
              height={200}
              className="events-visual-seal"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
