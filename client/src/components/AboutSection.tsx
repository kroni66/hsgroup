import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function AboutSection() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

  // Handle scroll to contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={textRef}
            variants={variants}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']">
              <span className="text-primary">O</span> společnosti HS-GROUP
            </h2>
            <p className="text-lg mb-6 font-['Open_Sans'] leading-relaxed">
              HS-GROUP se specializuje na vyhledávání lukrativních investičních příležitostí v oblasti nemovitostí pro své klienty. Naším cílem je maximalizovat návratnost investic a poskytovat komplexní poradenství v realitním sektoru.
            </p>
            <p className="text-lg mb-8 font-['Open_Sans'] leading-relaxed">
              Od roku 2016 jsme vybudovali rozsáhlé portfolio nemovitostí různého typu a pomohli stovkám klientů realizovat jejich investiční cíle. Náš zkušený tým odborníků je zárukou profesionálního přístupu a individuálního řešení pro každého klienta.
            </p>
            <button
              onClick={handleScrollToContact}
              className="inline-block bg-primary text-[#0A0A0A] py-3 px-8 rounded-sm font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Zjistit více
            </button>
          </motion.div>
          
          <motion.div
            ref={imageRef}
            className="relative h-96 lg:h-auto overflow-hidden rounded-md"
            variants={variants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          >
            <div className="absolute w-full h-full transform -rotate-6 -translate-x-8 translate-y-8 border-4 border-primary rounded-md"></div>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
              alt="HS-GROUP tým" 
              className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
