import React from "react";
import { Link } from "react-router-dom";
import { C, tierColor } from "../theme.js";
import { Tag, SectionLabel } from "../components/ui.jsx";
import { OPERATORS } from "../data/operators.js";
import { TIER_NOTE, tierOf } from "../data/meta.js";

const TIERS = ["S", "A", "B", "C"];

function TierRow({ tier, side }) {
  const ops = OPERATORS.filter((o) => o.side === side && tierOf(o.name) === tier);
  if (ops.length === 0) return null;
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "14px 0", borderBottom: `1px solid ${C.line}` }}>
      <div className="disp" style={{ width: 48, flexShrink: 0, fontSize: 30, color: tierColor(tier), textAlign: "center" }}>{tier}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {ops.map((o) => (
          <Link key={o.name} to={`/operators/${encodeURIComponent(o.name)}`}>
            <Tag tone={o.side}>{o.name}</Tag>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function TierList() {
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="05" sub={TIER_NOTE}>
        Meta Tier List
      </SectionLabel>

      <div style={{ marginBottom: 34 }}>
        <div className="mono" style={{ fontSize: 12, color: C.atk, marginBottom: 6, letterSpacing: "0.06em" }}>ATTACKERS</div>
        {TIERS.map((t) => <TierRow key={"a" + t} tier={t} side="atk" />)}
      </div>

      <div>
        <div className="mono" style={{ fontSize: 12, color: C.def, marginBottom: 6, letterSpacing: "0.06em" }}>DEFENDERS</div>
        {TIERS.map((t) => <TierRow key={"d" + t} tier={t} side="def" />)}
      </div>
    </div>
  );
}
