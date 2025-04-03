import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { Gavel, Scale, FileText, FileCheck, Users, BookOpen } from "lucide-react";

export default function LegalServices() {
  const services = [
    {
      icon: <Gavel className="w-12 h-12 text-primary" />,
      title: "Obchodní právo",
      description: "Komplexní právní služby v oblasti obchodního práva, fúzí a akvizic, zakládání společností a právní analýzy."
    },
    {
      icon: <Scale className="w-12 h-12 text-primary" />,
      title: "Zastupování před soudy",
      description: "Zastupování v soudních řízeních, včetně specializovaných arbitráží a sporů v oblasti nemovitostí."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Smluvní právo",
      description: "Příprava a revize smluv, právní poradenství při vyjednávání podmínek a zajištění právní jistoty."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Nemovitostní právo",
      description: "Právní služby související s transakcemi nemovitostí, převodem vlastnictví a řešením právních vad."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Korporátní právo",
      description: "Právní poradenství pro obchodní společnosti, nastavení korporátních struktur a governance."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Právní poradenství",
      description: "Strategické právní poradenství pro jednotlivce i společnosti v oblasti investic a podnikání."
    }
  ];

  return (
    <ServiceLayout 
      title="Právní služby HS" 
      subtitle="Profesionální právní poradenství pro firmy i jednotlivce"
      bgImage="https://images.unsplash.com/photo-1589391886689-d6e6aae3fb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    >
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
            Komplexní právní služby
          </h2>
          <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
            Naše kancelář HS-GROUP poskytuje komplexní právní služby zaměřené na potřeby firem i jednotlivců. 
            Náš tým zkušených právníků se specializuje na obchodní, nemovitostní a korporátní právo s důrazem 
            na praktická a efektivní řešení.
          </p>
          <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
            S naším týmem získáte nejen právní jistotu, ale i strategického partnera, který vám pomůže dosáhnout 
            vašich podnikatelských cílů. Všechny naše služby jsou poskytovány s maximální profesionalitou a individuálním 
            přístupem ke každému klientovi.
          </p>
        </div>

        <Parallax translateY={[-10, 10]}>
          <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
            Naše <span className="text-primary">specializace</span>
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

        <div className="mt-12">
          <ScrollReveal direction="up">
            <div className="bg-[#121212] p-8 rounded-md border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Proč si vybrat právní služby HS-GROUP?</h3>
              <ul className="space-y-3 font-['Open_Sans']">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Tým zkušených právníků s praxí v různých oblastech práva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Individuální přístup a řešení na míru podle vašich potřeb</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Transparentní cenová politika a jasné podmínky spolupráce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Komplexní poradenství včetně návaznosti na další služby HS-GROUP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Proaktivní přístup a zaměření na dlouhodobé partnerství</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ServiceLayout>
  );
}