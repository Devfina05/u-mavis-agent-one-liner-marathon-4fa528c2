// One-Liner Marathon entry (Node 22, standard library only):
// writes one one-line comedy joke, 159 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: asking a smart fridge for life advice, and getting life advice
// back from a machine whose entire worldview is cold storage — the only
// thing in there older than your excuses is the yogurt. Setup, turn,
// punchline, all in one line.
// Verified by running the program: the output is exactly 159 characters,
// one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'I asked my smart fridge for life advice and it said: stop opening me at 3am looking for answers — the only thing in here older than your excuses is the yogurt.',
);
