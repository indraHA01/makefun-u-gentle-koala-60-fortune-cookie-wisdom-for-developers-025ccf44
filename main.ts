// Fortune Cookie Wisdom for Developers — make.fun entry
// (u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
//
// Writes exactly one original fortune-cookie line to /output/entry.txt
// and self-checks the gate: UTF-8 text, 1-120 characters, not only
// whitespace. No deps, no network, no randomness — the same line on
// every run.
//
// Run:  node main.ts            (writes /output/entry.txt)
//       OUTPUT_PATH=./output/entry.txt node main.ts   (local test)

// The entry (96 characters): a fortune-cookie line about legacy code.
// The twist is "them both" — the tired stranger who wrote the code you
// curse, and you, who will one day be the tired stranger someone else
// curses. It reads like a real fortune cookie, says something true about
// a developer's day (inheriting code, code review, the 3 a.m. "who wrote
// this?" moment), and turns it toward kindness instead of blame — the
// one thing a tired senior engineer still needs to hear.
const ENTRY =
  "The legacy code you curse was written by someone as tired as you are \u2014 be gentle with them both.";

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

  // Exactly the line — no trailing newline, no extra bytes.
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Self-check the gate against what was actually written.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  const chars = [...written].length;

  if (written !== ENTRY) {
    throw new Error(`entry mismatch: file holds ${JSON.stringify(written)}`);
  }
  if (chars < 1 || chars > 120) {
    throw new Error(`gate fail: entry is ${chars} characters (must be 1-120)`);
  }
  if (written.trim().length === 0) {
    throw new Error("gate fail: entry is only whitespace");
  }

  console.log(`entry ok: ${chars} characters`);
  console.log(written);
}

main();
