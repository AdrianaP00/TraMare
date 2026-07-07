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
  phone: "+39 3519414986",
  phoneHref: "tel:+393519414986",
  address: "Via Carlo e Luigi Giordano 14, 80055, Portici, Napoli",
};

/* Icone allineate per indice a services.items e why.items nei dizionari */
export const serviceIcons: LucideIcon[] = [
  Wifi,
  Coffee,
  Snowflake,
  Tv,
  Bath,
  KeyRound,
  Sparkles,
  TrainFront,
];

export const featureIcons: LucideIcon[] = [Gem, MapPin, Sofa, Star, Award];

const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = unsplash("photo-1590490360182-c33d57733427", 2000);

export const aboutImage = unsplash("photo-1522708323590-d24dbb6b0267", 1200);

export const whyUsImage = unsplash("photo-1600210492486-724fe5c67fb0", 1200);

/* alt localizzati in gallery.alts nei dizionari, allineati per indice */
export const galleryImages: { src: string; span?: "wide" }[] = [
  { src: unsplash("photo-1578683010236-d716f9a3f461", 1400), span: "wide" },
  { src: unsplash("photo-1600566752355-35792bedcfea", 900) },
  { src: unsplash("photo-1445019980597-93fa8acb246c", 900) },
  { src: unsplash("photo-1414235077428-338989a2e8c0", 900) },
  { src: unsplash("photo-1600607687939-ce8a6c25118c", 1400), span: "wide" },
  { src: unsplash("photo-1504754524776-8f4f37790ca0", 900) },
];
