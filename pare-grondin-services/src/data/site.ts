// site.ts — Pare Grondin Services
// ALL copy and content lives here. Zero hard-coded strings in components.
// [DEMO COPY — pending client review] marks content written by Optimus.
// Helen reviews and personalizes these before launch.

export const siteConfig = {
  name: "Pare Grondin Services",
  wordmark: "Helen Grondin", // Visual brand mark used in nav and footer
  tagline: "Where Healthcare Finally Makes Sense",
  description:
    "Helen Grondin helps New Hampshire families, self-employed workers, and COBRA refugees cut their healthcare costs by 40-60% through Impact Health Sharing — a nonprofit alternative to insurance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://paregrondinservices.com",
  location: "Manchester, NH",
  phone: "", // TODO: Helen to provide
  email: "", // TODO: Helen to provide
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/helengrondin", // swap at launch
  tuesdayZoomUrl: "", // TODO: Helen to provide Zoom registration link
  facebookUrl: "", // TODO: Helen to provide Facebook page URL
  instagramUrl: "", // TODO: confirm with Helen
  linkedinUrl: "", // TODO: confirm with Helen
};

export const hero = {
  eyebrow: "New Hampshire Health Sharing Advocate",
  headline: "Stop Paying Twice Your Mortgage in Health Insurance",
  subheadline:
    "I help NH families, freelancers, and business owners cut their healthcare costs by 40-60% — with no networks, no contracts, and no waiting period.",
  priceAnchor: "Plans starting at $73/month",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Join Tuesday's Free Info Session",
  trustLine: "Health sharing is not insurance. It's a community-based alternative — and it changed my family's life.", // [DEMO COPY]
};

export const stats = [
  { value: 73, prefix: "$", suffix: "/mo", label: "Starting monthly contribution", emoji: "💚" },
  { value: 70, suffix: "%+", label: "Average bill repricing before your cost shares", emoji: "📉" },
  { value: 47, suffix: " states", label: "Covered nationwide", emoji: "🗺️" },
  { value: 40, suffix: "+ years", label: "Health sharing model in existence", emoji: "🏛️" },
];

export const painPoints = [
  {
    emoji: "😤",
    headline: "Your premium went up again this year",
    body: "You're healthy. You barely used it. And yet the bill keeps climbing. You deserve a real alternative.",
  },
  {
    emoji: "😰",
    headline: "COBRA costs more than your mortgage",
    body: "Losing your job and getting hit with a $1,800/month COBRA bill at the same time is not a choice — it's a crisis. There's a better option.",
  },
  {
    emoji: "😵",
    headline: "You don't even understand what you're covered for",
    body: "Networks, tiers, EOBs, prior authorization. It shouldn't be this complicated. Health sharing is transparent by design.",
  },
  {
    emoji: "🙏",
    headline: "You're paying premiums and hoping nothing happens",
    body: "Avoiding the doctor because you can't afford the deductible is not healthcare — it's gambling. We fix that.",
  },
];

export const services = [
  {
    slug: "individual-membership",
    emoji: "🧑",
    name: "Individual Membership",
    tagline: "For solo workers, freelancers, and self-employed individuals",
    price: "Starting at $73/month",
    description:
      "Impact Health Sharing membership for a single member. No networks. No annual contracts. Coverage begins the first of the following month — enrollment takes 5 to 7 minutes.",
    features: [
      "Any doctor, anywhere — no network restrictions",
      "Bills repriced 70%+ before your share applies",
      "90/10 cost split (you pay 10% after PRA)",
      "24/7 telehealth — certified doctor, no appointment",
      "Generic prescriptions $10 or under: $0 to you",
      "$150/year wellness credits toward your PRA",
    ],
    whoItsFor: "Self-employed individuals, 1099 contractors, freelancers paying individual ACA premiums",
    cta: "Book a Free Consultation",
  },
  {
    slug: "family-membership",
    emoji: "👨‍👩‍👧‍👦",
    name: "Family Membership",
    tagline: "One shared PRA for the entire household — not per person",
    price: "Starting at $378/month",
    description:
      "Impact Health Sharing membership for your entire household. Your PRA is shared across the family — not stacked per person the way traditional insurance deductibles are. Rate based on oldest member's age only.",
    features: [
      "One shared PRA for the whole family",
      "Rate based on oldest member — not family size",
      "3 teletherapy visits/month/topic per member",
      "ITIN holders accepted — no SSN required",
      "No waiting period — coverage starts first of next month",
      "Month-to-month — cancel anytime, no penalty",
    ],
    whoItsFor: "Families paying $1,000-$2,500/month on ACA or COBRA, households with kids under 18",
    cta: "Book a Free Consultation",
  },
  {
    slug: "senior-supplemental",
    emoji: "👴",
    name: "Senior Supplemental",
    tagline: "Close the gaps Medicare A and B leave open",
    price: "Contact for pricing", // [DEMO COPY — confirm senior rate with Helen]
    description:
      "For seniors already enrolled in Medicare A and B, Impact Health Sharing fills the cost gaps Medicare doesn't cover. A complement — not a replacement — for your existing Medicare benefits.",
    features: [
      "Supplements Medicare A + B coverage gaps",
      "No network restrictions beyond Medicare",
      "Access to all Impact telehealth and wellness benefits",
      "Month-to-month membership",
      "Enrollment takes 5 to 7 minutes",
    ],
    whoItsFor: "NH seniors on Medicare A+B looking for supplemental cost coverage",
    cta: "Book a Free Consultation",
  },
];

export const howItWorks = [
  {
    step: 1,
    emoji: "📅",
    title: "Book a free 30-minute consultation",
    body: "We talk through your current plan, your family situation, and whether health sharing is the right fit. No pressure. If it's not right for you, I'll tell you.",
  },
  {
    step: 2,
    emoji: "🔢",
    title: "See your personalized numbers",
    body: "I'll show you exactly what your monthly contribution would be, what your PRA is, and how much your family would save annually. Real math, not estimates.",
  },
  {
    step: 3,
    emoji: "✍️",
    title: "Enroll in 5 to 7 minutes",
    body: "If you're ready, enrollment is entirely online and takes under 10 minutes. No underwriting. No tax returns. No doctor visits required.",
  },
  {
    step: 4,
    emoji: "💪",
    title: "Coverage starts the first of next month",
    body: "No waiting period. Your membership is active and your savings start immediately. I'm available after enrollment for any questions as you use it for the first time.",
  },
];

export const comparisonTable = {
  heading: "Impact Health Sharing vs. Traditional Insurance",
  subheading: "How the numbers actually compare for NH families",
  columns: ["Feature", "Impact Health Sharing", "ACA Marketplace (NH)", "COBRA (NH average)"],
  rows: [
    ["Monthly cost (family)", "$378-$628", "$1,200-$2,000+", "~$1,700"],
    ["Deductible structure", "Shared family PRA", "Per-person, stacked", "Varies by plan"],
    ["Network restrictions", "None — any provider", "In/out of network penalties", "Varies by plan"],
    ["Annual rate changes", "Locked — no increases", "Increases every year", "N/A"],
    ["Contract", "Month-to-month", "Annual", "Up to 18 months"],
    ["Waiting period", "None", "Open enrollment windows", "None (election window)"],
    ["Bill repricing", "70%+ before your share", "EOB negotiated rates only", "Plan rates"],
    ["Telehealth", "24/7 unlimited, no cost", "Varies / extra cost", "Varies"],
    ["Teletherapy", "3 visits/mo/topic/member", "Rarely bundled", "Rarely bundled"],
  ],
};

export const testimonials = [
  // [DEMO COPY — pending client review]
  // All 32 testimonials written in voice of NH families. Real testimonials replace at launch.
  // See full 32-testimonial set in /testimonials page component.
  {
    id: 1,
    quote: "We were paying $1,450 a month for our Anthem plan. Two kids, both healthy, and we never hit the deductible. Helen walked me through the math on Impact and we switched. We're at $628 now. That's $9,864 back in our budget this year.",
    author: "Jennifer M.",
    location: "Manchester, NH",
    service: "family-membership",
    featured: true,
  },
  {
    id: 2,
    quote: "I got laid off in February and my COBRA was $1,840 a month. I called Helen the same week. She got me enrolled in Impact for $73. I know it's not insurance but honestly the billing support alone has been worth it.",
    author: "David K.",
    location: "Nashua, NH",
    service: "individual-membership",
    featured: true,
  },
  {
    id: 3,
    quote: "I was skeptical. I asked Helen every hard question I could think of. She answered every single one honestly, including the things Impact doesn't cover. That honesty is what made me trust her. We have been members for six months and we are very happy.",
    author: "Tom and Rachel S.",
    location: "Concord, NH",
    service: "family-membership",
    featured: true,
  },
];

export const faqs = [
  {
    category: "The basics",
    emoji: "🌱",
    questions: [
      {
        q: "Is health sharing legal in New Hampshire?",
        a: "Yes. Health sharing organizations that qualify as Health Care Sharing Ministries under federal law (Section 5000A of the ACA) are exempt from state insurance regulation. Impact Health Sharing is a federally qualified 501(c)(3) nonprofit HCSM operating legally in New Hampshire and 47 other states. I recommend reading Impact's program guidelines and talking to me before enrolling — I want you to understand exactly what you're joining.",
      },
      {
        q: "Is Impact Health Sharing real insurance?",
        a: "No. Health sharing is not insurance, and I will never tell you it is. Members share each other's eligible medical costs through a community pool. Sharing is not legally guaranteed — no health sharing organization can guarantee payment the way an insurance policy can. What Impact has is a 40-year track record of sharing medical costs, a strong nonprofit structure, and a transparency model that is completely unlike the organizations that have faced regulatory action.",
      },
      {
        q: "I heard about health sharing scandals. Why is Impact different?",
        a: "You're right to ask. Aliera Health (including Trinity HealthShare, which operated in NH) was shut down by the NH Insurance Department in 2020 for operating as an unlicensed insurance company and leaving members with unpaid bills. Sharity filed for bankruptcy. Liberty HealthShare faced a ProPublica investigation for financial misconduct. These are real cases and they matter. Impact Health Sharing is different in three key ways: it is a genuine 501(c)(3) nonprofit (not a for-profit company with a religious label), it has operated continuously since 1984 under consistent program guidelines, and 100% of member contributions go to sharing costs — not to family-owned vendor contracts. I would not have enrolled my own family if I had not verified this.",
      },
    ],
  },
  {
    category: "Costs and coverage",
    emoji: "💰",
    questions: [
      {
        q: "What is the PRA and how does it work?",
        a: "PRA stands for Personal Responsibility Amount — it is the equivalent of a deductible, but it works differently. For a family plan, there is ONE shared PRA for the entire household, not one per person. Traditional insurance stacks a deductible per person, which means a family of four can face $30,000 in out-of-pocket exposure before insurance pays anything. Impact's family PRA is typically $2,500-$10,000 depending on the plan you choose, shared across everyone.",
      },
      {
        q: "How does bill repricing work?",
        a: "When you have a medical expense, Impact's bill negotiation team contacts the provider and reprices the bill using Reference Based Pricing — typically reducing it by 70% or more before your cost-sharing responsibility is even calculated. The $9,781 emergency room visit that became $283 is a real member example, not a cherry-picked outlier. This repricing happens before you owe anything.",
      },
      {
        q: "Does Impact cover pre-existing conditions?",
        a: "Impact Health Sharing does not exclude pre-existing conditions permanently, but there is a sharing limitation period — typically 12 to 36 months after joining — during which expenses related to pre-existing conditions may not be eligible for sharing. After that period, they are treated like any other eligible expense. This is a real limitation and I always explain it before anyone enrolls. If you have an active, ongoing condition, I will walk you through whether Impact makes sense for your specific situation.",
      },
    ],
  },
  {
    category: "Getting started",
    emoji: "🚀",
    questions: [
      {
        q: "How long does enrollment take?",
        a: "5 to 7 minutes online. You will need your date of birth and basic household information. No tax returns. No income verification. No medical underwriting. Coverage begins the first of the following month.",
      },
      {
        q: "What happens after I enroll?",
        a: "You receive a welcome email from Impact with your membership details and digital ID. You can use any doctor, any hospital, or any urgent care facility — you present as a cash-pay patient and request the self-pay rate. Impact's member services team handles bill submission, negotiation, and sharing on your behalf. I am available by phone or email for any questions after you enroll.",
      },
      {
        q: "Can I switch back to traditional insurance if I don't like it?",
        a: "Yes. Impact is month-to-month. There is no annual contract and no cancellation penalty. If you lose your job and become eligible for employer-sponsored insurance, or if your life situation changes, you can cancel at any time. You would need to enroll in a new insurance plan during an eligible enrollment period, but there is no penalty or waiting period from Impact's side.",
      },
    ],
  },
];

export const blogPreviews = [
  {
    slug: "health-sharing-new-hampshire-guide-2026",
    title: "Health Sharing in New Hampshire: The Complete 2026 Guide for Granite Staters",
    excerpt: "No health sharing content ranks for any NH search query. We wrote the guide NH families needed.",
    date: "2026-04-01",
    readTime: "12 min read",
  },
  {
    slug: "cobra-alternative-new-hampshire",
    title: "Lost Your Job in NH? Why Health Sharing Beats COBRA for Most Families",
    excerpt: "COBRA in NH averages $1,700/month for a family. Here is the math on your real alternative.",
    date: "2026-03-28",
    readTime: "8 min read",
  },
  {
    slug: "aca-subsidies-expired-2026",
    title: "ACA Subsidies Expired: What NH Families Are Doing Instead in 2026",
    excerpt: "The expanded subsidies ended December 2025. Average NH premiums jumped 21%. Here is what changed.",
    date: "2026-03-15",
    readTime: "7 min read",
  },
];

export const quizConfig = {
  title: "Find Out How Much You Could Save",
  subtitle: "Answer 4 quick questions. Get your personalized savings estimate.",
  steps: [
    {
      id: "coverage-type",
      question: "What type of coverage do you currently have?",
      options: [
        { value: "aca", label: "ACA marketplace plan", emoji: "🏥" },
        { value: "cobra", label: "COBRA from a former employer", emoji: "😰" },
        { value: "employer", label: "Employer-sponsored plan", emoji: "🏢" },
        { value: "none", label: "No coverage right now", emoji: "🙏" },
      ],
    },
    {
      id: "family-size",
      question: "Who needs coverage?",
      options: [
        { value: "just-me", label: "Just me", emoji: "🧑" },
        { value: "me-partner", label: "Me and my partner", emoji: "👫" },
        { value: "small-family", label: "Family with 1-2 kids", emoji: "👨‍👩‍👦" },
        { value: "larger-family", label: "Family with 3+ kids", emoji: "👨‍👩‍👧‍👦‍👧" },
      ],
    },
    {
      id: "monthly-spend",
      question: "What are you paying per month right now?",
      options: [
        { value: "under-300", label: "Under $300/month", emoji: "💚" },
        { value: "300-700", label: "$300-$700/month", emoji: "🤔" },
        { value: "700-1500", label: "$700-$1,500/month", emoji: "😤" },
        { value: "over-1500", label: "Over $1,500/month", emoji: "🔥" },
      ],
    },
    {
      id: "biggest-concern",
      question: "What matters most to you right now?",
      options: [
        { value: "cost", label: "Cutting my monthly cost", emoji: "💰" },
        { value: "flexibility", label: "Choosing any doctor I want", emoji: "🩺" },
        { value: "trust", label: "Understanding what I'm getting into", emoji: "🤝" },
        { value: "speed", label: "Getting covered fast", emoji: "⚡" },
      ],
    },
  ],
  resultCta: "Book a Free Consultation to See Your Exact Numbers",
};

// Pricing page — Optimus sales tool. Deleted before launch.
export const pricingTiers = [
  {
    name: "Starter",
    price: 1500,
    deposit: 750,
    badge: null,
    description: "Professional foundation to launch your digital presence",
    features: [
      "Animated hero section (3-layer particle + SVG)",
      "Homepage with all core sections",
      "About, Services, Contact, FAQ pages",
      "32 testimonials page",
      "Mobile-first responsive design",
      "SEO foundation (schema, meta, sitemap)",
      "Vercel deployment",
    ],
  },
  {
    name: "Pro",
    price: 3000,
    deposit: 1500,
    badge: "Most Popular",
    description: "Full conversion stack with blog, quiz, and booking calendar",
    features: [
      "Everything in Starter",
      "Multi-step quiz with lead capture + Resend",
      "Custom branded Calendly booking calendar",
      "Blog with 9-10 NH-focused AEO articles",
      "Savings calculator (interactive)",
      "NH comparison table",
      "Google Analytics 4",
    ],
  },
  {
    name: "Premium",
    price: 5500,
    deposit: 2750,
    badge: null,
    description: "Everything in Pro plus a full e-commerce shop",
    features: [
      "Everything in Pro",
      "Printful print-on-demand shop",
      "Stripe checkout integration",
      "Product variant picker",
      "Cart drawer + checkout flow",
    ],
  },
];
