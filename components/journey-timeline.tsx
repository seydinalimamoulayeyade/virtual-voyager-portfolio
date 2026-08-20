"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { milestones } from "@/data/portfolio.fr";

const filters = ["Tout", "Certifications", "Projets", "Formations"] as const;

export function JourneyTimeline() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tout");
  const reduce = useReducedMotion();
  const visible = active === "Tout" ? milestones : milestones.filter((item) => item.category === active);
  return (
    <div>
      <fieldset className="timeline-filters">
        <legend>Filtrer les étapes</legend>
        {filters.map((filter) => <button key={filter} type="button" className={active === filter ? "is-active" : ""} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
      </fieldset>
      <div className="timeline" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => (
            <motion.article layout={!reduce} key={`${item.date}-${item.title}`} className="timeline-entry" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .38, ease: [0.22, 1, 0.36, 1] }}>
              <time>{item.date}</time><span className="timeline-dot" aria-hidden="true" />
              <div><small>{item.category}</small><h3>{item.title}</h3><p>{item.description}</p></div>
            </motion.article>
          ))}
          {visible.length === 0 ? <motion.p className="timeline-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Aucune étape publique dans cette catégorie — pour l’instant.</motion.p> : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
