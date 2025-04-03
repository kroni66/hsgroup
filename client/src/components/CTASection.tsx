import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function CTASection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Handle scroll to contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 relative">
      <ParallaxBanner className="absolute inset-0">
        {/* Background image layer with parallax effect */}
        <ParallaxBannerLayer speed={-20}>
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560520031-0d6f8686c6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"
            }}
          />
        </ParallaxBannerLayer>

        {/* Overlay layer */}
        <ParallaxBannerLayer speed={0}>
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </ParallaxBannerLayer>
      </ParallaxBanner>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat'] gold-gradient">
            „Optimalizujte své daně legálně a efektivně. Naši daňoví poradci vám ušetří čas i peníze."
          </h2>
          <button
            onClick={handleScrollToContact}
            className="inline-block bg-primary text-[#0A0A0A] py-3 px-8 rounded-sm font-semibold hover:bg-opacity-90 transition-all duration-300 mt-6"
          >
            Domluvit konzultaci
          </button>
        </motion.div>
      </div>

      <style>{`
        .gold-gradient {
          background: linear-gradient(90deg, #ff0000, #ff6666, #cc0000, #ff3333, #990000);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: textShine 3s ease-in-out infinite alternate;
        }
        @keyframes textShine {
          to {
            background-position: 200%;
          }
        }
      `}</style>
    </section>
  );
}
