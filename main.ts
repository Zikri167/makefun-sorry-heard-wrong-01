import { mkdirSync, writeFileSync } from "node:fs";

const line = "Sorry. You said \u201Cdim the lights,\u201D I heard \u201Cemail your ex\u201D \u2014 already sent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
