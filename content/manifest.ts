import { checksBySection } from "./chapters/chapter-01/checks";
import { checksBySection as chapterTwoChecks } from "./chapters/chapter-02/checks";
import type { Check } from "./types";

export type DemoId =
  "environment" | "agent-architecture" | "dataset" | "crisp-case";

export type SectionMeta = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  readingMinutes: number;
  sourceSlides: number[];
  markdownFile: string;
  demo?: DemoId;
};

export type ChapterMeta = {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  description: string;
  topics: string[];
  sourcePdf: string;
  pdfPageRules?: { fromSlide: number; offset: number }[];
  sourceNote?: string;
  sourceNoteFromSlide?: number;
  sourceTranscript: string;
  overviewFile: string;
  checks?: Record<string, Check[]>;
  sections: SectionMeta[];
};

export const chapters: ChapterMeta[] = [
  {
    id: "chapter-01",
    order: 1,
    title: "Pengantar Kecerdasan Artifisial",
    shortTitle: "Pengantar KA",
    description:
      "Dari empat cara mendefinisikan KA, ke agen cerdas, taksonomi, dan fondasi pemelajaran mesin.",
    topics: ["Definisi KA", "Agen cerdas", "Pemelajaran mesin"],
    sourcePdf: "/sources/chapter-01.pdf",
    pdfPageRules: [
      { fromSlide: 1, offset: 0 },
      { fromSlide: 12, offset: -1 },
    ],
    sourceNote:
      "Nomor slide 11 tidak ada pada PDF; sesudah slide 10, nomor cetak bergeser satu dari nomor halaman.",
    sourceNoteFromSlide: 12,
    sourceTranscript: "content/chapters/chapter-01/source-transcript.md",
    overviewFile: "content/chapters/chapter-01/index.md",
    checks: checksBySection,
    sections: [
      {
        id: "mengapa-ka",
        title: "Mengapa mempelajari KA?",
        eyebrow: "01 / Orientasi",
        description: "Persepsi publik, landasan teknis, dan konteks Indonesia.",
        readingMinutes: 7,
        sourceSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        markdownFile: "content/chapters/chapter-01/sections/01-mengapa-ka.md",
      },
      {
        id: "definisi-ka",
        title: "Empat cara memandang KA",
        eyebrow: "02 / Definisi",
        description:
          "Berpikir atau bertindak, menyerupai manusia atau rasional.",
        readingMinutes: 10,
        sourceSlides: [10, 12, 13, 14, 15, 16, 17],
        markdownFile: "content/chapters/chapter-01/sections/02-definisi-ka.md",
      },
      {
        id: "agen-dan-lingkungan",
        title: "Agen, kinerja, dan lingkungan",
        eyebrow: "03 / Agen cerdas",
        description: "Fungsi agen, PEAS, ukuran kinerja, dan jenis lingkungan.",
        readingMinutes: 12,
        sourceSlides: [18, 19, 20, 21, 22, 23, 24],
        markdownFile:
          "content/chapters/chapter-01/sections/03-agen-dan-lingkungan.md",
        demo: "environment",
      },
      {
        id: "program-agen",
        title: "Lima arsitektur agen",
        eyebrow: "04 / Program agen",
        description: "Dari refleks sederhana sampai agen yang belajar.",
        readingMinutes: 9,
        sourceSlides: [25, 26, 27, 28, 29, 30],
        markdownFile: "content/chapters/chapter-01/sections/04-program-agen.md",
        demo: "agent-architecture",
      },
      {
        id: "sejarah-dan-taksonomi",
        title: "Sejarah dan peta bidang KA",
        eyebrow: "05 / Peta bidang",
        description:
          "Garis waktu, narrow AI, AGI, dan hubungan dengan data science.",
        readingMinutes: 10,
        sourceSlides: [31, 32, 33, 34, 35, 36, 37, 38],
        markdownFile:
          "content/chapters/chapter-01/sections/05-sejarah-dan-taksonomi.md",
      },
      {
        id: "paradigma-pemelajaran",
        title: "Bagaimana mesin belajar",
        eyebrow: "06 / Pemelajaran mesin",
        description:
          "Program tradisional, supervised, unsupervised, dan reinforcement.",
        readingMinutes: 8,
        sourceSlides: [39, 40, 41, 42, 45, 46],
        markdownFile:
          "content/chapters/chapter-01/sections/06-paradigma-pemelajaran.md",
      },
      {
        id: "tugas-dan-model",
        title: "Klasifikasi, regresi, dan rancangan model",
        eyebrow: "07 / Contoh kerja",
        description:
          "Membaca dataset dan mengenali representasi, evaluasi, optimisasi.",
        readingMinutes: 13,
        sourceSlides: [43, 44, 47, 48],
        markdownFile:
          "content/chapters/chapter-01/sections/07-tugas-dan-model.md",
        demo: "dataset",
      },
      {
        id: "fasilkom-dan-ringkasan",
        title: "KA di Fasilkom UI & ringkasan",
        eyebrow: "08 / Tinjauan akhir",
        description: "Peta kuliah dan catatan cepat sebelum ujian.",
        readingMinutes: 6,
        sourceSlides: [49, 50, 51, 52, 53],
        markdownFile:
          "content/chapters/chapter-01/sections/08-fasilkom-dan-ringkasan.md",
      },
    ],
  },
  {
    id: "chapter-02",
    order: 2,
    title: "Pengantar Sains Data",
    shortTitle: "Sains Data",
    description:
      "Dari pertanyaan berbasis data dan analitika, ke metodologi, studi kasus pankreatitis akut, dan ragam bentuk data.",
    topics: ["Analitika data", "CRISP-DM", "Data reimagined"],
    sourcePdf: "/sources/chapter-02.pdf",
    sourceTranscript: "content/chapters/chapter-02/source-transcript.md",
    overviewFile: "content/chapters/chapter-02/index.md",
    checks: chapterTwoChecks,
    sections: [
      {
        id: "motivasi-dan-data",
        title: "Mengapa sains data?",
        eyebrow: "01 / Motivasi",
        description:
          "Pertanyaan nyata, learning agent, dan enam ciri Big Data.",
        readingMinutes: 8,
        sourceSlides: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        markdownFile:
          "content/chapters/chapter-02/sections/01-motivasi-dan-data.md",
      },
      {
        id: "definisi-dan-analitika",
        title: "Definisi dan empat jenis analitika",
        eyebrow: "02 / Dasar konsep",
        description: "Insight dari data messy dan tujuan analitika data.",
        readingMinutes: 7,
        sourceSlides: [10, 11, 12, 13],
        markdownFile:
          "content/chapters/chapter-02/sections/02-definisi-dan-analitika.md",
      },
      {
        id: "lingkup-dan-peran",
        title: "Lingkup, peran, dan kegagalan proyek",
        eyebrow: "03 / Peta bidang",
        description:
          "Bidang yang bertemu dalam sains data dan siapa melakukan apa.",
        readingMinutes: 9,
        sourceSlides: [14, 15, 16, 17, 18],
        markdownFile:
          "content/chapters/chapter-02/sections/03-lingkup-dan-peran.md",
      },
      {
        id: "metodologi",
        title: "Metodologi dari KDD ke CRISP-DM",
        eyebrow: "04 / Proses",
        description:
          "Bandingkan alur teknis, bisnis, dan standar kompetensi Indonesia.",
        readingMinutes: 11,
        sourceSlides: [19, 20, 21, 22, 23, 24],
        markdownFile: "content/chapters/chapter-02/sections/04-metodologi.md",
      },
      {
        id: "kasus-perumusan",
        title: "Kasus ICU: rumuskan masalah dan data",
        eyebrow: "05 / Studi kasus",
        description:
          "Business Understanding dan Data Understanding untuk pankreatitis akut.",
        readingMinutes: 10,
        sourceSlides: [25, 26, 27, 28, 29, 30, 31],
        markdownFile:
          "content/chapters/chapter-02/sections/05-kasus-perumusan.md",
      },
      {
        id: "kasus-siklus-model",
        title: "Kasus ICU: siapkan hingga gunakan model",
        eyebrow: "06 / Studi kasus",
        description: "Data Preparation, Modeling, Evaluation, dan Deployment.",
        readingMinutes: 12,
        sourceSlides: [32, 33, 34, 35, 36, 37, 38],
        markdownFile:
          "content/chapters/chapter-02/sections/06-kasus-siklus-model.md",
        demo: "crisp-case",
      },
      {
        id: "produk-dan-manusia",
        title: "Dari model ke produk dan peran manusia",
        eyebrow: "07 / Penerapan",
        description: "Produk AI, dua lifecycle, dan manusia dalam loop.",
        readingMinutes: 6,
        sourceSlides: [39, 40, 41],
        markdownFile:
          "content/chapters/chapter-02/sections/07-produk-dan-manusia.md",
      },
      {
        id: "tubuh-sebagai-data",
        title: "Bodies as Data",
        eyebrow: "08 / Data reimagined",
        description:
          "Membaca tabel ukuran tubuh dan pertanyaan analitik pada slide.",
        readingMinutes: 9,
        sourceSlides: [42, 43, 44, 45],
        markdownFile:
          "content/chapters/chapter-02/sections/08-tubuh-sebagai-data.md",
      },
      {
        id: "teks-dan-citra",
        title: "Words, pictures, dan ringkasan",
        eyebrow: "09 / Data reimagined",
        description:
          "Teks, sliding window, word cloud, dan citra malam dari satelit.",
        readingMinutes: 9,
        sourceSlides: [46, 47, 48, 49, 50],
        markdownFile:
          "content/chapters/chapter-02/sections/09-teks-dan-citra.md",
      },
    ],
  },
];
