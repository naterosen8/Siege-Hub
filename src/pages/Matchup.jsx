import React, { useState } from "react";
import { Link } from "react-router-dom";
import { C } from "../theme.js";
import { Tag, SectionLabel, Panel } from "../components/ui.jsx";
import { OPERATORS } from "../data/operators.js";

export default function Matchup() {
  const attackers = OPERATORS.filter((o) => o.side === "atk");
  const defenders = OPERATORS.filter((o) => o.side === "def");
  const [a, setA] = useState(attackers[0].name);
  const [d, setD] = useState(defenders[0].name);
  const atk = OPERATORS.find((o) => o.name === a);
  const def = OPERATORS.find((o) => o.name === d);

  const atkBeatsDef = atk.counters.filter((c) => c.toLowerCase().includes(def.name.toLowerCase()));
  const defBeatsAtk = def.counters.filter((c) => c.toLowerCase().includes(atk.name.toLowerCase()));
  const atkChampBeatsDef = atk.champion.filter((c) => c.toLowerCase().includes(def.name.toLowerCase()));
  const defChampBeatsAtk = def.champion.filter((c) => c.toLowerCase().includes(atk.name.toLowerCase()));

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="02" sub="Pick an attacker and a defender to pull any documented direct interaction between their gadgets, plus each operator's general profile.">
        Matchup Tool
      </SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center", marginBottom: 24 }}>
        <select value={a} onChange={(e) => setA(e.target.value)} style={{ background: C.panel, border: `2px solid ${C.line}`, color: C.atk, padding: "12px", borderRadius: 1, fontSize: 14 }}>
          {attackers.map((o) => <option key={o.name} value={o.name}>{o.name}</option>)}
        </select>
        <span className="disp" style={{ color: C.mute, fontSize: 18 }}>VS</span>
        <select value={d} onChange={(e) => setD(e.target.value)} style={{ background: C.panel, border: `2px solid ${C.line}`, color: C.def, padding: "12px", borderRadius: 1, fontSize: 14 }}>
          {defenders.map((o) => <option key={o.name} value={o.name}>{o.name}</option>)}
        </select>
      </div>

      <Panel>
        <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>DOCUMENTED INTERACTIONS</div>
        {(atkBeatsDef.length || defBeatsAtk.length || atkChampBeatsDef.length || defChampBeatsAtk.length) ? (
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, lineHeight: 1.7 }}>
            {atkBeatsDef.map((c, i) => <li key={"a" + i}><Tag tone="atk">{a}</Tag> {c}</li>)}
            {defBeatsAtk.map((c, i) => <li key={"d" + i}><Tag tone="def">{d}</Tag> {c}</li>)}
            {atkChampBeatsDef.map((c, i) => <li key={"ac" + i}><Tag tone="atk">{a} PRO TIP</Tag> {c}</li>)}
            {defChampBeatsAtk.map((c, i) => <li key={"dc" + i}><Tag tone="def">{d} PRO TIP</Tag> {c}</li>)}
          </ul>
        ) : (
          <p style={{ color: C.mute, fontSize: 14, margin: 0 }}>No specific gadget interaction on record between {a} and {d} — treat this as a standard positioning duel and lean on general game sense.</p>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 }}>
          <Link to={`/operators/${encodeURIComponent(a)}`} style={{ border: `2px solid ${C.line}`, borderRadius: 1, padding: 14, display: "block" }}>
            <Tag tone="atk">{a}</Tag>
            <div style={{ marginTop: 10, fontSize: 13, color: C.mute }}>{atk.role} · {atk.gadget}</div>
          </Link>
          <Link to={`/operators/${encodeURIComponent(d)}`} style={{ border: `2px solid ${C.line}`, borderRadius: 1, padding: 14, display: "block" }}>
            <Tag tone="def">{d}</Tag>
            <div style={{ marginTop: 10, fontSize: 13, color: C.mute }}>{def.role} · {def.gadget}</div>
          </Link>
        </div>
      </Panel>
    </div>
  );
}
