// Course metadata for CS 423/520 Computer Architecture (Bilkent, Fall 2026):
// identity, instructor, announcements, description, logistics, grading, and
// homeworks. The schedule and the reading materials live in their own files
// (metadata-comparch-fall_2026-schedule.js / -readings.js); the build merges
// all three.
//
// During the semester, populate homework materials by replacing 'TBA' with a
// URL (handout, repo, submission). Schedule milestone rows reference homeworks
// by `hw: '<key>'` and pick up links automatically.

module.exports = {
  code: 'CS 423/520',
  title: 'Computer Architecture',
  nav_title: 'CS 423/520 — Fall 2026',
  institution: 'Bilkent University',
  institution_line: 'Bilkent University, Department of Computer Engineering',
  term: 'Fall 2026',
  accent: '#661530',
  accent_dark: '#661530',
  badges: [
    { icon: 'graduation-cap', text: 'Bilkent 3 credits / 5 ECTS' },
  ],
  instructor: {
    role: 'Instructor',
    name: 'Abdullah Giray Yağlıkçı',
    web: 'https://agyaglikci.github.io',
    email: 'giray@cispa.de',
  },
  announcements: [
    'Homework handouts, lecture slides, and lecture videos will be posted on this page throughout the semester — check the <a href="index.html#schedule">schedule</a> regularly.',
  ],
  description: [
    'Basic hardware structure of modern computing platforms: memory systems, storage systems, interconnects, multiprocessors, accelerators, hardware/software cooperation. Key issues in performance, efficiency, scalability, reliability, security, safety, predictability, and quality of service.',
    '<b>Learning outcomes:</b> Understand fundamental principles and the state of the art in computer architecture. Implement and hands-on learn various parts of a modern computing system.',
  ],
  logistics: [
    { label: 'Prerequisite', value: 'CS 224' },
    { label: 'Contact Hours', value: '4 hours of lecture per week' },
    { label: 'Textbook', value: 'Recommended: <em>Computer Architecture, Fifth Edition: A Quantitative Approach</em>, John L. Hennessy and David A. Patterson, 2011, Morgan Kaufmann' },
    { label: 'GenAI Policy', value: 'Allowed as helpers in coding, preparing data visualization scripts, and proofreading the final text. <b>Not allowed</b> for completely taking over any tasks (e.g., implementing mechanisms, conducting simulations, data analysis, and critical paper reviews).' },
  ],
  grading: {
    rows: [
      { component: 'Midterm', type: 'Essay/written', count: 1, contribution: '30%' },
      { component: 'Final', type: 'Essay/written', count: 1, contribution: '30%' },
      { component: 'Homework', type: 'Hands-on assignments', count: 4, contribution: '40%' },
    ],
    notes: [
      '<b>Minimum requirement to qualify for the final exam:</b> the midterm grade must be more than 30%.',
    ],
  },

  homework_intro: 'Four homework assignments (40% total) plus one bonus homework. Handouts, git repositories, and submission links will be posted here when each homework is assigned.',
  homework_note: 'You lose 10\% of your grade for each week late. Late submission cut-off for all homeworks: December 21, 2026.',
  homeworks: [
    { key: 'hw1', id: 'HW 1', topic: 'Single-Cycle vs In-Order Pipeline Architectures', assigned: 'Sep 24', deadline: 'Oct 15', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw2', id: 'HW 2', topic: 'Caching, Prefetching, and Branch Prediction', assigned: 'Oct 15', deadline: 'Oct 29', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw3', id: 'HW 3', topic: 'Out-of-Order and Speculative Execution (Bonus: Spectre and Meltdown)', assigned: 'Oct 29', deadline: 'Nov 19', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw4', id: 'HW 4', topic: 'Memory Scheduling', assigned: 'Nov 19', deadline: 'Dec 10', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'bonus1', id: 'Bonus HW', topic: 'Paper Reviews', assigned: 'Oct 5', deadline: 'Dec 21', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
  ],

  contact_notes: [
    'Hosted by <a href="https://cs.bilkent.edu.tr">the Department of Computer Engineering at Bilkent University</a>.',
    'Delivered by the <a href="https://sal-research.github.io">S4L</a> at <a href="https://www.cispa.de">CISPA</a>.',
  ],
};
