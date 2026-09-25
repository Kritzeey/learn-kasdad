# Bodies as Data

## Enam baris data tabular

Bagian **Data Reimagined** dimulai dengan cuplikan dataset **“Human Body Measurement”**. Setiap baris adalah satu entri contoh, dan kolomnya menyimpan ukuran atau aktivitas yang berbeda. Slide menyebut bentuk ini **dataset tabular**. Angka di bawah mengikuti enam baris yang tampil pada slide; tidak ada baris tambahan atau rumus BMI yang diturunkan oleh bab ini.

<!-- source-slides: 42,43 -->

| ID | Age | Height (cm) | Weight (kg) | BMI | Body Fat (%) | Muscle Mass (kg) | Heart Rate (bpm) | Daily Steps | Sleep Hours |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 25 | 175 | 68 | 22.2 | 15.0 | 32.5 | 72 | 8000 | 7.5 |
| 2 | 17 | 160 | 75 | 29.3 | 25.5 | 28.0 | 80 | 5000 | 6.0 |
| 3 | 23 | 170 | 82 | 28.4 | 23.0 | 31.5 | 76 | 6000 | 6.8 |
| 4 | 24 | 180 | 90 | 27.8 | 20.0 | 35.0 | 65 | 9000 | 8.0 |
| 5 | 19 | 165 | 70 | 25.7 | 22.0 | 29.5 | 85 | 4000 | 5.5 |
| 6 | 22 | 178 | 74 | 23.4 | 17.0 | 33.0 | 70 | 10000 | 7.2 |

<!-- source-slides: 43 -->

## Pertanyaan: rekomendasi dari statistik tubuh

Slide 44 menanyakan apakah statistik tubuh dapat dipakai untuk merekomendasikan rencana kebugaran atau diet yang dipersonalisasi. Grafik menempatkan **BMI** pada sumbu horizontal dan **Body Fat Percentage (%)** pada sumbu vertikal, dengan tiga kelompok dan penanda *centroid*. Slide memberi ilustrasi berikut, tanpa menetapkan ambang numerik kelompok atau memetakan keenam baris tabel satu per satu ke kelompoknya.

| Kelompok pada slide | Ciri yang ditulis | Fokus rekomendasi yang dicontohkan |
|---|---|---|
| **1** | BMI tinggi, *body fat* tinggi | Penurunan kadar lemak, kardio, dan penyesuaian diet untuk menurunkan kalori. |
| **2** | BMI tinggi, *body fat* normal | Mempertahankan “masa otot”, *strength training*, dan makanan seimbang dengan cukup protein. |
| **3** | BMI normal, *body fat* rendah | Meningkatkan *endurance* melalui latihan kardio dan kekuatan serta pembentukan otot. |

<!-- source-slides: 44 -->

> **Catatan sumber.** Rekomendasi di tabel adalah **contoh pada slide**, bukan rencana kesehatan individual. Istilah “masa otot” mengikuti ejaan slide. Letak titik dan *centroid* dapat ditinjau pada grafik PDF asli.

## Satu tabel, beberapa tugas analitik

Slide 45 mengajukan tiga pertanyaan tambahan beserta pendekatan yang tertulis:

1. Prediksi BMI dan kategori berat badan → **Regresi, Klasifikasi, Clustering**.
2. Langkah harian untuk memprediksi massa otot dan persentase lemak tubuh → **Regresi**.
3. Perubahan persentase lemak dan massa otot seiring usia → **Time-series forecasting**.

<!-- source-slides: 45 -->

> **Untuk ditinjau.** Slide memasangkan perubahan terhadap usia dengan *time-series forecasting*, tetapi tidak menjelaskan apakah tabel contoh berisi pengamatan berulang dari orang yang sama. Jangan menganggap enam baris di atas sudah merupakan rangkaian waktu.

<!-- source-slides: 43,45 -->
