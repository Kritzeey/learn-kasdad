import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Layers3, Sparkles } from "lucide-react";
import { getChapters } from "@/lib/course";
import { ProgressMeter } from "@/components/learning/progress-ui";

export default function HomePage() {
  const chapters = getChapters();
  const totalSections = chapters.reduce(
    (sum, chapter) => sum + chapter.sections.length,
    0,
  );
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header__inner">
          <Link href="/" className="brand brand--light">
            <span className="brand__mark">
              <BookOpen size={19} />
            </span>
            <span>
              KASDAD <em>/</em> STUDIO
            </span>
          </Link>
          <a href="#chapters">
            Jelajahi materi <ArrowRight size={16} />
          </a>
        </div>
      </header>
      <main>
        <section className="home-hero">
          <div className="home-hero__inner">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="hero-kicker__dot" /> CSGE603130 · RUANG BELAJAR
              </div>
              <h1>
                Pelajari ide di balik <i>KA dan sains data.</i>
              </h1>
              <p>
                Materi Kecerdasan Artifisial dan Sains Data Dasar, ditata ulang
                sebagai perjalanan belajar: baca konsepnya, telusuri contoh,
                coba visualisasi, lalu cek pemahamanmu.
              </p>
              <div className="hero-actions">
                <Link
                  className="button button--gold"
                  href={`/chapters/${chapters[0].id}`}
                >
                  Mulai belajar <ArrowRight size={17} />
                </Link>
                <a href="#chapters" className="hero-link">
                  Lihat struktur kuliah ↓
                </a>
              </div>
            </div>
            <div
              className="hero-visual"
              aria-label="Alur pembelajaran: konsep, eksperimen, dan pemahaman"
            >
              <div className="visual-grid" />
              <span className="hero-visual__top">PETA BELAJAR / 01</span>
              <div className="visual-orbit">
                <div className="visual-orbit__center">KA</div>
                <div className="visual-chip visual-chip--one">
                  01 <strong>Konsep</strong>
                </div>
                <div className="visual-chip visual-chip--two">
                  02 <strong>Eksplorasi</strong>
                </div>
                <div className="visual-chip visual-chip--three">
                  03 <strong>Refleksi</strong>
                </div>
              </div>
              <span className="hero-visual__bottom">
                Dari intuisi → model → penerapan
              </span>
            </div>
          </div>
        </section>
        <section className="home-content" id="chapters">
          <div className="home-intro">
            <div>
              <span className="eyebrow">KURIKULUM</span>
              <h2>Belajar bertahap, temukan ide penting.</h2>
              <p>
                Mulai berurutan untuk memahami fondasinya, atau kembali ke
                bagian tertentu saat mengulang sebelum ujian.
              </p>
            </div>
            <div className="course-stats">
              <div>
                <strong>{String(chapters.length).padStart(2, "0")}</strong>
                <span>Bab tersedia</span>
              </div>
              <div>
                <strong>{String(totalSections).padStart(2, "0")}</strong>
                <span>Bagian belajar</span>
              </div>
            </div>
          </div>
          <div className="chapter-list">
            {chapters.map((chapter) => (
              <article className="chapter-card" key={chapter.id}>
                <div className="chapter-card__number">
                  {String(chapter.order).padStart(2, "0")}
                </div>
                <div className="chapter-card__body">
                  <div className="chapter-card__meta">
                    <span>
                      <Layers3 size={14} /> BAB{" "}
                      {String(chapter.order).padStart(2, "0")}
                    </span>
                    <span>
                      <Clock3 size={14} /> ±
                      {chapter.sections.reduce(
                        (sum, section) => sum + section.readingMinutes,
                        0,
                      )}{" "}
                      menit
                    </span>
                  </div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.description}</p>
                  <div className="chapter-card__topics">
                    {chapter.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <ProgressMeter
                    chapterId={chapter.id}
                    sectionIds={chapter.sections.map((section) => section.id)}
                  />
                </div>
                <Link
                  href={`/chapters/${chapter.id}`}
                  className="chapter-card__arrow"
                  aria-label={`Buka ${chapter.title}`}
                >
                  <ArrowRight size={23} />
                </Link>
              </article>
            ))}
          </div>
          <div className="home-note">
            <Sparkles size={18} />
            <p>
              Konten belajar disusun dari slide dosen. Tiap bagian menyimpan
              rujukan ke slide asli, dan progresmu tersimpan lokal di browser.
            </p>
          </div>
        </section>
      </main>
      <footer className="home-footer">
        <span>KASDAD STUDIO</span>
        <span>Materi kuliah · Fasilkom UI · 2026/2027</span>
      </footer>
    </div>
  );
}
