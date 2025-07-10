import { ServiceLayout } from "@/components/ServiceLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { Home, Building, Search, PenTool, BarChart3, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function RealEstateServices() {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: "Prodej nemovitostí",
      description: "Komplexní servis při prodeji bytů, domů i komerčních nemovitostí s důrazem na maximální zhodnocení."
    },
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: "Pronájem nemovitostí",
      description: "Zprostředkování pronájmů s důkladným prověřením nájemníků a zajištěním kompletní podpory."
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Vyhledávání investic",
      description: "Aktivní vyhledávání nemovitostních investičních příležitostí dle vašich požadavků a rozpočtu."
    },
    {
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "Dokumentace a poradenství",
      description: "Kompletní služby spojené s realitními transakcemi včetně přípravy dokumentace a poradenství."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Analýza trhu",
      description: "Odborná analýza realitního trhu a poradenství pro stanovení optimální ceny nemovitostí."
    },
    {
      icon: <Map className="w-12 h-12 text-primary" />,
      title: "Development",
      description: "Poradenství a komplexní služby pro developery a investory realizující developerské projekty."
    }
  ];

  const propertyTypes = [
    {
      title: "Byty",
      description: "Rezidenční byty všech velikostí od garsonek po luxusní penthousy v lukrativních lokalitách.",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Rodinné domy",
      description: "Samostatně stojící domy, řadové domy a vily pro komfortní rodinné bydlení.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Komerční nemovitosti",
      description: "Kanceláře, obchodní prostory a průmyslové objekty pro podnikání a investice.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Pozemky",
      description: "Stavební pozemky, zahrady a investiční plochy s různým využitím.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
    }
  ];

  return (
    <ServiceLayout 
      title="Realitní agentura HS" 
      subtitle="Profesionální služby v oblasti nemovitostí"
      bgImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    >
      <div className="grid grid-cols-1 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6 font-['Montserrat']">
            Komplexní realitní služby
          </h2>
          <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
            Realitní agentura HS-GROUP přináší profesionální přístup k obchodování s nemovitostmi. 
            Specializujeme se na prodej a pronájem rezidenčních i komerčních nemovitostí s důrazem 
            na individuální přístup ke každému klientovi a každé nemovitosti.
          </p>
          <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
            Naším cílem je poskytovat komplexní služby pokrývající celý proces realitní transakce - 
            od prvotní konzultace, přes marketing nemovitosti a jednání s potenciálními zájemci 
            až po kompletní servis a úspěšné dokončení obchodu.
          </p>
        </div>

        <Parallax translateY={[-10, 10]}>
          <h2 className="text-3xl font-bold mb-10 font-['Montserrat'] text-center">
            Naše <span className="text-primary">realitní služby</span>
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
              Typy <span className="text-primary">nemovitostí</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {propertyTypes.map((property, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg group"
                >
                  <div 
                    className="h-80 bg-center bg-cover transition-all duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${property.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2 font-['Montserrat']">{property.title}</h3>
                    <p className="font-['Open_Sans'] text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{property.description}</p>
                    <Button 
                      variant="outline" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Zobrazit nabídku
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <ScrollReveal direction="up">
            <div className="bg-[#121212] p-8 rounded-md border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Proč zvolit realitní služby HS-GROUP?</h3>
              <ul className="space-y-3 font-['Open_Sans']">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Zkušený tým realitních makléřů s detailní znalostí trhu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Profesionální marketing nemovitostí včetně kvalitních fotografií a virtuálních prohlídek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kompletní servis zajištěný vlastním odborným týmem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Transparentní podmínky a férovost ve všech obchodních vztazích</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Propojení s investičním poradenstvím a finančními službami</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ServiceLayout>
  );
}