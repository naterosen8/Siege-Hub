import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { C, tierColor } from "../theme.js";
import { Tag, Pips, Panel } from "../components/ui.jsx";
import { OPERATORS, whoCounters, whoOpCounters } from "../data/operators.js";
import { tierOf } from "../data/meta.js";
import { PRO_INTEL } from "../data/proIntel.js";

function ProView({ op, side2, tier }) {
  const pro = PRO_INTEL[op.name];
  if (!pro) {
    return (
      <Panel style={{ marginTop: 18, padding: 30, borderColor: C.a }}>
        <Tag tone="a">PRO INTEL</Tag>
        <p style={{ color: C.mute, fontSize: 14, marginTop: 14, marginBottom: 0 }}>
          Pro-level breakdown for {op.name} hasn't been written yet — this is rolling out operator by operator. Check back soon, or switch back to Learning mode above.
        </p>
      </Panel>
    );
  }

  return (
    <Panel style={{ marginTop: 18, padding: 30, borderColor: C.a }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Tag tone="a">PRO INTEL</Tag>
        <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: tierColor(tier) }}>{tier}-TIER</span>
      </div>
      <h1 className="disp" style={{ fontSize: 38, margin: "14px 0 2px", textTransform: "uppercase", color: side2 }}>{op.name}</h1>
      <p style={{ color: C.mute, fontSize: 14, margin: "0 0 26px" }}>Diamond-level breakdown — mechanics, sequencing, and the gap between good and great.</p>

      <div style={{ marginBottom: 26 }}>
        <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>MECHANICAL BREAKDOWN</div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>{pro.breakdown}</p>
      </div>

      <div style={{ marginBottom: 26 }}>
        <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>WHY THE COUNTERS WORK</div>
        {op.counters.map((c, i) => (
          <div key={i} style={{ marginBottom: i < op.counters.length - 1 ? 14 : 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 3 }}>{c}</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: C.paper }}>{pro.counterWhy?.[i]}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 26 }}>
        <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>SEQUENCING</div>
        {op.champion.map((c, i) => (
          <div key={i} style={{ marginBottom: i < op.champion.length - 1 ? 14 : 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 3 }}>{c}</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: C.paper }}>{pro.sequencing?.[i]}</p>
          </div>
        ))}
      </div>

      <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 20 }}>
        <Tag tone="s">THE RANK GAP</Tag>
        <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.7 }}>{pro.rankGap}</p>
      </div>
    </Panel>
  );
}

export default function OperatorDetail() {
  const { name } = useParams();
  const nav = useNavigate();
  const [mode, setMode] = useState("learning");
  const op = OPERATORS.find((o) => o.name === decodeURIComponent(name));

  const deniedBy = useMemo(() => (op ? whoCounters(op) : []), [op]);
  const denies = useMemo(() => (op ? whoOpCounters(op) : []), [op]);

  const sameRole = useMemo(() => {
    if (!op) return [];
    return OPERATORS.filter((o) => o.name !== op.name && o.side === op.side && o.role === op.role);
  }, [op]);

  if (!op) {
    return (
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "90px 24px", textAlign: "center" }}>
        <p style={{ color: C.mute }}>No operator found for "{name}".</p>
        <button onClick={() => nav("/operators")} className="navbtn mono" style={{ background: "transparent", color: C.paper, border: `1px solid ${C.line}`, padding: "10px 18px", fontSize: 13, borderRadius: 3, cursor: "pointer", marginTop: 16 }}>← BACK TO OPERATORS</button>
      </div>
    );
  }

  const side2 = op.side === "atk" ? C.atk : C.def;
  const tier = tierOf(op.name);

  return (
    <div className="fade-up" style={{ maxWidth: 900, margin: "0 auto", padding: "50px 24px 90px" }}>
      <Link to="/operators" className="mono navbtn" style={{ color: C.mute, fontSize: 12.5 }}>← ALL OPERATORS</Link>

      <div style={{ display: "flex", gap: 8, marginTop: 20, marginBottom: -4 }}>
        <button onClick={() => setMode("learning")} className="navbtn mono"
          style={{ background: mode === "learning" ? C.panel2 : "transparent", border: `1px solid ${mode === "learning" ? C.mute : C.line}`, color: mode === "learning" ? C.paper : C.mute, padding: "8px 16px", fontSize: 12.5, borderRadius: 3, cursor: "pointer", fontWeight: mode === "learning" ? 600 : 400 }}>
          LEARNING
        </button>
        <button onClick={() => setMode("pro")} className="navbtn mono"
          style={{ background: mode === "pro" ? C.a : "transparent", border: `1px solid ${mode === "pro" ? C.a : C.line}`, color: mode === "pro" ? C.ink : C.mute, padding: "8px 16px", fontSize: 12.5, borderRadius: 3, cursor: "pointer", fontWeight: mode === "pro" ? 600 : 400 }}>
          PRO INTEL
        </button>
      </div>

      {mode === "pro" ? (
        <ProView op={op} side2={side2} tier={tier} />
      ) : (
      <Panel style={{ marginTop: 18, padding: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14 }}>
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
              <Tag tone={op.side}>{op.side === "atk" ? "ATTACKER" : "DEFENDER"}</Tag>
              <Tag>{op.difficulty.toUpperCase()}</Tag>
              <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: tierColor(tier) }}>{tier}-TIER</span>
            </div>
            <h1 className="disp" style={{ fontSize: 44, margin: 0, textTransform: "uppercase", color: side2 }}>{op.name}</h1>
            <div style={{ color: C.mute, fontSize: 15, marginTop: 4 }}>{op.role}</div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 6 }}>SPEED</div>
              <Pips n={op.speed} max={3} color={C.ok} />
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 6 }}>ARMOR</div>
              <Pips n={op.armor} max={3} color={C.def} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.line}` }}>
          <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>GADGET — {op.gadget.toUpperCase()}</div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65 }}>{op.gadgetDesc}</p>
        </div>

        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="detail-grid">
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>COUNTERED BY</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13.5, lineHeight: 1.7 }}>
              {op.counters.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>CHAMPION-LEVEL PLAY</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13.5, lineHeight: 1.7 }}>
              {op.champion.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </Panel>
      )}

      {(deniedBy.length > 0 || denies.length > 0) && (
        <Panel style={{ marginTop: 16 }}>
          <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 12 }}>DOCUMENTED MATCHUPS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="detail-grid">
            <div>
              <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>DENIED BY</div>
              {denies.length === 0 && deniedBy.length === 0 ? null : null}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {deniedBy.length === 0 && <span style={{ color: C.mute, fontSize: 13 }}>No direct counters on record.</span>}
                {deniedBy.map((o) => (
                  <Link key={o.name} to={`/operators/${encodeURIComponent(o.name)}`}><Tag tone={o.side}>{o.name}</Tag></Link>
                ))}
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>DENIES</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {denies.length === 0 && <span style={{ color: C.mute, fontSize: 13 }}>No direct denials on record.</span>}
                {denies.map((o) => (
                  <Link key={o.name} to={`/operators/${encodeURIComponent(o.name)}`}><Tag tone={o.side}>{o.name}</Tag></Link>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      )}

      {sameRole.length > 0 && (
        <Panel style={{ marginTop: 16 }}>
          <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 12 }}>SAME ROLE — {op.role.toUpperCase()}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {sameRole.map((o) => (
              <Link key={o.name} to={`/operators/${encodeURIComponent(o.name)}`}><Tag tone={o.side}>{o.name}</Tag></Link>
            ))}
          </div>
        </Panel>
      )}
    </div>
  );
}
