import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { HardHat, Hammer, Building2, Ruler, FileCheck, Clock } from "lucide-react";

export default function ConstructionServices() {
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

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Bytový komplex Praha 5",
      category: "Rezidenční výstavba",
      description: "Realizace moderního bytového komplexu s 48 bytovými jednotkami a podzemním parkováním."
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Administrativní centrum Brno",
      category: "Komerční objekty",
      description: "Výstavba moderního administrativního centra s kancelářskými prostory a obchodní pasáží."
    },
    {
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      title: "Revitalizace historické vily",
      category: "Rekonstrukce",
      description: "Komplexní rekonstrukce historické vily s důrazem na zachování původních architektonických prvků."
    }
  ];

  return (
    <ServiceLayout 
      title="Stavební činnost HS" 
      subtitle="Kvalitní řešení pro všechny typy staveb"
      bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    >
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
            Profesionální stavební služby
          </h2>
          <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
            HS-GROUP nabízí kompletní portfolio stavebních služeb od projekčních prací přes realizaci 
            až po kolaudaci. Naše stavební divize disponuje zkušeným týmem odborníků a nejmodernějšími 
            technologiemi, což nám umožňuje realizovat stavební projekty všech velikostí a typů.
          </p>
          <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
            Klademe důraz na kvalitu provedených prací, dodržování stanovených termínů a efektivní 
            využívání zdrojů. Díky úzké spolupráci s naší realitní divizí dokážeme zajistit komplexní 
            služby od vyhledání vhodného pozemku, přes výstavbu až po případný prodej nebo pronájem.
          </p>
        </div>

        <Parallax translateY={[-10, 10]}>
          <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
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
                <h3 className="text-xl font-bold mb-3 font-['Montserrat']">{service.title}</h3>
                <p className="font-['Open_Sans']">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
              Naše <span className="text-primary">realizované projekty</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg group"
                >
                  <div className="relative h-64">
                    <div 
                      className="absolute inset-0 bg-center bg-cover transition-all duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-black bg-opacity-80 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-primary text-sm">{project.category}</span>
                        <h3 className="text-xl font-bold font-['Montserrat']">{project.title}</h3>
                        <p className="text-sm text-gray-300 mt-2 font-['Open_Sans']">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <ScrollReveal direction="up">
            <div className="bg-[#121212] p-8 rounded-md border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Výhody spolupráce s HS-GROUP</h3>
              <ul className="space-y-3 font-['Open_Sans']">
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
                  <span>Propojení s dalšími službami - právní, realitní a finanční poradenství</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ServiceLayout>
  );
}