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
import { site } from "@/lib/site";

const MIN_GUESTS = 1;
const MAX_GUESTS = 6;

function formatDate(date: Date | null): string {
  if (!date) return "Aggiungi data";
  return date.toLocaleDateString("it-IT", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function formatDateLong(date: Date): string {
  return date.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BookingSection() {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(2);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [result, setResult] = useState<"idle" | "missing" | "available">("idle");
  const widgetRef = useRef<HTMLDivElement>(null);

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
                  Prenota il tuo soggiorno
                </p>
                <h2 className="mt-2 font-serif text-2xl text-ink md:text-3xl">
                  Verifica la disponibilità
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
                    Check-in
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
                    Check-out
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
                    Ospiti
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-ink">
                    {guests} {guests === 1 ? "ospite" : "ospiti"}
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Riduci ospiti"
                    disabled={guests <= MIN_GUESTS}
                    onClick={() => setGuests((count) => Math.max(MIN_GUESTS, count - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-linen text-taupe-dark transition-colors hover:border-bronze hover:text-bronze disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Aumenta ospiti"
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
                Verifica disponibilità
              </button>
            </div>

            {result === "missing" && (
              <p className="mt-4 text-sm text-bronze-dark">
                Seleziona le date di check-in e check-out per continuare.
              </p>
            )}

            {result === "available" && checkIn && checkOut && (
              <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-bronze/20 bg-sand/60 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-bronze" />
                  <div>
                    <p className="font-serif text-lg text-ink">
                      Ottime notizie: siamo disponibili!
                    </p>
                    <p className="mt-1 text-sm text-taupe-dark">
                      Dal {formatDateLong(checkIn)} al {formatDateLong(checkOut)} ·{" "}
                      {nights} {nights === 1 ? "notte" : "notti"} · {guests}{" "}
                      {guests === 1 ? "ospite" : "ospiti"}. Chiamaci per confermare la tua
                      prenotazione.
                    </p>
                  </div>
                </div>
                <a
                  href={site.phoneHref}
                  className="flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/85"
                >
                  <Phone className="h-4 w-4" />
                  Chiama ora
                </a>
              </div>
            )}
          </div>

          {calendarOpen && (
            <div className="absolute left-0 right-0 top-full z-30 mt-3 md:left-8 md:right-8">
              <BookingCalendar checkIn={checkIn} checkOut={checkOut} onSelect={selectDate} />
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
