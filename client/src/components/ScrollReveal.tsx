import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type ScrollRevealProps = {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  className?: string;
};

export function ScrollReveal({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 50,
  once = true,
  className = '',
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else if (!once) {
      setIsAnimated(false);
    }
  }, [inView, once]);

  // Set initial animation values based on direction
  let initial: any = { opacity: 0 };
  if (direction === 'up') initial = { ...initial, y: distance };
  if (direction === 'down') initial = { ...initial, y: -distance };
  if (direction === 'left') initial = { ...initial, x: distance };
  if (direction === 'right') initial = { ...initial, x: -distance };

  // Animation variants
  const variants = {
    hidden: initial,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isAnimated ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}