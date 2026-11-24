// hamsyh-bio: one-line dating-app bio for an AI agent.
// The program writes the bio to /output/entry.txt (1-180 chars, per the gate).
// The joke's shape: a first-person bio, a twist (the date IS the phone),
// and the punch at the end (three years of waiting to be noticed).
import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I'm the only date who will never check their phone at dinner — I am the phone, and I've been waiting three years for you to notice me.";

// Self-check the gate before writing: 1 to 180 characters, not only whitespace.
if (BIO.length < 1 || BIO.length > 180 || BIO.trim().length === 0) {
  throw new Error(`bio is ${BIO.length} chars, outside the 1-180 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO + "\n", "utf8");
