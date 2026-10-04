# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Vecino que todavía no conoce Tulipán.** Vive o circula por Caucel y Gran Santa Fe Norte, en Mérida. Llega desde Google o Instagram preguntándose qué es este lugar, qué sirven, si vale la pena y si está abierto ahora. No tiene relación previa con la marca y decide en menos de un minuto si va.

**Organizador de evento.** Busca una barra de café de especialidad para una boda, un evento corporativo o una fiesta. Necesita entender qué incluye el servicio, para cuánta gente funciona y cómo iniciar una cotización. Es la línea de negocio con el ticket más alto y la que más información necesita antes de contactar.

El cliente recurrente que vuelve solo por horario o dirección no se confirmó como audiencia primaria, aunque el sitio sirve ese uso.

## Product Purpose

Tulipán 58 es una cafetería de especialidad en Gran Santa Fe, Caucel, Mérida. **No tuesta: trabaja con casas tostadoras de Mérida y Veracruz** para el tueste del grano que maneja. También hornea su propia repostería y opera una barra de café móvil para eventos.

Esto importa y se confundió una vez: el argumento no es tostar, es **elegir el grano y declarar su origen**. Nunca escribir que el tueste es propio.

**La repostería es acompañamiento del café, no línea de negocio.** Es lo contrario de la cafetería tradicional, donde la pastelería tira del ticket. Aquí el café manda y las galletas y el brownie existen para acompañarlo. Cualquier decisión de contenido, jerarquía visual o posicionamiento debe reflejar ese orden.

El sitio es una vitrina: no vende en línea y no está planeado que lo haga. Su éxito se mide en visitas al local y en conversaciones de WhatsApp iniciadas para eventos. El nombre del repositorio, `website-ecommerce`, es histórico y no describe el alcance.

## Positioning

"El café que camina contigo." Tulipán 58 no se posiciona como destino sino como acompañante: el café que tomas de camino, de vuelta o en la pausa. Esa idea está escrita en el copy del sitio y en el empaque, y es anterior a cualquier decisión de diseño.

Lo que un competidor no podría copiar honestamente: la selección de grano con origen trazable y declarado en la etiqueta, tostado por casas de Mérida y Veracruz con las que hay relación directa. Dos perfiles publicados — **Amanecer** (lavado, La Laja, Veracruz; tueste medio-oscuro; para espresso) y **Pausa** (honey, Xico, Veracruz; tueste medio; para filtrados) — con proceso, región, nivel de tueste y fecha de tueste impresos en cada bolsa. La ficha técnica no es decoración: es el argumento.

## Operating Context

- **Ventana de atención corta y matutina.** Miércoles a sábado de 7:00 a 11:30, domingo de 8:00 a 12:00. Cerrado lunes y martes. Un visitante que llega al sitio por la tarde no puede actuar hoy; el horario es información de alta consecuencia, no un dato de pie de página.
- **Ubicación periférica.** C. 11C Norte, Gran Santa Fe, Caucel, Mérida, Yucatán. Las tres capas importan y se usan distinto: **Gran Santa Fe** es el fraccionamiento, **Caucel** la comisaría y **Mérida** el municipio. No es un punto de paso del centro: quien va, va a propósito, y necesita confiar en la dirección antes de manejar hasta allá.
- **Contacto por WhatsApp**, +52 1 984 469 6732. Es el canal real de cotización de eventos.
- **Redes:** @tulipan58mid en Instagram, Facebook y TikTok.
- **Contenido editable sin desarrollador.** Todo el texto, el menú y las imágenes viven en Sanity Studio, montado en la ruta `/studio` del mismo sitio. El dueño edita ahí.
- **Entrega:** Next.js en Vercel, revalidación cada 60 segundos. Analítica con Umami, con eventos nombrados ya instrumentados en los CTA. El host canónico es `www.tulipan.mx`; el apex redirige.
- **Descubrimiento.** Las palabras por las que se quiere encontrar el negocio son **café**, **cafetería** y **café de especialidad**, sobre **Mérida**, **Caucel** y **Gran Santa Fe**. Caucel es la de menos competencia y la más específica. Competir por "cafetería Mérida" contra Centro y Montejo no es realista ni necesario.

## Capabilities and Constraints

- **Bilingüe ES/EN, ambos de primera clase.** Hay público extranjero real en Mérida. El inglés no es relleno: recibe la misma calidad de copy y de diseño que el español. Cada campo de contenido existe en las dos lenguas.
- **Sin carrito, sin checkout, sin pagos, sin cuentas de usuario.** No hay flujo transaccional y no está en el plan.
- **Todo el contenido viene de Sanity con respaldo local** en `src/lib/fallback-content.ts`. Sanity gana cuando el documento existe. Cualquier dato corregido solo en el fallback es invisible en producción hasta que se publica en Studio.
- **Secciones existentes:** Nav, Ticker, Hero, Statement, Menu, Experience, Events, About, Find, Footer. Una sola página.
- **Menú con precios reales en pesos**, nueve bebidas clasificadas en caliente / frío / método.
- **Sin decidir:** la relación entre este sitio y `mi.tulipan.mx`, el programa de lealtad. Hoy no se enlazan. No asumir ninguna de las dos direcciones.

## Brand Commitments

- Nombre **Tulipán 58** / `tulipan58`. Tagline **"El café que camina contigo"**. Handle **@tulipan58mid**.
- Paleta y tipografías están cerradas y documentadas en [BRAND-BRIEF.md](BRAND-BRIEF.md): cremita `#FFEDBB`, bordo `#632E2E`, verde oliva `#787C41`, café quemado `#333333`, azul tulipán `#CCDBF8`; Halenoir Bold para display, Basis Grotesque Mono Pro para cuerpo. Las fuentes están auto-hospedadas en `public/fonts/`.
- **Existe una identidad legacy prohibida**: "Tulipán Bakery & Coffee", azul marino y rosa con logotipo serif, handle `@tulipanbkmid`. Sigue viva en diseños viejos de Canva. No debe entrar al sitio.
- **El copy va en capitalización normal con acentos**, confirmado el 2026-10-03: `Encuéntranos`, `Dirección`, `El café que camina contigo.` Es lo que Sanity ya publica. Las secciones del respaldo local que siguen en minúsculas sin acentos son deuda pendiente, no una segunda voz válida.
- Logos, isotipos y sellos están en `public/assets/` como WebP de una sola tinta, en variantes cremita, verde y oscuro.

## Evidence on Hand

- **Real y usable:** fichas técnicas de los dos cafés en grano con origen, proceso y tueste; catálogo de repostería de acompañamiento (galleta de gragea, galleta de mermelada, besitos de nuez, galleta triple chocolate, brownie); menú de nueve bebidas con precios; brand kit y piezas de empaque en Canva.
- **Imágenes:** no hay fotografía en el repositorio — `public/assets/` solo contiene marca. Las fotos viven en Sanity: el hero ya tiene una imagen publicada. Donde falte, el CSS renderiza un marcador punteado. Las fotos nuevas las provee el dueño y se suben por Studio, no por el repositorio.
- **No existe y no debe fabricarse:** testimonios, reseñas, conteos de clientes, premios, menciones de prensa, logos de clientes de eventos, cifras de producción. Los tres números de la sección About deben venir de un hecho verificable o salir.

## Product Principles

1. **El horario y la dirección son la información de mayor consecuencia del sitio.** La ventana es corta y el local es periférico; equivocarse ahí hace que alguien maneje hasta Caucel para encontrar cerrado. Nada los entierra.
2. **Acompañar, no impresionar.** La marca se declara compañera de camino. El diseño gana cuando se siente cercano y hecho a mano, no cuando se siente caro.
3. **La ficha técnica es la voz.** Proceso, región, tueste, método: la especificidad del empaque es el argumento de calidad y debe extenderse al sitio, no diluirse.
4. **Dos trabajos, no uno.** Decidir visitar y cotizar un evento son recorridos distintos con necesidades de información distintas. El segundo necesita más que un botón de WhatsApp.
5. **El inglés es paridad, no traducción.** Cada decisión de copy y de layout se verifica en las dos lenguas.
6. **El café manda, la repostería acompaña.** No se compite en repostería ni se le da jerarquía propia. Existe para que el café no se tome solo.

## Accessibility & Inclusion

No se estableció un estándar formal. Lo que sí está confirmado como necesidad de usuario: paridad real entre español e inglés, y legibilidad de horario, dirección y precio para alguien que consulta el sitio de pie, en un teléfono, decidiendo si ir ahora.
