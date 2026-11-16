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

// `bonus: true` puts a reading on the bonus-HW paper list (homeworks.html#bonus-papers).
// The list is dynamic: add the flag when the paper's lecture is delivered, and update
// `bonus_list_updated` in metadata-comparch-fall_2026.js.

module.exports = {
  readings: [
    {
      key: 'hamming1986you',
      title: 'You and Your Research',
      authors: [
        { firstname: 'Richard W.', lastname: 'Hamming' },
      ],
      venue: 'Bell Communications Research (Bellcore) Colloquium Series, Morristown, NJ',
      type: 'talk',
      year: 1986,
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'readings/hamming1986you.pdf' }, { fileformat: 'link', url: 'https://www.cs.virginia.edu/~robins/YouAndYourResearch.html' }] },
        { resourcename: 'Video (1995 version of the talk)', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/watch?v=a1zDuOPkMSw' }] },
      ],
    },
    {
      key: 'smith1988implementing',
      title: 'Implementing Precise Interrupts in Pipelined Processors',
      authors: [
        { firstname: 'James E.', lastname: 'Smith' },
        { firstname: 'Andrew R.', lastname: 'Pleszkun' },
      ],
      venue: 'IEEE Transactions on Computers, vol. 37, no. 5',
      type: 'journal',
      year: 1988,
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://www.cs.virginia.edu/~evans/greatworks/smith.pdf' }] },
        { resourcename: 'Paper (shorter ISCA 1985 version)', links: [{ fileformat: 'pdf', url: 'https://www.cs.ucf.edu/~lboloni/Teaching/EEL5708_2006/slides/p36-smith.pdf' }] },
      ],
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
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/18927.18916' }] },
      ],
    },
    {
      key: 'patt1985critical',
      bonus: true,  // eligible for the bonus HW (paper reviews)
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
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/18927.18917' }] },
      ],
    },
    {
      key: 'hwu1987checkpoint',
      title: 'Checkpoint Repair for High-Performance Out-of-Order Execution Machines',
      authors: [
        { firstname: 'Wen-mei W.', lastname: 'Hwu' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      venue: 'IEEE Transactions on Computers, vol. C-36, no. 12',
      type: 'journal',
      year: 1987,
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/TC.1987.5009500' }] },
        { resourcename: 'Paper (shorter ISCA 1987 version)', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/30350.30353' }] },
      ],
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
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/5.964437' }] },
      ],
    },
    {
      key: 'ebcioglu1997daisy',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'DAISY: Dynamic Compilation for 100% Architectural Compatibility',
      authors: [
        { firstname: 'Kemal', lastname: 'Ebcioğlu'},
        { firstname: 'Erik R.', lastname: 'Altman'},
      ],
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      year: 1997,
      resources: [
         { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'readings/ebcioglu1997daisy.pdf' }] },
         { resourcename: 'Web', links: [{ fileformat: 'link', url: 'https://research.ibm.com/publications/daisy-dynamic-compilation-for-100percent-architectural-compatibility' }] },
      ],
    },
    {
      key: 'hennessy2012computer',
      title: 'Computer Architecture: A Quantitative Approach, 5th Edition',
      authors: [
        { firstname: 'John L.', lastname: 'Hennessy' },
        { firstname: 'David A.', lastname: 'Patterson' },
      ],
      venue: 'Morgan Kaufmann',
      type: 'book',
      year: 2012,
      resources: [
        { resourcename: 'Book', links: [{ fileformat: 'link', url: 'https://books.google.com.tr/books/about/Computer_Architecture.html?id=v3-1hVwHnHwC&redir_esc=y' }, { fileformat: 'link', url: 'https://shop.elsevier.com/books/computer-architecture/hennessy/978-0-12-383872-8' }] },
      ],
    },
    {
      key: 'harris2007digital',
      title: 'Digital Design and Computer Architecture',
      authors: [
        { firstname: 'David', lastname: 'Harris' },
        { firstname: 'Sarah', lastname: 'Harris' },
      ],
      venue: 'Morgan Kaufmann',
      type: 'book',
      year: 2007,
      resources: [
        { resourcename: 'Book', links: [{ fileformat: 'link', url: 'https://www.elsevier.com/books/digital-design-and-computer-architecture/harris/978-0-12-370497-9' }] },
      ],
    },
    {
      key: 'patt2003introduction',
      title: 'Introduction to Computing Systems: From Bits & Gates to C & Beyond, 2nd Edition',
      authors: [
        { firstname: 'Yale N.', lastname: 'Patt' },
        { firstname: 'Sanjay J.', lastname: 'Patel' },
      ],
      venue: 'McGraw-Hill',
      type: 'book',
      year: 2003,
      resources: [
        { resourcename: 'Book', links: [{ fileformat: 'link', url: 'https://books.google.de/books/about/Introduction_to_Computing_Systems_From_B.html?id=g9TRwAEACAAJ&redir_esc=y' }] },
      ],
    },
    {
      key: 'jouppi2017indatacenter',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'In-Datacenter Performance Analysis of a Tensor Processing Unit',
      authors: [
        { firstname: 'Norman P.', lastname: 'Jouppi' },
        { firstname: 'Cliff', lastname: 'Young' },
        { firstname: 'Nishant', lastname: 'Patil' },
        { firstname: 'David', lastname: 'Patterson' },
        { firstname: 'Gaurav', lastname: 'Agrawal' },
        { firstname: 'Raminder', lastname: 'Bajwa' },
        { firstname: 'Sarah', lastname: 'Bates' },
        { firstname: 'Suresh', lastname: 'Bhatia' },
        { firstname: 'Nan', lastname: 'Boden' },
        { firstname: 'Al', lastname: 'Borchers' },
        { firstname: 'Rick', lastname: 'Boyle' },
        { firstname: 'Pierre-luc', lastname: 'Cantin' },
        { firstname: 'Clifford', lastname: 'Chao' },
        { firstname: 'Chris', lastname: 'Clark' },
        { firstname: 'Jeremy', lastname: 'Coriell' },
        { firstname: 'Mike', lastname: 'Daley' },
        { firstname: 'Matt', lastname: 'Dau' },
        { firstname: 'Jeffrey', lastname: 'Dean' },
        { firstname: 'Ben', lastname: 'Gelb' },
        { firstname: 'Tara Vazir', lastname: 'Ghaemmaghami' },
        { firstname: 'Rajendra', lastname: 'Gottipati' },
        { firstname: 'William', lastname: 'Gulland' },
        { firstname: 'Robert', lastname: 'Hagmann' },
        { firstname: 'C. Richard', lastname: 'Ho' },
        { firstname: 'Doug', lastname: 'Hogberg' },
        { firstname: 'John', lastname: 'Hu' },
        { firstname: 'Robert', lastname: 'Hundt' },
        { firstname: 'Dan', lastname: 'Hurt' },
        { firstname: 'Julian', lastname: 'Ibarz' },
        { firstname: 'Aaron', lastname: 'Jaffey' },
        { firstname: 'Alek', lastname: 'Jaworski' },
        { firstname: 'Alexander', lastname: 'Kaplan' },
        { firstname: 'Harshit', lastname: 'Khaitan' },
        { firstname: 'Daniel', lastname: 'Killebrew' },
        { firstname: 'Andy', lastname: 'Koch' },
        { firstname: 'Naveen', lastname: 'Kumar' },
        { firstname: 'Steve', lastname: 'Lacy' },
        { firstname: 'James', lastname: 'Laudon' },
        { firstname: 'James', lastname: 'Law' },
        { firstname: 'Diemthu', lastname: 'Le' },
        { firstname: 'Chris', lastname: 'Leary' },
        { firstname: 'Zhuyuan', lastname: 'Liu' },
        { firstname: 'Kyle', lastname: 'Lucke' },
        { firstname: 'Alan', lastname: 'Lundin' },
        { firstname: 'Gordon', lastname: 'MacKean' },
        { firstname: 'Adriana', lastname: 'Maggiore' },
        { firstname: 'Maire', lastname: 'Mahony' },
        { firstname: 'Kieran', lastname: 'Miller' },
        { firstname: 'Rahul', lastname: 'Nagarajan' },
        { firstname: 'Ravi', lastname: 'Narayanaswami' },
        { firstname: 'Ray', lastname: 'Ni' },
        { firstname: 'Kathy', lastname: 'Nix' },
        { firstname: 'Thomas', lastname: 'Norrie' },
        { firstname: 'Mark', lastname: 'Omernick' },
        { firstname: 'Narayana', lastname: 'Penukonda' },
        { firstname: 'Andy', lastname: 'Phelps' },
        { firstname: 'Jonathan', lastname: 'Ross' },
        { firstname: 'Matt', lastname: 'Ross' },
        { firstname: 'Amir', lastname: 'Salek' },
        { firstname: 'Emad', lastname: 'Samadiani' },
        { firstname: 'Chris', lastname: 'Severn' },
        { firstname: 'Gregory', lastname: 'Sizikov' },
        { firstname: 'Matthew', lastname: 'Snelham' },
        { firstname: 'Jed', lastname: 'Souter' },
        { firstname: 'Dan', lastname: 'Steinberg' },
        { firstname: 'Andy', lastname: 'Swing' },
        { firstname: 'Mercedes', lastname: 'Tan' },
        { firstname: 'Gregory', lastname: 'Thorson' },
        { firstname: 'Bo', lastname: 'Tian' },
        { firstname: 'Horia', lastname: 'Toma' },
        { firstname: 'Erick', lastname: 'Tuttle' },
        { firstname: 'Vijay', lastname: 'Vasudevan' },
        { firstname: 'Richard', lastname: 'Walter' },
        { firstname: 'Walter', lastname: 'Wang' },
        { firstname: 'Eric', lastname: 'Wilcox' },
        { firstname: 'Doe Hyun', lastname: 'Yoon' }
      ],
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/1704.04760' }] },
        { resourcename: 'Video', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/watch?v=fhHAArxwzvQ' }] },
      ],
      year: 2017,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference'
    },
    {
      key: 'mutlu2023flipping',
      title: 'Retrospective: Flipping Bits in Memory Without Accessing Them: An Experimental Study of DRAM Disturbance Errors',
      authors: [
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2023,
      venue: 'ISCA@50 25-Year Retrospective: 1996-2020 (ACM SIGARCH and IEEE TCCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://sites.coecis.cornell.edu/isca50retrospective/files/2023/06/Kim_2014_Flipping.pdf' }, { fileformat: 'pdf', url: 'https://arxiv.org/pdf/2306.16093' }] },
      ],
    },
    {
      key: 'lee2013tiered',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Tiered-Latency DRAM: A Low Latency and Low Cost DRAM Architecture',
      authors: [
        { firstname: 'Donghyuk', lastname: 'Lee' },
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Vivek', lastname: 'Seshadri' },
        { firstname: 'Jamie', lastname: 'Liu' },
        { firstname: 'Lavanya', lastname: 'Subramanian' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2013,
      venue: 'International Symposium on High Performance Computer Architecture (HPCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/tldram_hpca13.pdf'}]},
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/lee_hpca13_talk.pptx' }]}
      ],
    },
    {
      key: 'patterson1980case',
      title: 'The Case for the Reduced Instruction Set Computer',
      authors: [
        { firstname: 'David A.', lastname: 'Patterson' },
        { firstname: 'David R.', lastname: 'Ditzel' },
      ],
      year: 1980,
      venue: 'ACM SIGARCH Computer Architecture News, vol. 8, no. 6',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.eecs.berkeley.edu/~kubitron/courses/cs252-F00/handouts/papers/patterson80.pdf'}] },
      ],
    },
    {
      key: 'kim2014flipping',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Flipping Bits in Memory Without Accessing Them: An Experimental Study of DRAM Disturbance Errors',
      authors: [
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Ross', lastname: 'Daly' },
        { firstname: 'Jeremie', lastname: 'Kim' },
        { firstname: 'Chris', lastname: 'Fallin' },
        { firstname: 'Ji Hye', lastname: 'Lee' },
        { firstname: 'Donghyuk', lastname: 'Lee' },
        { firstname: 'Chris', lastname: 'Wilkerson' },
        { firstname: 'Konrad', lastname: 'Lai' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2014,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/dram-row-hammer_isca14.pdf'}] },
        { resourcename: 'Presentation', links: [
          { fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/dram-row-hammer_kim_talk_isca14.pptx'},
          { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/dram-row-hammer_kim_talk_isca14.pdf'}]},
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://www.youtube.com/watch?v=KDy632z23UE'}] }
      ],
    },
    {
      key: 'burks1946preliminary',
      title: 'Preliminary Discussion of the Logical Design of an Electronic Computing Instrument',
      authors: [
        { firstname: 'Arthur W.', lastname: 'Burks' },
        { firstname: 'Herman H.', lastname: 'Goldstine' },
        { firstname: 'John', lastname: 'von Neumann' },
      ],
      year: 1946,
      venue: 'Institute for Advanced Study, Princeton, NJ (technical report)',
      type: 'report',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://safari.ethz.ch/architecture/fall2022/lib/exe/fetch.php?media=preliminary_discussion_burks1946.pdf'}] },
      ],
    },
    {
      key: 'amdahl1967validity',
      title: 'Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities',
      authors: [
        { firstname: 'Gene M.', lastname: 'Amdahl' },
      ],
      year: 1967,
      venue: 'AFIPS Spring Joint Computer Conference',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://safari.ethz.ch/digitaltechnik/spring2021/lib/exe/fetch.php?media=amdahl.pdf'}] },
      ],
    },
    {
      key: 'madhav2026spec',
      title: 'SPEC CPU: The Next Generation',
      authors: [
        {firstname: 'Mahesh', lastname: 'Madhav'},
        {firstname: 'Allen', lastname: 'Lee'},
        {firstname: 'Andres', lastname: 'Mejia'},
        {firstname: 'Branden', lastname: 'Moore'},
        {firstname: 'Charan', lastname: 'Soppadandi'},
        {firstname: 'Chris', lastname: 'Cambly'},
        {firstname: 'Christoph', lastname: 'Müllner'},
        {firstname: 'Daniel', lastname: 'Bowers'},
        {firstname: 'David', lastname: 'Reiner'},
        {firstname: 'Denis', lastname: 'Bakhvalov'},
        {firstname: 'Di', lastname: 'Zhao'},
        {firstname: 'Duane', lastname: 'Voth'},
        {firstname: 'Feng', lastname: 'Xue'},
        {firstname: 'Frédérique', lastname: 'Silber-Chaussumier'},
        {firstname: 'James', lastname: 'Bucek'},
        {firstname: 'James', lastname: 'Southern'},
        {firstname: 'Jiangning', lastname: 'Liu'},
        {firstname: 'Jim', lastname: 'Himer'},
        {firstname: 'John', lastname: 'Henning'},
        {firstname: 'Kevin', lastname: 'Smith'},
        {firstname: 'Kristen', lastname: 'Yang'},
        {firstname: 'Kunal', lastname: 'Kashyap'},
        {firstname: 'Mason', lastname: 'Guy'},
        {firstname: 'Mat', lastname: 'Colgrove'},
        {firstname: 'Michael', lastname: 'Berg'},
        {firstname: 'Prasad', lastname: 'Battini'},
        {firstname: 'Prasad', lastname: 'Joshi'},
        {firstname: 'Rohit', lastname: 'Prasad'},
        {firstname: 'Shayantika', lastname: 'Bhattacharya'},
        {firstname: 'Sriyash', lastname: 'Caculo'},
        {firstname: 'Stefan', lastname: 'Reimbold'},
        {firstname: 'Sundar', lastname: 'Iyengar'},
        {firstname: 'Van', lastname: 'Smith'},
        {firstname: 'Zarko', lastname: 'Todorovski'},
      ],
      year: 2026,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2605.01575'}]},
        { resourcename: 'Presentation', links: [{ fileformat: 'video', url: 'https://youtu.be/bLyeWRO47TI'}] }
      ],
    },
    {
      key: 'gonzalez1996energy',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Energy Dissipation in General Purpose Microprocessors',
      authors: [
        { firstname: 'Ricardo', lastname: 'Gonzalez' },
        { firstname: 'Mark', lastname: 'Horowitz' }
      ],
      year: 1996,
      venue: 'IEEE Journal of Solid-State Circuits, vol. 31, no. 9',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://iacoma.cs.uiuc.edu/CS497/LP4.pdf'}] },
      ],
    },
    {
      key: 'tomasulo1967efficient',
      title: 'An Efficient Algorithm for Exploiting Multiple Arithmetic Units',
      authors: [
        { firstname: 'Robert M.', lastname: 'Tomasulo' },
      ],
      year: 1967,
      venue: 'IBM Journal of Research and Development, vol. 11, no. 1',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://www.cs.virginia.edu/~evans/greatworks/tomasulo.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/watch?v=h6RQi6y5iTI' }] },
      ],
    },
    {
      key: 'smith1995microarchitecture',
      title: 'The Microarchitecture of Superscalar Processors',
      authors: [
        { firstname: 'James E.', lastname: 'Smith' },
        { firstname: 'Gurindar S.', lastname: 'Sohi' },
      ],
      year: 1995,
      venue: 'Proceedings of the IEEE, vol. 83, no. 12',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://minds.wisc.edu/bitstreams/5652e1b7-32e3-4b34-886f-e2de8a864da8/download' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/watch?v=5kGI2EHURSY' }] },
      ],
    },
    {
      key: 'chrysos1998memory',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Memory Dependence Prediction Using Store Sets',
      authors: [
        { firstname: 'George Z.', lastname: 'Chrysos' },
        { firstname: 'Joel S.', lastname: 'Emer' },
      ],
      year: 1998,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://www.eecg.utoronto.ca/~moshovos/ACA08/readings/p142-chrysos.pdf' }] },
      ],
    },
    {
      key: 'dennis1975preliminary',
      title: 'A Preliminary Architecture for a Basic Data-Flow Processor',
      authors: [
        { firstname: 'Jack B.', lastname: 'Dennis' },
        { firstname: 'David P.', lastname: 'Misunas' },
      ],
      year: 1975,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.eecs.berkeley.edu/~kubitron/cs252/handouts/papers/p125-dennis.pdf' }] },
      ],
    },
    {
      key: 'gurd1985manchester',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'The Manchester Prototype Dataflow Computer',
      authors: [
        { firstname: 'John R.', lastname: 'Gurd' },
        { firstname: 'Chris C.', lastname: 'Kirkham' },
        { firstname: 'Ian', lastname: 'Watson' },
      ],
      year: 1985,
      venue: 'Communications of the ACM, vol. 28, no. 1',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/2465.2468' }] },
      ],
    },
    {
      key: 'patt2024randomthoughts',
      title: 'Random Thoughts after 60 years in the trenches',
      authors: [
        { firstname: 'Yale', lastname: 'Patt' },
      ],
      year: 2024,
      venue: 'EFCL Summer School',
      type: 'keynote',
      resources: [
        { resourcename: 'Video', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/live/9BrfnZgdNos' }] },
      ],
    },
    {
      key: 'yeh1991two',
      title: 'Two-Level Adaptive Training Branch Prediction',
      authors: [
        { firstname: 'Tse-Yu', lastname: 'Yeh' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      year: 1991,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/123465.123475' }] },
      ],
    },
    {
      key: 'pan1992improving',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Improving the Accuracy of Dynamic Branch Prediction Using Branch Correlation',
      authors: [
        { firstname: 'Shien-Tai', lastname: 'Pan' },
        { firstname: 'Kimming', lastname: 'So' },
        { firstname: 'Joseph T.', lastname: 'Rahmeh' },
      ],
      year: 1992,
      venue: 'International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/143365.143490' }] },
      ],
    },
    {
      key: 'mcfarling1993combining',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Combining Branch Predictors',
      authors: [
        { firstname: 'Scott', lastname: 'McFarling' },
      ],
      year: 1993,
      venue: 'Digital Western Research Laboratory, Technical Note TN-36',
      type: 'report',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://web.archive.org/web/20210225023421/https://www.hpl.hp.com/techreports/Compaq-DEC/WRL-TN-36.pdf' }] },
      ],
    },
    {
      key: 'lee1997bimode',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'The Bi-Mode Branch Predictor',
      authors: [
        { firstname: 'Chih-Chieh', lastname: 'Lee' },
        { firstname: 'I-Cheng K.', lastname: 'Chen' },
        { firstname: 'Trevor N.', lastname: 'Mudge' },
      ],
      year: 1997,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/MICRO.1997.645792' }] },
      ],
    },
    {
      key: 'sprangle1997agree',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'The Agree Predictor: A Mechanism for Reducing Negative Branch History Interference',
      authors: [
        { firstname: 'Eric', lastname: 'Sprangle' },
        { firstname: 'Robert S.', lastname: 'Chappell' },
        { firstname: 'Mitch', lastname: 'Alsup' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      year: 1997,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/264107.264210' }] },
      ],
    },
    {
      key: 'kessler1999alpha',
      title: 'The Alpha 21264 Microprocessor',
      authors: [
        { firstname: 'Richard E.', lastname: 'Kessler' },
      ],
      year: 1999,
      venue: 'IEEE Micro, vol. 19, no. 2',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/40.755465' }] },
      ],
    },
    {
      key: 'jimenez2001dynamic',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Dynamic Branch Prediction with Perceptrons',
      authors: [
        { firstname: 'Daniel A.', lastname: 'Jiménez' },
        { firstname: 'Calvin', lastname: 'Lin' },
      ],
      year: 2001,
      venue: 'International Symposium on High Performance Computer Architecture (HPCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/HPCA.2001.903263' }] },
      ],
    },
    {
      key: 'seznec2006case',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'A Case for (Partially) TAgged GEometric History Length Branch Prediction',
      authors: [
        { firstname: 'André', lastname: 'Seznec' },
        { firstname: 'Pierre', lastname: 'Michaud' },
      ],
      year: 2006,
      venue: 'Journal of Instruction-Level Parallelism (JILP), vol. 8',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://jilp.org/vol8/v8paper1.pdf' }] },
      ],
    },
    {
      key: 'kim2014memory',
      title: 'Memory Systems',
      authors: [
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2014,
      venue: 'Computing Handbook, 3rd Edition: Computer Science and Software Engineering, CRC Press',
      type: 'book chapter',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/memory-systems-introduction_computing-handbook14.pdf' }] },
      ],
    },
    {
      key: 'wilkes1965slave',
      title: 'Slave Memories and Dynamic Storage Allocation',
      authors: [
        { firstname: 'Maurice V.', lastname: 'Wilkes' },
      ],
      year: 1965,
      venue: 'IEEE Transactions on Electronic Computers, vol. EC-14, no. 2',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/PGEC.1965.264263' }] },
      ],
    },
    {
      key: 'liptay1968structural',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Structural Aspects of the System/360 Model 85, II: The Cache',
      authors: [
        { firstname: 'J. S.', lastname: 'Liptay' },
      ],
      year: 1968,
      venue: 'IBM Systems Journal, vol. 7, no. 1',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1147/sj.71.0015' }] },
      ],
    },
    {
      key: 'belady1966study',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'A Study of Replacement Algorithms for a Virtual-Storage Computer',
      authors: [
        { firstname: 'László A.', lastname: 'Belady' },
      ],
      year: 1966,
      venue: 'IBM Systems Journal, vol. 5, no. 2',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1147/sj.52.0078' }] },
      ],
    },
    {
      key: 'qureshi2006case',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'A Case for MLP-Aware Cache Replacement',
      authors: [
        { firstname: 'Moinuddin K.', lastname: 'Qureshi' },
        { firstname: 'Daniel N.', lastname: 'Lynch' },
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      year: 2006,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/qureshi_isca06.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/qureshi_isca06_talk.ppt' }] },
      ],
    },
    {
      key: 'jouppi1990improving',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Improving Direct-Mapped Cache Performance by the Addition of a Small Fully-Associative Cache and Prefetch Buffers',
      authors: [
        { firstname: 'Norman P.', lastname: 'Jouppi' },
      ],
      year: 1990,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/ISCA.1990.134547' }] },
      ],
    },
    {
      key: 'baer1991effective',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'An Effective On-Chip Preloading Scheme to Reduce Data Access Penalty',
      authors: [
        { firstname: 'Jean-Loup', lastname: 'Baer' },
        { firstname: 'Tien-Fu', lastname: 'Chen' },
      ],
      year: 1991,
      venue: 'ACM/IEEE Conference on Supercomputing (Supercomputing)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/125826.125932' }] },
      ],
    },
    {
      key: 'srinath2007feedback',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Feedback Directed Prefetching: Improving the Performance and Bandwidth-Efficiency of Hardware Prefetchers',
      authors: [
        { firstname: 'Santhosh', lastname: 'Srinath' },
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Hyesoon', lastname: 'Kim' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      year: 2007,
      venue: 'International Symposium on High Performance Computer Architecture (HPCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/srinath_hpca07.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/srinath_hpca07_talk.ppt' }] },
      ],
    },
    {
      key: 'dundas1997improving',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Improving Data Cache Performance by Pre-executing Instructions Under a Cache Miss',
      authors: [
        { firstname: 'James', lastname: 'Dundas' },
        { firstname: 'Trevor', lastname: 'Mudge' },
      ],
      year: 1997,
      venue: 'International Conference on Supercomputing (ICS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/263580.263597' }] },
      ],
    },
    {
      key: 'mutlu2003runahead',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Runahead Execution: An Alternative to Very Large Instruction Windows for Out-of-order Processors',
      authors: [
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Jared', lastname: 'Stark' },
        { firstname: 'Chris', lastname: 'Wilkerson' },
        { firstname: 'Yale N.', lastname: 'Patt' },
      ],
      year: 2003,
      venue: 'International Symposium on High Performance Computer Architecture (HPCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/mutlu_hpca03.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/mutlu_hpca03_talk.pdf' }] },
      ],
    },
    {
      key: 'kim2012case',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'A Case for Exploiting Subarray-Level Parallelism (SALP) in DRAM',
      authors: [
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Vivek', lastname: 'Seshadri' },
        { firstname: 'Donghyuk', lastname: 'Lee' },
        { firstname: 'Jamie', lastname: 'Liu' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2012,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/salp-dram_isca12.pdf' }] },
      ],
    },
    {
      key: 'meza2015revisiting',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Revisiting Memory Errors in Large-Scale Production Data Centers: Analysis and Modeling of New Trends from the Field',
      authors: [
        { firstname: 'Justin', lastname: 'Meza' },
        { firstname: 'Qiang', lastname: 'Wu' },
        { firstname: 'Sanjeev', lastname: 'Kumar' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2015,
      venue: 'International Conference on Dependable Systems and Networks (DSN)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/memory-errors-at-facebook_dsn15.pdf' }] },
        { resourcename: 'Presentation', links: [
          { fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/memory-errors-at-facebook_dsn15-talk.pptx' },
          { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/memory-errors-at-facebook_dsn15-talk.pdf' }] },
      ],
    },
    {
      key: 'liu2012raidr',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'RAIDR: Retention-Aware Intelligent DRAM Refresh',
      authors: [
        { firstname: 'Jamie', lastname: 'Liu' },
        { firstname: 'Ben', lastname: 'Jaiyen' },
        { firstname: 'Richard', lastname: 'Veras' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2012,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/raidr-dram-refresh_isca12.pdf' }] },
      ],
    },
    {
      key: 'qureshi2015avatar',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'AVATAR: A Variable-Retention-Time (VRT) Aware Refresh for DRAM Systems',
      authors: [
        { firstname: 'Moinuddin K.', lastname: 'Qureshi' },
        { firstname: 'Dae-Hyun', lastname: 'Kim' },
        { firstname: 'Samira', lastname: 'Khan' },
        { firstname: 'Prashant J.', lastname: 'Nair' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2015,
      venue: 'International Conference on Dependable Systems and Networks (DSN)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/avatar-dram-refresh_dsn15.pdf' }] },
        { resourcename: 'Presentation', links: [
          { fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/avatar-dram-refresh_dsn15-talk.pptx' },
          { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/avatar-dram-refresh_dsn15-talk.pdf' }] },
      ],
    },
    {
      key: 'ipek2008self',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Self-Optimizing Memory Controllers: A Reinforcement Learning Approach',
      authors: [
        { firstname: 'Engin', lastname: 'Ipek' },
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'José F.', lastname: 'Martínez' },
        { firstname: 'Rich', lastname: 'Caruana' },
      ],
      year: 2008,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/rlmc_isca08.pdf' }] },
      ],
    },
    {
      key: 'hassan2024self',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Self-Managing DRAM: A Low-Cost Framework for Enabling Autonomous and Efficient DRAM Maintenance Operations',
      authors: [
        { firstname: 'Hasan', lastname: 'Hassan' },
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2024,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2207.13358' }] },
      ],
    },
    {
      key: 'moscibroda2007memory',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Memory Performance Attacks: Denial of Memory Service in Multi-Core Systems',
      authors: [
        { firstname: 'Thomas', lastname: 'Moscibroda' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2007,
      venue: 'USENIX Security Symposium',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/mph_usenix_security07.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/mutlu_usenix-security07_talk.ppt' }] },
      ],
    },
    {
      key: 'rixner2000memory',
      title: 'Memory Access Scheduling',
      authors: [
        { firstname: 'Scott', lastname: 'Rixner' },
        { firstname: 'William J.', lastname: 'Dally' },
        { firstname: 'Ujval J.', lastname: 'Kapasi' },
        { firstname: 'Peter', lastname: 'Mattson' },
        { firstname: 'John D.', lastname: 'Owens' },
      ],
      year: 2000,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1145/339647.339668' }] },
      ],
    },
    {
      key: 'mutlu2007stall',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Stall-Time Fair Memory Access Scheduling for Chip Multiprocessors',
      authors: [
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Thomas', lastname: 'Moscibroda' },
      ],
      year: 2007,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/stfm_micro07.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/mutlu_micro07_talk.ppt' }] },
      ],
    },
    {
      key: 'mutlu2008parallelism',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Parallelism-Aware Batch Scheduling: Enhancing both Performance and Fairness of Shared DRAM Systems',
      authors: [
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Thomas', lastname: 'Moscibroda' },
      ],
      year: 2008,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/parbs_isca08.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/mutlu_isca08_talk.ppt' }] },
      ],
    },
    {
      key: 'kim2010atlas',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'ATLAS: A Scalable and High-Performance Scheduling Algorithm for Multiple Memory Controllers',
      authors: [
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Dongsu', lastname: 'Han' },
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Mor', lastname: 'Harchol-Balter' },
      ],
      year: 2010,
      venue: 'International Symposium on High Performance Computer Architecture (HPCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/atlas_hpca10.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/kim_hpca10_talk.pptx' }] },
      ],
    },
    {
      key: 'kim2010thread',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Thread Cluster Memory Scheduling: Exploiting Differences in Memory Access Behavior',
      authors: [
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Michael', lastname: 'Papamichael' },
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Mor', lastname: 'Harchol-Balter' },
      ],
      year: 2010,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/tcm_micro10.pdf' }] },
        { resourcename: 'Presentation', links: [
          { fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/kim_micro10_talk.pptx' },
          { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/kim_micro10_talk.pdf' }] },
      ],
    },
    {
      key: 'muralidhara2011reducing',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Reducing Memory Interference in Multicore Systems via Application-Aware Memory Channel Partitioning',
      authors: [
        { firstname: 'Sai Prashanth', lastname: 'Muralidhara' },
        { firstname: 'Lavanya', lastname: 'Subramanian' },
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Mahmut', lastname: 'Kandemir' },
        { firstname: 'Thomas', lastname: 'Moscibroda' },
      ],
      year: 2011,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/memory-channel-partitioning-micro11.pdf' }] },
      ],
    },
    {
      key: 'subramanian2014blacklisting',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'The Blacklisting Memory Scheduler: Achieving High Performance and Fairness at Low Cost',
      authors: [
        { firstname: 'Lavanya', lastname: 'Subramanian' },
        { firstname: 'Donghyuk', lastname: 'Lee' },
        { firstname: 'Vivek', lastname: 'Seshadri' },
        { firstname: 'Harsha', lastname: 'Rastogi' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2014,
      venue: 'International Conference on Computer Design (ICCD)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/bliss-memory-scheduler_iccd14.pdf' }] },
        { resourcename: 'Paper (extended IEEE TPDS 2016 version)', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/bliss-memory-scheduler_ieee-tpds16.pdf' }] },
        { resourcename: 'Presentation', links: [
          { fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/bliss_lavanya_iccd14-talk.pptx' },
          { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/bliss_lavanya_iccd14-talk.pdf' }] },
      ],
    },
    {
      key: 'eyerman2008system',
      title: 'System-Level Performance Metrics for Multiprogram Workloads',
      authors: [
        { firstname: 'Stijn', lastname: 'Eyerman' },
        { firstname: 'Lieven', lastname: 'Eeckhout' },
      ],
      year: 2008,
      venue: 'IEEE Micro, vol. 28, no. 3',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/MM.2008.44' }] },
      ],
    },
    {
      key: 'esmailidokht2024mess',
      title: 'A Mess of Memory System Benchmarking, Simulation and Application Profiling',
      authors: [
        { firstname: 'Pouya', lastname: 'Esmaili-Dokht' },
        { firstname: 'Francesco', lastname: 'Sgherzi' },
        { firstname: 'Valéria', lastname: 'Soldera Girelli' },
        { firstname: 'Isaac', lastname: 'Boixaderas' },
        { firstname: 'Mariana', lastname: 'Carmin' },
        { firstname: 'Alireza', lastname: 'Monemi' },
        { firstname: 'Adrià', lastname: 'Armejach' },
        { firstname: 'Estanislao', lastname: 'Mercadal' },
        { firstname: 'Germán', lastname: 'Llort' },
        { firstname: 'Petar', lastname: 'Radojković' },
        { firstname: 'Miquel', lastname: 'Moretó' },
        { firstname: 'Judit', lastname: 'Giménez' },
        { firstname: 'Xavier', lastname: 'Martorell' },
        { firstname: 'Eduard', lastname: 'Ayguadé' },
        { firstname: 'Jesus', lastname: 'Labarta' },
        { firstname: 'Emanuele', lastname: 'Confalonieri' },
        { firstname: 'Rishabh', lastname: 'Dubey' },
        { firstname: 'Jason', lastname: 'Adlard' },
      ],
      year: 2024,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'doi', url: 'https://doi.org/10.1109/MICRO61859.2024.00020' }] },
      ],
    },
    {
      key: 'bostanci2026cleaning',
      bonus: true,  // eligible for the bonus HW (paper reviews)
      title: 'Cleaning up the Mess: Re-Evaluating the Real-System Modeling Accuracy of Ramulator 2.0',
      authors: [
        { firstname: 'F. Nisa', lastname: 'Bostancı' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Maria', lastname: 'Makeenkova' },
        { firstname: 'Geraldo F.', lastname: 'de Oliveira' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2026,
      venue: 'International Symposium on Performance Analysis of Systems and Software (ISPASS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2510.15744' }] },
        { resourcename: 'Presentation', links: [
          { fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/CUTMess_ispass26-talk.pptx' },
          { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CUTMess_ispass26-talk.pdf' }] },
        { resourcename: 'Code', links: [{ fileformat: 'github', url: 'https://github.com/CMU-SAFARI/Cleaning-up-the-Mess' }] },
      ],
    },

    // ---- L13a (Virtual Memory and TLB) and L13b (DRAM Read Disturbance I: RowHammer)
    {
      key: 'zhao2023contiguitas',
      title: 'Contiguitas: The Pursuit of Physical Memory Contiguity in Datacenters',
      authors: [
        { firstname: 'Kaiyang', lastname: 'Zhao' },
        { firstname: 'Kaiwen', lastname: 'Xue' },
        { firstname: 'Ziqi', lastname: 'Wang' },
        { firstname: 'Dan', lastname: 'Schatzberg' },
        { firstname: 'Leon', lastname: 'Yang' },
        { firstname: 'Antonis', lastname: 'Manousis' },
        { firstname: 'Johannes', lastname: 'Weiner' },
        { firstname: 'Rik', lastname: 'van Riel' },
        { firstname: 'Bikash', lastname: 'Sharma' },
        { firstname: 'Chunqiang', lastname: 'Tang' },
        { firstname: 'Dimitrios', lastname: 'Skarlatos' },
      ],
      year: 2023,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1145/3579371.3589079' }] },
      ],
    },
    {
      key: 'kanellopoulos2023utopia',
      title: 'Utopia: Fast and Efficient Address Translation via Hybrid Restrictive & Flexible Virtual-to-Physical Address Mappings',
      authors: [
        { firstname: 'Konstantinos', lastname: 'Kanellopoulos' },
        { firstname: 'Rahul', lastname: 'Bera' },
        { firstname: 'Kosta', lastname: 'Stojiljkovic' },
        { firstname: 'F. Nisa', lastname: 'Bostancı' },
        { firstname: 'Can', lastname: 'Firtina' },
        { firstname: 'Rachata', lastname: 'Ausavarungnirun' },
        { firstname: 'Rakesh', lastname: 'Kumar' },
        { firstname: 'Nastaran', lastname: 'Hajinazar' },
        { firstname: 'Mohammad', lastname: 'Sadrosadati' },
        { firstname: 'Nandita', lastname: 'Vijaykumar' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2023,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2211.12205' }] },
      ],
    },
    {
      key: 'sonmez2024fleximem',
      title: 'FlexiMem: Flexible Shared Virtual Memory for PCIe-attached FPGAs',
      authors: [
        { firstname: 'Canberk', lastname: 'Sönmez' },
        { firstname: 'Mohamed', lastname: 'Shahawy' },
        { firstname: 'Cemalettin Cem', lastname: 'Belentepe' },
        { firstname: 'Paolo', lastname: 'Ienne' },
      ],
      year: 2024,
      venue: 'International Conference on Field-Programmable Logic and Applications (FPL)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1109/fpl64840.2024.00020' }] },
      ],
    },
    {
      key: 'fatima2023vpim',
      title: 'vPIM: Efficient Virtual Address Translation for Scalable Processing-in-Memory Architectures',
      authors: [
        { firstname: 'Amel', lastname: 'Fatima' },
        { firstname: 'Sihang', lastname: 'Liu' },
        { firstname: 'Korakit', lastname: 'Seemakhupt' },
        { firstname: 'Rachata', lastname: 'Ausavarungnirun' },
        { firstname: 'Samira', lastname: 'Khan' },
      ],
      year: 2023,
      venue: 'Design Automation Conference (DAC)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1109/dac56929.2023.10247745' }] },
      ],
    },
    {
      key: 'margaritov2021ptemagnet',
      title: 'PTEMagnet: Fine-Grained Physical Memory Reservation for Faster Page Walks in Public Clouds',
      authors: [
        { firstname: 'Artemiy', lastname: 'Margaritov' },
        { firstname: 'Dmitrii', lastname: 'Ustiugov' },
        { firstname: 'Amna', lastname: 'Shahab' },
        { firstname: 'Boris', lastname: 'Grot' },
      ],
      year: 2021,
      venue: 'International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1145/3445814.3446704' }] },
      ],
    },
    {
      key: 'kanellopoulos2025virtuoso',
      title: 'Virtuoso: Enabling Fast and Accurate Virtual Memory Research via an Imitation-based Operating System Simulation Methodology',
      authors: [
        { firstname: 'Konstantinos', lastname: 'Kanellopoulos' },
        { firstname: 'Konstantinos', lastname: 'Sgouras' },
        { firstname: 'F. Nisa', lastname: 'Bostancı' },
        { firstname: 'Andreas Kosmas', lastname: 'Kakolyris' },
        { firstname: 'Berkin Kerim', lastname: 'Konar' },
        { firstname: 'Rahul', lastname: 'Bera' },
        { firstname: 'Mohammad', lastname: 'Sadrosadati' },
        { firstname: 'Rakesh', lastname: 'Kumar' },
        { firstname: 'Nandita', lastname: 'Vijaykumar' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2025,
      venue: 'International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1145/3676641.3716027' }] },
        { resourcename: 'Code', links: [{ fileformat: 'github', url: 'https://github.com/CMU-SAFARI/Virtuoso' }] },
      ],
    },
    {
      key: 'gras2017aslr',
      title: 'ASLR on the Line: Practical Cache Attacks on the MMU',
      authors: [
        { firstname: 'Ben', lastname: 'Gras' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
        { firstname: 'Erik', lastname: 'Bosman' },
        { firstname: 'Herbert', lastname: 'Bos' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
      ],
      year: 2017,
      venue: 'Network and Distributed System Security Symposium (NDSS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.14722/ndss.2017.23271' }] },
      ],
    },
    {
      key: 'gras2018translation',
      title: 'Translation Leak-aside Buffer: Defeating Cache Side-channel Protections with TLB Attacks',
      authors: [
        { firstname: 'Ben', lastname: 'Gras' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
        { firstname: 'Herbert', lastname: 'Bos' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
      ],
      year: 2018,
      venue: 'USENIX Security Symposium',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://download.vusec.net/papers/tlbleed_sec18.pdf' }] },
      ],
    },
    {
      key: 'wang2025peek',
      title: 'Peek-a-Walk: Leaking Secrets via Page Walk Side Channels',
      authors: [
        { firstname: 'Alan', lastname: 'Wang' },
        { firstname: 'Boru', lastname: 'Chen' },
        { firstname: 'Yingchen', lastname: 'Wang' },
        { firstname: 'Christopher W.', lastname: 'Fletcher' },
        { firstname: 'Daniel', lastname: 'Genkin' },
        { firstname: 'David', lastname: 'Kohlbrenner' },
        { firstname: 'Riccardo', lastname: 'Paccagnella' },
      ],
      year: 2025,
      venue: 'IEEE Symposium on Security and Privacy (S&P)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1109/sp61157.2025.00023' }] },
      ],
    },
    {
      key: 'seaborn2015exploiting',
      title: 'Exploiting the DRAM Rowhammer Bug to Gain Kernel Privileges',
      authors: [
        { firstname: 'Mark', lastname: 'Seaborn' },
        { firstname: 'Thomas', lastname: 'Dullien' },
      ],
      year: 2015,
      venue: 'Google Project Zero Blog and Black Hat USA',
      type: 'talk',
      resources: [
        { resourcename: 'Blog post', links: [{ fileformat: 'link', url: 'https://googleprojectzero.blogspot.com/2015/03/exploiting-dram-rowhammer-bug-to-gain.html' }] },
        { resourcename: 'Slides', links: [{ fileformat: 'pdf', url: 'https://www.blackhat.com/docs/us-15/materials/us-15-Seaborn-Exploiting-The-DRAM-Rowhammer-Bug-To-Gain-Kernel-Privileges.pdf' }] },
        { resourcename: 'Talk', links: [{ fileformat: 'youtube', url: 'https://www.youtube.com/watch?v=0U7511Fb4to' }] },
      ],
    },
    {
      key: 'gruss2016rowhammerjs',
      title: 'Rowhammer.js: A Remote Software-Induced Fault Attack in JavaScript',
      authors: [
        { firstname: 'Daniel', lastname: 'Gruss' },
        { firstname: 'Clémentine', lastname: 'Maurice' },
        { firstname: 'Stefan', lastname: 'Mangard' },
      ],
      year: 2016,
      venue: 'Conference on Detection of Intrusions and Malware & Vulnerability Assessment (DIMVA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1007/978-3-319-40667-1_15' }] },
      ],
    },
    {
      key: 'vanderveen2016drammer',
      title: 'Drammer: Deterministic Rowhammer Attacks on Mobile Platforms',
      authors: [
        { firstname: 'Victor', lastname: 'van der Veen' },
        { firstname: 'Yanick', lastname: 'Fratantonio' },
        { firstname: 'Martina', lastname: 'Lindorfer' },
        { firstname: 'Daniel', lastname: 'Gruss' },
        { firstname: 'Clémentine', lastname: 'Maurice' },
        { firstname: 'Giovanni', lastname: 'Vigna' },
        { firstname: 'Herbert', lastname: 'Bos' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
      ],
      year: 2016,
      venue: 'ACM Conference on Computer and Communications Security (CCS)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1145/2976749.2978406' }] },
      ],
    },
    {
      key: 'frigo2018grand',
      title: 'Grand Pwning Unit: Accelerating Microarchitectural Attacks with the GPU',
      authors: [
        { firstname: 'Pietro', lastname: 'Frigo' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
        { firstname: 'Herbert', lastname: 'Bos' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
      ],
      year: 2018,
      venue: 'IEEE Symposium on Security and Privacy (S&P)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1109/sp.2018.00022' }] },
      ],
    },
    {
      key: 'tatar2018throwhammer',
      title: 'Throwhammer: Rowhammer Attacks over the Network and Defenses',
      authors: [
        { firstname: 'Andrei', lastname: 'Tatar' },
        { firstname: 'Radhesh Krishnan', lastname: 'Konoth' },
        { firstname: 'Elias', lastname: 'Athanasopoulos' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
        { firstname: 'Herbert', lastname: 'Bos' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
      ],
      year: 2018,
      venue: 'USENIX Annual Technical Conference (ATC)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://www.usenix.org/conference/atc18/presentation/tatar' }] },
      ],
    },
    {
      key: 'lipp2020nethammer',
      title: 'Nethammer: Inducing Rowhammer Faults through Network Requests',
      authors: [
        { firstname: 'Moritz', lastname: 'Lipp' },
        { firstname: 'Michael', lastname: 'Schwarz' },
        { firstname: 'Lukas', lastname: 'Raab' },
        { firstname: 'Lukas', lastname: 'Lamster' },
        { firstname: 'Misiker Tadesse', lastname: 'Aga' },
        { firstname: 'Clémentine', lastname: 'Maurice' },
        { firstname: 'Daniel', lastname: 'Gruss' },
      ],
      year: 2020,
      venue: 'IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1109/eurospw51379.2020.00102' }] },
      ],
    },
    {
      key: 'kwong2020rambleed',
      title: 'RAMBleed: Reading Bits in Memory Without Accessing Them',
      authors: [
        { firstname: 'Andrew', lastname: 'Kwong' },
        { firstname: 'Daniel', lastname: 'Genkin' },
        { firstname: 'Daniel', lastname: 'Gruss' },
        { firstname: 'Yuval', lastname: 'Yarom' },
      ],
      year: 2020,
      venue: 'IEEE Symposium on Security and Privacy (S&P)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://doi.org/10.1109/sp40000.2020.00020' }] },
      ],
    },
    {
      key: 'hong2019terminal',
      title: 'Terminal Brain Damage: Exposing the Graceless Degradation in Deep Neural Networks Under Hardware Fault Attacks',
      authors: [
        { firstname: 'Sanghyun', lastname: 'Hong' },
        { firstname: 'Pietro', lastname: 'Frigo' },
        { firstname: 'Yiğitcan', lastname: 'Kaya' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
        { firstname: 'Tudor', lastname: 'Dumitraş' },
      ],
      year: 2019,
      venue: 'USENIX Security Symposium',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://www.usenix.org/conference/usenixsecurity19/presentation/hong' }] },
      ],
    },
    {
      key: 'yao2020deephammer',
      title: 'DeepHammer: Depleting the Intelligence of Deep Neural Networks through Targeted Chain of Bit Flips',
      authors: [
        { firstname: 'Fan', lastname: 'Yao' },
        { firstname: 'Adnan Siraj', lastname: 'Rakin' },
        { firstname: 'Deliang', lastname: 'Fan' },
      ],
      year: 2020,
      venue: 'USENIX Security Symposium',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'link', url: 'https://www.usenix.org/conference/usenixsecurity20/presentation/yao' }] },
      ],
    },
    {
      key: 'kogler2022halfdouble',
      title: 'Half-Double: Hammering From the Next Row Over',
      authors: [
        { firstname: 'Andreas', lastname: 'Kogler' },
        { firstname: 'Jonas', lastname: 'Juffinger' },
        { firstname: 'Salman', lastname: 'Qazi' },
        { firstname: 'Yoongu', lastname: 'Kim' },
        { firstname: 'Moritz', lastname: 'Lipp' },
        { firstname: 'Nicolas', lastname: 'Boichat' },
        { firstname: 'Eric', lastname: 'Shiu' },
        { firstname: 'Mattias', lastname: 'Nissler' },
        { firstname: 'Daniel', lastname: 'Gruss' },
      ],
      year: 2022,
      venue: 'USENIX Security Symposium',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://www.usenix.org/system/files/sec22-kogler-half-double.pdf' }] },
        { resourcename: 'Blog post', links: [{ fileformat: 'link', url: 'https://security.googleblog.com/2021/05/introducing-half-double-new-hammering.html' }] },
      ],
    },
    {
      key: 'loughlin2022moesi',
      title: 'MOESI-prime: Preventing Coherence-Induced Hammering in Commodity Workloads',
      authors: [
        { firstname: 'Kevin', lastname: 'Loughlin' },
        { firstname: 'Stefan', lastname: 'Saroiu' },
        { firstname: 'Alec', lastname: 'Wolman' },
        { firstname: 'Yatin A.', lastname: 'Manerkar' },
        { firstname: 'Baris', lastname: 'Kasikci' },
      ],
      year: 2022,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://www.kevinloughlin.org/moesi-prime.pdf' }] },
      ],
    },
    {
      key: 'cojocar2019exploiting',
      title: 'Exploiting Correcting Codes: On the Effectiveness of ECC Memory Against Rowhammer Attacks',
      authors: [
        { firstname: 'Lucian', lastname: 'Cojocar' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
        { firstname: 'Cristiano', lastname: 'Giuffrida' },
        { firstname: 'Herbert', lastname: 'Bos' },
      ],
      year: 2019,
      venue: 'IEEE Symposium on Security and Privacy (S&P)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://download.vusec.net/papers/eccploit_sp19.pdf' }] },
      ],
    },
    {
      key: 'hassan2021uncovering',
      title: 'Uncovering In-DRAM RowHammer Protection Mechanisms: A New Methodology, Custom RowHammer Patterns, and Implications',
      authors: [
        { firstname: 'Hasan', lastname: 'Hassan' },
        { firstname: 'Yahya Can', lastname: 'Tuğrul' },
        { firstname: 'Jeremie S.', lastname: 'Kim' },
        { firstname: 'Victor', lastname: 'van der Veen' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2021,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/U-TRR-uncovering-RowHammer-protection-mechanisms_micro21.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/U-TRR-uncovering-RowHammer-protection-mechanisms_micro21-talk.pptx' }, { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/U-TRR-uncovering-RowHammer-protection-mechanisms_micro21-talk.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://www.youtube.com/watch?v=YkBR9yeLHRs' }] },
      ],
    },
    {
      key: 'mutlu2019rowhammer',
      title: 'RowHammer: A Retrospective',
      authors: [
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Jeremie S.', lastname: 'Kim' },
      ],
      year: 2020,
      venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), Special Issue on Top Picks in Hardware and Embedded Security',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/1904.09724' }] },
      ],
    },
    {
      key: 'mutlu2023fundamentally',
      title: 'Fundamentally Understanding and Solving RowHammer',
      authors: [
        { firstname: 'Onur', lastname: 'Mutlu' },
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
      ],
      year: 2023,
      venue: 'Asia and South Pacific Design Automation Conference (ASP-DAC), invited special session paper',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2211.07613' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pptx' }, { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://www.youtube.com/watch?v=1kpDJkh_I8s' }] },
      ],
    },
    {
      key: 'qazi2024soothsayer',
      title: 'SoothSayer: Bypassing DSAC Mitigation by Predicting Counter Replacement',
      authors: [
        { firstname: 'Salman', lastname: 'Qazi' },
        { firstname: 'Daniel', lastname: 'Moghimi' },
      ],
      year: 2024,
      venue: 'Workshop on DRAM Security (DRAMSec)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://dramsec.ethz.ch/papers/soothsayer-final.pdf' }] },
      ],
    },
    {
      key: 'jattke2024zenhammer',
      title: 'ZenHammer: Rowhammer Attacks on AMD Zen-based Platforms',
      authors: [
        { firstname: 'Patrick', lastname: 'Jattke' },
        { firstname: 'Max', lastname: 'Wipfli' },
        { firstname: 'Flavien', lastname: 'Solt' },
        { firstname: 'Michele', lastname: 'Marazzi' },
        { firstname: 'Matej', lastname: 'Bölcskei' },
        { firstname: 'Kaveh', lastname: 'Razavi' },
      ],
      year: 2024,
      venue: 'USENIX Security Symposium',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://comsec.ethz.ch/wp-content/files/zenhammer_sec24.pdf' }] },
      ],
    },
    {
      key: 'kim2020revisiting',
      title: 'Revisiting RowHammer: An Experimental Analysis of Modern DRAM Devices and Mitigation Techniques',
      authors: [
        { firstname: 'Jeremie S.', lastname: 'Kim' },
        { firstname: 'Minesh', lastname: 'Patel' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Hasan', lastname: 'Hassan' },
        { firstname: 'Roknoddin', lastname: 'Azizi' },
        { firstname: 'Lois', lastname: 'Orosa' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2020,
      venue: 'International Symposium on Computer Architecture (ISCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pptx' }, { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://youtu.be/Lqxc4_ToMUw' }] },
      ],
    },
    {
      key: 'orosa2021deeper',
      title: 'A Deeper Look into RowHammer\'s Sensitivities: Experimental Analysis of Real DRAM Chips and Implications on Future Attacks and Defenses',
      authors: [
        { firstname: 'Lois', lastname: 'Orosa' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Jisung', lastname: 'Park' },
        { firstname: 'Hasan', lastname: 'Hassan' },
        { firstname: 'Minesh', lastname: 'Patel' },
        { firstname: 'Jeremie S.', lastname: 'Kim' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2021,
      venue: 'International Symposium on Microarchitecture (MICRO)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-talk.pptx' }, { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-talk.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://www.youtube.com/watch?v=fkM32oA0u6U' }] },
      ],
    },
    {
      key: 'yaglikci2022understanding',
      title: 'Understanding RowHammer Under Reduced Wordline Voltage: An Experimental Study Using Real DRAM Devices',
      authors: [
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Geraldo F.', lastname: 'de Oliveira' },
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Minesh', lastname: 'Patel' },
        { firstname: 'Jisung', lastname: 'Park' },
        { firstname: 'Hasan', lastname: 'Hassan' },
        { firstname: 'Jeremie S.', lastname: 'Kim' },
        { firstname: 'Lois', lastname: 'Orosa' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2022,
      venue: 'International Conference on Dependable Systems and Networks (DSN)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22.pdf' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pptx' }, { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://www.youtube.com/watch?v=CJoBROgFbwc' }] },
      ],
    },
    {
      key: 'olgun2023experimental',
      title: 'An Experimental Analysis of RowHammer in HBM2 DRAM Chips',
      authors: [
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Majd', lastname: 'Osseiran' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Yahya Can', lastname: 'Tuğrul' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Steve', lastname: 'Rhyner' },
        { firstname: 'Behzad', lastname: 'Salami' },
        { firstname: 'Juan', lastname: 'Gómez-Luna' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2023,
      venue: 'International Conference on Dependable Systems and Networks (DSN), Disrupt Track',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2305.17918' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://people.inf.ethz.ch/omutlu/pub/HBM_RowHammer_dsn-disrupt23-talk.pptx' }, { fileformat: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/HBM_RowHammer_dsn-disrupt23-talk.pdf' }] },
        { resourcename: 'Lecture', links: [{ fileformat: 'video', url: 'https://www.youtube.com/watch?v=0OkYwavtrMc' }] },
      ],
    },
    {
      key: 'olgun2024read',
      title: 'Read Disturbance in High Bandwidth Memory: A Detailed Experimental Study on HBM2 DRAM Chips',
      authors: [
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Majd', lastname: 'Osseiran' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Yahya Can', lastname: 'Tuğrul' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Steve', lastname: 'Rhyner' },
        { firstname: 'Behzad', lastname: 'Salami' },
        { firstname: 'Juan', lastname: 'Gómez-Luna' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2024,
      venue: 'International Conference on Dependable Systems and Networks (DSN)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2310.14665' }] },
      ],
    },
    {
      key: 'yaglikci2024spatial',
      title: 'Spatial Variation-Aware Read Disturbance Defenses: Experimental Analysis of Real DRAM Chips and Implications on Future Solutions',
      authors: [
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Yahya Can', lastname: 'Tuğrul' },
        { firstname: 'Geraldo F.', lastname: 'de Oliveira' },
        { firstname: 'İsmail Emir', lastname: 'Yüksel' },
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2024,
      venue: 'International Symposium on High Performance Computer Architecture (HPCA)',
      type: 'conference',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2402.18652' }] },
      ],
    },
    {
      key: 'yaglikci2024enabling',
      title: 'Enabling Efficient and Scalable DRAM Read Disturbance Mitigation via New Experimental Insights into Modern DRAM Chips',
      authors: [
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
      ],
      year: 2024,
      venue: 'PhD Thesis, ETH Zürich',
      type: 'thesis',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2408.15044' }] },
        { resourcename: 'Presentation', links: [{ fileformat: 'pptx', url: 'https://safari.ethz.ch/wp-content/uploads/giray-phd-defense-slides-short.pptx' }, { fileformat: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/giray-phd-defense-slides-short.pdf' }] },
      ],
    },
    {
      key: 'olgun2023drambender',
      title: 'DRAM Bender: An Extensible and Versatile FPGA-based Infrastructure to Easily Test State-of-the-art DRAM Chips',
      authors: [
        { firstname: 'Ataberk', lastname: 'Olgun' },
        { firstname: 'Hasan', lastname: 'Hassan' },
        { firstname: 'A. Giray', lastname: 'Yağlıkçı' },
        { firstname: 'Yahya Can', lastname: 'Tuğrul' },
        { firstname: 'Lois', lastname: 'Orosa' },
        { firstname: 'Haocong', lastname: 'Luo' },
        { firstname: 'Minesh', lastname: 'Patel' },
        { firstname: 'Oğuz', lastname: 'Ergin' },
        { firstname: 'Onur', lastname: 'Mutlu' },
      ],
      year: 2023,
      venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)',
      type: 'journal',
      resources: [
        { resourcename: 'Paper', links: [{ fileformat: 'pdf', url: 'https://arxiv.org/pdf/2211.05838' }] },
        { resourcename: 'Code', links: [{ fileformat: 'github', url: 'https://github.com/CMU-SAFARI/DRAM-Bender' }] },
      ],
    },

  ],
};
