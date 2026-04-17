import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section';
};

/** Появление при скролле; при prefers-reduced-motion — без анимации */
export function MotionReveal({ children, className, delay = 0, as = 'div' }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px', amount: 0.06 });
  const reduce = useReducedMotion();

  if (reduce) {
    const StaticTag = as === 'section' ? 'section' : 'div';
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const Tag = as === 'section' ? motion.section : motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      animate={
        inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 28, filter: 'blur(8px)' }
      }
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}
