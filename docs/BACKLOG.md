# BACKLOG.md (shiba-app)

Story prefix: `SA-`. Epic definitions live in the `shiba-shared` repo's `docs/BACKLOG.md`. Tag stories with `[SS-NN]`.

Convention: `shiba-shared/docs/engineering/backlog-and-ids.md`. Keep "Now" to 3 items or fewer. Scope: [scope.md](scope.md).

New packages need approval (Phaser 4, Colyseus, Tauri and the rest of the stack are pre-decided, but confirm each at scaffold time).

## Now

_Nothing in progress._

## Next

- [ ] `SA-0003` [SS-02] Colyseus local server running in dev alongside Vite.
- [ ] `SA-0004` [SS-02] `GameConnection` transport boundary with a Colyseus implementation and a test implementation.
- [ ] `SA-0014` [SS-02] A pause/resume boundary between React and Phaser: something owns "is a menu open" and tells the Phaser scene to stop ticking and stop taking input while it is (`scene.pause()`/`resume()`), so a menu overlay doesn't fight the board underneath for CPU or focus. Same shape of problem as `SA-0004`, a clean seam instead of either side reaching into the other.
- [ ] `SA-0013` [SS-01] Pack loader: empty `policies/`, `templates/`, `assets/`; configurable pack dir; verify, load, validate. Prove it end to end with a new, genuinely trivial toy policy ("Click Here": one button, one counter, no game content) instead of waiting on real rules — sidesteps the block on `SA-0005`. Include a spam-click stress test: does the client -> Colyseus -> policy -> back round trip hold up under rapid clicks, and how does it fail if it doesn't? Toy policy lives alongside `shiba-sdk`'s other toy fixtures.

## Later / Ideas

- [ ] `SA-0005` [SS-02] Vertical slice UI: four lands per side, attack a land, battle screen with two creatures and a Spellbook hand.
- [ ] `SA-0006` Tauri 2 shell that launches the Node sidecar (desktop only).
- [ ] `SA-0007` Input action layer: game actions, last-used device, glyph swapping.
- [ ] `SA-0008` Local persistence: `server.yml`, `world.sqlite`, `logs.sqlite`, log adapter.
- [ ] `SA-0009` Local flags: OpenFeature in-memory provider fed from `server.yml`.
- [ ] `SA-0010` Throwaway UI prototype to decide React vs canvas-native UI (O-05).
- [ ] `SA-0011` Fan/carousel hand UI.
- [ ] `SA-0012` Bluetooth or Wi-Fi nearby play (behind the transport boundary).
- [ ] `SA-0015` Investigate a customizable UI — not full UI modding (nixed for now: real UI logic reopens the code-execution trust question D-45 avoided for rules). Something lighter: a couple of bundled themes, a template where a player supplies their own colors (hex codes) and maybe font size, or documented instructions for dropping in a CSS override file. Mechanism undecided; revisit once a real UI exists to hang it on.

## Blocked

- `SA-0005` (above) is blocked: it needs the game's rules, which are a policy that has not been written yet.

## Done (recent)

- [x] `SA-0002` [SS-02] Add Phaser 4 and a placeholder board scene. `GameCanvas.tsx` mounts/tears down `Phaser.Game` in a `useEffect` — the one seam between React and Phaser (D-04). `BoardScene` is just centered text; the real board comes from a loaded policy later, never hardcoded. Found and worked around a real gap: Phaser's module code touches `window` and does real canvas work just to load, so it can't be imported under a fake DOM (`jsdom`/`happy-dom`) — no such environment implements real canvas/WebGL. `App.test.ts` mocks `createGame` instead of pulling in real Phaser, so `npm test` stays on the `node` environment. Verified for real: a running dev server renders "Smiling Shiba" plus the board placeholder in a browser, one canvas element (React StrictMode's double-mount doesn't leak a second `Phaser.Game`), clean console.
- [x] `SA-0001` [SS-02] Scaffold the repo: Vite + React + TypeScript, Node 24, npm, Oxlint, Vitest, matching `shiba-tools`. Client lives in `src/client/` (Vite's `root`), building to `dist/client/`; config stays at the repo root, `tests/` alongside it, ready for `src/server/` (`SA-0003`) to sit next to it. `App.tsx` is a bare placeholder — the Vite/React starter template's marketing content was stripped out. One smoke test (module loads and exports a component) without a DOM testing library — that's a new-package call for once there is a real component to render (`SA-0002`+). Verified for real: `npm run dev` actually renders "Smiling Shiba" in a browser with a clean console, not just that the build succeeds.
