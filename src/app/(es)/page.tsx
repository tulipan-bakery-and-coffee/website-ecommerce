import HomePage from "@/components/HomePage";
import { getSiteContent } from "@/lib/site-content";
import { urlFor } from "@/sanity/image";
import { cafeJsonLd } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

export default async function Page() {
  const { content, privacy, sanityFailed, sanityData } = await getSiteContent();

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
      lang="es"
      content={content}
      privacy={privacy}
      sanityFailed={sanityFailed}
      heroImageUrl={heroImageUrl}
      aboutImageUrl={aboutImageUrl}
    />
    </>
  );
}
