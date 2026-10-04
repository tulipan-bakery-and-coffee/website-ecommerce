"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang, PrivacyContent } from "@/types/content";
import { l } from "@/types/content";

interface PrivacyNoticeProps {
  t: PrivacyContent;
  lang: Lang;
}

/**
 * Aviso de privacidad sin ruteo: el visitante no abandona la pagina.
 *
 * Usa <dialog> nativo en lugar de un div con overlay. Lo nativo trae
 * gratis el atrapado de foco, el cierre con Escape, el inerte del resto
 * del documento y el papel de capa superior sin pelear con z-index.
 *
 * El panel es un bloque de color pleno, no una tarjeta flotante con
 * sombra: DESIGN.md prohibe sombras en reposo, y un modal con sombra
 * las reintroduciria en la pieza mas visible del sitio.
 */
export default function PrivacyNotice({ t, lang }: PrivacyNoticeProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  // Escape cierra por su cuenta, pero sin esto el estado de React se
  // queda creyendo que sigue abierto.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClose = () => setOpen(false);
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  function show() {
    ref.current?.showModal();
    setOpen(true);
  }

  const body = l(t, "body", lang) ?? "";
  const paragraphs = body.split(/\n\s*\n/).filter((p) => p.trim().length > 0);

  return (
    <>
      <button
        type="button"
        className="footer-legal-link"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        data-umami-event="footer-privacidad-abrir"
      >
        {l(t, "linkLabel", lang)}
      </button>

      <dialog ref={ref} className="privacy" aria-labelledby="privacy-title">
        <div className="privacy-inner">
          <h2 id="privacy-title" className="privacy-title">
            {l(t, "title", lang)}
          </h2>

          <div className="privacy-body">
            {paragraphs.map((p, i) => (
              <p key={i}>{p.trim()}</p>
            ))}
          </div>

          <div className="privacy-foot">
            {t.updated ? (
              <span className="privacy-updated">
                {lang === "es" ? "Actualizado" : "Updated"} · {t.updated}
              </span>
            ) : (
              <span />
            )}
            <button
              type="button"
              className="btn btn-ghost privacy-close"
              onClick={() => ref.current?.close()}
              data-umami-event="footer-privacidad-cerrar"
            >
              {l(t, "closeLabel", lang)}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
