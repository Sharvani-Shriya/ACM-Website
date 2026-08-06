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
    url: 'events/technizen.html',
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
    abbr: 'TW',
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
  { year: 2017, technizen: 0, hourOfCode: 0, outreach: 0, guestLectures: 2, intraCollege: 3, workshops: 0 },
  { year: 2018, technizen: 0, hourOfCode: 1, outreach: 0, guestLectures: 0, intraCollege: 2, workshops: 0 },
  { year: 2019, technizen: 1, hourOfCode: 1, outreach: 1, guestLectures: 1, intraCollege: 3, workshops: 0 },
  { year: 2020, technizen: 0, hourOfCode: 1, outreach: 0, guestLectures: 0, intraCollege: 3, workshops: 1 },
  { year: 2021, technizen: 0, hourOfCode: 0, outreach: 1, guestLectures: 1, intraCollege: 3, workshops: 0 },
  { year: 2022, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 0, intraCollege: 3, workshops: 0 },
  { year: 2023, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 1, intraCollege: 1, workshops: 0 },
  { year: 2024, technizen: 1, hourOfCode: 0, outreach: 1, guestLectures: 0, intraCollege: 2, workshops: 0 },
  { year: 2025, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 0, intraCollege: 3, workshops: 0 },
  { year: 2026, technizen: 1, hourOfCode: 1, outreach: 1, guestLectures: 0, intraCollege: 1, workshops: 0 }
];

/* ---- Instance Arrays ---- */

/* ===========================================
   TECHNIZEN  -- 2019(1) 2024(1) 2026(1)
   =========================================== */
var EV_TECHNIZEN = [
  {
    year: 2019,
    status: 'past',
    title: 'Technizen 2K19',
    description: 'First edition of the chapter\'s flagship technical fest -- four sub-events, 200+ participants from across departments.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'technizen'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Technizen 2K24',
    description: 'Revived after a multi-year hiatus -- five competitive sub-events, 300+ participants, inter-college participation opened.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'technizen'
  },
  {
    year: 2026,
    status: 'upcoming',
    title: 'Technizen 2K26',
    description: 'The latest edition of our flagship fest -- six technical sub-events competing for the top prize.',
    fields: {
      'Sub-events': '6 competitions',
      'Theme': 'Beyond Limits',
      'Dates': '20-21 Aug 2026',
      'Venue': 'R.V.R. & J.C. College of Engineering'
    },
    registerUrl: 'https://forms.gle/pvjNgiCEq3Ao3XE36',
    photo: null,
    category: 'technizen'
  }
];

/* ===========================================
   HOUR OF CODE  -- 2018(1) 2019(1) 2020(1) 2022(1) 2023(1) 2025(1) 2026(1)
   =========================================== */
var EV_HOUR_OF_CODE = [
  {
    year: 2018,
    status: 'past',
    title: 'Zilla Parishad High School, Chowdavaram',
    description: 'First Hour of Code visit -- 2 volunteers, block-based coding for Grade 8, 60+ students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Sankar Vilas High School & Govt. High School, Koritepadu',
    description: 'Two-school sprint -- scratch-based activities, 120 students introduced to programming.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Online -- Three Schools (Virtual Format)',
    description: 'Shifted to virtual sessions due to the pandemic; smaller batches but full reach maintained.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Six Schools in One Week',
    description: 'First multi-school sprint -- 40+ volunteer hours, Arduino demonstration added to curriculum.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Outreach Sprint -- Guntur District',
    description: 'Four schools, 350+ students; first collaboration with district education office.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2025,
    status: 'past',
    title: '27th School Reached -- Milestone Visit',
    description: 'Milestone outing; feeds into Technizen 2026 outreach segment. 600+ students reached.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2026,
    status: 'past',
    title: 'Pre-Technizen Schools Drive -- 5 Schools',
    description: 'Five schools in the run-up to Technizen; introduced AI concepts to middle-school students.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  }
];

/* ===========================================
   OUTREACH  -- 2019(1) 2021(1) 2022(1) 2023(1) 2024(1) 2025(1) 2026(1)
   =========================================== */
var EV_OUTREACH = [
  {
    year: 2019,
    status: 'past',
    title: 'Code for Farmers -- GIS Awareness Session',
    description: 'Demonstrated mobile-based agricultural apps to farmers in collaboration with the CSE dept.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Tech for Women -- Digital Finance Workshop',
    description: 'Partnered with self-help groups; taught UPI, digital banking basics.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Open Source Day -- Community Contributions',
    description: 'Students guided community members in contributing to open-source tools.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Digital Village Project -- Pedakakani',
    description: 'Two-day initiative helping villagers with e-services, ration card updates, UIDAI.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2024,
    status: 'past',
    title: 'AI for All -- Public Awareness Drive',
    description: 'Explained AI concepts to general public at the Guntur District Science Exhibition.',
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
    year: 2026,
    status: 'past',
    title: 'Smart City Ideas Expo -- Guntur Municipal',
    description: 'Partnered with Guntur Smart City mission to present student tech ideas to civic officials.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'outreach'
  }
];

/* ===========================================
   GUEST LECTURES  -- 2017(2) 2019(1) 2021(1) 2023(1)
   =========================================== */
var EV_GUEST_LECTURES = [
  {
    year: 2017,
    status: 'past',
    title: 'Dr. V. Ramaiah -- Fundamentals of Computer Networks',
    description: 'Inaugural guest lecture of the ACM chapter; covered OSI model and real-world networking concepts. 60+ CSE students attended.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2017,
    status: 'past',
    title: 'Mr. S. Prasad -- Introduction to Software Engineering Practices',
    description: 'Industry overview of SDLC methodologies, Agile basics, and career paths in software engineering.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Dr. P. Meena -- Machine Learning in Industry',
    description: 'First lecture open to all departments -- explored industry ML pipelines and career opportunities. 200+ attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Mr. A. Prakash -- DevOps in the Real World',
    description: 'Covered CI/CD pipelines, containerisation; included a live GitHub Actions demo.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Dr. R. Fernandes -- Generative AI and Large Language Models',
    description: 'Deep dive into transformer architectures and the rise of ChatGPT-era models.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  }
];

/* ===========================================
   INTRA-COLLEGE
   2017(3) 2018(2) 2019(3) 2020(3) 2021(3) 2022(3) 2023(1) 2024(2) 2025(3) 2026(1)
   =========================================== */
var EV_INTRA_COLLEGE = [
  /* 2017 -- 3 */
  {
    year: 2017,
    status: 'past',
    title: 'C Programming Challenge -- Inaugural Contest',
    description: 'Very first intra-college competition organised by the nascent ACM chapter; 30 participants solved C programming problems in 2 hours.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2017,
    status: 'past',
    title: 'Tech Trivia Quiz -- CSE Edition',
    description: 'General computer science and technology quiz open to CSE students; 20 teams, 5 rounds.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2017,
    status: 'past',
    title: 'Mini Project Expo -- Semester 1',
    description: 'Students showcased small semester projects; judges from faculty panel evaluated creativity and implementation.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2018 -- 2 */
  {
    year: 2018,
    status: 'past',
    title: 'Code Debug Contest 2018',
    description: 'Find-and-fix debugging contest; 35 participants, three difficulty levels, 90-minute window.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2018,
    status: 'past',
    title: 'CS Aptitude Quiz 2018',
    description: 'Multiple-choice quiz covering data structures, OS, and networking fundamentals; 50 participants.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2019 -- 3 */
  {
    year: 2019,
    status: 'past',
    title: 'Code Sprint -- Intra-college Competitive Programming',
    description: 'Competitive programming contest for CSE students; 40 participants, 3 hours.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Tech Quiz 2019',
    description: 'General CS knowledge quiz open to all departments; 60 team registrations.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Web Design Showcase 2019',
    description: 'Students built and presented static websites on a given theme; judged on design and code quality.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2020 -- 3 */
  {
    year: 2020,
    status: 'past',
    title: 'Online Code Challenge -- Lockdown Edition',
    description: 'Virtual competitive programming contest during the pandemic; 55 participants across all years.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Virtual Tech Quiz 2020',
    description: 'Online quiz using Google Meet; covered CS fundamentals and current tech trends.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Mini Hackathon -- Remote Format',
    description: 'First online hackathon; 18 teams built web apps addressing COVID-19 related challenges.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2021 -- 3 */
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
    title: 'Mini Hackathon -- 12-hour Build',
    description: 'First intra-college hackathon; 20 teams, problem statements in healthcare and education.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2021,
    status: 'past',
    title: 'Algorithm Speed Run 2021',
    description: 'Timed contest on sorting, searching, and graph algorithms; 45 individual participants.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2022 -- 3 */
  {
    year: 2022,
    status: 'past',
    title: 'Algo Blitz -- DSA Contest',
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
    year: 2022,
    status: 'past',
    title: 'CS Trivia Showdown 2022',
    description: 'Lightning-round trivia on CS history, innovations, and fundamentals; 30 teams competed.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2023 -- 1 */
  {
    year: 2023,
    status: 'past',
    title: 'Debugging Derby',
    description: 'Find-and-fix-the-bug contest; 100 lines of code, 60 minutes -- fastest wins.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2024 -- 2 */
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
    title: 'Mobile App Hackathon',
    description: 'Build a working Android/Flutter app in 24 hours on a social-good theme.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  /* 2025 -- 3 */
  {
    year: 2025,
    status: 'past',
    title: 'Competitive Programming League -- Season 1',
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
  /* 2026 -- 1 */
  {
    year: 2026,
    status: 'upcoming',
    title: 'Code Blitz 2026 -- Intra-college Coding Contest',
    description: 'Annual algorithmic programming contest open to all students of R.V.R. & J.C. College.',
    fields: {
      'Eligibility': 'All years, all departments',
      'Format': 'Individual, 3-hour online contest',
      'Prizes': 'Rs.5,000 - Rs.3,000 - Rs.1,500',
      'Date': '10 Sep 2026 - 10:00 AM'
    },
    registerUrl: '#',
    photo: null,
    category: 'intraCollege'
  }
];

/* ===========================================
   WORKSHOPS  -- 2020(1)
   =========================================== */
var EV_WORKSHOPS = [
  {
    year: 2020,
    status: 'past',
    title: 'Git & GitHub for Beginners',
    description: 'Version control fundamentals conducted online during the pandemic; branching, pull requests, and collaborative workflows. 45 attendees.',
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  }
];

/* ---- Helper Functions ---- */

function evGetUpcoming(arr) {
  return arr.filter(function (e) { return e.status === 'upcoming'; })[0] || null;
}

function evGetPast(arr) {
  return arr.filter(function (e) { return e.status === 'past'; })
    .sort(function (a, b) { return b.year - a.year; });
}

function evTotalInstances(arr) {
  return arr.length;
}

function evHasUpcoming(arr) {
  return arr.some(function (e) { return e.status === 'upcoming'; });
}

/* Global totals for the master stats strip */
var EV_ALL_INSTANCES = [].concat(EV_TECHNIZEN, EV_HOUR_OF_CODE, EV_OUTREACH, EV_GUEST_LECTURES, EV_INTRA_COLLEGE, EV_WORKSHOPS);
var EV_TOTAL_EVENTS = EV_ALL_INSTANCES.length;
var EV_SCHOOLS_VISITED = 27;   // Hour of Code cumulative
var EV_GUEST_COUNT = EV_GUEST_LECTURES.length;
var EV_YEARS_ACTIVE = 10;    // 2017-2026
