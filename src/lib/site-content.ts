import { getAllContent, type AllContent } from "@/sanity/queries";
import { fallbackContent, fallbackPrivacy } from "@/lib/fallback-content";
import type { PrivacyContent, SiteContent } from "@/types/content";

export interface ContenidoResuelto {
  content: SiteContent;
  privacy: PrivacyContent;
  /** Sanity no respondio y se esta sirviendo el respaldo local. */
  sanityFailed: boolean;
  /** Crudo, para lo que necesita imagenes o campos sin mapear. */
  sanityData: AllContent | null;
}

/**
 * Resuelve el contenido del sitio contra Sanity, con respaldo local.
 *
 * Vivia copiado en los dos page.tsx. /llms.txt habria sido la tercera
 * copia, y una tercera copia de la direccion o del horario se
 * desincroniza igual que se desincronizo antes: el horario llego a
 * decir tres cosas distintas en tres sitios. Una sola funcion.
 */
export async function getSiteContent(): Promise<ContenidoResuelto> {
  let content: SiteContent = fallbackContent;
  let privacy: PrivacyContent = fallbackPrivacy;
  let sanityFailed = false;
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
            ? { ...fallbackContent.menu, items: sanityData.menuItems }
            : fallbackContent.menu,
        experience:
          sanityData.experienceCards.length > 0
            ? { ...fallbackContent.experience, cards: sanityData.experienceCards }
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

  return { content, privacy, sanityFailed, sanityData };
}
