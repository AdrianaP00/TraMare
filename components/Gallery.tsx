import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="galleria" className="bg-sand/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Galleria"
          title="I nostri spazi"
          description="Camere luminose, materiali naturali e angoli pensati per il relax: uno sguardo agli ambienti che vi accoglieranno."
        />

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={(index % 3) * 100}
              className={image.span === "wide" ? "sm:col-span-2" : ""}
            >
              <div className="group relative h-full min-h-[260px] overflow-hidden rounded-3xl shadow-md shadow-ink/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-5 left-6 translate-y-3 text-sm font-medium tracking-wide text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
