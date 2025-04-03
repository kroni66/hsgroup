import { motion } from "framer-motion";
import { 
  Gavel, Calculator, FileText, FileQuestion, Home, HardHat, 
  ChevronRight, CheckCircle2, ArrowRight, CircleDot, 
  Clock, ShieldCheck, HeartHandshake, BarChart, Globe, BadgeCheck
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "wouter";

// Updated service data with additional styling parameters, badges and links to dedicated pages
const servicesData = [
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "Právní služby HS",
    description: "Kompletní právní servis pro firmy i jednotlivce v oblasti obchodního a nemovitostního práva.",
    delay: 0.1,
    direction: "up" as const,
    link: "/pravni-sluzby",
    features: ["Smluvní dokumentace", "Právní audit", "Obchodní spory"],
    badge: "Expertní poradenství"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Správa účetnictví HS",
    description: "Profesionální vedení účetnictví, zpracování daňových přiznání a finanční poradenství.",
    delay: 0.2,
    direction: "up" as const,
    link: "/sprava-ucetnictvi",
    features: ["Vedení účetnictví", "Mzdová agenda", "Daňová přiznání"],
    badge: "Komplexní služby"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Daňové poradenství HS",
    description: "Odborné daňové poradenství zaměřené na optimalizaci daňové povinnosti podnikatelů i firem.",
    delay: 0.3,
    direction: "up" as const,
    link: "/danove-poradenstvi",
    features: ["Daňová optimalizace", "Zastupování při kontrole", "DPH poradenství"],
    badge: "Daňové úspory"
  },
  {
    icon: <FileQuestion className="w-6 h-6" />,
    title: "Likvidace firem HS",
    description: "Komplexní zajištění procesu likvidace obchodních společností včetně právní podpory.",
    delay: 0.4,
    direction: "up" as const,
    link: "/likvidace-firem",
    features: ["Likvidace s.r.o.", "Likvidace a.s.", "Likvidace závazků"],
    badge: "Bezstarostný proces"
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Realitní agentura HS",
    description: "Profesionální služby v oblasti prodeje, nákupu a pronájmu rezidenčních i komerčních nemovitostí.",
    delay: 0.5,
    direction: "up" as const,
    link: "/realitni-agentura",
    features: ["Prodej nemovitostí", "Pronájem prostor", "Správa nemovitostí"],
    badge: "Výhodné podmínky"
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    title: "Stavební činnost HS",
    description: "Realizace stavebních projektů od návrhu po dokončení, rekonstrukce a odborný stavební dozor.",
    delay: 0.6,
    direction: "up" as const,
    link: "/stavebni-cinnost",
    features: ["Rekonstrukce", "Nové stavby", "Stavební dozor"],
    badge: "Kvalitní provedení"
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-[#0A0A0A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-full h-px left-0 top-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,40,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(40,40,40,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-gradient-radial from-red-600/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-[600px] h-[600px] bg-gradient-radial from-slate-800/30 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Eyebrow text */}
          <ScrollReveal
            direction="down" 
            delay={0.1}
            className="inline-flex items-center mb-4 text-sm text-red-500 font-medium"
          >
            <span className="inline-block h-px w-5 bg-red-500 mr-2.5"></span>
            <span className="uppercase tracking-wider">Profesionální služby</span>
            <span className="inline-block h-px w-5 bg-red-500 ml-2.5"></span>
          </ScrollReveal>
          
          <ScrollReveal 
            direction="down" 
            delay={0.2}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="text-white">Komplexní služby</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600 block md:inline"> pro váš byznys</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal 
            direction="down" 
            delay={0.3}
          >
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4 text-balance">
              Poskytujeme profesionální poradenství a služby, které jsou přizpůsobeny potřebám našich klientů. S naším týmem odborníků získáte spolehlivé řešení pro váš byznys.
            </p>
          </ScrollReveal>
          
          <ScrollReveal
            direction="down"
            delay={0.35}
          >
            <motion.div 
              className="relative py-3 px-8 rounded-full bg-gradient-to-r from-red-950/30 via-red-900/40 to-red-950/30 inline-block mb-8 border border-red-600/30 shadow-[0_0_15px_rgba(185,28,28,0.1)]"
              initial={{ opacity: 0.9, scale: 0.98 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                boxShadow: ["0 0 15px rgba(185,28,28,0.1)", "0 0 20px rgba(185,28,28,0.2)", "0 0 15px rgba(185,28,28,0.1)"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(185,28,28,0.2)_0%,transparent_70%)] blur-md"></div>
              <p className="relative text-md md:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500">
                Optimalizujte své daně legálně a efektivně
              </p>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal 
            direction="down" 
            delay={0.4}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Profesionální tým
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Transparentní služby
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <HeartHandshake className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Individuální přístup
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Dlouholeté zkušenosti
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <BarChart className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Daňová optimalizace
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <Globe className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Mezinárodní transakce
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 backdrop-blur-sm border border-white/10">
                <BadgeCheck className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                Certifikovaní poradci
              </span>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={index}
              direction={service.direction}
              delay={service.delay}
              duration={0.5}
              distance={30}
            >
              <Link href={service.link}>
                <motion.div
                  className="group relative rounded-xl overflow-hidden h-full"
                  initial={{ opacity: 0.95 }}
                  whileHover={{ 
                    opacity: 1,
                    y: -5,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                >
                  {/* Card backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Border effect */}
                  <div className="absolute inset-px rounded-xl p-[1px] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-black rounded-xl"></div>
                    
                    {/* Card content */}
                    <div className="relative h-full flex flex-col p-6 bg-gray-900/40">
                      {/* Icon with gradient background */}
                      <div className="relative mb-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 mb-4">
                          <motion.div 
                            className="text-red-500"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {service.icon}
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute right-4 top-4">
                          <div className="px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-red-600/20 to-red-700/20 text-red-400 border border-red-600/20">
                            {service.badge}
                          </div>
                        </div>
                      )}
                      
                      {/* Title and description */}
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-6 text-sm">{service.description}</p>
                      
                      {/* Features list */}
                      <div className="space-y-2 mb-8 mt-auto">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <CircleDot className="w-4 h-4 text-red-500 mt-0.5 mr-2.5 flex-shrink-0" />
                            <span className="text-sm text-gray-200">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Link */}
                      <div className="mt-auto">
                        <div className="flex items-center font-medium text-sm text-red-500 group-hover:text-red-400 transition-colors">
                          <span>Zobrazit více</span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        {/* All services button */}
        <ScrollReveal direction="up" delay={0.7} className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0.9 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Link href="/services">
              <div className="inline-flex items-center py-3 px-5 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-colors">
                <span className="mr-2 font-medium">Všechny naše služby</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
