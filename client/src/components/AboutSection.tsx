import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Parallax } from "react-scroll-parallax";

export function AboutSection() {
  // Handle scroll to contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal 
            direction="left" 
            delay={0.2} 
            duration={0.8}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']">
              <span className="text-primary">O</span> nás
            </h2>
            <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
              HS Group je renomovaná firma, která se specializuje na poskytování komplexních služeb v oblasti právního poradenství, daňového poradenství, správy účetnictví, likvidace firem, realitní činnosti a stavební činnosti. Naším cílem je pomoci vám efektivně řídit vaše podnikání, optimalizovat náklady a minimalizovat rizika.
            </p>
            <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
              Naše služby jsou postaveny na individuálním přístupu, odbornosti a dlouholetých zkušenostech našich specialistů. Ať už se jedná o právní poradenství při uzavírání smluv, optimalizaci daňové zátěže, správu účetnictví, nebo efektivní likvidaci firmy, jsme tu, abychom vám poskytli odbornou podporu a pomohli vám dosáhnout vašich cílů.
            </p>
            <button
              onClick={handleScrollToContact}
              className="inline-block bg-primary text-[#0A0A0A] py-3 px-8 rounded-sm font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Zjistit více
            </button>
          </ScrollReveal>
          
          <ScrollReveal 
            direction="right" 
            delay={0.4} 
            duration={0.8}
          >
            <div className="relative h-96 lg:h-auto overflow-hidden rounded-md">
              {/* Animated border with parallax effect */}
              <Parallax translateY={[5, -10]} className="absolute w-full h-full">
                <motion.div 
                  className="absolute w-full h-full transform -rotate-6 -translate-x-8 translate-y-8 border-4 border-primary rounded-md"
                  animate={{
                    rotate: [-6, -8, -6],
                    translateX: [-32, -36, -32],
                    translateY: [32, 36, 32]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </Parallax>
              
              {/* Main image with subtle parallax */}
              <Parallax translateY={[-10, 10]} className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
                  alt="HS-GROUP tým" 
                  className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-md"
                />
              </Parallax>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
