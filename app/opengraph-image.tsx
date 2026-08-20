import { ImageResponse } from "next/og";

export const alt = "Virtual Voyager — Cloud & DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#14100D", color: "#F3E9DC", padding: "70px 78px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
        <span style={{ color: "#D7734D", letterSpacing: 5 }}>VIRTUAL VOYAGER</span>
        <span style={{ color: "#B9AA9C" }}>DAKAR · SN</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 82, lineHeight: 1.05, maxWidth: 950, fontWeight: 650 }}>Cloud &amp; DevOps Engineer</div>
        <div style={{ display: "flex", marginTop: 34, alignItems: "center", gap: 20, fontSize: 30, color: "#B9AA9C" }}><span style={{ width: 74, height: 4, background: "#C4623A" }} />Seydina Limamou Laye Yade</div>
      </div>
      <div style={{ display: "flex", gap: 20, color: "#D7734D", fontSize: 20, letterSpacing: 2 }}><span>AWS</span><span>→</span><span>TERRAFORM</span><span>→</span><span>CI/CD</span><span>→</span><span>PRODUCTION</span></div>
    </div>, size,
  );
}
