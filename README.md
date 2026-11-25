# PowerOps

Review rack demand and phase balance, then safely exercise the simulated outlet control workflow.

[Live demo](https://paragjindal.com/lab/powerops) · [Technical case study](docs/projects/powerops.md)

![PowerOps concept artwork](docs/artwork.webp)
*Concept artwork*

![PowerOps running in the integrated engineering lab](public/lab-screenshots/powerops.webp)

## Run independently

Use Node.js 24 or later from this repository root. npm installs React and Vite from their pinned registry dependencies and the simulator from its included archive.

```sh
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Run `npm test` for the package regression suite and `npm run build` for a static production bundle.

To use Docker, build with `docker build -t powerops .` and run with `docker run --rm -p 127.0.0.1:4173:80 powerops`. The static browser application is served on port 4173.

The InfraPilot AI workflow companion is available at `/lab/infrapilot-ai` on the same origin. It preserves the simulated incident handoff and browser replay storage.

[Incident replay data and storage](docs/projects/incident-replay.md)

## Architecture

```mermaid
flowchart LR
  U[Browser controls] --> A[React project]
  A --> D[Project-specific logic]
  S[Versioned simulation package] --> A
  D --> O[Views and local exports]
```

The browser uses synthetic demonstration data. Optional local adapters are documented in the case study. The archive retains its source, tests, installation lock, and GitHub Actions configuration. A redistribution license has not been declared.

[Release notes and verified source provenance](docs/release-provenance.md)
