import About from "@/components/About";
import BookingSection from "@/components/BookingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} tagline={dict.tagline} t={dict.nav} />
      <main>
        <Hero tagline={dict.tagline} slogan={dict.slogan} t={dict.hero} />
        <BookingSection lang={lang} t={dict.booking} />
        <About t={dict.about} />
        <Services t={dict.services} />
        <Gallery t={dict.gallery} />
        <WhyUs t={dict.why} />
        <Contact t={dict.contact} />
      </main>
      <Footer tagline={dict.tagline} t={dict.footer} />
    </>
  );
}
