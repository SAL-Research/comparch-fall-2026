// Standalone build for the CS 423/520 Computer Architecture (Fall 2026)
// course website. Mirrors the course machinery of the SAL-Research lab site:
// Handlebars templates in src/templates/ populated from
// src/metadata/metadata-comparch-fall_2026.js, rendered into dist/.
//
// Output:
//   dist/index.html     — course page
//   dist/readings.html  — reading materials (only if metadata has readings)
//   dist/*              — everything in assets/ (favicon, slides, homeworks)

const fs = require('fs-extra');
const path = require('path');
const handlebars = require('handlebars');

// Course metadata is split across three files, merged in order:
// core course info, the weekly schedule, and the reading materials.
const METADATA_FILES = [
  './src/metadata/metadata-comparch-fall_2026.js',
  './src/metadata/metadata-comparch-fall_2026-schedule.js',
  './src/metadata/metadata-comparch-fall_2026-readings.js',
  './src/metadata/metadata-comparch-fall_2026-exercises.js',
  './src/metadata/metadata-comparch-fall_2026-qa.js',
];
const templatesDir = path.join(__dirname, 'src', 'templates');
const assetsDir = path.join(__dirname, 'assets');
const outputDir = path.join(__dirname, 'dist');

handlebars.registerHelper('eq', (a, b) => a === b);
// A link field is "real" when it is set and not the 'TBA' placeholder.
handlebars.registerHelper('real', v => !!v && v !== 'TBA');
handlebars.registerHelper('or', function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  return args.some(arg => !!arg);
});

/**
 * Derive display data from the hierarchical course metadata:
 * - week.number: 1-based position in `weeks`
 * - lecture.number: "L<day><part>" where <day> counts lecture days across the
 *   whole course and <part> is a, b, c... by position within the day (omitted
 *   when the day has a single lecture). Lectures with an explicit `number`
 *   (e.g. 'LR1' for review sessions) or an `exam` flag keep it / stay
 *   unnumbered and do not make their day count as a lecture day. Days with
 *   `alternatives: true` list mutually exclusive candidates: all get the plain
 *   day number without part letters.
 * - event.homework: resolves a schedule event's `hw` key against `homeworks`
 * - lecture.readings: keys into `readings`; each referenced reading collects
 *   its relevant lectures (number, title, date) for the readings page, and the
 *   lecture gets `readings_anchor` for linking into readings.html
 */
function prepareCourseMetadata(metadata) {
  // Sidebar abstract: the first description paragraph, linked to info.html
  metadata.description_abstract = (metadata.description || [])[0] || null;

  const homeworkByKey = {};
  (metadata.homeworks || []).forEach(hw => { homeworkByKey[hw.key] = hw; });
  const readingByKey = {};
  (metadata.readings || []).forEach(reading => {
    readingByKey[reading.key] = reading;
    reading.relevant_lectures = [];
  });

  // Resolve "Sep 17"-style day dates to ISO dates using the year in `term`
  // (e.g. "Fall 2026"), so the page can compare schedule dates to today.
  const MONTHS = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
  const yearMatch = /\d{4}/.exec(metadata.term || '');
  const year = yearMatch ? yearMatch[0] : null;
  function isoDate(date) {
    const m = /^([A-Z][a-z]{2}) (\d{1,2})$/.exec(date || '');
    if (!m || !MONTHS[m[1]] || !year) return null;
    return `${year}-${MONTHS[m[1]]}-${String(m[2]).padStart(2, '0')}`;
  }

  let lectureDay = 0;
  (metadata.weeks || []).forEach((week, weekIndex) => {
    week.number = weekIndex + 1;
    const firstDay = (week.days || []).find(day => isoDate(day.date));
    week.start_iso = firstDay ? isoDate(firstDay.date) : null;
    (week.days || []).forEach(day => {
      const numbered = (day.lectures || []).filter(l => !l.number && !l.exam);
      if (numbered.length > 0) {
        lectureDay += 1;
        const multipart = numbered.length > 1 && !day.alternatives;
        numbered.forEach((lecture, i) => {
          lecture.number = `L${lectureDay}${multipart ? String.fromCharCode(97 + i) : ''}`;
        });
      }
      (day.lectures || []).forEach(lecture => {
        // `readings` are required for the lecture, `optional_readings` are
        // optional; the same reading may be required in one lecture and
        // optional in another.
        const refs = [
          ...(lecture.readings || []).map(key => ({ key, optional: false })),
          ...(lecture.optional_readings || []).map(key => ({ key, optional: true })),
        ];
        if (refs.length > 0) {
          lecture.readings_anchor = lecture.number;
          const group = { number: lecture.number, title: lecture.title, date: day.date, required_items: [], optional_items: [] };
          refs.forEach(ref => {
            const reading = readingByKey[ref.key];
            if (!reading) {
              console.warn(`  ! unknown reading key: ${ref.key}`);
              return;
            }
            reading.relevant_lectures.push({ number: lecture.number, title: lecture.title, date: day.date, optional: ref.optional });
            (ref.optional ? group.optional_items : group.required_items).push(reading);
          });
          metadata.readings_by_lecture = metadata.readings_by_lecture || [];
          metadata.readings_by_lecture.push(group);
        }
      });
      (day.events || []).forEach(event => {
        if (event.hw) {
          event.homework = homeworkByKey[event.hw];
          if (!event.homework) console.warn(`  ! unknown homework key: ${event.hw}`);
        }
      });
    });
  });

  // Readings page views: chronological by publication year (each paper once)
  // and per-lecture groups (papers replicated under every relevant lecture,
  // already collected above in schedule order).
  if (metadata.readings) {
    // Readings not referenced by any lecture form a "General" group so they
    // still appear in the lecture view.
    const unassigned = metadata.readings.filter(r => r.relevant_lectures.length === 0);
    if (unassigned.length > 0) {
      metadata.readings_by_lecture = metadata.readings_by_lecture || [];
      metadata.readings_by_lecture.push({ number: 'general', title: 'General', date: null, required_items: [], optional_items: unassigned });
      unassigned.forEach(r => { r.lecture_numbers_extra = 'general'; });
    }
    metadata.readings.forEach(reading => {
      reading.lecture_numbers = reading.relevant_lectures.map(l => l.number)
        .concat(reading.lecture_numbers_extra ? [reading.lecture_numbers_extra] : [])
        .join(' ');
    });
    metadata.readings_by_year = metadata.readings
      .slice()
      .sort((a, b) => (a.year - b.year) || a.title.localeCompare(b.title));
  }

  return metadata;
}

function compileTemplate(name) {
  return handlebars.compile(fs.readFileSync(path.join(templatesDir, name), 'utf-8'));
}

function registerPartials() {
  ['navbar', 'sidebar', 'footer'].forEach(name => {
    handlebars.registerPartial(name, fs.readFileSync(path.join(templatesDir, `_${name}.html`), 'utf-8'));
  });
}

function build() {
  console.log('Building course website...');
  fs.emptyDirSync(outputDir);
  fs.copySync(assetsDir, outputDir);
  registerPartials();

  const metadata = prepareCourseMetadata(Object.assign({}, ...METADATA_FILES.map(f => require(f))));

  fs.writeFileSync(path.join(outputDir, 'index.html'), compileTemplate('_course.html')(metadata));
  console.log('  → dist/index.html');

  if (metadata.readings && metadata.readings.length > 0) {
    fs.writeFileSync(path.join(outputDir, 'readings.html'), compileTemplate('_course_readings.html')(metadata));
    console.log('  → dist/readings.html');
  }

  if (metadata.homeworks && metadata.homeworks.length > 0) {
    fs.writeFileSync(path.join(outputDir, 'homeworks.html'), compileTemplate('_course_homeworks.html')(metadata));
    console.log('  → dist/homeworks.html');
  }

  if (metadata.description || metadata.logistics || metadata.grading) {
    fs.writeFileSync(path.join(outputDir, 'info.html'), compileTemplate('_course_info.html')(metadata));
    console.log('  → dist/info.html');
  }

  if (metadata.exercises) {
    fs.writeFileSync(path.join(outputDir, 'exercises.html'), compileTemplate('_course_exercises.html')(metadata));
    console.log('  → dist/exercises.html');
  }

  if (metadata.qa) {
    fs.writeFileSync(path.join(outputDir, 'qa.html'), compileTemplate('_course_qa.html')(metadata));
    console.log('  → dist/qa.html');
  }

  console.log('Build completed!');
}

build();
