import {
  Award,
  Bath,
  Coffee,
  Gem,
  KeyRound,
  MapPin,
  Snowflake,
  Sofa,
  Sparkles,
  Star,
  TrainFront,
  Tv,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "TraMare",
  tagline: "B&B · Portici · Napoli",
  slogan: "Eleganza partenopea, tra mare e storia",
  phone: "+39 3519414986",
  phoneHref: "tel:+39 3519414986",
  address: "Via Carlo e Luigi Giordano 14, 80055, Portici, Napoli",
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Wifi,
    title: "Wi-Fi gratuito",
    description: "Connessione in fibra veloce e illimitata in tutte le camere.",
  },
  {
    icon: Coffee,
    title: "Colazione inclusa",
    description: "Dolce risveglio con sfogliatelle, caffè napoletano e prodotti freschi.",
  },
  {
    icon: Snowflake,
    title: "Aria condizionata",
    description: "Climatizzazione indipendente e silenziosa in ogni ambiente.",
  },
  {
    icon: Tv,
    title: "Smart TV",
    description: "Schermi 4K con Netflix, Prime Video e canali internazionali.",
  },
  {
    icon: Bath,
    title: "Bagno privato",
    description: "Bagni en-suite in marmo con set di cortesia premium.",
  },
  {
    icon: KeyRound,
    title: "Self check-in",
    description: "Accesso autonomo a qualsiasi ora con smart lock dedicata.",
  },
  {
    icon: Sparkles,
    title: "Pulizia giornaliera",
    description: "Riassetto quotidiano e biancheria di alta qualità.",
  },
  {
    icon: TrainFront,
    title: "Metro a 2 minuti",
    description: "A pochi passi dalla metropolitana, per muoversi ovunque.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Gem,
    title: "Design premium",
    description: "Interni curati da interior designer, tra materiali pregiati e luce naturale.",
  },
  {
    icon: MapPin,
    title: "Posizione strategica",
    description: "Nel cuore di Napoli, a pochi passi dal lungomare e dal centro storico.",
  },
  {
    icon: Sofa,
    title: "Ambienti moderni",
    description: "Camere ristrutturate con comfort contemporanei e atmosfera rilassante.",
  },
  {
    icon: Star,
    title: "Recensioni eccellenti",
    description: "Valutazione media 9,6/10: i nostri ospiti tornano, e lo raccontano.",
  },
  {
    icon: Award,
    title: "Comfort elevato",
    description: "Materassi memory, insonorizzazione e ogni dettaglio pensato per il riposo.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall";
};

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = unsplash("photo-1590490360182-c33d57733427", 2000);

export const aboutImage = unsplash("photo-1522708323590-d24dbb6b0267", 1200);

export const whyUsImage = unsplash("photo-1600210492486-724fe5c67fb0", 1200);

export const galleryImages: GalleryImage[] = [
  {
    src: unsplash("photo-1578683010236-d716f9a3f461", 1400),
    alt: "Camera matrimoniale con luci soffuse",
    span: "wide",
  },
  {
    src: unsplash("photo-1600566752355-35792bedcfea", 900),
    alt: "Bagno privato in marmo",
  },
  {
    src: unsplash("photo-1445019980597-93fa8acb246c", 900),
    alt: "Terrazza panoramica per gli ospiti",
  },
  {
    src: unsplash("photo-1414235077428-338989a2e8c0", 900),
    alt: "Angolo colazione elegante",
  },
  {
    src: unsplash("photo-1600607687939-ce8a6c25118c", 1400),
    alt: "Zona living luminosa",
    span: "wide",
  },
  {
    src: unsplash("photo-1504754524776-8f4f37790ca0", 900),
    alt: "Colazione con prodotti freschi",
  },
];
