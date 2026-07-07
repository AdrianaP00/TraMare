"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const WEEKDAYS = ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"];

const MONTHS = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Celle del mese: null per i giorni vuoti iniziali, settimana che parte da lunedì. */
function getMonthCells(year: number, month: number): (Date | null)[] {
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = Array.from({ length: firstWeekday }, () => null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  return cells;
}

type BookingCalendarProps = {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelect: (date: Date) => void;
};

function MonthGrid({
  year,
  month,
  checkIn,
  checkOut,
  onSelect,
}: BookingCalendarProps & { year: number; month: number }) {
  const today = startOfDay(new Date());
  const cells = getMonthCells(year, month);

  return (
    <div className="w-full">
      <p className="mb-4 text-center font-serif text-lg text-ink">
        {MONTHS[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((day) => (
          <span
            key={day}
            className="pb-2 text-[11px] font-medium uppercase tracking-wider text-taupe"
          >
            {day}
          </span>
        ))}
        {cells.map((date, index) => {
          if (!date) return <span key={`empty-${index}`} />;

          const disabled = date < today;
          const isStart = checkIn !== null && isSameDay(date, checkIn);
          const isEnd = checkOut !== null && isSameDay(date, checkOut);
          const inRange =
            checkIn !== null && checkOut !== null && date > checkIn && date < checkOut;

          let dayClasses =
            "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors duration-200";
          if (disabled) {
            dayClasses += " cursor-not-allowed text-taupe/40 line-through";
          } else if (isStart || isEnd) {
            dayClasses += " bg-bronze font-semibold text-white shadow-md shadow-bronze/30";
          } else if (inRange) {
            dayClasses += " bg-sand text-bronze-dark";
          } else {
            dayClasses += " cursor-pointer text-ink hover:bg-linen";
          }

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(date)}
              className={dayClasses}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookingCalendar({ checkIn, checkOut, onSelect }: BookingCalendarProps) {
  const now = new Date();
  const [offset, setOffset] = useState(0);

  const first = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const second = new Date(now.getFullYear(), now.getMonth() + offset + 1, 1);

  return (
    <div className="rounded-2xl border border-linen bg-white p-6 shadow-xl shadow-ink/10">
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          aria-label="Mese precedente"
          disabled={offset === 0}
          onClick={() => setOffset((value) => Math.max(0, value - 1))}
          className="rounded-full p-2 text-taupe-dark transition-colors hover:bg-sand disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="text-xs uppercase tracking-[0.25em] text-taupe">
          Seleziona le date
        </p>
        <button
          type="button"
          aria-label="Mese successivo"
          onClick={() => setOffset((value) => value + 1)}
          className="rounded-full p-2 text-taupe-dark transition-colors hover:bg-sand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-8">
        <MonthGrid
          year={first.getFullYear()}
          month={first.getMonth()}
          checkIn={checkIn}
          checkOut={checkOut}
          onSelect={onSelect}
        />
        <div className="hidden w-full md:block">
          <MonthGrid
            year={second.getFullYear()}
            month={second.getMonth()}
            checkIn={checkIn}
            checkOut={checkOut}
            onSelect={onSelect}
          />
        </div>
      </div>
    </div>
  );
}
