"use client";

import {
  useRef,
  useEffect,
  createElement,
  type ElementType,
  type ReactNode,
  type HTMLAttributes,
} from "react";

/* ── useReveal hook ───────────────────────────────────────────────── */

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Reveal wrapper component ─────────────────────────────────────── */

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
  children?: ReactNode;
}

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: RevealProps) {
  const ref = useReveal<HTMLElement>();

  const classes = [
    "reveal",
    delay > 0 ? `delay-${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(Tag, { ref, className: classes, ...rest }, children);
}
