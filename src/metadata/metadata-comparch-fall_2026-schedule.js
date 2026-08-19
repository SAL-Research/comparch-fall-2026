// Weekly schedule for CS 423/520 Computer Architecture (Bilkent, Fall 2026).
//
// Structure: weeks -> days -> lectures. Lecture numbers (L1a, L2b, ...) are
// computed by the build: the day number counts lecture days across the course,
// and the part letter (a, b, c) is the lecture's position within its day
// (omitted for single-lecture days). Do not put lecture numbers in this file.
// Exceptions: an explicit `number` (e.g. 'LR1') or `exam: true` keeps a day
// out of the count; `alternatives: true` on a day marks mutually exclusive
// candidate lectures that share the plain day number.
//
// During the semester, populate lecture materials by replacing 'TBA' with a
// URL (pptx, pdf, video). Lectures reference reading materials by
// `required_readings: ['<key>', ...]` and `optional_readings: [...]`
// (optional) keys defined in the readings metadata file; a reading may be
// required in one lecture and optional in another.

module.exports = {
  schedule_note: 'Slides (PPTX and PDF) and lecture videos will be linked next to each lecture as the semester progresses.',
  weeks: [
    {
      theme: 'Introduction and Foundation',
      days: [
        {
          date: 'Sep 17',
          lectures: [
            { title: 'Course Info and Logistics', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Computer Organization and Design Principles: Introduction and Basics', pptx: 'TBA', pdf: 'TBA', video: 'TBA', required_readings: [], optional_readings: ['hamming1986you'] },
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
              required_readings: ['smith1985precise', 'patt1985hps', 'patt1985critical', 'hwu1987checkpoint', 'patt2001requirements'],
              optional_readings: [] },
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
            { title: 'Virtual Memory and Translation Lookaside Buffer', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Critical Paper Reviews in Computer Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'assigned', hw: 'bonus1' }],
        },
        {
          date: 'Oct 8',
          lectures: [
            { title: 'Simplescalar and Superscalar', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Dataflow', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
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
            { title: 'Speculative Execution from a Security Perspective (Subject to Change)', note: 'Guest Lecture by <a href="https://misc0110.net">Michael Schwarz</a>', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 22',
          alternatives: true,
          lectures: [
            { title: 'Runahead Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
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
          note: 'No lectures',
        },
      ],
    },
    {
      theme: 'Parallel Execution and GPU Architecture',
      days: [
        {
          date: 'Nov 2',
          lectures: [
            { title: 'Cache Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw2' },
            { type: 'assigned', hw: 'hw3' },
          ],
        },
        {
          date: 'Nov 5',
          
          lectures: [
            { title: "Parallelism, Heterogeneity, Flynn's Taxonomy", pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'GPU Architecture and Predicated Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
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
          ]
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
          events: [
            { type: 'due', hw: 'hw3' },
            { type: 'assigned', hw: 'hw4' },
          ]
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
          ]
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
          events: [{ type: 'due', hw: 'hw4' }],
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
};
