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
  { year: 2022, technizen: 0, hourOfCode: 0, outreach: 1, guestLectures: 0, intraCollege: 3, workshops: 0 },
  { year: 2023, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 1, intraCollege: 1, workshops: 0 },
  { year: 2024, technizen: 1, hourOfCode: 0, outreach: 1, guestLectures: 0, intraCollege: 2, workshops: 0 },
  { year: 2025, technizen: 0, hourOfCode: 1, outreach: 1, guestLectures: 0, intraCollege: 3, workshops: 0 },
  { year: 2026, technizen: 1, hourOfCode: 0, outreach: 1, guestLectures: 0, intraCollege: 1, workshops: 0 }
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
    description: 'Flagship annual technical fest is ONGOING NOW (11th & 12th August 2026) -- six competitive sub-events.',
    desc: 'Technizen 2K26 is currently ONGOING on 11th & 12th August 2026! Spanning six specialized technical tracks from database optimization to AI startup pitching, students from across the region are competing for prestigious awards, cash prizes, and industry internships.',
    facts: [["6", "Sub-events"], ["500+", "Participants"], ["Rs.50K", "Total Prize Pool"]],
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
   OUTREACH  -- 2019(1) 2021(1) 2022(1) 2023(1) 2024(1) 2025(1) 2026(1)
   =========================================== */
var EV_OUTREACH = [
  {
    year: 2019,
    status: 'past',
    title: 'Code for Farmers -- GIS Awareness Session',
    description: 'Demonstrated mobile-based agricultural apps to farmers in collaboration with the CSE dept.',
    desc: 'ACM CSE volunteers organized a community extension camp at Chowdavaram village, demonstrating mobile-based weather forecasting, crop disease detection, and digital market access tools to local agriculturalists.',
    facts: [["1", "Village Camp"], ["10", "Volunteers"], ["80+", "Farmers Attended"]],
    banners: ["Chowdavaram Community Center"],
    gallery: [],
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
    desc: 'In collaboration with local women self-help groups (DWACRA), ACM members conducted hands-on literacy drives covering UPI payments, online banking safety, and cyber fraud prevention.',
    facts: [["2", "Self-Help Groups"], ["8", "Volunteers"], ["140+", "Women Trained"]],
    banners: ["Guntur Women Empowerment Center"],
    gallery: [],
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
    desc: 'A community open-source day where chapter members helped junior developers, high schoolers, and hobbyists set up Git, navigate GitHub repositories, and submit their first pull requests.',
    facts: [["1", "Open Hackday"], ["15", "Mentors"], ["90+", "PRs Submitted"]],
    banners: ["CSE Open Source Hub"],
    gallery: [],
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
    desc: 'A two-day field drive in Pedakakani village assisting local residents with government e-governance portals, digital identity verification, and online utility payment setups.',
    facts: [["2", "Days Camp"], ["16", "Volunteers"], ["300+", "Citizens Assisted"]],
    banners: ["Pedakakani Panchayat Hall", "Digital Kiosk Booth"],
    gallery: [],
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
    desc: 'At the Guntur District Science Fair, ACM set up an interactive booth demonstrating live generative AI, computer vision, and speech recognition to students and civic visitors.',
    facts: [["1", "Exhibition Hall"], ["12", "Volunteers"], ["1,200+", "Booth Visitors"]],
    banners: ["Guntur Science Center Booth"],
    gallery: [],
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
    desc: 'An immersive summer computer camp empowering rural youth with essential IT skills, online learning platforms, resume building, and safe internet usage practices.',
    facts: [["4", "Days Bootcamp"], ["14", "Volunteers"], ["210+", "Youth Trained"]],
    banners: ["Rural Youth Skill Center", "Computer Lab Track"],
    gallery: [],
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
    desc: 'ACM chapter members collaborated with municipal authorities to display student-built prototype solutions for traffic management, waste monitoring, and public grievance tracking.',
    facts: [["8", "Smart Prototypes"], ["20", "Student Presenters"], ["15+", "Civic Officials"]],
    banners: ["Municipal Corporation Hall", "Prototype Demo Kiosk"],
    gallery: [],
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
    desc: 'The inaugural guest lecture under the ACM Student Chapter banner. Dr. V. Ramaiah delivered an insightful session bridging textbook OSI layer concepts with enterprise network infrastructure routing protocols.',
    facts: [["1", "Keynote Speaker"], ["60+", "CSE Attendees"]],
    banners: ["Dr. V. Ramaiah Keynote"],
    gallery: [],
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
    desc: 'Mr. S. Prasad from enterprise software industry shared best practices around Agile sprints, Git code review workflows, and industry expectations for entry-level developers.',
    facts: [["1", "Industry Speaker"], ["75+", "Attendees"]],
    banners: ["Mr. S. Prasad Lecture"],
    gallery: [],
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
    desc: 'Dr. P. Meena presented a comprehensive overview of real-world machine learning deployment pipelines, feature engineering, and model monitoring in production environments.',
    facts: [["1", "Keynote Speaker"], ["200+", "Inter-dept Attendees"]],
    banners: ["Dr. P. Meena -- ML in Industry"],
    gallery: [],
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
    desc: 'Mr. A. Prakash led an interactive virtual session detailing modern DevOps methodologies, Docker containerization, and automated deployment pipelines with GitHub Actions.',
    facts: [["1", "DevOps Engineer"], ["150+", "Virtual Participants"]],
    banners: ["Mr. A. Prakash -- DevOps Keynote"],
    gallery: [],
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
    desc: 'Dr. R. Fernandes conducted an engaging session unpacking transformer neural networks, attention mechanisms, fine-tuning techniques, and practical applications of LLMs.',
    facts: [["1", "AI Researcher"], ["220+", "Audience Members"]],
    banners: ["Dr. R. Fernandes -- GenAI Keynote"],
    gallery: [],
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
  {
    year: 2017,
    status: 'past',
    title: 'C Programming Challenge -- Inaugural Contest',
    description: 'Very first intra-college competition organised by the nascent ACM chapter; 30 participants solved C programming problems in 2 hours.',
    desc: 'The maiden coding contest organised by ACM RVRJC. 30 participants tested their algorithmic problem solving in C over 2 hours.',
    facts: [["30", "Coders"], ["2", "Hours"], ["3", "Winners"]],
    banners: ["C Challenge Lab Session"],
    gallery: [],
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
    desc: 'A fast-paced trivia contest testing core knowledge across hardware, algorithms, and computing history.',
    facts: [["20", "Teams"], ["5", "Quiz Rounds"]],
    banners: ["Tech Trivia Stage"],
    gallery: [],
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
    desc: 'First-year students displayed innovative software projects judged by CSE department faculty.',
    facts: [["15", "Project Stalls"], ["40+", "Presenters"]],
    banners: ["Project Expo Floor"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2018,
    status: 'past',
    title: 'Code Debug Contest 2018',
    description: 'Find-and-fix debugging contest; 35 participants, three difficulty levels, 90-minute window.',
    desc: 'Students raced to identify syntax errors, logical bugs, and memory leaks in C++ and Java codebases.',
    facts: [["35", "Participants"], ["3", "Bug Tiers"]],
    banners: ["Debug Contest Lab"],
    gallery: [],
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
    desc: 'Comprehensive placement-oriented technical aptitude evaluation for sophomore and junior CSE students.',
    facts: [["50", "Participants"], ["60", "Questions"]],
    banners: ["Aptitude Testing Hall"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2019,
    status: 'past',
    title: 'Code Sprint -- Intra-college Competitive Programming',
    description: 'Competitive programming contest for CSE students; 40 participants, 3 hours.',
    desc: 'A 3-hour competitive programming sprint featuring automated test suite evaluation on custom HackerRank platform.',
    facts: [["40", "Participants"], ["5", "Problems"]],
    banners: ["Code Sprint Lab"],
    gallery: [],
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
    desc: 'Cross-departmental quiz championship drawing participants from CSE, IT, ECE, and EEE streams.',
    facts: [["60", "Teams"], ["6", "Buzzer Rounds"]],
    banners: ["Tech Quiz Auditorium"],
    gallery: [],
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
    desc: 'Frontend design competition evaluating responsive layouts, typography, CSS animations, and usability.',
    facts: [["25", "Submissions"], ["3", "Best Designs"]],
    banners: ["Web Design Lab"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2020,
    status: 'past',
    title: 'Online Code Challenge -- Lockdown Edition',
    description: 'Virtual competitive programming contest during the pandemic; 55 participants across all years.',
    desc: 'Hosted on HackerEarth, students competed remotely solving algorithmic puzzles during remote learning.',
    facts: [["55", "Coders"], ["4", "Hours"]],
    banners: ["Online Leaderboard"],
    gallery: [],
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
    desc: 'Interactive live virtual trivia session with multi-choice Kahoot integration.',
    facts: [["45", "Teams"], ["100+", "Live Viewers"]],
    banners: ["Virtual Quiz Stream"],
    gallery: [],
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
    desc: 'A 24-hour virtual hackathon where student teams built community relief dashboards and tracking tools.',
    facts: [["18", "Teams"], ["24", "Hours Sprint"]],
    banners: ["Remote Hackathon Pitch"],
    gallery: [],
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
    desc: 'Annual trivia competition with audio-visual rounds and coding round questions.',
    facts: [["80", "Teams"], ["4", "Finalists"]],
    banners: ["Quiz Final Stage"],
    gallery: [],
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
    desc: 'In-person 12-hour software build sprint focused on practical web and mobile applications.',
    facts: [["20", "Teams"], ["12", "Build Hours"]],
    banners: ["Hackathon Workshop Space"],
    gallery: [],
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
    desc: 'Fast-paced speed programming focused on optimal time complexity and clean execution.',
    facts: [["45", "Contestants"], ["6", "Challenges"]],
    banners: ["Speed Run Arena"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Algo Blitz -- DSA Contest',
    description: 'Algorithm-focused contest on Codeforces; open to all years and branches.',
    desc: 'Data Structures & Algorithms contest hosted on Codeforces platform with dynamic scoreboards.',
    facts: [["70", "Coders"], ["5", "Problem Sets"]],
    banners: ["Algo Blitz Lab"],
    gallery: [],
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
    desc: 'Frontend hackathon testing HTML5, modern CSS layouts, JavaScript ES6+, and API integrations.',
    facts: [["22", "Teams"], ["48", "Hours"]],
    banners: ["Web Dev Pitching"],
    gallery: [],
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
    desc: 'High-energy trivia showdown with rapid-fire responses and tech merchandise prizes.',
    facts: [["30", "Teams"], ["3", "Winner Squads"]],
    banners: ["Trivia Showdown Stage"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2023,
    status: 'past',
    title: 'Debugging Derby',
    description: 'Find-and-fix-the-bug contest; 100 lines of code, 60 minutes -- fastest wins.',
    desc: 'Intensity-packed bug hunting challenge across complex multithreaded and algorithmic code snippets.',
    facts: [["50", "Participants"], ["60", "Minutes"]],
    banners: ["Debugging Derby Lab"],
    gallery: [],
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
    desc: 'Capture-the-flag style cyber security challenge testing encryption, hashing, and steganography skills.',
    facts: [["60", "Hackers"], ["10", "CTF Flags"]],
    banners: ["CTF Arena"],
    gallery: [],
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
    desc: 'Teams built cross-platform mobile prototypes targeting community safety, civic feedback, and student aid.',
    facts: [["15", "App Prototypes"], ["24", "Hours"]],
    banners: ["Mobile Hackathon Demo"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Competitive Programming League -- Season 1',
    description: 'Four-round league format over a semester; individual rankings and prize pool.',
    desc: 'Semester-long competitive programming tournament tracking seasonal Elo ratings and grand finals.',
    facts: [["90", "League Coders"], ["4", "Rounds"]],
    banners: ["CP League Grand Finale"],
    gallery: [],
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
    desc: 'Scalable architecture competition evaluating microservices, load balancing, caching, and database sharding diagrams.',
    facts: [["12", "Design Teams"], ["2", "Panels of Judges"]],
    banners: ["System Design Presentation"],
    gallery: [],
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
    desc: 'Machine learning competition focused on predictive modeling, hyperparameter tuning, and data visualization.',
    facts: [["40", "ML Engineers"], ["1", "Real-world Dataset"]],
    banners: ["DS Olympiad Leaderboard"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'intraCollege'
  },
  {
    year: 2026,
    status: 'upcoming',
    title: 'Code Blitz 2026 -- Intra-college Coding Contest',
    description: 'Annual algorithmic programming contest open to all students of R.V.R. & J.C. College.',
    desc: 'The flagship intra-college coding championship returns for 2026! Solve challenging algorithmic problems in a 3-hour speedrun.',
    facts: [["150+", "Registered"], ["Rs.10K", "Prize Pool"]],
    banners: ["Code Blitz 2026 Banner"],
    gallery: [],
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
   WORKSHOPS  -- 2020(1) 2022(1) 2024(1) 2025(1)
   =========================================== */
var EV_WORKSHOPS = [
  {
    year: 2020,
    status: 'past',
    title: 'Git & GitHub for Beginners',
    description: 'Version control fundamentals conducted online during the pandemic; branching, pull requests, and collaborative workflows. 45 attendees.',
    desc: 'Hands-on online workshop teaching students Git repositories, commits, branching strategies, merge conflict resolution, and collaborative GitHub workflows.',
    facts: [["1", "Day Workshop"], ["45", "Attendees"]],
    banners: ["Git & GitHub Session Track"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2022,
    status: 'past',
    title: 'Full-Stack Web Development Bootcamp',
    description: 'Two-day weekend bootcamp covering Node.js, Express, and MongoDB basics for sophomore students.',
    desc: 'Intensive hands-on web development bootcamp building RESTful APIs, database schemas, and frontend interface integrations from scratch.',
    facts: [["2", "Days"], ["85", "Students Trained"]],
    banners: ["Web Bootcamp Lab Track", "API Building Session"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2024,
    status: 'past',
    title: 'Hands-on Docker & Kubernetes Workshop',
    description: 'Practical introduction to containerization, microservices architecture, and cloud deployment.',
    desc: 'Industry-guided workshop training students on writing Dockerfiles, managing multi-container Docker Compose stacks, and deploying to Kubernetes clusters.',
    facts: [["1", "Day Lab"], ["60", "Attendees"]],
    banners: ["Docker Containerization Lab"],
    gallery: [],
    fields: {},
    registerUrl: null,
    photo: null,
    category: 'workshops'
  },
  {
    year: 2025,
    status: 'past',
    title: 'Prompt Engineering & Applied LLMs',
    description: 'Practical guide to building applications with OpenAI API, LangChain, and vector databases.',
    desc: 'Comprehensive workshop on retrieval-augmented generation (RAG), vector embeddings, LangChain pipelines, and building AI assistant applications.',
    facts: [["1", "Day Intensive"], ["110", "Participants"]],
    banners: ["Applied LLM Masterclass"],
    gallery: [],
    fields: {},
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
