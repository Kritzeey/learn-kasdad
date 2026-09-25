# KASDAD Studio

An interactive study site for **CSGE603130 — Kecerdasan Artifisial dan Sains Data Dasar**. The initial release contains one complete introductory chapter based on the supplied lecturer PDF and structured Markdown transcript. The UI is in Indonesian to match the lecture.

## Run locally

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

## What is included

- Course homepage and chapter overview
- Eight lesson sections that combine related lecturer slides into a learning sequence
- Responsive chapter/section navigation and next/previous links
- Markdown tables, code blocks, and LaTeX equations
- Three interactive explorations: environment properties, agent architecture, and the classification dataset
- Self checks that reveal the answer on request
- Direct PDF slide links and a full retained source transcript

## Content and provenance

The original lecturer PDF is copied to [`public/sources/chapter-01.pdf`](public/sources/chapter-01.pdf) and is the authority for factual disagreements. The supplied structured Markdown is preserved at [`content/chapters/chapter-01/source-transcript.md`](content/chapters/chapter-01/source-transcript.md). The site reads its authored lesson Markdown from [`content/chapters/chapter-01/index.md`](content/chapters/chapter-01/index.md) and `sections/*.md`.

Chapter routing, navigation, slide mappings, and section metadata come from [`content/manifest.ts`](content/manifest.ts). See [`CONTENT.md`](CONTENT.md) for the exact Chapter 2 procedure and [`DESIGN.md`](DESIGN.md) for the visual approach.

## Validation performed

`npm run lint`, `npm run typecheck`, and `npm run build` pass. Browser checks covered desktop and 390px mobile layouts, home and lesson routes, equation rendering, source links, quiz reveal, interactive demos, dataset filtering, progress persistence, and absence of page-level horizontal overflow. The key formula and example slides were visually checked against the PDF.
