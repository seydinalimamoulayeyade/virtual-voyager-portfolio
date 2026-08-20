"use client";

import { useState, type ReactNode } from "react";
import { CommandPalette } from "./command-palette";
import { Navigation } from "./navigation";

export function PortfolioShell({ children }: Readonly<{ children: ReactNode }>) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <Navigation onPalette={() => setPaletteOpen(true)} paletteOpen={paletteOpen} />
      {children}
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
    </>
  );
}
