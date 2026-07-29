import React, { useState, useMemo } from "react";

/* ---------- DESIGN TOKENS (unchanged from v1 — tactical dossier / blueprint) ---------- */
const C = {
  ink: "#0F1214", panel: "#171C1F", panel2: "#1D2327", line: "#262E32",
  paper: "#E9E6DD", mute: "#7C8790", atk: "#D9622B", def: "#3E8FA6", ok: "#6E9B5E",
};

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
    * { box-sizing: border-box; }
    body { margin: 0; }
    .hub { font-family: 'IBM Plex Sans', sans-serif; background: ${C.ink}; color: ${C.paper}; min-height: 100vh; }
    .disp { font-family: 'Rajdhani', sans-serif; font-weight: 700; letter-spacing: 0.02em; }
    .mono { font-family: 'IBM Plex Mono', monospace; }
    .grid-bg {
      background-image: linear-gradient(${C.line} 1px, transparent 1px), linear-gradient(90deg, ${C.line} 1px, transparent 1px);
      background-size: 40px 40px; background-position: -1px -1px;
    }
    .tick { position: absolute; width: 14px; height: 14px; border: 1px solid ${C.mute}; opacity: 0.5; }
    .navbtn { transition: color .15s ease, border-color .15s ease, background .15s ease; }
    .navbtn:hover { color: ${C.paper} !important; }
    .card { transition: border-color .15s ease, transform .15s ease; }
    .card:hover { border-color: ${C.mute}; transform: translateY(-2px); }
    .opcard:hover .opname { color: var(--side); }
    .room { transition: fill .12s ease, stroke .12s ease; cursor: pointer; }
    .room:hover { stroke: ${C.paper}; }
    select, input { font-family: 'IBM Plex Mono', monospace; }
    a, button, select { outline-offset: 3px; }
    a:focus-visible, button:focus-visible, select:focus-visible { outline: 2px solid ${C.atk}; }
    @media (prefers-reduced-motion: reduce) { .card, .navbtn, .room { transition: none !important; } }
  `}</style>
);

function Tag({ children, tone = "mute" }) {
  const color = tone === "atk" ? C.atk : tone === "def" ? C.def : tone === "ok" ? C.ok : C.mute;
  return (
    <span className="mono" style={{ display: "inline-block", fontSize: 12, letterSpacing: "0.04em", color, border: `1px solid ${color}`, borderRadius: 3, padding: "2px 7px", background: "rgba(255,255,255,0.02)" }}>
      [{children}]
    </span>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="tick" style={{ top: 0, left: 0, borderRight: "none", borderBottom: "none" }} />
      <span className="tick" style={{ top: 0, right: 0, borderLeft: "none", borderBottom: "none" }} />
      <span className="tick" style={{ bottom: 0, left: 0, borderRight: "none", borderTop: "none" }} />
      <span className="tick" style={{ bottom: 0, right: 0, borderLeft: "none", borderTop: "none" }} />
    </>
  );
}

function SectionLabel({ n, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
      <span className="mono" style={{ color: C.mute, fontSize: 13 }}>{n}</span>
      <span style={{ flex: "0 0 20px", height: 1, background: C.line }} />
      <h2 className="disp" style={{ fontSize: 26, margin: 0, textTransform: "uppercase" }}>{children}</h2>
      <span style={{ flex: 1, height: 1, background: C.line }} />
    </div>
  );
}

function Pips({ n, max = 3, color }) {
  return (
    <span style={{ display: "inline-flex", gap: 3 }}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ width: 7, height: 7, borderRadius: 1, background: i < n ? color : C.line }} />
      ))}
    </span>
  );
}

/* ---------- DATA ---------- */

const OPERATORS = [
  { name: "Sledge", side: "atk", role: "Hard Breach", speed: 2, armor: 2, gadget: "Breaching Hammer", counters: ["Trades poorly at range — hard-breach walls draw fire before he swings", "Rook/Castle armor plates reduce hammer trade damage", "Bait the hammer swing, then punish through the new hole"] },
  { name: "Thatcher", side: "atk", role: "Utility Denial", speed: 2, armor: 2, gadget: "EMP Grenade", counters: ["Bandit batteries survive one EMP if re-tapped fast", "Mute jammers outside EMP radius stay active", "Punish his exposed throw angle before the EMP lands"] },
  { name: "Ash", side: "atk", role: "Entry", speed: 3, armor: 1, gadget: "Breaching Rounds", counters: ["Jäger ADS intercepts breaching rounds", "Bulletproof cameras deny recon before the push", "Wamai's Mag-NET can redirect the launcher round"] },
  { name: "Thermite", side: "atk", role: "Hard Breach", speed: 2, armor: 2, gadget: "Exothermic Charge", counters: ["Mute jammers stop the charge from arming", "Bandit battery fries the charge or trades a kill", "Kill him before the charge is placed — no back-up breach otherwise"] },
  { name: "Twitch", side: "atk", role: "Utility Denial", speed: 3, armor: 1, gadget: "Shock Drone", counters: ["Destroy the drone fast — it has low health", "Mute jammers block the drone's shock function", "Deny drone lanes with early rotates"] },
  { name: "Zofia", side: "atk", role: "Entry / Utility", speed: 2, armor: 2, gadget: "Concussion / Impact Grenades", counters: ["Impacts deny her concussion angles pre-emptively", "Jäger negates her impact grenades", "Off-angle play punishes the KS79 head-on peek"] },
  { name: "Hibana", side: "atk", role: "Hard Breach", speed: 2, armor: 2, gadget: "X-KAIROS Pellets", counters: ["Mute jammers block pellet detonation on reinforced walls", "Bandit battery can trade the exposed hand", "Kill before pellets are placed — she reloads slowly"] },
  { name: "Jackal", side: "atk", role: "Tracker", speed: 3, armor: 1, gadget: "Eyenox Model III", counters: ["Break line of sight fully to reset footstep tracking", "Mute jammers disable the Eyenox scan", "Bait his aggressive push — he trades armor for speed"] },
  { name: "Ying", side: "atk", role: "Flush / Entry", speed: 3, armor: 1, gadget: "Candela", counters: ["Look away and count the flash — it's on a short fuse", "Mute jammers dull the disorientation radius", "Punish her immediately after the throw — low armor"] },
  { name: "Dokkaebi", side: "atk", role: "Intel", speed: 3, armor: 1, gadget: "Logic Bomb", counters: ["Mute jammers block phone hacks entirely", "Turn phones off or leave them off-site pre-round", "Her hack reveals nothing if cameras are already destroyed"] },
  { name: "Nomad", side: "atk", role: "Anti-Rotate", speed: 2, armor: 2, gadget: "Airjab Launcher", counters: ["Bypass Jäger ADS — bait rotates onto them consciously", "Destroy airjabs on sight before rotating through", "Predictable throw arc — watch common rotate lanes"] },
  { name: "Iana", side: "atk", role: "Intel", speed: 3, armor: 1, gadget: "Gemini Replicator", counters: ["Mute jammers block the replica's signal", "Shock wire deletes the hologram on contact", "Listen for the replica's distinct footstep audio"] },
  { name: "Smoke", side: "def", role: "Area Denial", speed: 2, armor: 2, gadget: "Remote Gas Grenade", counters: ["Thatcher EMP disables the canisters pre-plant", "Rook armor reduces gas tick damage", "Rush the plant before he can trigger a second canister"] },
  { name: "Mute", side: "def", role: "Utility Denial", speed: 2, armor: 2, gadget: "Signal Disruptor", counters: ["Thatcher EMP clears jammers in a wide radius", "Twitch drone shocks jammers from a safe distance", "Physically destroy jammers once located pre-plant"] },
  { name: "Castle", side: "def", role: "Anchor / Utility", speed: 1, armor: 3, gadget: "Armor Panel", counters: ["Sledge hammer opens panels in one hit", "Buck's shotgun shreds panels from range", "Grenades still clear the room — panels block bullets, not utility"] },
  { name: "Rook", side: "def", role: "Support", speed: 1, armor: 3, gadget: "Armor Plate Rig", counters: ["No direct denial — armor plates just raise TTK slightly", "Focus headshots; the extra armor barely matters there", "Treat Rook's team as universally tankier, not individually stronger"] },
  { name: "Jäger", side: "def", role: "Anchor / Utility", speed: 2, armor: 2, gadget: "Active Defense System", counters: ["Nomad Airjabs bypass ADS interception entirely", "Destroy ADS units with utility before pushing", "Ace's Kawan charges leave nothing for the ADS to intercept"] },
  { name: "Bandit", side: "def", role: "Anchor", speed: 2, armor: 2, gadget: "Shock Wire (CED-1)", counters: ["Twitch drone destroys batteries from a safe range", "Thermite trades — kill him before he tricks a wall", "Zero's Argus cams spot battery placement early"] },
  { name: "Frost", side: "def", role: "Anti-Entry", speed: 2, armor: 2, gadget: "Welcome Mat", counters: ["Slow-walk or crouch through unclear doorways", "Drones/cameras spot mats before you commit", "Twitch drone shocks the mat safely from range"] },
  { name: "Caveira", side: "def", role: "Roamer", speed: 3, armor: 1, gadget: "Silent Step / Interrogation", counters: ["Move in pairs — she can't interrogate a covered teammate", "Stay on comms constantly; silence is what she's listening for", "Her footsteps are silent, but her Luison pistol is not"] },
  { name: "Mira", side: "def", role: "Anchor", speed: 2, armor: 2, gadget: "Black Mirror", counters: ["Thatcher EMPs disable Black Mirror windows", "Twitch drone shock-mines the pane from outside", "Ash can outright break the window with breaching rounds"] },
  { name: "Echo", side: "def", role: "Intel / Denial", speed: 1, armor: 3, gadget: "Yokai Drone", counters: ["Destroy the drone fast — it has limited health", "Its Sound Burst disorients but doesn't damage — push through it", "Mute jammers block the drone's disorienting pulse"] },
  { name: "Melusi", side: "def", role: "Anchor", speed: 2, armor: 2, gadget: "Banshee Sonic Defense", counters: ["Break Banshees from a safe angle before pushing", "IQ spots them through walls pre-push", "Zero's cams map placement without tripping the alarm"] },
  { name: "Wamai", side: "def", role: "Anchor", speed: 2, armor: 2, gadget: "Mag-NET System", counters: ["Grenades thrown from odd angles avoid the magnet's cone", "Destroy the Mag-NET unit before throwing key utility", "Impact grenades detonate before the net can react in some cases"] },
];

const roomGrid = (rooms) => {
  const n = rooms.length;
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  const W = 400, H = 240, pad = 10;
  const cw = (W - pad * (cols + 1)) / cols;
  const ch = (H - pad * (rows + 1)) / rows;
  return rooms.map((r, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    return { ...r, x: pad + col * (cw + pad), y: pad + row * (ch + pad), w: cw, h: ch };
  });
};

const MAPS = [
  {
    name: "Clubhouse", tier: "Competitive",
    floors: [
      { name: "B", rooms: roomGrid([{ name: "Cash Room", site: true }, { name: "Church", site: true }, { name: "Laundry", site: false }, { name: "Arsenal Room", site: false }]) },
      { name: "1F", rooms: roomGrid([{ name: "Bar", site: true }, { name: "Stock Room", site: true }, { name: "Main Stairs", site: false }, { name: "Kitchen", site: false }]) },
      { name: "2F", rooms: roomGrid([{ name: "Gym", site: true }, { name: "Snake Room", site: true }, { name: "Sea Captain", site: true }, { name: "Roof Access", site: false }]) },
    ],
    rotations: "Church ↔ Cash Room is a two-way hatch rotate that gets contested early. Bar to Stock is a soft-wall lean-out. Gym roof gives attackers a drone lane into Snake Room before the round starts.",
    attackTip: "Control roof access to Gym before committing to a Snake Room read — it denies the defender's rotate lane.",
    defendTip: "Reinforce the Cash Room hatch early; it's the most contested rotate on the map and gets traded fast.",
  },
  {
    name: "Bank", tier: "Competitive",
    floors: [
      { name: "B", rooms: roomGrid([{ name: "Archives", site: true }, { name: "Garage", site: true }, { name: "Server Room", site: false }, { name: "Tellers", site: false }]) },
      { name: "1F", rooms: roomGrid([{ name: "Lockers", site: true }, { name: "Open Area", site: true }, { name: "Lobby", site: false }, { name: "Staircase", site: false }]) },
      { name: "2F", rooms: roomGrid([{ name: "CEO Office", site: true }, { name: "Executive Lounge", site: true }, { name: "Meeting Room", site: false }]) },
    ],
    rotations: "Garage to Archives is a fast hard rotate for spawn-peeking defenders. CEO Office window overlooks the courtyard — a common early pick angle for attackers on drone-in.",
    attackTip: "Deny the courtyard windows early on 2F pushes — they're the most common free pick angle for anchors.",
    defendTip: "Garage is a high-traffic entry; stack early utility there rather than spreading thin across both site rooms.",
  },
  {
    name: "Chalet", tier: "Competitive",
    floors: [
      { name: "B", rooms: roomGrid([{ name: "Wine Cellar", site: true }, { name: "Gaming Room", site: true }, { name: "Boiler Room", site: false }]) },
      { name: "1F", rooms: roomGrid([{ name: "Kitchen", site: true }, { name: "Bar", site: true }, { name: "Trophy Room", site: false }, { name: "Snowmobile Garage", site: false }]) },
      { name: "2F", rooms: roomGrid([{ name: "Master Bedroom", site: true }, { name: "Office", site: true }, { name: "Bathroom", site: false }]) },
    ],
    rotations: "Kitchen to Bar is a short, heavily-trafficked rotate that both sides contest constantly. Snowmobile Garage gives attackers a flank into the Bar site from an unusual angle.",
    attackTip: "Snowmobile Garage is under-defended in most setups — use it as a flank into Bar rather than the obvious front door.",
    defendTip: "Don't overcommit to Kitchen early; it's a bait site as often as a real push on lower ranks.",
  },
  {
    name: "Oregon", tier: "Competitive",
    floors: [
      { name: "B", rooms: roomGrid([{ name: "Workshop", site: true }, { name: "CIC", site: true }, { name: "Meeting Hall", site: false }]) },
      { name: "1F", rooms: roomGrid([{ name: "Laundry Room", site: true }, { name: "Kitchen", site: true }, { name: "Chapel", site: false }, { name: "Piano Room", site: false }]) },
      { name: "3F", rooms: roomGrid([{ name: "Dorms", site: true }, { name: "Kid's Bedroom", site: true }, { name: "Value Room", site: false }]) },
    ],
    rotations: "Piano Room to Kitchen is a soft-wall shortcut both sides use constantly. Tower gives attackers a strong drone/vertical angle onto the 3F exterior.",
    attackTip: "Use the Tower for early drone reads on 3F — it exposes rotates before you commit any utility.",
    defendTip: "Reinforce the Piano-to-Kitchen soft wall early; it's the fastest anchor rotate on the map.",
  },
  {
    name: "Border", tier: "Competitive",
    floors: [
      { name: "B", rooms: roomGrid([{ name: "Server Room", site: true }, { name: "Archive Room", site: true }, { name: "Xray Room", site: false }]) },
      { name: "1F", rooms: roomGrid([{ name: "Customs", site: true }, { name: "Money-Counting Room", site: true }, { name: "Armory Hallway", site: false }]) },
      { name: "2F", rooms: roomGrid([{ name: "Office", site: true }, { name: "Armory", site: true }, { name: "Meeting Room", site: false }]) },
    ],
    rotations: "Server to Archive is a tight hatch rotate defenders lean on heavily. 2F Office windows overlook the main courtyard, giving attackers early exterior picks.",
    attackTip: "Don't group up in the main courtyard — Office and Armory windows both cover it at once.",
    defendTip: "The Server–Archive hatch is a strong anchor point, but predictable; vary who holds it round to round.",
  },
  {
    name: "Kafe Dostoyevsky", tier: "Competitive",
    floors: [
      { name: "2F", rooms: roomGrid([{ name: "Kitchen", site: true }, { name: "Gold Nugget Room", site: true }, { name: "Bar", site: false }]) },
      { name: "3F", rooms: roomGrid([{ name: "Reading Room", site: true }, { name: "Piano Lounge", site: true }, { name: "Bakery", site: false }]) },
    ],
    rotations: "Kitchen to Gold Nugget is an open, heavily-shot rotate — expect early trades there. Piano Lounge balcony gives attackers a strong exterior drone angle onto 3F.",
    attackTip: "Balcony access on 3F is under-utilized — it bypasses the choke most anchors expect pressure from.",
    defendTip: "Kitchen is exposed on nearly every axis; hold it with trades in mind rather than a long isolated angle.",
  },
];

const TIPS = [
  { cat: "Game Sense", text: "Every sound is information before it's a threat — a footstep tells you a lane, not just a location. Cross-reference it against the plant timer." },
  { cat: "Game Sense", text: "Play the round state, not the gunfight. A down man on a secured retake is often a better trade than a risky duel." },
  { cat: "Game Sense", text: "Track utility, not just kills. A team with no drones and no breach left is beatable even at a man disadvantage." },
  { cat: "Attack", text: "Drone before you commit utility. A breach charge placed blind is information you're handing the defender for free." },
  { cat: "Attack", text: "Stagger pushes through the same hole — the first person draws the trade, the second gets the read." },
  { cat: "Defense", text: "Rotate on a timer, not a sound. Attackers bait rotates constantly — commit only once you have a second confirmation." },
  { cat: "Defense", text: "Anchor with an exit. A hold with no rotate option is a hold you can only lose once, not trade out of." },
];

/* ---------- SHARED UI ---------- */

function RoomSchematic({ floor, selected, onSelect }) {
  return (
    <svg viewBox="0 0 400 240" style={{ width: "100%", height: "auto", display: "block" }}>
      {floor.rooms.map((r) => {
        const isSel = selected === r.name;
        const stroke = r.site ? C.atk : C.mute;
        return (
          <g key={r.name} className="room" onClick={() => onSelect(r.name)}>
            <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={2}
              fill={isSel ? "rgba(217,98,43,0.18)" : "rgba(255,255,255,0.02)"}
              stroke={stroke} strokeWidth={isSel ? 2 : 1} />
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

/* ---------- SECTIONS ---------- */

function Hero({ go }) {
  return (
    <div className="grid-bg" style={{ position: "relative", padding: "90px 24px 70px", borderBottom: `1px solid ${C.line}`, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 24 }}><CornerTicks /></div>
      <div style={{ maxWidth: 880, margin: "0 auto", position: "relative" }}>
        <Tag tone="atk">OPERATION BRIEFING</Tag>
        <h1 className="disp" style={{ fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 1.02, margin: "18px 0 16px", textTransform: "uppercase" }}>
          Know the room<br />before you breach it.
        </h1>
        <p style={{ color: C.mute, fontSize: 17, maxWidth: 560, lineHeight: 1.6, margin: "0 0 30px" }}>
          Operator counters, clickable map intel, and a live matchup tool — built by players tired of guessing what's behind the wall.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => go("operators")} className="navbtn mono" style={{ background: C.atk, color: C.ink, border: "none", padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 3, cursor: "pointer" }}>BROWSE COUNTERS →</button>
          <button onClick={() => go("matchup")} className="navbtn mono" style={{ background: "transparent", color: C.paper, border: `1px solid ${C.line}`, padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 3, cursor: "pointer" }}>RUN A MATCHUP</button>
          <button onClick={() => go("maps")} className="navbtn mono" style={{ background: "transparent", color: C.paper, border: `1px solid ${C.line}`, padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 3, cursor: "pointer" }}>OPEN MAP INTEL</button>
        </div>
      </div>
    </div>
  );
}

function OperatorsSection() {
  const [open, setOpen] = useState(null);
  const [side, setSide] = useState("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => OPERATORS.filter((op) =>
    (side === "all" || op.side === side) && op.name.toLowerCase().includes(q.toLowerCase())
  ), [side, q]);

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="01">Operator Counters</SectionLabel>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="SEARCH OPERATOR..." className="mono"
          style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.paper, padding: "9px 12px", borderRadius: 3, fontSize: 12.5, flex: "1 1 200px" }} />
        {["all", "atk", "def"].map((s) => (
          <button key={s} onClick={() => setSide(s)} className="navbtn mono"
            style={{ background: side === s ? C.panel2 : "transparent", border: `1px solid ${side === s ? C.mute : C.line}`, color: side === s ? C.paper : C.mute, padding: "9px 16px", fontSize: 12.5, borderRadius: 3, cursor: "pointer" }}>
            {s === "all" ? "ALL" : s === "atk" ? "ATTACK" : "DEFENSE"}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 }}>
        {list.map((op) => {
          const isOpen = open === op.name;
          const side2 = op.side === "atk" ? C.atk : C.def;
          return (
            <div key={op.name} className="card opcard" style={{ "--side": side2, border: `1px solid ${C.line}`, borderRadius: 4, padding: 18, background: C.panel, cursor: "pointer" }} onClick={() => setOpen(isOpen ? null : op.name)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div className="opname disp" style={{ fontSize: 20, textTransform: "uppercase" }}>{op.name}</div>
                  <div style={{ color: C.mute, fontSize: 13, marginTop: 2 }}>{op.role}</div>
                </div>
                <Tag tone={op.side}>{op.side === "atk" ? "ATK" : "DEF"}</Tag>
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
              {isOpen && (
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.line}` }}>
                  <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 8 }}>COUNTERED BY</div>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13.5, lineHeight: 1.6, color: C.paper }}>
                    {op.counters.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
        {list.length === 0 && <p style={{ color: C.mute }}>No operators match that search.</p>}
      </div>
    </div>
  );
}

function MatchupSection() {
  const attackers = OPERATORS.filter((o) => o.side === "atk");
  const defenders = OPERATORS.filter((o) => o.side === "def");
  const [a, setA] = useState(attackers[0].name);
  const [d, setD] = useState(defenders[0].name);
  const atk = OPERATORS.find((o) => o.name === a);
  const def = OPERATORS.find((o) => o.name === d);

  const defCountersAtk = def.counters.filter((c) => c.toLowerCase().includes(atk.gadget.toLowerCase().split(" ")[0].toLowerCase()) || false);
  const atkBeatsDef = atk.counters.filter((c) => c.toLowerCase().includes(def.name.toLowerCase()));
  const defBeatsAtk = def.counters.filter((c) => c.toLowerCase().includes(atk.name.toLowerCase()));

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="04">Matchup Tool</SectionLabel>
      <p style={{ color: C.mute, maxWidth: 620, marginTop: -8, marginBottom: 26 }}>
        Pick an attacker and a defender to pull any documented direct interaction between their gadgets, plus each operator's general profile.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "center", marginBottom: 24 }}>
        <select value={a} onChange={(e) => setA(e.target.value)} style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.atk, padding: "12px", borderRadius: 3, fontSize: 14 }}>
          {attackers.map((o) => <option key={o.name} value={o.name}>{o.name}</option>)}
        </select>
        <span className="disp" style={{ color: C.mute, fontSize: 18 }}>VS</span>
        <select value={d} onChange={(e) => setD(e.target.value)} style={{ background: C.panel, border: `1px solid ${C.line}`, color: C.def, padding: "12px", borderRadius: 3, fontSize: 14 }}>
          {defenders.map((o) => <option key={o.name} value={o.name}>{o.name}</option>)}
        </select>
      </div>

      <div style={{ border: `1px solid ${C.line}`, borderRadius: 4, background: C.panel, padding: 22 }}>
        <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 10 }}>DOCUMENTED INTERACTIONS</div>
        {(atkBeatsDef.length || defBeatsAtk.length) ? (
          <ul style={{ margin: 0, paddingLeft: 16, fontSize: 14, lineHeight: 1.7 }}>
            {atkBeatsDef.map((c, i) => <li key={"a" + i}><Tag tone="atk">{a}</Tag> {c}</li>)}
            {defBeatsAtk.map((c, i) => <li key={"d" + i}><Tag tone="def">{d}</Tag> {c}</li>)}
          </ul>
        ) : (
          <p style={{ color: C.mute, fontSize: 14, margin: 0 }}>No specific gadget interaction on record between {a} and {d} — treat this as a standard positioning duel and lean on general game sense.</p>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 }}>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 14 }}>
            <Tag tone="atk">{a}</Tag>
            <div style={{ marginTop: 10, fontSize: 13, color: C.mute }}>{atk.role} · {atk.gadget}</div>
          </div>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 14 }}>
            <Tag tone="def">{d}</Tag>
            <div style={{ marginTop: 10, fontSize: 13, color: C.mute }}>{def.role} · {def.gadget}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapsSection() {
  const [active, setActive] = useState(MAPS[0].name);
  const map = MAPS.find((m) => m.name === active);
  const [floorIdx, setFloorIdx] = useState(0);
  const [room, setRoom] = useState(null);
  const floor = map.floors[Math.min(floorIdx, map.floors.length - 1)];

  const selectMap = (name) => { setActive(name); setFloorIdx(0); setRoom(null); };

  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }} className="grid-bg">
      <SectionLabel n="02">Map Intel</SectionLabel>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        {MAPS.map((m) => (
          <button key={m.name} onClick={() => selectMap(m.name)} className="navbtn mono"
            style={{ background: active === m.name ? C.panel2 : "transparent", border: `1px solid ${active === m.name ? C.mute : C.line}`, color: active === m.name ? C.paper : C.mute, padding: "8px 14px", fontSize: 12.5, borderRadius: 3, cursor: "pointer" }}>
            {m.name.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ position: "relative", border: `1px solid ${C.line}`, borderRadius: 4, background: C.panel, padding: 28 }}>
        <div style={{ position: "absolute", inset: 10 }}><CornerTicks /></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <h3 className="disp" style={{ fontSize: 28, margin: 0, textTransform: "uppercase" }}>{map.name}</h3>
          <Tag>{map.tier}</Tag>
        </div>

        <div style={{ display: "flex", gap: 6, marginTop: 18, marginBottom: 10 }}>
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
        <div style={{ marginTop: 10, minHeight: 20, fontSize: 13, color: C.mute }}>
          {room ? <>Selected: <Tag tone={floor.rooms.find(r => r.name === room)?.site ? "atk" : "mute"}>{room}</Tag> {floor.rooms.find(r => r.name === room)?.site ? "— bomb site room" : "— non-objective room"}</> : "Click a room on the schematic for its status."}
        </div>

        <div style={{ marginTop: 20 }}>
          <div className="mono" style={{ fontSize: 11, color: C.mute, marginBottom: 6 }}>ROTATIONS</div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: C.paper }}>{map.rotations}</p>
        </div>

        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 14 }}>
            <Tag tone="atk">ATTACK PUSH</Tag>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{map.attackTip}</p>
          </div>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 3, padding: 14 }}>
            <Tag tone="def">DEFENSE HOLD</Tag>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>{map.defendTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GameSenseSection() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "Game Sense", "Attack", "Defense"];
  const list = TIPS.filter((t) => cat === "All" || t.cat === cat);
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "70px 24px" }}>
      <SectionLabel n="03">Game Sense</SectionLabel>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className="navbtn mono"
            style={{ background: cat === c ? C.panel2 : "transparent", border: `1px solid ${cat === c ? C.mute : C.line}`, color: cat === c ? C.paper : C.mute, padding: "7px 14px", fontSize: 12, borderRadius: 3, cursor: "pointer" }}>
            {c.toUpperCase()}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
        {list.map((t, i) => (
          <div key={i} className="card" style={{ border: `1px solid ${C.line}`, borderRadius: 4, padding: 18, background: C.panel }}>
            <Tag tone={t.cat === "Attack" ? "atk" : t.cat === "Defense" ? "def" : "mute"}>{t.cat}</Tag>
            <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 12, marginBottom: 0 }}>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ borderTop: `1px solid ${C.line}`, padding: "28px 24px", textAlign: "center" }}>
      <span className="mono" style={{ fontSize: 12, color: C.mute }}>NOT AFFILIATED WITH UBISOFT · COMMUNITY PROJECT · [BUILD 0.2]</span>
    </div>
  );
}

const NAV = [
  { id: "home", label: "Home" },
  { id: "operators", label: "Operators" },
  { id: "matchup", label: "Matchup" },
  { id: "maps", label: "Maps" },
  { id: "gamesense", label: "Game Sense" },
];

export default function SiegeHub() {
  const [page, setPage] = useState("home");
  return (
    <div className="hub">
      <Fonts />
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(15,18,20,0.92)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${C.line}`, padding: "14px 24px", display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <span className="disp" style={{ fontSize: 18, textTransform: "uppercase", letterSpacing: "0.06em" }}>Site<span style={{ color: C.atk }}>//</span>Intel</span>
        <div style={{ display: "flex", gap: 4, marginLeft: 8, flexWrap: "wrap" }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => setPage(n.id)} className="navbtn mono"
              style={{ background: "transparent", border: "none", borderBottom: page === n.id ? `2px solid ${C.atk}` : "2px solid transparent", color: page === n.id ? C.paper : C.mute, fontSize: 13, padding: "6px 4px", cursor: "pointer" }}>
              {n.label.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {page === "home" && (<><Hero go={setPage} /><OperatorsSection /><MapsSection /><GameSenseSection /></>)}
      {page === "operators" && <OperatorsSection />}
      {page === "matchup" && <MatchupSection />}
      {page === "maps" && <MapsSection />}
      {page === "gamesense" && <GameSenseSection />}
      <Footer />
    </div>
  );
}
