"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

/**
 * Cuando Sanity falla, el sitio cae al respaldo local y sigue sirviendo
 * contenido. Eso es correcto para el visitante y malo para quien lo
 * mantiene: el fallo es invisible y los datos pueden quedarse viejos
 * indefinidamente. Ya paso una vez con direccion y horario.
 *
 * Esto deja rastro observable sin romper nada: un evento en Umami, que
 * es la analitica que el sitio ya carga. Si aparece en el panel, Sanity
 * no esta respondiendo.
 */
export default function FallbackBeacon() {
  useEffect(() => {
    window.umami?.track("sanity-fallback");
  }, []);

  return null;
}
