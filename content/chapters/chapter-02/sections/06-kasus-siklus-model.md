# Kasus ICU: siapkan hingga gunakan model

## 3. Data Preparation

Slide 32 memasukkan integrasi sumber, pembersihan duplikasi dan *missing data*, serta **feature engineering** ke tahap persiapan dataset. Slide menyatakan tahap ini dapat memakan **70–90% waktu proyek**, dengan kemungkinan lebih singkat bila sumber data sudah terkelola baik. Persentase ini adalah pernyataan pada materi, bukan pengukuran untuk setiap proyek.

<!-- source-slides: 32 -->

### Contoh kerja pada data AP

1. **Gabungkan sumber:** pendaftaran pasien (misalnya ID, usia, kebiasaan), riwayat lab/klinis (misalnya kadar darah putih, platelet, glukosa, lipase), serta riwayat perangkat medis ICU (misalnya tekanan darah dan alarm detak jantung).
2. **Batasi waktu:** ambil data dalam **24 jam setelah pendaftaran** untuk reaksi awal perawatan.
3. **Bersihkan:** hapus duplikasi. Slide juga menuliskan penghapusan entri dengan data historis lab/klinis yang **“kosong hingga >20%”**; frasa ambang ini ambigu dan tidak dijadikan aturan komputasi di situs.
4. **Rekayasa fitur:** agregasikan data historis ke tingkat pasien dengan **rerata**.

<!-- source-slides: 33 -->

## 4. Modeling

Dataset yang sudah disiapkan dipakai untuk mengembangkan model prediktif atau deskriptif sesuai pendekatan dari Business Understanding. Slide menekankan **eksperimen berulang** sampai kinerja memuaskan. Contoh teknik yang disebut: CART, *nearest neighbor*, Naive Bayes, regresi linear, *neural networks*, dan *clustering*. Dalam contoh AP, pilihan yang sudah ditulis sebelumnya ialah **Decision tree**; slide tidak memperlihatkan pohon yang dilatih atau parameter hasilnya.

<!-- source-slides: 29,34 -->

## 5. Evaluation

Ilmuwan data mengevaluasi **kualitas model** sekaligus apakah model menjawab masalah bisnis dengan baik dan menyeluruh. Slide 35 menyebut ukuran kinerja, tabel, dan grafik pada **dataset uji**, tetapi tidak memberikan angka evaluasi tertentu. Pada kasus AP, pertanyaan utamanya tetap: **“Apakah model yang digunakan benar-benar menjawab pertanyaan awal, atau perlu disesuaikan?”** Slide juga menekankan pemahaman *business stakeholders* atas alat yang dibuat.

<!-- source-slides: 35,36 -->

## 6. Deployment dan umpan balik

Setelah model dinilai sesuai, slide 37 memindahkannya ke lingkungan produksi. **Deployment awal** dipakai untuk mengevaluasi kinerja dalam kondisi riil; **A/B testing** disebut sebagai salah satu cara. Penggunaan operasional yang lebih luas melibatkan berbagai bagian organisasi. Evaluasi berkesinambungan tetap diperlukan setelah deployment.

<!-- source-slides: 37 -->

> **Catatan sumber.** Slide 37 menuliskan prinsip **“Machine learning models always get worse over time”** karena adanya data baru. Itu adalah rumusan absolut pada slide; bab ini tidak menyatakannya sebagai hukum umum yang telah terbukti untuk setiap model.

<!-- source-slides: 37 -->

Untuk kasus AP, slide 38 mengusulkan pengujian *real time* setelah evaluasi, komunikasi kepada manajemen rumah sakit, penjelasan hasil model kepada petugas klinis, dan pengumpulan umpan balik pengguna untuk menyempurnakan model serta mengevaluasi dampaknya. Slide tidak menyediakan hasil klinis, metrik model, atau contoh prediksi pasien individual.

<!-- source-slides: 38 -->

**Pegangan sebelum lanjut:** evaluasi dan deployment menguji kesesuaian model terhadap masalah awal serta kondisi penggunaan, bukan sekadar keberhasilan menjalankan program.

<!-- source-slides: 35,36,37,38 -->
