# Course content guide

## Directory roles

```text
content/
  manifest.ts                         chapter registration and ordered sections
  types.ts                            reusable content types
  chapters/
    chapter-01/
      index.md                        chapter overview used by the app
      sections/*.md                   authored lesson text used by the app
      checks.ts                       knowledge-check questions and answers
      examples.ts                     exact rows for an interactive example
      source-transcript.md            supplied Markdown, retained for audit
public/sources/chapter-01.pdf         original lecturer PDF
src/app/                             generic home, chapter, and section routes
src/components/learning/             reusable reading/navigation/check UI
src/features/demos/                   optional interactive explorations
```

The section and chapter pages never embed whole lessons in JSX. `readLesson()` reads the Markdown path specified in the manifest. `generateStaticParams()` creates all chapter and section paths from that same manifest. Navigation and previous/next links use the manifest order.

## Source references

- `sourceSlides` in each section's manifest entry controls the visible PDF slide links.
- Within Markdown, a `<!-- source-slides: 12,13 -->` comment immediately after a claim or example records finer provenance. The renderer hides these comments, but they remain in the lesson source for auditing.
- Checks also carry `sourceSlides`; example data identifies its source in code comments.
- `pdfPageRules` maps **displayed slide numbers** to **physical PDF pages**. Chapter 1 skips displayed slide 11, so slides 1–10 map directly and slide 12 onward map to the preceding physical page. A new chapter can omit this property when page and slide numbers match.
- `sourceNote` and `sourceNoteFromSlide` can explain unusual numbering to students in the source disclosure.

The current lesson distinguishes added intuition with **“Intuisi · penjelasan tambahan”** callouts. It labels social-media assertions and contested or ambiguous claims as claims of the slide instead of validated facts. Where the source is unclear, consult the PDF before changing the lesson.

## Add Chapter 2

1. Put the lecturer's original PDF at `public/sources/chapter-02.pdf`. Keep its original file separately if the supplied name carries additional meaning.
2. Make `content/chapters/chapter-02/`. Save the structured source transcript as `source-transcript.md` and write an `index.md` overview based on the chapter's actual outline and slides.
3. Write the chapter's lesson parts as `sections/01-<slug>.md`, `sections/02-<slug>.md`, and so on. Group related slides by concept; do not assume one page per slide. Put `<!-- source-slides: n -->` near definitions, formulas, algorithms, examples, and lecturer-specific claims.
4. If useful, add `checks.ts` exporting `Record<string, Check[]>` keyed by section ID. Include a slide reference with each question. Optional chapter-specific datasets can live in `examples.ts` or another content file. Existing demos are selected with `demo: "environment"`, `"agent-architecture"`, or `"dataset"`; omit `demo` unless the demo fits that material. A new kind of interaction requires a new reusable component in `src/features/demos/`.
5. Add **one** `ChapterMeta` entry to `content/manifest.ts`: unique `id` (for example `chapter-02`), `order: 2`, title, short title, description, `topics`, PDF/transcript/overview paths, and ordered section entries with unique IDs, descriptions, reading time, `sourceSlides`, and Markdown paths. Import its optional checks and assign `checks`. Add `pdfPageRules` only if slide numbering differs from PDF pages. Do not add chapter-specific routes or navigation JSX.
6. Run `npm run lint`, `npm run typecheck`, and `npm run build`. Open the home page, new overview, first and last section, PDF source links, equations, tables, and mobile layout. Compare numerical examples and all uncertain statements to the PDF.

The homepage will list the new chapter automatically. The chapter overview can display previous/next chapter links when applicable, and the final section can lead to the next chapter. Browser progress keys include the chapter ID, so section IDs can be reused between chapters.

## Known source ambiguities

- The supplied transcript's frontmatter names a PDF ending in `(1)(1).pdf`, while the actual supplied file ends in `(1).pdf`. The app uses the actual file supplied with this task.
- Displayed slide 11 is missing; the PDF has 52 pages but visible slide numbering ends at 53.
- Slides 4 and 7 contain partially cropped comments/posts. The lesson does not invent their missing text.
- Slide 6 shows unverified social-media comparisons and cost figures; the lesson describes their role without repeating them as fact.
- The strategy graphic on slide 9 has no visible source citation.
- Slide 32 reproduces an external history infographic with potentially debatable details. The lesson presents its periodization as the infographic's summary.
- Slide 35 describes ChatGPT as an incomplete early AGI in tension with slide 34's “no example yet” column. The lesson preserves and flags this tension.
- Slide 42 has an unmatched parenthesis, and slide 44 has tightly compressed numeric vehicle fields plus the phrase “bilangan continues.” The lesson does not silently repair the source.
- Slide 52's event title is cropped in the photograph.
