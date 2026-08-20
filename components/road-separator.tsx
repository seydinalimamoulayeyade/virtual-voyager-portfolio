"use client";

import { motion, useReducedMotion } from "framer-motion";

export function RoadSeparator({ next }: { next: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="road-separator" aria-hidden="true">
      <motion.span
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <em>{next}</em>
    </div>
  );
}
