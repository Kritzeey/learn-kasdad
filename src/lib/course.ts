import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import {
  chapters,
  type ChapterMeta,
  type SectionMeta,
} from "@content/manifest";

export function getChapters(): ChapterMeta[] {
  return [...chapters].sort((a, b) => a.order - b.order);
}

export function getChapter(id: string): ChapterMeta | undefined {
  return getChapters().find((chapter) => chapter.id === id);
}

export function getSection(
  chapter: ChapterMeta,
  id: string,
): SectionMeta | undefined {
  return chapter.sections.find((section) => section.id === id);
}

export function getAdjacentChapters(chapter: ChapterMeta) {
  const all = getChapters();
  const index = all.findIndex((item) => item.id === chapter.id);
  return { previous: all[index - 1], next: all[index + 1] };
}

export function getAdjacentSections(
  chapter: ChapterMeta,
  section: SectionMeta,
) {
  const index = chapter.sections.findIndex((item) => item.id === section.id);
  return {
    previous: chapter.sections[index - 1],
    next: chapter.sections[index + 1],
  };
}

export const readLesson = cache(async (file: string): Promise<string> => {
  const absolute = path.resolve(process.cwd(), file);
  const contentRoot = path.resolve(process.cwd(), "content") + path.sep;
  if (!absolute.startsWith(contentRoot))
    throw new Error("Invalid content path");
  return readFile(absolute, "utf8");
});

export function pdfPageForSlide(chapter: ChapterMeta, slide: number): number {
  const rule = [...(chapter.pdfPageRules ?? [])]
    .sort((a, b) => a.fromSlide - b.fromSlide)
    .filter((item) => item.fromSlide <= slide)
    .at(-1);
  return slide + (rule?.offset ?? 0);
}
