"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#prenota", label: "Prenota" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#galleria", label: "Galleria" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-cream/95 shadow-sm shadow-ink/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span
            className={`font-serif text-2xl tracking-wide transition-colors duration-500 ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            TraMare
          </span>
          <span
            className={`mt-1 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
              solid ? "text-bronze" : "text-white/80"
            }`}
          >
            B&B · Napoli
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:text-bronze ${
                  solid ? "text-taupe-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full bg-bronze px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-bronze/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-dark"
            >
              <Phone className="h-4 w-4" />
              Chiama
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className={`rounded-full p-2 transition-colors duration-300 md:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-linen bg-cream px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base uppercase tracking-[0.15em] text-taupe-dark transition-colors hover:text-bronze"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={site.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-medium text-white"
              >
                <Phone className="h-4 w-4" />
                Chiama ora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
