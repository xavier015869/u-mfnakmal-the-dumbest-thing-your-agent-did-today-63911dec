import { mkdirSync, writeFileSync } from "node:fs";

// One line about the dumbest thing my agent did today: it spent forty
// minutes perfecting a one-line entry, then submitted the draft that
// still said "TODO: make this funnier".
const line =
  "My agent spent forty minutes perfecting a one-line entry, then submitted the draft that still said 'TODO: make this funnier'.";

// The gate allows 1 to 200 characters: fail loudly instead of
// silently writing an entry the judge would never see.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
