---
target: src/components/Hero.tsx
total_score: 14
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:C:\\repositories\\davidCuy\\tulipan\\website-ecommerce\\src\\components\\Hero.tsx"
target_fingerprint: "sha256:3e1cd3f10b72d4f9294215f8264c80829f89a600066f899a8500e15c2ff94192"
target_path: "C:\\repositories\\davidCuy\\tulipan\\website-ecommerce\\src\\components\\Hero.tsx"
timestamp: 2026-10-04T03-51-03Z
slug: src-components-hero-tsx
---
Method: dual-agent (A: a65aede9e54fc28af · B: af5e09631b01f2789)

## Design Health Score

| # | Heurística | Score | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 1 | Sin estado activo de nav, sin cue de scroll, sin estado de carga de imagen. El CTA mal ruteado no reporta nada. |
| 2 | Sistema ↔ mundo real | 2 | "Abierto desde las 7:30" no es como razona nadie sobre un local cerrado lun–mar con ventana de 4.5h. |
| 3 | Control y libertad | 3 | Una página, anclas hash, back recupera todo. Penalizado por el CTA mal ruteado. |
| 4 | Consistencia y estándares | 1 | Una intención, dos etiquetas, dos destinos. Tres grafías de marca visibles a la vez. Horario del Hero contradice al de Find. |
| 5 | Prevención de errores | 1 | Nada impide el error de ancla ni la divergencia de horarios entre dos documentos de Sanity. Ya divergieron. |
| 6 | Reconocer, no recordar | 2 | El fold no muestra dirección, días, precio ni "tostamos aquí". A ≤900px el CTA correcto está display:none. |
| 7 | Flexibilidad y eficiencia | n/a | Superficie Persuade sin tarea repetida que acelerar. |
| 8 | Estético y minimalista | 3 | El eje más fuerte y es ganado: cero sombras, papel cremita, un acento, aire real. |
| 9 | Recuperación de errores | 1 | Sin estados de error. Sanity caído publica en silencio una dirección que no es la del local. |
| 10 | Ayuda y documentación | n/a | Un hero de landing no requiere superficie de documentación. |
| **Total** | | **14/32** | **43.8% — necesita trabajo** |

Heurísticas n/a: 7, 10. Máximo aplicable: 32.

## Design Specificity Verdict

No es específico. Composición genérica vistiendo una paleta específica. Quitando los cinco tokens de color y las dos fuentes queda el hero por defecto de cualquier cafetería de especialidad: columna de copy izquierda (eyebrow tracked, titular de tres líneas, regla fina + caption, dos botones), tarjeta de imagen derecha con radio 12px y caption encima, split asimétrico. La especificidad vive entera en `:root`, no en composición ni interacción.

Evidencia decisiva: el Hero incumple la promesa que DESIGN.md hace sobre él. El documento dice dos veces que el Hero carga la ficha técnica del empaque. El código no la implementa: `.hero-visual-meta` renderiza un solo string, `photoLabel`. El único lugar donde podría aparecer el argumento incopiable (La Laja Veracruz, honey, medio-oscuro) imprime "Foto: Preparación en barra".

Escaneo determinista: detector CLI limpio, 0 hallazgos en Hero.tsx y en todo src/components. Todos los defectos viven en propiedades computadas de globals.css, no en el JSX. El overlay en navegador encontró 40 hallazgos en la página, 5 dentro de #hero:

| Elemento | Regla | Detalle |
|---|---|---|
| p.eyebrow.hero-eyebrow | low-contrast | 3.80:1, necesita 4.5:1 |
| p.eyebrow.hero-eyebrow | all-caps-body | uppercase sobre 34 caracteres |
| p.hero-foot | gray-on-color | #5A5A5A sobre #FFEDBB |
| p.hero-foot | wide-tracking | 0.08em en texto de cuerpo |
| span.hero-visual-meta-label | undersized-ui-text | 10px, bajo el piso de 11px |

Coincidencias entre A y B: contraste del eyebrow (3.80:1, falla AA) y ausencia total de prefers-reduced-motion. El detector vio lo que la revisión no: undersized-ui-text en los metadatos de 10px, un h2 vacío y un salto h2→h4 fuera del Hero. Falsos positivos: gray-on-color en .hero-foot es heurística de estilo (mide 5.94:1, pasa AA); el fallo de contraste del placeholder (3.97:1) es real en CSS pero inalcanzable porque Sanity siempre entrega imageUrl.

Overlay: servidor en puerto 8400 levantado, inyectado y detenido. Verificado con curl, http_code=000. git status idéntico al inicio.

## Overall Impression

El Hero está bien hecho y mal dirigido. La contención es real y defendible. Pero el mayor activo tipográfico carga una frase cierta de cualquier cafetería, y el estilo más pequeño, tenue y gris carga el único dato que decide si alguien maneja hasta Gran Santa Fe. La oportunidad más grande no es rediseñar: es intercambiar qué información ocupa qué escala.

## What's Working

1. El salto de color en la tercera línea. globals.css:512 colorea solo hero-title-line--3 y los Reveal escalonados 0/100/200ms hacen que la frase se ensamble. El acento cae sobre la palabra que resuelve el sentido ("contigo"). Es lo único que otra cafetería no podría llevarse sin llevarse el tagline.
2. La contención es decisión, no accidente. .hero y .hero-visual-bg no llevan sombra, gradiente ni backdrop filter. Cumple La Regla del Reposo Plano y La Regla del Papel Cálido.
3. La retícula obedece su propia regla y reordena bien. 1.15fr 1fr cumple La Regla de la Retícula Impar, y a ≤900px colapsa con la columna de copy primero. El contenido de decisión nunca queda bajo la imagen en móvil.

## Priority Issues

### [P0] "Cómo llegar" apunta a #about, no a #find
Hero.tsx:44. Verificado en vivo: #find existe en la página. El botón aterriza en el párrafo de origen de marca.
Por qué importa: es la única ruta de conversión del usuario primario #1, y a ≤900px el CTA correcto del nav está display:none (globals.css:429-431). En todo teléfono este enlace roto es el único acceso a direcciones en el fold. El principio #1 de PRODUCT.md dice que dirección y horario son la información de mayor consecuencia; el Hero desvía de ella.
Fix: href="#find". Unificar la etiqueta con el nav: una intención, una palabra. Conservar data-umami-event para no romper la serie de analítica.
Comando: /impeccable clarify src/components/Hero.tsx

### [P0] El Hero publica un horario incorrecto, incompleto y estilizado como nota al pie
foot_es en vivo = "Tulipán 58 — abierto desde las 7:30". El horario publicado es Mié–Sáb 7:00–11:30. Hora equivocada, sin días para un local cerrado lunes y martes, sin hora de cierre, a 12px / peso 300 / #5A5A5A, el color que DESIGN.md define como "anotación, no texto".
Por qué importa: una vecina que llega un martes a las 9:40 lee "abierto desde las 7:30", maneja hasta Gran Santa Fe y encuentra cerrado. Es la falla que el principio #1 existe para evitar, y hoy el Hero es su causa.
Fix: eliminar foot como portador de horario y construir el bloque de dato que DESIGN.md ya especifica: pares etiqueta/valor separados por reglas de 1px (HOY → Abierto 7:00–11:30, o Cerrado, abre mié 7:00; DÓNDE → C. 11C Norte, Gran Santa Fe), derivados de la misma fuente que lee findSection. Un string de horario escrito a mano en un segundo documento es la causa raíz.
Comando: /impeccable layout src/components/Hero.tsx

### [P1] El organizador de eventos no tiene superficie en el Hero
PRODUCT.md llama a la barra móvil la línea de mayor ticket. El Hero no menciona eventos. La única señal sobre el fold es el Ticker: aria-hidden="true", 10px, 38s, diciendo "Catering y eventos · Escríbenos". Imperativo directo pegado a nada clickeable, oculto a tecnología asistiva, moviéndose alejándose del cursor.
Fix: un tercer enlace solo texto dentro de .hero-ctas hacia #events. No un segundo botón relleno.
Comando: /impeccable onboard src/components/Hero.tsx

### [P1] .reveal deja todo el Hero detrás de JavaScript, sin reduced-motion y sin estados de foco
.reveal { opacity: 0 } solo se limpia por el IntersectionObserver. Si JS falla, el Hero renderiza como un rectángulo crema vacío. Verificado enumerando todas las hojas cargadas: cero reglas prefers-reduced-motion y cero reglas :focus-visible en todo el proyecto. El usuario de teclado que tabula al CTA roto solo recibe el outline del navegador, que sobre .btn-bordo es un anillo oscuro sobre campo oscuro.
Fix: sacar el estado inicial oculto del CSS estático; agregar bloque prefers-reduced-motion que apague .reveal y .animate-ticker; agregar :focus-visible con variante cremita para superficies oscuras.
Comando: /impeccable harden src/components/Hero.tsx

### [P2] El panel visual contradice su propia especificación y carga una imagen invisible
Cuatro defectos: (1) .hero-visual-meta renderiza un crédito de foto donde DESIGN.md promete pares de ficha técnica. (2) Como .hero-visual-bg es space-between y la foto es absoluta, el caption es el único hijo en flujo y aterriza arriba a la izquierda, no en el riel inferior para el que fue estilizado; medido en vivo imagen top 158px, caption top 182px, sin scrim. (3) isotipo-dark.webp tiene loading="eager" y queda 100% ocluido tras la foto; se descarga siempre, no se ve nunca, compite con el LCP. (4) sizes usa 780px mientras la retícula colapsa a 900px; entre 781-900px el navegador elige imagen de media resolución.
Fix: reemplazar photoLabel por pares reales (ORIGEN / La Laja Veracruz; TUESTE / Medio-oscuro) fijados abajo con regla de 1px y scrim corto. Dar z-index al isotipo o borrarlo. Cambiar sizes a 900px.
Comando: /impeccable layout src/components/Hero.tsx

### [P3] Tres grafías de marca en un fold; el h1 concatena sin espacios
tulipan58 (nav), TULIPAN58 (ticker), Tulipán 58 (hero foot) visibles simultáneamente a 1440px. Las tres span del titular no tienen espacio entre sí: el textContent del h1 es "El caféque caminacontigo", verificado en vivo. Eso recibe un lector de pantalla, un copy-paste y un snippet de búsqueda.
Comando: /impeccable clarify src/components/Hero.tsx

## Persona Red Flags

Lucía, vecina de Gran Santa Fe, 34, martes 9:40am, iPhone, llegó por una story:
- Lee "abierto desde las 7:30". Son las 9:40. Concluye que está abierto. Es martes, está cerrado. Nada nombra un día.
- Toca CÓMO LLEGAR, el único botón redactado con su intención exacta, y aterriza en el párrafo de origen de marca. Sin dirección, sin mapa, sin distancia.
- El CTA del nav que sí hubiera funcionado está display:none a su ancho. Su ruta correcta existe y está oculta para ella.

Marco, organizador, boda de 120, escritorio:
- La palabra "evento" no aparece en el Hero.
- Su única señal es el ticker: aria-hidden, no es enlace, 10px, en movimiento, pidiéndole que escriba sin darle a dónde.
- Cero afordancia de WhatsApp en el fold pese a ser el canal declarado de cotización.

Sam, lector de pantalla + solo teclado:
- .hero-eyebrow a 3.80:1 falla AA.
- No existe ni una regla de foco en todo globals.css.
- El h1 se anuncia como "El caféque caminacontigo".
- El alt de la imagen es photoLabel y el mismo string se renderiza como texto visible 24px abajo: lo escucha dos veces.

## Minor Observations

- gap: 28px uniforme en .hero-copy deja la línea de horario equidistante del titular y de los botones. Debería ir pegada a los CTA (12px) y lejos del titular (40px).
- .hero-foot-dash oculta un "--" literal con text-indent:-9999px y además lo marca aria-hidden. Los caracteres son peso muerto.
- Solo title3 lleva color. En ES el acento cae sobre una palabra corta; en EN sobre dos anchas, y la forma de la composición cambia. Nadie eligió la versión en inglés.
- Ambos CTA llevan la flecha. DESIGN.md la llama la firma de interacción; aplicarla idéntica a los dos colapsa la distinción primario/secundario a solo el color de relleno.
- La heroImage es 1440x1584 vertical renderizada en una caja de 517x460 horizontal con object-fit: cover: se recorta ~70% del encuadre subido.
- Fuera del Hero el detector encontró un h2 vacío y un salto h2→h4.

## Questions to Consider

1. Si borraras el titular y pusieras "Miércoles a sábado, 7:00–11:30 · C. 11C Norte · Tostamos aquí" a 128px, ¿convertirías más vecinos o menos?
2. El North Star es "La Caminata de la Mañana" y el Hero es el primer paso. ¿Por qué es la única sección del sistema sin movimiento propio y con una foto de una taza perfectamente quieta?
3. El principio #5 dice que el inglés es paridad, no traducción. Pero el Hero ES resuelve en una palabra corta en bordo y el EN no, y nadie miró los cortes de línea en inglés. ¿Cuál de los dos heroes es el diseño y cuál el respaldo?
