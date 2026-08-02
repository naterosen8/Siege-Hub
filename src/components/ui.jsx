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
      .tick { position: absolute; width: 22px; height: 22px; border: 3px solid ${C.atk}; opacity: 0.7; }
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
    <span className="mono" style={{ display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", color, border: `2px solid ${color}`, borderRadius: 1, padding: "3px 9px", background: "rgba(0,0,0,0.04)" }}>
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
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span className="mono" style={{ color: C.ink, fontSize: 13, fontWeight: 700, background: C.paper, padding: "4px 9px" }}>{n}</span>
        <span style={{ flex: "0 0 28px", height: 3, background: C.atk }} />
        <h2 className="disp" style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: 0, textTransform: "uppercase", letterSpacing: "0.01em" }}>{children}</h2>
        <span style={{ flex: 1, height: 3, background: C.line }} />
      </div>
      {sub && <p style={{ color: C.mute, fontSize: 14.5, maxWidth: 640, margin: "12px 0 0", lineHeight: 1.6 }}>{sub}</p>}
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

/* Original geometric glyphs — one per role category. Hand-drawn shape primitives, not derived from any game asset. */
const ROLE_ICON_SHAPES = {
  "Intel": (
    <>
      <circle cx="50" cy="50" r="36" />
      <circle cx="50" cy="50" r="22" />
      <line x1="50" y1="50" x2="78" y2="24" strokeLinecap="round" />
      <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" />
    </>
  ),
  "Anti-Gadget": (
    <>
      <polygon points="50,12 84,31 84,69 50,88 16,69 16,31" />
      <polyline points="32,50 45,50 41,36 59,64 55,50 68,50" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "Support": (
    <>
      <circle cx="50" cy="50" r="36" />
      <line x1="50" y1="30" x2="50" y2="70" strokeLinecap="round" />
      <line x1="30" y1="50" x2="70" y2="50" strokeLinecap="round" />
    </>
  ),
  "Front Line": (
    <path d="M50 12 L81 25 V54 C81 73 68 84 50 90 C32 84 19 73 19 54 V25 Z" />
  ),
  "Map Control": (
    <>
      <line x1="50" y1="24" x2="24" y2="70" />
      <line x1="50" y1="24" x2="76" y2="70" />
      <line x1="24" y1="70" x2="76" y2="70" />
      <circle cx="50" cy="24" r="8" fill="currentColor" stroke="none" />
      <circle cx="24" cy="70" r="8" fill="currentColor" stroke="none" />
      <circle cx="76" cy="70" r="8" fill="currentColor" stroke="none" />
    </>
  ),
  "Breach": (
    <polygon points="50,8 59,41 92,50 59,59 50,92 41,59 8,50 41,41" fill="currentColor" stroke="none" />
  ),
};

export function RoleIcon({ category, size = 40, strokeWidth = 5, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={strokeWidth} style={style}>
      {ROLE_ICON_SHAPES[category] || ROLE_ICON_SHAPES["Support"]}
    </svg>
  );
}

export function Panel({ children, style }) {
  return (
    <div style={{ position: "relative", border: `2px solid ${C.line}`, borderTop: `4px solid ${C.mute}`, borderRadius: 1, background: C.panel, padding: 22, ...style }}>
      {children}
    </div>
  );
}
