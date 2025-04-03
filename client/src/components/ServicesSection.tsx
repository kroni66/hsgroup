import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Building, ChartLine, Handshake, Diamond, Percent, Coins } from "lucide-react";

// Service data
const servicesData = [
  {
    icon: <Building className="text-3xl" />,
    title: "Nákup nemovitostí",
    description: "Pomáháme klientům najít a získat ideální nemovitosti pro investice nebo bydlení.",
  },
  {
    icon: <ChartLine className="text-3xl" />,
    title: "Investiční poradenství",
    description: "Nabízíme expertní analýzy trhu a individuální investiční strategie pro maximalizaci výnosu.",
  },
  {
    icon: <Handshake className="text-3xl" />,
    title: "Správa nemovitostí",
    description: "Komplexní služby správy nemovitostí od pronájmu po údržbu a administrativu.",
  },
  {
    icon: <Diamond className="text-3xl" />,
    title: "Development",
    description: "Realizujeme developerské projekty od návrhu až po dokončení stavby a prodej.",
  },
  {
    icon: <Percent className="text-3xl" />,
    title: "Financování",
    description: "Zajišťujeme optimální financování pro vaše nemovitostní projekty a investice.",
  },
  {
    icon: <Coins className="text-3xl" />,
    title: "Podílové vlastnictví",
    description: "Specializujeme se na obchodování a správu spoluvlastnických podílů na nemovitostech.",
  },
];

export function ServicesSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            <span className="text-primary">Naše</span> služby
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
            Poskytujeme komplexní portfolio služeb v oblasti nemovitostí a investic, které jsou přizpůsobeny potřebám našich klientů.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0A0A0A] p-8 rounded-md transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-['Montserrat']">{service.title}</h3>
              <p className="text-white font-['Open_Sans']">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
