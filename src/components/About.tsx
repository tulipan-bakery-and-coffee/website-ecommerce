import Image from "next/image";
import Reveal from "./Reveal";
import type { Lang, AboutContent } from "@/types/content";
import { l } from "@/types/content";

interface AboutProps {
  t: AboutContent;
  lang: Lang;
  imageUrl?: string;
}

export default function About({ t, lang, imageUrl }: AboutProps) {
  return (
    <section className="section about" id="about">
      <div className="container">
        {/* ── Section head ─────────────────────────────────────── */}
        <Reveal className="section-head">
          <p className="eyebrow">{l(t, "eyebrow", lang)}</p>
          <h2 className="section-head-title">{l(t, "title", lang)}</h2>
        </Reveal>

        {/* ── Body ────────────────────────────────────────────── */}
        <div className="about-body">
          {/* Left: text */}
          <div className="about-text">
            <Reveal>
              <p className="about-paragraph">{l(t, "body1", lang)}</p>
            </Reveal>
            <Reveal delay={1}>
              <p className="about-paragraph">{l(t, "body2", lang)}</p>
            </Reveal>
            <Reveal delay={2}>
              <blockquote className="about-pull">
                {l(t, "pull", lang)}
              </blockquote>
            </Reveal>
          </div>

          {/* Right: photo */}
          <Reveal delay={1} className="about-visual">
            <Image
              src="/assets/isotipo-dark.webp"
              alt=""
              width={300}
              height={300}
              className="about-visual-isotipo"
              aria-hidden="true"
              loading="eager"
            />
            <div className="about-visual-meta">
              <span style={{ fontWeight: 700, letterSpacing: '0.22em' }}>02 / 04</span>
              <span>merida · yuc</span>
            </div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={l(t, "title", lang)}
                fill
                className="about-visual-photo"
                sizes="(max-width: 780px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="about-visual-placeholder">foto: barra / manos</div>
            )}
            <div className="about-visual-meta">
              <span>barra</span>
              <span>manos</span>
            </div>
          </Reveal>
        </div>

        {/* ── Stats row ───────────────────────────────────────── */}
        <div className="about-stats">
          {t.stats?.map((stat, i) => (
            <Reveal key={i} delay={i + 1} className="stat">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{l(stat, "label", lang)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
