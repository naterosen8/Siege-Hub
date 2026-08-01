/* ---------- PRO INTEL ---------- */
/* Diamond-level breakdowns, keyed by operator name. Deliberately built as deeper reasoning
   about mechanics/timing/sequencing behind the already-verified counters and champion tips,
   not new specific claims — attackers first, defenders to follow. */

export const PRO_INTEL = {
  Sledge: {
    breakdown: "The hammer needs multiple swings to fully clear a reinforced wall (a single swing only punches a partial hole), and each swing has a wind-up and a distinct sound cue that carries through the wall to anyone on the other side. Because it's melee, Sledge has to be standing directly against the surface for the full duration — there's no ranged option, no detonation delay, and no way to 'commit and back away' the way a charge allows. That's what makes him unkillable-by-gadget but very killable by a coordinated punish: the defender doesn't need to stop the swing, just be ready the instant the hole opens.",
    counterWhy: [
      "There's genuinely nothing in a defender's kit that jams, EMPs, or destroys a hammer — it's not a placed device, it's an animation. The only way to stop a Sledge breach is to kill Sledge, which is why he's rated as having no real hard counter.",
      "Because the hammer takes several full-length swings on a reinforced wall, a defender who hears the first hit has a real window — often a full second or more — to line up the exact spot the hole will open and fire through it the instant it does, before Sledge can transition off the wall and back to his rifle.",
    ],
    sequencing: [
      "Hatches are quieter and lower-commitment than a full wall breach, so opening one from a crouch removes an entire rotate option from the defense without giving them the loud, unmistakable 'breach in progress' audio a charge produces — they simply lose the hatch and don't know exactly when.",
      "A fake hammer swing costs nothing but time, and time is exactly what it buys: a defender who hears hammering and rotates off a real anchor position has just handed that room away for free, whether or not Sledge ever actually breaches it.",
    ],
    rankGap: "Lower-rank Sledge play is almost entirely about landing the breach; diamond-level play is about controlling what the sound of the breach does to the defense before the hole even opens — using real swings, fake swings, and hatch openings interchangeably so defenders can't tell a genuine push from a decoy purely by ear.",
  },
  Thatcher: {
    breakdown: "The EMP has a genuine blast radius, not a point effect — it disables every electronic gadget inside that radius simultaneously, but anything positioned even slightly outside the edge is completely unaffected, not just weakened. It also has a short arm/detonation window rather than going off instantly, and a real cooldown between throws, which is the entire reason 'double-EMP' as a concept exists: one grenade isn't always enough to guarantee a wall stays clear.",
    counterWhy: [
      "The EMP's disable effect is unconditional within its radius — there's no gadget interaction that shields a jammer or battery from it once it's inside the blast, which is why the only real answer is accepting the loss and re-placing afterward rather than trying to prevent it.",
      "Radius means edge cases matter: a jammer sitting just past the blast line reads as 'in range' to a player eyeballing it but survives completely intact, which is exactly why stacking jammers wide instead of tight is a real defensive answer to a single Thatcher.",
    ],
    sequencing: [
      "A single EMP clears a wall for a moment, but a defender with a spare battery or claw can re-trick it in the gap between the EMP landing and the hard breacher's charge going off — throwing a second EMP from a different angle removes that entire recovery window, not just the gadget.",
      "Because the EMP has no line-of-sight requirement to matter — it just needs to land in the room — a blind throw through a soft wall on a pure positional read costs nothing if wrong and removes a real threat if right, which is why it's one of the few 'free' aggressive plays in the game.",
    ],
    rankGap: "Lower-rank Thatcher throws EMPs reactively, after spotting a jammer or hearing a battery. Diamond-level Thatcher throws them proactively, on pattern and position alone, treating the EMP as a pre-breach clearing tool rather than a response to confirmed intel — because waiting for confirmation is often the same as waiting too long.",
  },
  Ash: {
    breakdown: "The round travels as a real projectile with drop and flight time, not a hitscan effect, which is exactly what gives Jäger's ADS a window to intercept it before impact. It also only works on soft surfaces — the round has no mechanism to damage reinforced material at all, so 'aim it at a reinforced wall' isn't a weaker version of the tool, it's simply a non-interaction. The fire it leaves behind persists and deals damage over time to anyone standing in it, which is what makes it useful even after the hole itself stops being novel information.",
    counterWhy: [
      "Since the round is a physical projectile rather than an instant effect, an ADS pod with a clear line to its flight path can shoot it down exactly the way it intercepts a thrown grenade — the interception isn't about Ash's position, it's about whether the round's path crosses the pod's coverage.",
      "This isn't really a 'counter' in the denial sense — it's a hard boundary of the tool. Reinforced material simply isn't a valid target, so a defender's real defense against Ash on a reinforced wall is the reinforcement itself, not a gadget.",
    ],
    sequencing: [
      "A hole that's already open reads as 'cleared' to most defenders, which is exactly the assumption a hidden Ash punishes — firing through an existing hole hits an angle the defender has mentally checked off, not one they're actively watching.",
      "The lingering fire doesn't need a kill to be useful: denying a corner on a retake for even a few seconds can be the difference between a clean plant-side hold and a defender walking straight into an open lane, which is why treating the round as area denial and not just an entry tool matters.",
    ],
    rankGap: "Lower-rank Ash fires the round the instant she sees a soft wall. Diamond-level Ash treats the round as a resource with exactly as much value as the information it removes — holding it through the early round specifically for the moment a defender over-commits to a 'safe' hole, rather than spending it on the first wall she sees.",
  },
  Thermite: {
    breakdown: "The charge has to be placed and armed before it can detonate, and that arming period is a real, audible window — it's not instant. A jammer in range prevents the arming step entirely, which is a different failure mode than a battery or claw, which let the charge arm and then fry it (or let it fully detonate and trade a kill on whoever's standing at the plant point). That distinction — prevented outright vs. contested after arming — is why the two counters feel and play out completely differently even though both end with 'the wall doesn't open cleanly.'",
    counterWhy: [
      "A jammer's radius blocks the arming signal itself, so a charge placed inside it never becomes a live threat at all — there's no trade, no explosion, nothing. It simply fails silently, which is the most complete denial in the game against hard breach.",
      "A battery or claw works differently: it lets Thermite finish the process, then destroys the charge at the last second or punishes whoever's standing there when it does go off — it's a contest, not a prevention, which is why a defender can still lose the exchange even while 'countering' it.",
    ],
    sequencing: [
      "Centered plants get centered trades — it's the first place any defender holding that room is already looking. An off-angle plant forces the defender to find a new sightline under pressure instead of pre-aiming the obvious spot.",
      "A decoy charge on a wall nobody actually plans to use costs a charge but buys something more valuable: it forces the defense to react to two threats with utility meant for one, and even a defender who correctly identifies the real breach has already spent a beat of attention they can't get back.",
    ],
    rankGap: "Lower-rank Thermite breaches the first reinforced wall he reaches. Diamond-level Thermite treats the charge placement itself as the play — off-angle by default, decoys built into the round plan before the first shot is fired — because by the time the hole is open, the positioning decision that actually decides the fight has already been made.",
  },
  Twitch: {
    breakdown: "The drone operates entirely remotely — Twitch never has to be anywhere near the gadget she's destroying, which is what makes her uniquely safe utility removal compared to attackers who have to physically approach. The tradeoff is that the drone itself is a fragile, trackable object: it has to physically roll into range of whatever it's shocking, it's visible and audible while doing it, and every charge used is one she doesn't have later in the round.",
    counterWhy: [
      "Mozzie's hijack doesn't destroy the drone, it takes it — meaning the exact tool built to deny defender gadgets can be turned into a live feed and control surface for the defense instead, which is a categorically worse outcome for Twitch than simply losing the drone would be.",
      "A jammer doesn't stop the drone from existing or moving, it specifically disables the shock function within its radius, so a drone can roll right up to a jammed gadget and simply fail to interact with it — meanwhile Solis reveals where that drone is even before it gets close, since it's an active electronic device the same as any other gadget.",
    ],
    sequencing: [
      "Traps and mats are invisible until triggered or spotted, which is exactly the problem the drone solves for free — clearing them from spawn costs zero player risk and turns a guessing game at entry into a confirmed-safe path, information no other attacker gets without physically walking into it.",
      "ADS pods actively shoot down thrown utility, so committing every shock charge early against soft targets just to clear space leaves nothing in reserve for the one gadget that actively denies your team's grenades later in the round — holding a charge back is a bet that the ADS problem will matter more than whatever it's spent on early.",
    ],
    rankGap: "Lower-rank Twitch spends all four charges early clearing whatever's visible. Diamond-level Twitch treats each charge as a distinct decision — knowing which gadgets are worth a charge now versus which threats (like an ADS pod) are worth holding one in reserve for, because the round doesn't end after the first thirty seconds.",
  },
  Montagne: {
    breakdown: "The shield's coverage is purely frontal and directional — it blocks incoming fire from wherever Montagne is facing, but it has no coverage behind or to the sides, and it doesn't extend his hitbox, just his protection. That means a shield that's absorbing a full magazine from the front is doing nothing at all against an angle from the side, which is the entire basis of every real counter to him.",
    counterWhy: [
      "Oryx's dash isn't a duel, it's a bypass — instead of trying to out-position Montagne's frontal coverage, it goes through the wall next to him entirely, arriving from an angle the shield was never built to cover in the first place.",
      "Because the shield genuinely has no side or rear coverage, a defender doesn't need any special tool to beat Montagne, just an angle he isn't currently facing — the shield's strength in one direction is exactly its weakness in every other one.",
    ],
    sequencing: [
      "Walking a shield backward into a room baits every defender who has an angle on it into revealing their position and spending ammo on a target that can't be hurt from the front — by the time the real push comes, the room has already shown its hand for free.",
      "The shield only protects him while he's against something that limits flanking — a doorway or wall corner — so extending in open space just exposes his sides with no benefit, while extending in a doorway forces defenders into the one angle the shield actually covers.",
    ],
    rankGap: "Lower-rank Montagne extends and holds, hoping teammates push before he dies. Diamond-level Montagne is a scouting tool as much as a shield — reading which angles defenders reveal themselves from while baiting shots, then relaying that read to the team instead of just soaking damage and hoping.",
  },
  Glaz: {
    breakdown: "The thermal scope's entire value proposition is an asymmetry — Glaz sees clearly through gas that blinds everyone else, which normally makes a smoked angle a one-sided fight. That asymmetry only exists because most operators can't see through gas at all; it isn't that Glaz sees especially well, it's that the baseline for everyone else is total blindness. Anything that closes that baseline gap removes his actual advantage rather than just making the duel harder.",
    counterWhy: [
      "Warden's glasses don't block Glaz or damage his scope, they just give Warden the same vision through gas that Glaz has — the fight stops being 'sighted player vs. blind player' and becomes a normal duel, which is a much worse trade for Glaz than his usual matchup.",
      "The thermal scope reads heat signatures through gas specifically, not through solid material — Glaz has no wallhack-style advantage indoors away from gas, which is exactly the gap a fake gas angle exploits: he's trained to expect value through a cloud that isn't hiding anything real.",
    ],
    sequencing: [
      "Waiting for a team's own smoke to clear before pushing wastes the exact window where Glaz has the most one-sided advantage available — holding through it while it's still active is the only time the asymmetry is actively working in his favor.",
      "A static sightline gets read and pre-aimed by any defender who dies to it once — moving positions between picks costs him some setup time but keeps every future duel a fresh read instead of a rehearsed one.",
    ],
    rankGap: "Lower-rank Glaz sets up on one gas angle and holds it the whole round. Diamond-level Glaz treats every position as temporary — rotating specifically because the first pick from an angle is worth far more than the fifth, since defenders adjust their holds the instant they know where the thermal sightline is coming from.",
  },
  Fuze: {
    breakdown: "The charge itself is stationary once placed, but what it fires isn't a single blast — it's a spread of individual munitions that scatter into the room on a delay after arming. That gap between 'charge is heard arming' and 'munitions actually detonate' is real time a defender can use to leave, and the fact that it's a spread rather than a point explosion is exactly what gives anti-projectile tools something to intercept in the first place.",
    counterWhy: [
      "Each cluster munition is treated as its own projectile once it scatters into the room, which means an ADS pod with the right angle can shoot individual munitions down the same way it intercepts a thrown grenade — it's not blocking the charge itself, it's catching what comes out of it.",
      "Wamai's Mag-NET pulls in and redirects thrown or launched threats before they detonate where intended — since the cluster spread is munitions entering the room rather than a wall-mounted effect, it's a valid target for the same redirect that works on grenades.",
    ],
    sequencing: [
      "Walls get checked and reinforced; ceilings usually don't, which is exactly why a charge placed above a common hold denies a dimension of the room most defenders never account for — verticality most other attackers have no way to threaten at all.",
      "Fuze rarely gets the kill directly since the arming sound gives real warning — its actual value is forcing whoever's in that room to choose between eating the spread or abandoning the position, which is a rotate you got for free without spending a breach.",
    ],
    rankGap: "Lower-rank Fuze aims for the kill and is disappointed when defenders just leave the room. Diamond-level Fuze wants them to leave — the charge's real job is clearing space and forcing a rotate on a schedule the attack controls, not racking up frags on people who didn't hear the warning in time.",
  },
  Blitz: {
    breakdown: "The flash only fires in the direction Blitz is facing and only affects targets caught directly in the beam, which means it's a frontal, line-of-sight tool exactly like the shield it's mounted on — no beam, no effect. He has to close distance in roughly a straight line to guarantee the flash lands, which is what makes an angled approach so much harder for him to threaten than a head-on corridor.",
    counterWhy: [
      "Warden's negation isn't a dodge or a block, it's the flash simply not registering as a blind effect on him at all — he can look directly into it and keep tracking Blitz through the whole approach, which flips the entire engagement from 'react blind' to 'aim normally.'",
      "Oryx's dash both cancels the blind the instant it lands and covers ground fast enough to close what would otherwise be Blitz's window to capitalize on the flash — by the time vision would normally return, Oryx may already be past the point the flash was meant to protect.",
    ],
    sequencing: [
      "Since the flash is a straight-line frontal tool, taking a corner at an angle instead of head-on means Blitz has to adjust his approach to line up the beam, which costs him the element of surprise a direct rush would have kept intact.",
      "A flash before checking an unclear doorway solves two problems at once: it denies whatever's behind the door a clean read on the peek, and it clears a hidden trap the same way any flash disorients before contact — one tool covering both the gunfight and the trap check.",
    ],
    rankGap: "Lower-rank Blitz rushes the nearest door and hopes the flash lands. Diamond-level Blitz reads the angle before committing — recognizing which corridors let him close in a straight line for a guaranteed flash and which ones force an angled approach where the flash is more bait than guarantee.",
  },
  IQ: {
    breakdown: "The scanner reads powered electronic signatures specifically — it has no concept of a mechanical trap or a physical barricade, because there's no signal to detect. It also only tells IQ that a gadget exists and roughly where, not which operator placed it or whether anyone is actually in the room, which is why she has virtually no hard counter: there's nothing to deny about a scan that can't distinguish a real threat from an empty room with a jammer in it.",
    counterWhy: [
      "A trap like Kapkan's or a barricade like Castle's has no electronic component at all, so it simply doesn't exist as far as the scanner is concerned — this isn't a gap the scan fails to notice, it's a category of gadget entirely outside what the tool can perceive.",
      "The scan is purely informational about hardware, not personnel — a room can ping four gadgets and be completely empty, or ping nothing and hide a roamer with no electronic kit at all, which is exactly why the scan narrows a decision rather than making it.",
    ],
    sequencing: [
      "A single scan at entry only shows the setup as it existed at that moment — defenders relocate gear mid-round specifically to beat an early read, so a second scan before a hard breach catches exactly the movement a one-and-done scan misses.",
      "Reporting 'gadget' one ping at a time undersells the read — three separate gadgets clustered in one room is a specific, heavier signal (usually a stacked anchor) that only becomes obvious when the pings are read together instead of individually.",
    ],
    rankGap: "Lower-rank IQ scans once on entry and moves on. Diamond-level IQ scans repeatedly through the round, treats gadget density as a read on defender setup strength rather than just a checklist, and explicitly separates 'gadget confirmed' from 'kill confirmed' instead of treating a ping as a green light to push.",
  },
  Buck: {
    breakdown: "The Skeleton Key fires straight down (or straight through a soft wall) along a fixed, predictable line — it's not a spread and it doesn't clear an area, it punches a narrow vertical channel exactly where Buck is aiming. That precision is also its limitation: anyone standing even slightly off that exact line takes no damage at all, and the tool has zero interaction with reinforced material or armored gadgets regardless of how many shots are fired.",
    counterWhy: [
      "Because the shots travel a fixed vertical line, the safe response isn't distance, it's angle — stepping off the precise column the shots are punching through removes the threat entirely, which is why the sound of the first shot is often enough warning to survive the rest.",
      "The tool interacts with floors and soft walls only — armor panels and one-way mirrors aren't a 'harder' version of a breachable surface to it, they're simply not breachable at all, so a gadget-reinforced anchor position is fully safe from the Skeleton Key regardless of how it's used.",
    ],
    sequencing: [
      "A frag grenade through a floor hole covers the area the vertical shots can't — it forces movement or damages anyone nearby, which often finishes what the precise-but-narrow shotgun line started, or does the job outright without spending more shots.",
      "Checking a hatch from below before a teammate vaults it turns a blind commitment into a confirmed read — if someone's camping the hatch, the shots (or their absence) reveal that before a teammate exposes themselves crossing it.",
    ],
    rankGap: "Lower-rank Buck shoots down through every floor he can reach hoping for a random pick. Diamond-level Buck uses the hole primarily as information and area-denial — checking hatches before a teammate commits, and pairing the narrow vertical line with a grenade to cover what the shots alone can't.",
  },
  Blackbeard: {
    breakdown: "The plate only blocks a shot while Blackbeard is actively aiming down sights — it's not passive protection, it's a conditional block tied to a specific stance, and it doesn't stop damage to the rest of his body, only headshots while ADS. That means the shield's value is entirely about winning the exact instant of a duel, not about tanking sustained fire the way a deployable shield does.",
    counterWhy: [
      "Because the plate only matters at the moment Blackbeard is aiming down sights in a duel, closing distance fast enough to end the engagement before that stance ever locks in — which is exactly what a dash does — removes the plate's relevance entirely rather than trying to shoot around it.",
      "The shield is a single-use block per engagement, not a continuous state — baiting a peek that makes him raise the rifle and absorb a shot, then punishing the moment right after (before he can reset), catches him in the one window where the plate isn't protecting him anymore.",
    ],
    sequencing: [
      "Angles that would be a losing duel for almost anyone else are even fights for Blackbeard, since he wins the first-headshot exchange by default — holding those specific exposed positions is where his kit provides value no other operator's does.",
      "Sitting passively behind an angle wastes the advantage the plate gives him — the shield wins him a duel he'd otherwise lose, which only matters if he's actually initiating duels rather than waiting for the round to come to him.",
    ],
    rankGap: "Lower-rank Blackbeard holds one angle passively, relying on the plate to bail him out reactively. Diamond-level Blackbeard uses the plate's duel-winning property to justify holding angles nobody else would even consider, actively hunting the exposed positions his kit specifically neutralizes instead of playing it safe.",
  },
  "Capitão": {
    breakdown: "Both bolt types are launched projectiles with real flight time and an arc, not instant-hit effects, and both have a delayed activation rather than an on-impact explosion — the incendiary bolt burns a lane over a window rather than detonating once, and the asphyxiating bolt spreads gas rather than dealing direct damage. That delay is what makes both bolts area-denial tools rather than kill tools by design, and it's also the gap a moving target can use to simply leave before the effect matters.",
    counterWhy: [
      "Since a bolt travels as a real projectile before it lands, an ADS pod with the right sightline can shoot it down mid-flight the same way it intercepts a thrown grenade — but Capitão has multiple bolt types and uses, so losing one bolt to an ADS pod doesn't remove his kit's overall value the way a hard counter would.",
      "The incendiary bolt burns over a window rather than dealing damage instantly, which means anyone still standing in the lane after it lands is choosing to take the damage — leaving immediately, before the burn ramps up, avoids nearly all of it.",
    ],
    sequencing: [
      "A hallway denied by fire before the plant forces defenders to find an alternate rotate path, buying the attack time without spending a kill — it's the same 'force a longer route' value a Fuze charge provides, just with a longer denial window.",
      "Asphyxiating gas disorients anyone caught in it, which functions as a flash for a room the team is about to enter — it doesn't need to destroy a gadget to be worth throwing; softening the room before entry is value on its own.",
    ],
    rankGap: "Lower-rank Capitão fires bolts reactively at whatever gadget is visible. Diamond-level Capitão pre-plans lane denial before the plant is even down, using incendiary bolts to shape which routes are available to the defense rather than treating the launcher as just a gadget-destruction tool.",
  },
  Hibana: {
    breakdown: "The launcher fires pellets in small clusters that each stick to a surface and detonate on a short delay, and Hibana has a limited total pellet count for the round — she can fire a full grid for one large hole or spread pellets across multiple smaller peekholes, but every pellet spent is one she doesn't have later. That resource limit, combined with the short arm delay before detonation, is what every counter and every advanced play with her kit is built around.",
    counterWhy: [
      "A jammer prevents the pellets from ever detonating on a reinforced surface within its radius — like other hard-breach denial, this is a full prevention, not a contest, so pellets fired into a jammed wall are simply wasted with nothing to show for them.",
      "Bandit and Kaid both electrify the wall itself, frying pellets attached to it on contact — functionally the same denial hard breach faces everywhere else, just applied to a grid of small detonations instead of one large charge.",
    ],
    sequencing: [
      "A full grid uses significantly more pellets than a partial one for a single peekhole — since her total pellet count is limited across the whole round, using a partial grid purely for information (not entry) preserves pellets for when a real breach is actually needed.",
      "Firing pellet groups in stages rather than all at once gives a defender multiple separate moments to react — often baiting them into using denial utility (a jammer, a trick) on an early, smaller group, which can leave the wall undefended for the real breach that follows.",
    ],
    rankGap: "Lower-rank Hibana fires a full grid on the first wall she sees and runs out of pellets by mid-round. Diamond-level Hibana treats pellets as a round-long resource — using partial grids for information, staggering volleys to bait defensive utility, and saving enough in reserve for the breach that actually matters.",
  },
  Jackal: {
    breakdown: "The scan reads a target's recent footstep trail, not their current live position at the instant of activation — it reconstructs where someone has been moving and projects that into a tracked marker for a short duration. That means the tracked data goes stale the moment a target stops moving or breaks the pattern the scan captured, which is exactly why staying still defeats it in a way that simply moving elsewhere doesn't.",
    counterWhy: [
      "Since the scan is built entirely from a movement trail, a target who breaks line of sight and then stops moving stops generating new trail data — the scan has nothing left to extrapolate from, and the marker's usefulness collapses even though the scan itself already fired.",
      "The scan is an electronic reveal, so a jammer denies it the same way it denies any other gadget signal — a roamer standing inside a jammer's radius is scanned for nothing, the marker simply never activates.",
    ],
    sequencing: [
      "Anchors mostly hold static positions that don't need tracking — roamers are the ones whose location is actually uncertain, and scanning early catches them while they're still moving through a predictable rotation rather than already dug into a final spot.",
      "The tracked marker only lasts a short window, so a call that gets made even a couple of seconds late is often already wrong — the value of the scan is entirely time-sensitive, and it decays to zero the moment the marker itself expires.",
    ],
    rankGap: "Lower-rank Jackal scans whoever he can and calls it out eventually. Diamond-level Jackal targets roamers specifically, scans early before they've settled, and treats the callout itself as time-critical — the read is only as good as how fast the team acts on it.",
  },
  Ying: {
    breakdown: "Each Candela disc doesn't burst once — it stutters through multiple separate flash pulses over its lifetime, which is what makes looking away only a partial answer and makes the disc's total value scale with how many people are in the room when it goes off, rather than just whether it lands. It's a thrown object with real flight time before it activates, same as any grenade, which is what gives interception tools something to work with.",
    counterWhy: [
      "Warden's negation applies to every pulse the disc produces, not just the first — he can watch the entire stutter sequence without any disorientation, which turns Candela from Ying's core tool into a non-event in that specific duel.",
      "Because the disc has to be thrown and travel before it activates, both ADS and Mag-NET can treat it exactly like a grenade in flight — intercepting it mid-air removes it before a single pulse ever fires, rather than just reducing its effect.",
    ],
    sequencing: [
      "A disc thrown into an empty room denies nothing — its value is a direct function of how many defenders are caught in the stutter sequence, so throwing into a confirmed stack is worth many times more than throwing on a guess.",
      "The disorientation window is time the defense can't see or react properly, which is exactly the window a defuser needs — using it to push the plant itself, not just to force entry, gets double value out of a single throw.",
    ],
    rankGap: "Lower-rank Ying throws discs on entry to force a duel. Diamond-level Ying waits for a confirmed stack and thinks about the plant, not just the push — the exact same disc is worth far more thrown into four defenders mid-retake than into one during an opening peek.",
  },
  Zofia: {
    breakdown: "Both round types fire from an underbarrel launcher with real arc and flight time, and both interact only with soft or light cover — reinforced material stops the impact round the same hard boundary any soft-breach tool runs into. The concussion round's real strength is that it works through a wall Zofia never has to see through — it disables gadgets and disorients defenders on the other side of soft cover without exposing her to return fire at all.",
    counterWhy: [
      "There's no single defender gadget built to specifically deny Zofia's rounds — the actual limiting factor on her kit is the same one every soft-breach tool runs into: reinforced walls simply aren't a valid target, so the 'counter' is structural rather than a specific pick.",
      "Her 3-speed, 2-armor profile means she wins races and loses trades — an off-angle defender isn't beating her gadget, they're exploiting the tradeoff she made by playing an aggressive, lower-armor entry style in the first place.",
    ],
    sequencing: [
      "Because the concussion round works through a soft wall without requiring a sightline, firing on a positional read alone denies gadgets and disorients whoever's behind it with zero exposure — it's one of the safest blind plays available to any attacker.",
      "Doors are the expected entry point on almost every site — impacting a hatch instead opens an angle defenders haven't pre-aimed, trading the convenience of an existing opening for the value of surprise.",
    ],
    rankGap: "Lower-rank Zofia pushes doors aggressively and trades armor for kills in even fights. Diamond-level Zofia uses the concussion round as a blind information and denial tool through walls first, saving the aggressive KS79 peeks for moments the round state actually calls for a risk, not as a default opener.",
  },
  Dokkaebi: {
    breakdown: "Unlike the old Logic Bomb, the Jegeo Payload targets one specific defender's phone per activation rather than affecting the whole team at once — it's a precision tool now, not an area reveal, which means its value depends entirely on which individual defender gets hit rather than blanket information across the map. The damage, fire, and observation-tool block all land on that one target simultaneously, which is a much heavier single-target punish than the old version but a narrower one.",
    counterWhy: [
      "A jammer's radius blocks the call from landing on anyone inside it, the same way it blocks any electronic signal — a defender playing inside jammer coverage is fully safe from being targeted at all.",
      "Because only one defender is hit per call, a team that's spread across the map limits the damage a single successful call can do — Dokkaebi has to choose one target, so a defense that isn't clustered denies her the chance to threaten multiple tools with one activation.",
    ],
    sequencing: [
      "The tool-denial effect only matters against defenders whose gadget genuinely requires the phone to function — using a call on someone without that dependency wastes the tool's sharpest edge, so identifying who's actually vulnerable to it first matters more than just picking a target.",
      "The faster cooldown and higher charge count compared to the old version mean the tool rewards being used repeatedly through the round rather than hoarded for one big moment — sitting on charges plays the kit like its predecessor instead of like what it actually is now.",
    ],
    rankGap: "Lower-rank Dokkaebi calls the first defender she can, out of habit from the old kit. Diamond-level Dokkaebi tracks which defenders have phone-dependent gadgets and spends calls specifically to strip those tools, using the higher charge count to pressure multiple defenders across the round instead of one big reveal.",
  },
  Lion: {
    breakdown: "The scan is a map-wide pulse that specifically tags movement during its active window — it has no ability to detect a stationary target regardless of position, because the reveal mechanism is tied to motion, not presence. That's a fundamentally different detection model than a camera or drone, which is why 'don't move' is a complete, guaranteed answer rather than a partial mitigation.",
    counterWhy: [
      "Vigil's cloak removes him from scans entirely, which means he can move freely during the pulse window without ever being tagged — it's not that he moves carefully, the scan simply can't see him regardless of what he does.",
      "Since the tag is triggered by movement specifically, a defender who is already stationary when the pulse fires generates no data for it to catch — the scan isn't 'checking' positions, it's watching for motion, and no motion means no reveal.",
    ],
    sequencing: [
      "Scanning before a breach gives a roamer time to reposition once the pulse ends and reach a new safe spot before the push actually arrives — scanning at the exact moment of commitment removes that recovery window, locking their position in right when it matters most.",
      "Repeated scans over successive pulses can box a roamer into a single verified area by process of elimination — each scan that shows no movement in a zone narrows where they could possibly be, until a teammate can clear the last remaining space with confidence.",
    ],
    rankGap: "Lower-rank Lion scans early and hopes to catch someone moving. Diamond-level Lion times scans to the moment of commitment and chains multiple pulses together to corner a roamer methodically, turning a single reveal tool into a positional squeeze over the course of the round.",
  },
  Finka: {
    breakdown: "The buff is team-wide and applies instantly to every living attacker regardless of position, but it has two hard limits: it only affects living players, and it heals over time rather than instantly — meaning it improves sustained trades and status recovery, but it does nothing at all against a single clean headshot, which kills regardless of how much health regeneration is queued up.",
    counterWhy: [
      "The buff has no revive component whatsoever — a downed teammate stays down exactly as they would without Finka on the team, which means her value is entirely about keeping people alive before they go down, not recovering them afterward.",
      "Healing over time doesn't change how much damage a single instant headshot deals — a defender who wins the aim duel kills a buffed attacker exactly as easily as an unbuffed one, since the buff never had a chance to apply before the fight ended.",
    ],
    sequencing: [
      "Popping the buff right as a coordinated push begins means every attacker in the push benefits from the status cleanse and healing exactly when trades are about to happen — using it early or reactively on cooldown wastes the timing that makes it actually swing fights.",
      "Saving a charge specifically to answer a known disorientation threat like Ela or Capitão turns what would be a lost duel into a fair one — the cleanse effect is worth more in that exact moment than as a generic offensive cooldown.",
    ],
    rankGap: "Lower-rank Finka pops the buff on cooldown whenever it's up. Diamond-level Finka holds it for the exact moment a coordinated push or a known disorientation threat calls for it, treating the timing of activation as the actual skill expression, not just the decision to use it at all.",
  },
  Maverick: {
    breakdown: "The torch cuts gradually and continuously rather than detonating instantly — it produces a genuine, if quiet, audio cue the entire time it's active, and the hole grows in real time rather than appearing all at once. That gradual reveal is what makes Maverick unique among hard breachers: there's no loud single moment that announces 'breach happening now,' but there is a sustained window where a listening defender can act before the hole is even fully open.",
    counterWhy: [
      "Despite being marketed as silent, the torch produces a low, continuous hum that's audible at close range — it's quieter than an explosive breach by a wide margin, but 'quiet' and 'silent' are different guarantees, and a defender listening specifically for it can still catch the cut in progress.",
      "Because the hole is cut at a specific, predictable height relative to where Maverick is holding the torch, a defender who's heard the cut starting can prefire the height peekholes typically appear at before the hole is even usable, catching him mid-cut or immediately after.",
    ],
    sequencing: [
      "A peekhole cut center-mass lines up perfectly with the default headshot angle a defender would use anyway — cutting low or high forces them onto an angle they haven't already pre-aimed, buying a real edge on the ensuing duel.",
      "Since the torch doesn't require exposing a full breach team the way a charge does, it's suited to opening angles nobody expects to be breachable at all — using it on the obvious wall wastes the one advantage that separates it from a louder tool.",
    ],
    rankGap: "Lower-rank Maverick cuts the first reinforced wall he finds, center-mass, same as any other breacher. Diamond-level Maverick treats cut height and cut location as the actual decision — using the torch's quiet, gradual nature to open angles a loud breach never could, at heights that deny the obvious duel.",
  },
  Nomad: {
    breakdown: "The airjab is a placed, proximity-triggered device rather than a thrown grenade with an instant effect — it has to be fired and stuck to a surface first, then it waits for someone to walk near it before triggering. That placement phase is itself a launched projectile that can be intercepted before it ever sticks, which is a different vulnerability window than the trigger phase most players think about.",
    counterWhy: [
      "Since the airjab has to be fired onto a surface before it can function, it's vulnerable during that flight exactly like a thrown grenade — an ADS pod or Mag-NET unit with the right angle can catch it before it ever arms, denying it before it becomes a threat at all.",
      "Once placed, the airjab is a static, visible object — a defender who spots it before walking near it can simply destroy it at range, removing the threat without ever triggering the launch effect it's built around.",
    ],
    sequencing: [
      "Placing airjabs on rotate hatches before the breach starts denies the defender's escape route at the exact moment they'd need it most — placing them after the fight is already underway gives up the pre-emptive value that makes anti-rotate tools worth using at all.",
      "A defender guarding a known rotate lane with an ADS pod or Mag-NET unit is specifically positioned to deny an airjab in that spot — recognizing that and baiting the rotate through a different, unwatched lane avoids feeding utility into a defended chokepoint.",
    ],
    rankGap: "Lower-rank Nomad places airjabs reactively once a fight is already happening. Diamond-level Nomad pre-places them on known rotate hatches before the breach even starts, and reads which lanes are actually being watched by anti-projectile defenders before committing utility to them.",
  },
  Gridlock: {
    breakdown: "The stinger strip is a purely physical, visible obstacle — it has no stealth component and no delayed trigger, it snaps open immediately and stays there as a persistent hazard that punishes anyone who runs across it at full speed. Because it's entirely a movement-based hazard with no damage-over-time or disorientation attached, avoiding it is purely a matter of noticing it and choosing not to run through it.",
    counterWhy: [
      "The strip only punishes sprinting across it — walking slowly or vaulting over the deployed strip avoids the slow/damage effect entirely, since the hazard is triggered by the speed and manner of movement, not simply proximity.",
      "Because it's a physical deployed object with no armor or durability boosts, ordinary gunfire destroys it before it needs to be crossed at all, removing the hazard from the lane entirely rather than just navigating around it.",
    ],
    sequencing: [
      "Placing stingers on flank routes before the main push commits protects the team's back — a roamer or late rotate trying to hit the attack from behind runs straight into a hazard that either slows them enough to be heard or damages them outright.",
      "A roamer who peeks an attacker early and retreats needs a clean path back to safety — denying that return route with a stinger strip turns an early peek into a real risk instead of a free look, discouraging the behavior in the first place.",
    ],
    rankGap: "Lower-rank Gridlock drops stingers directly at the site door as an afterthought. Diamond-level Gridlock uses them proactively on flank and rotate routes before the push even starts, treating them as a way to control space the team isn't actively watching rather than just a site-entry speed bump.",
  },
  "Nøkk": {
    breakdown: "The cloak specifically defeats gadget-based detection — cameras, drones, and audio pickups all fail to register her while it's active — but it does nothing to her visibility to the naked eye, and it runs on a limited timer rather than lasting the whole round. That combination means she's genuinely undetectable to remote intel tools but completely ordinary to a defender who's actually looking in the right direction.",
    counterWhy: [
      "Since the cloak only defeats gadget detection, a defender physically watching a flank route sees Nøkk exactly as they'd see anyone else — the counter isn't a tool, it's simply not relying on cameras or drones as the only way to notice a flank.",
      "The window is a hard timer, not an at-will ability — a round that runs long enough means her stealth has already expired by the time she'd otherwise be using it for a late push, so a defense that survives the opening minute faces her without the cloak's benefit at all.",
    ],
    sequencing: [
      "Using the window to solo push a site trades a scarce, time-limited resource for a single engagement — using it instead to reposition to a flank angle undetected extracts value that lasts the rest of the round, since the position itself remains even after the cloak expires.",
      "Drone-check chokepoints are usually set up expecting normal footstep and camera detection early in the round — activating the cloak right at round start slips past exactly the moment defenders are most actively scanning entry points.",
    ],
    rankGap: "Lower-rank Nøkk uses the cloak to walk straight at a site expecting an easy pick. Diamond-level Nøkk treats the window as a one-time repositioning tool — using it to reach a flank or off-angle undetected, then playing the rest of the round on the position gained rather than trying to fight while the timer is still running.",
  },
  Amaru: {
    breakdown: "The grapple is a fixed, committed animation — once triggered, Amaru travels a set path to the target window or hatch with no ability to redirect or cancel mid-flight, which is what creates the vulnerable window every defender is taught to punish. It also requires a genuinely open entry point: anything that physically blocks the window or hatch denies the grapple a destination entirely, rather than just making the landing riskier.",
    counterWhy: [
      "A Frost mat or a Castle panel changes what's actually at the entry point — the grapple targets an opening that either doesn't exist anymore (barricaded) or becomes an immediate trap the instant she lands (mat), which stops the play before it starts rather than punishing her mid-execution.",
      "Because the grapple's flight path is fixed once activated, there's a real window where Amaru is airborne and unable to fire back — any defender aware of the grapple animation can simply hold the angle and wait for that exact moment.",
    ],
    sequencing: [
      "Windows are the expected grapple target on almost every site — pulling into a hatch instead uses the same tool on an angle defenders aren't pre-aiming, trading the convenience of an obvious opening for a genuine surprise entry.",
      "Using the grapple every round as the default entry method makes the animation and its vulnerable window fully predictable — saving it specifically to break a rotate lane by surprise gets far more value from the element of surprise the tool depends on.",
    ],
    rankGap: "Lower-rank Amaru grapples into the nearest open window every round as a habit. Diamond-level Amaru treats the grapple as a surprise tool with a real cost if read — checking that the entry point isn't blocked, favoring hatches over windows, and saving the play for moments the surprise actually matters.",
  },
  Kali: {
    breakdown: "The lance launcher carries only two rounds for the entire match, not per life, which makes it one of the most resource-constrained tools in the game — every lance spent is a real, permanent decision, not a per-round cooldown. Combined with her 1-speed profile and the sniper's slow reload cycle, her kit is built entirely around deliberate, long-range plays rather than fast reactive ones.",
    counterWhy: [
      "Because she only has two lances for the whole match, a defense that exposes low-value gadgets early can bait her into spending a lance on something replaceable, leaving her with less or nothing left when a genuinely important gadget shows up later in the game.",
      "The sniper's reload cycle is long enough that a defender who survives her first shot has a real window to punish immediately afterward — the same slow, deliberate playstyle that makes her dangerous at range makes her briefly very vulnerable right after firing.",
    ],
    sequencing: [
      "Sniping a battery or ADS pod from outside the building before the utility phase begins removes a defensive tool before it ever gets used against the attack, and doing it from outside means she's not exposing herself to the room the gadget is defending.",
      "Her 1-speed, 3-armor profile is built for holding, not pushing — using her to control a long sightline rather than entering with the team plays to the survivability her kit is built around instead of fighting the tradeoff she made by picking her.",
    ],
    rankGap: "Lower-rank Kali uses lances on the first gadget she sees and pushes into duels her speed can't win. Diamond-level Kali treats each lance as a match-long resource reserved for genuinely important gadgets, and plays her positioning around long sightlines rather than contesting entries her mobility isn't built for.",
  },
  Iana: {
    breakdown: "The replica is a controlled hologram that requires a live electronic signal to function — Iana pilots it remotely, and it has real limitations on how convincingly it mimics a live player's reactions to danger. It's genuinely useful for scouting angles and generating a second footstep source, but it's not a perfect simulation, which is exactly what a defender paying close attention can pick up on.",
    counterWhy: [
      "Because the replica depends entirely on a live signal from Iana to the hologram, a jammer disabling that signal collapses the illusion immediately — the replica either freezes or disappears, which is an instant tell that it was never a real threat.",
      "A real player under fire reacts — flinching, repositioning, returning fire. The hologram doesn't have those reactive behaviors, so a defender who shoots near it and watches for a lack of response can identify it as fake without needing any gadget at all.",
    ],
    sequencing: [
      "Sending the replica down a separate route from Iana's actual entry creates two distinct footstep sources for the defense to track — splitting their attention between two possible threats is valuable even if the replica itself never gets close to a fight.",
      "Piloting the replica into an unclear angle first, instead of walking into it in person, gets the scouting value of a peek with none of the exposure — if something's there, only the hologram is at risk.",
    ],
    rankGap: "Lower-rank Iana sends the replica in a straight line and mostly ignores it after. Diamond-level Iana actively pilots it to mimic believable player movement and reactions, using it as a genuine scouting and misdirection tool rather than a one-note decoy that a moment's attention exposes.",
  },
  Ace: {
    breakdown: "The charge works in two distinct phases — a quiet clearing phase where it removes the wall's reinforcement over a short duration, and a separate, on-demand detonation phase Ace can trigger whenever he chooses. That separation is unique among hard breachers: most tools breach the instant they're used, but Ace can clear a wall and then wait, holding the actual entry moment until it's tactically ideal.",
    counterWhy: [
      "Bandit and Kaid electrify the wall itself, which fries the charge during its clearing phase exactly as it would any other hard-breach tool — the two-phase design doesn't protect against this, since the charge is still a physical device attached to the wall while it works.",
      "Because the clearing phase takes real time and the charge remains a visible object on the wall throughout, a defender who spots it before it finishes can simply shoot it, destroying the charge before reinforcement is even fully cleared.",
    ],
    sequencing: [
      "Clearing reinforcement early and detonating only when the team is ready to push turns the breach into a timer Ace controls rather than a fixed event — the wall can sit cleared-but-closed for as long as needed until the exact moment of commitment.",
      "Placing charges on multiple walls without detonating all of them creates several potential breach points at once — since only one needs to become the real entry, the others function as pure misdirection at minimal extra cost.",
    ],
    rankGap: "Lower-rank Ace clears a wall and detonates immediately, treating it like any other hard breach. Diamond-level Ace exploits the two-phase design specifically — clearing early, feinting on multiple walls, and holding detonation for the exact tactical moment instead of using the tool the same way as a charge with no timer control.",
  },
  Zero: {
    breakdown: "Each camera provides a continuous live feed once placed, but the laser burst attached to it is single-use per camera — once fired, that camera's offensive capability is spent even though the feed may still be watchable. That split between 'ongoing intel' and 'one-shot utility denial or damage' is the core design tension: using the burst early for a speculative kill trades away a tool that might have been worth more used deliberately on a confirmed gadget later.",
    counterWhy: [
      "Because the camera and its laser are electronic, a jammer in range disables both the feed and the burst entirely — a camera placed inside jammer coverage is functionally dead the moment it's within range, regardless of when it was placed.",
      "Solis's sensor reveals active electronic gadgets through walls, which includes a placed camera — a defender warned of its exact location can either avoid its sightline or destroy it, denying the ongoing feed value entirely.",
    ],
    sequencing: [
      "Placing cameras on rotate lanes before a breach captures exactly the movement a one-time scan can't — an ongoing feed catches a defender relocating mid-round in a way that a single scan tool would completely miss.",
      "Firing the laser burst at an ADS pod or a battery removes a genuinely important piece of defensive utility — spending it on a speculative kill attempt risks losing that single-use value for a shot that may not even land.",
    ],
    rankGap: "Lower-rank Zero fires the laser burst the moment he sees any target, cameras or not. Diamond-level Zero treats the feed and the burst as separate resources — watching rotate lanes patiently through the ongoing feed, and reserving the single-use burst specifically for confirmed, high-value gadgets.",
  },
  Flores: {
    breakdown: "The drone is remote-controlled and explosive rather than a taser-based tool — Flores never has to be anywhere near what she's destroying, and detonation is manual rather than automatic on contact, which means the drone can be driven past one gadget deliberately to reach a more valuable one before it's used. That control comes at the cost of the drone being a fully remote, jammable, hijackable device with no ability to defend itself.",
    counterWhy: [
      "Because the drone requires a continuous remote signal to function, Mozzie's hijack takes control of it outright — the exact tool meant to destroy defender gadgets becomes something the defense can redirect or simply neutralize instead.",
      "A jammer blocks the control signal within its radius, which means a drone that enters jammer coverage loses connection to Flores entirely — it stops responding regardless of how close it is to a target.",
    ],
    sequencing: [
      "Driving the drone through the map before the plant, room by room, clears defensive setups without Flores ever exposing herself to gunfire — the entire value proposition is reconnaissance and denial with zero physical risk to the player.",
      "Since detonation is manual, choosing to drive past the first gadget found in search of a second lets one drone deny more total value than detonating on first contact — it's a deliberate tradeoff between guaranteed value now and potentially more value later.",
    ],
    rankGap: "Lower-rank Flores detonates the instant she finds any gadget, spending the drone's whole value on whatever's first. Diamond-level Flores drives past minor gadgets to hunt specifically for the most valuable target in a room, treating detonation timing as the actual decision rather than a reflex.",
  },
  Osa: {
    breakdown: "The shield is transparent, which means it provides cover without sacrificing the sightline through it — unlike an opaque deployable shield, Osa (or anyone behind it) can see and be seen at the same time, converting a normally exposed peek into a protected one. It's still a physical object with a real durability limit, and it can be deployed in a window frame specifically, which gives it use cases a ground-only shield doesn't have.",
    counterWhy: [
      "The shield's durability is built around sustained small-arms fire, not explosive damage — an Impact Grenade or Nitro Cell deals a large amount of damage in one hit, which brings the shield down far faster than the slow chip damage standard bullets provide.",
      "Because the shield is directional and fixed in place once deployed, it only protects the exact line it's covering — rotating to any angle outside that line removes its relevance entirely, the same fundamental weakness any placed cover has.",
    ],
    sequencing: [
      "Deploying in a window frame specifically lets Osa hold an exterior angle with full visibility and protection at the same time — a normal window peek is exposed, but the transparent shield removes that exposure without costing any sightline.",
      "Carrying two shields means covering more than one purpose at once — a primary lane can stay protected while a second shield secures a fallback position, rather than having to choose between offense and a safe retreat option.",
    ],
    rankGap: "Lower-rank Osa deploys the shield on the ground defensively and mostly stays behind it. Diamond-level Osa uses window placements to hold exterior angles other operators can't safely contest, and treats the second shield as a deliberate fallback plan rather than a spare.",
  },
  Sens: {
    breakdown: "The barrier actively intercepts projectiles thrown or fired into its coverage rather than just blocking bullets — it's built specifically to neutralize grenade and gadget spam, which is a different function than a physical shield. It runs on a limited uptime rather than lasting indefinitely once deployed, which is the structural tradeoff behind its power: total denial of thrown utility, but only for a finite window.",
    counterWhy: [
      "Since the barrier is specifically countering thrown and launched utility, defenders whose value comes from direct engagement rather than grenade spam are less affected by it in the first place — Warden's kit, built around holding an angle directly rather than relying on utility to clear a room, sidesteps what the barrier is actually built to stop.",
      "The uptime limit means patience is a complete answer on its own — a defense with enough round-clock to spare can simply wait for the barrier to expire before committing utility, since the denial isn't permanent.",
    ],
    sequencing: [
      "Protecting a plant under heavy grenade pressure with the barrier keeps the defuser and surrounding attackers safe from thrown utility during the most vulnerable part of the round — using it purely as an entry tool ignores its strongest late-round application.",
      "Deploying it defensively during a retake neutralizes exactly the kind of utility spam attackers usually rely on to force a defuser out — it flips the barrier from an attacking tool into a defensive one at the moment it matters most.",
    ],
    rankGap: "Lower-rank Sens uses the barrier once on entry and forgets about it for the rest of the round. Diamond-level Sens times its uptime specifically around the plant and retake phases, when thrown utility pressure is highest, rather than spending it early on generic entry denial.",
  },
  Grim: {
    breakdown: "The hive is a launched projectile that deploys a lingering swarm on impact — the swarm both damages and reveals anyone who stays in its cloud, but it's an area effect with a real duration and boundary, not an instant or permanent one. Because the swarm itself is what does the revealing (not the hive on landing), removing the swarm — by jamming it or leaving its radius — ends the tracking effect immediately, not just the damage.",
    counterWhy: [
      "A jammer prevents the hive from ever releasing its swarm at all if it's within radius when deployed, and it also clears an already-active swarm off anyone who steps into jammer coverage — it's a denial that works both before and after the hive triggers.",
      "The hive travels to its target as a real projectile, so an ADS pod with the right angle can shoot it down before it deploys — and since the swarm is what tracks movement, Vigil's cloak specifically prevents a roamer from being revealed by it even if the swarm is active nearby.",
    ],
    sequencing: [
      "Launching the hive into a known anchor position before the plant forces a choice — stay and take swarm damage while getting revealed, or abandon the hold — either outcome benefits the attack without spending an actual breach charge.",
      "Using it to zone a retake room denies defenders the ability to stack a single corner safely, since anyone lingering in the swarm's area is both taking damage and giving away their exact position to the attacking team.",
    ],
    rankGap: "Lower-rank Grim fires the hive at the first defender he sees for a speculative reveal. Diamond-level Grim uses it as area denial against known anchor holds and retake corners, treating the swarm's zoning effect as more valuable than the reveal itself in most situations.",
  },
  Brava: {
    breakdown: "The hack is permanent and total — once a gadget is converted, it's fully the attacking team's for the rest of the round, not a temporary disable. That makes the drone uniquely valuable among utility-denial tools, but it also means Brava has to physically drive the drone to the gadget and complete the hack, which takes real time and leaves the drone (and the hack in progress) vulnerable the entire way there.",
    counterWhy: [
      "Since Brava's drone is itself an attacker drone functionally, Mozzie's hijack ability works on it the same as on any other drone — the tool built to take defender gadgets can be taken right back before it ever reaches its target.",
      "A jammer blocks the hacking signal outright within its radius, and Solis can reveal exactly where a hostile drone is before it gets close — either denial stops the hack before Brava's investment of time pays off.",
    ],
    sequencing: [
      "A hijacked Evil Eye or Black Mirror is worth dramatically more than a hijacked basic trap, since the payoff scales with the gadget's original value — spending the time and risk of a hack on a low-value target wastes the tool's biggest strength.",
      "Timing the hack to land right as the team's push begins means the flipped gadget becomes useful at the exact moment the fight is happening — hacking early and sitting on the converted gadget wastes the surprise of using it mid-engagement.",
    ],
    rankGap: "Lower-rank Brava hacks the first gadget she finds regardless of value. Diamond-level Brava targets specifically the highest-value gadgets on the site and times the hack's completion to land right before or during the push, so the flipped tool creates maximum surprise when it matters.",
  },
  Ram: {
    breakdown: "The rover is autonomous and remotely driven along ground-level paths — it can ram through deployable obstacles, but it's constrained to routes a wheeled vehicle can actually traverse, and it has a limited health pool that ordinary gunfire can deplete. Its camera feed is live the entire time it's active, which gives Ram (and by extension his team) reconnaissance value independent of whether the rover ever reaches or destroys anything.",
    counterWhy: [
      "Because the rover has a real, limited health total and travels a predictable ground path to reach its target, a defender who spots it can simply shoot it down before it reaches whatever gadget it's driving toward — there's no way for it to take cover or evade.",
      "Since the rover can only ram gadgets placed in its drivable path, positioning defensive tools off that path — on elevated surfaces, behind obstacles a wheeled rover can't cross — removes them from its reach entirely.",
    ],
    sequencing: [
      "Sending the rover ahead of the team to clear barricades and shields means the attack crosses a doorway that's already been opened, rather than the team taking the risk of clearing it in person under fire.",
      "The live camera feed is valuable even independent of destruction — driving the rover through a site purely to see defender setups gives free reconnaissance any team can use to plan the actual push.",
    ],
    rankGap: "Lower-rank Ram drives the rover in a straight line at the first obstacle he sees. Diamond-level Ram uses the camera feed as a scouting tool throughout, mapping out a room's defensive setup before deciding whether ramming anything is even necessary.",
  },
  "Rauora": {
    breakdown: "The panel deploys as floor-to-ceiling bulletproof cover across a doorframe specifically, and it's built with a deliberate gap for friendly drones to pass through while still blocking gunfire and physical entry. That's a real structural tradeoff — it controls a doorway's access without controlling the whole room, and it only functions on doorframes, not open walls or windows.",
    counterWhy: [
      "Because the panel is a physical deployed object rather than an energy barrier, a large enough explosive hit — like an Impact Grenade — can destroy it outright before it's needed for cover, removing the doorway control it was providing.",
      "Since the panel only seals the doorway it's deployed on, it does nothing to control the space around that doorway — a defender who flanks through an adjacent route bypasses the covered entry point entirely rather than contesting it directly.",
    ],
    sequencing: [
      "Sealing a flank route mid-push means the team doesn't need to dedicate attention to watching their back — a covered doorway is one less angle the defense can use to counter-attack from behind while the main push is committed elsewhere.",
      "Placed during a plant, the panel blocks a defender's most direct rotate path into the room — forcing them to find a longer route buys real time for the defuse to complete, the same value a physical chokepoint denial provides anywhere else.",
    ],
    rankGap: "Lower-rank Rauora deploys the panel reactively once a flank is already happening. Diamond-level Rauora pre-plans doorway control before committing to a push or a plant, using the panel to remove specific rotate and flank options from the defense's plan before they become a problem.",
  },
  Deimos: {
    breakdown: "The mark is a homing tag applied to a spotted target that reveals their live position specifically to Deimos, not the whole team — which means the value of a mark depends entirely on Deimos communicating it, not on the mark itself being visible to teammates. He also can't switch weapons while actively marking, which creates a real, punishable commitment window during the tag.",
    counterWhy: [
      "Since Vigil's cloak hides him from tracking and scanning effects generally, the DeathMARK simply can't lock onto or maintain a track on him — he's functionally invisible to the tool regardless of whether Deimos has spotted him.",
      "The tag has to transmit as an electronic signal to land and maintain tracking, so a jammer in range prevents it from ever attaching in the first place — a defender playing inside jammer coverage is safe from being marked at all.",
    ],
    sequencing: [
      "Because the mark's value is entirely dependent on Deimos relaying the position rather than the tracked player being visible to the team, calling out the exact rotate path immediately gets more value than trying to personally chase down the marked target.",
      "Timing a mark right before a coordinated push means the tracked defender can't safely reposition without the team already knowing and reacting — marking too early gives them time to move somewhere the mark's window has already expired by the time it matters.",
    ],
    rankGap: "Lower-rank Deimos marks a target and tries to solo hunt them down. Diamond-level Deimos treats the mark purely as team information — calling exact positions immediately and timing the mark to align with a coordinated push, rather than chasing the tracked player alone.",
  },
  "Solid Snake": {
    breakdown: "The radar sweeps a wide radius and reveals nearby positions without requiring a physical drone or camera to be deployed first, which makes it uniquely fast intel compared to every other recon tool in the game — there's no setup, no exposure, no waiting for a device to reach its target. Its tradeoff is that it's a pure electronic emission, which makes it fully subject to the same jamming and cloaking rules every other electronic gadget follows.",
    counterWhy: [
      "Because the radar functions as an electronic emission with a defined radius, a jammer blocks it from pinging anything within that radius the same way it blocks any other electronic signal — a defender inside jammer coverage is invisible to the sweep entirely.",
      "Vigil's cloak specifically defeats scanning and tracking effects, and the radar sweep falls squarely into that category — a cloaked defender generates no ping regardless of how close they are to Solid Snake when he activates it.",
    ],
    sequencing: [
      "Using the radar immediately before entering a room confirms it's clear without spending a drone charge — it's the fastest possible intel check available to any attacker, which makes it valuable specifically at the moment of commitment rather than earlier in the round.",
      "Since the ping data is instant and map-relevant, relaying it to the team's push order gets more value than acting on it alone — a solo read only helps Solid Snake, but a shared read can reshape the whole team's approach.",
    ],
    rankGap: "Lower-rank Solid Snake pings occasionally and acts on the read himself. Diamond-level Solid Snake uses the radar as a constant, cheap information source right before every room entry, and treats the data as team-wide intel to be communicated immediately rather than a personal advantage.",
  },
};
