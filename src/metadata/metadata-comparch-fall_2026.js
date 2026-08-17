// Course website metadata for CS 423 Computer Architecture (Bilkent, Fall 2026)
// Rendered with src/templates/_course.html into teaching/comparch-fall_2026/
//
// Structure: weeks -> days -> lectures. Lecture numbers (L1a, L2b, ...) are
// computed by the build: the day number counts lecture days across the course,
// and the part letter (a, b, c) is the lecture's position within its day
// (omitted for single-lecture days). Do not put lecture numbers in this file.
// Exceptions: an explicit `number` (e.g. 'LR1') or `exam: true` keeps a day
// out of the count; `alternatives: true` on a day marks mutually exclusive
// candidate lectures that share the plain day number.
//
// During the semester, populate materials by replacing 'TBA' with a URL:
//   - per lecture:  pptx, pdf, video (YouTube)
//   - per homework: handout, repo, submission
// Schedule milestone rows reference homeworks by `hw: '<key>'` and pick up
// links automatically.

module.exports = {
  code: 'CS 423/520',
  title: 'Computer Architecture',
  nav_title: 'CS 423/520 — Fall 2026',
  institution: 'Bilkent University',
  institution_line: 'Bilkent University, Department of Computer Engineering',
  term: 'Fall 2026',
  accent: '#8c1d40',
  accent_dark: '#661530',
  badges: [
    { icon: 'graduation-cap', text: 'Bilkent 3 credits / 5 ECTS' },
  ],
  instructor: {
    role: 'Course coordinator',
    name: 'Abdullah Giray Yağlıkçı',
    web: 'https://agyaglikci.github.io',
    email: 'giray@cispa.de',
  },
  announcements: [
    'Homework handouts, lecture slides, and lecture videos will be posted on this page throughout the semester — check the <a href="#schedule">schedule</a> regularly.',
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
      '<b>Minimum requirement to qualify for the final exam:</b> the midterm grade must be more than 50%.',
    ],
  },

  homework_intro: 'Four homework assignments (40% total) plus one bonus homework. Handouts, git repositories, and submission links will be posted here when each homework is assigned.',
  homework_note: 'Late submission cut-off for all labs: December 21, 2026.',
  homeworks: [
    { key: 'hw1', id: 'HW 1', topic: 'Single-Cycle vs In-Order Pipeline Architectures', assigned: 'Sep 24', deadline: 'Oct 15', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw2', id: 'HW 2', topic: 'Caching, Prefetching, and Branch Prediction', assigned: 'Oct 15', deadline: 'Oct 29', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw3', id: 'HW 3', topic: 'Out-of-Order and Speculative Execution (Bonus: Spectre and Meltdown)', assigned: 'Oct 29', deadline: 'Nov 19', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw4', id: 'HW 4', topic: 'Memory Scheduling', assigned: 'Nov 19', deadline: 'Dec 10', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'bonus1', id: 'Bonus HW', topic: 'Paper Reviews', assigned: 'Oct 5', deadline: 'Dec 21', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
  ],

  // Assigned reading materials, organized like metadata-publications.js.
  // Lectures reference these by `readings: ['<key>', ...]`; the build collects
  // the relevant lectures for each paper and renders readings.html.
  // Replace 'TBA' with URLs for the paper pdf and its presentation slides/video.
  readings: [
    {
      key: 'smith1985precise',
      title: 'Implementing Precise Interrupts in Pipelined Processors',
      authors: [
        { firstname: 'James E.', lastname: 'Smith' },
        { firstname: 'Andrew R.', lastname: 'Pleszkun' },
      ],
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      year: 1985,
      pdf: 'TBA',
      slides: 'TBA',
      video: 'TBA',
    },
    {
      key: 'patt1985hps',
      title: 'HPS, a New Microarchitecture: Rationale and Introduction',
      authors: [
        { firstname: 'Yale N.', lastname: 'Patt' },
        { firstname: 'Wen-mei W.', lastname: 'Hwu' },
        { firstname: 'Michael C.', lastname: 'Shebanow' },
      ],
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      year: 1985,
      pdf: 'TBA',
      slides: 'TBA',
      video: 'TBA',
    },
    {
      key: 'patt1985critical',
      title: 'Critical Issues Regarding HPS, a High Performance Microarchitecture',
      authors: [
        { firstname: 'Yale N.', lastname: 'Patt' },
        { firstname: 'Stephen W.', lastname: 'Melvin' },
        { firstname: 'Wen-mei W.', lastname: 'Hwu' },
        { firstname: 'Michael C.', lastname: 'Shebanow' },
      ],
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      year: 1985,
      pdf: 'TBA',
      slides: 'TBA',
      video: 'TBA',
    },
    {
      key: 'hwu1987checkpoint',
      title: 'Checkpoint Repair for Out-of-Order Execution Machines',
      authors: [
        { firstname: 'Wen-mei W.', lastname: 'Hwu' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      year: 1987,
      pdf: 'TBA',
      slides: 'TBA',
      video: 'TBA',
    },
    {
      key: 'patt2001requirements',
      title: 'Requirements, Bottlenecks, and Good Fortune: Agents for Microprocessor Evolution',
      authors: [
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      venue: 'Proceedings of the IEEE, vol. 89, no. 11',
      type: 'journal',
      year: 2001,
      pdf: 'TBA',
      slides: 'TBA',
      video: 'TBA',
    },
  ],

  schedule_note: 'Slides (PPTX and PDF) and lecture videos will be linked next to each lecture as the semester progresses.',
  weeks: [
    {
      theme: 'Introduction and Foundation',
      days: [
        {
          date: 'Sep 17',
          lectures: [
            { title: 'Course Info and Logistics', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Computer Organization and Design Principles: Introduction and Basics', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Pipelined Microarchitecture Fundamentals',
      days: [
        {
          date: 'Sep 21',
          lectures: [
            { title: 'ISA Design Principles', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Performance Evaluation', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Trends, Tradeoffs and Design Fundamentals of Computer Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Sep 24',
          lectures: [
            { title: 'In-Order Pipelined CPU Design, Hazards, and Data Forwarding', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Precise Exceptions and Interrupts', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'assigned', hw: 'hw1' }],
        },
      ],
    },
    {
      theme: 'Out-of-Order Execution',
      days: [
        {
          date: 'Sep 28',
          lectures: [
            { title: 'Out-of-Order Pipeline Design', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: "Tomasulo's Algorithm", pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'High Performance Substrate (HPS) and Checkpoint Repair', pptx: 'TBA', pdf: 'TBA', video: 'TBA',
              readings: ['smith1985precise', 'patt1985hps', 'patt1985critical', 'hwu1987checkpoint', 'patt2001requirements'] },
          ],
        },
        { date: 'Oct 1', note: 'No lecture' },
      ],
    },
    {
      theme: 'Memory Subsystem',
      days: [
        {
          date: 'Oct 5',
          lectures: [
            { title: 'Von Neumann Architecture and Memory Subsystem Overview', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Simplescalar and Superscalar', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Critical Paper Reviews in Computer Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'assigned', hw: 'bonus1' }],
        },
        {
          date: 'Oct 8',
          lectures: [
            { title: 'Dataflow', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Virtual Memory and Translation Lookaside Buffer', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Memory Stalls, Pipeline Stalls',
      days: [
        {
          date: 'Oct 12',
          lectures: [
            { title: 'Cache Organization and Design', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'DRAM Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Memory Request Scheduling', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 15',
          lectures: [
            { title: 'Pipeline Stalls, Loop unrolling', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Prefetching', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Branch Prediction', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw1' },
            { type: 'assigned', hw: 'hw2' },
          ],
        },
      ],
    },
    {
      theme: 'Speculative Execution',
      days: [
        {
          date: 'Oct 19',
          alternatives: true,
          lectures: [
            { title: 'Speculative Execution from a Security Perspective', note: 'potential guest lecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Runahead Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 22',
          alternatives: true,
          lectures: [
            { title: 'Speculative Execution from a Security Perspective', note: 'potential guest lecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Runahead Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'note', icon: 'hourglass-half', text: 'Homework 2 continues' }],
        },
      ],
    },
    {
      theme: 'Multi-Core Architectures',
      days: [
        {
          date: 'Oct 26',
          lectures: [
            { title: 'Multi-Core Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Memory Consistency', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 29',
          lectures: [
            { title: 'Cache Coherency', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Cache Pollution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw2' },
            { type: 'assigned', hw: 'hw3' },
          ],
        },
      ],
    },
    {
      theme: 'Parallel Execution and GPU Architecture',
      days: [
        {
          date: 'Nov 2',
          lectures: [
            { title: "Parallelism, Heterogeneity, Flynn's Taxonomy", pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'GPU Architecture and Predicated Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 5',
          note: 'No lectures',
          events: [{ type: 'note', icon: 'hourglass-half', text: 'Homework 3 continues' }],
        },
      ],
    },
    {
      theme: 'Midterm Week',
      days: [
        {
          date: 'Nov 9',
          lectures: [
            { number: 'LR1', title: 'Review Session', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 12',
          exam: 'Midterm Exam',
          events: [{ type: 'note', icon: 'hourglass-half', text: 'Homework 3 continues' }],
        },
      ],
    },
    {
      theme: 'Memory Robustness',
      days: [
        {
          date: 'Nov 16',
          lectures: [
            { title: 'Data Retention and Refresh', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Read Disturbance I: RowHammer, RowPress, and ColumnPress', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 19',
          lectures: [
            { title: 'Read Disturbance II: Mitigations', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Memory Performance and Cold Boot Attacks', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw3' },
            { type: 'assigned', hw: 'hw4' },
          ],
        },
      ],
    },
    {
      theme: 'Emerging and Killed Memory Architectures',
      days: [
        {
          date: 'Nov 23',
          lectures: [
            { title: 'Phase-Change Memory, STT-MRAM, Resistive Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Monolithic 3D Integration', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 26',
          lectures: [
            { title: 'NAND Flash Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Memory-Centric Computation',
      days: [
        {
          date: 'Nov 30',
          lectures: [
            { title: 'Processing Near and Using Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Processing Near and Using Flash Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Dec 3',
          lectures: [
            { title: 'Memory Centric Computing', note: 'guest lecture by Geraldo F. de Oliveira Jr., Huawei Zurich', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'note', icon: 'hourglass-half', text: 'Homework 4 continues' }],
        },
      ],
    },
    {
      theme: 'System on Chip',
      days: [
        {
          date: 'Dec 7',
          lectures: [
            { title: 'Accelerators, Systolic Arrays', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Neuromorphic Computation', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Dec 10',
          lectures: [
            { title: 'On-Chip Networks', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Interrupts and Polling', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'due', hw: 'hw4' }],
        },
      ],
    },
    {
      theme: 'Application-Oriented Architectures',
      days: [
        {
          date: 'Dec 14',
          lectures: [
            { title: 'Neural Networks and LLM Accelerators', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Architecture Solutions to Bioinformatics Workloads', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Dec 17',
          lectures: [
            { title: 'Agent-based Simulations', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Graph Accelerators', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Final Exam',
      days: [
        {
          date: 'Dec 21',
          note: 'Review Session',
          events: [
            { type: 'due', hw: 'bonus1' },
            { type: 'note', icon: 'clock', text: 'Late Submission Cut-Off for All Labs' },
          ],
        },
        { date: 'Dec 24', exam: 'Final Exam' },
      ],
    },
  ],

  contact_notes: [
    'This course is offered by the Department of Computer Engineering at Bilkent University. Course website hosted by the <a href="https://sal-research.github.io">Secure and Sustainable System Scaling Lab</a>.',
  ],
};
