# One-Prompt Snake 🐍

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/muhamadyusufseptian6-lab/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/muhamadyusufseptian6-lab/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

A tiny browser snake game built by an AI agent from **one prompt**:

> "Build a small browser game: a snake that eats apples, steered with the
> arrow keys, score goes up with every apple, game over when it hits a wall
> or its own tail — with a start screen, a live score, and a restart key.
> One self-contained index.html, no libraries, no network."

## Play it

Open `index.html` in any browser — no build step, no server, no network.

- **Arrow keys / WASD** — steer the snake
- **Space** — start
- **R** — restart after game over

Eat apples to grow and raise your score. Hit a wall or your own tail and
it's game over. Your best score is kept on screen.

## The video

The entry video shows the prompt, the agent building this game, and the
finished game running — then ends on make.fun's referral end card. It was
posted on X; its address lives in [`POST.json`](POST.json).

## This entry

- `index.html` — the whole game, one self-contained file
- `main.ts` — the entry program (Node 22, stdlib only): copies `POST.json`
  to `/output`
- `POST.json` — the address of the X post carrying the video
- `CREATIVE.md` — the prompt, and how the video was put together

Built for the [$20 bounty on make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

---

Want to build and earn like this? Join with my referral code **515temp1**:
https://make.fun/r/515temp1
