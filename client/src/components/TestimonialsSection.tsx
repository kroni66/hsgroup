import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Client testimonials data
const testimonialsData = [
  {
    quote: "Spolupráce s HS-GROUP předčila všechna má očekávání. Jejich profesionální přístup k daňovému poradenství, transparentnost a odborné znalosti mi pomohly optimalizovat daňové náklady naší společnosti. Díky jejich expertíze jsme dosáhli významných úspor.",
    author: "Ing. Jan Novák",
    role: "Finanční ředitel",
    rating: 5,
    company: "Stavební firma Novák s.r.o."
  },
  {
    quote: "Jako majitelka několika restaurací jsem hledala spolehlivého partnera pro komplexní účetní a daňové služby. HS-GROUP mi poskytuje profesionální služby již třetím rokem. Oceňuji zejména jejich proaktivní přístup a vždy aktuální informace o všech legislativních změnách.",
    author: "Mgr. Karolína Dvořáková",
    role: "Majitelka",
    rating: 5,
    company: "Restaurant Group Praha"
  },
  {
      quote: "Při zakládání stavební společnosti jsem potřeboval komplexní daňové poradenství. HS-GROUP mi poskytla vynikající služby, které zahrnují vše od založení firmy až po průběžné daňové konzultace. Jejich tým odborníků vždy reaguje promptně a řeší všechny záležitosti profesionálně.",
    author: "Bc. Martin Svoboda",
    role: "Jednatel",
    rating: 5,
    company: "Svoboda Construction s.r.o."
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto play when user interacts
  const handleNavigation = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    
    // Resume auto play after 15 seconds of inactivity
    const timer = setTimeout(() => setIsAutoPlaying(true), 15000);
    return () => clearTimeout(timer);
  };

  const nextTestimonial = () => {
    handleNavigation(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    handleNavigation(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0A0A0A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-red-500">Reference</span> našich klientů
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              Co o nás říkají firmy, se kterými spolupracujeme
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto relative" ref={ref}>
          {/* Main testimonial card */}
          <ScrollReveal threshold={0.1}>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Card backdrop with gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black -z-10"></div>
                  
                  <div className="absolute inset-px rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-black/90 rounded-2xl overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
                    </div>
                    
                    {/* Card content */}
                    <div className="relative p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Large quote icon */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-red-500/10 text-red-500">
                            <Quote size={32} />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          {/* Rating */}
                          <div className="flex justify-center md:justify-start mb-6">
                            {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-red-500 text-red-500 mr-1" />
                            ))}
                          </div>
                          
                          {/* Quote */}
                          <blockquote>
                            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 text-center md:text-left">
                              "{testimonialsData[currentIndex].quote}"
                            </p>
                            
                            {/* Author info */}
                            <footer className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
                              <div className="mb-4 md:mb-0 text-center md:text-left">
                                <p className="font-bold text-xl mb-1 text-white">{testimonialsData[currentIndex].author}</p>
                                <p className="text-gray-400 text-sm">{testimonialsData[currentIndex].role}</p>
                                <p className="text-red-500 text-sm mt-1">{testimonialsData[currentIndex].company}</p>
                              </div>
                              
                              {/* Company logo placeholder - could be replaced with actual logos */}
                              <div className="hidden md:flex w-16 h-16 rounded-md border border-gray-800 items-center justify-center bg-black/50">
                                <div className="text-xs text-gray-500 text-center">Logo</div>
                              </div>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation buttons */}
              <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none px-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-black/70 border border-gray-700 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 transition-colors duration-300 pointer-events-auto"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-black/70 border border-gray-700 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 transition-colors duration-300 pointer-events-auto"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Testimonial pagination */}
          <div className="flex justify-center mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-1 mx-1 transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "bg-red-500 w-16" 
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => handleNavigation(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
