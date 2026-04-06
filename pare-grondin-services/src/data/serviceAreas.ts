// serviceAreas.ts — 10 NH cities for programmatic service area pages
// Each city gets a unique page at /service-areas/[slug]
// Local SEO: city-specific title, meta, H1, and demographic callouts

export interface ServiceArea {
  name: string;
  slug: string;
  county: string;
  population: string;
  tagline: string;          // hero subline unique to this city
  demographicNote: string;  // who in this city is the target
  localHook: string;        // city-specific pain point / angle
  nearbyAreas: string[];    // mentioned in copy for long-tail SEO
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Manchester",
    slug: "manchester",
    county: "Hillsborough County",
    population: "115,000+",
    tagline: "NH's largest city has some of its highest insurance premiums. There's a better option.",
    demographicNote: "Manchester's large self-employed population — freelancers, contractors, and small business owners — pays full ACA market rates with no employer subsidy.",
    localHook: "Manchester residents on the ACA marketplace are paying an average of $480–$940/month for individual coverage. Impact Health Sharing members in the same situation pay $73–$198/month.",
    nearbyAreas: ["Bedford", "Hooksett", "Goffstown", "Auburn"],
  },
  {
    name: "Concord",
    slug: "concord",
    county: "Merrimack County",
    population: "44,000+",
    tagline: "The state capital has no shortage of state workers — but if you're self-employed, you're on your own.",
    demographicNote: "Concord's self-employed professionals, consultants, and small business owners carry the full cost of individual health coverage with no group rate to fall back on.",
    localHook: "Concord-area families switching from Anthem or Harvard Pilgrim to Impact Health Sharing typically cut their monthly contributions by 40–60% with no network restrictions.",
    nearbyAreas: ["Bow", "Pembroke", "Loudon", "Hopkinton"],
  },
  {
    name: "Nashua",
    slug: "nashua",
    county: "Hillsborough County",
    population: "91,000+",
    tagline: "Nashua is one of the most expensive cities in NH for health insurance. It doesn't have to be.",
    demographicNote: "Nashua's tech corridor and high concentration of independent consultants means thousands of residents are paying full individual market rates — often over $1,000/month for a family.",
    localHook: "Nashua-area tech contractors and consultants are ideal candidates for health sharing — high income, generally healthy, and absorbing the full cost of insurance without an employer contribution.",
    nearbyAreas: ["Merrimack", "Milford", "Hudson", "Hollis"],
  },
  {
    name: "Portsmouth",
    slug: "portsmouth",
    county: "Rockingham County",
    population: "22,000+",
    tagline: "Portsmouth's booming creative and hospitality economy runs on self-employed talent. Their health coverage shouldn't cost a mortgage.",
    demographicNote: "Portsmouth's thriving small business scene — restaurants, boutiques, design studios, and tourism operators — is full of self-employed owners paying individual market rates.",
    localHook: "Seacoast NH residents often face premium hikes when Anthem and Harvard Pilgrim adjust their regional rates. Health sharing contributions are stable and predictable month to month.",
    nearbyAreas: ["Dover", "Exeter", "Hampton", "Newington"],
  },
  {
    name: "Dover",
    slug: "dover",
    county: "Strafford County",
    population: "33,000+",
    tagline: "Dover's growing economy is creating more self-employed workers every year. Most are overpaying for health coverage.",
    demographicNote: "Dover and the greater Strafford County area have seen strong growth in independent contractors and small businesses, many of whom are navigating individual health coverage for the first time.",
    localHook: "UNH Health and Wentworth-Douglass Hospital serve the Dover area. Impact Health Sharing works with both — bills are repriced before your cost-sharing even applies.",
    nearbyAreas: ["Rochester", "Somersworth", "Durham", "Barrington"],
  },
  {
    name: "Rochester",
    slug: "rochester",
    county: "Strafford County",
    population: "32,000+",
    tagline: "Rochester families shouldn't have to choose between a mortgage and health coverage.",
    demographicNote: "Rochester's working-class and trades-heavy economy means many residents are self-employed contractors or small shop owners without access to group health plans.",
    localHook: "Rochester-area tradespeople — electricians, plumbers, HVAC techs — running their own businesses are among the most common people Helen works with. Monthly contributions of $73–$198 versus $400–$800 on an ACA plan.",
    nearbyAreas: ["Farmington", "Milton", "Strafford", "Somersworth"],
  },
  {
    name: "Keene",
    slug: "keene",
    county: "Cheshire County",
    population: "23,000+",
    tagline: "Keene's independent business community deserves health coverage that works as hard as they do.",
    demographicNote: "Keene's arts, agriculture, and small manufacturing community has a high percentage of self-employed residents who pay full ACA rates or go without coverage entirely.",
    localHook: "Cheshire County residents are often unaware that health sharing is available statewide — there's no network, no regional limitation, and no referral required to see any provider.",
    nearbyAreas: ["Swanzey", "Walpole", "Marlborough", "Brattleboro VT"],
  },
  {
    name: "Laconia",
    slug: "laconia",
    county: "Belknap County",
    population: "17,000+",
    tagline: "Lakes Region entrepreneurs and seasonal business owners need coverage that doesn't punish them for being self-employed.",
    demographicNote: "Laconia and the Lakes Region attract seasonal tourism operators, boat dealers, campground owners, and hospitality workers — many of whom are self-employed or run small family businesses.",
    localHook: "Seasonal income makes ACA subsidies unpredictable from year to year. Health sharing contributions are flat and consistent regardless of how your annual income fluctuates.",
    nearbyAreas: ["Meredith", "Gilford", "Belmont", "Tilton"],
  },
  {
    name: "Derry",
    slug: "derry",
    county: "Rockingham County",
    population: "34,000+",
    tagline: "Derry is one of NH's fastest-growing communities — and one of its most underserved when it comes to affordable health coverage.",
    demographicNote: "Derry's location between Manchester and the Massachusetts border makes it a hub for commuters and self-employed residents who don't qualify for Massachusetts subsidies but still face individual market pricing.",
    localHook: "Many Derry residents work in Massachusetts but live in NH, losing access to employer benefits when they go independent. Health sharing fills that gap immediately — no waiting period.",
    nearbyAreas: ["Londonderry", "Salem", "Windham", "Chester"],
  },
  {
    name: "Salem",
    slug: "salem",
    county: "Rockingham County",
    population: "30,000+",
    tagline: "Salem sits at the NH-MA border — the perfect place to leave expensive Massachusetts insurance behind.",
    demographicNote: "Salem is a magnet for Massachusetts residents who've moved north for lower taxes and cost of living, often leaving employer-sponsored insurance behind and facing sticker shock on individual market premiums.",
    localHook: "Former Massachusetts residents in Salem are often comparing NH ACA premiums to what they paid through a Massachusetts employer. The jump is dramatic. Health sharing offers a real middle ground.",
    nearbyAreas: ["Windham", "Derry", "Pelham", "Methuen MA"],
  },
];
