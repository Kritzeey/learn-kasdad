import type { Check } from "../../types";

export const checksBySection: Record<string, Check[]> = {
  "motivasi-dan-data": [
    {
      id: "data-motivasi-1",
      prompt:
        "Dalam diagram learning agent, kapan model dipakai untuk menjawab query?",
      options: [
        "Saat Run inference",
        "Sebelum Data input disiapkan",
        "Saat memilih satuan Volume",
      ],
      correctIndex: 0,
      explanation:
        "Slide 6 memisahkan Train model dari Run inference, yang memakai model untuk menghasilkan Inferred answer.",
      sourceSlides: [6],
    },
    {
      id: "data-motivasi-2",
      prompt: "Ciri Big Data mana yang membahas kesesuaian data dengan fakta?",
      options: ["Velocity", "Veracity", "Variability"],
      correctIndex: 1,
      explanation:
        "Veracity pada slide 7 berkaitan dengan kesulitan menakar kesesuaian data dengan fakta.",
      sourceSlides: [7],
    },
  ],
  "definisi-dan-analitika": [
    {
      id: "data-analitika-1",
      prompt:
        "Jenis analitika mana yang menurut slide menjelaskan mengapa masalah muncul dengan data historis?",
      options: ["Descriptive", "Diagnostic", "Predictive"],
      correctIndex: 1,
      explanation:
        "Diagnostic data analytics mencari alasan munculnya suatu masalah dengan melihat data historis.",
      sourceSlides: [11],
    },
    {
      id: "data-analitika-2",
      prompt:
        "Apa landasan rekomendasi pada prescriptive data analytics menurut definisi slide?",
      options: [
        "Hasil analitika prediktif dan pengetahuan lain",
        "Hanya warna pertanyaan pada slide 13",
        "Hanya satu data terbaru",
      ],
      correctIndex: 0,
      explanation:
        "Slide 11 menyebut hasil analitika prediktif bersama pengetahuan lain untuk merumuskan rekomendasi upaya terbaik.",
      sourceSlides: [11],
    },
  ],
  "lingkup-dan-peran": [
    {
      id: "data-peran-1",
      prompt:
        "Peran mana yang pada slide membangun serta memelihara basis data?",
      options: ["Business Stakeholder", "Data Scientist", "Data Engineer"],
      correctIndex: 2,
      explanation:
        "Tabel slide 16 menempatkan pembangunan dan pemeliharaan database pada Data Engineer.",
      sourceSlides: [16],
    },
  ],
  metodologi: [
    {
      id: "data-metode-1",
      prompt:
        "Dalam KDD pada slide 20, tahap mana mengubah Transformed Data menjadi Patterns?",
      options: ["Preprocessing", "Data Mining", "Deployment"],
      correctIndex: 1,
      explanation:
        "Diagram KDD menaruh Data Mining setelah Transformation dan sebelum Interpretation / Evaluation.",
      sourceSlides: [20],
    },
    {
      id: "data-metode-2",
      prompt: "Apa yang digambar di pusat siklus CRISP-DM?",
      options: ["ROI", "Data", "Customer Acceptance"],
      correctIndex: 1,
      explanation:
        "Diagram CRISP-DM pada slide 23 menempatkan Data di pusat enam tahap.",
      sourceSlides: [23],
    },
  ],
  "kasus-perumusan": [
    {
      id: "data-kasus-1",
      prompt:
        "Pendekatan analitik dan model apa yang dipilih pada slide kasus AP?",
      options: [
        "Klasifikasi dan Decision tree",
        "Clustering dan regresi linear",
        "Descriptive analytics dan word cloud",
      ],
      correctIndex: 0,
      explanation:
        "Slide 29 menulis klasifikasi risiko kematian vs tidak serta pemilihan Decision tree.",
      sourceSlides: [29],
    },
    {
      id: "data-kasus-2",
      prompt: "Mengapa data kasus AP disusun sebagai satu entri per pasien?",
      options: [
        "Karena prediksi risiko dilakukan per pasien",
        "Karena semua pasien memiliki nilai BMI sama",
        "Karena model tidak memerlukan label",
      ],
      correctIndex: 0,
      explanation:
        "Slide 31 menghubungkan prediksi risiko per pasien dengan format satu entri per pasien dan kolom sebagai variabel.",
      sourceSlides: [31],
    },
  ],
  "kasus-siklus-model": [
    {
      id: "data-siklus-1",
      prompt: "Apa contoh feature engineering pada kasus AP di slide 33?",
      options: [
        "Mengagregasi data historis per pasien dengan rerata",
        "Membuat tiga word cloud",
        "Menukar label pasien secara acak",
      ],
      correctIndex: 0,
      explanation:
        "Slide 33 menyebut agregasi data historis pada tingkat pasien memakai rerata.",
      sourceSlides: [33],
    },
    {
      id: "data-siklus-2",
      prompt:
        "Selain kualitas model, apa yang harus diperiksa pada tahap Evaluation?",
      options: [
        "Apakah model menjawab masalah bisnis awal",
        "Apakah semua orang memakai algoritma yang sama",
        "Apakah diagram memakai enam warna",
      ],
      correctIndex: 0,
      explanation:
        "Slide 35–36 meminta pemeriksaan kesesuaian model dengan masalah bisnis awal.",
      sourceSlides: [35, 36],
    },
  ],
  "produk-dan-manusia": [
    {
      id: "data-produk-1",
      prompt:
        "Di titik mana diagram human-in-the-loop menempatkan validasi manusia?",
      options: [
        "Pada data dan keluaran model",
        "Hanya setelah produk dijual",
        "Hanya sebelum dataset dibuat",
      ],
      correctIndex: 0,
      explanation:
        "Slide 41 memberi label Validation of Data by Human dan Validation of Output by Human.",
      sourceSlides: [41],
    },
  ],
  "tubuh-sebagai-data": [
    {
      id: "data-tubuh-1",
      prompt:
        "Berapa selisih Daily Steps antara ID 1 (8000) dan ID 2 (5000) pada tabel slide?",
      options: ["2000", "3000", "5000"],
      correctIndex: 1,
      explanation: "Dari angka pada slide 43, 8000 − 5000 = 3000 langkah.",
      sourceSlides: [43],
    },
    {
      id: "data-tubuh-2",
      prompt:
        "Pada grafik pengelompokan komposisi tubuh, sumbu horizontal menunjukkan apa?",
      options: ["BMI", "Daily Steps", "Sleep Hours"],
      correctIndex: 0,
      explanation:
        "Grafik pada slide 44 memakai BMI sebagai sumbu horizontal dan Body Fat Percentage sebagai sumbu vertikal.",
      sourceSlides: [44],
    },
  ],
  "teks-dan-citra": [
    {
      id: "data-bentuk-1",
      prompt:
        "Apa yang dilakukan sliding window pada alur analisis teks di slide 47?",
      options: [
        "Bergerak melintasi segmen teks untuk analisis hedonometrik",
        "Mengubah citra satelit menjadi GDP langsung",
        "Mengurutkan pasien ICU menurut umur",
      ],
      correctIndex: 0,
      explanation:
        "Diagram menggerakkan sliding window melintasi segmen teks sebelum Hedonometric analysis dan kurva Average happiness.",
      sourceSlides: [47],
    },
    {
      id: "data-bentuk-2",
      prompt:
        "Apa yang dipakai sebagai indikator aktivitas ekonomi pada contoh citra satelit?",
      options: ["Penggunaan lampu/cahaya", "Jumlah halaman buku", "Massa otot"],
      correctIndex: 0,
      explanation:
        "Slide 49 mengaitkan penggunaan lampu/cahaya pada citra malam dengan aktivitas ekonomi dan prediksi GDP.",
      sourceSlides: [49],
    },
  ],
};
