import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3 } from "lucide-react";
import { getChapter, getChapters, getSection, readLesson } from "@/lib/course";
import { ChapterShell } from "@/components/learning/chapter-shell";
import { ChapterNavigation } from "@/components/learning/chapter-navigation";
import { LessonMarkdown } from "@/components/learning/lesson-markdown";
import { SourceReference } from "@/components/learning/source-reference";
import { KnowledgeCheck } from "@/components/learning/knowledge-check";
import { CompletionButton } from "@/components/learning/progress-ui";
import { InteractiveDemo } from "@/features/demos/interactive-demo";

export function generateStaticParams() {
  return getChapters().flatMap((chapter) =>
    chapter.sections.map((section) => ({
      chapterId: chapter.id,
      sectionId: section.id,
    })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapterId: string; sectionId: string }>;
}): Promise<Metadata> {
  const { chapterId, sectionId } = await params;
  const chapter = getChapter(chapterId);
  const section = chapter && getSection(chapter, sectionId);
  return {
    title: section
      ? `${section.title} · ${chapter.shortTitle}`
      : "Bagian tidak ditemukan",
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ chapterId: string; sectionId: string }>;
}) {
  const { chapterId, sectionId } = await params;
  const chapter = getChapter(chapterId);
  if (!chapter) notFound();
  const section = getSection(chapter, sectionId);
  if (!section) notFound();
  const markdown = await readLesson(section.markdownFile);
  const checks = chapter.checks?.[section.id] ?? [];
  const number =
    chapter.sections.findIndex((item) => item.id === section.id) + 1;
  return (
    <ChapterShell chapter={chapter} activeSection={section.id}>
      <main className="article-container">
        <div className="breadcrumbs">
          <Link href="/">Beranda</Link>
          <span>/</span>
          <Link href={`/chapters/${chapter.id}`}>
            Bab {String(chapter.order).padStart(2, "0")}
          </Link>
          <span>/</span>
          <span>Bagian {String(number).padStart(2, "0")}</span>
        </div>
        <header className="section-hero">
          <span className="eyebrow">{section.eyebrow.toUpperCase()}</span>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
          <div className="section-hero__meta">
            <span>
              <Clock3 size={16} /> {section.readingMinutes} menit baca
            </span>
            <span>
              Bagian {number} dari {chapter.sections.length}
            </span>
          </div>
        </header>
        <div className="article-rule" />
        <article className="lesson-article">
          <LessonMarkdown>{markdown}</LessonMarkdown>
        </article>
        <SourceReference slides={section.sourceSlides} chapter={chapter} />
        {section.demo && <InteractiveDemo id={section.demo} />}
        {checks.length > 0 && (
          <KnowledgeCheck chapterId={chapter.id} checks={checks} />
        )}
        <div className="completion-panel">
          <div>
            <span className="eyebrow">SELESAI MEMBACA?</span>
            <h2>Simpan progres bagian ini.</h2>
            <p>Kamu bisa kembali dan mengubah statusnya kapan saja.</p>
          </div>
          <CompletionButton chapterId={chapter.id} sectionId={section.id} />
        </div>
        <ChapterNavigation chapter={chapter} section={section} />
      </main>
    </ChapterShell>
  );
}
