# TODOS — Platita.pe Pre-lanzamiento

## Configuración crítica (bloqueante para go-live)

- [ ] **WhatsApp número real** — actualizar `WA_PHONE` en `lib/config.ts` con el número real (+51 XXX XXX XXX)
- [ ] **Formspree ID** — crear formulario en formspree.io, copiar el ID (formato `xabc1234`) y reemplazar `YOUR_FORM_ID` en `lib/config.ts` → `FORMSPREE_ENDPOINT`

## Design debt

- [ ] **Contraste WCAG AA** — migrar inline styles con `rgba(<color>, 0.40-0.50)` a `var(--text-secondary)` y `var(--text-muted)` definidos en globals.css. Afecta principalmente body text y labels en todas las secciones.
- [ ] **DESIGN.md** — documentar el sistema de tokens: colores (`#1c0f4c`, `#6cdcff`, `#bc45e9`), tipografía (Nunito Black para headings), espaciados, y los 3 negros que existen (`#080b1e`, `#0f0a2e`, `#0a0818`) — unificarlos.
- [ ] **SimuladorSection MIN_AMOUNT** — actualmente S/10,000. El hero dice "desde S/500". Definir si el simulador es para inversores de ticket alto o match con el claim del hero.

## Contenido

- [ ] **Testimonios reales** — reemplazar las personas inventadas (Jorge Paredes, Valeria Soto, etc.) con testimonios reales de personas en la lista de espera cuando estén disponibles.
- [ ] **ProyectosSection** — verificar que los proyectos listados sean reales y verificables en SUNARP.
- [ ] **EquipoSection** — verificar que las fotos y datos del equipo sean reales.

## Post-lanzamiento

- [ ] **Analytics** — instalar Google Analytics 4 o Plausible para trackear conversiones del formulario.
- [ ] **SEO meta tags** — añadir Open Graph, Twitter cards y descripción en app/layout.tsx.
- [ ] **Sitemap** — generar sitemap.xml para SEO.
