# KA di Fasilkom UI & ringkasan

## Peta belajar yang ditampilkan kuliah

Slide 50 memperlihatkan luasnya area yang diajarkan di Fasilkom UI. Mata kuliah **Kecerdasan Artifisial & Sains Data Dasar** memuat pengantar KA dan sains data, penyiapan data, PCA, clustering, model pohon, tetangga terdekat, Naive Bayes, model linear, jaringan saraf dasar, evaluasi model, *bias–variance tradeoff*, dan klasifikasi pada data tidak seimbang. Ini adalah **peta topik kurikulum pada slide**, bukan janji rincian materi untuk bab pengantar ini.

Peta yang sama juga menampilkan bidang lanjutan: **Pemelajaran Dalam**, **Pemelajaran Mesin**, **Graf Pengetahuan**, **Temu-balik Informasi**, **Pengolahan Bahasa Manusia**, **Penambangan Data**, **Computer Vision**, **Pemrograman Logika**, **Representasi Pengetahuan dan Penalaran**, **Pemrosesan Bahasa Lisan**, **Robotika**, **Inteligensi Bisnis**, **Pengelolaan Data Besar**, dan **Analitika Media Sosial**. Transkrip sumber menyimpan daftar subtopik pada setiap kotak diagram yang padat itu.

Slide 51–53 memperlihatkan **AI Center of Excellence** Universitas Indonesia, kegiatan **Sahabat-AI**, dan laman **Prodi Sarjana Kecerdasan Artifisial** yang menyebut penerimaan mahasiswa baru TA 2026/2027. Pada foto Sahabat-AI, sebagian judul acara terpotong sehingga tidak ditafsirkan ulang di sini.

<!-- source-slides: 49,50,51,52,53 -->

## Tinjauan cepat sebelum ujian

| Jika soal menanyakan… | Ingat pembeda utamanya |
|---|---|
| **Definisi KA** | Dua sumbu: berpikir/bertindak dan manusia/rasional. |
| **Agen** | Riwayat *percept* dipetakan ke *action*: $f: \mathcal{P}^{*} \to \mathcal{A}$. |
| **PEAS** | Performance, Environment, Actuators, Sensors. |
| **Rasionalitas** | Nilai hasil yang diharapkan di lingkungan, bukan sekadar tindakan yang dilakukan. |
| **Arsitektur agen** | Refleks saat ini → state internal → tujuan → utility; belajar dapat melengkapi semuanya. |
| **Lingkungan** | Observabilitas, jumlah agen, determinisme, episodik/sekuensial, statis/dinamis, diskret/kontinu, known/unknown. |
| **Supervised / unsupervised** | Ada atau tidaknya contoh respons benar pada data latih. |
| **Klasifikasi / regresi** | Kategori diskret versus nilai numerik. |
| **Tiga elemen ML** | Representation, Evaluation, Optimization. |

## Tiga pertanyaan untuk diri sendiri

1. Dalam contoh taksi, mana yang termasuk **sensor** dan mana yang termasuk **ukuran kinerja**?
2. Mengapa *goal-based agent* perlu memikirkan keadaan masa depan, sedangkan *simple reflex agent* tidak?
3. Pada tabel “beli komputer”, apakah kolom **Buys computer?** tersedia ketika model membuat prediksi untuk orang baru?

Jawaban dapat dirunut dari bagian agen dan contoh kerja. Jika masih ragu, kembali ke bagian yang sesuai melalui daftar isi.
