---
name: Tulipán 58
description: Sistema visual de una cafetería de barrio en Mérida — bloques de color planos, tipografía grande y ficha técnica como voz.
colors:
  cremita-cafe: "#FFEDBB"
  roso-pausar: "#632E2E"
  roso-pausar-deep: "#4E2424"
  verde-caminante: "#787C41"
  verde-caminante-deep: "#5F6234"
  cafe-quemado: "#333333"
  cafe-quemado-deep: "#1A1A1A"
  tulipan: "#CCDBF8"
  gris-apunte: "#5A5A5A"
typography:
  display:
    fontFamily: "Halenoir, Georgia, serif"
    fontSize: "clamp(56px, 8vw, 128px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Halenoir, Georgia, serif"
    fontSize: "clamp(36px, 5vw, 64px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Halenoir, Georgia, serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Basis Grotesque Mono Pro, ui-monospace, monospace"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Basis Grotesque Mono Pro, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "48px"
  gutter: "40px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.roso-pausar}"
    textColor: "{colors.cremita-cafe}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.roso-pausar-deep}"
    textColor: "{colors.cremita-cafe}"
  button-dark:
    backgroundColor: "{colors.cafe-quemado}"
    textColor: "{colors.cremita-cafe}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-dark-hover:
    backgroundColor: "{colors.cafe-quemado-deep}"
    textColor: "{colors.cremita-cafe}"
  button-verde:
    backgroundColor: "{colors.verde-caminante}"
    textColor: "{colors.cremita-cafe}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-verde-hover:
    backgroundColor: "{colors.verde-caminante-deep}"
    textColor: "{colors.cremita-cafe}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cafe-quemado}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.cafe-quemado}"
    textColor: "{colors.cremita-cafe}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.cremita-cafe}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  chip-filter-active:
    backgroundColor: "{colors.cremita-cafe}"
    textColor: "{colors.roso-pausar}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  card-experience:
    backgroundColor: "{colors.roso-pausar}"
    textColor: "{colors.cremita-cafe}"
    rounded: "{rounded.md}"
    padding: "28px 24px 24px"
    height: "380px"
  nav-cta:
    backgroundColor: "{colors.roso-pausar}"
    textColor: "{colors.cremita-cafe}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
---

# Design System: Tulipán 58

## Overview

**Creative North Star: "La Caminata de la Mañana"**

El sistema está organizado como un trayecto, no como una composición. Tulipán 58 abre de 7:00 a 11:30 y se declara acompañante, no destino: el café que tomas de camino, de vuelta o en la pausa. La página traduce eso literalmente. El ticker corre sin detenerse en la parte superior. Las secciones no son tarjetas sobre un fondo común sino bloques de color a sangre que se suceden como cuadras —cremita, bordo, cremita, oscuro, verde— y cada cambio de color es una parada. El scroll es el paso; el `reveal` de 700ms es lo que alcanza a entrar en foco mientras caminas.

La atmósfera es cálida y de barrio, viva, y al mismo tiempo pausada. Esas tres cosas no se contradicen aquí porque cada una vive en una capa distinta: la calidez está en el papel (fondo cremita en lugar de blanco, paleta tierra completa salvo un acento), el carácter está en la escala tipográfica (titulares de hasta 160px, pleno sangrado, sin miedo) y la pausa está en el aire y en la ausencia total de ruido —ni una sombra, ni un gradiente, ni una textura.

La especificidad viene del empaque. Las bolsas de café imprimen proceso, región, nivel de tueste y fecha de tueste en pares etiqueta/valor, y esa retícula es el lenguaje de detalle de todo el sitio: los bloques de dirección y horario, las estadísticas, el pie de las tarjetas. El dato concreto reemplaza al adjetivo. Cuando una sección necesita decir que el café es bueno, dice de dónde viene.

**Key Characteristics:**
- Bloques de color a sangre de borde a borde, nunca tarjetas flotando sobre un lienzo
- Fondo cremita `#FFEDBB` en lugar de blanco, en toda la superficie base
- Cero sombras en reposo; la profundidad es cromática, no lumínica
- Display geométrico pesado contra cuerpo monoespaciado: contraste duro, sin familia intermedia
- Caps de 10–11px con tracking de 0.22em como único recurso de jerarquía menor
- El isotipo aparece recortado y a baja opacidad como textura de fondo, nunca repetido como logo

## Colors

Paleta de tierra tostada completa, con un solo frío deliberado. Ningún color es neutro de sistema: los cinco vienen del producto o del local.

### Primary
- **Bordo Pausar** (`#632E2E`): el acento de la marca. Viste la sección Menu completa, el visual del Hero, el visual de Events, el pin del mapa y los botones primarios. Es el color que dice "esto es Tulipán".

### Secondary
- **Verde Caminante** (`#787C41`): el verde oliva del isotipo. Viste la sección Statement completa y la barra del Ticker, y aparece en pequeño como color de etiqueta en `.info-label` y `.stat-label`. Es el único color que trabaja a dos escalas opuestas: superficie completa y texto de 10px.

### Tertiary
- **Azul Tulipán** (`#CCDBF8`): el único frío, y el único que no viene del café. Fondo de una tarjeta de Experience y del contenedor del mapa.

### Neutral
- **Cremita Café** (`#FFEDBB`): el papel. Fondo base de `html`/`body` y de las secciones About, Experience y Find, y color de texto sobre cualquier superficie oscura. No es un neutro frío disfrazado: es cálido y se nota.
- **Café Quemado** (`#333333`): color de texto sobre cremita y superficie completa de las secciones Events y Footer.
- **Gris Apunte** (`#5A5A5A`): único gris del sistema, reservado al pie del Hero. Es anotación, no texto.

### Named Rules

**La Regla del Frío Único.** El azul tulipán aparece como máximo en una superficie por pantalla. Su rareza es su función: es el respiro entre tanto tono tierra. Dos usos visibles a la vez lo convierten en un cuarto color de marca, que no es.

**La Regla de Una Tinta por Superficie.** Cada sección se compromete a un fondo y un color de texto. No se mezclan bordo y verde dentro del mismo bloque. El cambio de paleta es el cambio de sección.

**La Regla del Papel Cálido.** Nunca `#FFFFFF`, nunca un gris de sistema como fondo. Si algo necesita verse claro, es cremita.

## Typography

**Display Font:** Halenoir Bold (con Georgia, serif como respaldo)
**Body Font:** Basis Grotesque Mono Pro (con `ui-monospace`, monospace como respaldo), en Light 300, Regular 400 y Bold 700
**Ambas auto-hospedadas** en `public/fonts/` con `font-display: swap`.

**Character:** Un geométrico pesado y ancho contra un monoespaciado técnico. No hay familia intermedia y esa ausencia es el sistema: todo es o titular o dato. El display da el carácter de barrio —grande, confiado, hablado—; el mono da la precisión de la ficha de tueste. El respaldo serif de Halenoir es un salto real de personalidad, así que la fuente tiene que cargar.

### Hierarchy
- **Display** (700, `clamp(56px, 8vw, 128px)`, lh 0.92, ls -0.015em): titular del Hero. La variante del Statement empuja a `clamp(56px, 10vw, 160px)` con lh 0.9 y ls -0.02em — es el único lugar donde el tipo llega a ese tamaño, y por eso funciona.
- **Headline** (700, `clamp(36px, 5vw, 64px)`, lh 1.02, ls -0.015em, `text-wrap: balance`): titulares de sección.
- **Title** (700, 22px, lh 1.1–1.2, ls -0.01em): nombre de platillo en el menú, valor de dato en Find, wordmark del Nav (20px) y del Footer (24px). La cita del About sube a 32px y el titular de tarjeta de Experience a 40px con lh 1.
- **Number** (700, 72px, lh 0.95, ls -0.02em; 52px en móvil): las cifras de About. Es la única escala que existe solo para números.
- **Body** (400, 17px, lh 1.6): párrafos de About y Events. Baja a 15px en bloques de datos, 13px en descripciones de tarjeta y 12px en descripciones de menú con `font-weight: 300`.
- **Label** (700, 10–11px, ls 0.14em–0.22em, uppercase): eyebrows, metadatos, enlaces de nav, textos de botón, filtros. Es la clase de tipo más frecuente del sitio.

### Named Rules

**La Regla de Dos Voces.** Halenoir solo para titular, nombre y cifra. Basis Mono para todo lo demás, incluido el texto de los botones. No existe una tercera familia ni un peso intermedio que resuelva un caso dudoso: si dudas, es mono.

**La Regla del Eyebrow Racionado.** Como máximo un eyebrow por cada tres secciones de la página. El Hero no lleva: su titular a 128px no necesita que nada lo presente, y la franja mono-caps con puntos medios era ornamento, no jerarquía.

**La Regla del Tracking Ganado.** El tracking de 0.22em se reserva a caps de 10–11px. A cualquier tamaño mayor el espaciado se cierra: de 0.14em en enlaces de nav a negativo (-0.015em) en display. El tipo grande se aprieta, el tipo chico se abre.

## Layout

Contenedor de 1240px centrado con medianil (`--gutter`) de 40px que baja a 20px por debajo de 780px. Las secciones respiran 96px arriba y abajo, 64px en móvil. El Statement rompe a 120px porque es la única pausa pura del recorrido.

El encabezado de sección es una retícula fija de dos columnas: 240px para el eyebrow y el resto para el titular, alineados al borde inferior. Por debajo de 780px colapsa a una columna con 16px de separación. Ese par eyebrow/titular es el componente de ritmo del sitio y aparece en todas las secciones de contenido.

Los cuerpos de sección usan retículas asimétricas deliberadas, nunca mitades: Hero `1.15fr 1fr`, Find `1fr 1.15fr`, About y Events `1fr 1fr` con separaciones de 48 y 64px. Menu y Experience son tres columnas.

**Puntos de quiebre:** 900px (las retículas de dos y tres columnas colapsan a una, el nav se vuelve hamburguesa), 780px (se encogen medianil y encabezado de sección), 560px (el footer pasa a una columna).

Menu y About no usan separación: dibujan sus propias divisiones con bordes de 1px a baja opacidad entre celdas. Es retícula de tabla impresa, no de tarjetas.

### Named Rules

**La Regla del Borde a Borde.** Las secciones de color llenan el ancho completo de la ventana. El contenedor limita el contenido, nunca el fondo. No existe una sección de color con márgenes laterales.

**La Regla de la Retícula Impar.** Cuando dos columnas comparten una fila, una es más ancha. `1.15fr 1fr` antes que `1fr 1fr`, salvo cuando las dos mitades son pares de contenido equivalente.

## Elevation & Depth

El sistema es plano en reposo y la profundidad es cromática: se consigue apilando bloques de color de ancho completo, no proyectando sombras. No existe un vocabulario de elevación, ni tarjetas flotando sobre un lienzo, ni jerarquía de superficies.

La sombra solo puede aparecer como respuesta a un estado —hover o focus—, nunca en estático. Hoy el sistema cumple esto de forma estricta: la única `box-shadow` del proyecto es el anillo pulsante del pin del mapa, que es señal de ubicación, no elevación.

La capa de atmósfera la dan los isotipos: el logotipo se coloca recortado por fuera del contenedor, a 15–25% de opacidad, teñido al color de la superficie con una cadena de filtros CSS. Produce textura y profundidad sin añadir una sola sombra.

### Shadow Vocabulary
- **Pulso de ubicación** (`0 0 0 0 → 0 0 0 14px rgba(99,46,46,0.5→0)`, 2s ease-in-out infinito): exclusivo del pin del mapa. No reutilizar como elevación.

### Named Rules

**La Regla del Reposo Plano.** Ninguna superficie lleva sombra en estado por defecto. Si un elemento necesita separarse de su fondo, cambia de color o gana un borde de 1px — no se levanta.

## Shapes

Lenguaje de dos formas: rectángulo de esquina suave para contenedores y píldora para controles.

Los contenedores usan 12px (`--radius-md`) de forma casi universal: tarjetas de Experience, visual del Hero, visual de About, visual de Events, mapa y botones. 6px (`--radius-sm`) queda para los marcadores punteados internos. El sistema define 20px (`--radius-lg`) pero no lo usa en ningún sitio.

La píldora (999px) marca los controles de selección y de navegación: chips de filtro del menú, interruptor de idioma, CTA del nav, etiqueta del mapa. La forma distingue el control del contenedor sin cambiar de color.

Los bordes son siempre de 1px, nunca más, y casi siempre en `rgba()` a 0.15–0.35 de opacidad sobre el color de superficie. La división importa más que la caja: Menu, About y Find dibujan filas separadas por reglas horizontales en lugar de encerrarlas.

El Events usa dos anillos concéntricos de 1px (`inset: 24px` y `inset: 48px`) alrededor del sello — la única geometría circular del sistema.

## Components

### Buttons
Táctiles y con confianza: acusan recibo con claridad, no apenas. El carácter buscado es el de un botón físico que responde, no el de tinta que casi no se mueve.

- **Forma:** esquina suave (12px). Nunca píldora, salvo en el CTA del nav.
- **Tipo:** mono 700 a 13px, uppercase, tracking 0.08em.
- **Relleno:** 14px vertical, 28px horizontal.
- **Primario (bordo):** fondo `#632E2E` sobre texto cremita; en hover oscurece a `#4E2424`.
- **Oscuro:** fondo `#333333`; en hover a `#1A1A1A`. Para superficies cremitas donde el bordo ya está ocupado.
- **Verde:** fondo `#787C41`; en hover a `#5F6234`.
- **Fantasma:** transparente con borde de 1.5px en café quemado; en hover invierte a fondo sólido y texto cremita. Sobre superficies oscuras, el borde y el texto cambian a cremita y la inversión lleva al color de la sección.
- **Flecha:** todos los botones llevan `→` como pseudoelemento y la flecha avanza 4px en hover. Es la firma de interacción del sistema.
- **Movimiento:** hoy `translateY(-1px)` con transiciones de 250ms. Ese valor queda por debajo del carácter táctil elegido; el objetivo es un desplazamiento más decidido con la flecha corriendo al mismo tiempo.

### Chips
- **Estilo:** píldora con borde de 1px a 0.35 de opacidad, mono 700 a 10px, tracking 0.18em, uppercase, relleno 8px/14px.
- **Estado:** el filtro activo invierte por completo — fondo cremita sólido, texto en el color de la sección, borde cremita. El inactivo solo gana un velo del 10% en hover. La inversión total es lo que hace legible la selección sin un indicador extra.

### Cards / Containers
- **Esquina:** suave (12px).
- **Fondo:** una de las tres parejas de color plenas — tulipán sobre café quemado, bordo sobre cremita, verde sobre cremita.
- **Sombra:** ninguna. Ver Elevation & Depth.
- **Borde:** ninguno en tarjetas de color; 1px a baja opacidad en los marcadores punteados internos.
- **Relleno interno:** 28px arriba, 24px en los demás lados.
- **Altura:** mínimo 380px en escritorio, 260px en móvil, con el contenido empujado a los extremos (`space-between`): etiqueta arriba, titular y cuerpo abajo.
- **Hover:** `translateY(-4px)` en 380ms con `cubic-bezier(0.22, 1, 0.36, 1)`. Es el movimiento más generoso del sistema y el que mejor expresa el carácter táctil.
- **Textura:** cada tarjeta lleva el isotipo recortado en la esquina superior derecha, al 20% de opacidad, teñido por filtro al color de contraste de la tarjeta.

### Navigation
- **Estilo:** barra pegajosa sobre fondo cremita con una división inferior de 1px a 0.08 de opacidad. Sin sombra al hacer scroll.
- **Tipo:** mono 400 a 11px, tracking 0.14em, uppercase.
- **Hover:** subrayado que crece de izquierda a derecha animando `right` de 100% a 0 en 260ms con `cubic-bezier(0.22, 1, 0.36, 1)`. No es un `scaleX` — crece desde el origen del texto.
- **Marca:** isotipo de 32px junto al wordmark en Halenoir 20px.
- **Interruptor de idioma:** píldora con borde, dos opciones; la activa invierte a fondo oscuro con texto cremita, la inactiva queda al 55% de opacidad.
- **Móvil:** por debajo de 900px los enlaces desaparecen tras una hamburguesa de tres líneas y el panel abierto cubre el ancho completo bajo la barra. El CTA se oculta.

### Filas de menú
Firma del sistema. No son tarjetas: son filas de una tabla impresa.

- Retícula de tres columnas sin separación, dividida por reglas de 1px a 0.2 de opacidad; la columna central gana bordes laterales.
- Nombre en Halenoir 22px a la izquierda, precio en mono 700 a 13px a la derecha, descripción en mono 300 a 12px al 75% de opacidad debajo.
- Hover: velo del 6% sobre el fondo en 280ms y una flecha `→` que aparece desde la esquina inferior derecha desplazándose 6px en 240ms.
- Por debajo de 900px colapsa a una columna y pierde todos los bordes laterales.

### Bloque de dato
El patrón que hereda la ficha de tueste del empaque, usado en Find y en las estadísticas de About.

- Etiqueta en mono 700 a 10px, tracking 0.22em, uppercase, en verde caminante.
- Valor en Halenoir 22px, o en mono 15px cuando es texto corrido o enlace.
- Separados por reglas horizontales de 1px, nunca encerrados en una caja.

### Ticker
Cinta verde de ancho completo bajo el nav. Mono 700 a 10px con tracking 0.22em en cremita, ocho copias del texto separadas por puntos medios, desplazándose `translateX(-50%)` en 38 segundos lineales e infinitos. Marcado `aria-hidden` porque es ritmo, no contenido.

### Reveal
Entrada por defecto de todo el contenido. `IntersectionObserver` con umbral de 0.12 y margen inferior de -40px, que añade `.in-view` una sola vez y deja de observar. De `opacity: 0` y `translateY(16px)` a su posición natural en 700ms `ease`, con retrasos escalonados de 100, 200, 300 y 400ms.

**No respeta `prefers-reduced-motion`.** Ni el reveal, ni el ticker, ni la órbita, ni el pulso del pin. Es la deuda de accesibilidad más clara del sistema.

## Do's and Don'ts

### Do:
- **Do** vestir cada sección nueva con una sola pareja de color plena a sangre: fondo y color de texto comprometidos, de borde a borde.
- **Do** racionar los eyebrows: como máximo uno por cada tres secciones en toda la página. El par eyebrow + titular en la retícula de 240px es el pulso del recorrido, pero ponerlo en todas las secciones produce el ritmo plantillado que delata una interfaz generada. Cuando una sección no lo lleva, su posición en la página ya la categoriza.
- **Do** expresar cualquier dato concreto —origen, horario, método, precio, cifra— como par etiqueta/valor separado por reglas de 1px, siguiendo la ficha de tueste del empaque.
- **Do** cerrar el tracking conforme crece el tipo: 0.22em a 10px, 0.08em a 13px, negativo en display.
- **Do** colocar el isotipo recortado y por fuera del contenedor, entre 15% y 25% de opacidad, teñido al color de contraste de la superficie.
- **Do** terminar los botones con la flecha `→` y moverla en hover. Es la firma de interacción del sistema.
- **Do** usar `text-wrap: balance` en los titulares de sección y en cualquier texto de display de dos a tres líneas.

### Don't:
- **Don't** usar `#FFFFFF` ni un gris de sistema como fondo. El papel es cremita `#FFEDBB`.
- **Don't** añadir una sombra a una superficie en reposo. La profundidad es cromática. La única `box-shadow` del proyecto es el pulso del pin del mapa.
- **Don't** usar gradientes, glassmorphism, desenfoques de fondo ni texturas. No existe ni uno en el sistema y su ausencia es la decisión.
- **Don't** mostrar el azul tulipán `#CCDBF8` más de una vez por pantalla.
- **Don't** introducir una tercera familia tipográfica ni un peso intermedio. Si no es titular, nombre o cifra, va en mono.
- **Don't** encerrar listas de datos en tarjetas. Se dividen con reglas horizontales de 1px.
- **Don't** repartir dos columnas en mitades iguales cuando una lleva más peso. La retícula impar es intencional.
- **Don't** hacer flotar tarjetas sobre un lienzo compartido. Los bloques de color son el lienzo.
- **Don't** tratar la identidad azul marino y rosa de "Tulipán Bakery & Coffee" como referencia. Es una marca retirada que sigue viva en diseños antiguos de Canva. Ver [BRAND-BRIEF.md](BRAND-BRIEF.md).

### Deuda conocida
- `--lh-tight`, `--lh-snug`, `--radius-lg` y `--rail` están definidos en `:root` y no los usa nadie. Son tokens muertos: usarlos o borrarlos, no ampliarlos.
- Ninguna animación consulta `prefers-reduced-motion`.
- El mapa decorativo en SVG de `src/components/Find.tsx` dibuja calles del centro de Mérida, que no es la ubicación real. Hoy queda oculto porque Sanity entrega un `mapEmbedUrl`.
