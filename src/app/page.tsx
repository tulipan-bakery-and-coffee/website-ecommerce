import { getAllContent, type AllContent } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import HomePage from "@/components/HomePage";
import type { SiteContent } from "@/types/content";
import { urlFor } from "@/sanity/image";

export const revalidate = 60;

export default async function Page() {
  let content: SiteContent = fallbackContent;
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

    if (sanityData.siteSettings?.cateringBanner_es) {
      cateringBanner_es = sanityData.siteSettings.cateringBanner_es;
    }
    if (sanityData.siteSettings?.cateringBanner_en) {
      cateringBanner_en = sanityData.siteSettings.cateringBanner_en;
    }
  } catch {
    console.error("Failed to fetch content from Sanity. Using fallback content.");
  }

  const heroImageUrl = sanityData?.heroSection?.heroImage
    ? urlFor(sanityData.heroSection.heroImage).width(1200).quality(80).url()
    : undefined;
  const aboutImageUrl = sanityData?.aboutSection?.aboutImage
    ? urlFor(sanityData.aboutSection.aboutImage).width(800).quality(80).url()
    : undefined;

  return (
    <HomePage
      content={content}
      cateringBanner_es={cateringBanner_es}
      cateringBanner_en={cateringBanner_en}
      heroImageUrl={heroImageUrl}
      aboutImageUrl={aboutImageUrl}
    />
  );
}
