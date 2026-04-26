import Image from "next/image";
import Reveal from "./Reveal";
import type { Lang, StatementContent } from "@/types/content";
import { l } from "@/types/content";

interface StatementProps {
  t: StatementContent;
  lang: Lang;
}

export default function Statement({ t, lang }: StatementProps) {
  return (
    <section className="statement">
      <Image
        src="/assets/isotipo-dark.webp"
        alt=""
        width={400}
        height={400}
        className="statement-isotipo"
        aria-hidden="true"
        loading="eager"
      />
      <div className="container">
        <Reveal>
          <p className="statement-text">
            <span className="statement-faded">{l(t, "body1", lang)} </span>
            <span className="statement-faded">{l(t, "body2", lang)} </span>
            {l(t, "body3", lang)}{" "}
            {l(t, "body4", lang)}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <p className="statement-foot">{l(t, "foot", lang)}</p>
        </Reveal>
      </div>
    </section>
  );
}
