import { getAllContent, type AllContent } from "@/sanity/queries";
import { fallbackContent, fallbackPrivacy } from "@/lib/fallback-content";
import HomePage from "@/components/HomePage";
import type { PrivacyContent, SiteContent } from "@/types/content";
import { urlFor } from "@/sanity/image";
import { cafeJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

export default async function Page() {
  let content: SiteContent = fallbackContent;
  let privacy: PrivacyContent = fallbackPrivacy;
  let sanityFailed = false;
  let cateringBanner_es =
    "catering y eventos · dos semanas de anticipacion · escribenos";
  let cateringBanner_en = "catering & events · two weeks ahead · write to us";
  let sanityData: AllContent | null = null;

  try {
    sanityData = await getAllContent();
    if (sanityData.heroSection) {
      content = {
        nav: sanityData.siteSettings
          ? {
              links: sanityData.siteSettings.navLinks ?? fallbackContent.nav.links,
              cta_es: fallbackContent.nav.cta_es,
              cta_en: fallbackContent.nav.cta_en,
            }
          : fallbackContent.nav,
        hero: sanityData.heroSection ?? fallbackContent.hero,
        about: sanityData.aboutSection
          ? { ...sanityData.aboutSection }
          : fallbackContent.about,
        menu:
          sanityData.menuItems.length > 0
            ? {
                ...fallbackContent.menu,
                items: sanityData.menuItems,
              }
            : fallbackContent.menu,
        experience:
          sanityData.experienceCards.length > 0
            ? {
                ...fallbackContent.experience,
                cards: sanityData.experienceCards,
              }
            : fallbackContent.experience,
        events: sanityData.eventsSection ?? fallbackContent.events,
        statement: sanityData.statementSection ?? fallbackContent.statement,
        find: sanityData.findSection ?? fallbackContent.find,
        footer: sanityData.footerSection ?? fallbackContent.footer,
      };
    }

    if (sanityData.privacyNotice) {
      privacy = sanityData.privacyNotice;
    }

    if (sanityData.siteSettings?.cateringBanner_es) {
      cateringBanner_es = sanityData.siteSettings.cateringBanner_es;
    }
    if (sanityData.siteSettings?.cateringBanner_en) {
      cateringBanner_en = sanityData.siteSettings.cateringBanner_en;
    }
  } catch (error) {
    // El respaldo mantiene la pagina en pie, pero el fallo tiene que
    // dejar rastro: el prefijo es buscable en los logs de Vercel y
    // FallbackBeacon lo reporta ademas como evento de Umami.
    sanityFailed = true;
    console.error(
      "[tulipan58][sanity-fallback] Sanity no respondio; sirviendo respaldo local.",
      error,
    );
  }

  const heroImageUrl = sanityData?.heroSection?.heroImage
    ? urlFor(sanityData.heroSection.heroImage).width(1200).quality(80).url()
    : undefined;
  const aboutImageUrl = sanityData?.aboutSection?.aboutImage
    ? urlFor(sanityData.aboutSection.aboutImage).width(800).quality(80).url()
    : undefined;

  // Se deriva del mismo contenido que renderiza la pagina, no de una
  // segunda copia. El horario ya llego a decir tres cosas distintas en
  // tres sitios por no hacer esto.
  const jsonLd = cafeJsonLd({
    find: content.find,
    menu: content.menu,
    siteUrl: SITE_URL,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <HomePage
      lang="en"
      content={content}
      privacy={privacy}
      sanityFailed={sanityFailed}
      cateringBanner_es={cateringBanner_es}
      cateringBanner_en={cateringBanner_en}
      heroImageUrl={heroImageUrl}
      aboutImageUrl={aboutImageUrl}
    />
    </>
  );
}
