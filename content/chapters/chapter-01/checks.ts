import type { Check } from "../../types";

export const checksBySection: Record<string, Check[]> = {
  "mengapa-ka": [
    {
      id: "orientasi-1",
      prompt:
        "Apa pesan dosen setelah membahas unggahan media sosial tentang KA?",
      options: [
        "Memakai alat black box saja cukup untuk menjadi ahli KA.",
        "Landasan matematika penting; memakai alat saja belum cukup.",
        "KA hanya mencakup chatbot dan prompt.",
      ],
      correctIndex: 1,
      explanation:
        "Slide 7 menekankan pentingnya matematika dan membedakan penggunaan solusi black box dari keahlian KA.",
      sourceSlides: [7],
    },
  ],
  "definisi-ka": [
    {
      id: "definisi-1",
      prompt:
        "Pendekatan mana yang menilai tindakan agen berdasarkan hasil yang diharapkan paling baik?",
      options: ["Thinking humanly", "Acting humanly", "Acting rationally"],
      correctIndex: 2,
      explanation:
        "Acting rationally adalah pendekatan agen rasional: memilih tindakan demi hasil yang diharapkan paling baik.",
      sourceSlides: [17],
    },
    {
      id: "definisi-2",
      prompt: "Apa yang ditambahkan pada total Turing Test menurut slide?",
      options: [
        "Computer vision dan robotika",
        "PEAS dan utility",
        "Regresi dan clustering",
      ],
      correctIndex: 0,
      explanation:
        "Selain kemampuan kognitif/komunikasi, total Turing Test memerlukan persepsi visual dan tindakan atas objek.",
      sourceSlides: [15],
    },
  ],
  "agen-dan-lingkungan": [
    {
      id: "agen-1",
      prompt: "Dalam PEAS pengemudi taksi, GPS termasuk apa?",
      options: ["Performance", "Actuator", "Sensor"],
      correctIndex: 2,
      explanation:
        "GPS memberi informasi kepada agen, sehingga masuk kelompok Sensors pada slide 21.",
      sourceSlides: [21],
    },
    {
      id: "agen-2",
      prompt:
        "Catur dengan jam diklasifikasikan bagaimana pada sumbu static/dynamic?",
      options: ["Static", "Semi-dynamic", "Dynamic"],
      correctIndex: 1,
      explanation:
        "Slide 23 menandainya semi-dynamic: papan dapat tetap, tetapi waktu/skor kinerja berubah.",
      sourceSlides: [22, 23],
    },
  ],
  "program-agen": [
    {
      id: "arsitektur-1",
      prompt:
        "Apa tambahan inti pada model-based reflex agent dibanding simple reflex?",
      options: [
        "State internal dan model dunia",
        "Label kelas",
        "Fungsi accuracy",
      ],
      correctIndex: 0,
      explanation:
        "State internal diperbarui dengan model transisi dan sensor, sehingga agen dapat memperkirakan keadaan yang tak sepenuhnya terlihat.",
      sourceSlides: [26, 27],
    },
    {
      id: "arsitektur-2",
      prompt:
        "Komponen learning agent mana yang mengusulkan tindakan eksploratif?",
      options: ["Critic", "Problem generator", "Performance element"],
      correctIndex: 1,
      explanation:
        "Problem generator mendorong eksperimen agar agen tidak hanya mengulangi tindakan yang sama.",
      sourceSlides: [30],
    },
  ],
  "sejarah-dan-taksonomi": [
    {
      id: "taksonomi-1",
      prompt: "Di slide 34, contoh AGI yang sudah ada ditulis sebagai apa?",
      options: [
        "Chatbot reservasi",
        "Tidak ada; masih dalam riset",
        "Sistem klasifikasi kredit",
      ],
      correctIndex: 1,
      explanation:
        "Kolom AGI pada slide 34 bertanda '??? (belum ada; masih dalam riset)'.",
      sourceSlides: [34],
    },
  ],
  "paradigma-pemelajaran": [
    {
      id: "paradigma-1",
      prompt:
        "Apa pembeda utama supervised dan unsupervised learning dalam slide ini?",
      options: [
        "Ada atau tidaknya contoh respons benar pada data latih",
        "Jumlah baris data",
        "Apakah komputer dipakai",
      ],
      correctIndex: 0,
      explanation:
        "Slide 42 menyediakan contoh respons benar; slide 45 secara eksplisit menyatakan respons benar tidak diberikan.",
      sourceSlides: [42, 45],
    },
  ],
  "tugas-dan-model": [
    {
      id: "model-1",
      prompt: "Pada tabel 'Buys computer?', kolom mana yang merupakan target?",
      options: ["Age", "Credit rating", "Buys computer?"],
      correctIndex: 2,
      explanation:
        "Empat kolom pertama adalah atribut; kolom terakhir adalah class label yang diprediksi.",
      sourceSlides: [43],
    },
    {
      id: "model-2",
      prompt:
        "Dalam contoh Multilayer Perceptron dosen, gradient descent berperan sebagai apa?",
      options: ["Representation", "Evaluation", "Optimization"],
      correctIndex: 2,
      explanation:
        "Slide 48 memasangkan neural networks dengan Representation, Accuracy dengan Evaluation, dan gradient descent dengan Optimization.",
      sourceSlides: [48],
    },
  ],
  "fasilkom-dan-ringkasan": [
    {
      id: "ringkasan-1",
      prompt: "Apa dua sumbu dalam matriks empat pendekatan definisi KA?",
      options: [
        "Data dan program; input dan output",
        "Berpikir dan bertindak; manusia dan rasionalitas",
        "Sensor dan aktuator; tujuan dan utility",
      ],
      correctIndex: 1,
      explanation:
        "Empat kuadran slide 13 dihasilkan dari kedua sumbu tersebut.",
      sourceSlides: [13],
    },
  ],
};
