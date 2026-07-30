import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { C } from "../theme.js";
import { Tag, SectionLabel, CornerTicks } from "../components/ui.jsx";
import RoomSchematic from "../components/RoomSchematic.jsx";
import { MAPS } from "../data/maps.js";

const STATUS_TONE = { Ranked: "atk", Casual: "mute", "Dual Front": "def" };

export default function Maps() {
  const { mapName } = useParams();
  const nav = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");

  const active = mapName ? decodeURIComponent(mapName) : MAPS[0].name;
  const map = MAPS.find((m) => m.name === active) || MAPS[0];
  const [floorIdx, setFloorIdx] = useState(0);
  const [room, setRoom] = useState(null);

  const selectMap = (name) => { nav(`/maps/${encodeURIComponent(name)}`); setFloorIdx(0); setRoom(null); };
  const floor = map.floors[Math.min(floorIdx, map.floors.length - 1)];
  const selectedRoom = floor.rooms.find((r) => r.name === room);
  const visibleMaps = MAPS.filter((m) => statusFilter === "all" || m.status === statusFilter);

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "70px 24px" }} className="grid-bg">
      <SectionLabel n="02" sub="Every map in the pool. Switch floors, click a room for reinforcement/hatch status, and read the rotation + champion-level setup notes.">
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

      <div className="fade-up" key={map.name} style={{ position: "relative", border: `1px solid ${C.line}`, borderRadius: 4, background: C.panel, padding: 28 }}>
        <div style={{ position: "absolute", inset: 10, pointerEvents: "none" }}><CornerTicks /></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <h3 className="disp" style={{ fontSize: 28, margin: 0, textTransform: "uppercase" }}>{map.name}</h3>
          <Tag tone={STATUS_TONE[map.status] || "mute"}>{map.status}</Tag>
        </div>

        <div style={{ display: "flex", gap: 6, marginTop: 18, marginBottom: 10, flexWrap: "wrap" }}>
          {map.floors.map((f, i) => (
            <button key={f.name} onClick={() => { setFloorIdx(i); setRoom(null); }} className="navbtn mono"
              style={{ background: floorIdx === i ? C.atk : "transparent", color: floorIdx === i ? C.ink : C.mute, border: `1px solid ${floorIdx === i ? C.atk : C.line}`, padding: "5px 12px", fontSize: 12, borderRadius: 3, cursor: "pointer" }}>
              {f.name}
            </button>
          ))}
        </div>

        <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 10, background: "rgba(255,255,255,0.015)" }}>
          <RoomSchematic floor={floor} selected={room} onSelect={setRoom} />
        </div>

        <div className="mono" style={{ display: "flex", gap: 16, marginTop: 10, fontSize: 10.5, color: C.mute, flexWrap: "wrap" }}>
          <span><span style={{ display: "inline-block", width: 10, height: 10, border: `1px solid ${C.atk}`, background: "rgba(217,98,43,0.1)", verticalAlign: "middle", marginRight: 5 }} />BOMBSITE ROOM</span>
          <span><span style={{ display: "inline-block", width: 10, height: 10, border: `1px dashed ${C.def}`, verticalAlign: "middle", marginRight: 5 }} />REINFORCEABLE WALL</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: C.ok, verticalAlign: "middle", marginRight: 5 }} />HATCH</span>
        </div>

        <div style={{ marginTop: 12, minHeight: 20, fontSize: 13, color: C.mute }}>
          {selectedRoom ? (
            <>Selected: <Tag tone={selectedRoom.site ? "atk" : "mute"}>{selectedRoom.name}</Tag>{" "}
              {selectedRoom.site ? "— bomb site room" : "— non-objective room"}
              {selectedRoom.reinforced && " · reinforceable wall/hatch"}
              {selectedRoom.hatch && " · hatch rotate"}
            </>
          ) : "Click a room on the schematic for its status."}
        </div>

        <div style={{ marginTop: 20 }}>
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

        <div style={{ marginTop: 16, border: `1px solid ${C.line}`, borderRadius: 3, padding: 14, background: "rgba(217,98,43,0.04)" }}>
          <Tag tone="s">CHAMPION SETUP</Tag>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{map.comboTip}</p>
        </div>
      </div>
    </div>
  );
}
