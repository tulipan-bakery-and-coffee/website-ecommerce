import { client } from "./client";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SiteSettings {
  navLinks: { key: string; label_es: string; label_en: string }[];
  cateringBanner_es: string;
  cateringBanner_en: string;
}

export interface HeroSection {
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
  heroImage: SanityImage;
}

export interface AboutSection {
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
  stats: { number: string; label_es: string; label_en: string }[];
  aboutImage: SanityImage;
}

export interface MenuItem {
  _id: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price: number;
  category: "hot" | "cold" | "method";
  order: number;
}

export interface ExperienceCard {
  _id: string;
  tag_es: string;
  tag_en: string;
  title_es: string;
  title_en: string;
  body_es: string;
  body_en: string;
  colorPair: "pair-tulipan" | "pair-bordo" | "pair-verde";
  order: number;
}

export interface EventsSection {
  eyebrow_es: string;
  eyebrow_en: string;
  title_es: string;
  title_en: string;
  body_es: string;
  body_en: string;
  bullets: { text_es: string; text_en: string }[];
  cta_es: string;
  cta_en: string;
}

export interface StatementSection {
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

export interface FindSection {
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

export interface FooterSection {
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

interface SanityImage {
  asset: { _ref: string; _type: string };
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface AllContent {
  siteSettings: SiteSettings | null;
  heroSection: HeroSection | null;
  aboutSection: AboutSection | null;
  menuItems: MenuItem[];
  experienceCards: ExperienceCard[];
  eventsSection: EventsSection | null;
  statementSection: StatementSection | null;
  findSection: FindSection | null;
  footerSection: FooterSection | null;
}

/* ------------------------------------------------------------------ */
/*  GROQ queries                                                       */
/* ------------------------------------------------------------------ */

const siteSettingsQuery = `*[_type == "siteSettings"][0]{ navLinks, cateringBanner_es, cateringBanner_en }`;

const heroSectionQuery = `*[_type == "heroSection"][0]{
  eyebrow_es, eyebrow_en,
  title1_es, title1_en, title2_es, title2_en, title3_es, title3_en,
  foot_es, foot_en,
  ctaPrimary_es, ctaPrimary_en,
  ctaSecondary_es, ctaSecondary_en,
  photoLabel_es, photoLabel_en,
  heroImage
}`;

const aboutSectionQuery = `*[_type == "aboutSection"][0]{
  eyebrow_es, eyebrow_en,
  title_es, title_en,
  body1_es, body1_en, body2_es, body2_en,
  pull_es, pull_en,
  stats,
  aboutImage
}`;

const menuItemsQuery = `*[_type == "menuItem"] | order(order asc){
  _id, name_es, name_en, description_es, description_en,
  price, category, order
}`;

const experienceCardsQuery = `*[_type == "experienceCard"] | order(order asc){
  _id, tag_es, tag_en, title_es, title_en,
  body_es, body_en, colorPair, order
}`;

const eventsSectionQuery = `*[_type == "eventsSection"][0]{
  eyebrow_es, eyebrow_en,
  title_es, title_en,
  body_es, body_en,
  bullets,
  cta_es, cta_en
}`;

const statementSectionQuery = `*[_type == "statementSection"][0]{
  body1_es, body1_en, body2_es, body2_en,
  body3_es, body3_en, body4_es, body4_en,
  foot_es, foot_en
}`;

const findSectionQuery = `*[_type == "findSection"][0]{
  eyebrow_es, eyebrow_en,
  title_es, title_en,
  addressLabel_es, addressLabel_en, address,
  hoursLabel_es, hoursLabel_en,
  hours1_es, hours1_en, hours2_es, hours2_en,
  contactLabel_es, contactLabel_en,
  instagram, whatsapp, website,
  ctaMap_es, ctaMap_en, ctaWa_es, ctaWa_en,
  mapLabel_es, mapLabel_en, mapsUrl, mapEmbedUrl
}`;

const footerSectionQuery = `*[_type == "footerSection"][0]{
  tagline_es, tagline_en,
  navLabel_es, navLabel_en,
  socialLabel_es, socialLabel_en,
  linksLabel_es, linksLabel_en,
  legal_es, legal_en,
  credit_es, credit_en
}`;

/* ------------------------------------------------------------------ */
/*  Fetch functions                                                    */
/* ------------------------------------------------------------------ */

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(siteSettingsQuery);
}

export async function getHeroSection(): Promise<HeroSection | null> {
  return client.fetch<HeroSection | null>(heroSectionQuery);
}

export async function getAboutSection(): Promise<AboutSection | null> {
  return client.fetch<AboutSection | null>(aboutSectionQuery);
}

export async function getMenuItems(): Promise<MenuItem[]> {
  return client.fetch<MenuItem[]>(menuItemsQuery);
}

export async function getExperienceCards(): Promise<ExperienceCard[]> {
  return client.fetch<ExperienceCard[]>(experienceCardsQuery);
}

export async function getEventsSection(): Promise<EventsSection | null> {
  return client.fetch<EventsSection | null>(eventsSectionQuery);
}

export async function getStatementSection(): Promise<StatementSection | null> {
  return client.fetch<StatementSection | null>(statementSectionQuery);
}

export async function getFindSection(): Promise<FindSection | null> {
  return client.fetch<FindSection | null>(findSectionQuery);
}

export async function getFooterSection(): Promise<FooterSection | null> {
  return client.fetch<FooterSection | null>(footerSectionQuery);
}

export async function getAllContent(): Promise<AllContent> {
  const [
    siteSettings,
    heroSection,
    aboutSection,
    menuItems,
    experienceCards,
    eventsSection,
    statementSection,
    findSection,
    footerSection,
  ] = await Promise.all([
    getSiteSettings(),
    getHeroSection(),
    getAboutSection(),
    getMenuItems(),
    getExperienceCards(),
    getEventsSection(),
    getStatementSection(),
    getFindSection(),
    getFooterSection(),
  ]);

  return {
    siteSettings,
    heroSection,
    aboutSection,
    menuItems,
    experienceCards,
    eventsSection,
    statementSection,
    findSection,
    footerSection,
  };
}
