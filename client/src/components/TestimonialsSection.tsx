import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// Testimonials data
const testimonialsData = [
  {
    quote: "Spolupráce s HS-GROUP předčila všechna má očekávání. Jejich profesionální přístup, transparentnost a odborné znalosti mi pomohly najít ideální investiční příležitost, která generuje stabilní pasivní příjem. Díky jejich expertíze jsem se vyhnul mnoha potenciálním problémům a maximalizoval návratnost své investice.",
    author: "Petr Kovář",
    role: "Investor"
  },
  {
    quote: "Jako začínající investor v oblasti nemovitostí jsem potřeboval spolehlivého partnera. HS-GROUP mi poskytla kompletní podporu, od výběru vhodné nemovitosti až po zajištění financování. Jejich poradenství bylo neocenitelné a díky nim jsem mohl uskutečnit svou první investici s jistotou a klidem.",
    author: "Jana Nováková",
    role: "Začínající investor"
  },
  {
    quote: "Již třetím rokem využívám služeb HS-GROUP pro správu svého nemovitostního portfolia. Jejich efektivita, spolehlivost a proaktivní přístup mi umožňují soustředit se na další podnikatelské aktivity s vědomím, že moje investice jsou v dobrých rukou a přinášejí maximální možný výnos.",
    author: "Tomáš Černý",
    role: "Podnikatel"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const testimonialVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            <span className="text-primary">Reference</span> našich klientů
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
            Co o nás říkají naši spokojení klienti
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="testimonial-slider relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-center bg-[#121212] p-8 rounded-md shadow-lg"
                variants={testimonialVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="text-primary text-4xl mb-6">
                  <Quote />
                </div>
                <p className="text-xl mb-8 font-['Open_Sans'] italic leading-relaxed">
                  "{testimonialsData[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-bold text-xl mb-1 font-['Montserrat']">{testimonialsData[currentIndex].author}</p>
                  <p className="text-primary">{testimonialsData[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial navigation */}
            <div className="flex justify-center mt-8">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                    index === currentIndex ? "bg-primary" : "bg-gray-700"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
