import { getSiteContent } from "@/lib/site-content";
import { buildLlmsTxt } from "@/lib/llms-txt";

export const revalidate = 60;

/** /llms.txt en español. El documento y su porque viven en lib/llms-txt. */
export async function GET() {
  const { content } = await getSiteContent();

  return new Response(buildLlmsTxt(content, "es"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=60, stale-while-revalidate=86400",
    },
  });
}
