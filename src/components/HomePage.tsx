"use client";

import { useState } from "react";
import type { Lang, SiteContent } from "@/types/content";
import Nav from "./Nav";
import Ticker from "./Ticker";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Experience from "./Experience";
import Events from "./Events";
import Statement from "./Statement";
import Find from "./Find";
import Footer from "./Footer";
import { l } from "@/types/content";

interface HomePageProps {
  content: SiteContent;
  cateringBanner_es?: string;
  cateringBanner_en?: string;
  heroImageUrl?: string;
  aboutImageUrl?: string;
}

export default function HomePage({
  content,
  cateringBanner_es = "catering y eventos · dos semanas de anticipacion · escribenos",
  cateringBanner_en = "catering & events · two weeks ahead · write to us",
  heroImageUrl,
  aboutImageUrl,
}: HomePageProps) {
  const [lang, setLang] = useState<Lang>("es");

  const bannerText = lang === "es" ? cateringBanner_es : cateringBanner_en;

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={content.nav} />
      <Ticker text={bannerText} />
      <main>
        <Hero t={content.hero} lang={lang} imageUrl={heroImageUrl} />
        <About t={content.about} lang={lang} imageUrl={aboutImageUrl} />
        <Menu t={content.menu} lang={lang} />
        <Experience t={content.experience} lang={lang} />
        <Events t={content.events} lang={lang} />
        <Statement t={content.statement} lang={lang} />
        <Find t={content.find} lang={lang} />
      </main>
      <Footer t={content.footer} nav={content.nav} lang={lang} setLang={setLang} />
    </>
  );
}
