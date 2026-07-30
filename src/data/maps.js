/* ---------- MAP DATABASE ---------- */

const R = (name, opts = {}) => ({ name, site: false, hatch: false, reinforced: false, ...opts });

const RAW_MAPS = [
  {
    name: "Clubhouse", status: "Ranked",
    floors: [
      { name: "B", rooms: [R("Cash Room", { site: true, reinforced: true }), R("Church", { site: true, reinforced: true }), R("Laundry"), R("Arsenal Room")] },
      { name: "1F", rooms: [R("Bar", { site: true, reinforced: true }), R("Stock Room", { site: true, reinforced: true }), R("Main Stairs"), R("Kitchen")] },
      { name: "2F", rooms: [R("Gym", { site: true, reinforced: true }), R("Snake Room", { site: true, reinforced: true }), R("Sea Captain"), R("Roof Access")] },
    ],
    rotations: "Church ↔ Cash Room is a two-way hatch rotate that gets contested early. Bar to Stock is a soft-wall lean-out. Gym roof gives attackers a drone lane into Snake Room before the round starts.",
    attackTip: "Control roof access to Gym before committing to a Snake Room read — it denies the defender's rotate lane.",
    defendTip: "Reinforce the Cash Room hatch early; it's the most contested rotate on the map and gets traded fast.",
    comboTip: "Attackers: Nomad an airjab on the Church-Cash hatch the instant it's clear — removing that hatch rotate is worth more here than almost any other single utility use on the map.",
  },
  {
    name: "Bank", status: "Ranked",
    floors: [
      { name: "B", rooms: [R("Archives", { site: true, reinforced: true }), R("Garage", { site: true, reinforced: true }), R("Server Room"), R("Tellers")] },
      { name: "1F", rooms: [R("Lockers", { site: true, reinforced: true }), R("Open Area", { site: true, reinforced: true }), R("Lobby"), R("Staircase")] },
      { name: "2F", rooms: [R("CEO Office", { site: true, reinforced: true }), R("Executive Lounge", { site: true, reinforced: true }), R("Meeting Room")] },
    ],
    rotations: "Garage to Archives is a fast hard rotate for spawn-peeking defenders. CEO Office window overlooks the courtyard — a common early pick angle for attackers on drone-in.",
    attackTip: "Deny the courtyard windows early on 2F pushes — they're the most common free pick angle for anchors.",
    defendTip: "Garage is a high-traffic entry; stack early utility there rather than spreading thin across both site rooms.",
    comboTip: "Defenders: a Kaid claw on the Garage-Archives hatch stops the single fastest rotate on the map from ever being EMP'd for free — protect that hatch over almost anything else on B.",
  },
  {
    name: "Chalet", status: "Ranked",
    floors: [
      { name: "B", rooms: [R("Wine Cellar", { site: true, reinforced: true }), R("Gaming Room", { site: true, reinforced: true }), R("Boiler Room")] },
      { name: "1F", rooms: [R("Kitchen", { site: true, reinforced: true }), R("Bar", { site: true, reinforced: true }), R("Trophy Room"), R("Snowmobile Garage")] },
      { name: "2F", rooms: [R("Master Bedroom", { site: true, reinforced: true }), R("Office", { site: true, reinforced: true }), R("Bathroom")] },
    ],
    rotations: "Kitchen to Bar is a short, heavily-trafficked rotate that both sides contest constantly. Snowmobile Garage gives attackers a flank into the Bar site from an unusual angle.",
    attackTip: "Snowmobile Garage is under-defended in most setups — use it as a flank into Bar rather than the obvious front door.",
    defendTip: "Don't overcommit to Kitchen early; it's a bait site as often as a real push on lower ranks.",
    comboTip: "Attackers: hard-breach the Kitchen-Bar soft wall from the Trophy Room side — it's the angle least covered by a default Bar anchor setup.",
  },
  {
    name: "Oregon", status: "Ranked",
    floors: [
      { name: "B", rooms: [R("Workshop", { site: true, reinforced: true }), R("CIC", { site: true, reinforced: true }), R("Meeting Hall")] },
      { name: "1F", rooms: [R("Laundry Room", { site: true, reinforced: true }), R("Kitchen", { site: true, reinforced: true }), R("Chapel"), R("Piano Room")] },
      { name: "3F", rooms: [R("Dorms", { site: true, reinforced: true }), R("Kid's Bedroom", { site: true, reinforced: true }), R("Value Room")] },
    ],
    rotations: "Piano Room to Kitchen is a soft-wall shortcut both sides use constantly. Tower gives attackers a strong drone/vertical angle onto the 3F exterior.",
    attackTip: "Use the Tower for early drone reads on 3F — it exposes rotates before you commit any utility.",
    defendTip: "Reinforce the Piano-to-Kitchen soft wall early; it's the fastest anchor rotate on the map.",
    comboTip: "Defenders: hold Chapel as a roam spot, not an anchor — it sees both the Laundry and Kitchen approach without committing to either site.",
  },
  {
    name: "Border", status: "Ranked",
    floors: [
      { name: "B", rooms: [R("Server Room", { site: true, reinforced: true }), R("Archive Room", { site: true, reinforced: true }), R("Xray Room")] },
      { name: "1F", rooms: [R("Customs", { site: true, reinforced: true }), R("Money-Counting Room", { site: true, reinforced: true }), R("Armory Hallway")] },
      { name: "2F", rooms: [R("Office", { site: true, reinforced: true }), R("Armory", { site: true, reinforced: true }), R("Meeting Room")] },
    ],
    rotations: "Server to Archive is a tight hatch rotate defenders lean on heavily. 2F Office windows overlook the main courtyard, giving attackers early exterior picks.",
    attackTip: "Don't group up in the main courtyard — Office and Armory windows both cover it at once.",
    defendTip: "The Server–Archive hatch is a strong anchor point, but predictable; vary who holds it round to round.",
    comboTip: "Attackers: smoke the courtyard before crossing it as a squad — it's a double-covered kill zone on nearly every Border round.",
  },
  {
    name: "Kafe Dostoyevsky", status: "Ranked",
    floors: [
      { name: "2F", rooms: [R("Kitchen", { site: true, reinforced: true }), R("Gold Nugget Room", { site: true, reinforced: true }), R("Bar")] },
      { name: "3F", rooms: [R("Reading Room", { site: true, reinforced: true }), R("Piano Lounge", { site: true, reinforced: true }), R("Bakery")] },
    ],
    rotations: "Kitchen to Gold Nugget is an open, heavily-shot rotate — expect early trades there. Piano Lounge balcony gives attackers a strong exterior drone angle onto 3F.",
    attackTip: "Balcony access on 3F is under-utilized — it bypasses the choke most anchors expect pressure from.",
    defendTip: "Kitchen is exposed on nearly every axis; hold it with trades in mind rather than a long isolated angle.",
    comboTip: "Defenders: Mira on the Kitchen-Gold Nugget divider sees the map's single most contested rotate without ever standing in the open lane itself.",
  },
  {
    name: "Consulate", status: "Ranked",
    floors: [
      { name: "B", rooms: [R("Garage", { site: true, reinforced: true }), R("Consulate Cache", { site: true, reinforced: true }), R("Server Room"), R("Bathrooms")] },
      { name: "1F", rooms: [R("Tellers", { site: true, reinforced: true }), R("Back Hall", { site: true, reinforced: true }), R("Lobby"), R("Kitchen")] },
      { name: "2F", rooms: [R("Consul Office", { site: true, reinforced: true }), R("Meeting Room", { site: true, reinforced: true }), R("Spa")] },
    ],
    rotations: "Garage to Consulate Cache is a fast defender rotate straight up the middle. Consul Office windows overlook the courtyard for an easy exterior drone read.",
    attackTip: "Clear Consul Office windows before massing in the courtyard — it's the map's default free-pick angle.",
    defendTip: "Back Hall connects almost every route on 1F; hold it as a roam lane rather than committing hard early.",
    comboTip: "Attackers: breach Tellers from the Lobby side, not Back Hall — it avoids the angle most Consulate anchors default to holding.",
  },
  {
    name: "Coastline", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Hookah Lounge", { site: true, reinforced: true }), R("Blue Bar", { site: true, reinforced: true }), R("Kitchen"), R("Service Entrance")] },
      { name: "2F", rooms: [R("Penthouse", { site: true, reinforced: true }), R("VIP Lounge", { site: true, reinforced: true }), R("Yacht Room"), R("Sunroom")] },
    ],
    rotations: "Hookah Lounge to Blue Bar is a single open-plan sightline that both anchors contest constantly. The exterior Coast walkway lets attackers rotate the entire map without going through the building.",
    attackTip: "Use the exterior coast path to flank Penthouse instead of always pushing straight through the lobby.",
    defendTip: "The Hookah–Blue Bar open plan punishes a static hold; move between cover rather than sitting one angle.",
    comboTip: "Defenders: Echo on the Penthouse ceiling covers both the exterior balcony and the interior stairwell entry at once.",
  },
  {
    name: "Villa", status: "Casual",
    floors: [
      { name: "B", rooms: [R("Wine Cellar", { site: true, reinforced: true }), R("Aqua Santa", { site: true, reinforced: true }), R("Garage")] },
      { name: "1F", rooms: [R("Gaming Room", { site: true, reinforced: true }), R("Salon", { site: true, reinforced: true }), R("Kitchen"), R("Billiards")] },
      { name: "2F", rooms: [R("Bedroom", { site: true, reinforced: true }), R("Piano Room", { site: true, reinforced: true }), R("Balcony")] },
    ],
    rotations: "Gaming Room to Salon is a wide-open rotate defenders tend to avoid holding directly. Garage gives attackers a quiet flank into the Wine Cellar site.",
    attackTip: "Garage is under-checked on most Villa setups — flank the Wine Cellar site through it instead of the main stairs.",
    defendTip: "Don't hold the Gaming Room-Salon opening directly; it's too exposed — play the corners around it.",
    comboTip: "Attackers: a Maverick torch cut low through the Salon soft wall opens a peekhole most Villa anchors never check.",
  },
  {
    name: "Skyscraper", status: "Casual",
    floors: [
      { name: "38F", rooms: [R("Server Room", { site: true, reinforced: true }), R("Consultant Office", { site: true, reinforced: true }), R("Elevators")] },
      { name: "39F", rooms: [R("Executive Lounge", { site: true, reinforced: true }), R("Meeting Room", { site: true, reinforced: true }), R("Bar")] },
    ],
    rotations: "Elevators connect both floors and both sites, making it the single most valuable hold or deny point on the map. Executive Lounge windows give a strong exterior angle onto the courtyard below.",
    attackTip: "Control the elevator shaft rotate before committing utility — it decides which floor you actually get to pressure.",
    defendTip: "Reinforce around the elevators first; losing that rotate early costs you both site's flexibility.",
    comboTip: "Defenders: Jäger or Bandit gear belongs on the elevator hatch, not just the bombsite wall — it's the map's real chokepoint.",
  },
  {
    name: "Theme Park", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Amusement Arcade", { site: true, reinforced: true }), R("Rollercoaster Control", { site: true, reinforced: true }), R("Lost & Found"), R("Gift Shop")] },
      { name: "2F", rooms: [R("Toy Factory", { site: true, reinforced: true }), R("Assembly Line", { site: true, reinforced: true }), R("Break Room")] },
    ],
    rotations: "The 1F is unusually open-plan for the map, favoring roamers over static anchors. Toy Factory's mezzanine gives a vertical angle onto Assembly Line.",
    attackTip: "Drone the 1F open-plan thoroughly — it's easy to walk into three sightlines at once without realizing it.",
    defendTip: "Play Toy Factory from the mezzanine, not the floor — the vertical angle is much safer to hold.",
    comboTip: "Attackers: a Gridlock stinger line on Lost & Found denies the map's most common flank into Amusement Arcade.",
  },
  {
    name: "Outback", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Bar", { site: true, reinforced: true }), R("Laundry Room", { site: true, reinforced: true }), R("Reception"), R("Kitchen")] },
      { name: "2F", rooms: [R("Mining Office", { site: true, reinforced: true }), R("Master Bedroom", { site: true, reinforced: true }), R("Workshop")] },
    ],
    rotations: "Bar to Laundry is a short interior rotate defenders lean on. The exterior road around the building lets attackers flank without ever entering through the front.",
    attackTip: "Use the exterior road to flank Mining Office instead of pushing the front stairs every round.",
    defendTip: "Hold Reception loosely as a roam spot — it sees both the Bar and Laundry approach.",
    comboTip: "Defenders: a Frost mat on the exterior window into Mining Office punishes the flank attackers default to on this map.",
  },
  {
    name: "Favela", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Bar", { site: true, reinforced: true }), R("Church", { site: true, reinforced: true }), R("Blue House")] },
      { name: "2F", rooms: [R("Yellow House", { site: true, reinforced: true }), R("Radio Room", { site: true, reinforced: true }), R("Rooftop")] },
    ],
    rotations: "The map is built around rooftop-to-rooftop movement more than interior halls — both sides use the exterior alleys constantly. Bar to Church is the main interior rotate.",
    attackTip: "Use rooftop routes to bypass ground-floor chokepoints entirely rather than fighting through them.",
    defendTip: "Watch the rooftops as seriously as the interior — most Favela deaths come from an unwatched exterior angle.",
    comboTip: "Attackers: a Zero camera on an exterior rooftop catches rotates the interior sightlines never will on this map.",
  },
  {
    name: "Hereford Base", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Kennels", { site: true, reinforced: true }), R("Laundry Room", { site: true, reinforced: true }), R("Locker Room"), R("Garden")] },
      { name: "2F", rooms: [R("Meeting Room", { site: true, reinforced: true }), R("Sequoia Room", { site: true, reinforced: true }), R("CCTV Room")] },
    ],
    rotations: "Kennels to Laundry is a tight, low-visibility rotate. The Garden gives attackers a full exterior loop around the ground floor.",
    attackTip: "Loop the Garden to hit Kennels from an angle the default anchor setup rarely covers.",
    defendTip: "Kennels rewards close-range holds over long sightlines — play the tight angles, not the open ones.",
    comboTip: "Defenders: a Kapkan trap in the Garden door punishes the exterior flank attackers favor on this map.",
  },
  {
    name: "Kanal", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Cargo Hold", { site: true, reinforced: true }), R("Engine Room", { site: true, reinforced: true }), R("Cafeteria")] },
      { name: "2F", rooms: [R("Control Room", { site: true, reinforced: true }), R("Captain's Quarters", { site: true, reinforced: true }), R("Deck")] },
    ],
    rotations: "Cargo Hold to Engine Room is an industrial open-plan rotate with heavy sightlines. The exterior Deck lets attackers bypass the interior entirely to flank Control Room.",
    attackTip: "Deck access is the fastest way onto 2F — use it to split defender attention from the obvious interior push.",
    defendTip: "Cargo Hold's open sightlines punish a static hold; rotate between cover instead of anchoring one spot.",
    comboTip: "Attackers: smoke the Cargo-Engine open lane before crossing it — it's a long, exposed sightline both anchors default to holding.",
  },
  {
    name: "Yacht", status: "Casual",
    floors: [
      { name: "Lower Deck", rooms: [R("Engine Room", { site: true, reinforced: true }), R("Crew Quarters", { site: true, reinforced: true }), R("Cargo Hold")] },
      { name: "Main Deck", rooms: [R("Dining Room", { site: true, reinforced: true }), R("Owner's Cabin", { site: true, reinforced: true }), R("Lounge")] },
    ],
    rotations: "Engine Room to Crew Quarters is a cramped, close-range rotate. The exterior deck lets attackers loop the whole yacht above water level.",
    attackTip: "The exterior deck loop bypasses most interior chokepoints — use it to flank rather than always pushing through the hull.",
    defendTip: "Lower Deck rewards close-quarters holds; don't try to play long sightlines that don't really exist down there.",
    comboTip: "Defenders: watch the exterior deck as closely as any interior door — it's the map's real flank route, not a side path.",
  },
  {
    name: "Tower", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Reception", { site: true, reinforced: true }), R("Break Room", { site: true, reinforced: true }), R("Elevator Lobby")] },
      { name: "2F", rooms: [R("Corner Office", { site: true, reinforced: true }), R("IT Room", { site: true, reinforced: true }), R("Conference Room")] },
    ],
    rotations: "The elevator lobby is the map's central artery, connecting both floors and both sites. Corner Office windows give attackers an exterior read on 2F rotates.",
    attackTip: "Read the Corner Office windows before committing — they expose most 2F rotates before you spend utility.",
    defendTip: "Hold the elevator lobby loosely; losing it early costs both sites their fastest rotate.",
    comboTip: "Defenders: a Melusi Banshee in the elevator lobby slows the single fastest cross-map rotate attackers have.",
  },
  {
    name: "Fortress", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Bunker", { site: true, reinforced: true }), R("Prison", { site: true, reinforced: true }), R("Courtyard")] },
      { name: "2F", rooms: [R("Throne Room", { site: true, reinforced: true }), R("Armory", { site: true, reinforced: true }), R("Tower Access")] },
    ],
    rotations: "Bunker to Prison is a fortified, close-range rotate with thick walls that favor defenders. The Courtyard is a wide-open exterior kill zone both sides avoid crossing carelessly.",
    attackTip: "Don't cross the Courtyard as a group — split into two smaller pushes from covered approaches instead.",
    defendTip: "Thick walls favor a slow, methodical hold here; over-rotating gives up the map's natural defensive advantage.",
    comboTip: "Attackers: smoke the Courtyard's exact center before any rotation across it — it's covered from multiple angles simultaneously.",
  },
  {
    name: "Bartlett University", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Auditorium", { site: true, reinforced: true }), R("Reading Room", { site: true, reinforced: true }), R("Cafeteria")] },
      { name: "2F", rooms: [R("Dorms", { site: true, reinforced: true }), R("Chemical Lab", { site: true, reinforced: true }), R("Faculty Office")] },
    ],
    rotations: "Auditorium to Reading Room is a wide, multi-level rotate with a lot of vertical sightlines. Cafeteria connects almost every route on 1F.",
    attackTip: "Clear vertical Auditorium sightlines before pushing through — it's easy to get picked from above.",
    defendTip: "Cafeteria is a strong roam spot precisely because it touches so many routes — use it to read the attack, not just hold it.",
    comboTip: "Defenders: an Echo drone on the Auditorium catwalk denies the map's most dangerous vertical angle without exposing a teammate.",
  },
  {
    name: "Close Quarter", status: "Ranked",
    floors: [
      { name: "1F", rooms: [R("Lobby", { site: true, reinforced: true }), R("Records Room", { site: true, reinforced: true }), R("Break Room")] },
      { name: "2F", rooms: [R("Interrogation", { site: true, reinforced: true }), R("Armory", { site: true, reinforced: true }), R("Server Room")] },
    ],
    rotations: "This map is built compact and close-range by design — nearly every rotate is a short, high-risk hallway. Lobby to Records is the fastest cross-site rotate.",
    attackTip: "Expect close-range trades on almost every entry — stagger pushes more aggressively than on larger maps.",
    defendTip: "Small sightlines punish greedy holds; disengage earlier than you would on a bigger map.",
    comboTip: "Attackers: flash before every doorway here — the map's tight sightlines mean a blind peek is a near-guaranteed trade against you.",
  },
  {
    name: "Emerald Plains", status: "Ranked",
    floors: [
      { name: "1F", rooms: [R("Farmhouse Kitchen", { site: true, reinforced: true }), R("Barn", { site: true, reinforced: true }), R("Silo")] },
      { name: "2F", rooms: [R("Hayloft", { site: true, reinforced: true }), R("Bedroom", { site: true, reinforced: true }), R("Attic Storage")] },
    ],
    rotations: "Barn to Farmhouse Kitchen crosses an open yard that both sides contest at range. The Silo gives attackers a vertical flank onto the Hayloft.",
    attackTip: "Use the Silo's vertical route to flank Hayloft rather than crossing the open yard directly into it.",
    defendTip: "The open yard rewards long-sightline holds; play it from a covered window, not out in the open.",
    comboTip: "Defenders: a Wamai unit at the yard's chokepoint denies the grenade spam attackers rely on to cross that open space safely.",
  },
  {
    name: "Nighthaven Labs", status: "Ranked",
    floors: [
      { name: "1F", rooms: [R("Lobby", { site: true, reinforced: true }), R("Server Vault", { site: true, reinforced: true }), R("Decontamination")] },
      { name: "2F", rooms: [R("Research Lab", { site: true, reinforced: true }), R("Cold Storage", { site: true, reinforced: true }), R("Observation Deck")] },
    ],
    rotations: "Lobby to Server Vault is a heavily reinforced industrial rotate. Observation Deck overlooks Research Lab, giving defenders a strong intel angle if held early.",
    attackTip: "Deny Observation Deck before pushing Research Lab — it's the defender's best early-read angle on that site.",
    defendTip: "Server Vault's reinforced layout favors a patient anchor; don't abandon it for a roam unless you have a confirmed read.",
    comboTip: "Attackers: breach Server Vault from Decontamination, not the Lobby — it's the angle least covered by a default anchor.",
  },
  {
    name: "Lair", status: "Casual",
    floors: [
      { name: "1F", rooms: [R("Sub Pen", { site: true, reinforced: true }), R("Command Center", { site: true, reinforced: true }), R("Docking Bay")] },
      { name: "2F", rooms: [R("War Room", { site: true, reinforced: true }), R("Communications", { site: true, reinforced: true }), R("Crew Bunks")] },
    ],
    rotations: "Sub Pen to Command Center runs along the water's edge with limited cover. Docking Bay gives attackers an exterior route around the whole ground floor.",
    attackTip: "Use Docking Bay's exterior route to avoid the exposed waterside rotate entirely.",
    defendTip: "The waterside path is a long, exposed hold — don't anchor it directly; play the rooms feeding into it instead.",
    comboTip: "Defenders: Fenrir or Melusi at the Sub Pen chokepoint punishes attackers for using the map's one obvious ground-floor route.",
  },
  {
    name: "Stadium", status: "Casual",
    floors: [
      { name: "Field Level", rooms: [R("Locker Room", { site: true, reinforced: true }), R("Press Box", { site: true, reinforced: true }), R("Tunnel")] },
      { name: "Upper Level", rooms: [R("Skybox", { site: true, reinforced: true }), R("Broadcast Booth", { site: true, reinforced: true }), R("Concourse")] },
    ],
    rotations: "Tunnel connects Field Level directly to the open Field, giving both sides a fast but exposed rotate. Concourse loops the entire Upper Level.",
    attackTip: "Cross the open Field in a staggered line, not grouped — it's covered by multiple upper-level angles at once.",
    defendTip: "Use the Concourse loop to reposition between Skybox and Broadcast Booth without being seen from the Field.",
    comboTip: "Attackers: a Capitão incendiary bolt on the Tunnel choke denies the fastest Field-level rotate defenders have.",
  },
  {
    name: "Calypso Casino", status: "Ranked",
    floors: [
      { name: "1F", rooms: [R("Casino Floor", { site: true, reinforced: true }), R("Cashier's Cage", { site: true, reinforced: true }), R("Lounge Bar")] },
      { name: "2F", rooms: [R("High Roller Suite", { site: true, reinforced: true }), R("Security Office", { site: true, reinforced: true }), R("Coat Check")] },
    ],
    rotations: "Casino Floor's open layout is built for long sightlines and roamer picks. Security Office overlooks Casino Floor through a camera-wall gimmick that both sides fight over.",
    attackTip: "Take Security Office early — controlling its sightline into Casino Floor denies the defender's best early pick.",
    defendTip: "Don't hold the open Casino Floor directly; play the surrounding rooms and punish attackers for crossing it.",
    comboTip: "Defenders: Maestro's Evil Eye in Security Office turns the map's signature camera-wall gimmick into a genuine anchor angle instead of just a prop.",
  },
  {
    name: "District", status: "Dual Front",
    floors: [
      { name: "Street Level", rooms: [R("Market", { site: true, reinforced: true }), R("Metro Entrance", { site: true, reinforced: true }), R("Alleyway")] },
      { name: "Underground", rooms: [R("Metro Platform", { site: true, reinforced: true }), R("Maintenance Tunnels", { site: true, reinforced: true }), R("Storage")] },
    ],
    rotations: "Built for Dual Front's large-scale attacker-vs-attacker mode rather than standard bomb rotations — Metro Entrance is the key vertical connector between Street Level and Underground.",
    attackTip: "In Dual Front, control Metro Entrance first — losing that connector splits your squad across two uncoordinated fights.",
    defendTip: "This map doesn't appear in standard Bomb/Secure rotations — all positioning here is Dual Front specific.",
    comboTip: "Both sides fight over the Metro Platform-to-Street sightline constantly — whoever controls it dictates the pace of the whole objective.",
  },
];

export const MAPS = RAW_MAPS;

/** Bombsite room groupings for a floor, e.g. ["Church + Cash Room"] */
export const siteCombos = (floor) => {
  const sites = floor.rooms.filter((r) => r.site).map((r) => r.name);
  return sites.length ? [sites.join(" + ")] : [];
};
