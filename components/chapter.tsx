import type { ReactNode } from "react";
import { RoadSeparator } from "./road-separator";

export function Chapter({ id, number, label, next, tone = "base", children }: { id: string; number: string; label: string; next?: string; tone?: "base" | "raised" | "deep"; children: ReactNode }) {
  return (
    <section id={id} className={`chapter chapter--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="chapter-shell">
        <aside className="chapter-rail" aria-hidden="true"><b>{number}</b><span>{label}</span></aside>
        <div className="chapter-content">{children}</div>
      </div>
      {next ? <RoadSeparator next={next} /> : null}
    </section>
  );
}
