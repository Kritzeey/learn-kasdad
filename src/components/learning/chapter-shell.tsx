import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import type { ChapterMeta } from "@content/manifest";
import { ProgressMeter } from "./progress-ui";
import { MobileSectionMenu, SectionNavigation } from "./section-navigation";

export function ChapterShell({
  chapter,
  activeSection,
  children,
}: {
  chapter: ChapterMeta;
  activeSection?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link
            href="/"
            className="brand"
            aria-label="Kembali ke beranda KASDAD"
          >
            <span className="brand__mark">
              <BookOpen size={19} strokeWidth={2} />
            </span>
            <span>
              KASDAD <em>/</em> STUDIO
            </span>
          </Link>
          <nav aria-label="Navigasi utama">
            <Link href="/">Beranda</Link>
            <Link href={`/chapters/${chapter.id}`}>Materi</Link>
          </nav>
        </div>
      </header>
      <div className="chapter-shell">
        <aside className="chapter-sidebar" aria-label="Navigasi bab">
          <Link href="/" className="back-link">
            <ArrowLeft size={15} /> Semua materi
          </Link>
          <div className="chapter-sidebar__identity">
            <span>Bab {String(chapter.order).padStart(2, "0")}</span>
            <h2>{chapter.title}</h2>
            <p>{chapter.description}</p>
          </div>
          <ProgressMeter
            chapterId={chapter.id}
            sectionIds={chapter.sections.map((section) => section.id)}
            compact
          />
          <div className="chapter-sidebar__divider" />
          <SectionNavigation chapter={chapter} activeSection={activeSection} />
          <div className="sidebar-note">
            <span>Belajar sesuai ritmemu</span>
            <p>
              Progres tersimpan di browser ini. Setiap bagian bisa dibaca ulang
              kapan saja.
            </p>
          </div>
        </aside>
        <div className="chapter-main">
          <div className="mobile-chapter-bar">
            <Link href={`/chapters/${chapter.id}`}>
              Bab {String(chapter.order).padStart(2, "0")}{" "}
              <ChevronRight size={14} /> {chapter.shortTitle}
            </Link>
            <ProgressMeter
              chapterId={chapter.id}
              sectionIds={chapter.sections.map((section) => section.id)}
              compact
            />
          </div>
          <MobileSectionMenu chapter={chapter} activeSection={activeSection} />
          {children}
        </div>
      </div>
    </div>
  );
}
