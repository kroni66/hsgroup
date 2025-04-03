import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Timeline data
const timelineData = [
  {
    year: "2016",
    title: "Založení společnosti",
    description: "Společnost HS-GROUP byla založena s vizí stát se lídrem na trhu s nemovitostmi."
  },
  {
    year: "2018",
    title: "První velký projekt",
    description: "Realizace prvního velkého developerského projektu bytového domu s 50 bytovými jednotkami."
  },
  {
    year: "2020",
    title: "Expanze na zahraniční trhy",
    description: "Společnost rozšířila své působení na slovenský trh a vstoupila do segmentu komerčních nemovitostí."
  },
  {
    year: "2022",
    title: "Ocenění v soutěži Best of Realty",
    description: "Projekt Riverside Apartments získal prestižní ocenění v kategorii Rezidenční projekty."
  },
  {
    year: "2024",
    title: "Současnost",
    description: "V současnosti HS-GROUP spravuje portfolio nemovitostí v hodnotě přes 980 milionů korun a realizuje několik developerských projektů."
  }
];

export function HistorySection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="history" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat']">
            <span className="text-primary">Naše</span> historie
          </h2>
          <p className="text-lg max-w-3xl mx-auto font-['Open_Sans']">
            Sledujte naši cestu od založení až po dnešní den
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {timelineData.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row">
                <div className="font-bold text-primary text-2xl md:text-4xl md:w-1/4 mb-4 md:mb-0 font-['Montserrat']">{event.year}</div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{event.title}</h3>
                  <p className="font-['Open_Sans'] text-white">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .timeline-item {
          position: relative;
          padding-left: 30px;
          margin-bottom: 50px;
        }
        .timeline-item:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: hsl(0, 100%, 50%);
        }
        .timeline-item:after {
          content: '';
          position: absolute;
          left: -4px;
          top: 0;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: hsl(0, 100%, 50%);
        }
      `}</style>
    </section>
  );
}
