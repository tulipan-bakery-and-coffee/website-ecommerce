import Image from "next/image";
import Reveal from "./Reveal";
import type { Lang, ExperienceContent } from "@/types/content";
import { l } from "@/types/content";

interface ExperienceProps {
  t: ExperienceContent;
  lang: Lang;
}

export default function Experience({ t, lang }: ExperienceProps) {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        {/* ── Section head ─────────────────────────────────────── */}
        <Reveal className="section-head">
          <p className="eyebrow">{l(t, "eyebrow", lang)}</p>
          <h2 className="section-head-title">{l(t, "title", lang)}</h2>
        </Reveal>

        {/* ── Cards ───────────────────────────────────────────── */}
        <div className="exp-grid">
          {t.cards
            .sort((a, b) => a.order - b.order)
            .map((card, i) => (
              <Reveal
                key={i}
                delay={i + 1}
                className={`exp-card ${card.colorPair}`}
              >
                <Image
                  src="/assets/isotipo-dark.webp"
                  alt=""
                  width={200}
                  height={200}
                  className="exp-card-isotipo"
                  aria-hidden="true"
                />
                <span className="exp-tag">
                  {l(card, "tag", lang)}
                </span>
                <div>
                  <h3 className="exp-title">
                    {l(card, "title", lang)}
                  </h3>
                  <p className="exp-body">
                    {l(card, "body", lang)}
                  </p>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
