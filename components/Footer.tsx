import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-serif text-xl tracking-wide">{site.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
            {site.tagline}
          </p>
        </div>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
        </p>

        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="text-white/60 transition-colors duration-300 hover:text-bronze"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-white/60 transition-colors duration-300 hover:text-bronze"
          >
            Cookie
          </a>
        </nav>
      </div>
    </footer>
  );
}
