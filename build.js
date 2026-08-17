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

const METADATA_FILE = './src/metadata/metadata-comparch-fall_2026.js';
const templatesDir = path.join(__dirname, 'src', 'templates');
const assetsDir = path.join(__dirname, 'assets');
const outputDir = path.join(__dirname, 'dist');

handlebars.registerHelper('eq', (a, b) => a === b);
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
  const homeworkByKey = {};
  (metadata.homeworks || []).forEach(hw => { homeworkByKey[hw.key] = hw; });
  const readingByKey = {};
  (metadata.readings || []).forEach(reading => {
    readingByKey[reading.key] = reading;
    reading.relevant_lectures = [];
  });

  let lectureDay = 0;
  (metadata.weeks || []).forEach((week, weekIndex) => {
    week.number = weekIndex + 1;
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
        if (lecture.readings && lecture.readings.length > 0) {
          lecture.readings_anchor = lecture.readings[0];
          lecture.readings.forEach(key => {
            const reading = readingByKey[key];
            if (!reading) {
              console.warn(`  ! unknown reading key: ${key}`);
              return;
            }
            reading.relevant_lectures.push({ number: lecture.number, title: lecture.title, date: day.date });
          });
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
  return metadata;
}

function compileTemplate(name) {
  return handlebars.compile(fs.readFileSync(path.join(templatesDir, name), 'utf-8'));
}

function build() {
  console.log('Building course website...');
  fs.emptyDirSync(outputDir);
  fs.copySync(assetsDir, outputDir);

  const metadata = prepareCourseMetadata(require(METADATA_FILE));

  fs.writeFileSync(path.join(outputDir, 'index.html'), compileTemplate('_course.html')(metadata));
  console.log('  → dist/index.html');

  if (metadata.readings && metadata.readings.length > 0) {
    fs.writeFileSync(path.join(outputDir, 'readings.html'), compileTemplate('_course_readings.html')(metadata));
    console.log('  → dist/readings.html');
  }

  console.log('Build completed!');
}

build();
