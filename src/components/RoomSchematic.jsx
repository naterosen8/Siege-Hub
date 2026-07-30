import React from "react";
import { C } from "../theme.js";

export default function RoomSchematic({ floor, selected, onSelect }) {
  return (
    <svg viewBox="0 0 400 240" style={{ width: "100%", height: "auto", display: "block" }}>
      {floor.rooms.map((r) => {
        const isSel = selected === r.name;
        const stroke = r.site ? C.atk : C.mute;
        return (
          <g key={r.name} className="room" onClick={() => onSelect(r.name)}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={2}
              fill={isSel ? "rgba(217,98,43,0.18)" : r.site ? "rgba(217,98,43,0.05)" : "rgba(255,255,255,0.02)"}
              stroke={stroke} strokeWidth={isSel ? 2 : 1} strokeDasharray={r.reinforced ? "0" : "0"} />
            {r.reinforced && (
              <rect x={r.x + 2} y={r.y + 2} width={r.w - 4} height={r.h - 4} rx={1}
                fill="none" stroke={C.def} strokeWidth={1} strokeDasharray="3 3" opacity={0.8} />
            )}
            {r.hatch && (
              <circle cx={r.x + r.w - 12} cy={r.y + 12} r={4} fill={C.ok} stroke={C.ink} strokeWidth={1} />
            )}
            <text x={r.x + r.w / 2} y={r.y + r.h / 2} textAnchor="middle" dominantBaseline="middle"
              fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill={isSel ? C.paper : C.mute}>
              {r.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
