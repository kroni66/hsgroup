import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { HistorySection } from "@/components/HistorySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsCounter />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <HistorySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
