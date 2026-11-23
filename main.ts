// Entry program for the make.fun bounty
// "post-x-the-agent-builds-a-game-from-20261122-1709" (Node 22, stdlib only).
//
// The entry itself is a post on X: a short video of an AI agent building a
// tiny browser game from one prompt. This program does the one job the
// competition asks of it — it hands POST.json, the file at the repository
// root that names that post, over to the grader's /output directory.
// Nothing else about the post is written here; the house reads the post
// and its counts from X itself.
//
// Run the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
