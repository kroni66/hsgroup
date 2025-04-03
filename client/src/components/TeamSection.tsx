import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

// Team data
const teamData = [
  {
    name: "Jan Novák",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2149&q=80",
    description: "S více než 15 lety zkušeností v realitním sektoru vede Jan společnost k úspěchu a neustálému růstu.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Kateřina Svobodová",
    position: "Investment Director",
    image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Kateřina se specializuje na oceňování nemovitostí a identifikaci investičních příležitostí s nejvyšším potenciálem zhodnocení.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Martin Dvořák",
    position: "Development Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    description: "Martin řídí všechny developerské projekty od počátečního návrhu až po finální realizaci s důrazem na kvalitu a efektivitu.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];

export function TeamSection() {
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
        duration: 0.6
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="team" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            <span className="text-primary">Náš</span> tým
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
            Seznamte se s našimi profesionály, kteří stojí za úspěchem HS-GROUP
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="transition-all duration-300 hover:transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="bg-[#0A0A0A] rounded-md overflow-hidden">
                <div className="relative overflow-hidden group">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-['Open_Sans'] mb-4">
                      {member.description}
                    </p>
                    <div className="flex space-x-4">
                      <a href={member.social.linkedin} className="text-primary hover:text-white transition-colors duration-300">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-primary hover:text-white transition-colors duration-300">
                        <Twitter size={20} />
                      </a>
                      <a href={member.social.email} className="text-primary hover:text-white transition-colors duration-300">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 font-['Montserrat']">{member.name}</h3>
                  <p className="text-primary font-semibold mb-0">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
