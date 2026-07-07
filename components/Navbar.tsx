"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

type NavbarProps = {
  lang: Locale;
  tagline: string;
  t: Dictionary["nav"];
};

function LanguageSwitcher({ lang, solid }: { lang: Locale; solid: boolean }) {
  return (
    <span className="flex items-center gap-2 text-sm tracking-[0.15em]">
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 && (
            <span className={solid ? "text-taupe/50" : "text-white/50"}>/</span>
          )}
          <Link
            href={`/${locale}`}
            aria-current={locale === lang ? "page" : undefined}
            className={`uppercase transition-colors duration-300 hover:text-bronze ${
              locale === lang
                ? "font-semibold text-bronze"
                : solid
                  ? "text-taupe-dark"
                  : "text-white/90"
            }`}
          >
            {locale}
          </Link>
        </span>
      ))}
    </span>
  );
}

export default function Navbar({ lang, tagline, t }: NavbarProps) {
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
            {site.name}
          </span>
          <span
            className={`mt-1 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
              solid ? "text-bronze" : "text-white/80"
            }`}
          >
            {tagline}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.links.map((link) => (
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
            <LanguageSwitcher lang={lang} solid={solid} />
          </li>
          <li>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full bg-bronze px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-bronze/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-dark"
            >
              <Phone className="h-4 w-4" />
              {t.call}
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? t.closeMenu : t.openMenu}
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
            {t.links.map((link) => (
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
            <li>
              <LanguageSwitcher lang={lang} solid />
            </li>
            <li className="pt-2">
              <a
                href={site.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-medium text-white"
              >
                <Phone className="h-4 w-4" />
                {t.callNow}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
