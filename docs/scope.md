# shiba-app: Scope

Status: Draft. Decisions are tracked in `shiba-shared/docs/decisions/log.md` (D-04, D-05, D-15, D-17, D-18, D-26, D-28).

## What lives here

- **Client:** Vite + React + TypeScript for menus, HUD, deck builder, collection and settings. Phaser 4 for the board and battle.
- **Tauri 2 shell:** desktop packaging. Launches the local server as a sidecar.
- **Local / custom world server:** Node 24 + Colyseus. Authoritative for local games. Solo play is "multiplayer with one person connected."
- **Local persistence:** `server.yml` (readable config), `world.sqlite` (durable state), `logs.sqlite` (logs), `mods/`.
- **Local flags:** OpenFeature with the in-memory provider, fed from `server.yml`. No Flipt server needed to play.

## What does not live here

- Rules logic. Rules come from a policy in the pack the app loads. This repo never re-implements a rule.
- Official ladder, accounts, matchmaking, seasons, entitlements: `shiba-mps`.
- Store, Steam/GOG adapters and premium content: a private commercial pack.
- Mobile builds and Bluetooth. Later, and mobile is online-only.

## Pack folders

The app ships with empty `policies/`, `templates/` and `assets/` folders and accepts a configurable pack directory, so a game's data can live in a separate repo (D-34). Load flow: verify the policy signature (or warn if unsigned in local mode), load the policy into the runtime, read its contract, validate the templates, run. Format: `shiba-sdk/docs/pack-format.md`.

## Structure

One repo, one `package.json`, two build targets (client and server). Not a package workspace. The Colyseus Vite plugin can build the static client and a standalone server bundle from one project.

```text
src/client/   # React + Phaser
src/server/   # Colyseus local server
src-tauri/    # Tauri shell (Rust)
```

Exact layout is open until the scaffold exists.

## Rules for this repo

- **Server is authoritative.** The client sends intents (`ATTACK_LAND`, `PLAY_SPELL`) and renders results. The client may run the loaded policy for previews (legal-move highlighting, tooltips) but never for authority.
- **Transport boundary.** Gameplay UI talks to a `GameConnection` (`send(command)`, `subscribe(update)`, `close()`), so localhost Colyseus, the official service, tests and any future Bluetooth adapter are interchangeable.
- **Mobile-ready UI.** Touch-sized targets, responsive layouts, nothing important behind hover, input abstracted to game actions (`CONFIRM`, `CANCEL`, `END_TURN`).
- **Capabilities, not `if desktop`.** Storage, mods, local hosting and filesystem sit behind capability interfaces.
- **Flags** never hold rules. Rule values live in the policy and its templates.
- **Mods:** executable mods are allowed on desktop local mode only.
- **Ladder rules are not ours to run.** In ladder mode the official server (`shiba-mps`) plays by its own private rules, which may differ from the default policy the app ships (D-42). The app only renders what the server says. Preview rules in ladder mode are a display convenience, not the truth.
- **Custom games stay local.** Their rules are never sent to `shiba-mps`. The host's Colyseus server is authoritative for friends who join it. Shareable world files may come later (D-31).

## Open questions

- React alone, or canvas-native UI (PhaserJSX)? Prototype a throwaway screen first (O-05).
- Does the Shandalar-style overworld survive next to the four-lands game (O-11)?
- Server pause behavior in co-op: default no-pause, configurable.
- Whether base game data (a policy and templates) lives in this repo so forks can merge it.
