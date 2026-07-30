import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { C } from "../theme.js";
import { Tag, SectionLabel } from "../components/ui.jsx";
import RoomGrid from "../components/RoomGrid.jsx";
import { MAPS, siteCombos } from "../data/maps.js";

const STATUS_TONE = { Ranked: "atk", Casual: "mute", "Dual Front": "def" };

export default function Maps() {
  const { mapName } = useParams();
  const nav = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");

  const active = mapName ? decodeURIComponent(mapName) : MAPS[0].name;
  const map = MAPS.find((m) => m.name === active) || MAPS[0];
  const [floorIdx, setFloorIdx] = useState(0);

  const selectMap = (name) => { nav(`/maps/${encodeURIComponent(name)}`); setFloorIdx(0); };
  const floor = map.floors[Math.min(floorIdx, map.floors.length - 1)];
  const combos = siteCombos(floor);
  const visibleMaps = MAPS.filter((m) => statusFilter === "all" || m.status === statusFilter);

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="02" sub="Every map in the pool. Switch floors, open a room card for its status, and read the rotation + champion-level setup notes.">
        Map Intel
      </SectionLabel>

      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {["all", "Ranked", "Casual", "Dual Front"].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)} className="navbtn mono"
            style={{ background: statusFilter === s ? C.panel2 : "transparent", border: `1px solid ${statusFilter === s ? C.mute : C.line}`, color: statusFilter === s ? C.paper : C.mute, padding: "6px 12px", fontSize: 11.5, borderRadius: 3, cursor: "pointer" }}>
            {s === "all" ? "ALL" : s.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        {visibleMaps.map((m) => (
          <button key={m.name} onClick={() => selectMap(m.name)} className="navbtn mono"
            style={{ background: active === m.name ? C.panel2 : "transparent", border: `1px solid ${active === m.name ? C.mute : C.line}`, color: active === m.name ? C.paper : C.mute, padding: "8px 14px", fontSize: 12.5, borderRadius: 3, cursor: "pointer" }}>
            {m.name.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="fade-up" key={map.name} style={{ border: `1px solid ${C.line}`, borderRadius: 4, background: C.panel, padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <h3 className="disp" style={{ fontSize: 28, margin: 0, textTransform: "uppercase" }}>{map.name}</h3>
          <Tag tone={STATUS_TONE[map.status] || "mute"}>{map.status}</Tag>
        </div>

        <div style={{ display: "flex", gap: 6, marginTop: 18, marginBottom: 18, flexWrap: "wrap" }}>
          {map.floors.map((f, i) => (
            <button key={f.name} onClick={() => setFloorIdx(i)} className="navbtn mono"
              style={{ background: floorIdx === i ? C.atk : "transparent", color: floorIdx === i ? C.ink : C.mute, border: `1px solid ${floorIdx === i ? C.atk : C.line}`, padding: "6px 14px", fontSize: 13, borderRadius: 3, cursor: "pointer" }}>
              {f.name}
            </button>
          ))}
        </div>

        {combos.length > 0 && (
          <div style={{ marginBottom: 18, border: `1px solid ${C.atk}`, borderRadius: 3, padding: "12px 16px", background: "rgba(156,59,38,0.06)" }}>
            <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 6 }}>BOMBSITE COMBO — {floor.name}</div>
            <div className="disp" style={{ fontSize: 17, textTransform: "uppercase" }}>{combos.join(" · ")}</div>
          </div>
        )}

        <RoomGrid floor={floor} />

        <div style={{ marginTop: 22 }}>
          <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 6 }}>ROTATIONS</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: C.paper }}>{map.rotations}</p>
        </div>

        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="detail-grid">
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 14 }}>
            <Tag tone="atk">ATTACK PUSH</Tag>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{map.attackTip}</p>
          </div>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 14 }}>
            <Tag tone="def">DEFENSE HOLD</Tag>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{map.defendTip}</p>
          </div>
        </div>

        <div style={{ marginTop: 16, border: `1px solid ${C.line}`, borderRadius: 3, padding: 14, background: "rgba(156,59,38,0.05)" }}>
          <Tag tone="s">CHAMPION SETUP</Tag>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{map.comboTip}</p>
        </div>
      </div>
    </div>
  );
}
