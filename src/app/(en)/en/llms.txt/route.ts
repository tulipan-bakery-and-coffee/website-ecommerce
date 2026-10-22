import { getSiteContent } from "@/lib/site-content";
import { buildLlmsTxt } from "@/lib/llms-txt";

export const revalidate = 60;

/** /en/llms.txt. Cuelga del grupo (en) como el resto del ingles. */
export async function GET() {
  const { content } = await getSiteContent();

  return new Response(buildLlmsTxt(content, "en"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=86400",
    },
  });
}
