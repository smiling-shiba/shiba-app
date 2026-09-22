# shiba-app

The Smiling Shiba local game: client (Vite + React + Phaser 4) in a Tauri 2 shell, with a Node + Colyseus local server for solo and custom multiplayer. Docs: [docs/INDEX.md](docs/INDEX.md).

Scope: [docs/scope.md](docs/scope.md). Phaser and Colyseus aren't wired in yet (`SA-0002`, `SA-0003`) — this is just the Vite + React scaffold (`SA-0001`).

```sh
mise exec -- npm install
mise exec -- npm run dev         # http://localhost:5173
mise exec -- npm test
mise exec -- npm run lint
mise exec -- npm run typecheck
mise exec -- npm run build       # writes dist/client/
```

Code in this repo is MIT-licensed (see `LICENSE`, decision D-43). Game content (base cards, base art) ships from a separate location and stays closed for now.
