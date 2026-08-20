"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/portfolio.fr";
import { ThemeToggle } from "./theme-toggle";

type NavigationProps = {
  onPalette: () => void;
  paletteOpen: boolean;
};

export function Navigation({ onPalette, paletteOpen }: Readonly<NavigationProps>) {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, .2, .5] });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => nav.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    menuButton.current?.focus();
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="#hero" aria-label="Virtual Voyager, retour au début"><span>VV</span><b>Virtual Voyager</b></a>
      <nav ref={nav} id="primary-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
        {navItems.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={closeMenu}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <button id="command-palette-trigger" className="palette-trigger" type="button" aria-haspopup="dialog" aria-expanded={paletteOpen} aria-controls="command-palette" onClick={onPalette}><span>Aller à…</span><kbd>Ctrl K</kbd></button>
        <ThemeToggle />
        <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen((value) => !value)}><i /><i /></button>
      </div>
    </header>
  );
}
