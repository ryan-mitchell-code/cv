# AI CV

A React + TypeScript + Tailwind application for presenting a CV in multiple views:

- `manager`
- `techLead`
- `iam`

The page includes a mode switcher and mode-aware sections so the content can be tailored for different audiences while reusing the same core profile data.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Local Development

### 1) Install dependencies

```bash
npm install
```

### 2) Run in development mode

```bash
npm run dev
```

Vite will print the local URL in the terminal (usually `http://localhost:5173`).

### 3) Build for production

```bash
npm run build
```

### 4) Run lint checks

```bash
npm run lint
```

## Publish to GitHub Pages

This project is already configured for GitHub Pages:

- `package.json` has `homepage` set to `https://ryan-mitchell-code.github.io/cv`
- `vite.config.ts` sets `base: "/cv/"`
- `npm run deploy` builds and publishes the `dist` folder via `gh-pages`

### First-time setup (if needed)

1. Ensure the repository is pushed to GitHub under `ryan-mitchell-code/cv`.
2. In GitHub repo settings, enable Pages and set source to **Deploy from a branch**.
3. Use branch `gh-pages` (created automatically by deploy script), folder `/ (root)`.

### Deploy

```bash
npm run deploy
```

After deployment, the site will be available at:

`https://ryan-mitchell-code.github.io/cv/`
