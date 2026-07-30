import React, { useState } from "react";
import { C } from "../theme.js";
import { Tag } from "./ui.jsx";

function RoomCard({ room }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="navbtn"
      style={{
        textAlign: "left", cursor: "pointer", fontFamily: "inherit",
        background: room.site ? "rgba(156,59,38,0.07)" : C.panel2,
        border: `1px solid ${open ? C.paper : room.site ? C.atk : C.line}`,
        borderRadius: 4, padding: "14px 16px", width: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <span className="disp" style={{ fontSize: 16, textTransform: "uppercase" }}>{room.name}</span>
        <span className="mono" style={{ fontSize: 14, color: C.mute }}>{open ? "−" : "+"}</span>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
        {room.site && <Tag tone="atk">BOMBSITE</Tag>}
        {room.reinforced && <Tag tone="def">REINFORCEABLE</Tag>}
        {room.hatch && <Tag tone="ok">HATCH</Tag>}
        {!room.site && !room.reinforced && !room.hatch && <Tag>NON-OBJECTIVE</Tag>}
      </div>
      {open && (
        <div className="fade-up mono" style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.line}`, fontSize: 12, color: C.mute, lineHeight: 1.7 }}>
          {room.site ? "Bombsite room — expect defender utility and a plant here." : "Non-objective room — used for rotates, roams, and flanks."}
          {room.reinforced && " Wall/hatch can be reinforced by defenders pre-round; hard-breach denial (Bandit/Jäger/Kaid) is worth checking here."}
          {room.hatch && " Hatch rotate — a fast vertical connector both sides fight over."}
        </div>
      )}
    </button>
  );
}

export default function RoomGrid({ floor }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
      {floor.rooms.map((r) => <RoomCard key={r.name} room={r} />)}
    </div>
  );
}
