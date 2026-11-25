// The Tired Dark Lord — entry for make.fun competition
// u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb
// Deterministic: writes the same monologue on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Come closer. No — not that close. The candles have burned down to their thumbs again, and I... where was I? Ah. The bell. Yes, the bell of Vharra, the one I rang three centuries ago and have been collecting ever since. Every dawn it owes me, and every dawn the priests hide it behind another locked door. They think I want their gold. I want the quiet after. One more dawn, one more door, and the kingdom finally... hmm. You are still here. Hold this candle. When the bell stops — and it will stop — you'll understand why I kept the dark lit.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
