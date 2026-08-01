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

  Smoke: {
    breakdown: "The canisters are remote-detonated rather than proximity-triggered, which means Smoke chooses exactly when the gas activates rather than it going off automatically — he can hold a canister silent for the entire round and trigger it the instant it matters most, like right as a defuser starts. That remote control is also the tool's biggest weakness: there's no gadget that reaches out and disables a canister before it's triggered, only the general electronic vulnerability every gadget shares.",
    counterWhy: [
      "There genuinely isn't a reliable denial tool for this kit — an EMP thrown in the exact instant a canister is thrown could theoretically stop it before the throw completes, but that requires reacting to something that hasn't happened yet, which is a read, not a repeatable counter.",
      "Because Smoke has to physically trigger a second canister and the detonation isn't instant on a downed player, a fast enough push to the plant can complete the defuse before he gets the chance to double-tap the gas.",
    ],
    sequencing: [
      "Triggering gas directly on the plant rather than on entry forces attackers into a genuine dilemma — abandon the defuse and lose the round clock, or stay and take sustained damage — which is a much harder choice than gas that only denies an entry room.",
      "Because the canisters are remote-detonated rather than single-use fixed traps, losing one to an EMP doesn't end the tool's usefulness for the round — repositioning a fresh canister after a clear keeps the area-denial threat alive instead of assuming it's over.",
    ],
    rankGap: "Lower-rank Smoke triggers gas the instant he sees movement near a canister. Diamond-level Smoke waits specifically for the plant to go down, understanding that the real value of the tool is forcing a choice between the bomb and survival, not just damaging an early push.",
  },
  Mute: {
    breakdown: "Each jammer silently denies drones, breaching charges, and detonators within a fixed radius — the denial is passive and constant once placed, requiring no activation from Mute at all, which is what makes it reliable but also what makes it a pure static target once a defender's location is known. Its total blockage of remote signals is also exactly why physical destruction (gunfire, an explosive) is the only way to remove it, since there's no counter-signal or override.",
    counterWhy: [
      "Because the jammer has no armor or special durability, a shot fired from below through the floor reaches it exactly like it would reach any unprotected object — positioning has to account for vertical exposure, not just the room it's sitting in.",
      "A frag grenade simply destroys the jammer outright with a single hit — the challenge for an attacker isn't the jammer's durability, it's physically getting a grenade or a drone close enough to it while it's actively jamming any drone trying to approach.",
    ],
    sequencing: [
      "Drone entry points are the obvious jammer placement, but a wall the defense expects to be hard-breached is exactly the kind of surface a jammer denies most valuably — it stops the breach itself, not just a scouting tool.",
      "Two jammers on one wall means a single EMP only clears one, and the second still fully denies drones and charges — forcing the attacking team to spend a second EMP (and a second cooldown) just to open the same wall Mute would otherwise be defending alone.",
    ],
    rankGap: "Lower-rank Mute jams the first door he sees out of habit. Diamond-level Mute treats jammer placement as a prediction of where the real breach will happen, and stacks redundant coverage on the walls that matter most instead of spreading single jammers thin across every entry point.",
  },
  Castle: {
    breakdown: "The panel is a physical barricade with a defined durability — it's built to stop bullets and force attackers to spend a tool to open it, but it has no special resistance to any specific breaching method beyond raw durability. That means literally any tool capable of breaking soft cover — melee, shotgun rounds, launched grenades, generic breach charges — works on it identically; there's no unique 'Castle counter,' just the category of tools that beat barricades generally.",
    counterWhy: [
      "A hammer swing or a breach charge simply destroys the panel in one hit — the barricade doesn't distinguish between breach methods, it just has a durability threshold that any of these tools clears immediately.",
      "Ash, Zofia, and Ram all have ranged tools that interact with soft cover from a distance, meaning none of them need to physically approach the panel to open it — the barricade's main value (forcing attackers to commit close) doesn't apply against any of the three.",
    ],
    sequencing: [
      "Paneling rotation doors rather than just entry points means the barricade's real value — buying time mid-fight, not just before the plant — gets used continuously through the round instead of being spent once at setup.",
      "Leaving at least one lane unpaneled keeps the defense from boxing itself in during a retake — the panel controls attacker access, but it controls defender access too, and a fully sealed site can trap the defense as much as it denies the attack.",
    ],
    rankGap: "Lower-rank Castle panels every opening he can reach at the start of the round and stops thinking about it. Diamond-level Castle treats paneling as an ongoing round-long decision — prioritizing rotation doors for mid-fight value and deliberately leaving controlled lanes open rather than sealing the site completely.",
  },
  Pulse: {
    breakdown: "The sensor detects living targets through walls based on their heartbeat, which means it works regardless of whether the target is moving — unlike a motion-based scan, standing still doesn't defeat it. The tradeoff is that Pulse has to physically hold the scanner up and pointed to use it, which is a real animation that limits his ability to react to a sudden threat while he's mid-scan.",
    counterWhy: [
      "Because the Cardiac Sensor is itself an active electronic device, IQ's scanner reveals it the moment it's in use — which doesn't just deny the scan's value, it tells the attacking team roughly where Pulse is holding an angle from.",
      "The scanning animation genuinely locks him into a vulnerable stance — an attacker who peeks while he's mid-scan is fighting a defender who hasn't had time to fully reset to a ready aim.",
    ],
    sequencing: [
      "Scanning through a wall you expect the breach on turns a guess into a confirmed read — rather than sweeping randomly, aiming the scan at the specific surface under threat converts the tool from passive information into an active prediction check.",
      "Using the scan to time a safe roam-out, not just for kills, treats the heartbeat detection as positional awareness — knowing exactly where attackers are lets Pulse relocate between them rather than only using the read offensively.",
    ],
    rankGap: "Lower-rank Pulse scans broadly and hopes to catch a heartbeat somewhere useful. Diamond-level Pulse aims scans at specific, predicted breach points and uses the read as much for safe repositioning as for combat information.",
  },
  Doc: {
    breakdown: "The stim pistol heals and revives from range, which is what makes Doc's support valuable without requiring him to physically reach a downed teammate — but the shot itself still requires a clear line of sight and a moment of exposure to land, since it's an aimed projectile, not an area effect. That exposure window is the entire vulnerability of an otherwise very safe support tool.",
    counterWhy: [
      "Because the stim shot needs a direct line to the downed teammate, Doc still has to expose some part of himself to line up the shot across an open room — it's safer than a physical revive, but it isn't risk-free.",
      "A downed target that gets finished before the stim shot lands is removed from the round regardless of Doc's healing capability — the tool only works on a target that's still alive when the shot connects.",
    ],
    sequencing: [
      "Pre-healing a teammate holding a contested angle before they take damage extends their effective health in a fight that hasn't started yet — using the pistol reactively only after damage is taken wastes the preventative value entirely.",
      "Positioning centrally so the pistol can reach either bombsite room maximizes the tool's actual utility — a Doc anchored in a corner far from both sites limits himself to supporting only whichever fight happens to be nearby.",
    ],
    rankGap: "Lower-rank Doc heals reactively after teammates are already hurt. Diamond-level Doc pre-heals proactively before contested engagements and positions specifically to keep both sites within stim range, treating support as continuous rather than emergency-only.",
  },
  Rook: {
    breakdown: "The armor plates are a flat, one-time damage threshold increase for whoever grabs one — there's no active component, no animation risk, and no ongoing maintenance, which is why there's no gadget-level denial for it. The entire 'counter' to Rook is simply that raw armor only delays death by a small margin against a clean headshot, which bypasses armor thresholds entirely.",
    counterWhy: [
      "There's no interaction that removes plates once they're taken — Rook's kit isn't a device that can be jammed or destroyed, it's a one-time stat boost, which is why no gadget-based denial exists for it at all.",
      "A headshot kills regardless of armor level in most engagements, since armor primarily raises the time-to-kill for body shots — a defender relying on the extra survivability from a plate still dies just as fast to a clean headshot as one without it.",
    ],
    sequencing: [
      "Placing the pack somewhere central lets every teammate grab a plate on their way to position rather than requiring a detour — a pack tucked in an out-of-the-way corner effectively goes unused by anyone not already passing by it.",
      "Rook himself benefits from taking a plate just as much as any other teammate — as an anchor who's likely to be in prolonged engagements, the survivability compounds specifically for the role he's already playing.",
    ],
    rankGap: "Lower-rank Rook drops the pack and forgets about it. Diamond-level Rook places it somewhere every teammate naturally passes early in the round, and makes sure to take a plate himself rather than treating the pack as purely a gift for others.",
  },
  Kapkan: {
    breakdown: "The trap has a hidden trigger tied to doors and windows, and it's specifically designed to punish careless, fast movement through an entry point — a slow, deliberate vault gives a real chance to spot it before triggering, since the trap isn't invisible, just easy to miss when moving quickly. It also has no self-defense mechanism once spotted; it's a static, destructible device.",
    counterWhy: [
      "A drone triggering the trap from a safe distance removes the threat entirely without risking a player — the trap doesn't distinguish between a drone and a person crossing its trigger line.",
      "Because the trap is a physical, static device once placed, Brava's hijack takes it over completely — the exact tool meant to punish attackers becomes something the attacking team can use instead, which is a much worse outcome for Kapkan than simply losing the trap.",
    ],
    sequencing: [
      "Trapping a hard-breach wall instead of just doors catches attackers who assume a wall about to be destroyed doesn't need checking — the assumption that a breach wall is 'safe' from a trap is exactly what makes it valuable.",
      "Placing traps on secondary entries rather than only the obvious main door targets the routes attackers are less likely to carefully check, since most of the attention during a breach naturally goes to the primary entry point.",
    ],
    rankGap: "Lower-rank Kapkan traps only the front door and expects a random pick. Diamond-level Kapkan spreads traps across hard-breach walls and secondary entries specifically because those are the surfaces attackers are least likely to slow down and check.",
  },
  Tachanka: {
    breakdown: "The launcher fires a sustained barrage from a fixed, protected firing position rather than a single explosive burst — it saturates a room or lane over its firing duration, but that duration comes with a real windup delay and a limited total ammo count per activation. Because Tachanka has to stay in the fixed firing position to sustain the barrage, breaking line of sight to that position removes the threat completely rather than just reducing it.",
    counterWhy: [
      "Since the barrage only threatens whatever's actually in its line of fire, moving out of that sightline — rather than trying to push through it — removes the danger entirely without needing to interact with the launcher at all.",
      "The firing delay and finite ammo mean the launcher isn't a limitless threat — baiting it into firing on a decoy or a minor push exhausts the ammo before the real, coordinated push arrives.",
    ],
    sequencing: [
      "Saturating a hallway before the plant denies a rotate lane without needing a single kill — the barrage's real value against defenders is often area denial and forcing a longer route, not direct eliminations.",
      "Firing reactively on a confirmed push lane rather than blind gets far more value per activation — the limited ammo means a barrage fired on a guess that misses is often wasted for the rest of the round.",
    ],
    rankGap: "Lower-rank Tachanka fires the barrage the moment he hears anything nearby. Diamond-level Tachanka holds fire for a confirmed push lane and treats the tool as a precision area-denial resource rather than a reactive panic button.",
  },
  "Jäger": {
    breakdown: "Each ADS pod automatically intercepts incoming grenades and launched projectiles within its coverage — it's a passive, always-on defense once placed, which is what makes it valuable without requiring Jäger's active attention, but it also means every pod is a static, visible object with a fixed detection cone rather than an adaptive one.",
    counterWhy: [
      "Twitch's shock drone destroys a pod directly from a safe distance — since the pod has no ability to react to or intercept a drone's attack, a spotted pod is essentially defenseless against this specific threat.",
      "Brava's hijack takes the pod rather than destroying it, which is a heavier loss than simple destruction — the exact tool built to intercept the attacking team's utility becomes something that can be repositioned or simply removed from play at the defense's expense.",
    ],
    sequencing: [
      "Covering each pod's blind spots with another pod closes the gaps a single unit leaves — since each pod only protects its own detection cone, overlapping coverage denies angles that a lone pod would miss entirely.",
      "Repositioning a pod once its location has been marked (by IQ or a drone) prevents attackers from simply avoiding its known coverage — a static pod that's been scouted loses its main advantage: catching a grenade the attacker didn't expect to be intercepted.",
    ],
    rankGap: "Lower-rank Jäger places pods once at round start and leaves them. Diamond-level Jäger treats pod placement as adaptive — covering blind spots deliberately and repositioning the moment a pod's location is compromised, rather than trusting a single static setup for the whole round.",
  },
  Bandit: {
    breakdown: "The battery electrifies a reinforced wall continuously once placed, frying any hard-breach charge that arms on it and punishing anyone who touches the wall directly — it's a passive, always-on trick, not a one-time trigger, which is why re-tricking after an EMP clears it is a real, repeatable option as long as spare batteries remain.",
    counterWhy: [
      "Thatcher's EMP disables every battery within its blast radius simultaneously and instantly — there's no partial effect, a battery inside the radius is fully cleared the moment the EMP detonates.",
      "Twitch's shock drone destroys a battery from range before the breach even needs to happen, denying the trick preemptively rather than contesting it during the breach attempt itself.",
    ],
    sequencing: [
      "Tricking a wall you expect an EMP on last (not first) plays around the fact that Thatcher typically clears the first battery he spots — saving the trick for a less obvious wall increases the odds it survives long enough to matter.",
      "Keeping a battery in reserve specifically to re-trick after an EMP lands means a single EMP doesn't permanently clear a wall — the defense retains the ability to punish a hard breach even after losing the first exchange.",
    ],
    rankGap: "Lower-rank Bandit tricks every wall he can reach immediately and uses every battery upfront. Diamond-level Bandit reads which walls Thatcher is likely to EMP first, deliberately tricks the less obvious ones, and holds batteries in reserve specifically to contest the second wave of a breach.",
  },
  Frost: {
    breakdown: "The mat is a hidden floor trap tied specifically to careless, fast movement through windows or doorways — a slow, deliberate vault or crouch-through gives a real chance to spot it before triggering, since it's a physical object on the floor rather than an invisible effect. It has no self-defense once placed and no ability to relocate once someone is already looking for it.",
    counterWhy: [
      "Slow, deliberate movement through unclear entries gives a visual chance to spot the mat before triggering it — the trap punishes speed and carelessness specifically, not entry itself, so a cautious approach defeats it without needing any gadget.",
      "Drones and cameras can spot a mat from a safe distance before a teammate physically commits to the entry point — once revealed, the mat provides no further threat since it's a static, visible object that can simply be avoided.",
    ],
    sequencing: [
      "Placing mats on windows attackers vault through mid-fight (not just entry doors) catches a rotate attempt attackers assume is safe because they've already cleared that entry once — the threat isn't limited to the opening push.",
      "Hiding a mat behind an already-open door exploits a real behavioral pattern — attackers stop checking doors they've already confirmed are open, which makes that space feel cleared when it isn't.",
    ],
    rankGap: "Lower-rank Frost places mats only at the obvious entry points and hopes for one early down. Diamond-level Frost anticipates mid-fight rotates and already-cleared spaces, placing mats where attackers have stopped being cautious rather than where they're already on alert.",
  },
  Valkyrie: {
    breakdown: "Each camera provides a continuous live feed from wherever it's stuck, including surfaces reached only by a mid-air throw — that flexibility in placement is the camera's main strength, letting Valkyrie cover angles a fixed mount couldn't reach. Every camera is still a fully destructible, visible object with no self-defense once spotted, which is the hard limit on how much total map coverage she can maintain.",
    counterWhy: [
      "Brava's hijack takes a spotted camera rather than destroying it — the live feed that was helping the defense becomes usable by the attacking team instead, a heavier loss than simple destruction.",
      "Twitch and IQ both find and remove cameras before a push, just through different methods — Twitch destroys them directly at range, while IQ reveals their exact position through walls so a team can avoid or clear their sightline.",
    ],
    sequencing: [
      "Throwing cameras onto exterior walls before the round opens catches drone-in reads the moment attackers start scouting, giving the defense information about the opening approach before a single door is breached.",
      "Sticking a camera facing a hard-breach wall means it survives the breach itself and keeps watching the hole afterward — a camera placed elsewhere in the room might get destroyed or lose its angle the moment the wall comes down.",
    ],
    rankGap: "Lower-rank Valkyrie throws cameras at whatever's convenient near her spawn. Diamond-level Valkyrie uses the mid-air throw's flexibility deliberately — placing exterior cameras for early reads and interior ones angled to survive a breach, rather than just covering nearby space.",
  },
  Caveira: {
    breakdown: "Her kit is built around not being detected until she chooses to engage — silent footsteps and a suppressed pistol make normal movement and gunfire far less identifiable than for other operators, and the interrogation ability turns a single down into full team location intel. That intel decays fast and only works on a downed (not dead) attacker, which is the real time pressure behind the ability.",
    counterWhy: [
      "Deimos, Jackal, and Solid Snake all provide ways to actively locate a roaming defender before she can set up an ambush — since her kit relies on staying hidden until she strikes, any tool that reveals her position removes her core advantage before the engagement even happens.",
      "Moving in pairs means there's no isolated, downed teammate left alone for her to interrogate — the ability requires a genuinely unaccompanied down, so simply not leaving anyone alone denies the tool's biggest payoff regardless of whether she gets the down.",
    ],
    sequencing: [
      "Interrogating the first down immediately, even mid-fight, matters because the intel decays quickly — waiting for a 'safer' moment to interrogate often means the information is stale or the round has moved past where it would matter.",
      "Roaming early and then repositioning toward the site once interrogation intel narrows the remaining attackers' location turns a roam kill into map-wide information — the value isn't just the pick, it's what the team learns from it afterward.",
    ],
    rankGap: "Lower-rank Caveira roams for a single pick and doesn't always interrogate afterward. Diamond-level Caveira treats the interrogation as more valuable than the kill itself — using the decaying intel window immediately and repositioning based on what it reveals rather than just moving on to the next duel.",
  },
  Echo: {
    breakdown: "The drone flies and clings to ceilings, which gives it placement options a ground-based gadget doesn't have, and the sound burst disorients without dealing any direct damage — its value is entirely about denying a clean, calm entry rather than getting a kill. Because it's a physical flying object, it has a real health pool and is visible once spotted, same as any other drone-based gadget.",
    counterWhy: [
      "Brava's hijack takes the drone rather than destroying it — the tool meant to disorient the attacking team on entry becomes something they can use for their own reconnaissance instead.",
      "IQ reveals the drone's exact ceiling position through walls before it ever gets the chance to fire its burst — a drone whose location is known in advance can be avoided or destroyed before it becomes relevant.",
    ],
    sequencing: [
      "Sticking the drone to a ceiling above a breach point, not the open floor, means it survives longer (out of the immediate sightline of anyone entering) and specifically denies the exact spot attackers are about to occupy.",
      "Using the burst to delay a plant, not just to stop an entry, extracts value from the disorientation at the moment it matters most — a burst spent early on a simple entry check trades away its use during the far more critical plant phase.",
    ],
    rankGap: "Lower-rank Echo places the drone on the first ceiling spot he finds and fires reactively. Diamond-level Echo places it specifically above breach points for durability and saves the burst for plant-phase disruption rather than spending it on an early, lower-value entry check.",
  },
  Mira: {
    breakdown: "The Black Mirror is a one-way window by default — Mira sees out without being seen — but she can pop it to a fully clear pane on demand for an active firing angle, which is a distinct, audible action separate from just having the window placed. That means the mirror has two states with different risk profiles: passive intel while one-way, active exposure once popped.",
    counterWhy: [
      "A Twitch shock drone disables the window outright, removing both its one-way viewing and its firing-angle potential in a single action, since the window is an electronic gadget the same as any other.",
      "Ash's breaching rounds break the window directly from range — rather than needing to push into the room the mirror covers, an attacker can deny it from a distance before ever entering the space it's watching.",
    ],
    sequencing: [
      "Covering the room's main breach angle with the Mirror, rather than a wall attackers rarely open, ensures the passive intel and eventual firing angle are actually relevant to where the fight will happen.",
      "Popping the pane only once a shot is actually lined up matters because the sound of popping gives away the exact position instantly — popping early for a look wastes the surprise the whole gadget depends on.",
    ],
    rankGap: "Lower-rank Mira pops the pane reactively whenever she sees movement. Diamond-level Mira uses the one-way state for patient information gathering and only pops the pane the instant a confirmed shot is available, treating the sound cue as a one-time resource rather than something to spend early.",
  },
  Lesion: {
    breakdown: "The mines are small, hard-to-spot spike traps that poison on proximity rather than instant damage — the poison ticks over time, which gives an affected attacker a real window to be healed or to push through before it becomes lethal. Because the mines are stationary and rely on being missed rather than avoided, they're most effective spread across multiple routes rather than concentrated in one obvious hallway.",
    counterWhy: [
      "Brava's hijack takes a spotted mine rather than simply destroying it, converting a tool meant to slow the attacking team's advance into something available to them instead.",
      "A Twitch shock drone can trigger or destroy mines from a safe distance once they're spotted, clearing the hazard without any player needing to risk walking near it.",
    ],
    sequencing: [
      "Spreading mines across multiple rotate lanes instead of clustering them in one hallway means no single route is safe by default — an attacking team that clears one hallway hasn't necessarily cleared the others.",
      "Using mine triggers as a roam-clock — reacting to which mine goes off and when — gives a passive, ongoing read on where attackers are moving without Lesion needing to be anywhere near the triggered mine himself.",
    ],
    rankGap: "Lower-rank Lesion clusters mines in one predictable hallway near the site. Diamond-level Lesion spreads them across multiple routes specifically to deny the assumption that any one path is safe, and uses each trigger as passive positional intel throughout the round.",
  },
  Ela: {
    breakdown: "The mines trigger on proximity rather than a manual detonation, disorienting and briefly deafening anyone who moves too fast near them — the effect is tied to how quickly an attacker approaches, which is what makes a careful, slow approach a real (if imperfect) way to spot and avoid them before triggering.",
    counterWhy: [
      "Brava's hijack converts a spotted mine into something the attacking team controls instead of destroying it outright, denying Ela's kit its core disorientation tool for the rest of the round.",
      "A Twitch shock drone can trigger or destroy a spotted mine safely from a distance, removing the hazard without a player needing to risk the proximity trigger themselves.",
    ],
    sequencing: [
      "Placing mines on the doorway just past a common breach point, rather than on the wall itself, catches attackers who clear the hole but don't expect a second hazard immediately beyond it — the breach itself gets checked, what's past it usually doesn't.",
      "Roaming aggressively early plays to her kit's actual strength — the mines and pistol reward picking a fight before the site is even breached, rather than waiting passively for a push that plays into a slower, more defensive style.",
    ],
    rankGap: "Lower-rank Ela places mines directly on the breach wall and plays passively otherwise. Diamond-level Ela places mines just past the expected breach point and uses the early roam window aggressively, since her kit is specifically built to punish the opening phase of a round, not the late one.",
  },
  Vigil: {
    breakdown: "The cloak defeats detection specifically from drones, cameras, and scans — it's a gadget-vs-gadget tool, not an invisibility effect, which is why it does absolutely nothing against a defender being physically seen by a player. It also runs on a limited timer, meaning it's a resource to be spent deliberately rather than an always-available answer to being scouted.",
    counterWhy: [
      "Because the cloak specifically defeats scanning tools rather than physical detection, IQ's scanner still picks up the ERC-7 device itself as an active electronic gadget — a scan doesn't reveal Vigil directly, but it reveals that a cloaked defender is likely nearby, which is often enough information.",
      "The cloak has zero effect on ordinary human vision — a defender relying on it to avoid a physical peek or a direct line of sight from an attacker gets no benefit at all, since the tool was never built to solve that problem.",
    ],
    sequencing: [
      "Cloaking specifically when a drone is actively sweeping his position, rather than on a fixed timer, uses the limited duration exactly when it matters — activating early or on a schedule risks the window expiring before the actual threat arrives.",
      "Using the cloak's window to reposition away from a spot about to be revealed by Dokkaebi or Jackal turns a purely defensive tool into an active repositioning one — the value isn't just staying hidden, it's using the hidden time to relocate somewhere safer.",
    ],
    rankGap: "Lower-rank Vigil activates the cloak reactively whenever he feels seen. Diamond-level Vigil times activation to specific, known threats — an active drone sweep, an incoming Dokkaebi or Jackal read — and uses the window to reposition, not just to wait it out in place.",
  },
  Maestro: {
    breakdown: "The Evil Eye is a wall-mounted turret with real armor that absorbs small-arms fire until it eventually breaks — it's not instantly destructible, but it's also not invincible, and its laser is a genuine damage threat, not just a camera. Because it's fixed once placed, its entire survivability depends on positioning: an off-angle, low placement takes longer to identify and target than one sitting in an obvious doorway.",
    counterWhy: [
      "Brava's hijack takes the Evil Eye rather than simply breaking its armor — the turret that was threatening the attacking team becomes something they can use instead, which is a considerably worse outcome for Maestro than losing it to gunfire.",
      "Ash and Zofia's rounds deal concentrated damage that breaks through the armor plate faster than standard sustained small-arms fire — the turret's durability is built around resisting steady gunfire, not concentrated explosive rounds.",
    ],
    sequencing: [
      "Placing it low and off-angle rather than centered in a doorway means it isn't the obvious first target attackers instinctively shoot on entry — surviving that initial reaction extends how long it can actually gather intel or threaten damage.",
      "Using the laser defensively on retake to deny a defuser, rather than only for early kills, gets value out of the tool at the moment defenders most need to stall the bomb — a laser spent early on a speculative kill isn't available for that critical later use.",
    ],
    rankGap: "Lower-rank Maestro places the Evil Eye centered in an obvious spot and uses the laser on the first target he sees. Diamond-level Maestro hides it off-angle for maximum survivability and saves the laser specifically for retake denial, when its value against a defuser is highest.",
  },
  Alibi: {
    breakdown: "The Prisma decoys are static holograms that tag anyone who shoots them, revealing the shooter's position to the whole team — their entire value depends on an attacker mistaking them for a real player, which requires the decoy's placement and stillness to look plausible. They have no genuine reactive behavior, which is both what makes them cheap to deploy and what eventually gives them away to careful observation.",
    counterWhy: [
      "Since the decoys are entirely static, a moving target in the same space is confirmed to be a real player — attackers who watch for movement rather than shape alone distinguish decoys from threats without needing any gadget.",
      "A decoy never reacts to nearby sound or light the way a real player instinctively would — checking for that lack of reaction (flinching, repositioning) is a reliable tell that costs nothing but attention.",
    ],
    sequencing: [
      "Placing decoys in the exact spot a roamer would naturally stand, rather than an obvious corner, makes them far more convincing — attackers pattern-match against expected roamer positions, and a decoy that fits that pattern is harder to dismiss.",
      "Using the tag as a rotate trigger — reacting the instant a decoy is shot — turns the reveal into actionable positional intel immediately, rather than just a passive 'gotcha' with no follow-up.",
    ],
    rankGap: "Lower-rank Alibi places decoys in convenient, obvious spots and doesn't always act on a tag. Diamond-level Alibi places them exactly where a real roamer would stand and reacts to a tag instantly, converting the reveal into a real positional advantage rather than a passive bonus.",
  },
  Clash: {
    breakdown: "The shield is electrified and slows/damages anything in front of her while she advances, and it's specifically immune to most flashes — but that immunity and the shield's damage are both purely frontal, tied to whatever she's currently facing while advancing. She has no coverage against anything approaching from outside that frontal arc, including tools that don't require a direct duel at all.",
    counterWhy: [
      "Zofia and Capitão both have launcher-based tools that hit from range rather than requiring a direct frontal duel — since the shield's protection is built around close-range frontal engagement, a launched round from outside that range bypasses what the shield is actually built to stop.",
      "Flanking her exploits the same fundamental limitation every frontal shield has — the shield covers where she's facing, and nothing else, so an angle outside that coverage faces an entirely unprotected target.",
    ],
    sequencing: [
      "Using her to hold a hallway chokepoint solo frees the rest of the team to stack elsewhere — since she's specifically built to control a single frontal lane by herself, committing other defenders to the same chokepoint wastes their positioning.",
      "Advancing slowly into a stalled push, rather than holding stationary, gets more value from the shock effect over time — a static Clash blocks a lane, but an advancing one actively pressures attackers who thought they had space to work with.",
    ],
    rankGap: "Lower-rank Clash holds a doorway passively and waits for attackers to walk into the shield. Diamond-level Clash uses her solo lane control to free up teammates elsewhere and advances into stalled pushes actively, rather than treating the shield as a purely static roadblock.",
  },
  Kaid: {
    breakdown: "The Electroclaw electrifies both reinforced walls and other defender gadgets, functioning like a second source of Bandit's trick — it's a continuous, passive effect once placed, frying breach charges the same way a battery does. Because it works on gadgets as well as walls, it has applications beyond simple wall denial that a battery alone doesn't.",
    counterWhy: [
      "A Twitch shock drone destroys an Electroclaw from a safe range before it needs to be contested during an actual breach attempt — the drone doesn't need to interact with the wall itself, just the claw.",
      "Thatcher's EMP clears an Electroclaw exactly the way it clears a Bandit battery — the two devices function identically against an EMP's blast radius, so a wall trick from either operator faces the same denial.",
    ],
    sequencing: [
      "Clawing a hatch as often as a wall matters because hatch hard-breaches get denied far less often in general play — attackers commonly account for wall tricks but forget hatches can be electrified the same way.",
      "Electrifying Castle panels in addition to reinforced walls extends the claw's denial to a tool it isn't normally associated with — it specifically punishes a Sledge hammer swing on a panel the same way it punishes a hard breach on a wall.",
    ],
    rankGap: "Lower-rank Kaid claws only obvious reinforced walls near the site. Diamond-level Kaid extends coverage to hatches and Castle panels specifically because those are the surfaces attackers assume are safe from an electrical trick.",
  },
  Mozzie: {
    breakdown: "The Pest devices passively hijack any attacker drone that rolls near them, giving Mozzie a live feed and movement control over the captured drone — the hijack is automatic on proximity, requiring no active input once the Pest is placed, which is what makes it valuable as a set-and-forget denial tool. Its blind spot is entirely about visibility: a Pest that's spotted before a drone gets close never gets the chance to trigger.",
    counterWhy: [
      "A Twitch shock drone can destroy a Pest device outright, but only if it's spotted before an attacker's own drone rolls into its hijack range — the denial is a race between noticing the Pest and triggering it accidentally.",
      "Once a drone is hijacked, it's gone for the round — there's no recovery method, which is why the practical response is accepting the loss and not spending additional drones trying to chase down what's already been taken.",
    ],
    sequencing: [
      "Placing Pests near common drone-under-door entry points, rather than out in the open, keeps them from being spotted and destroyed before they ever get the chance to hijack anything.",
      "Using a hijacked drone actively to scout the attack, not just to deny it, converts a purely defensive gadget into a live intelligence source — the feed itself is valuable information the defense wouldn't otherwise have.",
    ],
    rankGap: "Lower-rank Mozzie places Pests in open, easily spotted areas and treats hijacking as the end goal. Diamond-level Mozzie hides them specifically at common drone entry points and actively uses every hijacked feed as ongoing scouting rather than a one-time denial.",
  },
  Warden: {
    breakdown: "The glasses see through smoke and fully negate flashbang effects while active, which lets Warden hold an angle through a blind push that would disorient anyone else — but the negation only lasts for a limited number of uses per life, and it does nothing to make him less visible or harder to hit while it's active.",
    counterWhy: [
      "Because the glasses have a limited charge count, baiting them out with a cheap, low-value flash early in an engagement can exhaust the negation before the real, decisive push arrives.",
      "The glasses only negate the flash's disorientation — Warden remains fully visible and exposed the entire time they're active, so the counter to using them isn't a gadget, it's simply out-dueling him in the gunfight the flash was supposed to prevent.",
    ],
    sequencing: [
      "Holding the exact angle a Ying or Blitz push is most likely to come from, and treating the glasses as insurance rather than a crutch, means the negation is a safety net for a good read — not a substitute for making one.",
      "Saving charges specifically for the retake, when flash negation matters more once the bomb's already down, prioritizes the phase of the round where holding an angle through a blind push has the highest stakes.",
    ],
    rankGap: "Lower-rank Warden burns glasses charges on any flash he sees, early and often. Diamond-level Warden treats the limited charges as a round-long resource, holding them for genuinely threatening pushes and specifically for the higher-stakes retake phase.",
  },
  Goyo: {
    breakdown: "The Volcán Shield is a deployable shield with a hidden property: it explodes into fire when shot or destroyed, which punishes attackers who either breach directly through it or use it for cover assuming it behaves like a normal shield. Its threat is entirely conditional on someone interacting with it aggressively — a shield left alone, or destroyed from a safe distance, never triggers the fire at all.",
    counterWhy: [
      "A Twitch shock drone can destroy the shield from a safe distance, triggering the explosive fire property without any player being anywhere near it when it detonates.",
      "Since the fire specifically triggers when the shield is shot or destroyed at close range, or used for cover, simply avoiding treating it as cover and clearing it from range sidesteps the punish entirely.",
    ],
    sequencing: [
      "Placing shields on the exact breach hole attackers will shoot through for cover, rather than as decoration nearby, ensures the fire punish actually lands on someone rather than triggering in empty space.",
      "Stacking two shields on one entry point means clearing both takes real time — time the defense can use elsewhere, since destroying one shield still leaves a second explosive surprise for whoever pushes through next.",
    ],
    rankGap: "Lower-rank Goyo places shields loosely around a room as generic cover. Diamond-level Goyo places them specifically where attackers are likely to shoot for cover or push through a breach, and stacks them at single entry points to punish anyone clearing the first one too quickly.",
  },
  Wamai: {
    breakdown: "The Mag-NET units pull in and detonate thrown grenades and launched projectiles before they reach their intended target, functioning as an area-based interception tool rather than a targeted one — but the pull only affects a defined cone or radius, meaning a projectile thrown from outside that coverage entirely avoids the effect.",
    counterWhy: [
      "A Twitch shock drone can destroy a spotted Mag-NET unit before an attacker commits key utility near it — removing the interception threat preemptively rather than testing whether a throw will get pulled in.",
      "Because the unit's pull only covers a defined cone, grenades thrown from odd angles outside that coverage bypass the interception entirely — the unit isn't omnidirectional, so approach angle matters as much as distance.",
    ],
    sequencing: [
      "Placing units to protect the plant room specifically, not just entry doorways, denies the exact grenade spam attackers rely on to pressure a defuser during the most vulnerable part of the round.",
      "Covering both a grenade lane and a breach lane with a single well-placed unit at a room's corner gets double coverage out of one placement, rather than needing two separate units to cover both threats.",
    ],
    rankGap: "Lower-rank Wamai places units only at obvious entry doorways. Diamond-level Wamai prioritizes plant-room coverage and finds corner placements that cover multiple threat lanes at once, getting more defensive value out of a limited number of units.",
  },
  Oryx: {
    breakdown: "The dash lets Oryx body-slam through soft walls and hatches with a brief speed boost that also cancels most concussion and blind effects — it's a mobility and repositioning tool disguised as an entry tool, and the speed boost during the dash is what creates both his biggest strength (unexpected angles) and his biggest weakness (a predictable, committed animation while it's happening).",
    counterWhy: [
      "Because the dash lets him move through soft walls and hatches instantly, treating those surfaces as viable entry points — not just doors — is the actual mental adjustment needed to defend against him; expecting him only through conventional entries misses half his kit's potential.",
      "The dash itself is a fixed, readable animation — he's exposed and predictable for its duration, and a defender who recognizes the dash starting can often punish the moment he commits to it before he reaches full speed or cover.",
    ],
    sequencing: [
      "Using the dash to relocate mid-fight when a position gets read, not just for surprise entries, treats it as an escape and repositioning tool as much as an offensive one — the concussion/blind cancellation especially matters when disengaging from a bad read.",
      "Dashing through a hatch to counter-roam behind an attacker push that's already committed to the site catches attackers who've stopped watching their back the moment they think the entry phase is over.",
    ],
    rankGap: "Lower-rank Oryx uses the dash purely as a surprise entry tool and rarely as a defensive escape. Diamond-level Oryx treats it as equally valuable for relocating out of a read position and for counter-roaming behind an already-committed push, not just for breaking in somewhere unexpected.",
  },
  Melusi: {
    breakdown: "The Banshee devices slow and damage anyone who lingers near them, which specifically punishes a slow, methodical clear rather than a fast one — the effect requires proximity and time, so a quick pass-through takes less total punishment than a cautious room-clear would. That design is exactly why the devices work best in the exact hallways where attackers naturally move carefully.",
    counterWhy: [
      "Brava's hijack takes a Banshee rather than simply breaking it, converting a slow-and-damage zone the attacking team was avoiding into a device that could theoretically be repurposed instead.",
      "Ash, Zofia, or a thrown grenade can all break a Banshee from a safe angle before pushing past it — since the device has no way to defend itself once spotted, any of these tools removes it before its slow effect ever applies.",
    ],
    sequencing: [
      "Placing Banshees on rotate hallways, not just the site door, slows a roam-clear as effectively as it slows an entry — attackers hunting a roamer through a corridor take the same proximity punishment as attackers pushing the site directly.",
      "Using them to zone a retake room during the plant lets defenders reposition more safely — the slow-and-damage effect covers ground the defense doesn't have to physically watch themselves.",
    ],
    rankGap: "Lower-rank Melusi places Banshees only at the obvious site entrance. Diamond-level Melusi uses them on rotate and roam-clear hallways as well, and leans on them specifically during the plant phase to cover ground the defense can't watch directly.",
  },
  Aruni: {
    breakdown: "The Surya Gate blocks bullets and utility while Aruni is near it, and can zap gadgets thrown through it — its defensive property is directly tied to her presence, meaning the barrier isn't a permanent structure, it's an extension of her that drops the instant she's displaced or killed. That dependency is the entire basis for how it's countered.",
    counterWhy: [
      "Brava's hijack takes control of the gate itself rather than needing to displace Aruni to remove it — a more complete denial than the standard approach of forcing her away from the barrier's activation range.",
      "Since the gate only blocks the exact angle it's covering, going around it rather than contesting that angle directly avoids the barrier's effect entirely without needing to fight through it at all.",
    ],
    sequencing: [
      "Deploying the gate to seal a breach hole mid-fight buys a rotate that wasn't available a second earlier — the barrier's real-time deployment makes it useful reactively, not just as a pre-planned setup piece.",
      "Using it during the plant to block a direct retake lane gives the defense a window to reposition safely — the barrier doesn't need to hold forever, just long enough for a repositioning window to open.",
    ],
    rankGap: "Lower-rank Aruni deploys the gate early and statically, then mostly ignores it. Diamond-level Aruni uses it reactively — sealing breach holes and retake lanes in real time as the fight develops, rather than treating it as a one-time setup decision.",
  },
  Thunderbird: {
    breakdown: "The Kóna Stations pulse healing to any teammate standing near them, which lets a hurt anchor top off without fully rotating out of position — the healing requires standing still near the station, which is a real limitation mid-firefight, but it's a powerful tool for sustaining a hold between engagements rather than during one.",
    counterWhy: [
      "Brava's hijack takes a spotted station rather than simply destroying it, converting a healing resource the defense was relying on into something the attacking team could theoretically use instead.",
      "A Twitch shock drone can destroy a station once it's been spotted, denying the healing zone entirely before a defender gets the chance to use it between engagements.",
    ],
    sequencing: [
      "Placing a station in the anchor's actual hold spot, not a random corner, ensures it's usable in the middle of an ongoing hold — a station tucked away from where the real fighting happens goes unused when it matters most.",
      "Using the heal window to re-engage a duel that would otherwise require disengaging entirely lets a defender stay in a fight longer than their raw health would normally allow, extracting more value from a single hold position.",
    ],
    rankGap: "Lower-rank Thunderbird places stations in a safe back room, disconnected from where fights actually happen. Diamond-level Thunderbird places them directly in the anchor's real hold spot, treating the heal as a tool to extend an active engagement rather than a between-round convenience.",
  },
  Thorn: {
    breakdown: "The Razorbloom trap beeps a clear warning before detonating, which is a deliberate tradeoff — it gives attackers a real chance to destroy it in time, but that same beep also functions as bait, since attackers who fixate on destroying it in the open expose themselves to a trade while doing so.",
    counterWhy: [
      "Brava's hijack converts the trap during its beep window into something the attacking team controls, rather than needing to destroy it under time pressure — a heavier denial than simply shooting it in time.",
      "A Twitch shock drone can trigger or destroy the trap safely from a distance, resolving the beep-window threat without any player needing to risk exposure to do it.",
    ],
    sequencing: [
      "Placing it just past a breach hole, not on the wall itself, catches the second attacker through rather than the first — the initial breach gets checked carefully, but what's immediately beyond it often doesn't.",
      "Using the beep as bait relies on attacker psychology — a player fixated on destroying the trap before it detonates is often not watching their surroundings, which is exactly the moment a defender can punish them.",
    ],
    rankGap: "Lower-rank Thorn places traps directly on breach walls where they're expected and get destroyed immediately. Diamond-level Thorn places them just past the breach point and treats the beep window itself as a distraction tool, punishing attackers who fixate on the trap instead of the room.",
  },
  Azami: {
    breakdown: "The Kiba Barrier solidifies instantly over a hole or window, re-denying an opening that's already been breached — it's a reactive re-fortification tool rather than a preventative one, which means its value is entirely about undoing an attacker's progress after the fact, not stopping the initial breach.",
    counterWhy: [
      "Ash or Zofia's rounds break a barrier down faster than standard sustained fire — the barrier has a durability threshold like Castle's panel, and concentrated explosive damage clears it quicker than ordinary gunfire would.",
      "Flores can send a drone through an already-open hole before it's resealed, then destroy the barrier from the other side — approaching the denial from the interior rather than trying to break through it from the attacking side.",
    ],
    sequencing: [
      "Resealing a Thermite hole immediately after the charge pops, before attackers can push through it, denies the entire point of the breach — the wall opened, but the opening never actually becomes usable.",
      "Carrying barriers into a retake to re-deny a hole attackers already used for the plant forces them to breach the same spot twice, spending utility they may not have in reserve for a second attempt.",
    ],
    rankGap: "Lower-rank Azami reseals holes whenever she happens to notice them open. Diamond-level Azami times the reseal to the instant a breach completes and carries barriers specifically into retakes, treating re-fortification as a round-long resource rather than a one-time reaction.",
  },
  Solis: {
    breakdown: "The sensor pulses to reveal every active electronic gadget and pings any attacker caught in an active gadget's effect through walls — it's a burst-activated tool with a real cooldown between pulses, not a continuous scan, which means its value depends heavily on timing the pulse to when relevant gadgets are actually active.",
    counterWhy: [
      "Because the sensor itself is an active electronic device while pulsing, IQ can spot its signature the same way she'd spot any other gadget — the tool that reveals attacker electronics is, itself, detectable by the same category of scan.",
      "Non-electronic attacker tools generate no signal for the sensor to pick up at all — an attacker relying purely on non-electronic gadgets is functionally invisible to this specific tool regardless of when Solis pulses.",
    ],
    sequencing: [
      "Pulsing right after hearing a drone or gadget deploy, rather than on a blind timer, confirms the exact room a piece of electronic utility is active in — timing the pulse to a specific sound cue turns a broad scan into a precise read.",
      "Relaying gadget locations to teammates immediately matters because the intel is only valuable if it's acted on fast — a confirmed gadget location that sits uncommunicated for too long loses its relevance as the round state changes.",
    ],
    rankGap: "Lower-rank Solis pulses on a rough timer regardless of what's happening around her. Diamond-level Solis times pulses to specific audio cues of gadget deployment and treats immediate communication of the read as part of the tool's actual value, not an afterthought.",
  },
  Fenrir: {
    breakdown: "The Dread Mines trigger a fear effect that blurs vision, forcing attackers to disengage or push blind rather than dealing heavy direct damage — the effect is about denying clear information and confident movement, not about getting a kill outright, which is why 'push through it' is a genuinely viable response for a team willing to accept degraded vision.",
    counterWhy: [
      "Brava's hijack converts a spotted mine into something the attacking team could use, rather than simply removing the threat by destroying it.",
      "A Twitch shock drone can trigger or destroy the mines on sight before they're triggered, clearing the hazard without any player needing to risk walking into the fear effect.",
    ],
    sequencing: [
      "Triggering mines on the plant forces attackers into a genuine choice between the bomb and clearing their vision — a much harder decision than a fear effect used purely on an entry push with no time pressure attached.",
      "Placing mines on rotate lanes specifically blinds a flanking roamer's read on the defending team's position — the fear effect denies exactly the clear vision a roamer needs to make an informed push.",
    ],
    rankGap: "Lower-rank Fenrir triggers mines on the first attacker he sees near an entry point. Diamond-level Fenrir saves them specifically for the plant phase and rotate lanes, where the fear effect creates the hardest possible decision for the attacking team rather than a minor early-round inconvenience.",
  },
  "Tubarão": {
    breakdown: "The Zoto Canister ices over a reinforced hatch and nearby attackers, slowing hard breaches on that specific hatch while also revealing footsteps on the floor below — it's a dual-purpose tool combining hard-breach denial with a passive intel feed, but the icing effect takes real time to complete, which is the window every counter to it exploits.",
    counterWhy: [
      "A Twitch shock drone can destroy a canister before it finishes icing the hatch over, denying the slow effect before it fully takes hold rather than needing to fight through it once complete.",
      "Since the icing takes time and only affects the specific hatch it's applied to, breaching a wall instead of waiting out the iced hatch sidesteps the denial entirely if the timing doesn't favor a delay.",
    ],
    sequencing: [
      "Icing a hatch that's a known rotate or breach point, rather than a random one, maximizes the slow's actual impact — the effect matters far more on a hatch attackers are actually planning to use than on one that would go untouched anyway.",
      "Using the footstep reveal on the floor below as a passive, ongoing roam-read throughout the round extracts continuous value from the canister beyond its one-time hard-breach denial.",
    ],
    rankGap: "Lower-rank Tubarão ices whichever hatch is nearest without much thought. Diamond-level Tubarão targets known rotate and breach points specifically, and treats the footstep-reveal side effect as a passive intel source worth checking throughout the round, not just a bonus.",
  },
  Denari: {
    breakdown: "The T.R.I.P. Connector network links deployable units into a laser tripwire grid across a room, damaging and revealing anyone who crosses a beam — the network's coverage is entirely defined by where the individual units are placed and connected, which means its effectiveness depends on covering the routes attackers are actually likely to use, not just any available space.",
    counterWhy: [
      "Brava's hijack takes a connector unit rather than simply destroying it, converting part of the tripwire network into something the attacking team could repurpose instead of removing it outright.",
      "A Twitch shock drone or a thrown grenade can destroy connector units to collapse the network before pushing — removing even one unit can break the beam continuity across the whole setup, not just at that single point.",
    ],
    sequencing: [
      "Building the network across multiple entry points in the same room, instead of a single lane, denies attackers the option of simply finding the one unwatched route into that space.",
      "Using the network as an early-warning trip line on a flank route, not only the main site door, extends its value beyond direct site denial into general positional awareness for the whole defense.",
    ],
    rankGap: "Lower-rank Denari builds a single tripwire line across the most obvious entrance. Diamond-level Denari covers multiple entry points within a room and extends the network onto flank routes, treating it as an early-warning system for the whole map, not just a site-door tripwire.",
  },
  "Skopós": {
    breakdown: "Splitting control between two remote shells — one active and armed, one passive with a shield and camera — gives Skopós the ability to reposition and gather intel from two locations without physically moving her own body between them, but destroying either shell has real consequences: the passive one loses her a camera and cover, while the active one removes her offensive capability at that location.",
    counterWhy: [
      "Dokkaebi or Deimos can both track her position between shell swaps — since she's still a physical player controlling the shells remotely, tools that reveal a defender's location work on her exactly as they would on anyone else during the moments she's not shielded by a shell's cover.",
      "Destroying the passive shell removes half her kit even though she personally survives — the loss isn't fatal, but it's a real reduction in her map presence and intel-gathering capability for the rest of the round.",
    ],
    sequencing: [
      "Leaving the passive shell watching a flank while actively holding the site with the other covers two locations simultaneously — a single defender providing genuine dual-location presence without needing a teammate to cover the second spot.",
      "Swapping shells to reposition mid-fight, without the movement time a normal rotate would cost, lets her respond to a developing situation on the far side of the map instantly rather than physically running there.",
    ],
    rankGap: "Lower-rank Skopós uses one shell actively and mostly forgets about the passive one. Diamond-level Skopós treats both shells as simultaneously valuable — actively defending one location while the passive shell provides real flank coverage, and swaps between them as a genuine repositioning tool rather than a novelty.",
  },
  Sentry: {
    breakdown: "The Gadget Kit trades a unique primary ability for the ability to pick any two defender secondary gadgets, with no duplicates — this makes Sentry uniquely flexible in what he brings to a comp, but it also means his total deployable utility is capped at two items rather than the deeper pool a specialist typically carries of their unique gadget.",
    counterWhy: [
      "Since there's no unique primary gadget to specifically deny, the practical response is scouting which two secondaries were actually picked and adjusting to those specific tools rather than expecting a standard kit.",
      "Because the total kit is only two gadgets, denying both early removes his entire utility contribution for the round — a specialist with a deeper pool of one gadget type retains some value even after losing a few units, but Sentry doesn't have that redundancy.",
    ],
    sequencing: [
      "Picking two secondaries that plug a specific gap in the team's composition, rather than doubling up on a type the team already covers, gets the most value out of the flexibility the kit is actually built around.",
      "Leaning on positioning and aim over gadget play makes sense given the kit's design — the value proposition here is a custom loadout filling comp gaps, not a unique deny tool, so treating him as a pure gadget specialist misreads what he's for.",
    ],
    rankGap: "Lower-rank Sentry picks two secondaries arbitrarily or duplicates what teammates already bring. Diamond-level Sentry treats the loadout choice itself as the main skill expression — reading the team comp's actual gaps before the round even starts and filling exactly those, rather than defaulting to a generic pair.",
  },
};
