import UmamiTracker from "@/components/UmamiTracker";
import type { Lang } from "@/types/content";

/**
 * Cuerpo compartido por los dos layouts raiz.
 *
 * Hay dos porque <html lang> tiene que salir del servidor con el valor
 * correcto: si se ajustara con un efecto en cliente, un rastreador leeria
 * siempre lang="es" y el ingles seguiria siendo invisible, que es justo
 * lo que se esta arreglando.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang === "en" ? "en" : "es-MX"}>
      <body>
        {children}
        <UmamiTracker />
      </body>
    </html>
  );
}
