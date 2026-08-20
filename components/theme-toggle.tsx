"use client";

import { useSyncExternalStore } from "react";

const themeEvent = "virtual-voyager-theme-change";
type Theme = "dark" | "light";

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function getTheme(): Theme {
  const currentTheme = document.documentElement.dataset.theme;
  return currentTheme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("vv-theme", next);
    window.dispatchEvent(new Event(themeEvent));
  }
  return (
    <button className="icon-button theme-toggle" type="button" onClick={toggle} aria-label={`Activer le thème ${theme === "dark" ? "clair" : "sombre"}`}>
      <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
    </button>
  );
}
