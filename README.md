# TraMare · B&B Boutique a Napoli

Landing page statica per un bed & breakfast di fascia alta nel centro di Napoli.
Realizzata con **Next.js (App Router)**, **React**, **Tailwind CSS v4** e icone **Lucide**.

## Avvio

```bash
npm install
npm run dev
```

Il sito è disponibile su [http://localhost:3000](http://localhost:3000).

## Caratteristiche

- Hero a schermo intero con slogan e call-to-action
- Widget di prenotazione con calendario interattivo (check-in / check-out / ospiti) — solo dimostrativo, nessuna logica reale
- Sezioni: Chi siamo, Servizi, Galleria, Perché scegliere noi, Contatti
- Navbar trasparente che diventa solida allo scroll
- Animazioni di reveal allo scroll (IntersectionObserver)
- Layout completamente responsive
- Nessun backend, nessuna API: tutti i dati sono statici in `lib/site.ts`

## Struttura

```
app/          Layout, pagina principale, favicon
components/   Componenti riutilizzabili (Navbar, Hero, BookingSection, ...)
lib/          Dati statici del sito (testi, servizi, immagini)
styles/       Stili globali e theme Tailwind
```

Le immagini placeholder sono servite da Unsplash: per la produzione basta
sostituire gli URL in `lib/site.ts` con foto reali (anche locali in `public/`).
