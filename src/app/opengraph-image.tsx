import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Tulipán 58 - Café de especialidad en Gran Santa Fe, Caucel, Mérida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Tarjeta social. Se genera en build, no en cada request.
 *
 * Es tipografia pura a proposito: el isotipo vive en WebP y el renderer
 * de Satori no lo soporta. La marca es tipografica de todas formas.
 *
 * La composicion hereda la ficha de tueste del empaque: pares
 * etiqueta/valor separados por reglas de 1px. Lo que decide la visita
 * -donde y cuando- va en el dato, no en el eslogan.
 */
export default async function Image() {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const [display, mono] = await Promise.all([
    readFile(join(fontsDir, "Halenoir-Bold.otf")),
    readFile(join(fontsDir, "BasisGrotesqueMonoPro-Bold.ttf")),
  ]);

  const label = {
    fontFamily: "Mono",
    fontSize: 20,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "#787C41",
  };

  const value = {
    fontFamily: "Display",
    fontSize: 36,
    color: "#333333",
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFEDBB",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", ...label, color: "#787C41" }}>
          Café de especialidad
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Display",
            fontSize: 108,
            lineHeight: 0.92,
            letterSpacing: "-0.015em",
            color: "#333333",
          }}
        >
          <div style={{ display: "flex" }}>El café</div>
          <div style={{ display: "flex" }}>que camina</div>
          <div style={{ display: "flex", color: "#632E2E" }}>contigo.</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 72,
            borderTop: "1px solid rgba(51, 51, 51, 0.25)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", ...label }}>Dónde</div>
            <div style={{ display: "flex", ...value }}>
              Gran Santa Fe, Caucel
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", ...label }}>Cuándo</div>
            <div style={{ display: "flex", ...value }}>
              Mié a sáb 7:00-11:30
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Display", data: display, style: "normal", weight: 700 },
        { name: "Mono", data: mono, style: "normal", weight: 700 },
      ],
    },
  );
}
