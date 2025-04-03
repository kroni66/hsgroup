import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll progress
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Handler for smooth scroll to sections
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="h-screen relative overflow-hidden">
      <ParallaxBanner className="h-full">
        {/* Background image layer with enhanced parallax effect */}
        <ParallaxBannerLayer speed={-25}>
          <motion.div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100')",
              scale: bgScale
            }}
          />
        </ParallaxBannerLayer>

        {/* Overlay layer with dynamic opacity */}
        <ParallaxBannerLayer speed={0}>
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </ParallaxBannerLayer>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden z-10">
          {/* Red Square */}
          <motion.div 
            className="absolute w-24 h-24 bg-primary opacity-40 rounded-sm top-1/4 right-[20%] hidden md:block"
            animate={{
              y: [0, -20, 0],
              x: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Red Circle */}
          <motion.div 
            className="absolute w-32 h-32 bg-primary opacity-30 rounded-full bottom-1/4 left-[15%] hidden md:block"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Black Triangle */}
          <motion.div 
            className="absolute opacity-50 top-1/3 left-[30%] hidden md:block"
            style={{
              width: 0,
              height: 0,
              borderLeft: '30px solid transparent',
              borderRight: '30px solid transparent',
              borderBottom: '50px solid #2D2D2D'
            }}
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content layer with enhanced parallax speed */}
        <ParallaxBannerLayer speed={-10} className="flex items-center">
          <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
              className="max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ 
                opacity: titleOpacity,
                y: titleY
              }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-2 font-['Montserrat'] leading-tight"
                variants={childVariants}
              >
                <span className="text-primary">HS Group</span>
              </motion.h1>
              
              <motion.h2
                className="text-xl md:text-3xl mb-6 font-['Montserrat'] text-gray-300"
                variants={childVariants}
              >
                Vaše komplexní řešení v oblasti právních, daňových a podnikatelských služeb
              </motion.h2>
              
              <motion.blockquote 
                className="border-l-4 border-primary pl-4 mb-8"
                variants={childVariants}
              >
                <p className="text-xl md:text-2xl italic font-['Open_Sans'] leading-relaxed">
                  "Kdo má strach, nevyhrává! Investujte s odvahou a sledujte, jak rostou vaše finance."
                </p>
              </motion.blockquote>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={childVariants}
              >
                <button
                  onClick={() => handleScrollTo("services")}
                  className="inline-block bg-primary text-[#0A0A0A] py-3 px-8 rounded-sm font-semibold hover:bg-opacity-90 transition-all duration-300 text-center"
                >
                  Naše služby
                </button>
                
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="inline-block bg-transparent border-2 border-primary text-primary py-3 px-8 rounded-sm font-semibold hover:bg-primary hover:bg-opacity-10 transition-all duration-300 text-center"
                >
                  Kontaktujte nás
                </button>
              </motion.div>
            </motion.div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
}
