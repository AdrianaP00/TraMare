import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Dictionary } from "@/lib/i18n";
import { serviceIcons } from "@/lib/site";

export default function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="servizi" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal key={service.title} delay={(index % 4) * 90}>
                <div className="group h-full rounded-2xl border border-linen bg-white p-7 shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-bronze transition-colors duration-300 group-hover:bg-bronze group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-taupe-dark">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
