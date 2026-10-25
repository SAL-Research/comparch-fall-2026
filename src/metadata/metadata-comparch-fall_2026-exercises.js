// Exercise materials for CS 423/520 Computer Architecture (Bilkent, Fall 2026).
// Rendered into exercises.html. Each item links an exam PDF and its solutions;
// add new sections/items as more material becomes available.

module.exports = {
  exercises: {
    intro: 'Past exams for practice, from two courses taught by Prof. Onur Mutlu at ETH Zürich (SAFARI Research Group), which this course draws on: <a href="https://safari.ethz.ch/architecture/fall2025/">Computer Architecture</a> and <a href="https://safari.ethz.ch/ddca/spring2026/">Digital Design and Computer Architecture</a> (DDCA). Coverage differs from this course — use the <a href="index.html#schedule">schedule</a> as the reference for what is in scope.',
    sections: [
      {
        title: 'Computer Architecture (ETH Zürich): Midterm Exams',
        items: [
          { label: 'Fall 2019 Midterm Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=midterm-fs19-final.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=midterm-fs19-sol-final.pdf' },
          { label: 'Fall 2018 Midterm Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=midterm-fs18-final.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=midterm-fs18-sol-final.pdf' },
          { label: 'Fall 2017 Midterm Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=main-midterm.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=main-sol-midterm.pdf' },
        ],
      },
      {
        title: 'Computer Architecture (ETH Zürich): Final Exams',
        items: [
          { label: 'Fall 2024 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2024.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2024-sol.pdf' },
          { label: 'Fall 2023 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2023.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2023-sol.pdf' },
          { label: 'Fall 2022 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2022.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2022-sol.pdf' },
          { label: 'Fall 2021 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2021.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs-2021-solution.pdf' },
          { label: 'Fall 2020 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs20.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs2020-sol.pdf' },
          { label: 'Fall 2019 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs19.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs2019-sol.pdf' },
          { label: 'Fall 2018 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs18.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=final-fs2018-sol.pdf' },
          { label: 'Fall 2017 Final Exam', exam: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=main-final.pdf', solutions: 'https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=main-sol-final.pdf' },
        ],
      },
      {
        title: 'Digital Design and Computer Architecture (ETH Zürich): Final Exams',
        note: 'DDCA is ETH\'s first-year course. Practice its questions on ISA vs. microarchitecture, performance evaluation, pipelining, Tomasulo\'s algorithm and out-of-order execution, branch prediction, caches, and prefetching. Its Boolean logic, finite state machine, and Verilog questions are not part of this course.',
        items: [
          { label: 'Spring 2025 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=ddca-s25-en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=ddca-s25-en-sol.pdf' },
          { label: 'Spring 2023 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=ddca-s23-en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=ddca-s23-en-sol.pdf' },
          { label: 'Spring 2022 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s22-en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s22-en-sol.pdf' },
          { label: 'Spring 2021 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s21-en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s21-en-sol.pdf' },
          { label: 'Spring 2020 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s20-en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s20-en-sol.pdf' },
          { label: 'Spring 2019 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s19-en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik-s19-en-sol.pdf' },
          { label: 'Spring 2018 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik_s18_final_noscratchpad_en.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=digitaltechnik_s18_final_en-sol.pdf' },
          { label: 'Spring 2017 Final Exam', exam: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=main-spring2017.pdf', solutions: 'https://safari.ethz.ch/ddca/spring2025/lib/exe/fetch.php?media=main-spring2017-sol.pdf' },
        ],
      },
    ],
  },
};
