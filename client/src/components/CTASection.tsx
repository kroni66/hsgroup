import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight, CheckCircle, Calendar, Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { Link } from "wouter";

export function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle scroll to contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(40,40,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(40,40,40,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Gradient blob */}
        <div className="absolute -right-48 -top-48 w-96 h-96 bg-gradient-radial from-red-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -left-48 -bottom-48 w-96 h-96 bg-gradient-radial from-red-600/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            {/* Left content */}
            <div className="lg:w-1/2" ref={ref}>
              <ScrollReveal direction="left" once threshold={0.2}>
                <div className="flex items-center mb-4 text-red-500">
                  <span className="h-px w-6 bg-red-500 mr-2.5"></span>
                  <span className="uppercase text-sm tracking-wider font-semibold">Začněte s námi</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance leading-tight">
                  <span className="relative">
                    <span className="relative z-10">
                      Optimalizujte své daně <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">legálně a efektivně</span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-red-500/10 rounded-full translate-y-1/2 z-0"></span>
                  </span>
                </h2>
                
                <p className="text-gray-300 mb-8 md:text-lg">
                  Naši daňoví poradci vám ušetří čas i peníze. Poskytujeme komplexní řešení pro firmy i fyzické osoby, které potřebují optimalizovat své podnikání.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="text-red-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Profesionální tým odborníků</span>
                      <p className="text-gray-300 text-sm mt-1">Zkušení daňoví poradci s mnohaletou praxí</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-red-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Individuální přístup</span>
                      <p className="text-gray-300 text-sm mt-1">Řešení na míru vašim konkrétním potřebám</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-red-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Dlouhodobá spolupráce</span>
                      <p className="text-gray-300 text-sm mt-1">Průběžná optimalizace pro maximální úspory</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleScrollToContact}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3.5 px-7 rounded-md font-medium transition-all duration-300 shadow-lg shadow-red-600/20 group"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>Domluvit konzultaci</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  
                  <a
                    href="tel:+420608187355"
                    className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white py-3.5 px-7 rounded-md font-medium transition-all duration-300"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    <span>+420 608 187 355</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Right content - CTA Card */}
            <div className="lg:w-1/2">
              <ScrollReveal direction="right" once threshold={0.2}>
                <motion.div 
                  className="relative rounded-2xl overflow-hidden"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Card backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-10"></div>
                  
                  {/* Border effect */}
                  <div className="absolute inset-px rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/90 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      {/* Red accent glow */}
                      <div className="absolute -top-12 right-12 w-32 h-32 bg-red-500/20 rounded-full blur-3xl pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
                    </div>
                    
                    {/* Card content */}
                    <div className="relative p-8 md:p-10">
                      <div className="inline-flex items-center justify-center bg-red-500/10 text-red-500 p-3 rounded-lg mb-6">
                        <Calendar className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">Bezplatná úvodní konzultace</h3>
                      <p className="text-gray-300 mb-6">
                        Nabízíme první schůzku zdarma, kde vám poradíme s vašimi daňovými záležitostmi a navrhneme možnosti optimalizace.
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        <div className="flex items-center">
                          <CheckCircle className="text-red-500 w-5 h-5 mr-3 flex-shrink-0" />
                          <span className="text-white">Poradenství pro firmy i OSVČ</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-red-500 w-5 h-5 mr-3 flex-shrink-0" />
                          <span className="text-white">Analýza daňové situace</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="text-red-500 w-5 h-5 mr-3 flex-shrink-0" />
                          <span className="text-white">Návrh optimalizace na míru</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-6 border-t border-white/10">
                        <Link href="/kontakt">
                          <div className="inline-flex items-center text-red-500 font-medium group cursor-pointer hover:text-red-400 transition-colors">
                            <span>Rezervujte si termín</span>
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 w-4 h-4" />
                          </div>
                        </Link>
                        <div className="text-sm text-gray-400">
                          Obvyklá cena: <span className="line-through">1500 Kč</span> <span className="text-white font-medium">ZDARMA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
