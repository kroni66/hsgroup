import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { Calculator, FileText, BarChart3, FileCheck, Clock, ShieldCheck } from "lucide-react";

export default function AccountingServices() {
  const services = [
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: "Vedení účetnictví",
      description: "Kompletní zpracování účetnictví a daňové evidence pro firmy všech velikostí."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Mzdová agenda",
      description: "Zpracování mezd, personální agendy a zákonných povinností vůči státním institucím."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Finanční reporting",
      description: "Pravidelné finanční přehledy a analýzy pro efektivní řízení vašeho podnikání."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Účetní závěrky",
      description: "Sestavení roční účetní závěrky dle české legislativy i mezinárodních standardů."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Průběžné konzultace",
      description: "Odborné konzultace a poradenství v oblasti účetnictví a financí."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Kontrola účetnictví",
      description: "Audit a kontrola stávajícího účetnictví, identifikace rizik a návrhy optimalizace."
    }
  ];

  return (
    <ServiceLayout 
      title="Správa účetnictví HS" 
      subtitle="Spolehlivé účetní služby pro vaše podnikání"
      bgImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    >
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
            Profesionální účetní služby
          </h2>
          <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
            HS-GROUP nabízí komplexní správu účetnictví, která vám ušetří čas a zajistí, že vaše finanční záležitosti 
            budou v pořádku. Naši zkušení účetní specialisté se postarají o všechny aspekty vašeho účetnictví, 
            od každodenních transakcí až po roční závěrky.
          </p>
          <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
            Díky našim službám získáte nejen správně vedené účetnictví v souladu s aktuální legislativou, 
            ale také cenné finanční přehledy a analýzy, které vám pomohou lépe řídit vaše podnikání a plánovat 
            budoucí rozvoj.
          </p>
        </div>

        <Parallax translateY={[-10, 10]}>
          <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
            Naše <span className="text-primary">účetní služby</span>
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
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Výhody správy účetnictví s HS-GROUP</h3>
              <ul className="space-y-3 font-['Open_Sans']">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Profesionální tým účetních s mnohaletou praxí</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Moderní účetní software a zabezpečené systémy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Pravidelné reporty a přehled o finanční situaci</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Flexibilní služby podle potřeb vaší společnosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Propojení s daňovým poradenstvím</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ServiceLayout>
  );
}