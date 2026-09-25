"use client";

import { useState } from "react";

const stages = [
  {
    name: "Business Understanding",
    question: "Masalah apa yang hendak dijawab?",
    application:
      "Rumah sakit ingin mengalokasikan sumber daya terbatas. Contoh kuliah merumuskan prediksi risiko keparahan/kematian pasien AP di ICU, memilih klasifikasi dan Decision tree.",
    sourceSlides: [27, 28, 29],
  },
  {
    name: "Data Understanding",
    question: "Data pasien seperti apa yang diperlukan?",
    application:
      "Contoh menetapkan usia >18 tahun, perawatan ICU setidaknya 1 × 24 jam, kriteria/diagnosis AP, catatan kesehatan elektronik, dan satu entri per pasien.",
    sourceSlides: [30, 31],
  },
  {
    name: "Data Preparation",
    question: "Bagaimana sumber data disiapkan bersama?",
    application:
      "Slide menggabungkan data pendaftaran, lab/klinis, dan perangkat ICU; membatasi 24 jam awal, menghapus duplikasi, lalu mengagregasi riwayat per pasien dengan rerata.",
    sourceSlides: [32, 33],
  },
  {
    name: "Modeling",
    question: "Model seperti apa yang dicoba?",
    application:
      "Model dikembangkan dari dataset siap pakai dan dieksperimenkan secara iteratif. Pada perumusan kasus, slide memilih Decision tree; tidak ada hasil pelatihan numerik.",
    sourceSlides: [29, 34],
  },
  {
    name: "Evaluation",
    question: "Apakah model menjawab persoalan awal?",
    application:
      "Slide meminta ukuran kinerja pada data uji sekaligus pemeriksaan apakah model membantu masalah bisnis yang dirumuskan. Tidak ada skor evaluasi kasus yang diberikan.",
    sourceSlides: [35, 36],
  },
  {
    name: "Deployment",
    question: "Bagaimana model diuji dan dipakai di lapangan?",
    application:
      "Kuliah menggambarkan uji kondisi riil, komunikasi kepada manajemen dan petugas klinis, serta pengumpulan umpan balik untuk menilai dampak dan memperbaiki model.",
    sourceSlides: [37, 38],
  },
] as const;

export function CrispCaseExplorer() {
  const [selected, setSelected] = useState(0);
  const stage = stages[selected];

  return (
    <div className="demo-card crisp-case-demo">
      <div
        className="segmented-control"
        role="group"
        aria-label="Tahap CRISP-DM"
      >
        {stages.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {index + 1}. {item.name}
          </button>
        ))}
      </div>
      <div className="crisp-case__details" aria-live="polite">
        <div>
          <span>PERTANYAAN TAHAP</span>
          <h3>{stage.question}</h3>
        </div>
        <div>
          <span>PENERAPAN PADA CONTOH AP</span>
          <p>{stage.application}</p>
        </div>
      </div>
      <p className="demo-caption">
        Ringkasan contoh kuliah · slide {stage.sourceSlides.join(", ")}. Pilihan
        ini hanya mengubah tahap yang ditampilkan; tidak menjalankan model
        klinis.
      </p>
    </div>
  );
}
