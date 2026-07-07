# TraMare · B&B Boutique a Napoli

Landing page statica per un bed & breakfast di fascia alta nel centro di Napoli.
Realizzata con **Next.js (App Router)**, **React**, **Tailwind CSS v4** e icone **Lucide**.

## Avvio

```bash
npm install
npm run dev
```

Il sito è disponibile su [http://localhost:3000](http://localhost:3000).

## Docker

```bash
docker compose up --build      # oppure:
docker build -t tramare-bnb .
docker run -p 3000:3000 tramare-bnb
```

L'immagine usa l'output `standalone` di Next.js (build multi-stage, utente non
root): il container serve il sito su http://localhost:3000 senza bisogno di
Node.js sul sistema host.

## Caratteristiche

- Hero a schermo intero con slogan e call-to-action
- Widget di prenotazione con calendario interattivo (check-in / check-out / ospiti) — solo dimostrativo, nessuna logica reale
- Sezioni: Chi siamo, Servizi, Galleria, Perché scegliere noi, Contatti
- Navbar trasparente che diventa solida allo scroll
- Animazioni di reveal allo scroll (IntersectionObserver)
- Layout completamente responsive
- **Multilingua (i18n)**: italiano su `/it` e inglese su `/en`, con switcher IT/EN
  nella navbar; la root `/` reindirizza in base alla lingua del browser (middleware)
- Nessun backend, nessuna API: tutti i dati sono statici in `lib/`

## Struttura

```
app/[lang]/       Layout e pagina principale, una route statica per lingua
components/       Componenti riutilizzabili (Navbar, Hero, BookingSection, ...)
lib/site.ts       Dati non testuali (telefono, indirizzo, icone, immagini)
lib/dictionaries/ Testi localizzati (it.ts, en.ts)
lib/i18n.ts       Configurazione lingue e accesso ai dizionari
middleware.ts     Redirect / → /it o /en in base ad Accept-Language
styles/           Stili globali e theme Tailwind
```

Per aggiungere una lingua: creare `lib/dictionaries/<codice>.ts` sul modello di
`en.ts` e aggiungere il codice all'array `locales` in `lib/i18n.ts`.

Le immagini placeholder sono servite da Unsplash: per la produzione basta
sostituire gli URL in `lib/site.ts` con foto reali (anche locali in `public/`).
