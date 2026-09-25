import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpenText, Clock3, FileText } from "lucide-react";
import {
  getAdjacentChapters,
  getChapter,
  getChapters,
  readLesson,
} from "@/lib/course";
import { ChapterShell } from "@/components/learning/chapter-shell";
import { LessonMarkdown } from "@/components/learning/lesson-markdown";
import { ProgressMeter } from "@/components/learning/progress-ui";

export function generateStaticParams() {
  return getChapters().map((chapter) => ({ chapterId: chapter.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapterId: string }>;
}): Promise<Metadata> {
  const { chapterId } = await params;
  const chapter = getChapter(chapterId);
  return { title: chapter?.title ?? "Bab tidak ditemukan" };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapterId: string }>;
}) {
  const { chapterId } = await params;
  const chapter = getChapter(chapterId);
  if (!chapter) notFound();
  const markdown = await readLesson(chapter.overviewFile);
  const adjacent = getAdjacentChapters(chapter);
  return (
    <ChapterShell chapter={chapter}>
      <main className="article-container">
        <div className="breadcrumbs">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <span>Bab {String(chapter.order).padStart(2, "0")}</span>
        </div>
        <div className="chapter-hero">
          <span className="eyebrow">
            BAB {String(chapter.order).padStart(2, "0")} · IKHTISAR
          </span>
          <h1>{chapter.title}</h1>
          <p>{chapter.description}</p>
          <div className="chapter-hero__metrics">
            <span>
              <BookOpenText size={17} /> {chapter.sections.length} bagian
            </span>
            <span>
              <Clock3 size={17} /> ±
              {chapter.sections.reduce(
                (sum, section) => sum + section.readingMinutes,
                0,
              )}{" "}
              menit
            </span>
            <a href={chapter.sourcePdf} target="_blank" rel="noreferrer">
              <FileText size={17} /> PDF dosen ↗
            </a>
          </div>
        </div>
        <ProgressMeter
          chapterId={chapter.id}
          sectionIds={chapter.sections.map((section) => section.id)}
        />
        <div className="overview-prose">
          <LessonMarkdown>{markdown}</LessonMarkdown>
        </div>
        <div className="chapter-contents">
          <div className="section-heading-row">
            <span className="eyebrow">JALUR BELAJAR</span>
            <h2>Isi bab</h2>
            <p>
              {chapter.sections.length} bagian mengikuti urutan konsep dalam
              kuliah.
            </p>
          </div>
          <div className="section-list">
            {chapter.sections.map((section, index) => (
              <Link
                href={`/chapters/${chapter.id}/${section.id}`}
                className="section-list__item"
                key={section.id}
              >
                <span className="section-list__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="section-list__content">
                  <small>{section.eyebrow}</small>
                  <strong>{section.title}</strong>
                  <span>{section.description}</span>
                </span>
                <span className="section-list__minutes">
                  {section.readingMinutes} menit
                </span>
                <ArrowRight size={19} />
              </Link>
            ))}
          </div>
        </div>
        <div className="overview-cta">
          <div>
            <span>SIAP MEMULAI?</span>
            <h2>Mulai dari bagian pertama.</h2>
          </div>
          <Link
            href={`/chapters/${chapter.id}/${chapter.sections[0].id}`}
            className="button button--gold"
          >
            Bagian pertama <ArrowRight size={17} />
          </Link>
        </div>
        {(adjacent.previous || adjacent.next) && (
          <nav className="adjacent-chapters" aria-label="Navigasi bab">
            {adjacent.previous && (
              <Link href={`/chapters/${adjacent.previous.id}`}>
                ← Bab sebelumnya: {adjacent.previous.shortTitle}
              </Link>
            )}
            {adjacent.next && (
              <Link href={`/chapters/${adjacent.next.id}`}>
                Bab berikutnya: {adjacent.next.shortTitle} →
              </Link>
            )}
          </nav>
        )}
      </main>
    </ChapterShell>
  );
}
