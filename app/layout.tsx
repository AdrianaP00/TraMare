import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TraMare · B&B Boutique nel cuore di Napoli",
  description:
    "TraMare è un bed & breakfast boutique nel centro di Napoli: camere eleganti, colazione inclusa e il lungomare a due passi. Eleganza partenopea, tra mare e storia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body
        className={`${playfair.variable} ${jost.variable} bg-cream font-sans text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
