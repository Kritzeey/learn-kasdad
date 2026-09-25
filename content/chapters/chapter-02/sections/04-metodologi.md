# Metodologi dari KDD ke CRISP-DM

## KDD: fokus teknis

Slide 20 menyebut **KDD Process** berfokus teknis, dari data menuju *knowledge*. Urutan pada diagram adalah:

| Tahap | Hasil yang ditunjukkan diagram |
|---|---|
| **Selection** | Data → Target Data |
| **Preprocessing** | Target Data → Preprocessed Data |
| **Transformation** | Preprocessed Data → Transformed Data |
| **Data Mining** | Transformed Data → Patterns |
| **Interpretation / Evaluation** | Patterns → Knowledge |

<!-- source-slides: 19,20 -->

## Alur yang juga memuat bisnis

Diagram **IBM Data Science Flowchart** pada slide 21 menampilkan **Business understanding → Analytic approach → Data requirements → Data collection → Data understanding → Data preparation → Modeling → Evaluation → Deployment → Feedback**. Panah balik pada diagram menandai iterasi, termasuk hubungan *Modeling* dengan *Data preparation* dan umpan balik ke *Modeling*. Rangkaian ini adalah ringkasan node utama; tautan PDF di bawah memperlihatkan arah setiap panah asli.

<!-- source-slides: 21 -->

**Microsoft Data Science Lifecycle** pada slide 22 juga menghubungkan **Business Understanding**, **Data Acquisition & Understanding**, **Modeling**, **Deployment**, dan **Customer Acceptance**. Gambar menunjukkan hubungan dua arah di antara beberapa tahap. Di dalam *Modeling* ada *Feature Engineering*, *Model Training*, dan *Model Evaluation*; di sekitar data ada sumber data, *pipeline*, lingkungan, serta *wrangling/exploration/cleaning*. Pada *Deployment* dicantumkan *scoring* dan *performance monitoring*.

<!-- source-slides: 22 -->

## CRISP-DM sebagai peta kasus

Slide 23 menamai **CRISP-DM** sebagai *Cross-industry standard process for data mining* dengan fokus bisnis dan teknis. Diagramnya menempatkan **Data** di pusat serta enam tahap: **Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment**. Panah dalam dan loop luar memperlihatkan iterasi; keenam tahap bukan daftar yang hanya boleh dijalankan sekali. Diagram yang sama muncul lagi pada slide 26 sebagai peta studi kasus berikutnya.

<!-- source-slides: 23,26 -->

> **Intuisi · penjelasan tambahan.** KDD menonjolkan transformasi data menjadi pola dan pengetahuan; diagram IBM, Microsoft, dan CRISP-DM memperlihatkan keterkaitan pekerjaan teknis dengan tujuan bisnis serta penggunaan hasil. Perbandingan ini menyederhanakan visual asli tanpa mengganti urutan yang tertulis pada slide.

## Pemetaan kompetensi pada slide Indonesia

Slide 24 menampilkan **Standar Kompetensi Kerja Nasional Indonesia: Kepmenaker No 299 tahun 2020** sebagai tabel dengan 21 fungsi dasar. Tabel berikut merangkum fungsi utama dan nomor kegiatan sesuai slide; ini mendeskripsikan isi materi, bukan pernyataan tentang status aturan saat ini.

| Fungsi utama pada slide | Fungsi dasar yang dicantumkan |
|---|---|
| **Business Understanding** | 1. Menentukan objektif bisnis; 2. Menentukan tujuan teknis; 3. Membuat rencana proyek. |
| **Data Understanding** | 4. Mengumpulkan data; 5. Menelaah data; 6. Memvalidasi data. |
| **Data Preparation** | 7. Memilah data; 8. Membersihkan data; 9. Mengkonstruksi data; 10. Menentukan Label Data; 11. Mengintegrasikan data. |
| **Modeling** | 12. Membangun skenario pengujian; 13. Membangun model. |
| **Model Evaluation** | 14. Mengevaluasi hasil pemodelan; 15. Melakukan review proses pemodelan. |
| **Deployment** | 16. Membuat rencana deployment model; 17. Melakukan deployment model; 18. Melakukan rencana pemeliharaan; 19. Melakukan pemeliharaan. |
| **Evaluation** | 20. Melakukan review proyek; 21. Membuat laporan akhir proyek. |

<!-- source-slides: 24 -->

**Pegangan sebelum lanjut:** tahap metodologi membantu menautkan problem, data, model, evaluasi, serta penggunaan. Studi kasus berikut memakai CRISP-DM untuk mengikuti hubungan itu secara konkret.

<!-- source-slides: 23,24,25 -->
