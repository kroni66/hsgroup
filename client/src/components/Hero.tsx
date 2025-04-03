import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion } from "framer-motion";

export function Hero() {
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
    hidden: { opacity: 0, y: 30 },
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
    <section id="hero" className="h-screen relative">
      <ParallaxBanner className="h-full">
        {/* Background image layer with parallax effect */}
        <ParallaxBannerLayer speed={-20}>
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')"
            }}
          />
        </ParallaxBannerLayer>

        {/* Overlay layer */}
        <ParallaxBannerLayer speed={0}>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </ParallaxBannerLayer>

        {/* Content layer */}
        <ParallaxBannerLayer speed={-5} className="flex items-center">
          <div className="container mx-auto px-4 z-10 relative">
            <motion.div 
              className="max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 font-['Montserrat'] leading-tight"
                variants={childVariants}
              >
                <span className="text-primary">Investujte</span> do budoucnosti s profesionály v oblasti nemovitostí
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 font-['Open_Sans']"
                variants={childVariants}
              >
                Objevte nové možnosti a investujte s odvahou do nemovitostí s námi.
              </motion.p>
              
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
