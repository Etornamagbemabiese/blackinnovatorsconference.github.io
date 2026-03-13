export interface TeamMember {
  name: string;
  image: string;
  title?: string;
  bio: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Austin Dumas",
    image: "/headshots/austin-dumas.jpeg",
    title: "Intern @ EY | President, UNC MBSA | Kenan-Flagler",
    bio: [
      "Junior studying business, economics & French",
      "Consultant @ 180 Degrees Consulting",
      "Ron Brown Captain",
      "Light on the Hill Scholar",
    ],
  },
  {
    name: "Raven Heyward",
    image: "/headshots/raven-heyward.jpeg",
    title: "Incoming Analyst @ Visa | Luther Hodges Scholar",
    bio: [
      "Senior @ UNC Kenan-Flagler",
      "Founder of DiversifyHER Podcast",
      "Order of the Golden Fleece",
      "Will Fellow & Light on the Hill Scholar",
    ],
  },
  {
    name: "Alaina Parker",
    image: "/headshots/alaina-parker.jpeg",
    title: "Biomedical Engineering @ UNC | Chancellor's Science Scholar",
    bio: [
      "4th year BME, Pharmaco-Engineering concentration",
      "President of STEM Sisters",
      "Research @ UNC Eshelman School of Pharmacy",
      "Phi Beta Kappa",
    ],
  },
  {
    name: "Etornam Agbemabiese",
    image: "/headshots/etornam-agbemabiese.jpeg",
    title: "Business & Computer Science @ UNC | MLT Scholar",
    bio: [
      "Incoming Redwoods Summer Analyst @ DaVita",
      "Vice President, UNC MBSA",
      "VCIC Fellow & STAR Consultant",
      "Durham Institute for Responsible Citizenship Fellow",
    ],
  },
  {
    name: "Nicole Pyles",
    image: "/headshots/nicole-pyles.jpeg",
    title: "Co-President, MBSA | MLT Career Prep Fellow",
    bio: [
      "1st degree black belt in Taekwondo",
      "Founder of Cole's Corner baking business",
      "Marketing & brand strategy focus",
      "Her Campus Certified Content Creator",
    ],
  },
  {
    name: "Grace",
    image: "/headshots/grace.png",
    title: "Programming & Experience Lead",
    bio: [
      "Helps design the flow of the Warrior Connection Experience",
      "Focuses on attendee journey and on-site experience",
      "Passionate about creating spaces where Black students feel seen",
    ],
  },
  {
    name: "Vanessa",
    image: "/headshots/vanessa.png",
    title: "Partnerships & Outreach",
    bio: [
      "Builds relationships with campus and corporate partners",
      "Helps align sponsors with student opportunities",
      "Committed to expanding access to career pathways",
    ],
  },
  {
    name: "Candice",
    image: "/headshots/candice.png",
    title: "Operations & Logistics",
    bio: [
      "Oversees event logistics and volunteer coordination",
      "Keeps programming running smoothly behind the scenes",
      "Dedicated to excellence in every detail of the conference",
    ],
  },
];
