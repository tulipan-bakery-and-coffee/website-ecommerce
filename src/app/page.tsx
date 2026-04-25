import { getAllContent } from "@/sanity/queries";
import { fallbackContent } from "@/lib/fallback-content";
import HomePage from "@/components/HomePage";
import type { SiteContent } from "@/types/content";

export const revalidate = 60;

export default async function Page() {
  let content: SiteContent = fallbackContent;
  let cateringBanner_es =
    "catering y eventos · dos semanas de anticipacion · escribenos";
  let cateringBanner_en = "catering & events · two weeks ahead · write to us";

  try {
    const sanity = await getAllContent();

    if (sanity.heroSection) {
      content = {
        nav: sanity.siteSettings
          ? {
              links: sanity.siteSettings.navLinks ?? fallbackContent.nav.links,
              cta_es: fallbackContent.nav.cta_es,
              cta_en: fallbackContent.nav.cta_en,
            }
          : fallbackContent.nav,
        hero: sanity.heroSection ?? fallbackContent.hero,
        about: sanity.aboutSection
          ? { ...sanity.aboutSection }
          : fallbackContent.about,
        menu:
          sanity.menuItems.length > 0
            ? {
                ...fallbackContent.menu,
                items: sanity.menuItems,
              }
            : fallbackContent.menu,
        experience:
          sanity.experienceCards.length > 0
            ? {
                ...fallbackContent.experience,
                cards: sanity.experienceCards,
              }
            : fallbackContent.experience,
        events: sanity.eventsSection ?? fallbackContent.events,
        statement: sanity.statementSection ?? fallbackContent.statement,
        find: sanity.findSection ?? fallbackContent.find,
        footer: sanity.footerSection ?? fallbackContent.footer,
      };
    }

    if (sanity.siteSettings?.cateringBanner_es) {
      cateringBanner_es = sanity.siteSettings.cateringBanner_es;
    }
    if (sanity.siteSettings?.cateringBanner_en) {
      cateringBanner_en = sanity.siteSettings.cateringBanner_en;
    }
  } catch {
    // Sanity unavailable — use fallback content
  }

  return (
    <HomePage
      content={content}
      cateringBanner_es={cateringBanner_es}
      cateringBanner_en={cateringBanner_en}
    />
  );
}
