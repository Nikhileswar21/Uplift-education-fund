export const programs = [
  {
    id: "scholarship-fund",
    title: "Scholarship Fund",
    category: "Academics",
    tagline: "Removing financial barriers to higher education",
    description:
      "Our merit-and-need scholarship program identifies exceptional students from underserved communities and funds their full academic journey — from secondary school through university.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    raised: 284000,
    goal: 400000,
    beneficiaries: 1240,
    region: "East Africa & South Asia",
    highlights: [
      "Full tuition coverage for top students",
      "Mentorship paired with academic support",
      "1,240 scholars currently enrolled",
    ],
    impact: [
      { amount: 50, label: "Covers one month of books & supplies" },
      { amount: 150, label: "Pays one month school fees" },
      { amount: 500, label: "Covers half a semester tuition" },
      { amount: 1200, label: "Funds a full semester for one scholar" },
    ],
  },
  {
    id: "school-kits",
    title: "School Kits Program",
    category: "Essentials",
    tagline: "No child should miss school for lack of supplies",
    description:
      "We distribute comprehensive school kits containing notebooks, pens, a backpack, a hygiene kit, and learning materials to children entering school for the first time.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    raised: 96000,
    goal: 120000,
    beneficiaries: 8300,
    region: "Sub-Saharan Africa",
    highlights: [
      "8,300 kits distributed this year",
      "Locally sourced to support community economies",
      "Includes parent and teacher resources",
    ],
    impact: [
      { amount: 15, label: "Provides a complete school kit for 1 child" },
      { amount: 75, label: "Equips an entire classroom" },
      { amount: 200, label: "Supplies a school for a month" },
      { amount: 500, label: "Kits for 33 children starting school" },
    ],
  },
  {
    id: "digital-learning",
    title: "Digital Learning Access",
    category: "Technology",
    tagline: "Bridging the digital divide for rural communities",
    description:
      "We equip community learning centers with tablets, offline-capable software, solar power, and trained facilitators so that children in remote areas can access world-class digital curricula.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    raised: 178000,
    goal: 250000,
    beneficiaries: 3400,
    region: "Southeast Asia & Central America",
    highlights: [
      "42 digital learning hubs established",
      "Solar-powered in off-grid communities",
      "Curriculum aligned with national standards",
    ],
    impact: [
      { amount: 35, label: "Provides one month of digital access" },
      { amount: 200, label: "Funds a tablet for one learning hub" },
      { amount: 800, label: "Powers a learning hub for one month" },
      { amount: 5000, label: "Sets up a complete digital hub" },
    ],
  },
  {
    id: "community-education",
    title: "Community Education",
    category: "Community",
    tagline: "Educating parents empowers entire families",
    description:
      "Our adult literacy and vocational training programs help parents and community members gain skills that directly improve their children's educational outcomes and household stability.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    raised: 52000,
    goal: 80000,
    beneficiaries: 2100,
    region: "Latin America & Caribbean",
    highlights: [
      "Adult literacy programs in 18 communities",
      "Vocational training for 2,100 parents",
      "Measurable improvement in child attendance",
    ],
    impact: [
      { amount: 25, label: "Trains one parent for one month" },
      { amount: 100, label: "Covers a full vocational course" },
      { amount: 350, label: "Funds a community workshop series" },
      { amount: 1000, label: "Sustains a program site for one month" },
    ],
  },
];

export const stats = [
  { value: "14,900+", label: "Children Reached", detail: "Across 23 countries" },
  { value: "$610K", label: "Funds Deployed", detail: "Since 2019" },
  { value: "92%", label: "Program Efficiency", detail: "Of every dollar reaches programs" },
  { value: "1,240", label: "Active Scholars", detail: "Currently in school" },
];

export const testimonials = [
  {
    name: "Amara Diallo",
    role: "Scholar, 2022 cohort",
    location: "Dakar, Senegal",
    quote:
      "Without the Uplift scholarship, university would have been a dream I'd have given up. Today I'm in my second year of engineering. Every single day, I study for the people who believed in me.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    name: "Sofia Reyes",
    role: "Parent, Community Program",
    location: "Guatemala City, Guatemala",
    quote:
      "The literacy program taught me to read alongside my daughter. Now I help her with homework. Our relationship, and her grades, have never been better.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&q=80",
  },
  {
    name: "Rohan Mehta",
    role: "Digital Hub Facilitator",
    location: "Rajasthan, India",
    quote:
      "Children who never touched a computer now write code and make presentations. The digital hub changed what these kids think is possible for themselves.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
];

export const milestones = [
  { year: "2019", title: "Founded", description: "Uplift launched in New York with seed funding from 4 founding donors and a mission to close the education gap." },
  { year: "2020", title: "First 100 Scholars", description: "Despite the global pandemic, we enrolled and supported 100 scholars through remote learning resources." },
  { year: "2021", title: "Expanded to 3 Regions", description: "Programs scaled across East Africa, South Asia, and Latin America with 12 new community partners." },
  { year: "2022", title: "Digital Hubs Launch", description: "We opened 20 solar-powered digital learning hubs in rural communities without internet access." },
  { year: "2023", title: "$1M Raised", description: "Crossed the million-dollar mark in cumulative funding, reaching over 8,000 children across 15 countries." },
  { year: "2024", title: "14,900+ Lives Impacted", description: "Today we operate in 23 countries with a team of 80 staff and 400+ volunteers worldwide." },
];

export const partners = [
  "UNICEF", "World Bank Education", "Gates Foundation", "Open Society", "Ford Foundation", "Aga Khan"
];

export const faqs = [
  {
    question: "How is my donation used?",
    answer:
      "92% of every dollar donated goes directly to our programs. The remaining 8% covers essential operating costs, audited annually by an independent firm.",
  },
  {
    question: "Can I restrict my donation to a specific program?",
    answer:
      "Yes. When you donate, you can designate your gift to any of our four programs: Scholarships, School Kits, Digital Learning, or Community Education.",
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      "Yes. Uplift Education Fund is registered as a 501(c)(3) nonprofit. Donations are tax-deductible to the extent permitted by US law. You'll receive an official receipt.",
  },
  {
    question: "How do I know my donation is making an impact?",
    answer:
      "We publish quarterly impact reports on our website and send personalized updates to donors about the programs their contributions support.",
  },
  {
    question: "Can I set up a recurring donation?",
    answer:
      "Absolutely. Monthly giving is our most impactful donation type — it lets us plan long-term programs and reduce administrative overhead.",
  },
];
