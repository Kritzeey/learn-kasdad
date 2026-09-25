import { ExternalLink } from "lucide-react";
import { pdfPageForSlide } from "@/lib/course";
import type { ChapterMeta } from "@content/manifest";

function compact(slides: number[]): string {
  const numbers = [...new Set(slides)].sort((a, b) => a - b);
  if (numbers.length === 0) return "";
  const ranges: string[] = [];
  let start = numbers[0];
  let end = start;
  for (const number of numbers.slice(1)) {
    if (number === end + 1) end = number;
    else {
      ranges.push(start === end ? `${start}` : `${start}–${end}`);
      start = end = number;
    }
  }
  ranges.push(start === end ? `${start}` : `${start}–${end}`);
  return ranges.join(", ");
}

export function SourceReference({
  slides,
  chapter,
}: {
  slides: number[];
  chapter: ChapterMeta;
}) {
  return (
    <details className="source-reference">
      <summary>
        Sumber: slide {compact(slides)} <span>↗</span>
      </summary>
      <div className="source-reference__list">
        {slides.map((slide) => (
          <a
            key={slide}
            href={`${chapter.sourcePdf}#page=${pdfPageForSlide(chapter, slide)}`}
            target="_blank"
            rel="noreferrer"
          >
            Slide {slide} <ExternalLink size={13} aria-hidden="true" />
          </a>
        ))}
      </div>
      {chapter.sourceNote &&
        slides.some((slide) => slide >= (chapter.sourceNoteFromSlide ?? 1)) && (
          <p>{chapter.sourceNote}</p>
        )}
    </details>
  );
}
