import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { C } from "../theme.js";
import { Tag, SectionLabel, Panel } from "../components/ui.jsx";
import { TIPS, SCENARIOS } from "../data/meta.js";
import { OPERATORS, whoCounters } from "../data/operators.js";

const PHASES = [
  { key: "all", label: "All Phases" },
  { key: "draft", label: "Picks" },
  { key: "early", label: "Early Round" },
  { key: "mid", label: "Mid Round" },
  { key: "late", label: "Late Round" },
];
const SIDES = [
  { key: "all", label: "All" },
  { key: "atk", label: "Attack" },
  { key: "def", label: "Defense" },
];

function pickRandom(list, exclude) {
  if (list.length === 0) return null;
  if (list.length === 1) return list[0];
  let next;
  do { next = list[Math.floor(Math.random() * list.length)]; } while (next === exclude);
  return next;
}

function ShuffleTip({ pool }) {
  const [tip, setTip] = useState(() => pickRandom(pool, null));

  return (
    <Panel style={{ marginBottom: 30, borderColor: C.atk }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
        <div>
          <Tag tone="atk">RANDOM TIP</Tag>
          {tip ? (
            <p style={{ fontSize: 17, lineHeight: 1.6, marginTop: 14, marginBottom: 0, maxWidth: 640 }}>{tip.text}</p>
          ) : (
            <p style={{ color: C.mute, fontSize: 14, marginTop: 14, marginBottom: 0 }}>No tips in this filter to shuffle — widen your phase/side selection.</p>
          )}
        </div>
        <button onClick={() => setTip(pickRandom(pool, tip))} className="navbtn mono" disabled={pool.length === 0}
          style={{ background: C.atk, color: C.ink, border: "none", padding: "10px 18px", fontSize: 13, fontWeight: 600, borderRadius: 1, cursor: pool.length ? "pointer" : "not-allowed", flexShrink: 0, opacity: pool.length ? 1 : 0.5 }}>
          SHUFFLE ↻
        </button>
      </div>
    </Panel>
  );
}

function shuffled(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Reorders a scenario's options randomly and remaps `correct` to match, so the
// answer position can't be pattern-guessed across a playthrough.
function shuffleOptions(s) {
  const order = shuffled(s.options.map((_, i) => i));
  return { ...s, options: order.map((i) => s.options[i]), correct: order.indexOf(s.correct) };
}

function freshQueue() {
  return shuffled(SCENARIOS).map(shuffleOptions);
}

function ScenarioQuiz() {
  const [queue, setQueue] = useState(freshQueue);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const restart = () => {
    setQueue(freshQueue());
    setIndex(0);
    setSelected(null);
    setScore(0);
  };

  const done = index >= queue.length;

  if (done) {
    return (
      <Panel style={{ marginBottom: 30, borderColor: C.a, textAlign: "center" }}>
        <Tag tone="a">QUIZ COMPLETE</Tag>
        <div className="disp" style={{ fontSize: 44, margin: "16px 0 6px", color: C.a }}>{score} / {queue.length}</div>
        <p style={{ color: C.mute, fontSize: 14, margin: "0 0 20px" }}>
          {score === queue.length ? "Clean sweep." : score >= queue.length * 0.7 ? "Solid game sense." : "Worth another lap through the tips above."}
        </p>
        <button onClick={restart} className="navbtn mono"
          style={{ background: C.a, color: C.ink, border: "none", padding: "10px 20px", fontSize: 13, fontWeight: 600, borderRadius: 1, cursor: "pointer" }}>
          RETAKE QUIZ ↻
        </button>
      </Panel>
    );
  }

  const current = queue[index];
  const answered = selected !== null;
  const phaseLabel = PHASES.find((p) => p.key === current.phase)?.label.toUpperCase();

  const answer = (i) => {
    if (answered) return;
    setSelected(i);
    if (i === current.correct) setScore((s) => s + 1);
  };

  const advance = () => {
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <Panel style={{ marginBottom: 30, borderColor: C.a }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
        <Tag tone="a">SCENARIO CHECK — {phaseLabel}</Tag>
        <span className="mono" style={{ fontSize: 12, color: C.mute }}>QUESTION {index + 1} OF {queue.length} · SCORE {score}</span>
      </div>

      <p style={{ fontSize: 16, lineHeight: 1.6, margin: "0 0 16px", maxWidth: 700 }}>{current.scenario}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 700 }}>
        {current.options.map((opt, i) => {
          const isCorrect = i === current.correct;
          const isPicked = i === selected;
          let border = C.line, color = C.paper;
          if (answered && isCorrect) { border = C.ok; color = C.ok; }
          else if (answered && isPicked && !isCorrect) { border = C.atk; color = C.atk; }
          else if (answered) { color = C.mute; }
          return (
            <button key={i} onClick={() => answer(i)} disabled={answered} className="navbtn"
              style={{ textAlign: "left", background: "transparent", border: `2px solid ${border}`, color, padding: "10px 14px", fontSize: 14, borderRadius: 1, cursor: answered ? "default" : "pointer" }}>
              {opt}{answered && isCorrect ? "  ✓" : ""}{answered && isPicked && !isCorrect ? "  ✗" : ""}
            </button>
          );
        })}
      </div>

      {answered && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: `2px solid ${C.line}` }}>
          <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 6 }}>
            {selected === current.correct ? "CORRECT" : "NOT QUITE"}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 16px" }}>{current.why}</p>
          <button onClick={advance} className="navbtn mono"
            style={{ background: C.a, color: C.ink, border: "none", padding: "9px 18px", fontSize: 13, fontWeight: 600, borderRadius: 1, cursor: "pointer" }}>
            {index + 1 === queue.length ? "SEE RESULTS →" : "NEXT QUESTION →"}
          </button>
        </div>
      )}
    </Panel>
  );
}

export default function GameSense() {
  const [phase, setPhase] = useState("all");
  const [side, setSide] = useState("all");
  const [opQuery, setOpQuery] = useState("");

  const list = TIPS.filter((t) =>
    (phase === "all" || t.phase === phase) &&
    (side === "all" || t.side === "both" || t.side === side)
  );

  const opMatches = useMemo(() => {
    const q = opQuery.trim().toLowerCase();
    if (!q) return [];
    return OPERATORS.filter((o) => o.name.toLowerCase().includes(q)).slice(0, 6).map((op) => ({
      ...op,
      deniedBy: whoCounters(op),
    }));
  }, [opQuery]);

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="03" sub="Principles organized by round phase, plus every operator's own documented counters and champion-level plays — search a name to pull theirs up directly.">
        Game Sense
      </SectionLabel>

      <div style={{ marginBottom: 34 }}>
        <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>OPERATOR-SPECIFIC INTEL</div>
        <h3 className="disp" style={{ fontSize: 22, margin: "0 0 14px", textTransform: "uppercase" }}>Search an operator's counters &amp; champion plays</h3>
        <input value={opQuery} onChange={(e) => setOpQuery(e.target.value)} placeholder="SEARCH OPERATOR..." className="mono"
          style={{ background: C.panel, border: `2px solid ${C.line}`, color: C.paper, padding: "10px 14px", borderRadius: 1, fontSize: 13, width: "100%", maxWidth: 360, marginBottom: 20 }} />

        {opQuery.trim() === "" && (
          <p style={{ color: C.mute, fontSize: 13.5 }}>Type a name — e.g. "Ace" or "Mira" — to pull that operator's documented counters and champion-level plays straight from their profile.</p>
        )}
        {opQuery.trim() !== "" && opMatches.length === 0 && (
          <p style={{ color: C.mute, fontSize: 13.5 }}>No operator matches "{opQuery}".</p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {opMatches.map((op) => (
            <div key={op.name} style={{ border: `2px solid ${C.line}`, borderRadius: 1, padding: 18, background: C.panel }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                <Link to={`/operators/${encodeURIComponent(op.name)}`} className="disp" style={{ fontSize: 20, textTransform: "uppercase", color: op.side === "atk" ? C.atk : C.def }}>
                  {op.name}
                </Link>
                <Tag tone={op.side}>{op.side === "atk" ? "ATTACKER" : "DEFENDER"}</Tag>
              </div>

              <div style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `2px solid ${C.line}` }}>
                <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>DIRECT COUNTERS — WHO SHUTS THEM DOWN</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {op.deniedBy.length === 0 && <span style={{ color: C.mute, fontSize: 13 }}>No specific operator named in the counters below — read them as general play patterns instead.</span>}
                  {op.deniedBy.map((o) => (
                    <Link key={o.name} to={`/operators/${encodeURIComponent(o.name)}`}><Tag tone={o.side}>{o.name}</Tag></Link>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="detail-grid">
                <div>
                  <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>COUNTERED BY</div>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, lineHeight: 1.65 }}>
                    {op.counters.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>CHAMPION-LEVEL PLAY</div>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, lineHeight: 1.65 }}>
                    {op.champion.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ShuffleTip key={phase + side} pool={list} />
      <ScenarioQuiz />

      <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
        {PHASES.map((p) => (
          <button key={p.key} onClick={() => setPhase(p.key)} className="navbtn mono"
            style={{ background: phase === p.key ? C.panel2 : "transparent", border: `2px solid ${phase === p.key ? C.mute : C.line}`, color: phase === p.key ? C.paper : C.mute, padding: "7px 14px", fontSize: 12, borderRadius: 1, cursor: "pointer" }}>
            {p.label.toUpperCase()}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {SIDES.map((s) => (
          <button key={s.key} onClick={() => setSide(s.key)} className="navbtn mono"
            style={{ background: side === s.key ? C.panel2 : "transparent", border: `2px solid ${side === s.key ? C.mute : C.line}`, color: side === s.key ? C.paper : C.mute, padding: "6px 12px", fontSize: 11.5, borderRadius: 1, cursor: "pointer" }}>
            {s.label.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 50 }}>
        {list.map((t, i) => (
          <div key={i} className="card" style={{ border: `2px solid ${C.line}`, borderRadius: 1, padding: 18, background: C.panel }}>
            <Tag tone={t.side === "atk" ? "atk" : t.side === "def" ? "def" : "mute"}>
              {PHASES.find((p) => p.key === t.phase)?.label.toUpperCase()}{t.side !== "both" ? ` · ${t.side.toUpperCase()}` : ""}
            </Tag>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 12, marginBottom: 0 }}>{t.text}</p>
          </div>
        ))}
        {list.length === 0 && <p style={{ color: C.mute, fontSize: 14 }}>No principles match that filter combination.</p>}
      </div>
    </div>
  );
}
