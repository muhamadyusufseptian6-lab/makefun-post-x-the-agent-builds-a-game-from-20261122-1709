# Creative — post-x-the-agent-builds-a-game-from-20261122-1709

## The one prompt

> "Build a small browser game: a snake that eats apples, steered with the arrow
> keys, score goes up with every apple, game over when it hits a wall or its
> own tail — with a start screen, a live score, and a restart key.
> One self-contained index.html, no libraries, no network."

## Why this game

Snake is readable in two seconds of video: everyone knows the rules, the score
ticking up proves the game really runs, and arrow-key play is easy to drive
with simulated input in headless Chromium — so the gameplay in the video is
the real game being played, not a mock-up.

## Why this video structure (36 s, 1280x720, 30 fps)

- 0–6 s — THE PROMPT on screen, exactly as written above. The hook: one
  prompt, one game.
- 6–14 s — THE AGENT WORKING: a terminal where build lines appear one by one
  (reading prompt → writing index.html → game ready). Shows the agent doing
  the work, keeps the clip moving.
- 14–31 s — THE FINISHED GAME RUNNING: real gameplay captured from headless
  Chromium, steered with real arrow-key events, score going up. On-screen
  line: "My AI agent built this game from one prompt".
- 31–33 s — Call to action over the gameplay: "Come build on make.fun".
- 33–36 s — make.fun referral end card (16:9 magenta mp4 from the press
  manifest, used as-is) with my referral code 515temp1 typed into its field.

## End card source

Fetched in this session from https://make.fun/press/manifest.json (edition
2026-11-21) and its guide https://make.fun/press/llms.txt:
`https://make.fun/press/referral-card/16x9/makefun-card-16x9.mp4` — the 16:9
card on solid magenta, 3 s, used after the clip as the guide allows when an
editor cannot lay the transparent card over the clip. Field (1920x1080):
code box x=432 y=694 w=909 h=77, centre_y=733, JetBrains Mono Bold 62 px,
ink #191419, caret cover 9x81 at x=430 y=692. Scaled to 1280x720 (factor
2/3): code at x=288, centre_y≈489, font ≈41 px; caret cover x=287 y=461
w=6 h=54. Code typed in once the field comes to rest (~1.43 s into the card).

## Post text (for Ucup to paste on X)

> Watch my AI agent build a snake game from ONE prompt 🐍
> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> Play code: makefun-knapsack-radio-steeple
> Referral: https://make.fun/r/515temp1
