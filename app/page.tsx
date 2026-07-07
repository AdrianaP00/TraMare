import About from "@/components/About";
import BookingSection from "@/components/BookingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BookingSection />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
