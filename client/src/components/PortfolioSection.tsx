import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Portfolio data
const portfolioData = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Rezidence Park",
    location: "Praha 5",
    type: "Bytový dům"
  },
  {
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
    title: "Office Center Anděl",
    location: "Praha 5",
    type: "Kancelářská budova"
  },
  {
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80",
    title: "Riverside Apartments",
    location: "Praha 7",
    type: "Bytový komplex"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab8e17a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Park Villas",
    location: "Brno",
    type: "Rezidenční vily"
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Logistické centrum Ostrava",
    location: "Ostrava",
    type: "Komerční objekt"
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    title: "Hotel Century",
    location: "Karlovy Vary",
    type: "Hotelový komplex"
  }
];

export function PortfolioSection() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
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
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            <span className="text-primary">Naše</span> portfolio
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
            Prohlédněte si výběr z našich úspěšných projektů a realizovaných investic
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioData.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-md group"
              variants={itemVariants}
            >
              <img 
                src={item.image}
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-xl font-bold mb-1 font-['Montserrat']">{item.title}</h3>
                <div className="flex items-center text-primary mb-2">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <p className="text-sm text-gray-300">{item.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={buttonRef}
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          animate={buttonInView ? "visible" : "hidden"}
        >
          <button
            onClick={handleScrollToContact}
            className="inline-block bg-transparent border-2 border-primary text-primary py-3 px-8 rounded-sm font-semibold hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
          >
            Zobrazit více projektů
          </button>
        </motion.div>
      </div>
    </section>
  );
}
