// Sorry, I Heard That Wrong — u-kiencx-sorry-i-heard-that-wrong-1858c729
// Writes a single-line apology (<=140 chars) from a smart speaker to
// /output/entry.txt. Deterministic: no input, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry \u2014 I heard 'set a timer for pasta' as 'set a timer for NASA.' Houston has been informed. Your spaghetti is now a federal matter.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
