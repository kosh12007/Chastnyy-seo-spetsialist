import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

/**
 * Типы анимаций для секций
 */
export type AnimationVariant = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale';

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

/**
 * Словарь анимаций Framer Motion
 */
const variantsMap: Record<AnimationVariant, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-down': {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * Компонент для плавной анимации элементов при скролле.
 * Использует framer-motion и Intersection Observer (useInView).
 * 
 * @param children - дочерние элементы
 * @param variant - тип анимации ('fade', 'slide-up', и т.д.)
 * @param duration - длительность в секундах
 * @param delay - задержка в секундах
 * @param threshold - на сколько должен появиться элемент (0-1) для старта
 * @param className - дополнительные CSS классы
 * @param once - запускать анимацию только один раз при скролле
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  variant = 'slide-up',
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variantsMap[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Плавный переход
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
