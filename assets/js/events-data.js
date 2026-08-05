/* ============================================================
   ACM Student Chapter — Events Data
   Single source of truth for all 6 event categories.
   To update: flip status "upcoming" → "past" when an event ends.
   ============================================================ */

/* ---- Category Metadata ---- */
var EV_CATEGORIES = {
  technizen: {
    key: 'technizen',
    name: 'Technizen',
    abbr: 'TZ',
    color: '#c8a13a',
    cssVar: '--ev-technizen',
    slug: 'technizen',
    description: 'Our flagship annual technical fest — six competitive sub-events across one weekend.',
    url: null,          // handled by sub-event grid toggle on events.html
    openMaster: 'TECHNIZEN'
  },
  hourOfCode: {
    key: 'hourOfCode',
    name: 'Hour of Code',
    abbr: 'HC',
    color: '#2e7d6b',
    cssVar: '--ev-hoc',
    slug: 'hour-of-code',
    description: 'Volunteer visits to local schools introducing programming basics to young students.',
    url: 'events/hour-of-code.html'
  },
  outreach: {
    key: 'outreach',
    name: 'Outreach Programs',
    abbr: 'OP',
    color: '#b5502f',
    cssVar: '--ev-outreach',
    slug: 'outreach-programs',
    description: 'Community-facing initiatives that take CSE knowledge beyond the campus boundary.',
    url: 'events/outreach-programs.html'
  },
  guestLectures: {
    key: 'guestLectures',
    name: 'Guest Lectures',
    abbr: 'GL',
    color: '#6b4a8a',
    cssVar: '--ev-guest',
    slug: 'guest-lectures',
    description: 'Industry professionals and academics invited to speak with CSE students.',
    url: 'events/guest-lectures.html'
  },
  intraCollege: {
    key: 'intraCollege',
    name: 'Intra-college Tech Events',
    abbr: 'IT',
    color: '#14509e',
    cssVar: '--ev-intra',
    slug: 'intra-college-events',
    description: 'Coding contests, hackathons, and quizzes run within the college.',
    url: 'events/intra-college-events.html'
  },
  workshops: {
    key: 'workshops',
    name: 'Technical Workshops',
    abbr: 'WS',
    color: '#4a7a3d',
    cssVar: '--ev-workshop',
    slug: 'workshops',
    description: 'Hands-on sessions building practical skills outside the regular curriculum.',
    url: 'events/workshops.html'
  }
};

/* ---- Chart Data: total events per year per category ----
   Order of keys must match EV_CATEGORIES keys above.
   Values are counts of instances that year.                  */
var EV_CHART_DATA = [
  { year: 2018, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 1, intraCollege: 0, workshops: 0 },
  { year: 2019, technizen: 0, hourOfCode: 2, outreach: 1, guestLectures: 2, intraCollege: 1, workshops: 1 },
  { year: 2020, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 1, intraCollege: 0, workshops: 0 },
  { year: 2021, technizen: 0, hourOfCode: 2, outreach: 2, guestLectures: 3, intraCollege: 2, workshops: 1 },
  { year: 2022, technizen: 0, hourOfCode: 3, outreach: 3, guestLectures: 4, intraCollege: 2, workshops: 2 },
  { year: 2023, technizen: 0, hourOfCode: 4, outreach: 3, guestLectures: 5, intraCollege: 3, workshops: 3 },
  { year: 2024, technizen: 0, hourOfCode: 4, outreach: 4, guestLectures: 6, intraCollege: 3, workshops: 3 },
  { year: 2025, technizen: 0, hourOfCode: 5, outreach: 4, guestLectures: 8, intraCollege: 4, workshops: 4 },
  { year: 2026, technizen: 1, hourOfCode: 5, outreach: 3, guestLectures: 3, intraCollege: 4, workshops: 2 }
];

/* ---- Instance Arrays ---- */

var EV_TECHNIZEN = [
  {
    year: 2026,
    status: 'upcoming',
    title: 'Technizen 2K26',
    description: 'The inaugural edition of our flagship fest — six technical sub-events competing for the top prize.',
    fields: {
      'Sub-events': '6 competitions',
      'Theme': 'Beyond Limits',
      'Dates': '20–21 Aug 2026',
      'Venue': 'R.V.R. & J.C. College of Engineering'
    },
    registerUrl: 'https://forms.gle/pvjNgiCEq3Ao3XE36',
    photo: null,
    category: 'technizen'
  }
];

var EV_HOUR_OF_CODE = [
  {
    year: 2018,
    status: 'past',
    title: 'Zilla Parishad High School, Chowdavaram',
    description: 'First Hour of Code visit — 2 volunteers, block-based coding for Grade 8, 60+ students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Sankar Vilas High School & Govt. High School, Koritepadu',
    description: 'Two-school sprint — scratch-based activities, 120 students introduced to programming.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Online — Three Schools (Virtual Format)',
    description: 'Shifted to virtual sessions due to the pandemic; smaller batches but full reach maintained.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Hybrid — Two Schools In-Person, One Online',
    description: 'Returned partially in-person; introduced basic Python activities for the first time.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Six Schools in One Week',
    description: 'First multi-school sprint — 40+ volunteer hours, Arduino demonstration added to curriculum.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Outreach Sprint — Guntur District',
    description: 'Four schools, 350+ students; first collaboration with district education office.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Formal Tie-up with District Education Dept.',
    description: 'Official partnership extended reach to two neighbouring mandals; 500+ students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2025,
    status: 'past',
    title: '27th School Reached — Milestone Visit',
    description: 'Milestone outing; feeds into Technizen 2026 outreach segment. 600+ students reached.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Pre-Technizen Schools Drive — 5 Schools',
    description: 'Five schools in the run-up to Technizen; introduced AI concepts to middle-school students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  }
];

var EV_OUTREACH = [
  {
    year: 2018,
    status: 'past',
    title: 'Digital Literacy Camp — Chowdavaram',
    description: 'First community initiative; taught basic computer usage to 80 non-student attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Code for Farmers — GIS Awareness Session',
    description: 'Demonstrated mobile-based agricultural apps to farmers in collaboration with the CSE dept.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Online Awareness — Cyber Safety for Parents',
    description: 'Webinar on internet safety for school parents; 200+ registrations.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Tech for Women — Digital Finance Workshop',
    description: 'Partnered with self-help groups; taught UPI, digital banking basics.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2021,
    status: 'past',
    title: 'E-Waste Awareness Drive',
    description: 'Campus and community event on responsible electronics disposal.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Open Source Day — Community Contributions',
    description: 'Students guided community members in contributing to open-source tools.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Coding for Social Good — NGO Partnership',
    description: 'Built a simple inventory system for a local NGO; 8-member student team.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Health App Awareness Camp',
    description: 'Demonstrated government health apps (Aarogya Setu, eSanjeevani) at a local health fair.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Digital Village Project — Pedakakani',
    description: 'Two-day initiative helping villagers with e-services, ration card updates, UIDAI.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Career Tech Fair — Junior Colleges',
    description: 'Visited three junior colleges presenting CSE career paths to Intermediate students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Women in Tech Panel — Community College',
    description: 'Panel discussion on tech careers for women; 150+ attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2024,
    status: 'past',
    title: 'AI for All — Public Awareness Drive',
    description: 'Explained AI concepts to general public at the Guntur District Science Exhibition.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Smart Agriculture Hackathon (Community)',
    description: 'Open hackathon inviting engineering students across Guntur to solve agricultural tech problems.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Tech Mentor Program — School Partnership',
    description: 'Semester-long mentorship of 30 school students by ACM chapter members.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Cybersecurity Awareness for Senior Citizens',
    description: 'Workshop on online fraud prevention for senior citizens at a community centre.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Digital Literacy for Rural Youth',
    description: 'Four-day immersive camp for rural youth covering smartphones, internet, and government e-services.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Tech for Social Impact Symposium',
    description: 'Multi-college symposium on using technology for societal good; 12 paper presentations.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Open Source Contribution Drive',
    description: 'Guided 40+ students in their first open-source pull request during Hacktoberfest.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Digital Inclusion Workshop — PWD Community',
    description: 'Accessibility-focused tech session for persons with disabilities; assistive tech demonstrations.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Smart City Ideas Expo — Guntur Municipal',
    description: 'Partnered with Guntur Smart City mission to present student tech ideas to civic officials.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2026,
    status: 'past',
    title: 'AI Ethics Roadshow — Three Colleges',
    description: 'Awareness sessions on responsible AI use, deepfakes, and data privacy at partner colleges.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Tech for Farmers — Season 2',
    description: 'Second edition of the farming app demo with expanded IoT sensor demonstrations.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  }
];

var EV_GUEST_LECTURES = [
  {
    year: 2018,
    status: 'past',
    title: 'Mr. K. Suresh — Introduction to Data Engineering',
    description: 'First guest lecture; attended by CSE final years, 90+ students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Dr. P. Meena — Machine Learning in Industry',
    description: 'Online session during the pandemic; recorded and shared with all years.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Ms. R. Varma — Product Engineering at Scale',
    description: 'First lecture open to all departments, not just CSE — 200+ attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Dr. S. Iyer — Cloud Native Architectures',
    description: 'Virtual session; interactive Q&A with 150 live attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Mr. A. Prakash — DevOps in the Real World',
    description: 'Covered CI/CD pipelines, containerisation; included a live GitHub Actions demo.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Dr. L. Rao — Natural Language Processing',
    description: 'Research-oriented talk on NLP for Indian regional languages.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Ms. N. Krishnamurthy — Startup Journeys in Deep Tech',
    description: 'Entrepreneur spotlight; covered fundraising, team building, and product pivots.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Dr. B. Chakravarti — Quantum Computing Fundamentals',
    description: 'Introductory talk on quantum gates and algorithms; highly attended.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Mr. V. Anand — Full-Stack Development Industry Perspectives',
    description: 'Covered modern web stacks, deployment, and what companies look for in candidates.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Dr. M. Patel — Ethics in AI',
    description: 'Explored bias, fairness, and accountability in machine learning systems.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Ms. S. Kaur — Cybersecurity Careers',
    description: 'Practical overview of red teaming, bug bounties, and certifications for students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Dr. R. Fernandes — Generative AI and Large Language Models',
    description: 'Deep dive into transformer architectures and the rise of ChatGPT-era models.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Mr. T. Reddy — Open Source and Career Growth',
    description: 'How to leverage open-source contributions for internships and full-time roles.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Dr. A. Joshi — Distributed Systems in Production',
    description: 'Case studies from large-scale distributed database deployments.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Ms. P. Nair — UX Research and Product Design',
    description: 'First non-engineering technical talk — design thinking for software products.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Mr. D. Sharma — Competitive Programming and Placements',
    description: 'Strategies for CP, interview preparation, and FAANG recruitment timelines.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Dr. K. Venkat — Edge Computing and IoT',
    description: 'Architecture and real-world deployments of edge intelligence systems.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Ms. G. Rajan — Women Leadership in Tech',
    description: 'Inspiring talk on navigating tech careers as a woman; panel discussion followed.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Mr. H. Bhaskar — Blockchain Beyond Crypto',
    description: 'Enterprise blockchain use cases in supply chain, healthcare, and identity.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Dr. S. Rao — Responsible AI and Regulation',
    description: 'Paired with a hands-on workshop the following day on AI auditing.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Ms. I. Krishnan — VLSI and Chip Design Careers',
    description: 'Overview of the VLSI industry landscape following the global chip shortage.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Mr. J. Malhotra — System Design for Interviews',
    description: 'Practical system design patterns — scalability, CAP theorem, databases.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Dr. C. Reddy — Multimodal AI and Vision-Language Models',
    description: 'Explored GPT-4V, Gemini, and the future of multimodal intelligence.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Mr. E. Sharma — Site Reliability Engineering',
    description: 'SRE practices at scale — SLOs, error budgets, chaos engineering.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Dr. F. Nair — Computational Biology and AI Drug Discovery',
    description: 'Interdisciplinary talk on how ML is revolutionising pharmaceutical research.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Ms. Q. Pillai — Agile Leadership in Product Teams',
    description: 'Practical Agile for engineers transitioning to product or lead roles.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Mr. U. Gupta — Fintech and Payment Systems Architecture',
    description: 'Real-time payment rails, UPI internals, and fraud detection at scale.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Dr. W. Bose — Green Computing and Sustainable Tech',
    description: 'Carbon footprints of data centres; sustainable engineering practices.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Ms. X. Chandra — Technical Writing and Developer Relations',
    description: 'Career paths in DevRel, documentation, and open-source advocacy.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Mr. Y. Iyer — High-Performance Computing for ML',
    description: 'GPU architectures, CUDA programming, and ML training at scale.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2026,
    status: 'upcoming',
    title: 'Dr. Anjali Rao — Cloud Native Systems at Scale',
    description: 'Principal Engineer at a leading tech firm speaking on modern cloud architectures and distributed systems.',
    fields: {
      'Speaker': 'Dr. Anjali Rao, Principal Engineer',
      'Topic': 'Cloud Native Systems at Scale',
      'Date': '14 Aug 2026, 3:00 PM – 4:30 PM',
      'Venue': 'Seminar Hall 2, CSE Block'
    },
    registerUrl: '#',
    photo: null,
    category: 'guestLectures'
  }
];

var EV_INTRA_COLLEGE = [
  {
    year: 2019,
    status: 'past',
    title: 'Code Sprint — First Intra-college Contest',
    description: 'Competitive programming contest for CSE students; 40 participants, 3 hours.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Tech Quiz 2021',
    description: 'General CS knowledge quiz, open to all departments; 80 team registrations.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Mini Hackathon — 12-hour Build',
    description: 'First intra-college hackathon; 20 teams, problem statements in healthcare and education.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Algo Blitz — DSA Contest',
    description: 'Algorithm-focused contest on Codeforces; open to all years and branches.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Web Dev Challenge',
    description: '48-hour web development challenge; teams built responsive sites from a design brief.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Debugging Derby',
    description: 'Find-and-fix-the-bug contest; 100 lines of code, 60 minutes — fastest wins.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2023,
    status: 'past',
    title: 'AI Ideas Pitch',
    description: 'Students pitched AI startup ideas to a panel of faculty; top 3 received seed mentorship.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Database Design Sprint',
    description: 'Teams designed and normalised schemas for a given business scenario in 90 minutes.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Cryptography Challenge',
    description: 'Cipher puzzles and CTF-style flags; 60 participants across CSE and IT.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Open Source Sprint',
    description: 'Students contributed to selected open-source repos during a monitored 6-hour session.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Mobile App Hackathon',
    description: 'Build a working Android/Flutter app in 24 hours on a social-good theme.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Competitive Programming League — Season 1',
    description: 'Four-round league format over a semester; individual rankings and prize pool.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    status: 'past',
    title: 'System Design Bowl',
    description: 'Teams competed on system design problems judged by senior students and faculty.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Data Science Olympiad',
    description: 'Kaggle-style ML challenge with a real dataset; 3-day submission window.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Cloud Deployment Challenge',
    description: 'Teams deployed full-stack apps to cloud; judged on performance, security, and cost.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2026,
    status: 'upcoming',
    title: 'Code Blitz 2026 — Intra-college Coding Contest',
    description: 'Annual algorithmic programming contest open to all students of R.V.R. & J.C. College.',
    fields: {
      'Eligibility': 'All years, all departments',
      'Format': 'Individual, 3-hour online contest',
      'Prizes': '₹5,000 · ₹3,000 · ₹1,500',
      'Date': '10 Sep 2026 · 10:00 AM'
    },
    registerUrl: '#',
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Web Dev Sprint — January 2026',
    description: '24-hour web dev sprint; 28 teams built full-stack apps on a sustainability theme.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2026,
    status: 'past',
    title: 'AI Prompt Engineering Contest',
    description: 'Novel contest on crafting effective prompts for LLMs; judged on output quality.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Competitive Programming League — Season 2',
    description: 'Second edition of the CP league; 80+ participants across four rounds.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  }
];

var EV_WORKSHOPS = [
  {
    year: 2019,
    status: 'past',
    title: 'Git & GitHub for Beginners',
    description: 'First workshop — version control fundamentals, branching, pull requests. 45 attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Python for Data Science — Hands-on',
    description: 'Pandas, Matplotlib, and scikit-learn; fully online, 70 attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Web Development Bootcamp',
    description: 'Two-day HTML, CSS, JS, React bootcamp; 55 participants built a portfolio site.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Linux Command Line Essentials',
    description: 'Shell scripting, file systems, and process management for beginners.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Machine Learning with Scikit-learn',
    description: 'End-to-end ML pipeline — data prep, model training, evaluation, deployment.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Arduino & IoT Workshop',
    description: 'Hands-on circuit building with Arduino boards; students built a weather monitor.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Docker & Containerisation',
    description: 'From zero to running containers; covered Dockerfile, Compose, and basic orchestration.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Prompt Engineering for LLMs',
    description: 'Practical workshop on crafting effective prompts for GPT-4, Gemini, and Claude.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2024,
    status: 'past',
    title: 'API Design & REST Best Practices',
    description: 'Designing robust APIs; OpenAPI spec, versioning, authentication patterns.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Cloud Foundations — AWS/GCP',
    description: 'Introduction to cloud services; participants deployed a web app to the cloud.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Deep Learning with PyTorch',
    description: 'Two-day deep learning workshop; CNNs, training loops, and transfer learning.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Figma & UI/UX Design Basics',
    description: 'Wireframing, prototyping, and design systems in Figma for software developers.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Hands-on CTF-based workshop; network scanning, web vulnerabilities, basic exploitation.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Kubernetes Fundamentals',
    description: 'Orchestrating containers at scale; pods, deployments, services on a local cluster.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Generative AI App Development',
    description: 'Building apps with the OpenAI and Gemini APIs; RAG pipelines, function calling.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Git Advanced — Rebase, Hooks & CI',
    description: 'Beyond basics: interactive rebase, git hooks, and automating with GitHub Actions.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  }
];

/* ---- Helper Functions ---- */

function evGetUpcoming(arr) {
  return arr.filter(function(e) { return e.status === 'upcoming'; })[0] || null;
}

function evGetPast(arr) {
  return arr.filter(function(e) { return e.status === 'past'; })
            .sort(function(a, b) { return b.year - a.year; });
}

function evTotalInstances(arr) {
  return arr.length;
}

function evHasUpcoming(arr) {
  return arr.some(function(e) { return e.status === 'upcoming'; });
}

/* Global totals for the master stats strip */
var EV_ALL_INSTANCES = [].concat(EV_TECHNIZEN, EV_HOUR_OF_CODE, EV_OUTREACH, EV_GUEST_LECTURES, EV_INTRA_COLLEGE, EV_WORKSHOPS);
var EV_TOTAL_EVENTS   = EV_ALL_INSTANCES.length;
var EV_SCHOOLS_VISITED = 27;   // Hour of Code cumulative
var EV_GUEST_COUNT    = EV_GUEST_LECTURES.length;
var EV_YEARS_ACTIVE   = 9;     // 2018–2026
