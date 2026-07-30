/* ---------- MAP DATABASE ---------- */

/** g = site group id — rooms sharing a g on the same floor form one bombsite pair.
 *  A floor can have multiple distinct site pairs (e.g. Bank 1F has two). */
const R = (name, opts = {}) => ({ name, site: false, g: null, hatch: false, reinforced: false, ...opts });

const RAW_MAPS = [
  {
    name: "Clubhouse", status: "Ranked", verified: true,
    floors: [
      { name: "B", rooms: [R("Church", { site: true, g: 1, reinforced: true }), R("Arsenal Room", { site: true, g: 1, reinforced: true }), R("Blue Hall"), R("Dirty Tunnel")] },
      { name: "1F", rooms: [R("Bar", { site: true, g: 1, reinforced: true }), R("Stock Room", { site: true, g: 1, reinforced: true }), R("Stage"), R("Kitchen"), R("Strip Club"), R("Lounge"), R("Garage")] },
      { name: "2F", rooms: [R("Cash Room", { site: true, g: 1, reinforced: true }), R("CCTV Room", { site: true, g: 1, reinforced: true }), R("Bedroom", { site: true, g: 2, reinforced: true }), R("Gym", { site: true, g: 2, reinforced: true }), R("TV Room"), R("Catwalk")] },
    ],
    rotations: "Basement Church/Arsenal Room is the classic anchor site. 1F Bar/Stock Room sits right off the Garage flank. 2F has two separate sites — Cash Room/CCTV Room and Bedroom/Gym — so attackers reading 2F need to confirm which one before committing utility.",
    attackTip: "On a 2F read, drone both Cash Room/CCTV Room and Bedroom/Gym before breaching — they're on opposite sides of the floor and utility spent on the wrong one is wasted.",
    defendTip: "Basement Church/Arsenal Room has the fewest entry points on the map; hold it patiently rather than over-rotating off it.",
    comboTip: "Defenders: Kaid or Bandit gear belongs on the Church/Arsenal reinforced wall first — it's the anchor site with the least natural rotation support if it goes down early.",
  },
  {
    name: "Bank", status: "Ranked", verified: true,
    floors: [
      { name: "B", rooms: [R("CCTV Room", { site: true, g: 1, reinforced: true }), R("Lockers", { site: true, g: 1, reinforced: true }), R("Vault Lobby"), R("Dock"), R("Server Room")] },
      { name: "1F", rooms: [R("Open Area", { site: true, g: 1, reinforced: true }), R("Staff Room", { site: true, g: 1, reinforced: true }), R("Tellers' Office", { site: true, g: 2, reinforced: true }), R("Archives", { site: true, g: 2, reinforced: true }), R("Main Stairway"), R("Lobby")] },
      { name: "2F", rooms: [R("CEO Office", { site: true, g: 1, reinforced: true }), R("Executive Lounge", { site: true, g: 1, reinforced: true }), R("Meeting Room")] },
    ],
    rotations: "1F is the only floor with two separate bombsites (Open Area/Staff Room and Tellers'/Archives), so it takes the most attacker traffic. CEO Office windows on 2F overlook the courtyard for an early exterior read.",
    attackTip: "Deny the courtyard windows early on 2F pushes — CEO Office is the most common free pick angle for anchors.",
    defendTip: "1F carries two live sites at once; commit early utility there rather than spreading it thin across the whole map.",
    comboTip: "Defenders: a Kaid or Bandit trick on the Tellers'/Archives wall matters more than people expect — it's the quieter of 1F's two sites and gets under-reinforced relative to Open Area.",
  },
  {
    name: "Chalet", status: "Ranked", verified: true,
    floors: [
      { name: "B", rooms: [R("Wine Cellar", { site: true, g: 1, reinforced: true }), R("Snowmobile Garage", { site: true, g: 1, reinforced: true }), R("Blue Hallway")] },
      { name: "1F", rooms: [R("Gaming Room", { site: true, g: 1, reinforced: true }), R("Bar", { site: true, g: 1, reinforced: true }), R("Kitchen", { site: true, g: 2, reinforced: true }), R("Dining Room", { site: true, g: 2, reinforced: true }), R("Fireplace Hall"), R("West Main Stairs")] },
      { name: "2F", rooms: [R("Office", { site: true, g: 1, reinforced: true }), R("Master Bedroom", { site: true, g: 1, reinforced: true }), R("Trophy Room"), R("Library"), R("Solarium")] },
    ],
    rotations: "1F is the only floor with two separate sites (Gaming Room/Bar and Kitchen/Dining Room). Basement Wine Cellar pairs with Snowmobile Garage, not with anything on 1F.",
    attackTip: "Snowmobile Garage is an under-defended flank into the basement site — use it instead of the obvious main stairs entry.",
    defendTip: "Don't overcommit to one 1F site early; both Gaming Room/Bar and Kitchen/Dining Room are live and attackers can switch reads cheaply.",
    comboTip: "Attackers: a hard-breach on the Kitchen/Dining Room shared wall from Fireplace Hall hits an angle most Chalet anchors don't expect pressure from.",
  },
  {
    name: "Oregon", status: "Ranked", verified: false,
    floors: [
      { name: "B", rooms: [R("Workshop", { site: true, g: 1, reinforced: true }), R("CIC", { site: true, g: 1, reinforced: true }), R("Meeting Hall")] },
      { name: "1F", rooms: [R("Laundry Room", { site: true, g: 1, reinforced: true }), R("Kitchen", { site: true, g: 1, reinforced: true }), R("Chapel"), R("Piano Room")] },
      { name: "3F", rooms: [R("Dorms", { site: true, g: 1, reinforced: true }), R("Kid's Bedroom", { site: true, g: 1, reinforced: true }), R("Value Room")] },
    ],
    rotations: "Piano Room to Kitchen is a soft-wall shortcut both sides use constantly. Tower gives attackers a strong drone/vertical angle onto the upper floor.",
    attackTip: "Use the Tower for early drone reads on the upper floor — it exposes rotates before you commit any utility.",
    defendTip: "Reinforce the Piano-to-Kitchen soft wall early; it's a fast anchor rotate on this map.",
    comboTip: "Defenders: hold Chapel as a roam spot, not an anchor — it sees both the Laundry and Kitchen approach without committing to either site.",
  },
  {
    name: "Border", status: "Ranked", verified: true,
    floors: [
      { name: "B", rooms: [R("Archives", { site: true, g: 1, reinforced: true }), R("Armory Lockers", { site: true, g: 1, reinforced: true }), R("Xray Room"), R("Detention")] },
      { name: "1F", rooms: [R("Customs Inspection", { site: true, g: 1, reinforced: true }), R("Supply Room", { site: true, g: 1, reinforced: true }), R("Tellers", { site: true, g: 2, reinforced: true }), R("Bathroom", { site: true, g: 2, reinforced: true }), R("Waiting Room"), R("Passport Check"), R("Main Lobby")] },
      { name: "2F", rooms: [R("Workshop", { site: true, g: 1, reinforced: true }), R("Ventilation Room", { site: true, g: 1, reinforced: true }), R("Office"), R("East Balcony")] },
    ],
    rotations: "1F carries two live sites (Customs/Supply and Tellers/Bathroom), making it the most heavily trafficked floor. The main courtyard is covered by both 2F Office and Workshop/Ventilation windows at once.",
    attackTip: "Don't group up in the main courtyard — it's covered from multiple upper-floor angles simultaneously.",
    defendTip: "Archives/Armory Lockers in the basement is a strong, compact anchor; don't abandon it for a roam without a confirmed read elsewhere.",
    comboTip: "Attackers: smoke the courtyard before crossing it as a squad — it's one of the most consistently double-covered kill zones in the current ranked pool.",
  },
  {
    name: "Kafe Dostoyevsky", status: "Ranked", verified: true,
    floors: [
      { name: "1F", rooms: [R("Kitchen", { site: true, g: 1, reinforced: true }), R("Service", { site: true, g: 1, reinforced: true }), R("Prep"), R("Freezer")] },
      { name: "2F", rooms: [R("Reading Room", { site: true, g: 1, reinforced: true }), R("Fireplace", { site: true, g: 1, reinforced: true }), R("Mining Room"), R("Piano Lounge")] },
      { name: "3F", rooms: [R("Bar", { site: true, g: 1, reinforced: true }), R("Cocktail Lounge", { site: true, g: 1, reinforced: true }), R("Pillars"), R("Bakery")] },
    ],
    rotations: "3F Bar/Cocktail Lounge is the classic fast-paced site. 2F Reading Room/Fireplace plays slower and more methodical. 1F Kitchen feels safe early but gets opened up from above once attackers start hard-breaching the floor.",
    attackTip: "On a 1F Kitchen push, plan for vertical pressure from 2F — the floor is soft-destructible and gets opened from above constantly.",
    defendTip: "3F Bar/Cocktail is the fastest site to lose ground on; commit to trades early rather than a long isolated hold.",
    comboTip: "Defenders: Mira on the Reading Room/Fireplace divider covers 2F's slower site without giving up the room to a direct push.",
  },
  {
    name: "Consulate", status: "Ranked", verified: true,
    floors: [
      { name: "B", rooms: [R("Garage", { site: true, g: 1, reinforced: true }), R("Cafeteria", { site: true, g: 1, reinforced: true }), R("Servers", { site: true, g: 2, reinforced: true }), R("Archives")] },
      { name: "1F", rooms: [R("Piano Room", { site: true, g: 1, reinforced: true }), R("Exposition Room", { site: true, g: 1, reinforced: true }), R("Tellers", { site: true, g: 2, reinforced: true }), R("Lobby"), R("Press")] },
      { name: "2F", rooms: [R("Meeting Room", { site: true, g: 1, reinforced: true }), R("Consul Office", { site: true, g: 1, reinforced: true }), R("Admin"), R("Projector")] },
    ],
    rotations: "Consulate's fourth site is a cross-floor pair — 1F Tellers plants down into Basement Servers — unusual for the map pool and easy to misread as two separate sites. Piano Room/Exposition on 1F and Meeting Room/Consul Office on 2F are standard single-floor sites.",
    attackTip: "Clear Consul Office windows before massing in the courtyard — it's the map's default free-pick angle on 2F pushes.",
    defendTip: "On Tellers/Servers, coordinate with the floor above or below you — it's the one site on the map where your partner room isn't on your own floor.",
    comboTip: "Attackers: breach Tellers from the Lobby side, not straight through Press — it avoids the angle most Consulate anchors default to holding on that cross-floor site.",
  },
  {
    name: "Coastline", status: "Casual", verified: true,
    floors: [
      { name: "1F", rooms: [R("Blue Bar", { site: true, g: 1, reinforced: true }), R("Sunrise Bar", { site: true, g: 1, reinforced: true }), R("Service Entrance", { site: true, g: 2, reinforced: true }), R("Kitchen", { site: true, g: 2, reinforced: true })] },
      { name: "2F", rooms: [R("Theater", { site: true, g: 1, reinforced: true }), R("Penthouse", { site: true, g: 1, reinforced: true }), R("Hookah Lounge", { site: true, g: 2, reinforced: true }), R("Billiards Room", { site: true, g: 2, reinforced: true })] },
    ],
    rotations: "Both floors carry two separate site pairs (1F: Blue/Sunrise Bar and Service Entrance/Kitchen; 2F: Theater/Penthouse and Hookah Lounge/Billiards Room), so drone reads matter more here than on most maps before committing a breach.",
    attackTip: "Confirm which of the two live sites on your target floor before spending hard-breach utility — the two pairs are on opposite sides of the building.",
    defendTip: "The exterior coast walkway lets attackers bypass the interior entirely; don't leave it completely unwatched while stacked on one site.",
    comboTip: "Defenders: Echo on the Penthouse ceiling covers both the exterior balcony approach and the interior stairwell entry at once.",
  },
  {
    name: "Villa", status: "Casual", verified: false,
    floors: [
      { name: "B", rooms: [R("Wine Cellar", { site: true, g: 1, reinforced: true }), R("Aqua Santa", { site: true, g: 1, reinforced: true }), R("Garage")] },
      { name: "1F", rooms: [R("Gaming Room", { site: true, g: 1, reinforced: true }), R("Salon", { site: true, g: 1, reinforced: true }), R("Kitchen"), R("Billiards")] },
      { name: "2F", rooms: [R("Bedroom", { site: true, g: 1, reinforced: true }), R("Piano Room", { site: true, g: 1, reinforced: true }), R("Balcony")] },
    ],
    rotations: "Gaming Room to Salon is a wide-open rotate defenders tend to avoid holding directly. Garage gives attackers a quiet flank into the Wine Cellar site.",
    attackTip: "Garage is under-checked on most Villa setups — flank the Wine Cellar site through it instead of the main stairs.",
    defendTip: "Don't hold the Gaming Room-Salon opening directly; it's too exposed — play the corners around it.",
    comboTip: "Attackers: a Maverick torch cut low through the Salon soft wall opens a peekhole most Villa anchors never check.",
  },
  {
    name: "Skyscraper", status: "Casual", verified: false,
    floors: [
      { name: "38F", rooms: [R("Server Room", { site: true, g: 1, reinforced: true }), R("Consultant Office", { site: true, g: 1, reinforced: true }), R("Elevators")] },
      { name: "39F", rooms: [R("Executive Lounge", { site: true, g: 1, reinforced: true }), R("Meeting Room", { site: true, g: 1, reinforced: true }), R("Bar")] },
    ],
    rotations: "Elevators connect both floors and both sites, making it the single most valuable hold or deny point on the map. Executive Lounge windows give a strong exterior angle onto the courtyard below.",
    attackTip: "Control the elevator shaft rotate before committing utility — it decides which floor you actually get to pressure.",
    defendTip: "Reinforce around the elevators first; losing that rotate early costs you both site's flexibility.",
    comboTip: "Defenders: Jäger or Bandit gear belongs on the elevator hatch, not just the bombsite wall — it's the map's real chokepoint.",
  },
  {
    name: "Theme Park", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Amusement Arcade", { site: true, g: 1, reinforced: true }), R("Rollercoaster Control", { site: true, g: 1, reinforced: true }), R("Lost & Found"), R("Gift Shop")] },
      { name: "2F", rooms: [R("Toy Factory", { site: true, g: 1, reinforced: true }), R("Assembly Line", { site: true, g: 1, reinforced: true }), R("Break Room")] },
    ],
    rotations: "The 1F is unusually open-plan for the map, favoring roamers over static anchors. Toy Factory's mezzanine gives a vertical angle onto Assembly Line.",
    attackTip: "Drone the 1F open-plan thoroughly — it's easy to walk into three sightlines at once without realizing it.",
    defendTip: "Play Toy Factory from the mezzanine, not the floor — the vertical angle is much safer to hold.",
    comboTip: "Attackers: a Gridlock stinger line on Lost & Found denies the map's most common flank into Amusement Arcade.",
  },
  {
    name: "Outback", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Bar", { site: true, g: 1, reinforced: true }), R("Laundry Room", { site: true, g: 1, reinforced: true }), R("Reception"), R("Kitchen")] },
      { name: "2F", rooms: [R("Mining Office", { site: true, g: 1, reinforced: true }), R("Master Bedroom", { site: true, g: 1, reinforced: true }), R("Workshop")] },
    ],
    rotations: "Bar to Laundry is a short interior rotate defenders lean on. The exterior road around the building lets attackers flank without ever entering through the front.",
    attackTip: "Use the exterior road to flank Mining Office instead of pushing the front stairs every round.",
    defendTip: "Hold Reception loosely as a roam spot — it sees both the Bar and Laundry approach.",
    comboTip: "Defenders: a Frost mat on the exterior window into Mining Office punishes the flank attackers default to on this map.",
  },
  {
    name: "Favela", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Bar", { site: true, g: 1, reinforced: true }), R("Church", { site: true, g: 1, reinforced: true }), R("Blue House")] },
      { name: "2F", rooms: [R("Yellow House", { site: true, g: 1, reinforced: true }), R("Radio Room", { site: true, g: 1, reinforced: true }), R("Rooftop")] },
    ],
    rotations: "The map is built around rooftop-to-rooftop movement more than interior halls — both sides use the exterior alleys constantly. Bar to Church is the main interior rotate.",
    attackTip: "Use rooftop routes to bypass ground-floor chokepoints entirely rather than fighting through them.",
    defendTip: "Watch the rooftops as seriously as the interior — most Favela deaths come from an unwatched exterior angle.",
    comboTip: "Attackers: a Zero camera on an exterior rooftop catches rotates the interior sightlines never will on this map.",
  },
  {
    name: "Hereford Base", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Kennels", { site: true, g: 1, reinforced: true }), R("Laundry Room", { site: true, g: 1, reinforced: true }), R("Locker Room"), R("Garden")] },
      { name: "2F", rooms: [R("Meeting Room", { site: true, g: 1, reinforced: true }), R("Sequoia Room", { site: true, g: 1, reinforced: true }), R("CCTV Room")] },
    ],
    rotations: "Kennels to Laundry is a tight, low-visibility rotate. The Garden gives attackers a full exterior loop around the ground floor.",
    attackTip: "Loop the Garden to hit Kennels from an angle the default anchor setup rarely covers.",
    defendTip: "Kennels rewards close-range holds over long sightlines — play the tight angles, not the open ones.",
    comboTip: "Defenders: a Kapkan trap in the Garden door punishes the exterior flank attackers favor on this map.",
  },
  {
    name: "Kanal", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Cargo Hold", { site: true, g: 1, reinforced: true }), R("Engine Room", { site: true, g: 1, reinforced: true }), R("Cafeteria")] },
      { name: "2F", rooms: [R("Control Room", { site: true, g: 1, reinforced: true }), R("Captain's Quarters", { site: true, g: 1, reinforced: true }), R("Deck")] },
    ],
    rotations: "Cargo Hold to Engine Room is an industrial open-plan rotate with heavy sightlines. The exterior Deck lets attackers bypass the interior entirely to flank Control Room.",
    attackTip: "Deck access is the fastest way onto 2F — use it to split defender attention from the obvious interior push.",
    defendTip: "Cargo Hold's open sightlines punish a static hold; rotate between cover instead of anchoring one spot.",
    comboTip: "Attackers: smoke the Cargo-Engine open lane before crossing it — it's a long, exposed sightline both anchors default to holding.",
  },
  {
    name: "Yacht", status: "Casual", verified: false,
    floors: [
      { name: "Lower Deck", rooms: [R("Engine Room", { site: true, g: 1, reinforced: true }), R("Crew Quarters", { site: true, g: 1, reinforced: true }), R("Cargo Hold")] },
      { name: "Main Deck", rooms: [R("Dining Room", { site: true, g: 1, reinforced: true }), R("Owner's Cabin", { site: true, g: 1, reinforced: true }), R("Lounge")] },
    ],
    rotations: "Engine Room to Crew Quarters is a cramped, close-range rotate. The exterior deck lets attackers loop the whole yacht above water level.",
    attackTip: "The exterior deck loop bypasses most interior chokepoints — use it to flank rather than always pushing through the hull.",
    defendTip: "Lower Deck rewards close-quarters holds; don't try to play long sightlines that don't really exist down there.",
    comboTip: "Defenders: watch the exterior deck as closely as any interior door — it's the map's real flank route, not a side path.",
  },
  {
    name: "Tower", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Reception", { site: true, g: 1, reinforced: true }), R("Break Room", { site: true, g: 1, reinforced: true }), R("Elevator Lobby")] },
      { name: "2F", rooms: [R("Corner Office", { site: true, g: 1, reinforced: true }), R("IT Room", { site: true, g: 1, reinforced: true }), R("Conference Room")] },
    ],
    rotations: "The elevator lobby is the map's central artery, connecting both floors and both sites. Corner Office windows give attackers an exterior read on 2F rotates.",
    attackTip: "Read the Corner Office windows before committing — they expose most 2F rotates before you spend utility.",
    defendTip: "Hold the elevator lobby loosely; losing it early costs both sites their fastest rotate.",
    comboTip: "Defenders: a Melusi Banshee in the elevator lobby slows the single fastest cross-map rotate attackers have.",
  },
  {
    name: "Fortress", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Bunker", { site: true, g: 1, reinforced: true }), R("Prison", { site: true, g: 1, reinforced: true }), R("Courtyard")] },
      { name: "2F", rooms: [R("Throne Room", { site: true, g: 1, reinforced: true }), R("Armory", { site: true, g: 1, reinforced: true }), R("Tower Access")] },
    ],
    rotations: "Bunker to Prison is a fortified, close-range rotate with thick walls that favor defenders. The Courtyard is a wide-open exterior kill zone both sides avoid crossing carelessly.",
    attackTip: "Don't cross the Courtyard as a group — split into two smaller pushes from covered approaches instead.",
    defendTip: "Thick walls favor a slow, methodical hold here; over-rotating gives up the map's natural defensive advantage.",
    comboTip: "Attackers: smoke the Courtyard's exact center before any rotation across it — it's covered from multiple angles simultaneously.",
  },
  {
    name: "Bartlett University", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Auditorium", { site: true, g: 1, reinforced: true }), R("Reading Room", { site: true, g: 1, reinforced: true }), R("Cafeteria")] },
      { name: "2F", rooms: [R("Dorms", { site: true, g: 1, reinforced: true }), R("Chemical Lab", { site: true, g: 1, reinforced: true }), R("Faculty Office")] },
    ],
    rotations: "Auditorium to Reading Room is a wide, multi-level rotate with a lot of vertical sightlines. Cafeteria connects almost every route on 1F.",
    attackTip: "Clear vertical Auditorium sightlines before pushing through — it's easy to get picked from above.",
    defendTip: "Cafeteria is a strong roam spot precisely because it touches so many routes — use it to read the attack, not just hold it.",
    comboTip: "Defenders: an Echo drone on the Auditorium catwalk denies the map's most dangerous vertical angle without exposing a teammate.",
  },
  {
    name: "Close Quarter", status: "Ranked", verified: false,
    floors: [
      { name: "1F", rooms: [R("Lobby", { site: true, g: 1, reinforced: true }), R("Records Room", { site: true, g: 1, reinforced: true }), R("Break Room")] },
      { name: "2F", rooms: [R("Interrogation", { site: true, g: 1, reinforced: true }), R("Armory", { site: true, g: 1, reinforced: true }), R("Server Room")] },
    ],
    rotations: "This map is built compact and close-range by design — nearly every rotate is a short, high-risk hallway. Lobby to Records is the fastest cross-site rotate.",
    attackTip: "Expect close-range trades on almost every entry — stagger pushes more aggressively than on larger maps.",
    defendTip: "Small sightlines punish greedy holds; disengage earlier than you would on a bigger map.",
    comboTip: "Attackers: flash before every doorway here — the map's tight sightlines mean a blind peek is a near-guaranteed trade against you.",
  },
  {
    name: "Emerald Plains", status: "Ranked", verified: true,
    floors: [
      { name: "1F", rooms: [R("Bar", { site: true, g: 1, reinforced: true }), R("Lounge", { site: true, g: 1, reinforced: true }), R("Kitchen", { site: true, g: 2, reinforced: true }), R("Dining Room", { site: true, g: 2, reinforced: true }), R("Pantry"), R("Pool Room")] },
      { name: "2F", rooms: [R("CEO Office", { site: true, g: 1, reinforced: true }), R("Administration", { site: true, g: 1, reinforced: true }), R("Meeting Room", { site: true, g: 2, reinforced: true }), R("Ceramic Gallery", { site: true, g: 2, reinforced: true }), R("Library"), R("Hunting Hall")] },
    ],
    rotations: "Both floors carry two separate site pairs — 1F splits between Bar/Lounge and Kitchen/Dining Room; 2F splits between CEO Office/Administration and Meeting Room/Ceramic Gallery. Kitchen/Dining Room is the most commonly recommended site to learn the map on since it touches most of the layout.",
    attackTip: "Cross the open yard connecting the two halves of the manor in a staggered line — it's a long sightline both sides can hold from range.",
    defendTip: "This map's interior rewards bunker-style setups; the many funnel points favor a patient, trade-focused defense over aggressive roaming.",
    comboTip: "Defenders: Wamai or Jäger at the yard-facing windows denies the grenade spam attackers rely on to safely cross between the manor's two halves.",
  },
  {
    name: "Nighthaven Labs", status: "Ranked", verified: false,
    floors: [
      { name: "1F", rooms: [R("Lobby", { site: true, g: 1, reinforced: true }), R("Server Vault", { site: true, g: 1, reinforced: true }), R("Decontamination")] },
      { name: "2F", rooms: [R("Research Lab", { site: true, g: 1, reinforced: true }), R("Cold Storage", { site: true, g: 1, reinforced: true }), R("Observation Deck")] },
    ],
    rotations: "Lobby to Server Vault is a heavily reinforced industrial rotate. Observation Deck overlooks Research Lab, giving defenders a strong intel angle if held early.",
    attackTip: "Deny Observation Deck before pushing Research Lab — it's the defender's best early-read angle on that site.",
    defendTip: "Server Vault's reinforced layout favors a patient anchor; don't abandon it for a roam unless you have a confirmed read.",
    comboTip: "Attackers: breach Server Vault from Decontamination, not the Lobby — it's the angle least covered by a default anchor.",
  },
  {
    name: "Lair", status: "Casual", verified: false,
    floors: [
      { name: "1F", rooms: [R("Sub Pen", { site: true, g: 1, reinforced: true }), R("Command Center", { site: true, g: 1, reinforced: true }), R("Docking Bay")] },
      { name: "2F", rooms: [R("War Room", { site: true, g: 1, reinforced: true }), R("Communications", { site: true, g: 1, reinforced: true }), R("Crew Bunks")] },
    ],
    rotations: "Sub Pen to Command Center runs along the water's edge with limited cover. Docking Bay gives attackers an exterior route around the whole ground floor.",
    attackTip: "Use Docking Bay's exterior route to avoid the exposed waterside rotate entirely.",
    defendTip: "The waterside path is a long, exposed hold — don't anchor it directly; play the rooms feeding into it instead.",
    comboTip: "Defenders: Fenrir or Melusi at the Sub Pen chokepoint punishes attackers for using the map's one obvious ground-floor route.",
  },
  {
    name: "Stadium", status: "Casual", verified: false,
    floors: [
      { name: "Field Level", rooms: [R("Locker Room", { site: true, g: 1, reinforced: true }), R("Press Box", { site: true, g: 1, reinforced: true }), R("Tunnel")] },
      { name: "Upper Level", rooms: [R("Skybox", { site: true, g: 1, reinforced: true }), R("Broadcast Booth", { site: true, g: 1, reinforced: true }), R("Concourse")] },
    ],
    rotations: "Tunnel connects Field Level directly to the open Field, giving both sides a fast but exposed rotate. Concourse loops the entire Upper Level.",
    attackTip: "Cross the open Field in a staggered line, not grouped — it's covered by multiple upper-level angles at once.",
    defendTip: "Use the Concourse loop to reposition between Skybox and Broadcast Booth without being seen from the Field.",
    comboTip: "Attackers: a Capitão incendiary bolt on the Tunnel choke denies the fastest Field-level rotate defenders have.",
  },
  {
    name: "Calypso Casino", status: "Ranked", verified: false,
    floors: [
      { name: "1F", rooms: [R("Casino Floor", { site: true, g: 1, reinforced: true }), R("Cashier's Cage", { site: true, g: 1, reinforced: true }), R("Lounge Bar")] },
      { name: "2F", rooms: [R("High Roller Suite", { site: true, g: 1, reinforced: true }), R("Security Office", { site: true, g: 1, reinforced: true }), R("Coat Check")] },
    ],
    rotations: "New to the ranked pool as of Y11S2 — a full remake of the Rainbow Six Vegas casino. Published callout data is still thin this soon after release; treat room names and site pairings here as placeholders until the community catalogs them.",
    attackTip: "Take Security Office early — controlling its sightline into Casino Floor denies the defender's best early pick.",
    defendTip: "Don't hold the open Casino Floor directly; play the surrounding rooms and punish attackers for crossing it.",
    comboTip: "This is the newest map in the ranked pool — check in-game for the current live callouts rather than relying on this entry until it's been verified.",
  },
  {
    name: "District", status: "Dual Front", verified: false,
    floors: [
      { name: "Street Level", rooms: [R("Market", { site: true, g: 1, reinforced: true }), R("Metro Entrance", { site: true, g: 1, reinforced: true }), R("Alleyway")] },
      { name: "Underground", rooms: [R("Metro Platform", { site: true, g: 1, reinforced: true }), R("Maintenance Tunnels", { site: true, g: 1, reinforced: true }), R("Storage")] },
    ],
    rotations: "Built for Dual Front's large-scale attacker-vs-attacker mode rather than standard bomb rotations — Metro Entrance is the key vertical connector between Street Level and Underground.",
    attackTip: "In Dual Front, control Metro Entrance first — losing that connector splits your squad across two uncoordinated fights.",
    defendTip: "This map doesn't appear in standard Bomb/Secure rotations — all positioning here is Dual Front specific.",
    comboTip: "Both sides fight over the Metro Platform-to-Street sightline constantly — whoever controls it dictates the pace of the whole objective.",
  },
];

export const MAPS = RAW_MAPS;

/** Bombsite room groupings for a floor, grouped by site-group id, e.g. ["Open Area + Staff Room", "Tellers' Office + Archives"] */
export const siteCombos = (floor) => {
  const groups = new Map();
  floor.rooms.filter((r) => r.site).forEach((r) => {
    const key = r.g ?? r.name;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r.name);
  });
  return [...groups.values()].map((names) => names.join(" + "));
};
