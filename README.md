# ⚡ PreApeXis Vite — React Boilerplate

A minimal, opinionated React starter. Clone it, install, and you're building — not configuring.

---

## Stack

| Tool             | Version | Why it's here                               |
| ---------------- | ------- | ------------------------------------------- |
| **Vite**         | ^8.0    | Fastest dev server available right now      |
| **React**        | ^19.2   | Latest stable, concurrent features included |
| **TypeScript**   | ~5.9    | Type safety without compromise              |
| **Tailwind CSS** | ^4.2    | v4 — CSS-first, no config file needed       |
| **React Router** | ^7.13   | Client-side routing, future-flag ready      |
| **Lucide React** | ^1.7    | Clean, consistent icon set                  |

---

## Getting Started

```bash
# 1. Scaffold into a new folder (replace `my-project` with your actual project name)
npx degit VarunGaikwad/preapexis_vite my-project
cd my-project

# 2. Install — postinstall script runs automatically and names the project after your folder
npm install

# 3. Start building
npm run dev
```

> **Note:** `degit` pulls a clean copy of the repo with no git history attached. On `npm install`, the `postinstall` script reads your folder name and auto-updates `package.json` and `index.html`. It runs exactly once — after that, a `.initialized` flag blocks it from firing again.

---

## Scripts

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check + production build
npm run preview    # Serve the production build locally
npm run lint       # Run ESLint
```

---

## Project Structure

```
├── src/
│   └── App.tsx          # Start here — your entry component
├── index.html           # Auto-titled on first install
├── package.json         # Auto-named on first install
├── reset.js             # Postinstall script (runs once, do not delete)
├── vite.config.ts
└── tsconfig.json
```

---

## How the Auto-Init Works

On first `npm install`, `reset.js` runs via the `postinstall` hook and does three things:

1. Reads your **folder name** as the project name
2. Updates `<title>` in `index.html` (converts underscores to spaces, capitalizes words)
3. Updates `name` in `package.json`

After that, it writes a `.initialized` flag file so it never runs again. Don't delete that file unless you want the init to re-run.

---

## Customization

- **Routing** — `react-router-dom` is installed. Add your `<BrowserRouter>` and routes in `App.tsx`.
- **Styling** — Tailwind v4 is configured via the Vite plugin. No `tailwind.config.js` needed.
- **Icons** — Import directly from `lucide-react`: `import { Rocket } from 'lucide-react'`
- **Compiler** — React Compiler (`babel-plugin-react-compiler`) is wired in via Babel + Rolldown. Memoization is mostly automatic.

---

## Requirements

- **Node.js** ≥ 18
- **npm** ≥ 9

---

## License

MIT — do whatever you want with it.
