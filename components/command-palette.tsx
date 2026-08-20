"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { navItems, projects } from "@/data/portfolio.fr";

const actions = [
  { label: "Accueil", hint: "Section", href: "#hero" },
  ...navItems.map((item) => ({ label: item.label, hint: "Chapitre", href: `#${item.id}` })),
  ...projects.map((project) => ({ label: project.name, hint: "Projet", href: `#${project.id}` })),
];

type CommandPaletteProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function CommandPalette({ open, setOpen }: Readonly<CommandPaletteProps>) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const results = useMemo(() => actions.filter((action) => action.label.toLowerCase().includes(query.toLowerCase())), [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen(!open); }
      if (event.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const background = [document.querySelector<HTMLElement>("main"), document.querySelector<HTMLElement>(".site-header")].filter((element): element is HTMLElement => element !== null);
    background.forEach((element) => { element.inert = true; });
    const frame = requestAnimationFrame(() => input.current?.focus());
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = Array.from(dialog.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", trapFocus);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", trapFocus);
      background.forEach((element) => { element.inert = false; });
      previousFocus?.focus();
    };
  }, [open]);

  function go(href: string) { setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }
  function onInputKey(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") { event.preventDefault(); setSelected((value) => Math.min(value + 1, results.length - 1)); }
    if (event.key === "ArrowUp") { event.preventDefault(); setSelected((value) => Math.max(value - 1, 0)); }
    if (event.key === "Enter" && results[selected]) go(results[selected].href);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="palette-backdrop" role="presentation" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setOpen(false)}>
          <motion.div ref={dialog} id="command-palette" className="command-palette" role="dialog" aria-modal="true" aria-label="Navigation rapide" initial={reduce ? false : { opacity: 0, y: -18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .99 }} transition={{ duration: .24, ease: [0.22, 1, 0.36, 1] }} onMouseDown={(event) => event.stopPropagation()}>
            <div className="palette-input"><span aria-hidden="true">⌕</span><input ref={input} value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} onKeyDown={onInputKey} placeholder="Rechercher un chapitre ou un projet…" aria-label="Rechercher" /><kbd>ESC</kbd></div>
            <div className="palette-results">
              {results.map((action, index) => (
                <button key={action.href} className={selected === index ? "is-selected" : ""} type="button" onMouseEnter={() => setSelected(index)} onClick={() => go(action.href)}>
                  <span><i aria-hidden="true">{action.hint === "Projet" ? "◆" : "→"}</i>{action.label}</span><small>{action.hint}</small>
                </button>
              ))}
              {!results.length ? <p>Aucune destination trouvée.</p> : null}
            </div>
            <footer><span><kbd>↑</kbd><kbd>↓</kbd> naviguer</span><span><kbd>↵</kbd> ouvrir</span></footer>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
