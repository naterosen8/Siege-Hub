/* ---------- GAME SENSE / META CONTENT ---------- */

export const TIPS = [
  { cat: "Game Sense", text: "Every sound is information before it's a threat — a footstep tells you a lane, not just a location. Cross-reference it against the plant timer before reacting." },
  { cat: "Game Sense", text: "Play the round state, not the gunfight. A down man on a secured retake is often a better trade than a risky duel for a pick." },
  { cat: "Game Sense", text: "Track utility, not just kills. A team with no drones and no breach left is beatable even at a man disadvantage — play for that state, not just frags." },
  { cat: "Game Sense", text: "Prefire angles you've died to before, but only once you've confirmed the round pattern repeats — habitual prefires without a read are just free information for the enemy." },
  { cat: "Game Sense", text: "The first 15 seconds of a round are worth more than the last 15. Early reads on rotates and utility usage compound into every decision after." },
  { cat: "Game Sense", text: "A trade isn't a loss. If your death buys a teammate a clean kill, the round-state math is even, not negative." },
  { cat: "Attack", text: "Drone before you commit utility. A breach charge placed blind is information you're handing the defender for free." },
  { cat: "Attack", text: "Stagger pushes through the same hole — the first person draws the trade, the second gets the read, the third capitalizes." },
  { cat: "Attack", text: "Bait rotates deliberately with a loud, fake breach on the far side of the map before your real push — defenders trained on sound cues will move." },
  { cat: "Attack", text: "Plant on the wall you didn't breach through when you have the option — it forces defenders to cross your team's sightline to retake." },
  { cat: "Attack", text: "Track the defender's utility count out loud. A site with no more Jäger ADS or Bandit batteries left is a green light for a hard breach anywhere." },
  { cat: "Defense", text: "Rotate on a timer, not a sound. Attackers bait rotates constantly — commit only once you have a second, independent confirmation." },
  { cat: "Defense", text: "Anchor with an exit. A hold with no rotate option is a hold you can only lose once, not trade out of." },
  { cat: "Defense", text: "Reinforce walls that create rotates for you, not just the ones attackers are likely to breach — defense is a network, not a wall count." },
  { cat: "Defense", text: "Don't burn your roamer's utility on a pick you're not sure you'll get. A roamer's real job is delaying the plant clock, not padding a scoreboard." },
  { cat: "Defense", text: "On retake, clear from the entry point outward, not the plant inward — attackers holding the bomb expect pressure from the site, not the door they came through." },
  { cat: "Meta", text: "Draft your comp around denying the enemy's strongest pick, not just picking your own favorite — a hard-breach denial defender is worthless if the enemy never brings a hard breacher." },
  { cat: "Meta", text: "Secondary gadgets matter as much as primary ones at a high level — a well-timed frag or smoke often decides a round before the unique gadget ever gets used." },
  { cat: "Meta", text: "Map-specific operator bans exist for a reason — an operator that's B-tier map-wide can be an auto-pick or an auto-ban on the right map." },
];

export const TIER_NOTE = "Community-consensus snapshot, not an official Ubisoft ranking — current picks lean on Nomad, Thatcher, Ace and the newly-added Solid Snake on attack, and Smoke, Mira and Azami on defense.";

/* S/A/B/C tiers — general competitive relevance snapshot. */
export const TIER_MAP = {
  // S
  Nomad: "S", Thatcher: "S", Ace: "S", "Solid Snake": "S", Smoke: "S", Mira: "S", Azami: "S",
  // A
  Sledge: "A", Ash: "A", Zofia: "A", Iana: "A", Jackal: "A", Twitch: "A", Osa: "A", Grim: "A", Ram: "A",
  Bandit: "A", Jäger: "A", Melusi: "A", Wamai: "A", Goyo: "A", Oryx: "A", Thorn: "A", Solis: "A", Kaid: "A", Maestro: "A",
  Hibana: "A", Sens: "A", Rauora: "A", Deimos: "A", Skopós: "A", Fenrir: "A",
  // C (niche / low pick-rate)
  Tachanka: "C", Kapkan: "C", Glaz: "C", Capitão: "C", Blitz: "C", Vigil: "C", Warden: "C", Nøkk: "C",
  Montagne: "C", Frost: "C", Lesion: "C", Sentry: "C",
};

export const tierOf = (name) => TIER_MAP[name] || "B";
