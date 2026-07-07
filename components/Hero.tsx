import Image from "next/image";
import { heroImage, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center">
      <Image
        src={heroImage}
        alt="Camera elegante del B&B TraMare"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/60" />

      <div className="animate-hero-rise relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <p className="text-xs font-medium uppercase tracking-[0.45em] text-white/85">
          {site.tagline}
        </p>
        <h1 className="mt-6 font-serif text-6xl leading-tight md:text-8xl">
          {site.name}
        </h1>
        <div className="mx-auto mt-8 h-px w-20 bg-bronze" />
        <p className="mt-8 text-lg font-light tracking-wide text-white/90 md:text-xl">
          {site.slogan}
        </p>
        <a
          href="#prenota"
          className="mt-12 inline-block rounded-full bg-bronze px-10 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-xl shadow-ink/30 transition-all duration-300 hover:-translate-y-1 hover:bg-bronze-dark hover:shadow-2xl"
        >
          Prenota ora
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="h-14 w-px animate-pulse bg-gradient-to-b from-white/0 via-white/70 to-white/0" />
      </div>
    </section>
  );
}
