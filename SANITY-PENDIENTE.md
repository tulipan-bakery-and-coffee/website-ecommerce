# Correcciones pendientes en Sanity Studio

Dos campos publicados contradicen los datos reales del negocio. No se pudieron aplicar desde aquí: el MCP de Sanity responde `bearer token is invalid or expired` y el CLI (`npx sanity documents`) solo lee, no tiene comando de parche.

Entrar a `tulipan.mx/studio` y pegar estos valores. Después borrar este archivo.

---

## 1. Find Us Section → Title

Los campos `title_es` y `title_en` están vacíos en Sanity.

**Corrección respecto a lo que decía antes este archivo:** el sitio *no* cae al respaldo. `src/app/page.tsx` hace `sanityData.findSection ?? fallbackContent.find`, y el documento de Sanity existe, así que reemplaza el objeto entero. El título sale **vacío**, no con el texto del respaldo. Verificado en el render: `<h2 class="section-head-title"></h2>`.

La sección más consecuente del sitio tenía eyebrow y después nada. El código ya no renderiza un encabezado vacío, pero eso solo evita el defecto de accesibilidad: la sección sigue sin titular hasta que publiques estos campos.

| Campo | Valor |
|---|---|
| `Title (ES)` | `Gran Santa Fe, Mérida.` |
| `Title (EN)` | `Gran Santa Fe, Mérida.` |

El punto final es parte del gesto tipográfico de los titulares de sección; conservarlo.

---

## 2. Una intención, dos etiquetas

El nav dice **"Encuéntranos"** y el Hero dice **"Cómo llegar"** para la misma intención y el mismo destino (`#find`). Las dos cadenas viven en Sanity, así que la unificación no se puede hacer desde el código.

| Documento | Campo | Dice hoy |
|---|---|---|
| `siteSettings` → navLinks (key `find`) | `Label (ES)` / `Label (EN)` | Encuéntranos / Find us |
| `heroSection` | `CTA Secondary (ES)` / `(EN)` | Cómo llegar / Directions |

Elegir una pareja y usarla en los dos sitios. "Cómo llegar" es más accionable para alguien que está decidiendo si maneja; "Encuéntranos" encaja mejor como etiqueta de sección. No las mezcles.

No cambies el `data-umami-event`: la serie de analítica se llama `hero-cta-como-llegar` y renombrarla corta el histórico.

---

## 2. Hero Section → Foot

Dice que abre a las 7:30 mientras la sección Find publica 7:00. Dos partes de la misma página se contradicen.

| Campo | Valor actual | Valor correcto |
|---|---|---|
| `Foot (ES)` | `Tulipán 58 — abierto desde las 7:30` | `Tulipán 58 — abierto desde las 7:00` |
| `Foot (EN)` | `Tulipán 58 — open from 7:30` | `Tulipán 58 — open from 7:00` |

Si el 7:30 es el correcto y el que está mal es el horario de la sección Find, entonces lo que hay que corregir es `Hours Line 1` en las dos lenguas, y avisar para actualizar `PRODUCT.md`, `BRAND-BRIEF.md` y el respaldo local.

---

## 4. About Section → las tres cifras

Dos de las tres están mal. La del medio es el tercer sitio del proyecto donde aparece un horario incorrecto.

| Cifra | Etiqueta publicada hoy | Qué hacer |
|---|---|---|
| `58` | "Un número profesional" | Texto de relleno. Reemplazar por `la calle que nos nombra` / `the street that named us` |
| `7:30` | "abrimos, de lunes a sábado" | **Falso.** Debe decir `7:00` con etiqueta `abrimos, de miércoles a sábado` / `we open, wed to sat` |
| `24 h` | "reposo del cold brew" | Correcta, coincide con el menú. No tocar |

El respaldo local ya quedó corregido, pero Sanity gana: hasta publicar esto, el sitio sigue diciendo que abre a las 7:30 de lunes a sábado.

---

## 5. Hero Section → CTA Tertiary (campo nuevo)

El esquema `heroSection` tiene dos campos nuevos, `ctaTertiary_es` y `ctaTertiary_en`. Son un enlace de texto plano hacia `#events`, no un tercer botón.

Existen porque el organizador de evento no tenía ninguna superficie en el primer pantallazo, y `PRODUCT.md` lo nombra como la línea de mayor ticket.

| Campo | Valor sugerido |
|---|---|
| `CTA Tertiary (ES)` | `¿Evento? Barra móvil` |
| `CTA Tertiary (EN)` | `Hosting something? Mobile bar` |

Mientras estén vacíos el enlace no se renderiza, así que no hay prisa ni riesgo. Pero tampoco aparece.

---

## 6. Voz mezclada en los eyebrows

Los eyebrows que quedan están en dos voces: `Sobre nosotros` y `Encuéntranos` capitalizados, `menu` en minúsculas. Unificar a capitalización normal con acentos, según la decisión de abajo.

Los de Experience y Events ya no se renderizan, pero sus campos siguen existiendo en Sanity. Dejarlos o vaciarlos, da igual: el componente ya no los lee.

---

## 7. Aviso de Privacidad → publicar el documento

Hay un tipo nuevo en el esquema, **Aviso de Privacidad**. Mientras no exista el documento publicado, el sitio usa el texto de respaldo que está en `src/lib/fallback-content.ts` y funciona igual.

Conviene publicarlo igual: el punto de que viva en Sanity es que puedas editarlo sin tocar código cuando cambie lo que mide Umami o cuando aparezca otro servicio de terceros.

Campos: etiqueta del enlace, título, cuerpo y etiqueta de cerrar, en ES y EN, más la fecha de última actualización. El cuerpo separa párrafos por línea en blanco.

Para arrancar, copia el texto del respaldo y ponle acentos: el de respaldo está sin ellos.

---

## Decisión de voz, para todo lo que se escriba de aquí en adelante

Capitalización normal con acentos: `Encuéntranos`, `Dirección`, `El café que camina contigo.` No minúsculas sin acentos.

El respaldo local en `src/lib/fallback-content.ts` ya está alineado en la sección Find. Las demás secciones del respaldo (hero, about, menu, experience, events, statement, footer, nav) todavía están escritas en la voz vieja en minúsculas. Solo se ven si Sanity deja de responder, pero conviene alinearlas.

---

## Fuera de Sanity

El mapa decorativo en SVG de `src/components/Find.tsx` dibuja calles del centro de Mérida con un pin marcado "58". Hoy no se renderiza porque `mapEmbedUrl` está cargado en Sanity y el componente prefiere el iframe. Si alguien borra ese campo, vuelve a aparecer un mapa falso del lugar equivocado. Vale la pena borrar el SVG o reemplazar el respaldo por algo que no simule una ubicación.
