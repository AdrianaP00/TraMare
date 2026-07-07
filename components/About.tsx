import { MapPin } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/i18n";
import { aboutImage, site } from "@/lib/site";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="chi-siamo" className="bg-sand/50 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-ink/15">
              <Image
                src={aboutImage}
                alt={t.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-ink/10 md:-right-8">
              <p className="font-serif text-3xl text-bronze">{t.rating}</p>
              <p className="text-xs uppercase tracking-wider text-taupe">
                {t.ratingLabel}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-bronze">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
              {t.title}
            </h2>
            <div className="mt-6 h-px w-16 bg-bronze/60" />
          </Reveal>

          <Reveal delay={120}>
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-5 leading-relaxed text-taupe-dark first:mt-8">
                {paragraph}
              </p>
            ))}
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
