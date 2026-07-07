import { MapPin } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutImage, site } from "@/lib/site";

export default function About() {
  return (
    <section id="chi-siamo" className="bg-sand/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-ink/15">
              <Image
                src={aboutImage}
                alt="Zona living del B&B TraMare"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-ink/10 md:-right-8">
              <p className="font-serif text-3xl text-bronze">9,6</p>
              <p className="text-xs uppercase tracking-wider text-taupe">
                Valutazione ospiti
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-bronze">
              Chi siamo
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
              Un rifugio elegante nel cuore di Napoli
            </h2>
            <div className="mt-6 h-px w-16 bg-bronze/60" />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 leading-relaxed text-taupe-dark">
              {site.name} nasce dal restauro di un palazzo d&apos;epoca a due passi dal
              lungomare di Via Caracciolo. Ogni camera unisce il fascino
              dell&apos;architettura partenopea a un design contemporaneo fatto di
              materiali naturali, luce morbida e dettagli curati, per un&apos;atmosfera
              accogliente che sa di casa.
            </p>
            <p className="mt-5 leading-relaxed text-taupe-dark">
              La posizione è strategica: in pochi minuti a piedi raggiungete Piazza del
              Plebiscito, il Maschio Angioino, Spaccanapoli e il Teatro San Carlo, mentre
              la metropolitana vi porta ovunque, dal Museo Archeologico alla Stazione
              Centrale. Al rientro, vi aspettano il silenzio delle nostre camere e
              un&apos;ospitalità autenticamente napoletana.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex items-center gap-3 text-sm text-taupe-dark">
              <MapPin className="h-5 w-5 text-bronze" />
              <span>{site.address}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
