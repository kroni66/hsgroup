import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { PieChart, TrendingUp, FileMinus, FileSearch, Globe, ShieldAlert } from "lucide-react";

export default function TaxServices() {
  const services = [
    {
      icon: <PieChart className="w-12 h-12 text-primary" />,
      title: "Daňová optimalizace",
      description: "Legální minimalizace daňové zátěže a efektivní daňové plánování pro firmy i jednotlivce."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Daňová přiznání",
      description: "Zpracování všech typů daňových přiznání s důrazem na přesnost a minimalizaci rizik."
    },
    {
      icon: <FileMinus className="w-12 h-12 text-primary" />,
      title: "DPH poradenství",
      description: "Odborné poradenství v oblasti DPH včetně přeshraničních transakcí a vrácení daně."
    },
    {
      icon: <FileSearch className="w-12 h-12 text-primary" />,
      title: "Daňové kontroly",
      description: "Zastupování při daňových kontrolách a efektivní řešení daňových sporů s finančním úřadem."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Mezinárodní zdanění",
      description: "Poradenství v oblasti mezinárodních daňových struktur a smluv o zamezení dvojího zdanění."
    },
    {
      icon: <ShieldAlert className="w-12 h-12 text-primary" />,
      title: "Prevence rizik",
      description: "Identifikace daňových rizik a příprava preventivních opatření pro zajištění daňové bezpečnosti."
    }
  ];

  return (
    <ServiceLayout 
      title="Daňové poradenství HS" 
      subtitle="Profesionální daňové služby pro optimalizaci vašich financí"
      bgImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    >
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
            Expertní daňové poradenství
          </h2>
          <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
            HS-GROUP poskytuje komplexní daňové poradenství s cílem optimalizovat vaši daňovou povinnost 
            v souladu s platnou legislativou. Naši daňoví poradci mají bohaté zkušenosti 
            ve všech oblastech zdanění a pomohou vám najít nejefektivnější řešení pro vaše podnikání.
          </p>
          <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
            Ať už potřebujete pomoc s daňovým přiznáním, hledáte možnosti daňové optimalizace nebo řešíte 
            složitější daňové situace, jsme připraveni vám poskytnout odbornou podporu a zajistit, 
            že vaše daňové záležitosti budou v pořádku.
          </p>
        </div>

        <Parallax translateY={[-10, 10]}>
          <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
            Naše <span className="text-primary">daňové služby</span>
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
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Proč zvolit daňové poradenství HS-GROUP?</h3>
              <ul className="space-y-3 font-['Open_Sans']">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Certifikovaní daňoví poradci s mnohaletou praxí</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Individuální přístup k daňové situaci každého klienta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Dlouhodobé plánování a komplexní strategie pro minimalizaci daní</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Zastupování při jednání s finančními úřady</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Propojení s účetními službami pro celostní řešení</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ServiceLayout>
  );
}