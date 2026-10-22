import type { Lang, PrivacyContent, SiteContent } from "@/types/content";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Experience from "./Experience";
import Events from "./Events";
import Statement from "./Statement";
import Find from "./Find";
import Footer from "./Footer";
import FallbackBeacon from "./FallbackBeacon";

interface HomePageProps {
  content: SiteContent;
  privacy: PrivacyContent;
  sanityFailed?: boolean;
  heroImageUrl?: string;
  aboutImageUrl?: string;
  /** Viene de la ruta, no de un estado: /es es la raiz, /en cuelga. */
  lang: Lang;
}

export default function HomePage({
  content,
  privacy,
  sanityFailed = false,
  heroImageUrl,
  aboutImageUrl,
  lang,
}: HomePageProps) {
  return (
    <>
      {sanityFailed ? <FallbackBeacon /> : null}
      <a className="skip-link" href="#contenido">
        {lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <Nav lang={lang} t={content.nav} slug="" />
      <main id="contenido" tabIndex={-1}>
        <Hero t={content.hero} lang={lang} imageUrl={heroImageUrl} />
        <About t={content.about} lang={lang} imageUrl={aboutImageUrl} />
        <Menu t={content.menu} lang={lang} />
        <Experience t={content.experience} lang={lang} />
        <Events t={content.events} lang={lang} />
        <Statement t={content.statement} lang={lang} />
        <Find t={content.find} lang={lang} />
      </main>
      <Footer t={content.footer} nav={content.nav} lang={lang} privacy={privacy} slug="" />
    </>
  );
}
