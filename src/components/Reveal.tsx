"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Reveal({
  children,
  delay = 0,
  x = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12, x, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

