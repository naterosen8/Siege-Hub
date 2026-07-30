import React, { useState } from "react";
import { C } from "../theme.js";
import { Tag, SectionLabel } from "../components/ui.jsx";
import { TIPS } from "../data/meta.js";

export default function GameSense() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Game Sense", "Attack", "Defense", "Meta"];
  const list = TIPS.filter((t) => cat === "All" || t.cat === cat);
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="03" sub="High-level principles that separate a champion-level read from a guess — organized by phase of the round.">
        Game Sense
      </SectionLabel>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className="navbtn mono"
            style={{ background: cat === c ? C.panel2 : "transparent", border: `1px solid ${cat === c ? C.mute : C.line}`, color: cat === c ? C.paper : C.mute, padding: "7px 14px", fontSize: 12, borderRadius: 3, cursor: "pointer" }}>
            {c.toUpperCase()}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
        {list.map((t, i) => (
          <div key={i} className="card" style={{ border: `1px solid ${C.line}`, borderRadius: 4, padding: 18, background: C.panel }}>
            <Tag tone={t.cat === "Attack" ? "atk" : t.cat === "Defense" ? "def" : t.cat === "Meta" ? "s" : "mute"}>{t.cat}</Tag>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 12, marginBottom: 0 }}>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
