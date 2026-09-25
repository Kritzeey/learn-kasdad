"use client";

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import type { ChapterMeta } from "@content/manifest";
import { useProgress } from "@/features/progress/progress";

export function SectionNavigation({
  chapter,
  activeSection,
}: {
  chapter: ChapterMeta;
  activeSection?: string;
}) {
  const { sections } = useProgress();
  return (
    <nav className="section-nav" aria-label="Bagian dalam bab">
      <span className="section-nav__label">DAFTAR ISI</span>
      <Link
        href={`/chapters/${chapter.id}`}
        className={`section-nav__item ${!activeSection ? "is-active" : ""}`}
        aria-current={!activeSection ? "page" : undefined}
      >
        <span className="section-nav__number">⌂</span>
        <span>Ikhtisar bab</span>
        <ChevronRight size={15} />
      </Link>
      {chapter.sections.map((section, index) => {
        const done = sections.includes(`${chapter.id}/${section.id}`);
        return (
          <Link
            key={section.id}
            href={`/chapters/${chapter.id}/${section.id}`}
            className={`section-nav__item ${activeSection === section.id ? "is-active" : ""}`}
            aria-current={activeSection === section.id ? "page" : undefined}
          >
            <span className={`section-nav__number ${done ? "is-done" : ""}`}>
              {done ? <Check size={13} /> : String(index + 1).padStart(2, "0")}
            </span>
            <span>{section.title}</span>
            <ChevronRight size={15} />
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileSectionMenu({
  chapter,
  activeSection,
}: {
  chapter: ChapterMeta;
  activeSection?: string;
}) {
  const active = chapter.sections.find(
    (section) => section.id === activeSection,
  );
  return (
    <details className="mobile-section-menu">
      <summary>
        {active
          ? `${active.eyebrow} · ${active.title}`
          : "Pilih bagian belajar"}
        <ChevronRight size={16} />
      </summary>
      <nav aria-label="Pilih bagian dalam bab">
        <Link href={`/chapters/${chapter.id}`}>Ikhtisar bab</Link>
        {chapter.sections.map((section) => (
          <Link
            key={section.id}
            href={`/chapters/${chapter.id}/${section.id}`}
            aria-current={section.id === activeSection ? "page" : undefined}
          >
            {section.eyebrow} · {section.title}
          </Link>
        ))}
      </nav>
    </details>
  );
}
