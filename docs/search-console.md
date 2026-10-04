# Enviar el sitio a Google Search Console

Esto no se puede hacer desde el repositorio: requiere una cuenta de Google con acceso al dominio. Es la única pieza del trabajo de SEO que queda fuera del código.

Tiempo real: unos 15 minutos la primera vez. Después, cinco minutos cada vez que se publique una página nueva.

---

## Por qué hace falta

Google acaba encontrando un sitio por su cuenta, pero tarda y no da información. Search Console sirve para tres cosas concretas:

1. **Avisar de que el sitio existe** y pedir que se rastree, en vez de esperar.
2. **Ver qué está indexado y qué no**, y por qué. Es la única fuente que lo dice.
3. **Saber por qué términos aparece la gente**, que es lo único que confirma si el trabajo de palabras clave funcionó.

Sin esto, el `sitemap.xml` existe y nadie lo mira.

---

## 1. Dar de alta la propiedad

Entra a [search.google.com/search-console](https://search.google.com/search-console) con la cuenta de Google del negocio.

Al añadir propiedad salen dos opciones. **Elige "Dominio"**, no "Prefijo de URL".

| | Dominio | Prefijo de URL |
|---|---|---|
| Cubre | `tulipan.mx`, `www.tulipan.mx`, http y https, todos los subdominios | solo la URL exacta que escribas |
| Verificación | registro DNS | varias opciones |

**Dominio** importa aquí porque el sitio vive en `www.tulipan.mx` y el apex `tulipan.mx` redirige. Con "Prefijo de URL" tendrías que dar de alta dos propiedades y mirar dos paneles.

Escribe `tulipan.mx`, sin `www` y sin `https://`.

## 2. Verificar con DNS

Google da un registro **TXT** parecido a esto:

```
google-site-verification=aBcDeF1234567890...
```

Hay que añadirlo donde esté el DNS del dominio. Si el dominio está gestionado en Vercel:

1. Panel de Vercel → tu proyecto → **Settings** → **Domains**
2. Clic en `tulipan.mx` → pestaña de registros DNS
3. **Add Record**
   - Type: `TXT`
   - Name: `@` (significa la raíz del dominio)
   - Value: el valor completo que dio Google
4. Guardar

Si el dominio está en otro registrador, el formulario cambia de nombre pero los tres campos son los mismos.

Vuelve a Search Console y pulsa **Verificar**. Suele tardar entre un minuto y una hora. Si falla, espera y reintenta: casi siempre es que el DNS no ha propagado todavía.

**No borres el registro TXT después.** Google lo revisa de vez en cuando y, si desaparece, pierdes la propiedad.

## 3. Enviar el sitemap

Con la propiedad ya verificada:

1. Menú lateral → **Sitemaps**
2. En "Añadir un sitemap nuevo", escribe:
   ```
   sitemap.xml
   ```
   Solo eso. Google antepone el dominio.
3. **Enviar**

Debería quedar en estado **Correcto** con **8 URLs detectadas**: las cuatro páginas en español y sus cuatro equivalentes en inglés.

Si dice "No se ha podido obtener", comprueba primero que responde:

```
https://www.tulipan.mx/sitemap.xml
```

## 4. Pedir indexación de la home

El sitemap avisa, pero se puede acelerar la primera página:

1. Barra superior → pega `https://www.tulipan.mx/`
2. Espera a que cargue el informe
3. **Solicitar indexación**

Hazlo solo con la home. Hay cuota diaria y para el resto ya está el sitemap.

---

## Qué mirar después, y cuándo

**A las 48 horas** — *Indexación → Páginas*. Deberían empezar a aparecer URLs en "Indexadas". Si alguna sale en "No indexada", el motivo está escrito ahí.

**A la semana** — *Rendimiento*. Aparecen las primeras consultas reales. Es lo que confirma o desmiente la apuesta por **café**, **cafetería** y **café de especialidad** sobre **Caucel** y **Gran Santa Fe**.

Fíjate en si aparecen términos que no previmos. Suele haberlos y suelen ser mejores que los que uno imagina.

**Al mes** — *Experiencia* y *Mejoras*. Ahí salen los errores de datos estructurados, si los hay. El JSON-LD de `CafeOrCoffeeShop` y los `FAQPage` deberían aparecer como válidos.

---

## Comprobaciones que no necesitan Search Console

Validar los datos estructurados, ahora mismo:

- [Rich Results Test](https://search.google.com/test/rich-results) → pega `https://www.tulipan.mx/`
  Debe detectar `CafeOrCoffeeShop` con dirección, coordenadas y horario.
- Lo mismo con `https://www.tulipan.mx/menu` → debe detectar `FAQPage`.

Validar la tarjeta social:

- [opengraph.xyz](https://www.opengraph.xyz/) → pega `https://www.tulipan.mx/`

---

## Cuando se publique una página nueva

1. Que entre en `src/app/sitemap.ts`
2. Desplegar
3. Search Console → Sitemaps → **volver a enviar** `sitemap.xml`
4. Opcional: inspeccionar la URL nueva y solicitar indexación

El paso 1 es el que se olvida. Si la página no está en el sitemap, Google solo la encontrará si hay un enlace interno que lleve a ella.

---

## Google Business Profile es otra cosa

Search Console mide el sitio. **La ficha de empresa en Google es lo que pesa en el paquete local**, y para una cafetería de barrio eso suele importar más que el sitio entero.

Son paneles distintos y no se sincronizan solos. Si cambia el horario, hay que cambiarlo en los dos sitios: en Sanity y en la ficha.

Conviene revisar que la ficha diga exactamente lo mismo que el sitio:

| Campo | Valor |
|---|---|
| Horario | Mié–Sáb 7:00–11:30 · Dom 8:00–12:00 · cerrado lun y mar |
| Dirección | C. 11C Norte, Gran Santa Fe, Caucel, Mérida |
| Teléfono | +52 1 984 469 6732 |
| Sitio web | `https://www.tulipan.mx` **con www** |

Lo del `www` no es cosmético: si la ficha apunta al apex, está enviando señales a una URL que redirige.
