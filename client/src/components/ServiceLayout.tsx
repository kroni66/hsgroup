import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { ContactSection } from "./ContactSection";

type ServiceLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  bgImage: string;
};

export function ServiceLayout({ children, title, subtitle, bgImage }: ServiceLayoutProps) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="h-[60vh] relative">
        <ParallaxBanner className="h-full">
          {/* Background image layer with parallax effect */}
          <ParallaxBannerLayer speed={-20}>
            <div 
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url('${bgImage}')`
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Montserrat'] leading-tight">
                  <span className="text-primary">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
                </h1>
                <p className="text-xl md:text-2xl font-['Open_Sans']">
                  {subtitle}
                </p>
              </motion.div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </section>
      
      {/* Main Content */}
      <main className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" duration={0.8}>
            {children}
          </ScrollReveal>
        </div>
      </main>
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}