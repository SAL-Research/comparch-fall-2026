// Reading materials for CS 423/520 Computer Architecture (Bilkent, Fall 2026),
// organized like the lab site's metadata-publications.js.
//
// Lectures reference these by `readings: ['<key>', ...]`; the build collects
// the relevant lectures for each paper and renders readings.html.
//
// Links are modeled as resources: each resource has a `resourcename` (Paper,
// Slides, Video, ...) and a list of links, each with a `fileformat` label and
// a `url`. Only add a resource once it has at least one real link — absent
// resources simply don't render. Example:
//   resources: [
//     { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: '...' }] },
//     { resourcename: 'Slides', links: [
//       { fileformat: 'pptx', url: '...' },
//       { fileformat: 'pdf', url: '...' },
//     ] },
//   ],

module.exports = {
  readings: [
    {
      key: 'hamming1986you',
      title: 'You and Your Research',
      authors: [
        { firstname: 'Richard', lastname: 'Hamming' },
      ],
      venue: 'Bell Communications Research Colloquium',
      type: 'talk',
      year: 1986,
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'readings/hamming1986you.pdf' }] },
        { resourcename: 'Video', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/watch?v=a1zDuOPkMSw' }] },
      ],
    },
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
      resources: [],
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
      resources: [],
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
      resources: [],
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
      resources: [],
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
      resources: [],
    },
  ],
};
