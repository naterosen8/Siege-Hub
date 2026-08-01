import React from "react";
import { useNavigate } from "react-router-dom";
import { C } from "../theme.js";
import { Tag, CornerTicks } from "../components/ui.jsx";
import { OPERATORS } from "../data/operators.js";
import { SCENARIOS } from "../data/meta.js";

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="grid-bg" style={{ position: "relative", padding: "90px 24px 70px", borderBottom: `2px solid ${C.line}`, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 24, pointerEvents: "none" }}><CornerTicks /></div>
      <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
        <Tag tone="atk">OPERATION BRIEFING</Tag>
        <h1 className="disp" style={{ fontSize: "clamp(44px, 7.5vw, 84px)", lineHeight: 0.98, margin: "20px 0 16px", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
          Know the room<br />before you breach it.
        </h1>
        <p style={{ color: C.mute, fontSize: 17, maxWidth: 600, lineHeight: 1.6, margin: "0 0 20px" }}>
          {OPERATORS.length} operators and a live matchup engine — champion-level counters, not just a stat sheet.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
          <button onClick={() => nav("/operators")} className="navbtn mono" style={{ background: C.atk, color: C.ink, border: "none", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 1, cursor: "pointer" }}>BROWSE OPERATORS →</button>
          <button onClick={() => nav("/matchup")} className="navbtn mono" style={{ background: "transparent", color: C.paper, border: `2px solid ${C.line}`, padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 1, cursor: "pointer" }}>RUN A MATCHUP</button>
          <button onClick={() => nav("/gamesense")} className="navbtn mono" style={{ background: "transparent", color: C.paper, border: `2px solid ${C.line}`, padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 1, cursor: "pointer" }}>TEST YOUR GAME SENSE</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, maxWidth: 640 }}>
          {[
            ["ATTACKERS", OPERATORS.filter((o) => o.side === "atk").length, C.atk],
            ["DEFENDERS", OPERATORS.filter((o) => o.side === "def").length, C.def],
            ["SCENARIOS", SCENARIOS.length, C.ok],
          ].map(([label, val, color]) => (
            <div key={label} style={{ border: `2px solid ${C.line}`, borderTop: `4px solid ${color}`, borderRadius: 1, padding: "14px 16px" }}>
              <div className="disp" style={{ fontSize: 34, fontWeight: 800, color }}>{val}</div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: C.mute, marginTop: 3, letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
