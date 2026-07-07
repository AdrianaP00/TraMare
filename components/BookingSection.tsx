"use client";

import {
  CalendarDays,
  CheckCircle2,
  Minus,
  Phone,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import Reveal from "@/components/Reveal";
import type { Dictionary, Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

type BookingSectionProps = {
  lang: Locale;
  t: Dictionary["booking"];
};

export default function BookingSection({ lang, t }: BookingSectionProps) {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [result, setResult] = useState<"idle" | "missing" | "available">("idle");
  const widgetRef = useRef<HTMLDivElement>(null);

  const dateLocale = lang === "it" ? "it-IT" : "en-GB";

  const formatDate = (date: Date | null) =>
    date
      ? date.toLocaleDateString(dateLocale, {
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      : t.addDate;

  const formatDateLong = (date: Date) =>
    date.toLocaleDateString(dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  useEffect(() => {
    if (!calendarOpen) return;
    const onClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [calendarOpen]);

  const selectDate = (date: Date) => {
    setResult("idle");
    if (!checkIn || (checkIn && checkOut) || date <= checkIn) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      setCheckOut(date);
      setCalendarOpen(false);
    }
  };

  const checkAvailability = () => {
    if (!checkIn || !checkOut) {
      setResult("missing");
      setCalendarOpen(true);
      return;
    }
    setResult("available");
  };

  const nights =
    checkIn && checkOut
      ? Math.round((checkOut.getTime() - checkIn.getTime()) / 86_400_000)
      : 0;

  const guestsWord = guests === 1 ? t.guestSingular : t.guestPlural;
  const nightsWord = nights === 1 ? t.nightSingular : t.nightPlural;

  const dateFieldClasses =
    "flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border border-linen bg-cream px-5 py-4 text-left transition-all duration-300 hover:border-bronze/50 hover:shadow-md hover:shadow-bronze/10";

  return (
    <section id="prenota" className="relative z-20 -mt-24 px-6 pb-24">
      <Reveal className="mx-auto max-w-5xl">
        <div ref={widgetRef} className="relative">
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-ink/10 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze">
                  {t.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-ink md:text-3xl">
                  {t.title}
                </h2>
              </div>
              <CalendarDays className="hidden h-10 w-10 text-bronze/40 md:block" />
            </div>

            <div className="flex flex-col gap-3 lg:flex-row">
              <button
                type="button"
                onClick={() => setCalendarOpen(true)}
                className={dateFieldClasses}
              >
                <CalendarDays className="h-5 w-5 shrink-0 text-bronze" />
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-taupe">
                    {t.checkIn}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium capitalize text-ink">
                    {formatDate(checkIn)}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setCalendarOpen(true)}
                className={dateFieldClasses}
              >
                <CalendarDays className="h-5 w-5 shrink-0 text-bronze" />
                <span>
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-taupe">
                    {t.checkOut}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium capitalize text-ink">
                    {formatDate(checkOut)}
                  </span>
                </span>
              </button>

              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-linen bg-cream px-5 py-4">
                <Users className="h-5 w-5 shrink-0 text-bronze" />
                <span className="flex-1">
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-taupe">
                    {t.guestsLabel}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-ink">
                    {guests} {guestsWord}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label={t.decreaseGuests}
                    disabled={guests <= MIN_GUESTS}
                    onClick={() => setGuests((count) => Math.max(MIN_GUESTS, count - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-linen text-taupe-dark transition-colors hover:border-bronze hover:text-bronze disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={t.increaseGuests}
                    disabled={guests >= MAX_GUESTS}
                    onClick={() => setGuests((count) => Math.min(MAX_GUESTS, count + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-linen text-taupe-dark transition-colors hover:border-bronze hover:text-bronze disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </span>
              </div>

              <button
                type="button"
                onClick={checkAvailability}
                className="flex items-center justify-center gap-2 rounded-2xl bg-bronze px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-lg shadow-bronze/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bronze-dark lg:shrink-0"
              >
                <Search className="h-4 w-4" />
                {t.verify}
              </button>
            </div>

            {result === "missing" && (
              <p className="mt-4 text-sm text-bronze-dark">{t.missingDates}</p>
            )}

            {result === "available" && checkIn && checkOut && (
              <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-bronze/20 bg-sand/60 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-bronze" />
                  <div>
                    <p className="font-serif text-lg text-ink">{t.successTitle}</p>
                    <p className="mt-1 text-sm text-taupe-dark">
                      {t.from} {formatDateLong(checkIn)} {t.to}{" "}
                      {formatDateLong(checkOut)} · {nights} {nightsWord} · {guests}{" "}
                      {guestsWord}. {t.callToConfirm}
                    </p>
                  </div>
                </div>
                <a
                  href={site.phoneHref}
                  className="flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/85"
                >
                  <Phone className="h-4 w-4" />
                  {t.callNow}
                </a>
              </div>
            )}
          </div>

          {calendarOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-3 md:left-8 md:right-8">
              <BookingCalendar
                checkIn={checkIn}
                checkOut={checkOut}
                onSelect={selectDate}
                labels={t.calendar}
              />
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
