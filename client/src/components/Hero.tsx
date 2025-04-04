import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, CheckCircle, ChevronRight } from "lucide-react";
import hsLogoSvg from "../assets/hs-logo.svg";

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
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.75, 0.85]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
      },
    },
  };

  // Feature list animation variants
  const featureListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.7,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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
        <ParallaxBannerLayer speed={-20}>
          <motion.div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100')",
              scale: bgScale
            }}
          />
        </ParallaxBannerLayer>

        {/* Overlay gradient layer with dynamic opacity */}
        <ParallaxBannerLayer speed={0}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"
            style={{ opacity: overlayOpacity }}
          />
        </ParallaxBannerLayer>
        
        {/* Mesh gradient and floating elements */}
        <ParallaxBannerLayer speed={-5}>
          <div className="absolute inset-0 overflow-hidden">
            {/* Radial gradient */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-red-500/10 to-transparent blur-2xl" />
            <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-radial from-slate-900/30 to-transparent blur-2xl" />
            
            {/* Floating elements */}
            <div className="absolute inset-0">
              {/* Red square with glow */}
              <motion.div 
                className="absolute w-20 h-20 top-1/4 right-[20%] hidden md:block"
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-red-600/40 rounded-lg backdrop-blur-md" />
                <div className="absolute -inset-3 bg-red-600/20 rounded-xl blur-xl opacity-70" />
              </motion.div>
              
              {/* Circle with glow */}
              <motion.div 
                className="absolute w-28 h-28 bottom-1/3 left-[20%] hidden md:block"
                animate={{
                  y: [0, 40, 0],
                  x: [0, -20, 0],
                  scale: [1, 0.85, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full bg-red-500/20 rounded-full backdrop-blur-md" />
                <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-xl opacity-70" />
              </motion.div>
              
              {/* Glass card */}
              <motion.div 
                className="absolute p-6 right-1/4 top-1/3 hidden lg:block"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-48 h-48 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl" />
              </motion.div>
            </div>
            
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"
            />
          </div>
        </ParallaxBannerLayer>

        {/* Content layer */}
        <ParallaxBannerLayer speed={-8} className="flex items-center">
          <div className="container mx-auto px-6 z-10 relative pt-20">
            <div className="flex flex-col lg:flex-row gap-16">
              <motion.div 
                className="max-w-2xl lg:w-1/2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ 
                  opacity: titleOpacity,
                  y: titleY
                }}
              >
                {/* Eyebrow text */}
                <motion.div 
                  className="flex items-center mb-4 text-red-500"
                  variants={childVariants}
                >
                  <span className="h-px w-5 bg-red-500 mr-2.5"></span>
                  <span className="uppercase text-sm tracking-wider font-semibold">Profesionální služby</span>
                </motion.div>
                
                {/* Main title with gradient highlight */}
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-['Montserrat'] leading-tight"
                  variants={childVariants}
                >
                  <span className="text-white">Váš partner pro </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">úspěšné podnikání</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.h2
                  className="text-xl md:text-2xl mb-6 text-gray-300 leading-relaxed"
                  variants={childVariants}
                >
                  Komplexní řešení v oblasti právních, daňových a podnikatelských služeb
                </motion.h2>
                
                {/* Features list */}
                <motion.ul
                  className="space-y-2 mb-8 md:text-lg"
                  variants={featureListVariants}
                >
                  <motion.li 
                    variants={featureItemVariants}
                    className="flex items-center text-gray-200"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 text-red-500 flex-shrink-0" />
                    <span>Profesionalita a důvěra</span>
                  </motion.li>
                  <motion.li 
                    variants={featureItemVariants}
                    className="flex items-center text-gray-200"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 text-red-500 flex-shrink-0" />
                    <span>Komplexní přístup k vašemu podnikání</span>
                  </motion.li>
                  <motion.li 
                    variants={featureItemVariants}
                    className="flex items-center text-gray-200"
                  >
                    <CheckCircle className="h-5 w-5 mr-2 text-red-500 flex-shrink-0" />
                    <span>Zkušení odborníci ve všech oblastech</span>
                  </motion.li>
                </motion.ul>
                
                {/* CTA buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={childVariants}
                >
                  <button
                    onClick={() => handleScrollTo("services")}
                    className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3.5 px-7 rounded-md font-medium transition-all duration-300 text-center shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Naše služby</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  
                  <button
                    onClick={() => handleScrollTo("contact")}
                    className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3.5 px-7 rounded-md font-medium hover:bg-white/15 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    Kontaktujte nás
                  </button>
                </motion.div>
              </motion.div>
              
              {/* Right side decorative element - visible on larger screens */}
              <div className="hidden lg:block lg:w-1/2 relative">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Business Illustration SVG */}
                    <div className="relative w-[400px] h-[400px]">
                      {/* Decorative background glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-3xl"></div>
                      
                      {/* HS GROUP Logo SVG */}
                      <motion.img 
                        src={hsLogoSvg} 
                        alt="HS GROUP Logo" 
                        className="relative z-10 w-full h-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </ParallaxBannerLayer>
        
        {/* Scroll indicator */}
        <ParallaxBannerLayer speed={5} className="pointer-events-none absolute bottom-10 w-full flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2">Prohlédněte si více</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="h-6 w-6 text-red-500" />
            </motion.div>
          </motion.div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  );
}
