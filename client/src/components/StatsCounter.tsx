import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Stats data
const statsData = [
  { value: 5600, suffix: "+", label: "Úspěšných investic" },
  { value: 120, suffix: "+", label: "Nemovitostí ve správě" },
  { value: 8, suffix: " let", label: "Zkušeností" },
  { value: 980, suffix: " M", label: "Hodnota portfolia" }
];

// Component for a single counter
function Counter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // ms
      const end = value;
      
      // Don't animate if value is very large (to prevent performance issues)
      if (value > 10000) {
        setCount(value);
        return;
      }
      
      const increment = end / (duration / 16); // For 60fps
      
      let timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-4xl md:text-6xl font-bold text-primary mb-2 font-['Montserrat']">
        {count}{suffix}
      </div>
      <p className="text-xl text-white">{label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <Counter 
              key={index} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
