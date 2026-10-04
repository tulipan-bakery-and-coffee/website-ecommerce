"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import type { Lang, MenuContent, MenuItem } from "@/types/content";
import { l } from "@/types/content";

type Filter = "all" | "hot" | "cold" | "method";

interface MenuProps {
  t: MenuContent;
  lang: Lang;
}

export default function Menu({ t, lang }: MenuProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [swapping, setSwapping] = useState(false);
  const swapTimer = useRef<number | null>(null);

  // El cambio de filtro teletransportaba los platillos. Se apaga la
  // retícula, se intercambia el contenido y vuelve. Transición, no
  // keyframes, para que un segundo clic retome desde donde va.
  function pickFilter(next: Filter) {
    if (next === filter) return;
    if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
    setSwapping(true);
    swapTimer.current = window.setTimeout(() => {
      setFilter(next);
      setSwapping(false);
      swapTimer.current = null;
    }, 120);
  }

  useEffect(
    () => () => {
      if (swapTimer.current !== null) window.clearTimeout(swapTimer.current);
    },
    [],
  );

  const filtered: MenuItem[] =
    filter === "all"
      ? t.items
      : t.items.filter((item) => item.category === filter);

  const filters: { key: Filter; labelField: string }[] = [
    { key: "all", labelField: "filterAll" },
    { key: "hot", labelField: "filterHot" },
    { key: "cold", labelField: "filterCold" },
    { key: "method", labelField: "filterMethod" },
  ];

  return (
    <section className="menu" id="menu">
      <div className="container">
        <Reveal className="section-head section-head--light">
          <p className="eyebrow">{l(t, "eyebrow", lang)}</p>
          <h2 className="section-head-title">{l(t, "title", lang)}</h2>
        </Reveal>

        <Reveal className="menu-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`menu-filter ${filter === f.key ? "menu-filter--active" : ""}`}
              onClick={() => pickFilter(f.key)}
              data-umami-event={`menu-filter-${f.key}`}
            >
              {l(t, f.labelField, lang)}
            </button>
          ))}
        </Reveal>

        <div className={`menu-grid ${swapping ? "menu-grid--swapping" : ""}`}>
          {filtered.map((item, i) => (
            <Reveal key={i} delay={(i % 3) + 1} className="menu-item" data-umami-event={`menu-item-view-${l(item, "name", lang).replace(/\s+/g, "-")}`}>
              <div className="menu-item-head">
                <span className="menu-item-name">{l(item, "name", lang)}</span>
                <span className="menu-item-price">${item.price}</span>
              </div>
              <p className="menu-item-desc">{l(item, "description", lang)}</p>
              <span className="menu-item-arrow" aria-hidden="true">&rarr;</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="menu-footer">
          <p className="menu-note">
            <em>{l(t, "note", lang)}</em>
          </p>
          <a href="/menu" className="btn btn-ghost menu-cta" data-umami-event="menu-cta-full-menu">
            {l(t, "cta", lang)}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
