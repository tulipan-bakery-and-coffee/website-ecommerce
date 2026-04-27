/* ── Content type definitions for Tulipan58 ──────────────────────── */

export type Lang = "es" | "en";

/** Helper: pick the right field based on language */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function l(obj: any, field: string, lang: Lang): string {
  return (obj[`${field}_${lang}`] as string) ?? (obj[`${field}_es`] as string) ?? "";
}

/* ── Nav ──────────────────────────────────────────────────────────── */

export interface NavLink {
  key: string;
  label_es: string;
  label_en: string;
}

export interface NavContent {
  links: NavLink[];
  cta_es: string;
  cta_en: string;
}

/* ── Hero ─────────────────────────────────────────────────────────── */

export interface HeroContent {
  eyebrow_es: string;
  eyebrow_en: string;
  title1_es: string;
  title1_en: string;
  title2_es: string;
  title2_en: string;
  title3_es: string;
  title3_en: string;
  foot_es: string;
  foot_en: string;
  ctaPrimary_es: string;
  ctaPrimary_en: string;
  ctaSecondary_es: string;
  ctaSecondary_en: string;
  photoLabel_es: string;
  photoLabel_en: string;
}

/* ── About ────────────────────────────────────────────────────────── */

export interface AboutStat {
  number: string;
  label_es: string;
  label_en: string;
}

export interface AboutContent {
  eyebrow_es: string;
  eyebrow_en: string;
  title_es: string;
  title_en: string;
  body1_es: string;
  body1_en: string;
  body2_es: string;
  body2_en: string;
  pull_es: string;
  pull_en: string;
  stats: AboutStat[];
}

/* ── Menu ─────────────────────────────────────────────────────────── */

export interface MenuItem {
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price: number;
  category: "hot" | "cold" | "method";
  order: number;
}

export interface MenuContent {
  eyebrow_es: string;
  eyebrow_en: string;
  title_es: string;
  title_en: string;
  note_es: string;
  note_en: string;
  cta_es: string;
  cta_en: string;
  filterAll_es: string;
  filterAll_en: string;
  filterHot_es: string;
  filterHot_en: string;
  filterCold_es: string;
  filterCold_en: string;
  filterMethod_es: string;
  filterMethod_en: string;
  items: MenuItem[];
}

/* ── Experience ───────────────────────────────────────────────────── */

export interface ExperienceCard {
  tag_es: string;
  tag_en: string;
  title_es: string;
  title_en: string;
  body_es: string;
  body_en: string;
  colorPair: "pair-tulipan" | "pair-bordo" | "pair-verde";
  order: number;
}

export interface ExperienceContent {
  eyebrow_es: string;
  eyebrow_en: string;
  title_es: string;
  title_en: string;
  cards: ExperienceCard[];
}

/* ── Events ───────────────────────────────────────────────────────── */

export interface EventBullet {
  text_es: string;
  text_en: string;
}

export interface EventsContent {
  eyebrow_es: string;
  eyebrow_en: string;
  title_es: string;
  title_en: string;
  body_es: string;
  body_en: string;
  bullets: EventBullet[];
  cta_es: string;
  cta_en: string;
}

/* ── Statement ────────────────────────────────────────────────────── */

export interface StatementContent {
  body1_es: string;
  body1_en: string;
  body2_es: string;
  body2_en: string;
  body3_es: string;
  body3_en: string;
  body4_es: string;
  body4_en: string;
  foot_es: string;
  foot_en: string;
}

/* ── Find ─────────────────────────────────────────────────────────── */

export interface FindContent {
  eyebrow_es: string;
  eyebrow_en: string;
  title_es: string;
  title_en: string;
  addressLabel_es: string;
  addressLabel_en: string;
  address: string;
  hoursLabel_es: string;
  hoursLabel_en: string;
  hours1_es: string;
  hours1_en: string;
  hours2_es: string;
  hours2_en: string;
  contactLabel_es: string;
  contactLabel_en: string;
  instagram: string;
  whatsapp: string;
  website: string;
  ctaMap_es: string;
  ctaMap_en: string;
  ctaWa_es: string;
  ctaWa_en: string;
  mapLabel_es: string;
  mapLabel_en: string;
  mapsUrl: string;
  mapEmbedUrl?: string;
}

/* ── Footer ───────────────────────────────────────────────────────── */

export interface FooterContent {
  tagline_es: string;
  tagline_en: string;
  navLabel_es: string;
  navLabel_en: string;
  socialLabel_es: string;
  socialLabel_en: string;
  linksLabel_es: string;
  linksLabel_en: string;
  legal_es: string;
  legal_en: string;
  credit_es: string;
  credit_en: string;
}

/* ── Aggregate ────────────────────────────────────────────────────── */

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  menu: MenuContent;
  experience: ExperienceContent;
  events: EventsContent;
  statement: StatementContent;
  find: FindContent;
  footer: FooterContent;
}
