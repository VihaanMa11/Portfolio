"use client";

import { useRef, useEffect } from 'react';
import { useTransform, useScroll, motion, useSpring } from 'framer-motion';

export function useParallax() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };
  const spring = useSpring(scrollYProgress, springConfig);

  const y = useTransform(spring, [0, 1], ["0%", "50%"]);

  return { ref, y };
}