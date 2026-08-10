/* ============================================================
   ACM Student Chapter — Events Data
   Single source of truth for all 6 event categories.
   To update: flip status "upcoming" → "past" when an event ends.
   ============================================================ */

/* ---- Category Metadata ---- */
var EV_CATEGORIES = {
  technizen: {
    key: 'technizen',
    name: 'Inter Collegiate',
    abbr: 'IC',
    color: '#c8a13a',
    cssVar: '--ev-technizen',
    slug: 'technizen',
    description: 'The flagship annual inter-collegiate technical fest featuring competitive sub-events across core domain tracks.',
    url: 'events/technizen.html',
    openMaster: 'INTER COLLEGIATE'
  },
  hourOfCode: {
    key: 'hourOfCode',
    name: 'Hour of Code',
    abbr: 'HC',
    color: '#2e7d6b',
    cssVar: '--ev-hoc',
    slug: 'hour-of-code',
    description: 'Outreach initiatives introducing computer science and programming fundamentals to school students.',
    url: 'events/hour-of-code.html'
  },
  outreach: {
    key: 'outreach',
    name: 'Outreach & Awareness Programs',
    abbr: 'OP',
    color: '#b5502f',
    cssVar: '--ev-outreach',
    slug: 'outreach-programs',
    description: 'Social outreach events and awareness programs within campus and beyond.',
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
    name: 'Intra Collegiate Tech Events',
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
  { year: 2019, technizen: 1, hourOfCode: 1, outreach: 1, guestLectures: 0, intraCollege: 3, workshops: 1 },
  { year: 2020, technizen: 1, hourOfCode: 1, outreach: 0, guestLectures: 0, intraCollege: 2, workshops: 1 },
  { year: 2021, technizen: 1, hourOfCode: 0, outreach: 1, guestLectures: 1, intraCollege: 2, workshops: 0 },
  { year: 2022, technizen: 0, hourOfCode: 0, outreach: 2, guestLectures: 0, intraCollege: 3, workshops: 0 },
  { year: 2023, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 1, intraCollege: 1, workshops: 0 },
  { year: 2024, technizen: 1, hourOfCode: 0, outreach: 1, guestLectures: 0, intraCollege: 2, workshops: 0 },
  { year: 2025, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 0, intraCollege: 3, workshops: 0 },
  { year: 2026, technizen: 1, hourOfCode: 0, outreach: 1, guestLectures: 0, intraCollege: 0, workshops: 0 }
];

/* ---- Instance Arrays ---- */

/* ===========================================
   TECHNIZEN  -- 2019(1) 2024(1) 2026(1)
   =========================================== */
var EV_TECHNIZEN = [
  {
    year: 2019,
    day: '16',
    month: 'JULY',
    date: '16-07-2019',
    status: 'past',
    title: 'Technizen 2K19',
    description: 'Inter-collegiate flagship technical fest -- 5 sub-events (Tech-End, Logic Mystery, Exceed Your Idea, Innovate, URL), 809 participants.',
    desc: 'The inaugural inter-collegiate edition of Technizen brought together 809 engineering and MCA students from across colleges. The fest featured 5 core technical tracks: Tech-End, Logic Mystery, Exceed Your Idea, Innovate, and URL.',
    facts: [["5", "Sub-events"], ["809", "Participants"], ["Inter", "Collegiate"]],
    banners: ["Tech-End Arena", "Logic Mystery Lab", "Exceed Your Idea & Innovate", "URL Design Hub"],
    gallery: [],
    fields: {
      'Date': '16-07-2019',
      'Type': 'Inter Collegiate',
      'Sub-events': 'Tech-End, Logic Mystery, Exceed Your Idea, Innovate, URL',
      'Organizers': 'Faculty & Student Committee',
      'Target Audience': 'B.Tech (all branches), MCA & External participants',
      'Participants': '809'
    },
    registerUrl: null,
    photo: null,
    category: 'technizen'
  },
  {
    year: 2020,
    day: '20',
    month: 'FEBRUARY',
    date: '20-02-2020',
    status: 'past',
    title: 'Code Challenger',
    description: 'Inter-collegiate flagship technical fest -- 5 sub-events (Tech-End, Logic Mystery, Exceed Your Idea, Innovate, URL), 809 participants.',
    desc: 'The inaugural inter-collegiate edition of Technizen brought together 809 engineering and MCA students from across colleges. The fest featured 5 core technical tracks: Tech-End, Logic Mystery, Exceed Your Idea, Innovate, and URL.',
    facts: [["5", "Sub-events"], ["494", "Participants"], ["Inter", "Collegiate"]],
    banners: ["Tech-End Arena", "Logic Mystery Lab", "Exceed Your Idea & Innovate", "URL Design Hub"],
    gallery: [],
    fields: {
      'Date': '20-02-2020',
      'Type': 'Inter Collegiate',
      'Sub-events': 'Pcode(python code), Scode(sql code), Jcode(java code), Ccode(C programming)',
      'Organizers': 'Faculty & Student Committee',
      'Target Audience': 'B.Tech (all branches), MCA & External participants',
      'Participants': '494'
    },
    registerUrl: null,
    photo: null,
    category: 'technizen'
  },
  {
    year: 2021,
    day: '24',
    month: 'APRIL',
    date: '24-04-2021',
    status: 'past',
    title: 'Explore-IT (PPT Contest)',
    description: 'Online PPT competition with 132 participants across 4 colleges, featuring tracks on AI, IoT, Networking, and Web.',
    desc: 'Explore-IT was an online presentation-based technical contest held on 24th April 2021, attracting 31 students from four different colleges. Participants presented their insights and innovation within four core domain tracks: Artificial Intelligence, Internet of Things, Networking, and Web Technologies.',
    facts: [["132", "Participants"], ["4", "Colleges"], ["1", "Day Fest"]],
    banners: ["Explore-IT 2021 Main Arena", "AI Innovation Track", "IoT & Networking Hub", "Web Technologies Section"],
    gallery: [],
    fields: {
      'Date': '24-04-2021',
      'Type': 'Intra-departmental (CSE/AI/IT/CSDA)',
      'Sub-events': 'PPT Contest',
      'Organizers': 'Faculty & Student Committee',
      'Target Audience': 'B.Tech students of CSE, and External participants',
      'Participants': '132'
    },
    registerUrl: null,
    photo: null,
    category: 'technizen'
  },
  {
    year: 2024,
    day: '05',
    month: 'FEBRUARY',
    date: '05-02-2024 & 06-02-2024',
    status: 'past',
    title: 'Technizen 2K24',
    description: 'Two-day inter-collegiate technical fest -- 1,040 participants across B.Tech, MCA, and external institutions.',
    desc: 'Technizen 2K24 was organized on 5th & 6th February 2024 as a major inter-collegiate technical extravaganza. Organized by the Faculty and Student Committee Members, the event recorded 1,040 total participants competing across multiple high-intensity competitions.',
    facts: [["2", "Days Fest"], ["1,040", "Participants"], ["Inter", "Collegiate"]],
    banners: ["Technizen 2K24 Main Stage", "Competitive Track Arena", "Exhibition & Pitching Hub"],
    gallery: [],
    fields: {
      'Dates': '05-02-2024 & 06-02-2024',
      'Type': 'Inter Collegiate',
      'Organizers': 'Faculty & Student Committee',
      'Target Audience': 'B.Tech (all branches), MCA & External participants',
      'Participants': '1,040'
    },
    registerUrl: null,
    photo: null,
    category: 'technizen'
  },
  {
    year: 2026,
    day: '11',
    month: 'AUGUST',
    date: '11-12 August 2026',
    status: 'ongoing',
    badgeText: 'ONGOING NOW',
    title: 'Technizen 2K26',
    description: 'Flagship annual technical fest conducted on 11th & 12th August 2026 featuring six competitive sub-events.',
    desc: 'Technizen 2K26 features six specialized technical tracks ranging from database optimization to AI innovation, where participants compete for merit recognition, awards, and industry opportunities.',
    facts: [["6", "Sub-events"], ["500+", "Participants"], ["Merit & Participation", "Certificates"]],
    banners: ["Query Masters", "DSA Clash", "AI Innovators Arena", "Pixel Craft", "Build & Pitch", "Technoverse"],
    gallery: [],
    fields: {
      'Status': 'ONGOING NOW',
      'Dates': '11-12 August 2026',
      'Sub-events': '6 competitions',
      'Theme': 'Beyond Limits',
      'Venue': 'R.V.R. & J.C. College of Engineering'
    },
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeDW0DpeITrhsGaFSjEOmpCF9epj_gNF6fMaIv4bmQzgfpsgQ/viewform',
    photo: 'assets/images/events/poster.jpg',
    category: 'technizen'
  }
];

/* ===========================================
   HOUR OF CODE  -- 2018(1) 2019(1) 2020(1) 2023(1) 2025(1)
   =========================================== */
var EV_HOUR_OF_CODE = [
  {
    year: 2018,
    day: '05',
    month: 'DECEMBER',
    date: '05-12-2018',
    status: 'past',
    title: 'Yanamadala Zilla Parishad High School, Yanamadala',
    description: 'Social outreach event -- Hour of Code organized for high school students at Yanamadala ZPHS (200 participants).',
    desc: 'ACM Student Chapter organized the Hour of Code social outreach event at Yanamadala Zilla Parishad High School, Yanamadala on 5th December 2018. Over 200 high school students participated in hands-on coding and computer literacy activities.',
    facts: [["1", "School Visited"], ["200", "Students Participated"]],
    banners: ["Yanamadala ZPHS Campus", "Hour of Code Session"],
    gallery: [],
    fields: {
      'Date': '05-12-2018',
      'Event': 'Hour of Code (Social Outreach)',
      'Venue': 'Yanamadala Zilla Parishad High School, Yanamadala',
      'Target Audience': 'High School Students',
      'Participants': '200'
    },
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2019,
    day: '12',
    month: 'DECEMBER',
    date: '12-12-2019',
    status: 'past',
    title: 'Sri Venkateswara Bala Kuteer School, Chowdavaram',
    description: 'Social outreach event -- Hour of Code organized at Sri Venkateswara Bala Kuteer School (250 participants).',
    desc: 'ACM Student Chapter organized the Hour of Code social outreach event at Sri Venkateswara Bala Kuteer School, Chowdavaram on 12th December 2019. Over 250 school students were introduced to logic building and programming basics.',
    facts: [["1", "School Visited"], ["250", "Students Participated"]],
    banners: ["Sri Venkateswara Bala Kuteer School", "Interactive Coding Session"],
    gallery: [],
    fields: {
      'Date': '12-12-2019',
      'Event': 'Hour of Code (Social Outreach)',
      'Venue': 'Sri Venkateswara Bala Kuteer School, Chowdavaram',
      'Target Audience': 'School Students',
      'Participants': '250'
    },
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2020,
    day: '26',
    month: 'DECEMBER',
    date: '26-12-2020',
    status: 'past',
    title: 'Virtual Hour of Code (Online Format)',
    description: 'Social outreach event -- Hour of Code organized online for students of various schools during lockdown (45 participants).',
    desc: 'Adapting to pandemic restrictions, ACM Student Chapter conducted the Hour of Code event online on 26th December 2020. Students from various schools participated remotely in interactive virtual coding sessions.',
    facts: [["Online", "Virtual Format"], ["45", "Students Participated"]],
    banners: ["Virtual Coding Lab", "Online Session Stream"],
    gallery: [],
    fields: {
      'Date': '26-12-2020',
      'Format': 'Online / Virtual',
      'Target Audience': 'Students of various schools',
      'Participants': '45'
    },
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2023,
    day: '08',
    month: 'DECEMBER',
    date: '08-12-2023',
    status: 'past',
    title: 'Yanamadala Zilla Parishad High School, Yanamadala',
    description: 'Social outreach event -- Hour of Code organized at Yanamadala ZPHS (200 participants).',
    desc: 'ACM Student Chapter organized the Hour of Code social outreach event at Yanamadala Zilla Parishad High School, Yanamadala on 8th December 2023. 200 high school students engaged in coding workshops and problem-solving activities.',
    facts: [["1", "School Visited"], ["200", "Students Participated"]],
    banners: ["Yanamadala ZPHS Session", "Hands-on Workshop"],
    gallery: [],
    fields: {
      'Date': '08-12-2023',
      'Event': 'Hour of Code (Social Outreach)',
      'Venue': 'Yanamadala Zilla Parishad High School, Yanamadala',
      'Target Audience': 'High School Students',
      'Participants': '200'
    },
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  },
  {
    year: 2025,
    day: '12',
    month: 'DECEMBER',
    date: '12-12-2025',
    status: 'past',
    title: 'Yanamadala Zilla Parishad High School, Yanamadala',
    description: 'Social outreach event -- Hour of Code organized at Yanamadala ZPHS (139 participants).',
    desc: 'ACM Student Chapter organized the Hour of Code social outreach event at Yanamadala Zilla Parishad High School, Yanamadala on 12th December 2025. 139 high school students participated in interactive programming exercises.',
    facts: [["1", "School Visited"], ["139", "Students Participated"]],
    banners: ["Yanamadala ZPHS Workshop", "Student Coding Lab"],
    gallery: [],
    fields: {
      'Date': '12-12-2025',
      'Event': 'Hour of Code (Social Outreach)',
      'Venue': 'Yanamadala Zilla Parishad High School, Yanamadala',
      'Target Audience': 'High School Students',
      'Participants': '139'
    },
    registerUrl: null,
    photo: null,
    category: 'hourOfCode'
  }
];

/* ===========================================
   OUTREACH & AWARENESS PROGRAMS
   2019(1) 2021(1) 2022(2) 2023(1) 2024(1) 2025(1) 2026(1)
   Note: "Outreach Program" and "Awareness Program" are treated as the same category.
   =========================================== */
var EV_OUTREACH = [
  {
    year: 2019,
    day: '24',
    month: 'JUNE',
    date: '24-06-2019',
    status: 'past',
    title: 'ACM Awareness Programme & Membership Drive',
    description: 'Intra-collegiate awareness programme and membership drive for B.Tech students of all branches and MCA (164 participants).',
    desc: 'The ACM Student Chapter organized an Awareness Programme combined with a Membership Drive on 24th June 2019. Organized by Faculty and Student Committee Members, the event targeted B.Tech students of all branches and MCA, generating interest in ACM membership and spreading awareness about the chapter\'s activities. 164 students participated.',
    facts: [["164", "Participants"], ["All Branches", "+ MCA"], ["Intra", "Collegiate"]],
    banners: ["ACM Awareness & Membership Drive 2019"],
    gallery: [],
    fields: {
      'Date': '24-06-2019',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '164'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2021,
    day: '30',
    month: 'JUNE',
    date: '30-06-2021',
    status: 'past',
    title: 'ACM Awareness Programme',
    description: 'Intra-collegiate ACM awareness programme for B.Tech students of CSE, IT branches and MCA (110 participants).',
    desc: 'The ACM Student Chapter organized an Awareness Programme on 30th June 2021. Organized by Faculty and Student Committee Members, the programme was aimed at B.Tech students of CSE and IT branches, and MCA, spreading awareness about the ACM chapter, its benefits, and activities. 110 students participated.',
    facts: [["110", "Participants"], ["CSE, IT & MCA"], ["Intra", "Collegiate"]],
    banners: ["ACM Awareness Programme 2021"],
    gallery: [],
    fields: {
      'Date': '30-06-2021',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'B.Tech students of CSE, IT branches and MCA',
      'Participants': '110'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2022,
    day: '07',
    month: 'NOVEMBER',
    date: '07-11-2022',
    status: 'past',
    title: 'Technology Awareness Programme',
    description: 'Social outreach event organized at Sri Venkateswara Bala Kuteer School, Chowdavaram (250 participants).',
    desc: 'The ACM Student Chapter organized a Technology Awareness Programme as a social outreach event on 7th November 2022 at Sri Venkateswara Bala Kuteer School, Chowdavaram. The event introduced school students to technology, computer science basics, and digital literacy. 250 school students participated.',
    facts: [["250", "Participants"], ["School Outreach"], ["Chowdavaram"]],
    banners: ["Technology Awareness Programme 2022 — Sri Venkateswara Bala Kuteer School"],
    gallery: [],
    fields: {
      'Date': '07-11-2022',
      'Type': 'Social Outreach',
      'Venue': 'Sri Venkateswara Bala Kuteer School, Chowdavaram',
      'Target Audience': 'Sri Venkateswara Bala Kuteer School Students',
      'Participants': '250'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2022,
    day: '24',
    month: 'AUGUST',
    date: '24-08-2022',
    status: 'past',
    title: 'ACM Awareness Programme',
    description: 'Intra-collegiate ACM awareness programme for B.Tech students of CSE, IT, CSBS branches and MCA (183 participants).',
    desc: 'The ACM Student Chapter organized an Awareness Programme on 24th August 2022. Organized by Faculty and Student Committee Members, the programme targeted B.Tech students of CSE, IT, and CSBS branches, along with MCA students, to raise awareness about ACM membership and chapter activities. 183 students participated.',
    facts: [["183", "Participants"], ["CSE, IT, CSBS & MCA"], ["Intra", "Collegiate"]],
    banners: ["ACM Awareness Programme August 2022"],
    gallery: [],
    fields: {
      'Date': '24-08-2022',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'B.Tech students of CSE, IT, CSBS branches and MCA',
      'Participants': '183'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2023,
    day: '18',
    month: 'OCTOBER',
    date: '18-10-2023',
    status: 'past',
    title: 'ACM Awareness Programme',
    description: 'Intra-collegiate ACM awareness programme for B.Tech students of CSE, IT, CSBS branches and MCA (200 participants).',
    desc: 'The ACM Student Chapter organized an Awareness Programme on 18th October 2023. Organized by Faculty and Student Committee Members, the programme was aimed at B.Tech students of CSE, IT, and CSBS branches, and MCA, spreading awareness about ACM\'s global and local chapter activities. 200 students participated.',
    facts: [["200", "Participants"], ["CSE, IT, CSBS & MCA"], ["Intra", "Collegiate"]],
    banners: ["ACM Awareness Programme 2023"],
    gallery: [],
    fields: {
      'Date': '18-10-2023',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'B.Tech students of CSE, IT, CSBS branches and MCA',
      'Participants': '200'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2024,
    day: '01',
    month: 'AUGUST',
    date: '01-08-2024',
    status: 'past',
    title: 'ACM Awareness Program — A Program for the Benefit of Students',
    description: 'Intra-collegiate ACM awareness programme for III and IV B.Tech students of CSE and CSE Allied Branches (707 participants).',
    desc: 'The ACM Student Chapter organized an Awareness Programme on 1st August 2024. Organized by Faculty and Student Committee Members, the programme specifically targeted III and IV year B.Tech students of CSE and CSE Allied Branches, educating them about ACM membership benefits, research opportunities, and the chapter\'s vision. A record 707 students participated.',
    facts: [["707", "Participants"], ["III & IV B.Tech CSE"], ["Intra", "Collegiate"]],
    banners: ["ACM Awareness Program 2024"],
    gallery: [],
    fields: {
      'Date': '01-08-2024',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'III and IV B.Tech students of CSE and CSE Allied Branches',
      'Participants': '707'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2025,
    day: '24',
    month: 'JULY',
    date: '24-07-2025',
    status: 'past',
    title: 'ACM Awareness Program — A Program for the Benefit of Students',
    description: 'Intra-collegiate ACM awareness programme for III and IV B.Tech students of CSE and CSE Allied Branches (350 participants).',
    desc: 'The ACM Student Chapter organized an Awareness Programme on 24th July 2025. Organized by Faculty and Student Committee Members, the programme was directed at III and IV year B.Tech students of CSE and CSE Allied Branches, raising awareness about ACM\'s resources, events, and the value of student membership. 350 students participated.',
    facts: [["350", "Participants"], ["III & IV B.Tech CSE"], ["Intra", "Collegiate"]],
    banners: ["ACM Awareness Program 2025"],
    gallery: [],
    fields: {
      'Date': '24-07-2025',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'III and IV B.Tech students of CSE and CSE Allied Branches',
      'Participants': '350'
    },
    registerUrl: null,
    photo: null,
    category: 'outreach'
  },
  {
    year: 2026,
    day: '09',
    month: 'JANUARY',
    date: '09-01-2026',
    status: 'past',
    title: 'ACM Outreach Program',
    description: 'Social outreach event organized at Sri Venkateshwara BalaKuteer School, Chowdavaram (100 participants).',
    desc: 'The ACM Student Chapter organized an Outreach Program on 9th January 2026 at Sri Venkateshwara BalaKuteer School, Chowdavaram. The event brought ACM student volunteers to the school to engage students with technology awareness sessions, inspiring young learners to explore computer science. 100 school students participated.',
    facts: [["100", "Participants"], ["School Outreach"], ["Chowdavaram"]],
    banners: ["ACM Outreach Program 2026 — Sri Venkateshwara BalaKuteer School"],
    gallery: [],
    fields: {
      'Date': '09-01-2026',
      'Type': 'Intra Collegiate / Social Outreach',
      'Venue': 'Sri Venkateshwara BalaKuteer School, Chowdavaram',
      'Target Audience': 'Sri Venkateshwara BalaKuteer School Students',
      'Participants': '100'
    },
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
    day: '30',
    month: 'AUGUST',
    date: '30-08-2017',
    status: 'past',
    title: 'Inauguration of ACM STUDENT CHAPTER( Eminent Speaker Programme)',
    description: 'Department Event -- Eminent Speaker Programme guest lecture by Sri. AJAY DESHPANDE, CTO RAKYA TECHNOLOGIES, PUNE (207 participants).',
    desc: 'Inauguration of ACM STUDENT CHAPTER (Eminent Speaker Programme) delivered by Sri. AJAY DESHPANDE, CTO RAKYA TECHNOLOGIES, PUNE on 30.08.2017 for IVth year B.Tech CSE students. 207 participants.',
    facts: [["207", "Participants"], ["IVth B.Tech CSE"], ["Department Event"]],
    banners: ["Inauguration of ACM STUDENT CHAPTER 2017"],
    gallery: [],
    fields: {
      'Date': '30.08.2017',
      'Type': 'Department Event',
      'Resource Person': 'Sri. AJAY DESHPANDE, CTO RAKYA TECHNOLOGIES, PUNE.',
      'Target Audience': 'IVth year B.Tech CSE',
      'Participants': '207'
    },
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2017,
    day: '30',
    month: 'AUGUST',
    date: '30-08-2017',
    status: 'past',
    title: 'SMAC Technologies and the Future',
    description: 'Department Event -- Guest lecture by Sri. AJAY DESHPANDE, CTO RAKYA TECHNOLOGIES, PUNE (203 participants).',
    desc: 'Guest lecture on SMAC Technologies and the Future delivered by Sri. AJAY DESHPANDE, CTO RAKYA TECHNOLOGIES, PUNE on 30.08.2017 for IIIrd year B.Tech CSE students. 203 participants.',
    facts: [["203", "Participants"], ["IIIrd B.Tech CSE"], ["Department Event"]],
    banners: ["SMAC Technologies and the Future 2017"],
    gallery: [],
    fields: {
      'Date': '30.08.2017',
      'Type': 'Department Event',
      'Resource Person': 'Sri. AJAY DESHPANDE, CTO RAKYA TECHNOLOGIES, PUNE.',
      'Target Audience': 'IIIrd year B.Tech CSE',
      'Participants': '203'
    },
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2021,
    day: '05',
    month: 'NOVEMBER',
    date: '05-11-2021',
    status: 'past',
    title: 'Guest Lecture on Micro Services and Its Implementation',
    description: 'Intra Collegiate guest lecture by Sri K. Krishna Mohan, Director and Principal Consultant, Glarimy technology Services, Bangalore (120 participants).',
    desc: 'Guest Lecture on Micro Services and Its Implementation delivered by Sri K. Krishna Mohan, Director and Principal Consultant, Glarimy technology Services, Bangalore on 05-11-2021 for B.Tech students of IVth year CSE. 120 participants.',
    facts: [["120", "Participants"], ["IVth B.Tech CSE"], ["Intra Collegiate"]],
    banners: ["Guest Lecture on Micro Services 2021"],
    gallery: [],
    fields: {
      'Date': '05-11-2021',
      'Type': 'Intra Collegiate',
      'Resource Person': 'Sri K. Krishna Mohan, Director and Principal Consultant, Glarimy technology Services, Bangalore.',
      'Target Audience': 'B.Tech students of IVth year CSE',
      'Participants': '120'
    },
    registerUrl: null,
    photo: null,
    category: 'guestLectures'
  },
  {
    year: 2023,
    day: '18',
    month: 'NOVEMBER',
    date: '18-11-2023',
    status: 'past',
    title: 'Guest Lecture on “Future Readiness Orientation on Industry-Higher Studies”',
    description: 'Department Event -- Guest lecture by Dr. Hari Prasad Devarapalli, Senior Scientist, TCS, Hyderabad (210 participants).',
    desc: 'Guest Lecture on “Future Readiness Orientation on Industry-Higher Studies” delivered by Dr. Hari Prasad Devarapalli, Senior Scientist, TCS, Hyderabad on 18-11-2023 for IIIrd, IVth year B.Tech CSE students. 210 participants.',
    facts: [["210", "Participants"], ["IIIrd & IVth B.Tech CSE"], ["Department Event"]],
    banners: ["Future Readiness Orientation 2023"],
    gallery: [],
    fields: {
      'Date': '18-11-2023',
      'Type': 'Department Event',
      'Resource Person': 'Dr. Hari Prasad Devarapalli, Senior Scientist, TCS, Hyderabad',
      'Target Audience': 'IIIrd, IVth year B.Tech CSE',
      'Participants': '210'
    },
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
  {
    year: 2025,
    day: '22',
    month: 'SEPTEMBER',
    date: '22-09-2025',
    status: 'past',
    title: '“TechSpark-2025” — Project-Based Contest',
    description: 'Intra Collegiate project-based contest for IV B.Tech students of CSE (40 teams / 120 participants).',
    desc: '“TechSpark-2025” Project-Based Contest organized on 22-09-2025 by Faculty and Student Committee Members for IV B.Tech Students of CSE. 40 teams (120 participants).',
    facts: [["120", "Participants"], ["40", "Teams"], ["IV B.Tech CSE"]],
    banners: ["TechSpark-2025 September Contest"],
    gallery: [],
    fields: {
      'Date': '22-09-2025',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'IV B.Tech Students of CSE',
      'Participants': '40 teams (120 participants)'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    day: '02',
    month: 'AUGUST',
    date: '02-08-2025',
    status: 'past',
    title: '“TechSpark-2025” — Project-Based Contest',
    description: 'Intra Collegiate project-based contest for IV B.Tech students of CSE (70 teams / 210 participants).',
    desc: '“TechSpark-2025” Project-Based Contest organized on 02-08-2025 by Faculty and Student Committee Members for IV B.Tech Students of CSE. 70 teams (210 participants).',
    facts: [["210", "Participants"], ["70", "Teams"], ["IV B.Tech CSE"]],
    banners: ["TechSpark-2025 August Contest"],
    gallery: [],
    fields: {
      'Date': '02-08-2025',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'IV B.Tech Students of CSE',
      'Participants': '70 teams (210 participants)'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    day: '11',
    month: 'MARCH',
    date: '11-03-2025',
    status: 'past',
    title: '“C-Quence” — Code it, Compile it, Conquer it',
    description: 'Intra Collegiate coding contest for I and II B.Tech students of all branches (590 teams / 1180 participants).',
    desc: '“C-Quence” Code it, Compile it, Conquer it organized on 11-03-2025 by Faculty and Student Committee Members for I and II B.Tech students of all branches. 590 teams (1180 participants).',
    facts: [["1180", "Participants"], ["590", "Teams"], ["Intra Collegiate"]],
    banners: ["C-Quence Contest 2025"],
    gallery: [],
    fields: {
      'Date': '11-03-2025',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'I and II B.Tech students of all branches',
      'Participants': '590 teams (1180 Participants)'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2024,
    day: '24',
    month: 'OCTOBER',
    date: '24-10-2024',
    status: 'past',
    title: '“Computer Fiesta” — A Tech Themed Event',
    description: 'Intra Collegiate tech themed event for I B.Tech students of CSE allied branches (912 participants).',
    desc: '“Computer Fiesta” - A Tech Themed Event organized on 24-10-2024 by Faculty and Student Committee Members for I B.Tech students of CSE allied branches. 912 participants.',
    facts: [["912", "Participants"], ["I B.Tech CSE Allied"], ["Intra Collegiate"]],
    banners: ["Computer Fiesta 2024"],
    gallery: [],
    fields: {
      'Date': '24-10-2024',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'I B.Tech students of CSE allied branches',
      'Participants': '912'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2024,
    day: '08',
    month: 'AUGUST',
    date: '08-08-2024',
    status: 'past',
    title: '“CODAGE” — A Programming Contest on Data Structures',
    description: 'Intra Collegiate programming contest on Data Structures for II, III, IV B.Tech students of all branches (630 teams / 1260 participants).',
    desc: '“CODAGE” - A Programming Contest on Data Structures organized on 08-08-2024 by Faculty and Student Committee Members for II, III, IV B.Tech students of all branches. 630 teams (1260 participants).',
    facts: [["1260", "Participants"], ["630", "Teams"], ["Intra Collegiate"]],
    banners: ["CODAGE Data Structures 2024"],
    gallery: [],
    fields: {
      'Date': '08-08-2024',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'II, III, IV B.Tech students of all branches',
      'Participants': '630 teams (1260 Participants)'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2023,
    day: '23',
    month: 'SEPTEMBER',
    date: '23-09-2023',
    status: 'past',
    title: 'CODEWIZ — A Python Programming Contest',
    description: 'Intra Collegiate Python programming contest for B.Tech students of all branches and MCA (711 participants).',
    desc: 'CODEWIZ - A Python Programming Contest organized on 23-09-2023 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 711 participants.',
    facts: [["711", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["CODEWIZ Python Contest 2023"],
    gallery: [],
    fields: {
      'Date': '23-09-2023',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '711'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2022,
    day: '05',
    month: 'NOVEMBER',
    date: '05-11-2022',
    status: 'past',
    title: 'ESTRATEGIA — A Contest on C Programming',
    description: 'Intra Collegiate contest on C programming for B.Tech students of all branches and MCA (547 participants).',
    desc: 'ESTRATEGIA - A Contest on C Programming organized on 05-11-2022 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 547 participants.',
    facts: [["547", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["ESTRATEGIA C Programming 2022"],
    gallery: [],
    fields: {
      'Date': '05-11-2022',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '547'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2022,
    day: '30',
    month: 'AUGUST',
    date: '30-08-2022',
    status: 'past',
    title: 'CODEWIZ — A Python Programming Contest',
    description: 'Intra Collegiate Python programming contest for B.Tech students of all branches and MCA (563 participants).',
    desc: 'CODEWIZ - A Python Programming Contest organized on 30-08-2022 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 563 participants.',
    facts: [["563", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["CODEWIZ Python Contest 2022"],
    gallery: [],
    fields: {
      'Date': '30-08-2022',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '563'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2022,
    day: '16',
    month: 'APRIL',
    date: '16-04-2022',
    status: 'past',
    title: 'CODAGE — A Programming Contest On Data Structures',
    description: 'Intra Collegiate programming contest on Data Structures for B.Tech students of all branches (233 participants).',
    desc: 'CODAGE - A Programming Contest On Data Structures organized on 16-04-2022 by Faculty and Student Committee Members for B.Tech students of all branches. 233 participants.',
    facts: [["233", "Participants"], ["All Branches"], ["Intra Collegiate"]],
    banners: ["CODAGE Data Structures 2022"],
    gallery: [],
    fields: {
      'Date': '16-04-2022',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches',
      'Participants': '233'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2021,
    day: '13',
    month: 'NOVEMBER',
    date: '13-11-2021',
    status: 'past',
    title: 'Codage — A programming contest',
    description: 'Intra Collegiate programming contest for B.Tech students of all branches (296 participants).',
    desc: 'Codage - A programming contest organized on 13-11-2021 by Faculty and Student Committee Members for B.Tech students of all branches. 296 participants.',
    facts: [["296", "Participants"], ["All Branches"], ["Intra Collegiate"]],
    banners: ["Codage Contest 2021"],
    gallery: [],
    fields: {
      'Date': '13-11-2021',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches',
      'Participants': '296'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2021,
    day: '08',
    month: 'JULY',
    date: '08-07-2021',
    status: 'past',
    title: 'CODEWIZ — A PYTHON Programming Contest',
    description: 'Intra Collegiate Python programming contest for B.Tech students of all branches and MCA (423 participants).',
    desc: 'CODEWIZ - A PYTHON Programming Contest organized on 08-07-2021 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 423 participants.',
    facts: [["423", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["CODEWIZ Python Contest 2021"],
    gallery: [],
    fields: {
      'Date': '08-07-2021',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '423'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2020,
    day: '05',
    month: 'NOVEMBER',
    date: '05-11-2020',
    status: 'past',
    title: 'Codage — A programming contest',
    description: 'Intra Collegiate programming contest for B.Tech students of IInd and IIIrd year CSE (43 participants).',
    desc: 'Codage - A programming contest organized on 05-11-2020 by Faculty and Student Committee Members for B.Tech students of IInd and IIIrd year CSE. 43 participants.',
    facts: [["43", "Participants"], ["IInd & IIIrd CSE"], ["Intra Collegiate"]],
    banners: ["Codage Programming Contest 2020"],
    gallery: [],
    fields: {
      'Date': '05-11-2020',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech Students of IInd and IIIrd year CSE',
      'Participants': '43'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2020,
    day: '30',
    month: 'JANUARY',
    date: '30-01-2020',
    status: 'past',
    title: 'Codage — A programming contest on Data Structures',
    description: 'Intra Collegiate programming contest on Data Structures for B.Tech students of all branches and MCA (263 participants).',
    desc: 'Codage - A programming contest on Data Structures organized on 30-1-2020 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 263 participants.',
    facts: [["263", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["Codage Data Structures 2020"],
    gallery: [],
    fields: {
      'Date': '30-01-2020',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '263'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2019,
    day: '04',
    month: 'JULY',
    date: '04-07-2019',
    status: 'past',
    title: 'Query Cracking Contest — (A Database design contest)',
    description: 'Intra Collegiate database design contest for B.Tech students of all branches and MCA (232 participants).',
    desc: 'Query Cracking Contest (A Database design contest) organized on 04-07-2019 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 232 participants.',
    facts: [["232", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["Query Cracking Contest 2019"],
    gallery: [],
    fields: {
      'Date': '04-07-2019',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '232'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2019,
    day: '12',
    month: 'MARCH',
    date: '12-03-2019',
    status: 'past',
    title: 'Tech Maerid — Project Expo',
    description: 'Intra Collegiate project expo for B.Tech students of all branches (38 participants).',
    desc: 'Tech Maerid Project Expo organized on 12-03-2019 by Faculty and Student Committee Members for B.Tech students of all branches. 38 participants.',
    facts: [["38", "Participants"], ["All Branches"], ["Intra Collegiate"]],
    banners: ["Tech Maerid Project Expo 2019"],
    gallery: [],
    fields: {
      'Date': '12-03-2019',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches',
      'Participants': '38'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2019,
    day: '07',
    month: 'MARCH',
    date: '07-03-2019',
    status: 'past',
    title: 'INDOCTRINATION — Coding Contest',
    description: 'Intra Collegiate coding contest for B.Tech students of all branches and MCA (536 participants).',
    desc: 'INDOCTRINATION Coding Contest organized on 07-03-2019 by Faculty and Student Committee Members for B.Tech students of all branches and MCA. 536 participants.',
    facts: [["536", "Participants"], ["All Branches & MCA"], ["Intra Collegiate"]],
    banners: ["Indoctrination Coding Contest 2019"],
    gallery: [],
    fields: {
      'Date': '07-03-2019',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '536'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },

  {
    year: 2018,
    day: '29',
    month: 'SEPTEMBER',
    date: '29-09-2018',
    status: 'past',
    title: '“THEME PARAUSIASI” Paper Presentation Contest',
    description: 'Intra Collegiate paper presentation contest for IInd, IIIrd and IVth year B.Tech students of all branches (540 participants).',
    desc: '“THEME PARAUSIASI” Paper Presentation Contest organized on 29.09.2018 by Faculty and Student Committee Members for IInd, IIIrd and IVth year B.Tech students of all branches. 540 participants.',
    facts: [["540", "Participants"], ["All Branches"], ["Intra Collegiate"]],
    banners: ["Theme Parausiasi Paper Presentation 2018"],
    gallery: [],
    fields: {
      'Date': '29.09.2018',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'IInd, IIIrd and IVth year B.Tech students of all branches',
      'Participants': '540'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2018,
    day: '11',
    month: 'SEPTEMBER',
    date: '11-09-2018',
    status: 'past',
    title: 'Estrategia Coding Contest',
    description: 'Intra Collegiate coding contest for IInd, IIIrd and IVth year B.Tech students of all branches (540 participants).',
    desc: 'Estrategia Coding Contest organized on 11.09.2018 by Faculty and Student Committee Members for IInd, IIIrd and IVth year B.Tech students of all branches. 540 participants.',
    facts: [["540", "Participants"], ["All Branches"], ["Intra Collegiate"]],
    banners: ["Estrategia Coding Contest 2018"],
    gallery: [],
    fields: {
      'Date': '11.09.2018',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'IInd, IIIrd and IVth year B.Tech students of all branches',
      'Participants': '540'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2017,
    day: '29',
    month: 'DECEMBER',
    date: '29-12-2017',
    status: 'past',
    title: 'Multi-Core Programming',
    description: 'Department Event by Sri A.V Maruthi Sairam, Scientist ‘E’, DRDO, Ministry of Defence, Hyderabad (207 participants).',
    desc: 'Department Event on Multi-Core Programming delivered by Sri A.V Maruthi Sairam, Scientist ‘E’, DRDO, Ministry of Defence, Hyderabad on 29.12.2017 for IVth year B.Tech CSE students. 207 participants.',
    facts: [["207", "Participants"], ["IVth B.Tech CSE"], ["Department Event"]],
    banners: ["Multi-Core Programming 2017"],
    gallery: [],
    fields: {
      'Date': '29.12.2017',
      'Type': 'Department Event',
      'Resource Person': 'Sri A.V Maruthi Sairam, Scientist ‘E’, DRDO, Ministry of Defence, Hyderabad',
      'Target Audience': 'IVth year B.Tech CSE',
      'Participants': '207'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2017,
    day: '28',
    month: 'AUGUST',
    date: '28-08-2017',
    status: 'past',
    title: 'Logo And Web Page designing Contest in (PHP)',
    description: 'Intra Collegiate contest organized by Faculty and Student Committee Members for IInd, IIIrd and IVth year B.Tech CSE, IT and EEE (180 participants).',
    desc: 'Intra Collegiate Logo And Web Page designing Contest in (PHP) organized on 28-08-2017 by Faculty and Student Committee Members for IInd, IIIrd and IVth year B.Tech CSE, IT and EEE. 180 participants.',
    facts: [["180", "Participants"], ["CSE, IT & EEE"], ["Intra Collegiate"]],
    banners: ["Logo & Web Page Designing Contest 2017"],
    gallery: [],
    fields: {
      'Date': '28-08-2017',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'IInd, IIIrd and IVth year B.Tech CSE, IT and EEE',
      'Participants': '180'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2017,
    day: '28',
    month: 'AUGUST',
    date: '28-08-2017',
    status: 'past',
    title: 'Reverse Coding Contest',
    description: 'Intra Collegiate contest organized by Faculty and Student Committee Members for IInd, IIIrd and IVth year B.Tech CSE, IT (160 participants).',
    desc: 'Intra Collegiate Reverse Coding Contest organized on 28-08-2017 by Faculty and Student Committee Members for IInd, IIIrd and IVth year B.Tech CSE, IT. 160 participants.',
    facts: [["160", "Participants"], ["CSE & IT"], ["Intra Collegiate"]],
    banners: ["Reverse Coding Contest 2017"],
    gallery: [],
    fields: {
      'Date': '28-08-2017',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty and Student Committee Members',
      'Target Audience': 'IInd, IIIrd and IVth year B.Tech CSE, IT',
      'Participants': '160'
    },
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  }
];

/* ===========================================
   WORKSHOPS  -- 2019(1) 2020(1)
   =========================================== */
var EV_WORKSHOPS = [
  {
    year: 2019,
    day: '22',
    month: 'FEBRUARY',
    date: '22-02-2019',
    status: 'past',
    title: 'Techstalk — TECH HUNT',
    description: 'Intra-collegiate technical event organized by Faculty and Student Committee Members for B.Tech students of all branches and MCA (286 participants).',
    desc: 'The ACM Student Chapter organized Techstalk — TECH HUNT on 22nd February 2019. Organized by Faculty and Student Committee Members, the event brought together B.Tech students from all branches and MCA for a technical competition that tested their knowledge and skills across various domains. 286 students participated.',
    facts: [["286", "Participants"], ["All Branches", "+ MCA"], ["Intra", "Collegiate"]],
    banners: ["Techstalk — TECH HUNT 2019"],
    gallery: [],
    fields: {
      'Date': '22-02-2019',
      'Type': 'Intra Collegiate',
      'Organizers': 'Faculty & Student Committee Members',
      'Target Audience': 'B.Tech students of all branches and MCA',
      'Participants': '286'
    },
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2020,
    day: '26',
    month: 'MAY',
    date: '26-05-2020 to 28-05-2020',
    status: 'past',
    title: 'Online Workshop on "Data Structures using Python"',
    description: 'Three-day online workshop on Data Structures using Python conducted by Dr. M. Sreelatha for III year B.Tech students of RVRJCCE (185 participants).',
    desc: 'The ACM Student Chapter organized a three-day Online Workshop on "Data Structures using Python" from 26th to 28th May 2020. The workshop was conducted by Dr. M. Sreelatha, Professor & HOD and Faculty Sponsor of the ACM Student Chapter. Targeted at III year B.Tech students of RVRJCCE, the workshop covered fundamental and advanced data structures implemented using Python. 185 students participated.',
    facts: [["185", "Participants"], ["3", "Day Workshop"], ["Online", "Format"]],
    banners: ["Online Workshop — Data Structures using Python"],
    gallery: [],
    fields: {
      'Dates': '26-05-2020 to 28-05-2020',
      'Format': 'Online / Intra Collegiate',
      'Resource Person': 'Dr. M. Sreelatha, Professor & HOD, Faculty Sponsor — ACM Student Chapter',
      'Target Audience': 'III Year B.Tech Students of RVRJCCE',
      'Participants': '185'
    },
    registerUrl: null,
    photo: null,
    category: 'workshops'
  }
];

/* ---- Helper Functions ---- */

function evGetUpcoming(arr) {
  return arr.filter(function (e) { return e.status === 'upcoming' || e.status === 'ongoing'; })[0] || null;
}

function evGetPast(arr) {
  return arr.filter(function (e) { return e.status === 'past'; })
    .sort(function (a, b) { return b.year - a.year; });
}

function evTotalInstances(arr) {
  return arr.length;
}

function evHasUpcoming(arr) {
  return arr.some(function (e) { return e.status === 'upcoming' || e.status === 'ongoing'; });
}

/* Global totals for the master stats strip */
var EV_ALL_INSTANCES = [].concat(EV_TECHNIZEN, EV_HOUR_OF_CODE, EV_OUTREACH, EV_GUEST_LECTURES, EV_INTRA_COLLEGE, EV_WORKSHOPS);
var EV_TOTAL_EVENTS = EV_ALL_INSTANCES.length;
var EV_SCHOOLS_VISITED = 27;   // Hour of Code cumulative
var EV_GUEST_COUNT = EV_GUEST_LECTURES.length;
var EV_YEARS_ACTIVE = 10;    // 2017-2026
