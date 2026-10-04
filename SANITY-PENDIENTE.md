# Correcciones pendientes en Sanity Studio

Dos campos publicados contradicen los datos reales del negocio. No se pudieron aplicar desde aquí: el MCP de Sanity responde `bearer token is invalid or expired` y el CLI (`npx sanity documents`) solo lee, no tiene comando de parche.

Entrar a `tulipan.mx/studio` y pegar estos valores. Después borrar este archivo.

---

## 1. Find Us Section → Title

Los campos `title_es` y `title_en` están vacíos. El sitio cae al respaldo local y publica **"calle tulipan 58."** como titular — una calle que no es el domicilio.

| Campo | Valor |
|---|---|
| `Title (ES)` | `Gran Santa Fe, Mérida.` |
| `Title (EN)` | `Gran Santa Fe, Mérida.` |

El punto final es parte del gesto tipográfico de los titulares de sección; conservarlo.

---

## 2. Hero Section → Foot

Dice que abre a las 7:30 mientras la sección Find publica 7:00. Dos partes de la misma página se contradicen.

| Campo | Valor actual | Valor correcto |
|---|---|---|
| `Foot (ES)` | `Tulipán 58 — abierto desde las 7:30` | `Tulipán 58 — abierto desde las 7:00` |
| `Foot (EN)` | `Tulipán 58 — open from 7:30` | `Tulipán 58 — open from 7:00` |

Si el 7:30 es el correcto y el que está mal es el horario de la sección Find, entonces lo que hay que corregir es `Hours Line 1` en las dos lenguas, y avisar para actualizar `PRODUCT.md`, `BRAND-BRIEF.md` y el respaldo local.

---

## Decisión de voz, para todo lo que se escriba de aquí en adelante

Capitalización normal con acentos: `Encuéntranos`, `Dirección`, `El café que camina contigo.` No minúsculas sin acentos.

El respaldo local en `src/lib/fallback-content.ts` ya está alineado en la sección Find. Las demás secciones del respaldo (hero, about, menu, experience, events, statement, footer, nav) todavía están escritas en la voz vieja en minúsculas. Solo se ven si Sanity deja de responder, pero conviene alinearlas.

---

## Fuera de Sanity

El mapa decorativo en SVG de `src/components/Find.tsx` dibuja calles del centro de Mérida con un pin marcado "58". Hoy no se renderiza porque `mapEmbedUrl` está cargado en Sanity y el componente prefiere el iframe. Si alguien borra ese campo, vuelve a aparecer un mapa falso del lugar equivocado. Vale la pena borrar el SVG o reemplazar el respaldo por algo que no simule una ubicación.
