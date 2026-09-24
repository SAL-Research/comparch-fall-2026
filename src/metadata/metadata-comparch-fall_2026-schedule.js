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
  schedule_note: 'Slides (PPTX and PDF) and lecture videos will be linked next to each lecture as the semester progresses. Video recordings will be collected in the course\'s <a href="https://www.youtube.com/playlist?list=PLW6NIJ89f9Z4">YouTube Playlist</a>',
  weeks: [
    {
      theme: 'Introduction and Foundation',
      days: [
        {
          date: 'Sep 17',
          video: 'https://youtube.com/live/ydWcSpEcL-8?feature=share',
          lectures: [
            { 
              title: 'Course Info and Logistics', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l1a-course_info_and_logistics-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l1a-course_info_and_logistics-after_lecture.pdf'
            },
            { 
              title: 'Computer Organization and Design Principles: Introduction and Basics', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l1b-computer_organization_and_design_principles_introduction_and_basics-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l1b-computer_organization_and_design_principles_introduction_and_basics-after_lecture.pdf', 
              required_readings: [
                { key: 'hennessy2017computer', part: 'Chapter 1' }
              ], 
              optional_readings: [
                'hamming1986you', 
                'jouppi2017indatacenter', 
                'lee2013tiered', 
                'patterson1980case', 
                'kim2014flipping'
              ]
            },
          ],
        },
      ],
    },
    {
      theme: 'Pipelined Microarchitecture Fundamentals',
      days: [
        {
          date: 'Sep 21',
          video: 'https://youtube.com/live/aFG72U8NA3E?feature=share',
          lectures: [
            { title: 'ISA Design Principles', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l2a-isa_design_principles-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l2a-isa_design_principles-after_lecture.pdf', 
              required_readings: [
                { key: 'hennessy2017computer', part: 'Chapter 1' }
              ],
              optional_readings: [
                {key: 'patt2003introduction', part: 'Chapter 4'},
                {key: 'harris2007digital', part: 'Chapters 6 and 7'},
                'patterson1980case',
                'burks1947preliminary'
              ]
            },
            { 
              title: 'Performance Evaluation', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l2b-performance_evaluation-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l2b-performance_evaluation-after_lecture.pdf', 
              required_readings: [
                { key: 'hennessy2017computer', part: 'Chapter 1' }
              ]
            },
            // { title: 'Trends, Tradeoffs and Design Fundamentals of Computer Architecture', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Sep 24',
          video: 'https://youtube.com/live/0kXJYZkH7IQ?feature=share',
          lectures: [
            { 
              title: 'Performance Evaluation', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l3a-performance_evaluation-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l3a-performance_evaluation-after_lecture.pdf', 
              required_readings: [
                { key: 'hennessy2017computer', part: 'Chapter 1' }
              ],
              optional_readings: [
                {key: 'harris2007digital', part: 'Chapter 7.3'},
                {key: 'harris2007digital', part: 'Chapter 7.4'},
                'amdahl1967validity',
                'madhav2026spec',
                'gonzalez1996energy'
              ]
            },
            { 
              title: 'In-Order Pipelined CPU Design', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l3b-inorder_pipeline-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l3b-inorder_pipeline-after_lecture.pdf', 
              required_readings: [
                {key: 'harris2007digital', part: 'Chapter 7.3'},
                {key: 'harris2007digital', part: 'Chapter 7.4'},
                {key: 'harris2007digital', part: 'Chapter 7.5'},
              ]
            },
          ],
          events: [{ type: 'assigned', hw: 'hw1' }],
        },
      ],
    },
    {
      theme: 'No Lectures',
      days: [
        { date: 'Sep 28', note: 'No lecture', video: 'N/A'},
        { date: 'Oct 1', note: 'No lecture', video: 'N/A'},
      ],
    },
    {
      theme: 'Pipeline Hazards, Out-of-Order Execution, Precise Exceptions, and Interrupts',
      days: [
        {
          date: 'Oct 5',
          video: 'https://youtube.com/live/IWXalgEIhJg?feature=share',
          lectures: [
            { 
              title: 'Pipeline Hazards', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l4a-pipeline_hazards-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l4a-pipeline_hazards-after_lecture.pdf'},
            { 
              title: 'Out-of-Order Pipeline Design', 
              pptx: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l4b-ooo_pipeline-after_lecture.pptx', 
              pdf: 'https://github.com/SAL-Research/comparch-fall-2026/raw/refs/heads/main/assets/slides/giray-comparch-2026-fall-l4b-ooo_pipeline-after_lecture.pdf'
            },
          ],
        },
        {
          date: 'Oct 8',
          video: 'TBA',
          lectures: [
            { title: 'Precise Exceptions and Interrupts', pptx: 'TBA', pdf: 'TBA'},
            { 
              title: 'High Performance Substrate (HPS) and Checkpoint Repair', 
              pptx: 'TBA', 
              pdf: 'TBA', 
              required_readings: [
                'smith1985precise', 
                'patt1985hps', 
                'hwu1987checkpoint'
              ],
              optional_readings: [
                'patt1985critical',
                'patt2001requirements'
              ] 
            },
            { title: 'Critical Paper Reviews in Computer Architecture', pptx: 'TBA', pdf: 'TBA'},
          ],
          events: [{ type: 'assigned', hw: 'bonus1' }],
        },
      ],
    },
    {
      theme: 'Bottlenecks and Latency Tolerance',
      days: [
        {
          date: 'Oct 12',
          video: 'TBA',
          lectures: [
            { title: 'Pipeline Stalls', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Branch Prediction', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Oct 15',
          video: 'TBA',
          lectures: [
            { title: 'Prefetching', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Runahead Execution', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Oct 18',
          video: 'TBA',
          note: 'Sunday, no lecture (deadline 23:59)',
          events: [
            { type: 'due', hw: 'hw1' },
          ],
        },
      ],
    },
    {
      theme: 'Speculative Execution and Memory',
      days: [
        {
          date: 'Oct 19',
          video: 'TBA',
          lectures: [
            { title: 'Speculative Execution from a Security Perspective (Subject to Change)', note: 'Guest Lecture by <a href="https://misc0110.net">Michael Schwarz</a>', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Oct 22',
          video: 'TBA',
          lectures: [
            { title: 'Cache Organization and Design', pptx: 'TBA', pdf: 'TBA'},
            { title: 'DRAM Architecture', pptx: 'TBA', pdf: 'TBA'},
            // { title: 'Simplescalar and Superscalar', pptx: 'TBA', pdf: 'TBA'},
            // { title: 'Dataflow and VLIW', pptx: 'TBA', pdf: 'TBA', video: 'TBA',
            // //   optional_readings: ['ebcioglu1997daisy']
            // },
          ],
          events: [
            { type: 'assigned', hw: 'hw2' },
          ],
        },
      ],
    },
    {
      theme: 'Memory Request Scheduling',
      days: [
        {
          date: 'Oct 26',
          video: 'TBA',
          lectures: [
            { title: 'Memory Request Scheduling', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Memory Consistency', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Oct 29',
          video: 'TBA',
          note: 'No lecture (Republic Day)',
        },
      ],
    },
    {
      theme: 'Multi-Core Architectures, Parallelism, and GPUs',
      days: [
        {
          date: 'Nov 2',
          video: 'TBA',
          note: 'No lecture (Conference Conflict)'
        },
        {
          date: 'Nov 5',
          video: 'TBA',
          lectures: [
            { title: 'Multi-Core Architecture', pptx: 'TBA', pdf: 'TBA'},
            { title: "Parallelism, Heterogeneity, Flynn's Taxonomy", pptx: 'TBA', pdf: 'TBA'},
            { title: 'GPU Architecture and Predicated Execution', pptx: 'TBA', pdf: 'TBA'},
          ],
          events: [
            { type: 'due', hw: 'hw2' },
            { type: 'assigned', hw: 'hw3' },
          ],
        },
      ],
    },
    {
      theme: 'Midterm Week',
      days: [
        {
          date: 'Nov 9',
          video: 'TBA',
          lectures: [
            { number: 'LR1', title: 'Review Session', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Nov 12',
          video: 'TBA',
          exam: 'Midterm Exam',
        },
      ],
    },
    {
      theme: 'Memory Robustness',
      days: [
        {
          date: 'Nov 16',
          video: 'TBA',
          lectures: [
            { title: 'Data Retention and Refresh', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Read Disturbance I: RowHammer, RowPress, and ColumnDisturb', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Nov 19',
          video: 'TBA',
          lectures: [
            { title: 'Read Disturbance II: Mitigations', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Memory Performance and Cold Boot Attacks', pptx: 'TBA', pdf: 'TBA'},
          ]
        },
      ],
    },
    {
      theme: 'Emerging and Killed Memory Architectures',
      days: [
        {
          date: 'Nov 23',
          video: 'TBA',
          lectures: [
            { title: 'Phase-Change Memory, STT-MRAM, Resistive Memory', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Monolithic 3D Integration', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Nov 26',
          video: 'TBA',
          lectures: [
            { title: 'NAND Flash Memory', pptx: 'TBA', pdf: 'TBA'},
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
          video: 'TBA',
          lectures: [
            { title: 'Processing Near and Using Memory', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Processing Near and Using Flash Memory', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Dec 3',
          video: 'TBA',
          lectures: [
            { title: 'Memory Centric Computing', note: 'guest lecture by Geraldo F. de Oliveira Jr., Huawei Zurich', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
      ],
    },
    {
      theme: 'System on Chip',
      days: [
        {
          date: 'Dec 7',
          video: 'TBA',
          lectures: [
            { title: 'Accelerators, Systolic Arrays', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Neuromorphic Computation', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Dec 10',
          video: 'TBA',
          lectures: [
            { title: 'On-Chip Networks', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Interrupts and Polling', pptx: 'TBA', pdf: 'TBA'},
          ]
        },
      ],
    },
    {
      theme: 'Application-Oriented Architectures',
      days: [
        {
          date: 'Dec 14',
          video: 'TBA',
          lectures: [
            { title: 'Neural Networks and LLM Accelerators', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Architecture Solutions to Bioinformatics Workloads', pptx: 'TBA', pdf: 'TBA'},
          ],
        },
        {
          date: 'Dec 17',
          video: 'TBA',
          lectures: [
            { title: 'Agent-based Simulations', pptx: 'TBA', pdf: 'TBA'},
            { title: 'Graph Accelerators', pptx: 'TBA', pdf: 'TBA'},
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
          video: 'TBA',
          note: 'Review Session',
          video: 'TBA',
        },
        { date: 'Dec 24', exam: 'Final Exam' },
        {
          date: 'Dec 27',
          video: 'TBA',
          note: 'Sunday, no lecture (deadline 23:59)',
          events: [
            { type: 'due', hw: 'bonus1' },
            { type: 'note', icon: 'clock', text: 'Late Submission Cut-Off for All Labs' },
          ],
        },
      ],
    },
  ],
};
