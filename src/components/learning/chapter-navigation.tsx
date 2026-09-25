import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ChapterMeta, SectionMeta } from "@content/manifest";
import { getAdjacentChapters, getAdjacentSections } from "@/lib/course";

export function ChapterNavigation({
  chapter,
  section,
}: {
  chapter: ChapterMeta;
  section: SectionMeta;
}) {
  const { previous, next } = getAdjacentSections(chapter, section);
  const { next: nextChapter } = getAdjacentChapters(chapter);
  return (
    <nav className="chapter-pagination" aria-label="Lanjut belajar">
      {previous ? (
        <Link
          href={`/chapters/${chapter.id}/${previous.id}`}
          className="pagination-link pagination-link--previous"
        >
          <ArrowLeft size={18} />
          <span>
            <small>SEBELUMNYA</small>
            <strong>{previous.title}</strong>
          </span>
        </Link>
      ) : (
        <Link
          href={`/chapters/${chapter.id}`}
          className="pagination-link pagination-link--previous"
        >
          <ArrowLeft size={18} />
          <span>
            <small>SEBELUMNYA</small>
            <strong>Ikhtisar bab</strong>
          </span>
        </Link>
      )}
      {next ? (
        <Link
          href={`/chapters/${chapter.id}/${next.id}`}
          className="pagination-link pagination-link--next"
        >
          <span>
            <small>BERIKUTNYA</small>
            <strong>{next.title}</strong>
          </span>
          <ArrowRight size={18} />
        </Link>
      ) : (
        <Link
          href={nextChapter ? `/chapters/${nextChapter.id}` : "/"}
          className="pagination-link pagination-link--next"
        >
          <span>
            <small>{nextChapter ? "BAB BERIKUTNYA" : "SELESAI"}</small>
            <strong>
              {nextChapter ? nextChapter.title : "Kembali ke beranda"}
            </strong>
          </span>
          <ArrowRight size={18} />
        </Link>
      )}
    </nav>
  );
}
