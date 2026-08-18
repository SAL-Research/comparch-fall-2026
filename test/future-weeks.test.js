// Unit test for the future-week shading: replicates the page's comparison
// (a week is shaded when its data-week-start is after "today") against the
// built dist/index.html, for a set of user-defined dates.
//
// Run with: npm test   (builds first, then asserts)
// In the browser, the same scenarios can be checked manually with the
// ?today=YYYY-MM-DD test hook, e.g. index.html?today=2026-10-20

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'), 'utf-8');
const weekStarts = [...html.matchAll(/data-week-start="(\d{4}-\d{2}-\d{2})"/g)].map(m => m[1]);

// The page logic: shade a week iff its start date is strictly after today.
function futureWeekCount(todayStr) {
  const today = new Date(todayStr + 'T00:00:00');
  return weekStarts.filter(start => new Date(start + 'T00:00:00') > today).length;
}

assert.strictEqual(weekStarts.length, 15, `expected 15 week-start attributes, got ${weekStarts.length}`);
assert.strictEqual(weekStarts[0], '2026-09-17', 'week 1 should start Sep 17');
assert.strictEqual(weekStarts[14], '2026-12-21', 'week 15 should start Dec 21');

// user-defined "today" -> expected number of shaded (future) weeks
const cases = [
  ['2026-08-18', 15], // before the semester: everything is in the future
  ['2026-09-16', 15], // day before the first lecture
  ['2026-09-17', 14], // week 1 has started, weeks 2-15 remain future
  ['2026-10-18', 10], // day before week 6: weeks 6-15 remain future
  ['2026-10-19', 9],  // week 6 starts today (not future), weeks 7-15 remain
  ['2026-10-20', 9],  // mid-week 6: weeks 7-15 remain
  ['2026-12-20', 1],  // only finals week (Dec 21) still ahead
  ['2026-12-21', 0],  // finals week started: nothing shaded
  ['2027-01-01', 0],  // after the semester
];

for (const [today, expected] of cases) {
  const got = futureWeekCount(today);
  assert.strictEqual(got, expected, `today=${today}: expected ${expected} future weeks, got ${got}`);
  console.log(`  ✓ today=${today} → ${got} future weeks`);
}

console.log('All future-week shading tests passed.');
