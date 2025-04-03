import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimum 800ms for smooth animation)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="relative mb-8">
              <svg 
                width="100" 
                height="90" 
                viewBox="0 0 50 45" 
                xmlns="http://www.w3.org/2000/svg" 
                className="relative z-10"
              >
                {/* HS Group Logo */}
                <path d="M10 5 L20 5 L25 40 L15 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
                <path d="M30 5 L40 5 L35 40 L25 40 Z" fill="#ff0000" stroke="#000" strokeWidth="1.5" />
                <circle cx="40" cy="22" r="10" fill="#000" stroke="#ff0000" strokeWidth="1.5" />
                <path d="M36 18 C36 18, 44 18, 44 22 C44 26, 36 26, 36 26" fill="none" stroke="#ff0000" strokeWidth="1.5" />
              </svg>
              
              {/* Glow effect */}
              <div className="absolute -inset-5 bg-red-500/20 rounded-full blur-2xl -z-10 opacity-70"></div>
            </div>
            
            {/* Company name */}
            <motion.h1
              className="text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-red-500">HS</span> Group
            </motion.h1>
            
            {/* Animated loading dots */}
            <div className="flex items-center justify-center space-x-2 mt-2">
              <motion.div
                className="h-2 w-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0,
                  times: [0, 0.5, 1],
                  delay: 0,
                }}
              />
              <motion.div
                className="h-2 w-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0,
                  times: [0, 0.5, 1],
                  delay: 0.2,
                }}
              />
              <motion.div
                className="h-2 w-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0,
                  times: [0, 0.5, 1],
                  delay: 0.4,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}