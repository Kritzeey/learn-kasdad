# Bagaimana mesin belajar

## Dua alur komputasi

Slide 40 membandingkan dua gambar alur:

```text
Pemrograman tradisional: Data + Program → Computer → Output
Pemelajaran mesin:       Data + Output  → Computer → Program
```

Pada alur kedua, “Output” mewakili jawaban contoh yang dipakai untuk memperoleh sebuah program atau model. Ini pengantar visual, bukan uraian lengkap semua cara model dilatih.

<!-- source-slides: 39,40 -->

## Tiga paradigma pada infografik

| Paradigma | Sinyal yang tersedia | Cabang/contoh pada slide 41 |
|---|---|---|
| **Supervised learning** | Masukan dan contoh respons/label yang benar | Klasifikasi dan regresi; diagnosis, peramalan cuaca, dll. |
| **Unsupervised learning** | Masukan tanpa contoh respons yang benar | *Clustering* dan *dimensionality reduction*; segmentasi pelanggan, visualisasi data, dll. |
| **Reinforcement learning** | Pembelajaran melalui interaksi dan umpan balik | Keputusan waktu nyata, permainan, navigasi robot, dan perolehan keterampilan. |

Infografik pada slide 41 memberi daftar aplikasi, bukan jaminan bahwa suatu aplikasi hanya dapat dikerjakan dengan satu paradigma.

<!-- source-slides: 41 -->

## Supervised: belajar dari contoh berlabel

Slide 42 menyatakan bahwa data latih menyediakan contoh respons yang benar. Algoritma melakukan generalisasi untuk memberikan respons pada masukan yang belum ada di data latih. Alur infografiknya: berikan data masukan–keluaran berlabel, lalu coba pada data baru dan perbaiki bila perlu. **Klasifikasi** menghasilkan kategori; **regresi** menghasilkan nilai numerik.

> **Intuisi · penjelasan tambahan.** Label adalah petunjuk yang ingin dipelajari, bukan kolom yang otomatis tersedia ketika model dipakai pada kasus baru. Itulah alasan tabel contoh pada bagian berikutnya membedakan atribut dari target.

<!-- source-slides: 42 -->

## Unsupervised: mencari struktur tanpa label jawaban

Pada slide 45, data latih **tidak** disertai contoh respons benar. Algoritma mencari kemiripan antar masukan sehingga yang serupa dapat dikelompokkan. Infografik menempatkan **clustering** dan **anomaly detection** sebagai masalah yang sesuai.

Slide 46 menunjukkan potensi deteksi anomali pada data transaksi/layanan: fitur waktu, jumlah item, serta data bisnis dan pelanggan masuk ke model *unsupervised*; diagram mengidentifikasi titik-titik yang berbeda dari kelompok padat. Diagram juga menampilkan **explainability** dan **feedback for active learning**. Ini contoh alur yang ditampilkan, bukan klaim bahwa setiap anomali pasti merupakan kecurangan.

<!-- source-slides: 45,46 -->
