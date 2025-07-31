import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HardHat, Hammer, Building2, Ruler, FileCheck, Clock } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Výstavba nemovitostí",
      description: "Kompletní realizace bytových, rodinných i komerčních staveb od projektu po kolaudaci."
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: "Rekonstrukce",
      description: "Komplexní i částečné rekonstrukce nemovitostí s důrazem na kvalitu a dodržení termínů."
    },
    {
      icon: <Ruler className="w-12 h-12 text-primary" />,
      title: "Projekční činnost",
      description: "Projekční práce od studií a vizualizací po kompletní projektovou dokumentaci."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Stavební povolení",
      description: "Zajištění potřebných povolení a vyjádření dotčených orgánů pro vaši stavbu."
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: "Dozor a řízení",
      description: "Odborný technický dozor a profesionální řízení staveb i rekonstrukcí."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Harmonogram prací",
      description: "Vytvoření a dodržování přesných harmonogramů stavebních prací a dodávek materiálů."
    }
  ];



  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Main Content Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-['Montserrat'] text-white">
                Profesionální stavební služby
              </h2>
              <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed text-gray-300">
                HS-GROUP nabízí kompletní portfolio stavebních služeb od projekčních prací přes realizaci 
                až po kolaudaci. Naše stavební divize disponuje zkušeným týmem odborníků a nejmodernějšími 
                technologiemi, což nám umožňuje realizovat stavební projekty všech velikostí a typů.
              </p>
              <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed text-gray-300">
                Klademe důraz na kvalitu provedených prací, dodržování stanovených termínů a efektivní 
                využívání zdrojů. Díky úzké spolupráci s naší realitní divizí dokážeme zajistit komplexní 
                služby od vyhledání vhodného pozemku, přes výstavbu až po případný prodej nebo pronájem.
              </p>
            </div>

            <Parallax translateY={[-10, 10]}>
              <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center text-white">
                Naše <span className="text-primary">stavební služby</span>
              </h2>
            </Parallax>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1} distance={20}>
                  <div className="bg-[#121212] p-8 rounded-md border border-gray-800 hover:border-primary transition-all duration-300">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-['Montserrat'] text-white">{service.title}</h3>
                    <p className="font-['Open_Sans'] text-gray-300">{service.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>



            <div className="mt-12">
              <ScrollReveal direction="up">
                <div className="bg-[#121212] p-8 rounded-md border border-gray-800">
                  <h3 className="text-2xl font-bold mb-4 font-['Montserrat'] text-white">Výhody spolupráce s HS-GROUP</h3>
                  <ul className="space-y-3 font-['Open_Sans'] text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Profesionální tým s dlouholetými zkušenostmi v oboru</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Komplexní služby pod jednou střechou - od projektu po realizaci</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Transparentní cenová politika bez skrytých poplatků</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Důraz na kvalitu použitých materiálů a provedených prací</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Propojení s dalšími službami - realitní a finanční poradenství</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
}
