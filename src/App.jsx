import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { C } from "./theme.js";
import { Fonts } from "./components/ui.jsx";
import Home from "./pages/Home.jsx";
import OperatorsHub from "./pages/OperatorsHub.jsx";
import Operators from "./pages/Operators.jsx";
import OperatorDetail from "./pages/OperatorDetail.jsx";
import Matchup from "./pages/Matchup.jsx";
import GameSense from "./pages/GameSense.jsx";
import TierList from "./pages/TierList.jsx";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/operators", label: "Operators" },
  { to: "/matchup", label: "Matchup" },
  { to: "/gamesense", label: "Game Sense" },
  { to: "/tierlist", label: "Tier List" },
];

function Footer() {
  return (
    <div style={{ borderTop: `1px solid ${C.line}`, padding: "28px 24px", textAlign: "center" }}>
      <span className="mono" style={{ fontSize: 12, color: C.mute }}>NOT AFFILIATED WITH UBISOFT · COMMUNITY PROJECT · [BUILD 1.0]</span>
    </div>
  );
}

export default function SiegeHub() {
  return (
    <div className="hub">
      <Fonts />
      <style>{`
        @media (max-width: 720px) { .detail-grid { grid-template-columns: 1fr !important; } }
      `}</style>
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(227,219,196,0.92)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${C.line}`, padding: "14px 24px", display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
        <NavLink to="/" className="disp" style={{ fontSize: 18, textTransform: "uppercase", letterSpacing: "0.06em", color: C.paper }}>
          Site<span style={{ color: C.atk }}>//</span>Intel
        </NavLink>
        <div style={{ display: "flex", gap: 4, marginLeft: 8, flexWrap: "wrap" }}>
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className="navbtn mono"
              style={({ isActive }) => ({
                background: "transparent", border: "none",
                borderBottom: isActive ? `2px solid ${C.atk}` : "2px solid transparent",
                color: isActive ? C.paper : C.mute, fontSize: 13, padding: "6px 4px", cursor: "pointer",
              })}>
              {n.label.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<><Home /><GameSense /></>} />
        <Route path="/operators" element={<OperatorsHub />} />
        <Route path="/operators/attack" element={<Operators />} />
        <Route path="/operators/defense" element={<Operators />} />
        <Route path="/operators/:name" element={<OperatorDetail />} />
        <Route path="/matchup" element={<Matchup />} />
        <Route path="/gamesense" element={<GameSense />} />
        <Route path="/tierlist" element={<TierList />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
