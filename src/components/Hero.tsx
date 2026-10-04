import Image from "next/image";
import Reveal from "./Reveal";
import type { Lang, HeroContent } from "@/types/content";
import { l } from "@/types/content";

interface HeroProps {
  t: HeroContent;
  lang: Lang;
  imageUrl?: string;
}

export default function Hero({ t, lang, imageUrl }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid container">
        <div className="hero-copy">
          <h1 className="hero-title">
            <Reveal as="span" className="hero-title-line hero-title-line--1">
              {l(t, "title1", lang)}
            </Reveal>
            <Reveal as="span" delay={1} className="hero-title-line hero-title-line--2">
              {l(t, "title2", lang)}
            </Reveal>
            <Reveal as="span" delay={2} className="hero-title-line hero-title-line--3">
              {l(t, "title3", lang)}
            </Reveal>
          </h1>

          <Reveal delay={3}>
            <p className="hero-foot">
              <span className="hero-foot-dash" aria-hidden="true">--</span>{" "}
              {l(t, "foot", lang)}
            </p>
          </Reveal>

          <Reveal delay={4} className="hero-ctas">
            <a href="#menu" className="btn btn-bordo" data-umami-event="hero-cta-ver-menu">
              {l(t, "ctaPrimary", lang)}
            </a>
            <a href="#find" className="btn btn-ghost" data-umami-event="hero-cta-como-llegar">
              {l(t, "ctaSecondary", lang)}
            </a>
            {/* Tercer nivel en texto plano: el organizador de evento no
                tenia ninguna superficie en el primer pantallazo, y es la
                linea de mayor ticket. Un tercer boton relleno seria peor
                que el problema. */}
            {l(t, "ctaTertiary", lang) ? (
              <a href="#events" className="link-tertiary" data-umami-event="hero-cta-eventos">
                {l(t, "ctaTertiary", lang)}
              </a>
            ) : null}
          </Reveal>
        </div>

        <Reveal delay={2} className="hero-visual">
          <div className="hero-visual-bg">
            <Image
              src="/assets/isotipo-dark.webp"
              alt=""
              width={400}
              height={400}
              className="hero-visual-isotipo"
              aria-hidden="true"
              loading="eager"
            />
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={l(t, "photoLabel", lang)}
                fill
                className="hero-visual-photo"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="hero-visual-placeholder">
                <span className="hero-visual-placeholder-label">
                  {l(t, "photoLabel", lang)}
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
