import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { FileClock, Building, FileQuestion, FileX, FileCheck, ShieldCheck } from "lucide-react";

export default function LiquidationServices() {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: "Likvidace společností",
      description: "Komplexní zajištění celého procesu likvidace obchodních společností včetně veškeré administrativy."
    },
    {
      icon: <FileQuestion className="w-12 h-12 text-primary" />,
      title: "Analýza likvidace",
      description: "Odborná analýza stavu společnosti před zahájením likvidace a návrh optimálního postupu."
    },
    {
      icon: <FileClock className="w-12 h-12 text-primary" />,
      title: "Přípravná fáze",
      description: "Zajištění všech nezbytných kroků před zahájením formální likvidace včetně auditu závazků."
    },
    {
      icon: <FileX className="w-12 h-12 text-primary" />,
      title: "Likvidátor",
      description: "Poskytnutí profesionálního likvidátora s potřebnými zkušenostmi a odbornou znalostí."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Ukončení likvidace",
      description: "Zajištění všech procesů spojených s řádným ukončením likvidace a výmazem z rejstříku."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Ochrana před riziky",
      description: "Ochrana před riziky spojenými s likvidací a zajištění souladu s předpisy."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Přípravná fáze",
      description: "Analýza společnosti, vypořádání aktivních obchodních vztahů a příprava dokumentace."
    },
    {
      number: "02",
      title: "Formální zahájení likvidace",
      description: "Jmenování likvidátora, zápis do obchodního rejstříku a oznámení věřitelům."
    },
    {
      number: "03",
      title: "Proces likvidace",
      description: "Vypořádání majetku, závazků a pohledávek společnosti, sestavení likvidační účetní závěrky."
    },
    {
      number: "04",
      title: "Ukončení likvidace",
      description: "Návrh na rozdělení likvidačního zůstatku, schválení zprávy o průběhu likvidace."
    },
    {
      number: "05",
      title: "Výmaz z rejstříku",
      description: "Podání návrhu na výmaz společnosti z obchodního rejstříku a archivace dokumentů."
    }
  ];

  return (
    <ServiceLayout 
      title="Likvidace firem HS" 
      subtitle="Profesionální a efektivní řešení ukončení podnikání"
      bgImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
    >
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
            Profesionální likvidace společností
          </h2>
          <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
            HS-GROUP nabízí kompletní služby v oblasti likvidace obchodních společností. Proces likvidace 
            je složitý úkon, který vyžaduje odborné znalosti a zkušenosti. Náš tým specialistů 
            zajistí hladký průběh celého procesu od analýzy stavu společnosti až po výmaz z obchodního rejstříku.
          </p>
          <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
            Díky našim službám minimalizujete rizika spojená s likvidací a zajistíte, že celý proces 
            proběhne v souladu s platnou legislativou. Poskytujeme také poradenství v oblasti 
            insolvenčního řízení a jiných alternativ k likvidaci.
          </p>
        </div>

        <Parallax translateY={[-10, 10]}>
          <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
            Naše <span className="text-primary">likvidační služby</span>
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
              Průběh <span className="text-primary">likvidace</span>
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row items-start md:items-center p-6 bg-[#121212] rounded-md border border-gray-800"
                >
                  <div className="text-4xl font-bold text-primary mr-8 mb-4 md:mb-0 font-['Montserrat']">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{step.title}</h3>
                    <p className="font-['Open_Sans']">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <ScrollReveal direction="up">
            <div className="bg-[#121212] p-8 rounded-md border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Proč zvolit likvidační služby HS-GROUP?</h3>
              <ul className="space-y-3 font-['Open_Sans']">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Zkušení odborníci s praxí v oblasti likvidací obchodních společností</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Komplexní služby pokrývající celý proces likvidace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Transparentní podmínky a pravidelná komunikace během celého procesu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Individuální přístup zohledňující specifika každé společnosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Propojení s účetními službami pro komplexní řešení</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ServiceLayout>
  );
}