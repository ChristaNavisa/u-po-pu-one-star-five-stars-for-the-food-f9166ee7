// One Star, Five Stars for the Food — entrypoint.
// Writes a single-sentence alien tourist review of Earth (with a real
// compliment about the food) to /output/entry.txt. Deterministic:
// the same bytes on every run.
//
// The sentence is built as one joke with a turn, not a list: three
// small alien grievances (beach admission, a napping ban, paperwork
// as seasoning) stack up, then the "but" pivots to the food — tacos
// from an unnamed truck — as the punchline that redeems the trip.
// Every word earns its place; nothing after the pivot explains the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: Earth charges admission to its own beaches, bans napping in public, and seasons everything with paperwork — but the tacos from the truck with no name made the trip worth it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
