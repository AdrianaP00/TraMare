import Image from "next/image";
import Reveal from "@/components/Reveal";
import { features, whyUsImage } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="perche-noi" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-bronze">
              Perché scegliere noi
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
              L&apos;ospitalità che fa la differenza
            </h2>
            <div className="mt-6 h-px w-16 bg-bronze/60" />
          </Reveal>

          <ul className="mt-10 space-y-7">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 90}>
                <li className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-bronze/30 bg-cream text-bronze">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-taupe-dark">
                      {feature.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-ink/15">
            <Image
              src={whyUsImage}
              alt="Dettaglio d'arredo del B&B TraMare"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
