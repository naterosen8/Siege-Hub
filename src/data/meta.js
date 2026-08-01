/* ---------- GAME SENSE / META CONTENT ---------- */

/* phase: draft | early | mid | late — round-phase this principle applies to.
   side: both | atk | def */
export const TIPS = [
  // ---- DRAFT ----
  { phase: "draft", side: "both", text: "Draft your comp around denying the enemy's strongest pick, not just picking your own favorite — a hard-breach denial defender is worthless if the enemy never brings a hard breacher." },
  { phase: "draft", side: "both", text: "Secondary gadgets matter as much as primary ones at a high level — a well-timed frag or smoke often decides a round before the unique gadget ever gets used." },
  { phase: "draft", side: "both", text: "Map-specific operator bans exist for a reason — an operator that's B-tier map-wide can be an auto-pick or an auto-ban on the right map." },
  { phase: "draft", side: "def", text: "Reinforce walls that create rotates for you, not just the ones attackers are likely to breach — defense is a network, not a wall count." },
  { phase: "draft", side: "def", text: "Anchor with an exit. A hold with no rotate option is a hold you can only lose once, not trade out of." },

  // ---- EARLY ROUND ----
  { phase: "early", side: "both", text: "Every sound is information before it's a threat — a footstep tells you a lane, not just a location. Cross-reference it against the plant timer before reacting." },
  { phase: "early", side: "both", text: "The first 15 seconds of a round are worth more than the last 15. Early reads on rotates and utility usage compound into every decision after." },
  { phase: "early", side: "atk", text: "Drone before you commit utility. A breach charge placed blind is information you're handing the defender for free." },
  { phase: "early", side: "atk", text: "Bait rotates deliberately with a loud, fake breach on the far side of the map before your real push — defenders trained on sound cues will move." },

  // ---- MID ROUND ----
  { phase: "mid", side: "both", text: "Prefire angles you've died to before, but only once you've confirmed the round pattern repeats — habitual prefires without a read are just free information for the enemy." },
  { phase: "mid", side: "both", text: "A trade isn't a loss. If your death buys a teammate a clean kill, the round-state math is even, not negative." },
  { phase: "mid", side: "both", text: "Track utility, not just kills. A team with no drones and no breach left is beatable even at a man disadvantage — play for that state, not just frags." },
  { phase: "mid", side: "atk", text: "Stagger pushes through the same hole — the first person draws the trade, the second gets the read, the third capitalizes." },
  { phase: "mid", side: "atk", text: "Plant on the wall you didn't breach through when you have the option — it forces defenders to cross your team's sightline to retake." },
  { phase: "mid", side: "atk", text: "Track the defender's utility count out loud. A site with no more Jäger ADS or Bandit batteries left is a green light for a hard breach anywhere." },
  { phase: "mid", side: "def", text: "Rotate on a timer, not a sound. Attackers bait rotates constantly — commit only once you have a second, independent confirmation." },
  { phase: "mid", side: "def", text: "Don't burn your roamer's utility on a pick you're not sure you'll get. A roamer's real job is delaying the plant clock, not padding a scoreboard." },

  // ---- LATE ROUND ----
  { phase: "late", side: "both", text: "Play the round state, not the gunfight. A down man on a secured retake is often a better trade than a risky duel for a pick." },
  { phase: "late", side: "def", text: "On retake, clear from the entry point outward, not the plant inward — attackers holding the bomb expect pressure from the site, not the door they came through." },
  { phase: "late", side: "atk", text: "Once the bomb's down, split the defuse and the crossfire — one person on the defuser, everyone else holding an angle into the room, not clustered around the plant." },
  { phase: "late", side: "def", text: "On a retake, confirm the defuser's exact position before you commit — trading into an unconfirmed room just gives attackers a second life on the plant." },
];

/* Scenario quiz — round-state judgment calls, each grounded in one of the TIPS above.
   options: array of strings, correct: index into options, why: explanation shown after answering. */
export const SCENARIOS = [
  { phase: "draft", scenario: "The enemy team has drafted zero hard-breach denial — no Bandit, Kaid, or Mute. What should attack prioritize?",
    options: ["Draft extra intel operators since utility denial isn't a threat this game", "Bring a hard breacher and plan to open a wall cleanly, since nothing will contest it", "It doesn't matter — hard breach denial rarely gets used anyway"],
    correct: 1, why: "Draft around denying the enemy's strongest pick — and around exploiting the gaps in theirs. A clean, uncontested hard breach is free value when the defense has no answer for it." },
  { phase: "draft", scenario: "Your team already has strong secondary-gadget coverage but no unique hard-breach denial defender. Should you draft one anyway?",
    options: ["Yes, always — hard breach denial is mandatory every game", "Only if it fills a real gap for this specific matchup or map, not just because it's available", "No — secondary gadgets always outperform a dedicated denial pick"],
    correct: 1, why: "Map-specific and matchup-specific bans exist for a reason — the same pick can be essential on one map and dead weight on another. Draft for the gap in front of you, not a fixed formula." },
  { phase: "early", scenario: "It's the first 10 seconds of the round and you have a free drone. When does that information matter most?",
    options: ["Save the drone battery for later in the round", "Use it immediately to read rotates and utility placement before committing anything", "It doesn't matter when you use it, as long as you use it eventually"],
    correct: 1, why: "The first 15 seconds are worth more than the last 15 — early reads on rotates and utility compound into every decision that follows. A drone saved for later is information you didn't have when it mattered most." },
  { phase: "early", scenario: "You're holding an angle and a drone peeks under the door, but no operator follows for several seconds. What's the right response?",
    options: ["Push out immediately to catch them off guard", "Stay put — repositioning now just reacts to information that hasn't led anywhere yet", "Reposition constantly every few seconds regardless"],
    correct: 1, why: "A drone peek alone is a scout, not a commitment. Moving on every scrap of information trains attackers to read your rotates off bait — react to a real push, not a peek." },
  { phase: "mid", scenario: "Your team is staggering through a single breach hole one at a time. You're first in. What's the right approach?",
    options: ["Push deep immediately to clear the whole room solo", "Peek just enough to draw contact, then clear the doorway for the next teammate", "Wait at the hole until everyone stacks up before anyone enters"],
    correct: 1, why: "Staggered entries work because the first person's job is to draw contact and clear the doorway, not clear the whole room alone — the second and third attacker capitalize on what that contact reveals." },
  { phase: "mid", scenario: "You hear a loud breach charge on the far side of the map, followed by silence. Your gut says rotate immediately. What's the disciplined play?",
    options: ["Rotate immediately — the sound is confirmation enough", "Wait for a second, independent confirmation before committing to rotate", "Ignore it completely — sound cues are never reliable"],
    correct: 1, why: "Attackers bait rotates constantly with loud, fake breaches. Rotate on a timer and a second confirmation, not a single sound — committing on the first cue is exactly what the bait is designed to trigger." },
  { phase: "mid", scenario: "Your roamer has a pick on an isolated attacker, but taking the shot reveals their position with no clear follow-up. What's the disciplined call?",
    options: ["Always take the pick — a kill is always worth it", "Weigh whether the pick actually delays the plant clock, and disengage if it doesn't help the site", "Never roam-kill, under any circumstance"],
    correct: 1, why: "A roamer's real job is delaying the plant clock, not padding a scoreboard. A pick that costs the roamer their position without slowing the attack down is a net loss for the defense." },
  { phase: "late", scenario: "You've just planted the bomb and defenders are starting to push back. How should your team position?",
    options: ["Everyone stacks directly on top of the defuser for maximum protection", "One person on the defuser, everyone else holding a separate angle into the room", "Retreat entirely and let the defuse tick down passively"],
    correct: 1, why: "Split the defuse and the crossfire. Stacking on the defuser turns one grenade into a wipe; spreading the hold forces defenders to cross multiple angles to reach the plant." },
  { phase: "late", scenario: "You're retaking and know attackers are holding the bomb, but not their exact position in the room. What's the right approach?",
    options: ["Push straight for the plant location and trade for the defuse", "Clear from the entry point outward, working toward the plant", "Peek the plant blindly and hope for a pick"],
    correct: 1, why: "Attackers holding a plant expect pressure from the site inward, not the door they came through. Clearing from the entry point outward denies the angle they're actually watching." },
  { phase: "late", scenario: "Your team won the opening pick but is now down a player against a full defense. What's the right mentality?",
    options: ["Play purely for frags since you're already ahead on kills", "Play for the round state — a numbers disadvantage means prioritizing space and tempo over risky duels", "It doesn't matter, aim wins games regardless of the numbers"],
    correct: 1, why: "Play the round state, not the gunfight. Down a player, a contested duel you might lose costs more than it's worth — trading space and time for a clean plant matters more than another risky pick." },
  { phase: "mid", scenario: "Attack has 90 seconds left, no bomb carrier has utility remaining, and the defense still has two anchors behind reinforced walls. What's the highest-value play?",
    options: ["Force a random hard-breach attempt on the nearest wall", "Regroup and take a slower, information-based push with whatever utility is left", "Rush the closest door for a pick regardless of the read"],
    correct: 1, why: "Burning the clock on a blind breach with no read is worse than a patient regroup — you still have time, and a confirmed read is worth more than a forced guess against two dug-in anchors." },
  { phase: "mid", scenario: "You're anchoring alone on a two-room site. Utility goes off loudly in the far room, but your room stays completely quiet.",
    options: ["Rotate immediately to the loud room", "Hold your room — a loud push on one room is a classic decoy for a quiet entry into the other", "Peek into the hallway between the two rooms to get a pick"],
    correct: 1, why: "The quiet room gets it. Attackers know defenders react to noise, so a loud, obvious push on one room is one of the most common setups for a quiet, real push into the other." },
  { phase: "late", scenario: "You get the last kill of the round, but the plant timer has 8 seconds left with no attacker contesting it.",
    options: ["Push for one more pick since the round is basically won", "Hold your current angle on the plant and let the timer run out — don't take a risk you don't need", "Push into an uncleared room just to be thorough"],
    correct: 1, why: "The round is already decided. Pushing for a bonus pick with 8 seconds on the clock only creates a chance to throw a won round for zero additional value." },
  { phase: "draft", scenario: "It's a Bo3 and you lost map 1 to a defense that showed a clear, repeated rotation pattern on one site all game. Going into map 2's draft on a different map, what matters most from that read?",
    options: ["Copy the exact same comp you lost with", "Nothing from map 1 carries over — drafting is purely map-specific", "Note how they play rotations and utility in general, and draft to deny or exploit that tendency"],
    correct: 2, why: "Individual site setups are map-specific, but a team's rotation habits and utility discipline carry across maps. Drafting to exploit a demonstrated tendency is real preparation, not superstition." },
  { phase: "early", scenario: "You get a very confident read on the enemy's plan within the first 20 seconds of the round — the kind of read that's right maybe 60% of the time.",
    options: ["Commit your whole team to it immediately", "Lean your positioning toward it without fully committing, and confirm before going all-in", "Ignore it completely since it isn't certain"],
    correct: 1, why: "A 60%-confidence read is real information, not proof. Weighting your setup toward it while still confirming avoids both the trap of ignoring good intel and the trap of overcommitting to an early guess." },
  { phase: "mid", scenario: "Your hard breacher still has utility, and the defense has already lost their only anti-hard-breach denial operator this round. Do you save the breach for a more contested wall later?",
    options: ["Yes — hoard hard breach for whatever wall feels most important", "No — with denial gone, breach the first wall that gives real access; hoarding wastes the round clock against no threat", "It never matters when hard breach utility is used"],
    correct: 1, why: "Utility should be spent the moment there's no real risk to it, not hoarded out of habit. Once the only denial threat is dead, delaying the breach only costs you round time for no benefit." },
  { phase: "late", scenario: "The bomb is down and it's 2 defenders vs. 1 attacker holding the plant room. What's the right defender approach?",
    options: ["Both defenders push together through the same doorway", "Split to cover two separate angles into the room so the lone attacker can't watch both", "Wait out the entire timer without ever approaching the room"],
    correct: 1, why: "A 2v1 in the defense's favor is about using the numbers advantage — splitting angles forces the lone defuser to choose which threat to watch, which a single shared doorway doesn't." },
  { phase: "mid", scenario: "An attacker denies your only anti-entry gadget on one route early, with two minutes left in the round.",
    options: ["The round is unwinnable now, so play passively and give up ground", "Reposition your hold to account for the now-open route and lean on teammates' utility to cover it", "Immediately push out to trade for the gadget that got denied"],
    correct: 1, why: "Losing one piece of utility isn't the round. Adjusting the hold to account for the new gap is the disciplined response — panicking into a trade or checking out mentally both throw away a still-winnable round." },
  { phase: "draft", scenario: "You're picking last in the draft phase and notice the enemy has no dedicated intel operators at all, just base drones.",
    options: ["It doesn't affect your pick at all", "Roaming and off-angle plays are safer than usual, since you're less likely to get tracked or revealed", "Always pick the flashiest available operator regardless of the matchup"],
    correct: 1, why: "A defense with no dedicated intel tools has a real gap in finding roamers. Picking or playing into that — favoring roam-heavy operators and off-angles — turns a drafting observation into round-by-round value." },
  { phase: "early", scenario: "You drone a site and see one defender leave their anchor position within the first 15 seconds, well before any pressure exists.",
    options: ["That information is useless this early in the round", "Note it — an unprompted early reposition often signals a roam path or where they expect real pressure later", "Immediately call a full team rush on the now-empty room"],
    correct: 1, why: "An early, unforced reposition is a real data point, not noise — it tells you something about their plan before a single shot is fired. The mistake isn't using it, it's overreacting to it with an immediate all-in." },
];

/* S/A/B/C tiers — general competitive relevance snapshot, shown as a small badge on operator cards/detail pages. */
export const TIER_MAP = {
  // S
  Nomad: "S", Thatcher: "S", Ace: "S", Smoke: "S", Mira: "S", Azami: "S",
  // A
  Sledge: "A", Ash: "A", Zofia: "A", Iana: "A", Jackal: "A", Twitch: "A", Osa: "A", Grim: "A", Ram: "A", Dokkaebi: "A",
  Bandit: "A", Jäger: "A", Melusi: "A", Wamai: "A", Goyo: "A", Oryx: "A", Thorn: "A", Solis: "A", Kaid: "A", Maestro: "A",
  Hibana: "A", Sens: "A", Rauora: "A", Deimos: "A", Skopós: "A", Fenrir: "A",
  // C (niche / low pick-rate)
  Tachanka: "C", Kapkan: "C", Glaz: "C", Capitão: "C", Blitz: "C", Vigil: "C", Warden: "C", Nøkk: "C",
  Montagne: "C", Frost: "C", Lesion: "C", Sentry: "C",
};

export const tierOf = (name) => TIER_MAP[name] || "B";
