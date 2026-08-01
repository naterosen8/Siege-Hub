import React from "react";
import { Link } from "react-router-dom";
import { C } from "../theme.js";
import { SectionLabel } from "../components/ui.jsx";
import { OPERATORS } from "../data/operators.js";

const SIDES = [
  { to: "/operators/attack", label: "Attackers", key: "atk", color: "atk", desc: "Breach, gather intel, and push the site." },
  { to: "/operators/defense", label: "Defenders", key: "def", color: "def", desc: "Fortify, deny entry, and hold the objective." },
];

export default function OperatorsHub() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="01" sub="Every operator in the game, split by side. Pick one to browse the full list.">
        Operator Database
      </SectionLabel>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {SIDES.map((s) => {
          const count = OPERATORS.filter((o) => o.side === s.key).length;
          const c = C[s.color];
          return (
            <Link key={s.to} to={s.to} className="card"
              style={{ display: "block", border: `2px solid ${C.line}`, borderRadius: 2, padding: 34, background: C.panel, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -30, right: -20, fontSize: 140, fontWeight: 800, color: c, opacity: 0.08, lineHeight: 1 }} className="disp">
                {count}
              </div>
              <div className="mono" style={{ fontSize: 12, color: c, letterSpacing: "0.08em", marginBottom: 10 }}>{count} OPERATORS</div>
              <div className="disp" style={{ fontSize: 38, textTransform: "uppercase", color: c }}>{s.label}</div>
              <p style={{ color: C.mute, fontSize: 14.5, marginTop: 10, marginBottom: 0, maxWidth: 360 }}>{s.desc}</p>
              <div className="mono" style={{ marginTop: 22, fontSize: 13, color: C.paper }}>VIEW LIST →</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
