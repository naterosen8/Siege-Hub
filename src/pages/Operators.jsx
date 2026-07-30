import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { C, tierColor } from "../theme.js";
import { Tag, Pips, SectionLabel } from "../components/ui.jsx";
import { OPERATORS, ROLES } from "../data/operators.js";
import { tierOf } from "../data/meta.js";

export default function Operators() {
  const [side, setSide] = useState("all");
  const [role, setRole] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("name");

  const list = useMemo(() => {
    let l = OPERATORS.filter((op) =>
      (side === "all" || op.side === side) &&
      (role === "all" || op.role === role) &&
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
  }, [side, role, q, sort]);

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="01" sub="Every operator in the game. Click one for full champion-level breakdowns — counters, difficulty, and synergy picks.">
        Operator Database
      </SectionLabel>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="SEARCH OPERATOR..." className="mono"
          style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.paper, padding: "9px 12px", borderRadius: 3, fontSize: 12.5, flex: "1 1 200px" }} />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="mono"
          style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.paper, padding: "9px 12px", borderRadius: 3, fontSize: 12.5 }}>
          <option value="all">ALL ROLES</option>
          {ROLES.map((r) => <option key={r} value={r}>{r.toUpperCase()}</option>)}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="mono"
          style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.paper, padding: "9px 12px", borderRadius: 3, fontSize: 12.5 }}>
          <option value="name">SORT: NAME</option>
          <option value="tier">SORT: TIER</option>
          <option value="speed">SORT: SPEED</option>
        </select>
        {["all", "atk", "def"].map((s) => (
          <button key={s} onClick={() => setSide(s)} className="navbtn mono"
            style={{ background: side === s ? C.panel2 : "transparent", border: `1px solid ${side === s ? C.mute : C.line}`, color: side === s ? C.paper : C.mute, padding: "9px 16px", fontSize: 12.5, borderRadius: 3, cursor: "pointer" }}>
            {s === "all" ? "ALL" : s === "atk" ? "ATTACK" : "DEFENSE"}
          </button>
        ))}
      </div>

      <div className="mono" style={{ fontSize: 12, color: C.mute, marginBottom: 14 }}>{list.length} OPERATOR{list.length === 1 ? "" : "S"}</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 }}>
        {list.map((op) => {
          const side2 = op.side === "atk" ? C.atk : C.def;
          const tier = tierOf(op.name);
          return (
            <Link key={op.name} to={`/operators/${encodeURIComponent(op.name)}`} className="card opcard" style={{ "--side": side2, border: `1px solid ${C.line}`, borderRadius: 4, padding: 18, background: C.panel, display: "block" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className="opname disp" style={{ fontSize: 20, textTransform: "uppercase" }}>{op.name}</div>
                  <div style={{ color: C.mute, fontSize: 13, marginTop: 2 }}>{op.role}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                  <Tag tone={op.side}>{op.side === "atk" ? "ATK" : "DEF"}</Tag>
                  <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: tierColor(tier) }}>{tier}-TIER</span>
                </div>
              </div>
              <div style={{ marginTop: 14, display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: 11, color: C.mute }}>SPD</span>
                  <Pips n={op.speed} color={C.ok} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: 11, color: C.mute }}>ARM</span>
                  <Pips n={op.armor} color={C.def} />
                </div>
              </div>
              <div style={{ marginTop: 10 }}><Tag>{op.gadget}</Tag></div>
            </Link>
          );
        })}
        {list.length === 0 && <p style={{ color: C.mute }}>No operators match that search.</p>}
      </div>
    </div>
  );
}
