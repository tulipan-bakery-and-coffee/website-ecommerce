# Brand Brief — Tulipán 58

Fuente: brand kit y diseños de Canva del equipo `oBYb_-UxiOTftzbOWHvn5k`, leídos el 2026-10-03.
Este archivo es el insumo de dirección para `impeccable init`, `design-taste-frontend` y `redesign-existing-projects`.
Cuando `DESIGN.md` exista, `DESIGN.md` manda sobre este archivo en todo lo que sea implementación.

---

## 1. Identidad vigente vs. legacy

Canva contiene **dos identidades distintas**. Usar la equivocada es el error más caro posible en este proyecto.

### Vigente — "Tulipán 58"

Evidencia: flyer QR (`DAGTxsj9bFs`, actualizado 2026-09), etiquetas de café 100G/250G (`DAG6Gm-HKyg`, `DAG6HL2GUfQ`, 2025-11), tarjeta de evento (`DAHKE_k_8Y0`, 2026-09), brand kit "Branding Tulipán" (`kAHA_UIiFsU`).

- Nombre: **Tulipán 58** / `tulipan58`
- Tagline: **"El café que camina contigo"**
- Handle: **@tulipan58mid** (Instagram, Facebook, TikTok)
- Paleta: cremita `#FFEDBB` de fondo, bordo `#632E2E` de texto y acento, verde oliva en el isotipo, negro/café quemado en empaque
- Tipografía: display geométrica bold de peso alto + mono para cuerpo y metadata
- Isotipo: grano de café / tulipán, sólido, de una sola tinta

### Legacy — "Tulipán Bakery & Coffee"

Evidencia: tarjeta de presentación (`DAGaOVg3Iqs`, última actualización 2025-07), tarjeta de lealtad (`DAGaON970WA`, 2024-12).

- Azul marino + rosa/lila, logotipo serif, taza con tulipán
- Handle viejo: `@tulipanbkmid`
- **No usar en el sitio.** No tomar de aquí color, tipografía ni logotipo.

El documento "Tulipán" de 15 páginas (`DAG5V0wT5sw`) no es un manual de marca: es una colección de posts sociales que todavía contiene placeholders de plantilla de Canva ("larana travels", "reallygreatsite", "sitioincreible"). No usar como referencia de dirección.

---

## 2. El sitio ya está alineado

`src/app/globals.css` implementa la identidad vigente, con tokens nombrados en español:

| Token | Valor | Rol |
|---|---|---|
| `--color-cremita-cafe` | `#FFEDBB` | fondo base |
| `--color-roso-pausar` | `#632E2E` | acento primario, secciones oscuras |
| `--color-verde-caminante` | `#787C41` | isotipo, labels, Statement |
| `--color-verde-caminante-deep` | `#5F6234` | ticker, hover de `.btn-verde` |
| `--color-cafe-quemado` | `#333333` | texto, secciones de contraste |
| `--color-tulipan` | `#CCDBF8` | acento frío, usado con reserva |
| `--font-display` | Halenoir Bold | títulos |
| `--font-body` | Basis Grotesque Mono Pro | cuerpo, metadata, eyebrows |

Esto coincide con el flyer vigente y el brand kit. **Conclusión: el trabajo de diseño es refinamiento, no reemplazo.** Ninguna skill debe proponer una paleta o tipografía nueva.

---

## 3. Gramática visual heredada del empaque

Las etiquetas de café son el artefacto de marca más desarrollado. Lo que establecen, y que el sitio debe honrar:

- **Ficha técnica como lenguaje.** Pares etiqueta/valor en caps pequeñas: Proceso / Región / Nivel de tueste / Neto / Fecha de tueste. Ya aparece en el sitio como `.hero-visual-meta` y `.info-block`; es correcto y debe extenderse, no reducirse.
- **Tracking amplio en caps.** `0.14em`–`0.22em` para eyebrows y metadata. Ya es el estándar del CSS.
- **Capitalización normal con acentos.** Decidido el 2026-10-03: `Encuéntranos`, `Dirección`, `El café que camina contigo.` Es la voz que Sanity ya publica. El respaldo local todavía tiene secciones en la voz vieja de minúsculas sin acentos; están pendientes de alinear y solo se ven si Sanity deja de responder.
- **Una tinta por superficie.** El empaque nunca mezcla más de dos colores de marca en una misma pieza. Las secciones del sitio ya siguen esto (menu = bordo, statement = verde, events = oscuro).
- **El isotipo como textura, no como logo repetido.** En el empaque aparece en patrón de borde; en el sitio aparece recortado a baja opacidad. Coherente.

---

## 4. Producto y contenido

- Café de especialidad, tostado propio, origen Veracruz.
- SKUs documentados: **Amanecer** (lavado, La Laja Veracruz, tueste medio-oscuro, para espresso — "intenso y dulce") y **Pausa** (honey, Xico Veracruz, tueste medio, para filtrados — "frutal y suave").
- Formatos: 100G y 250G.
- Repostería **de acompañamiento**, no línea propia: galletas de gragea, de mermelada, besitos de nuez, triple chocolate, brownie. Al revés de la cafetería tradicional, aquí el café manda y la repostería existe para acompañarlo. No se le da jerarquía visual ni de contenido por encima del café.
- Línea de negocio secundaria: **barra de café para eventos**.
- Mercado: Gran Santa Fe, Caucel, Mérida. Las tres capas se nombran: fraccionamiento, comisaría y municipio. Español e inglés con la misma calidad de copy y de diseño: hay público extranjero real.

---

## 5. Datos operativos

**La autoridad es Sanity, no Canva.** El documento `findSection` publicado (última edición 2026-04-27) es más reciente que las piezas de Canva y contiene los datos correctos. Canva quedó desactualizado.

| Dato | Valor vigente (Sanity) | Lo que dice Canva |
|---|---|---|
| Dirección | C. 11C Norte, Gran Santa Fe, Mérida, Yuc. | Calle 11C, Gran Santa Fé Norte, Caucel |
| Horario | Mié–Sáb 7:00–11:30 · Dom 8:00–12:00 | Mié–Sáb 7:30–11:40 · Dom 8:00–11:40 |
| Contacto | WhatsApp +52 1 984 469 6732 | Tel 999 361 9285 |
| Web | tulipan.mx | — |
| Redes | @tulipan58mid | @tulipan58mid |

`src/lib/fallback-content.ts` ya está alineado a estos valores, igual que la descripción de metadatos en `src/app/layout.tsx`.

Dos piezas de Canva quedaron obsoletas y habría que corregirlas en el origen: el teléfono `999 361 9285` de la tarjeta de presentación, que no es el canal vigente, y el horario del flyer y la tarjeta de evento.

### Estado en producción

Resuelto el 2026-10-04. Los campos que faltaban se publicaron en Sanity desde el MCP: el titular de Find, el horario del Hero, las tres cifras de About, las coordenadas, el horario legible por máquina, el CTA terciario y el documento del aviso de privacidad. `SANITY-PENDIENTE.md` se eliminó porque ya no tenía contenido.

La dirección publicada ahora nombra las tres capas: `C. 11C Norte, Gran Santa Fe, Caucel, Mérida, Yuc.`

Queda una decisión de copy sin tomar: el nav dice "Encuéntranos" y el Hero "Cómo llegar" para la misma intención y el mismo destino. Las dos cadenas viven en Sanity. Elegir una, o aceptar por escrito que son dos registros distintos a propósito.

El mapa decorativo en SVG de `src/components/Find.tsx` no es un problema activo: Sanity ya tiene `mapEmbedUrl` con el embed real de Google Maps y el componente prefiere el iframe, así que ese SVG no se renderiza en producción. Sigue siendo deuda — si alguien borra el embed, vuelve a aparecer una retícula del centro de Mérida con un pin marcado "58".

---

## 6. Reglas para las skills de diseño

1. Paleta y tipografía están **cerradas**. Proponer alternativas es salirse del brief.
2. El copy vive en Sanity (`src/sanity/schemas/`) con respaldo en `src/lib/fallback-content.ts`. Nunca escribir texto directamente en el JSX de un componente.
3. El copy va en capitalización normal con acentos. Cualquier texto en minúsculas sin acentos que quede en el respaldo local es deuda, no estilo.
4. El modo es **Persuade**: el visitante decide visitar o comprar. El diseño es el producto.
5. Movimiento: lo que ya existe (`.reveal`, `.animate-ticker`, `.animate-orbit`, hover de `.menu-item`) es el punto de partida, no el techo. Refinar curvas y timing antes de agregar movimiento nuevo.
6. Para datos de contacto, horario y dirección, la autoridad es el contenido publicado en Sanity, no Canva ni el respaldo local. La sección 5 refleja lo publicado al 2026-10-03.
