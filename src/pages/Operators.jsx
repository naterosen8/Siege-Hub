import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { C, tierColor } from "../theme.js";
import { SectionLabel } from "../components/ui.jsx";
import { OPERATORS, CATEGORIES, categoryOf } from "../data/operators.js";
import { tierOf } from "../data/meta.js";

const SIDE_LABEL = { atk: "Attackers", def: "Defenders" };
const OTHER_PATH = { atk: "/operators/defense", def: "/operators/attack" };

function initials(name) {
  const words = name.split(" ");
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function Operators({ side }) {
  const [category, setCategory] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("name");

  const list = useMemo(() => {
    let l = OPERATORS.filter((op) =>
      op.side === side &&
      (category === "all" || categoryOf(op.role) === category) &&
      op.name.toLowerCase().includes(q.toLowerCase())
    );
    if (sort === "tier") {
      const order = { S: 0, A: 1, B: 2, C: 3 };
      l = [...l].sort((a, b) => order[tierOf(a.name)] - order[tierOf(b.name)]);
    } else if (sort === "speed") {
      l = [...l].sort((a, b) => b.speed - a.speed);
    } else {
      l = [...l].sort((a, b) => a.name.localeCompare(b.name));
    }
    return l;
  }, [side, category, q, sort]);

  const side2 = side === "atk" ? C.atk : C.def;

  return (
    <div key={side} className="fade-up" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px" }}>
      <Link to="/operators" className="mono navbtn" style={{ color: C.mute, fontSize: 12.5 }}>← CHOOSE SIDE</Link>

      <div style={{ marginTop: 18 }}>
        <SectionLabel n="01" sub={`All ${SIDE_LABEL[side].toLowerCase()} in the game. Click one for full champion-level breakdowns — counters, difficulty, and synergy picks.`}>
          {SIDE_LABEL[side]}
        </SectionLabel>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="SEARCH OPERATOR..." className="mono"
          style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.paper, padding: "9px 12px", borderRadius: 3, fontSize: 12.5, flex: "1 1 200px" }} />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="mono"
          style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.paper, padding: "9px 12px", borderRadius: 3, fontSize: 12.5 }}>
          <option value="name">SORT: NAME</option>
          <option value="tier">SORT: TIER</option>
          <option value="speed">SORT: SPEED</option>
        </select>
        <Link to={OTHER_PATH[side]} className="navbtn mono"
          style={{ display: "flex", alignItems: "center", background: "transparent", border: `1px solid ${C.line}`, color: C.mute, padding: "9px 16px", fontSize: 12.5, borderRadius: 3 }}>
          SWITCH TO {SIDE_LABEL[side === "atk" ? "def" : "atk"].toUpperCase()}
        </Link>
      </div>

      <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8, letterSpacing: "0.05em" }}>FILTER BY</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
        {["all", ...CATEGORIES].map((c) => (
          <button key={c} onClick={() => setCategory(c)} className="navbtn mono"
            style={{ background: category === c ? side2 : "transparent", border: `1px solid ${category === c ? side2 : C.line}`, color: category === c ? C.ink : C.mute, padding: "7px 14px", fontSize: 12, borderRadius: 3, cursor: "pointer", fontWeight: category === c ? 600 : 400 }}>
            {c === "all" ? "ALL" : c.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mono" style={{ fontSize: 12, color: C.mute, marginBottom: 14 }}>{list.length} OPERATOR{list.length === 1 ? "" : "S"}</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))", gap: 10 }}>
        {list.map((op) => {
          const tier = tierOf(op.name);
          return (
            <Link key={op.name} to={`/operators/${encodeURIComponent(op.name)}`} className="card opcard2"
              style={{ border: `1px solid ${C.line}`, borderRadius: 4, background: C.panel, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "1 / 1", background: `${side2}1c`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="disp" style={{ fontSize: 34, color: side2, fontWeight: 800 }}>{initials(op.name)}</span>
                <span className="mono" style={{ position: "absolute", top: 6, right: 6, fontSize: 10, fontWeight: 700, color: tierColor(tier), border: `1px solid ${tierColor(tier)}`, borderRadius: 2, padding: "1px 4px", background: C.panel }}>
                  {tier}
                </span>
              </div>
              <div style={{ padding: "7px 8px", borderTop: `1px solid ${C.line}` }}>
                <div className="mono" style={{ fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.02em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {op.name}
                </div>
                <div style={{ fontSize: 10, color: C.mute, marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {op.role}
                </div>
              </div>
            </Link>
          );
        })}
        {list.length === 0 && <p style={{ color: C.mute, gridColumn: "1 / -1" }}>No operators match that search.</p>}
      </div>
    </div>
  );
}
