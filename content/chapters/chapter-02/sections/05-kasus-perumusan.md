# Kasus ICU: rumuskan masalah dan data

## Business Understanding: mulai dari persoalan rumah sakit

CRISP-DM dipakai sebagai peta studi kasus. Pada tahap **Business Understanding**, slide 27 bertanya **“What problem are you trying to solve?”** Sebuah permintaan seperti “mengurangi biaya kegiatan” perlu ditafsirkan: apakah sasarannya efisiensi atau profitabilitas? Setelah tujuan spesifik jelas, barulah pendekatan analitik dipilih. Slide mengaitkan *descriptive* dengan “apa yang terjadi”, *diagnostic* dengan “mengapa”, *predictive* dengan “apa yang mungkin terjadi”, dan *prescriptive* dengan “apa yang harus dilakukan”.

<!-- source-slides: 25,26,27 -->

Contoh kuliah berfokus pada **pankreatitis akut (Acute Pancreatitis/AP)** di ICU. Slide 28–29 menyebut tingkat kematian pasien AP di ICU **1%–5%** dan menyoroti sulitnya mengenali kelompok berisiko tinggi saat sumber daya rumah sakit terbatas. Angka itu dicatat sebagai konteks yang dinyatakan materi, bukan estimasi klinis baru dari situs ini. Pertanyaan bisnisnya: **bagaimana rumah sakit mengalokasikan sumber daya yang terbatas untuk memaksimalkan perawatan yang efisien dan berkualitas?**

<!-- source-slides: 28,29 -->

### Contoh kerja: dari masalah ke pilihan model

1. Slide membandingkan “memaksimalkan sumber daya” yang memerlukan banyak biaya dengan “meminimalkan dampak pankreatitis akut”.
2. Fokus kedua dirumuskan sebagai prediksi **risiko keparahan/kematian** pasien AP di ICU dari data historis.
3. **Pendekatan analitik** yang dipilih pada slide: **klasifikasi** (memiliki risiko kematian vs tidak).
4. **Pemilihan model** yang ditulis pada slide: **Decision tree**.

<!-- source-slides: 29 -->

Slide 28 memperlihatkan isian tujuan, pendekatan, dan model yang tampak kosong pada gambar, sementara lapisan teks PDF memuat “Decision tree”. Slide 29 menampilkan jawaban lengkap. Uraian di atas mengikuti jawaban yang terlihat pada slide 29.

<!-- source-slides: 28,29 -->

## Data Understanding: data seperti apa yang diperlukan?

Tahap ini menentukan **konten, format, dan representasi data**, mengumpulkan data yang mungkin terstruktur, takterstruktur, atau semi terstruktur, lalu memahaminya memakai statistika dan visualisasi. Slide 30 juga menyebut iterasi bila diperlukan.

<!-- source-slides: 30 -->

Untuk kasus AP, slide 31 menetapkan syarat **usia >18 tahun**, terdaftar di ICU **setidaknya 1 × 24 jam** (bila ada lebih dari satu data, dipilih yang terbaru), dan memiliki kriteria atau diagnosis AP melalui kode diagnosis dan/atau hasil laboratorium. Sumber datanya adalah **catatan kesehatan elektronik rumah sakit yang terintegrasi**.

<!-- source-slides: 31 -->

Karena risiko diprediksi **per pasien**, data perlu berbentuk **satu entri per pasien** dengan kolom sebagai variabel. Klasifikasi membutuhkan label target; slide menyatakan pasien yang meninggal ditandai sebagai risiko tinggi kematian dan sisanya tidak. Variabel yang direncanakan berasal dari pendaftaran pasien, riwayat laboratorium, serta perangkat digital medis di ICU. Analisis statistik dan visualisasi dilakukan sebelum beranjak ke persiapan data.

<!-- source-slides: 31 -->

> **Intuisi · penjelasan tambahan.** Urutan ini membuat pilihan model bergantung pada pertanyaan bisnis dan bentuk data yang tersedia. Studi kasus slide adalah contoh proses analitik, bukan petunjuk diagnosis atau keputusan perawatan pasien.
