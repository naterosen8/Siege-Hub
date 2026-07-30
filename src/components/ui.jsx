import React from "react";
import { C } from "../theme.js";

export function Fonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@700;800&family=IBM+Plex+Sans:wght@400;500;600&family=Courier+Prime:wght@400;700&display=swap');
      * { box-sizing: border-box; }
      body { margin: 0; }
      .hub { font-family: 'IBM Plex Sans', sans-serif; background: ${C.ink}; color: ${C.paper}; min-height: 100vh; }
      .disp { font-family: 'Bitter', serif; font-weight: 800; letter-spacing: 0.01em; }
      .mono { font-family: 'Courier Prime', monospace; }
      .grid-bg {
        background-image: linear-gradient(${C.line}55 1px, transparent 1px), linear-gradient(90deg, ${C.line}55 1px, transparent 1px);
        background-size: 40px 40px; background-position: -1px -1px;
      }
      .tick { position: absolute; width: 14px; height: 14px; border: 1px solid ${C.mute}; opacity: 0.5; }
      .navbtn { transition: color .15s ease, border-color .15s ease, background .15s ease; }
      .navbtn:hover { color: ${C.paper} !important; }
      .card { transition: border-color .15s ease, transform .15s ease; }
      .card:hover { border-color: ${C.mute}; transform: translateY(-2px); }
      .opcard:hover .opname { color: var(--side); }
      select, input { font-family: 'Courier Prime', monospace; }
      a, button, select { outline-offset: 3px; }
      a:focus-visible, button:focus-visible, select:focus-visible { outline: 2px solid ${C.atk}; }
      a { color: inherit; text-decoration: none; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      .fade-up { animation: fadeUp .25s ease both; }
      @media (prefers-reduced-motion: reduce) { .card, .navbtn, .room, .fade-up { transition: none !important; animation: none !important; } }
    `}</style>
  );
}

export function Tag({ children, tone = "mute" }) {
  const color = tone === "atk" ? C.atk : tone === "def" ? C.def : tone === "ok" ? C.ok : tone === "s" ? C.s : tone === "a" ? C.a : C.mute;
  return (
    <span className="mono" style={{ display: "inline-block", fontSize: 12, letterSpacing: "0.04em", color, border: `1px solid ${color}`, borderRadius: 3, padding: "2px 7px", background: "rgba(0,0,0,0.03)" }}>
      [{children}]
    </span>
  );
}

export function CornerTicks() {
  return (
    <>
      <span className="tick" style={{ top: 0, left: 0, borderRight: "none", borderBottom: "none" }} />
      <span className="tick" style={{ top: 0, right: 0, borderLeft: "none", borderBottom: "none" }} />
      <span className="tick" style={{ bottom: 0, left: 0, borderRight: "none", borderTop: "none" }} />
      <span className="tick" style={{ bottom: 0, right: 0, borderLeft: "none", borderTop: "none" }} />
    </>
  );
}

export function SectionLabel({ n, children, sub }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span className="mono" style={{ color: C.mute, fontSize: 13 }}>{n}</span>
        <span style={{ flex: "0 0 20px", height: 1, background: C.line }} />
        <h2 className="disp" style={{ fontSize: 26, margin: 0, textTransform: "uppercase" }}>{children}</h2>
        <span style={{ flex: 1, height: 1, background: C.line }} />
      </div>
      {sub && <p style={{ color: C.mute, fontSize: 14, maxWidth: 640, margin: "10px 0 0" }}>{sub}</p>}
    </div>
  );
}

export function Pips({ n, max = 3, color }) {
  return (
    <span style={{ display: "inline-flex", gap: 3 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: 1, background: i < n ? color : C.line }} />
      ))}
    </span>
  );
}

export function Panel({ children, style }) {
  return (
    <div style={{ position: "relative", border: `1px solid ${C.line}`, borderRadius: 4, background: C.panel, padding: 22, ...style }}>
      {children}
    </div>
  );
}
