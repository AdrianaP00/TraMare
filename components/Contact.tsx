import { Clock, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contatti" className="bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-bronze">
            Contatti
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Prenota una telefonata, il resto lo facciamo noi
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-bronze/60" />
          <p className="mt-6 leading-relaxed text-white/70">
            Niente moduli, niente attese: rispondiamo personalmente per consigliarvi la
            camera perfetta e organizzare ogni dettaglio del soggiorno.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={site.phoneHref}
            className="mt-10 inline-block font-serif text-4xl tracking-wide text-white transition-colors duration-300 hover:text-bronze md:text-6xl"
          >
            {site.phone}
          </a>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={site.phoneHref}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-bronze px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-xl shadow-bronze/20 transition-all duration-300 hover:-translate-y-1 hover:bg-bronze-dark"
          >
            <Phone className="h-4 w-4" />
            Chiama ora
          </a>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 text-sm text-white/60 md:flex-row md:gap-10">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-bronze" />
              {site.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-bronze" />
              Rispondiamo tutti i giorni, 8:00 – 22:00
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
