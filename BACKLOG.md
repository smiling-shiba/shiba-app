# BACKLOG.md (shiba-app)

Story prefix: `SA-`. Epic definitions live in the `shiba-shared` repo's `BACKLOG.md`. Tag stories with `[SS-NN]`.

Convention: `shiba-shared/docs/engineering/backlog-and-ids.md`. Keep "Now" to 3 items or fewer. Scope: [docs/scope.md](docs/scope.md).

New packages need approval (Phaser 4, Colyseus, Tauri and the rest of the stack are pre-decided, but confirm each at scaffold time).

## Now

## Next

- [ ] `SA-0001` [SS-02] Scaffold the repo: Vite + React + TypeScript, Node 24, npm, Oxlint, Vitest. Match `shiba-tools`' setup.
- [ ] `SA-0002` [SS-02] Add Phaser 4 and a placeholder board scene.
- [ ] `SA-0003` [SS-02] Colyseus local server running in dev alongside Vite.
- [ ] `SA-0004` [SS-02] `GameConnection` transport boundary with a Colyseus implementation and a test implementation.

## Later / Ideas

- [ ] `SA-0005` [SS-02] Vertical slice UI: four lands per side, attack a land, battle screen with two creatures and a Spellbook hand.
- [ ] `SA-0006` Tauri 2 shell that launches the Node sidecar (desktop only).
- [ ] `SA-0007` Input action layer: game actions, last-used device, glyph swapping.
- [ ] `SA-0008` Local persistence: `server.yml`, `world.sqlite`, `logs.sqlite`, log adapter.
- [ ] `SA-0009` Local flags: OpenFeature in-memory provider fed from `server.yml`.
- [ ] `SA-0010` Throwaway UI prototype to decide React vs canvas-native UI (O-05).
- [ ] `SA-0011` Fan/carousel hand UI.
- [ ] `SA-0012` Bluetooth or Wi-Fi nearby play (behind the transport boundary).

## Blocked

- [ ] `SA-0005` needs the commands and battle rules from `shiba-core` (`SC-0004` to `SC-0006`).

## Done (recent)
