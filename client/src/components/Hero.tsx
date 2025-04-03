import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, CheckCircle, ChevronRight } from "lucide-react";

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
                      
                      {/* Business SVG icon */}
                      <svg 
                        viewBox="0 0 500 500" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative z-10 w-full h-full"
                      >
                        {/* City/Skyscraper Background */}
                        <g>
                          {/* Building 1 */}
                          <motion.rect 
                            x="70" y="150" width="60" height="250" 
                            fill="rgba(30, 30, 30, 0.8)" stroke="#333" strokeWidth="2"
                            initial={{ y: 400 }}
                            animate={{ y: 150 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                          />
                          {/* Windows */}
                          <motion.g 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                          >
                            {[...Array(8)].map((_, i) => (
                              <rect 
                                key={`b1w${i}`} 
                                x="78" 
                                y={170 + i * 25} 
                                width="10" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                            {[...Array(8)].map((_, i) => (
                              <rect 
                                key={`b1w2${i}`} 
                                x="102" 
                                y={170 + i * 25} 
                                width="10" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                          </motion.g>
                          
                          {/* Building 2 - Tallest */}
                          <motion.rect 
                            x="160" y="100" width="80" height="300" 
                            fill="rgba(40, 40, 40, 0.9)" stroke="#444" strokeWidth="2"
                            initial={{ y: 400 }}
                            animate={{ y: 100 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                          />
                          {/* Windows for Building 2 */}
                          <motion.g 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.7 }}
                          >
                            {[...Array(10)].map((_, i) => (
                              <rect 
                                key={`b2w1${i}`} 
                                x="170" 
                                y={120 + i * 25} 
                                width="12" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                            {[...Array(10)].map((_, i) => (
                              <rect 
                                key={`b2w2${i}`} 
                                x="194" 
                                y={120 + i * 25} 
                                width="12" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                            {[...Array(10)].map((_, i) => (
                              <rect 
                                key={`b2w3${i}`} 
                                x="218" 
                                y={120 + i * 25} 
                                width="12" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                          </motion.g>
                          
                          {/* Building 3 */}
                          <motion.rect 
                            x="270" y="180" width="70" height="220" 
                            fill="rgba(30, 30, 30, 0.8)" stroke="#333" strokeWidth="2"
                            initial={{ y: 400 }}
                            animate={{ y: 180 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                          />
                          {/* Windows for Building 3 */}
                          <motion.g 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.9 }}
                          >
                            {[...Array(7)].map((_, i) => (
                              <rect 
                                key={`b3w1${i}`} 
                                x="280" 
                                y={200 + i * 25} 
                                width="12" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                            {[...Array(7)].map((_, i) => (
                              <rect 
                                key={`b3w2${i}`} 
                                x="304" 
                                y={200 + i * 25} 
                                width="12" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                          </motion.g>
                          
                          {/* Building 4 */}
                          <motion.rect 
                            x="360" y="200" width="55" height="200" 
                            fill="rgba(35, 35, 35, 0.8)" stroke="#333" strokeWidth="2"
                            initial={{ y: 400 }}
                            animate={{ y: 200 }}
                            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
                          />
                          {/* Windows for Building 4 */}
                          <motion.g 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                          >
                            {[...Array(6)].map((_, i) => (
                              <rect 
                                key={`b4w1${i}`} 
                                x="368" 
                                y={220 + i * 25} 
                                width="10" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                            {[...Array(6)].map((_, i) => (
                              <rect 
                                key={`b4w2${i}`} 
                                x="388" 
                                y={220 + i * 25} 
                                width="10" 
                                height="15" 
                                fill="rgba(255, 255, 255, 0.2)" 
                              />
                            ))}
                          </motion.g>
                        </g>
                        
                        {/* Business Data Elements */}
                        <motion.g
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 1.2 }}
                        >
                          {/* Red Bar Chart */}
                          <rect x="130" y="160" width="25" height="100" rx="2" fill="rgba(255, 0, 0, 0.3)" stroke="#ff0000" strokeWidth="1" />
                          <rect x="165" y="140" width="25" height="120" rx="2" fill="rgba(255, 0, 0, 0.5)" stroke="#ff0000" strokeWidth="1" />
                          <rect x="200" y="120" width="25" height="140" rx="2" fill="rgba(255, 0, 0, 0.7)" stroke="#ff0000" strokeWidth="1" />
                          <rect x="235" y="90" width="25" height="170" rx="2" fill="rgba(255, 0, 0, 0.9)" stroke="#ff0000" strokeWidth="1" />
                          
                          {/* Growing Chart Line */}
                          <motion.path 
                            d="M130,240 Q170,210 200,180 T270,140" 
                            stroke="rgba(255, 0, 0, 0.8)" 
                            strokeWidth="3" 
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                          />
                          
                          {/* Dots on the path */}
                          <motion.circle cx="130" cy="240" r="4" fill="#ff0000" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                          />
                          <motion.circle cx="170" cy="210" r="4" fill="#ff0000" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                          />
                          <motion.circle cx="200" cy="180" r="4" fill="#ff0000" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                          />
                          <motion.circle cx="240" cy="160" r="4" fill="#ff0000" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                          />
                          <motion.circle cx="270" cy="140" r="4" fill="#ff0000" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.4 }}
                          />
                        </motion.g>
                        
                        {/* Document with magnifying glass */}
                        <motion.g
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 2.2 }}
                        >
                          <rect x="300" y="120" width="80" height="100" fill="rgba(240, 240, 240, 0.1)" stroke="#666" strokeWidth="1" />
                          <rect x="310" y="130" width="60" height="5" fill="rgba(255, 255, 255, 0.3)" />
                          <rect x="310" y="145" width="60" height="5" fill="rgba(255, 255, 255, 0.3)" />
                          <rect x="310" y="160" width="40" height="5" fill="rgba(255, 255, 255, 0.3)" />
                          <rect x="310" y="175" width="50" height="5" fill="rgba(255, 255, 255, 0.3)" />
                          <rect x="310" y="190" width="30" height="5" fill="rgba(255, 255, 255, 0.3)" />
                          
                          {/* Magnifying glass */}
                          <circle cx="360" cy="160" r="20" fill="none" stroke="rgba(255, 0, 0, 0.7)" strokeWidth="3" />
                          <line x1="375" y1="175" x2="390" y2="190" stroke="rgba(255, 0, 0, 0.7)" strokeWidth="3" />
                        </motion.g>
                        
                        {/* Glowing accent */}
                        <motion.circle 
                          cx="200" 
                          cy="200" 
                          r="120" 
                          fill="url(#redGlow)" 
                          opacity="0.2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.2 }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                        
                        {/* Gradient definitions */}
                        <defs>
                          <radialGradient id="redGlow" cx="0.5" cy="0.5" r="0.8" fx="0.5" fy="0.5">
                            <stop offset="0%" stopColor="#ff0000" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
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
