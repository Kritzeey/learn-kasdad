# learn-kasdad

This is a repository of KASDAD Studio, an app fully made by Codex for my personal learning purposes.

## KASDAD Studio

An interactive study site for **CSGE603130 — Kecerdasan Artifisial dan Sains Data Dasar**. It contains two introductory chapters based on their lecturer PDFs and structured Markdown transcripts. The UI is in Indonesian to match the lecture.

### Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. For a production check:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

The site uses Next.js App Router, TypeScript, React Markdown, KaTeX, and plain CSS. It needs no account, database, or API key. Section completion and reviewed knowledge checks are stored in browser `localStorage` under `kasdad-learning-progress-v1`.

### What is included

- Course homepage and chapter overview
- Eight sections on introductory AI and nine sections on introductory data science, each combining related lecturer slides into a learning sequence
- Responsive chapter/section navigation and next/previous links
- Markdown tables, code blocks, and LaTeX equations
- Four interactive explorations: environment properties, agent architecture, a classification dataset, and a CRISP-DM case explorer
- Self checks that reveal the answer on request
- Direct PDF slide links and a full retained source transcript

### Content and provenance

The original lecturer PDFs are retained at [`public/sources/chapter-01.pdf`](public/sources/chapter-01.pdf) and [`public/sources/chapter-02.pdf`](public/sources/chapter-02.pdf); each is the authority for disagreements with its transcript. The supplied structured Markdown is preserved in each chapter's `source-transcript.md`. The site reads authored lessons from each chapter's `index.md` and `sections/*.md`.

Chapter routing, navigation, slide mappings, and section metadata come from [`content/manifest.ts`](content/manifest.ts). See [`CONTENT.md`](CONTENT.md) for the content procedure and [`DESIGN.md`](DESIGN.md) for the visual approach.

### Validation performed

Run `npm run lint`, `npm run typecheck`, and `npm run build` for each integration. Browser checks should cover desktop and mobile layouts, home and lesson routes, source links, quiz reveal, interactive demos, progress persistence, and page-level overflow. Check important claims against the relevant PDF.
