import { motion } from "framer-motion";
import { Building, ChartLine, Handshake, Diamond, Percent, Coins, Gavel, Calculator, FileText, FileQuestion, Home, HardHat } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Parallax } from "react-scroll-parallax";
import { Link } from "wouter";

// Updated service data with additional styling parameters and links to dedicated pages
const servicesData = [
  {
    icon: <Gavel className="text-3xl" />,
    title: "Právní služby HS",
    description: "Kompletní právní servis pro firmy i jednotlivce v oblasti obchodního a nemovitostního práva.",
    delay: 0.1,
    direction: "up" as const,
    link: "/pravni-sluzby"
  },
  {
    icon: <Calculator className="text-3xl" />,
    title: "Správa účetnictví HS",
    description: "Profesionální vedení účetnictví, zpracování daňových přiznání a finanční poradenství.",
    delay: 0.2,
    direction: "up" as const,
    link: "/sprava-ucetnictvi"
  },
  {
    icon: <FileText className="text-3xl" />,
    title: "Daňové poradenství HS",
    description: "Odborné daňové poradenství zaměřené na optimalizaci daňové povinnosti podnikatelů i firem.",
    delay: 0.3,
    direction: "up" as const,
    link: "/danove-poradenstvi"
  },
  {
    icon: <FileQuestion className="text-3xl" />,
    title: "Likvidace firem HS",
    description: "Komplexní zajištění procesu likvidace obchodních společností včetně právní podpory.",
    delay: 0.4,
    direction: "up" as const,
    link: "/likvidace-firem"
  },
  {
    icon: <Home className="text-3xl" />,
    title: "Realitní agentura HS",
    description: "Profesionální služby v oblasti prodeje, nákupu a pronájmu rezidenčních i komerčních nemovitostí.",
    delay: 0.5,
    direction: "up" as const,
    link: "/realitni-agentura"
  },
  {
    icon: <HardHat className="text-3xl" />,
    title: "Stavební činnost HS",
    description: "Realizace stavebních projektů od návrhu po dokončení, rekonstrukce a odborný stavební dozor.",
    delay: 0.6,
    direction: "up" as const,
    link: "/stavebni-cinnost"
  },
];

export function ServicesSection() {
  // Animation for the service cards with hover effect
  const cardHoverAnimation = {
    rest: { 
      y: 0,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    }
  };

  // Animation for the icon with hover effect
  const iconAnimation = {
    rest: { 
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    },
    hover: { 
      scale: 1.15,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="services" className="py-20 bg-[#121212] overflow-hidden">
      <div className="container mx-auto px-4">
        <Parallax translateY={[-10, 10]}>
          <ScrollReveal 
            direction="down" 
            duration={0.6} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
              <span className="text-primary">Naše</span> služby
            </h2>
            <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
              Poskytujeme komplexní portfolio služeb v oblasti nemovitostí a investic, které jsou přizpůsobeny potřebám našich klientů.
            </p>
          </ScrollReveal>
        </Parallax>
        
        {/* Decorative background elements */}
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={index}
              direction={service.direction}
              delay={service.delay}
              duration={0.6}
              distance={40}
            >
              <Link href={service.link} className="block">
                <motion.div
                  className="bg-[#0A0A0A] p-8 rounded-md transition-all duration-300 h-full cursor-pointer group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHoverAnimation}
                >
                  <motion.div 
                    className="text-primary mb-4"
                    variants={iconAnimation}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 font-['Montserrat']">{service.title}</h3>
                  <p className="text-white font-['Open_Sans']">
                    {service.description}
                  </p>
                  <div className="mt-4 text-primary text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Zobrazit více</span>
                    <span className="ml-1">→</span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
