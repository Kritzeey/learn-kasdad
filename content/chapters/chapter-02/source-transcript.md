---
title: "Pengantar Sains Data"
course: "CSGE603130 - Kecerdasan Artifisial dan Sains Data Dasar"
chapter: "Pengantar Sains Data"
source: "[02] What is Data Science_updated (2).pdf"
slide_count: 50
---

# Pengantar Sains Data

## Learning Objectives

> [SOURCE NOTE: Presentasi tidak memuat slide yang secara eksplisit berjudul "Learning Objectives". Bagian berikut mempertahankan topik yang tercantum pada slide Outline sebagai cakupan pembelajaran, tanpa mengubahnya menjadi tujuan baru.]

- Motivasi di Balik Sains Data
- Pengertian dan Lingkup Sains Data
- Metodologi Sains Data
- Studi Kasus
- Data Reimagined

## 1. Pembukaan dan Outline

### Slide 1 — Pengantar Sains Data

#### Lecturer Content

**Pengantar Sains Data**

Adila Alfa Krisnadhi, Dina Chahyati, Fariz Darari, Laksmita Rahadianti, Lulu Ilmaknun Qurotaini, Siti Aminah, Aruni Yasmin Azizah, Syifa Nurhayati, Tusty Nadia Maghfira

CSGE603130 - Kecerdasan Artifisial dan Sains Data Dasar  
Semester Genap 2026/2027

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Title slide

**Description:** Slide judul dengan logo Universitas Indonesia dan Fakultas Ilmu Komputer di kanan atas. Judul kuliah berada di tengah, diikuti nama pengajar/kontributor, kode dan nama mata kuliah, serta semester.

**Educational purpose:** Mengidentifikasi topik kuliah, tim pengajar/kontributor, mata kuliah, dan periode perkuliahan.

#### Notes

- Nomor slide tidak dicetak pada halaman judul.

### Slide 2 — Credits

#### Lecturer Content

- Stuart Russell & Peter Norvig, "Artificial Intelligence: A Modern Approach", 4th ed., 2020, Section 19.9.
- Windy Gambetta, "Metodologi Data Science", Salindia Modul Pelatihan Thematic Academy, Digital Talent Scholarship, Kemenkominfo 2021.
- Joel Grus, "Data Science from Scratch: First Principles with Python", 2nd ed., O'Reilly 2019.
- Gambar dan tangkapan layar hanya untuk kebutuhan penjelasan
  - Hak cipta tetap ada pada pemilik aslinya.

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Reference / credits slide

**Description:** Daftar sumber buku dan materi pelatihan, diikuti pernyataan mengenai penggunaan gambar/tangkapan layar dan kepemilikan hak cipta.

**Educational purpose:** Memberikan atribusi sumber materi dan gambar.

#### Notes

Tidak ada catatan tambahan.

### Slide 3 — Outline

#### Lecturer Content

- Motivasi di Balik Sains Data
- Pengertian dan Lingkup Sains Data
- Metodologi Sains Data
- Studi Kasus
- Data Reimagined

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Outline / agenda

**Description:** Lima topik ditampilkan sebagai lima bar horizontal berwarna berbeda.

**Educational purpose:** Memperlihatkan struktur keseluruhan presentasi.

#### Notes

Tidak ada catatan tambahan.

### Slide 4 — Outline: Motivasi di Balik Sains Data

#### Lecturer Content

Outline:

- **Motivasi di Balik Sains Data**
- Pengertian dan Lingkup Sains Data
- Metodologi Sains Data
- Studi Kasus
- Data Reimagined

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Section transition / outline highlight

**Description:** Bar "Motivasi di Balik Sains Data" diberi warna aktif, sedangkan empat topik lainnya dibuat abu-abu.

**Educational purpose:** Menandai dimulainya bagian "Motivasi di Balik Sains Data".

#### Notes

Tidak ada catatan tambahan.

## 2. Motivasi di Balik Sains Data

### Slide 5 — Kita bisa tahu tentang….

#### Lecturer Content

- Kata kunci apa yang paling sering dicari di Google?
- Halaman apa yang paling sering dikunjungi di Internet, dan berapa lama waktu yang pengunjung habiskan di sana?
- Apa yang sedang *trend* di X, Instagram, TikTok, Youtube?
- Berapa harga saham PT. Pantai Indah Kapuk Dua Tbk besok?
- Bagaimana sentimen orang terhadap DeepSeek di media sosial?
- Apa yang menyebabkan pengguna *e-commerce* meninggalkan keranjang belanja sebelum *checkout*?
- Lagu apa yang akan direkomendasikan untuk pengguna A besok?

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Daftar pertanyaan di atas merupakan contoh jenis informasi/analisis yang ingin diperoleh dari data.

#### Visual Content

**Type:** Textual examples

**Description:** Tujuh pertanyaan ditampilkan sebagai bullet list tanpa diagram tambahan.

**Educational purpose:** Memotivasi sains data melalui pertanyaan nyata tentang pencarian web, tren media sosial, harga saham, sentimen, perilaku *e-commerce*, dan rekomendasi.

#### Notes

Tidak ada catatan tambahan.

### Slide 6 — … dengan learning agent!

#### Lecturer Content

Label yang ditampilkan pada alur:

- KUMPULAN INFORMASI
- formulates representation
- Data input
- Expected output
- Train model
- Model
- query
- Run inference
- returns
- Inferred answer

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik; slide menggunakan skema konseptual *learning agent*.

#### Visual Content

**Type:** Learning-agent workflow diagram

**Description:**

1. "KUMPULAN INFORMASI" direpresentasikan sebagai kepala manusia/agen yang memformulasikan representasi.
2. Agen menerima/menyediakan **Data input** serta **Expected output** menuju proses **Train model**.
3. Proses training menghasilkan **Model**.
4. Sebuah **query** diarahkan ke **Run inference**.
5. Model digunakan oleh proses inference dan menghasilkan **Inferred answer**, digambarkan dengan ikon jawaban benar/salah.

**Educational purpose:** Menunjukkan pemisahan antara tahap training model dan tahap inference pada sistem pembelajaran.

**Important labels:**

- Data input
- Expected output
- Train model
- Model
- query
- Run inference
- Inferred answer

#### Notes

Tidak ada catatan tambahan.

### Slide 7 — Data these days..

#### Lecturer Content

... sangat dipengaruhi ketersediaan data yang masif: **Big Data**

- **Volume:** data terakumulasi sangat besar (terabyte, petabyte, exabyte, zettabyte, yottabyte,dst.)
- **Velocity:** data terhasilkan sangat cepat (per detik, per menit, per jam, dst)
- **Variety:** ragam data semakin bermacam-macam: terstruktur, semi-terstrukur, tidak terstruktur (teks, suara, citra, video, dst)
- **Veracity:** kesesuaian data dengan fakta semakin sulit ditakar
- **Value:** kemampuan menghasilkan value dari data (profit, manfaat sosial, kepuasan pelanggan, dst.)
- **Variability:** variasi penggunaan data dalam pelbagai aplikasi

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh satuan skala **Volume** yang disebutkan: terabyte, petabyte, exabyte, zettabyte, yottabyte.

Contoh **Variety** yang disebutkan: teks, suara, citra, video.

#### Visual Content

**Type:** Big Data characteristics list

**Description:** Enam karakteristik Big Data disusun sebagai bullet list dengan istilah Inggris dicetak tebal.

**Educational purpose:** Memperkenalkan enam aspek data masif yang digunakan pada kuliah: Volume, Velocity, Variety, Veracity, Value, dan Variability.

#### Notes

- Ejaan dan tanda baca seperti "semi-terstrukur" dan "yottabyte,dst.)" dipertahankan sesuai slide.

### Slide 8 — How?

#### Lecturer Content

**Secara praktis, bagaimana ini direalisasikan?**

Pertanyaan yang ditampilkan di samping diagram:

- Data dapat dari mana? Apakah tersedia?
- Apakah setiap data cocok untuk dipakai?
- Bagaimana memilih representasi yang sesuai? Teks? Gambar?
- Bagaimana mengetahui bahwa hasil inferensi sudah baik?
- Bagaimana jika data berubah?
- Adakah efek tak diinginkan dari prediksi/inferensi?
- …

Label pada diagram yang diulang dari slide sebelumnya:

- query
- Run inference
- returns
- Inferred answer
- Train model
- formulates representation
- Data input
- Expected output
- Model

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Pertanyaan pada slide menjadi contoh masalah praktis dalam membangun dan menggunakan sistem pembelajaran.

#### Visual Content

**Type:** Annotated learning-agent workflow

**Description:** Diagram *learning agent* dari Slide 6 ditampilkan kembali. Di sisi kanan ditambahkan kotak berisi pertanyaan tentang sumber data, kecocokan data, representasi, evaluasi inference, perubahan data, serta efek tak diinginkan.

**Educational purpose:** Menunjukkan bahwa realisasi praktis sistem pembelajaran memerlukan keputusan dan evaluasi di luar sekadar training/inference.

#### Notes

Tidak ada catatan tambahan.

### Slide 9 — Diperlukan serangkaian metode yang tertib dan sistematis…

#### Lecturer Content

**Diperlukan serangkaian metode yang tertib dan sistematis…**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Transition statement

**Description:** Satu kalimat besar berada di bagian bawah-kiri slide dengan ruang kosong yang dominan.

**Educational purpose:** Menjembatani motivasi praktis menuju pembahasan metodologi sains data.

#### Notes

Tidak ada catatan tambahan.

## 3. Pengertian dan Lingkup Sains Data

### Slide 10 — Outline: Pengertian dan Lingkup Sains Data

#### Lecturer Content

Outline:

- Motivasi di Balik Sains Data
- **Pengertian dan Lingkup Sains Data**
- Metodologi Sains Data
- Studi Kasus
- Data Reimagined

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Section transition / outline highlight

**Description:** Bar "Pengertian dan Lingkup Sains Data" diberi warna aktif, sedangkan topik lainnya dibuat abu-abu.

**Educational purpose:** Menandai dimulainya bagian "Pengertian dan Lingkup Sains Data".

#### Notes

Tidak ada catatan tambahan.

### Slide 11 — Sains Data

#### Lecturer Content

- **Sains data (*data science*):** ekstraksi *insight* dari data yang *messy* (untuk pengambilan keputusan masa depan atau pemahaman masa lampau)
- **Ilmuwan data (*data scientist*)** = orang yang melakukan sains data, melingkupi
  - **descriptive data analytics:** menjelaskan keadaan bisnis saat ini melalui data historis/lampau.
  - **diagnostic data analytics:** menjelaskan mengapa suatu masalah muncul dengan melihat data historis.
  - **predictive data analytics:** memprediksi hasil di masa depan berdasarkan data historis.
  - **prescriptive data analytics:** merumuskan rekomendasi upaya terbaik di masa depan berdasarkan hasil analitika prediktif dan pengetahuan lain.

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Empat jenis analitika yang diberikan: descriptive, diagnostic, predictive, dan prescriptive data analytics.

#### Visual Content

**Type:** Definition and taxonomy

**Description:** Definisi sains data dan ilmuwan data diikuti empat jenis analitika. Keempat istilah analitika diberi highlight warna berbeda.

**Educational purpose:** Mendefinisikan sains data dan memperkenalkan empat jenis analitika yang akan dipakai untuk mengklasifikasikan pertanyaan/tujuan.

#### Notes

Tidak ada catatan tambahan.

### Slide 12 — Examples

#### Lecturer Content

- Kata kunci apa yang paling sering dicari di Google?
- Halaman apa yang paling sering dikunjungi di Internet, dan berapa lama waktu yang dihabiskan di sana?
- Apa yang sedang *trend* di X, Instagram, TikTok, Youtube?
- Berapa harga saham PT. Pantai Indah Kapuk Dua Tbk besok?
- Bagaimana sentimen orang terhadap DeepSeek di media sosial?
- Apa yang menyebabkan pengguna *e-commerce* meninggalkan keranjang belanja sebelum *checkout*?
- Lagu apa yang akan direkomendasikan untuk pengguna A besok?
- …. dan masih banyak lagi

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Seluruh bullet merupakan contoh pertanyaan sains data.

#### Visual Content

**Type:** Example questions

**Description:** Daftar pertanyaan yang sebelumnya muncul pada Slide 5 ditampilkan kembali, ditambah "…. dan masih banyak lagi".

**Educational purpose:** Menghubungkan definisi dan jenis analitika dengan pertanyaan yang konkret.

#### Notes

Tidak ada catatan tambahan.

### Slide 13 — Examples (color-coded)

#### Lecturer Content

- Kata kunci apa yang paling sering dicari di Google?
- Halaman apa yang paling sering dikunjungi di Internet, dan berapa lama waktu yang dihabiskan di sana?
- Apa yang sedang *trend* di X, Instagram, TikTok, Youtube?
- Berapa harga saham PT. Pantai Indah Kapuk Dua Tbk besok?
- Bagaimana sentimen orang terhadap DeepSeek di media sosial?
- Apa yang menyebabkan pengguna *e-commerce* meninggalkan keranjang belanja sebelum *checkout*?
- Lagu apa yang akan direkomendasikan untuk pengguna A besok?
- …. dan masih banyak lagi

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh pertanyaan sama seperti Slide 12, tetapi beberapa pertanyaan diberi highlight warna.

#### Visual Content

**Type:** Color-coded example questions

**Description:**

- Dua pertanyaan pertama diberi highlight kuning pucat.
- Pertanyaan harga saham besok diberi highlight biru muda.
- Pertanyaan sentimen dan penyebab *cart abandonment* diberi highlight hijau muda.
- Pertanyaan rekomendasi lagu diberi highlight merah muda.
- Pertanyaan tentang apa yang sedang *trend* tidak tampak diberi highlight.

**Educational purpose:** Mengelompokkan atau membedakan jenis pertanyaan secara visual setelah empat kategori analitika diperkenalkan pada Slide 11.

#### Notes

> [REVIEW NOTE — Slide 13: Slide tidak menampilkan legenda eksplisit untuk warna. Warna tampak konsisten dengan highlight kategori analitika pada Slide 11, tetapi pemetaan warna tidak dinyatakan secara tertulis pada slide ini.]

### Slide 14 — Area dasar sains data

#### Lecturer Content

Judul: **Area dasar sains data**

Atribusi:

Calvin.Andrus, CC BY-SA 3.0  
<https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Hub-and-spoke diagram

**Description:** "Data Science" berada di tengah, dengan panah dari delapan area di sekelilingnya:

- Data Engineering
- Scientific Method
- Math
- Statistics
- Advanced Computing
- Visualization
- Hacker Mindset
- Domain Expertise

**Educational purpose:** Memperlihatkan bahwa sains data memadukan beberapa area kompetensi dan cara berpikir.

#### Notes

Tidak ada catatan tambahan.

### Slide 15 — KA vs Sains Data vs Big Data

#### Lecturer Content

Judul: **KA vs Sains Data vs Big Data**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Overlapping-set and nested-set diagram

**Description:**

- Lingkaran/area **Data Science** dan **Big Data** saling tumpang tindih sebagian.
- Di sisi kanan terdapat satu area besar berlapis konsentris yang diberi label melalui panah:
  - Artificial Intelligence
  - Machine Learning
  - Neural Networks
  - Deep Learning
- Area berlapis tersebut memotong sebagian wilayah Data Science dan Big Data.

**Educational purpose:** Menunjukkan hubungan visual antara KA/AI, machine learning, neural networks, deep learning, data science, dan big data.

#### Notes

> [VISUAL REFERENCE REQUIRED — Slide 15: Hubungan himpunan ditunjukkan terutama melalui posisi dan tumpang tindih bentuk. Gunakan gambar slide asli jika rekonstruksi geometri persis diperlukan.]

### Slide 16 — Peran pelaku sains data

#### Lecturer Content

**Belum ada standar; setiap industri/perusahaan bisa bervariasi**

#### Table

| Peran | Role | Core skills |
|---|---|---|
| **Data Engineer** | Gathers, manages, and ensures the necessary data requirements; Builds and maintains the database | Data ingest, ETL tools; Database systems; Distributed computing systems (Hadoop, Spark, dll.); Data APIs; Unstructured data & data modeling; Data warehousing |
| **Data Scientist** | Uses the data to model a problem to create an interpretation; Uses various models and machine learning approaches to estimate/analyze patterns | Python, R; Distributed computing; Machine learning & deep learning; Feature engineering; Predictive modeling; Statistics & math; Storytelling & visualization |
| **Business Stakeholder** | Computes Return on Investment (ROI), Net Present Value (NPV), and determines target/task based on domain expertise; Analyzes results for business decision making | Business intelligence; Statistics & math; Data stewardship & management; Storytelling & visualization; Business communication |

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Teknologi yang disebutkan untuk *distributed computing systems*: Hadoop, Spark, dll.

#### Visual Content

**Type:** Three-column role comparison table

**Description:** Tabel tiga kolom berwarna berbeda untuk Data Engineer, Data Scientist, dan Business Stakeholder. Setiap kolom dibagi menjadi bagian "Role" dan "Core skills".

**Educational purpose:** Membandingkan tanggung jawab dan kompetensi inti tiga pelaku sains data.

#### Notes

- Teks "domain expertise" pada kolom Business Stakeholder diberi penekanan warna merah pada slide.

### Slide 17 — Bagaimana sistem KA dikembangkan dan dipakai?

#### Lecturer Content

- **Tahap pengembangan/pelatihan (*training*)**

  **Define goal → Gather data → Prepare data → Create model → Evaluate Model → Deployment**

  Tahap pengembangan/pelatihan berfokus pada **membangun model KA yang akurat dan *rigid*** dengan memanfaatkan data yang ada.

- **Tahap penggunaan**

  **Send data → Run trained model → Obtain result**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** Two process pipelines

**Description:** Pipeline pertama menggambarkan tahapan pengembangan/pelatihan model. Pipeline kedua menggambarkan penggunaan model yang sudah dilatih.

**Educational purpose:** Membedakan proses pembangunan model dari proses penggunaan model.

#### Notes

- Kata "rigid" dipertahankan sesuai slide.

### Slide 18 — AI/DS Project Failures

#### Lecturer Content

- Gartner Research published a study in 2018: Only 15-20% AI/DS projects are completed, and only 8% gives value to the business
- Why?
  - Unclear or ill-formed problem, over-promised solution
  - Data issues
  - Incorrect modelling
  - Over-complicated algorithm
  - One-man show

Sumber yang tercantum:

- https://www.gartner.com/en/newsroom/press-releases/2018-02-13-gartner-says-nearly-half-of-cios-are-planning-to-deploy-artificial-intelligence
- https://www.bmc.com/blogs/cio-ai-artificial-intelligence/

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Lima penyebab kegagalan proyek AI/DS disajikan sebagai contoh kategori masalah.

#### Visual Content

**Type:** Failure-factor icon row

**Description:** Lima ikon mewakili: masalah/perumusan yang tidak jelas, isu data, modelling yang salah, algoritme terlalu rumit, dan "one-man show".

**Educational purpose:** Menekankan bahwa kegagalan proyek AI/DS dapat muncul dari masalah perumusan, data, modelling, kompleksitas, dan organisasi/tim.

#### Notes

- Slide mengatribusikan statistik pada "Gartner Research" dan mencantumkan tahun 2018 serta dua URL sumber.

## 4. Metodologi Sains Data

### Slide 19 — Outline: Metodologi Sains Data

#### Lecturer Content

Outline:

- Motivasi di Balik Sains Data
- Pengertian dan Lingkup Sains Data
- **Metodologi Sains Data**
- Studi Kasus
- Data Reimagined

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Section transition / outline highlight

**Description:** Bar "Metodologi Sains Data" diberi warna aktif; topik lainnya dibuat abu-abu.

**Educational purpose:** Menandai dimulainya bagian metodologi.

#### Notes

Tidak ada catatan tambahan.

### Slide 20 — KDD Process; Fokus teknis

#### Lecturer Content

**KDD Process; Fokus teknis**

Referensi:

Fayyad, Piatetsky-Shapiro, Smyth, "From Data Mining to Knowledge Discovery in Databases", AI Magazine 17(3): Fall 1996, 37-54  
https://www.kdnuggets.com/gpspubs/aimag-kdd-overview-1996-Fayyad.pdf

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** KDD process diagram

**Description:** Alur bertahap dari data menuju knowledge:

1. **Selection**: Data → Target Data
2. **Preprocessing**: Target Data → Preprocessed Data
3. **Transformation**: Preprocessed Data → Transformed Data
4. **Data Mining**: Transformed Data → Patterns
5. **Interpretation / Evaluation**: Patterns → Knowledge

Diagram menampilkan panah progresif dan garis putus-putus yang menandai tahapan sepanjang proses.

**Educational purpose:** Menunjukkan proses KDD sebagai metodologi dengan fokus teknis dari data mentah sampai knowledge.

#### Notes

Tidak ada catatan tambahan.

### Slide 21 — IBM Data Science Flowchart; Fokus bisnis dan teknis

#### Lecturer Content

Judul: **IBM Data Science Flowchart; Fokus bisnis dan teknis**

Sumber:

https://developer.ibm.com/articles/introduction-watson-studio/

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** Iterative data-science flowchart

**Description:** Diagram mencakup node berikut:

- Business understanding
- Analytic approach
- Data requirements
- Data collection
- Data understanding
- Data preparation
- Modeling
- Evaluation
- Deployment
- Feedback

Alur utama bergerak dari Business understanding menuju Analytic approach, lalu turun melalui kebutuhan dan pengumpulan data, Data understanding, Data preparation, Modeling, Evaluation, Deployment, dan Feedback. Beberapa panah dua arah/umpan balik memperlihatkan iterasi antara tahap-tahap, termasuk antara Modeling dan Data preparation serta aliran Feedback kembali ke Modeling.

**Educational purpose:** Menunjukkan metodologi IBM yang menggabungkan fokus bisnis dan teknis dengan proses iteratif.

#### Notes

> [VISUAL REFERENCE REQUIRED — Slide 21: Arah panah dan loop merupakan bagian penting dari makna diagram; gunakan gambar asli jika hubungan panah perlu direkonstruksi secara persis.]

### Slide 22 — Microsoft Data Science Lifecycle; Fokus bisnis dan teknis

#### Lecturer Content

Judul: **Microsoft Data Science Lifecycle; Fokus bisnis dan teknis**

Sumber:

https://docs.microsoft.com/en-us/azure/architecture/data-science-process/overview

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** Microsoft data-science lifecycle diagram

**Description:**

Alur inti menampilkan:

- **Start** → **Business Understanding**
- **Business Understanding** berinteraksi dua arah dengan **Data Acquisition & Understanding**
- **Data Acquisition & Understanding** berinteraksi dua arah dengan **Modeling**
- **Modeling** berinteraksi dua arah dengan **Deployment**
- **Deployment** → **Customer Acceptance** → **End**

Subbagian di sisi **Modeling**:

- **Feature Engineering** — Transform, Binning, Temporal, Text, Image, Feature Selection
- **Model Training** — Algorithms, Ensemble, Parameter Tuning, Retraining, Model management
- **Model Evaluation** — Cross Validation, Model Reporting, A/B Testing

Subbagian di sisi **Data Acquisition & Understanding**:

- **Data Source** — On-Premises vs Cloud; Database vs Files
- **Pipeline** — Streaming vs Batch; Low vs High Frequency
- **Environment** — On-premises vs Cloud; Database vs Data Lake; Small vs Medium vs Big Data
- **Wrangling, Exploration & Cleaning** — Structured vs Unstructured; Data Validation and Cleanup; Visualization

Di bagian Deployment terdapat **Scoring, Performance monitoring, etc.** serta ikon roda gigi bertuliskan **Model Store**, **Web Services**, dan **Intelligent Applications**.

**Educational purpose:** Menunjukkan lifecycle yang menghubungkan business understanding, akuisisi/pemahaman data, modelling, deployment, acceptance, dan komponen implementasi teknis.

#### Notes

Tidak ada catatan tambahan.

### Slide 23 — CRISP-DM

#### Lecturer Content

- **Cross-industry standard process for data mining; Fokus bisnis dan teknis**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** CRISP-DM cycle diagram

**Description:** Diagram siklus CRISP-DM mengelilingi ikon **Data** di tengah, dengan tahap:

- Business Understanding
- Data Understanding
- Data Preparation
- Modeling
- Evaluation
- Deployment

Panah menunjukkan iterasi dan hubungan balik antar-tahap, serta satu loop besar yang mengelilingi keseluruhan proses.

Atribusi pada gambar: **Kenneth Jensen, CC BY-SA 3.0, via Wikimedia Commons**.

**Educational purpose:** Memperkenalkan CRISP-DM sebagai proses lintas industri dengan fokus bisnis dan teknis.

#### Notes

> [VISUAL REFERENCE REQUIRED — Slide 23: Arah panah internal dan loop luar sebaiknya dilihat pada gambar asli untuk rekonstruksi diagram yang presisi.]

### Slide 24 — Di Indonesia?

#### Lecturer Content

**Standar Kompetensi Kerja Nasional Indonesia: Kepmenaker No 299 tahun 2020**

#### Table

| Tujuan Utama | Fungsi Kunci | Fungsi Utama | Fungsi Dasar |
|---|---|---|---|
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Menganalisis Kebutuhan (Requirements) Organisasi | *Business Understanding* | 1. Menentukan objektif bisnis; 2. Menentukan tujuan teknis; 3. Membuat rencana proyek |
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Menganalisis Kebutuhan (Requirements) Organisasi | *Data Understanding* | 4. Mengumpulkan data; 5. Menelaah data; 6. Memvalidasi data |
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Mengembangkan model | *Data Preparation* | 7. Memilah data; 8. Membersihkan data; 9. Mengkonstruksi data; 10. Menentukan Label Data; 11. Mengintegrasikan data |
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Mengembangkan model | *Modeling* | 12. Membangun skenario pengujian; 13. Membangun model |
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Mengembangkan model | *Model Evaluation* | 14. Mengevaluasi hasil pemodelan; 15. Melakukan review proses pemodelan |
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Menggunakan model yang dihasilkan | *Deployment* | 16. Membuat rencana deployment model; 17. Melakukan deployment model; 18. Melakukan rencana pemeliharaan; 19. Melakukan pemeliharaan |
| Menemukan pengetahuan, *insight* atau pola yang bermanfaat dari data untuk berbagai keperluan (orang mengambil keputusan atau sistem memproses lebih lanjut) | Menggunakan model yang dihasilkan | *Evaluation* | 20. Melakukan review proyek; 21. Membuat laporan akhir proyek |

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** Document image + competency mapping table

**Description:** Di kiri terdapat cuplikan sampul/halaman dokumen Keputusan Menteri Ketenagakerjaan Republik Indonesia. Di kanan terdapat tabel berwarna oranye yang memetakan Tujuan Utama, Fungsi Kunci, Fungsi Utama, dan 21 Fungsi Dasar.

**Educational purpose:** Menunjukkan padanan kerangka kompetensi sains data dalam konteks Standar Kompetensi Kerja Nasional Indonesia.

#### Notes

- Struktur tabel memiliki sel gabungan pada slide asli; dalam Markdown nilai pada sel gabungan diulang untuk menjaga keterbacaan dan keterlacakan.

## 5. Studi Kasus

### Slide 25 — Outline: Studi Kasus

#### Lecturer Content

Outline:

- Motivasi di Balik Sains Data
- Pengertian dan Lingkup Sains Data
- Metodologi Sains Data
- **Studi Kasus**
- Data Reimagined

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Section transition / outline highlight

**Description:** Bar "Studi Kasus" diberi warna aktif; topik lainnya dibuat abu-abu.

**Educational purpose:** Menandai dimulainya bagian studi kasus.

#### Notes

Tidak ada catatan tambahan.

### Slide 26 — CRISP-DM

#### Lecturer Content

Judul: **CRISP-DM**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** CRISP-DM cycle diagram

**Description:** Diagram yang sama dengan Slide 23 menampilkan Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment, dan Data di tengah, dengan panah iteratif serta loop luar.

Atribusi pada gambar: **Kenneth Jensen, CC BY-SA 3.0, via Wikimedia Commons**.

**Educational purpose:** Menetapkan CRISP-DM sebagai kerangka untuk studi kasus yang akan dibahas pada slide berikutnya.

#### Notes

Tidak ada catatan tambahan.

### Slide 27 — 1. Business Understanding

#### Lecturer Content

- Fokus pada definisi problem bisnis:

  **“What problem are you trying to solve?”**

- Tahapan yang umumnya terjadi
  - Business owner: “How can we reduce the costs of performing an activity?”
  - Interpretasi: “Is it to improve the efficiency of the activity?” or “Is it to increase business profitability?”
  - Tentukan tujuan spesifik
  - Tentukan pendekatan analitik yang tepat berdasarkan tujuan
    - descriptive → “Apa yang terjadi?”
    - diagnostic → “Mengapa ini terjadi?”
    - predictive data → “Apa yang mungkin terjadi di masa depan?”
    - prescriptive → “Apa yang harus dilakukan?”

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh dialog/interpretasi antara business owner dan perumus masalah diberikan untuk memperjelas perubahan dari pertanyaan biaya menjadi tujuan bisnis yang lebih spesifik.

#### Visual Content

**Type:** Step list

**Description:** Pertanyaan "What problem are you trying to solve?" ditampilkan besar dan merah. Empat pendekatan analitik dipetakan ke pertanyaan masing-masing.

**Educational purpose:** Menjelaskan cara mengubah problem bisnis menjadi tujuan spesifik dan pendekatan analitik.

#### Notes

Tidak ada catatan tambahan.

### Slide 28 — Business Understanding: Case Studies

#### Lecturer Content

**Business owner:** **Pankreatitis Akut** (Acute Pancreatitis/AP) merupakan salah satu diagnosis yang umum pada unit perawatan intensif (ICU). Tingkat kematian pasien AP di ICU berkisar antara 1% hingga 5%, dengan kelompok pasien berisiko tinggi memiliki faktor klinis dan laboratorium yang lebih buruk. Rumah sakit menghadapi tantangan dalam **alokasi sumber daya**, karena sulitnya mengidentifikasi pasien dengan risiko tinggi sehingga menyebabkan keterlambatan dalam **intervensi medis**. Selain itu, jumlah kasus AP yang terus meningkat semakin **membebani finansial layanan kesehatan**.

- **Bagaimana rumah sakit dapat mengalokasikan sumber daya yang terbatas untuk memaksimalkan perawatan yang efisien dan berkualitas?**

- Tujuan spesifik:
- Pendekatan analitik:
- Pemilihan model:

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Studi kasus berfokus pada pasien Pankreatitis Akut (Acute Pancreatitis/AP) di ICU dan alokasi sumber daya rumah sakit.

#### Visual Content

**Type:** Case-study problem framing

**Description:** Paragraf latar belakang dan pertanyaan bisnis ditampilkan di bagian atas/tengah. Tiga baris "Tujuan spesifik", "Pendekatan analitik", dan "Pemilihan model" tampak sebagai isian yang belum dilengkapi pada slide yang dirender.

**Educational purpose:** Meminta pembaca mengubah persoalan rumah sakit menjadi tujuan analitik dan pilihan model.

#### Notes

> [REVIEW NOTE — Slide 28: Pada hasil render, nilai setelah "Tujuan spesifik:", "Pendekatan analitik:", dan "Pemilihan model:" tidak terlihat. Namun, lapisan teks PDF mengandung "Pemilihan model: Decision tree". Slide 29 kemudian menampilkan jawaban lengkap. Gunakan slide asli jika status elemen tersembunyi/animasi perlu dipastikan.]

### Slide 29 — Business Understanding: Pankreatitis Akut (2)

#### Lecturer Content

**Business owner:** **Pankreatitis Akut** (Acute Pancreatitis/AP) merupakan salah satu diagnosis yang umum pada unit perawatan intensif (ICU). Tingkat kematian pasien AP di ICU berkisar antara 1% hingga 5%, dengan kelompok pasien berisiko tinggi memiliki faktor klinis dan laboratorium yang lebih buruk. Rumah sakit menghadapi tantangan dalam **alokasi sumber daya**, karena sulitnya mengidentifikasi pasien dengan risiko tinggi sehingga menyebabkan keterlambatan dalam **intervensi medis**. Selain itu, jumlah kasus AP yang terus meningkat semakin **membebani finansial layanan kesehatan**.

- **Bagaimana rumah sakit dapat mengalokasikan sumber daya yang terbatas untuk memaksimalkan perawatan yang efisien dan berkualitas?**
  - Memaksimalkan sumber daya → akan butuh biaya yang banyak
  - Meminimalkan dampak pankreatitis akut → memprediksi risiko keparahan/kematian pasien AP di ICU
- **Tujuan spesifik:** “Diberikan data historis pasien AP di ICU, bagaimana risiko keparahan/kematian pasien tersebut?”
- **Pendekatan analitik:** Klasifikasi (memiliki risiko kematian vs tidak)
- **Pemilihan model:** Decision tree

#### Equations

Tidak ada persamaan pada slide ini.

#### Worked Example

**Problem**

Bagaimana rumah sakit dapat mengalokasikan sumber daya yang terbatas untuk memaksimalkan perawatan yang efisien dan berkualitas?

**Given**

- Data historis pasien AP di ICU.
- Target bisnis berhubungan dengan sumber daya, intervensi, dan risiko keparahan/kematian.

**Steps**

1. Pertimbangkan opsi "memaksimalkan sumber daya" dan konsekuensi biaya.
2. Pilih fokus "meminimalkan dampak pankreatitis akut".
3. Rumuskan tujuan spesifik sebagai prediksi risiko keparahan/kematian.
4. Gunakan pendekatan klasifikasi: memiliki risiko kematian vs tidak.
5. Pilih model Decision tree.

**Result**

Tujuan analitik dan model telah ditentukan dari problem bisnis.

#### Visual Content

**Type:** Filled-in business-understanding case study

**Description:** Slide mengulang latar belakang Slide 28 dan menambahkan jawaban yang di-highlight: biaya untuk memaksimalkan sumber daya, serta prediksi risiko keparahan/kematian untuk meminimalkan dampak AP.

**Educational purpose:** Menunjukkan contoh konkret konversi problem bisnis menjadi tujuan spesifik, pendekatan analitik, dan pemilihan model.

#### Notes

Tidak ada catatan tambahan.

### Slide 30 — 2. Data Understanding

#### Lecturer Content

- Tentukan prasyarat data yang sesuai dengan problem bisnis
  - Konten, format, representasi, dll.
- Lakukan pengumpulan data (bisa terstruktur, takterstruktur, semi terstruktur)
- Pahami data menggunakan statistika dan visualisasi
- Iterasi jika perlu

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Jenis struktur data yang disebutkan: terstruktur, takterstruktur, semi terstruktur.

#### Visual Content

**Type:** Step list

**Description:** Empat langkah Data Understanding ditampilkan sebagai bullet list.

**Educational purpose:** Menjelaskan aktivitas utama Data Understanding sebelum data disiapkan untuk modeling.

#### Notes

- Ejaan "takterstruktur" dipertahankan sesuai slide.

### Slide 31 — Data Understanding : Pankreatitis Akut

#### Lecturer Content

- **Data requirements:** mengambil kelompok pasien yang sesuai
  - Pasien berumur > 18 tahun
  - Terdaftar di ruang ICU setidaknya 1x24 jam. Jika terdapat lebih dari satu data, maka yang diambil adalah yang terbaru.
  - Memiliki kriteria atau diagnosis Pankreatitis Akut; melalui kode diagnosis dan/atau hasil lab yang sesuai.
- **Data collection:** catatan kesehatan elektronik yang terintegrasi dari rumah sakit.
- Sesuaikan format, konten, dan representasi data dengan pemodelan analitik yang dipillih.
  - Pemodelan dilakukan dengan memprediksi kemungkinan risiko per pasien  
    → data harus disediakan dalam format 1 entri per pasien dengan kolomnya merepresentasikan variabel
  - Klasifikasi → membutuhkan label target, tandai pasien yang meninggal dengan risiko tinggi kematian dan sisanya tidak.
  - Definisikan variabel yang dibutuhkan: data pendaftaran pasien, data historis lab, data historis perangkat digital medis di ICU.
- Lakukan analisis statistik dan visualisasi pada data.

#### Equations

Tidak ada persamaan pada slide ini.

#### Worked Example

**Problem**

Menyiapkan pemahaman data untuk model risiko pasien Pankreatitis Akut di ICU.

**Given**

Kriteria pasien, sumber catatan kesehatan elektronik, kebutuhan format per pasien, dan kebutuhan label target.

**Steps**

1. Pilih pasien berumur >18 tahun.
2. Pilih pasien yang terdaftar di ICU setidaknya 1x24 jam; jika lebih dari satu data, ambil yang terbaru.
3. Pastikan kriteria/diagnosis Pankreatitis Akut melalui kode diagnosis dan/atau hasil lab.
4. Gunakan catatan kesehatan elektronik terintegrasi sebagai sumber data.
5. Bentuk data menjadi 1 entri per pasien dengan kolom sebagai variabel.
6. Untuk klasifikasi, sediakan label target berdasarkan status kematian seperti yang dinyatakan slide.
7. Definisikan variabel dan lakukan analisis statistik serta visualisasi.

**Result**

Prasyarat, sumber, format, label, dan variabel data telah ditentukan untuk tahap berikutnya.

#### Visual Content

**Type:** Case-study requirements list

**Description:** Daftar prasyarat pasien, data collection, format representasi, label klasifikasi, dan variabel yang dibutuhkan.

**Educational purpose:** Memperlihatkan penerapan tahap Data Understanding ke studi kasus klinis.

#### Notes

- Ejaan "dipillih" dipertahankan sesuai slide.

### Slide 32 — 3. Data Preparation

#### Lecturer Content

- Mencakup semua aktivitas menyiapkan dataset untuk modeling
  - **Cleaning**, mengintegrasikan data dari banyak sumber, membersihkan duplikasi dan *missing data*, dan lain-lain
  - **Feature engineering** untuk mendapatkan variabel prediktor baru, dan meningkatkan kinerja
- Paling memakan banyak waktu: 70-90% waktu proyek (bisa kurang jika sumber data sudah terkelola dengan baik).

**Lebih lanjut di Topik:** Data collection, data understanding/EDA, Statistics, Data preparation: cleaning, transformation, Dimensionality Reduction

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Aktivitas yang disebutkan meliputi integrasi data, penghapusan duplikasi, penanganan *missing data*, dan feature engineering.

#### Visual Content

**Type:** Data-preparation activity list

**Description:** Dua aktivitas utama, Cleaning dan Feature engineering, dicetak tebal/miring. Di bagian bawah ada daftar topik lanjutan.

**Educational purpose:** Menekankan cakupan dan beban waktu tahap Data Preparation.

#### Notes

Tidak ada catatan tambahan.

### Slide 33 — Data Preparation : Pankreatitis Akut

#### Lecturer Content

- Menggabungkan variabel dari sumber berbeda
  - **Data pendaftaran pasien:** ID, jenis kelamin, umur, tanggal kematian, kebiasaan (merokok/alkohol)
  - **Data historis lab dan klinis:** ID, kadar darah putih, platelet, creatinite, glukosa, hematocrit, blood ure nitrogen, kadar lipase, anion gap, prothrombin time, bilirubin, dll.
  - **Data historis perangkat digital medis di ICU:** ID, tekanan darah, alarm detak jantung, length of stay
- *Cleaning*
  - Hanya mengambil data dalam durasi 24 jam setelah pendaftaran (reaksi awal pada perawatan)
  - Menghapus data terduplikasi
  - Menghapus entri yang memiliki data historis lab dan klinis yang kosong hingga >20%
- *Feature engineering*
  - Agregasi data historis pada level pasien dengan menggunakan rerata

#### Equations

Tidak ada persamaan pada slide ini.

#### Worked Example

**Problem**

Menyiapkan dataset pasien Pankreatitis Akut dari beberapa sumber data rumah sakit.

**Given**

Data pendaftaran, data historis lab/klinis, dan data historis perangkat digital medis di ICU.

**Steps**

1. Gabungkan variabel dari ketiga sumber.
2. Batasi data pada 24 jam setelah pendaftaran.
3. Hapus data terduplikasi.
4. Hapus entri dengan data historis lab dan klinis kosong hingga >20% sebagaimana dinyatakan slide.
5. Agregasikan data historis pada level pasien menggunakan rerata.

**Result**

Dataset per pasien disiapkan untuk modeling.

#### Visual Content

**Type:** Case-study data-preparation checklist

**Description:** Slide membagi aktivitas ke tiga kelompok: penggabungan sumber data, Cleaning, dan Feature engineering.

**Educational purpose:** Memberikan contoh konkret operasi data preparation pada data klinis.

#### Notes

- Istilah/ejaan "creatinite" dan "blood ure nitrogen" dipertahankan sesuai slide dan tidak dikoreksi.

### Slide 34 — 4. Modeling

#### Lecturer Content

- Dimulai dari dataset yang sudah disiapkan (dari tahap data preparation), model prediktif atau deskriptif dikembangkan sesuai pendekatan yang dipilih dari tahap business understanding
- Bersifat iteratif: perlu melakukan beberapa kali eksperimen hingga kinerja memuaskan.

**Lebih lanjut di Topik:** Classification and regression tree (CART); Nearest neighbor classification and regression; Likelihood & Naive Bayes; Linear Regression; NN; Clustering

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Teknik/model yang disebutkan:

- Classification and regression tree (CART)
- Nearest neighbor classification and regression
- Likelihood & Naive Bayes
- Linear Regression
- NN
- Clustering

#### Visual Content

**Type:** Modeling process description

**Description:** Dua bullet utama tentang sumber dataset dan sifat iteratif modeling, diikuti daftar topik lanjutan.

**Educational purpose:** Menjelaskan hubungan tahap Modeling dengan Data Preparation dan Business Understanding serta pentingnya eksperimen berulang.

#### Notes

Tidak ada catatan tambahan.

### Slide 35 — 5. Evaluation

#### Lecturer Content

- Ilmuwan data:
  - mengevaluasi kualitas model
  - memeriksa apakah model sudah mengatasi masalah bisnis secara baik dan menyeluruh
- Membutuhkan penghitungan macam-macam ukuran kinerja serta sajian visual (tabel, graf) pada dataset uji.

**Lebih lanjut di Topik:** Supervised model evaluation, evaluation metrics; Imbalanced Classification

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh artefak evaluasi yang disebutkan: tabel dan graf pada dataset uji.

#### Visual Content

**Type:** Evaluation checklist

**Description:** Dua tugas ilmuwan data dan kebutuhan penghitungan ukuran kinerja ditampilkan sebagai bullet list.

**Educational purpose:** Menjelaskan bahwa evaluasi model mencakup kualitas teknis dan kecocokan terhadap masalah bisnis.

#### Notes

Tidak ada catatan tambahan.

### Slide 36 — Evaluation : Pankreatitis Akut

#### Lecturer Content

- Evaluasi: **Apakah model yang digunakan benar-benar menjawab pertanyaan awal, atau perlu disesuaikan?**
- Kunci untuk memastikan relevansi model dalam menjawab permasalahan adalah dengan membuat *business stakeholders* memahami alat yang telah dibuat.
- Dalam skenario bisnis, business stakeholders akan memiliki keahlian yang berbeda-beda yang berperan dalam keberhasilan implementasi, seperti tim pemasaran, pengembang aplikasi, dan administrasi IT.
- Setelah model dievaluasi dan *data scientist* yakin model tersebut berfungsi dengan baik, langkah berikutnya adalah menerapkannya dan mengujinya dalam kondisi nyata.

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh kelompok stakeholder yang disebutkan: tim pemasaran, pengembang aplikasi, dan administrasi IT.

#### Visual Content

**Type:** Case-study evaluation discussion

**Description:** Pertanyaan evaluasi utama ditebalkan. Bullet berikutnya membahas pemahaman stakeholder, variasi keahlian stakeholder, dan transisi ke pengujian kondisi nyata.

**Educational purpose:** Menghubungkan evaluasi model dengan relevansi terhadap problem awal dan kesiapan implementasi.

#### Notes

- Meskipun slide berada dalam studi kasus Pankreatitis Akut, contoh stakeholder yang disebutkan bersifat generik (tim pemasaran, pengembang aplikasi, administrasi IT).

### Slide 37 — 6. Deployment

#### Lecturer Content

- Setelah model sudah sesuai dengan permasalahan bisnis, model di-deploy pada lingkungan produksi.
- Deployment awal difokuskan pada evaluasi kinerja awal pada lingkungan riil.
  - A/B testing banyak dipakai di sini.
- Deployment lebih luas pada proses bisnis secara operasional membutuhkan keterlibatan banyak pihak/bagian dalam organisasi.
- Setelah deployment diinisiasi, proses tidak berhenti.
  - Perlu evaluasi secara berkesinambungan untuk terus memperbaiki model.
  - Prinsip: "Machine learning models always get worse over time" (due to the presence of new data).

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh metode evaluasi deployment awal yang disebutkan: **A/B testing**.

#### Visual Content

**Type:** Deployment principles list

**Description:** Slide berisi bullet tentang produksi, evaluasi lingkungan riil, A/B testing, keterlibatan organisasi, dan evaluasi berkesinambungan.

**Educational purpose:** Menjelaskan bahwa deployment adalah proses operasional yang memerlukan evaluasi terus-menerus.

#### Notes

> [REVIEW NOTE — Slide 37: Pernyataan "Machine learning models always get worse over time" dipertahankan persis sebagai prinsip yang tertulis pada slide; sifat absolut pernyataan ini dapat memerlukan verifikasi jika digunakan sebagai klaim umum.]

### Slide 38 — Studi Kasus: Pankreatitis Akut

#### Lecturer Content

- Setelah model melewati masa evaluasi, model siap untuk diujikan pada kasus nyata secara *real time*.
- Langkah selanjutnya:
  - Membagikan pengetahuan dan berkomunikasi kepada tim bisnis (pihak manajemen rumah sakit).
  - Tim bisnis akan melakukan penyuluhan lebih lanjut kepada petugas klinis tentang hasil keluaran model agar petugas klinis dapat memahami cara mengidentifikasi pasien berisiko tinggi dan merancang tindakan intervensi yang sesuai.
- Umpan balik dari pengguna dikumpulkan untuk membantu penyempurnaan model serta mengevaluasi kinerja dan dampaknya.

#### Equations

Tidak ada persamaan pada slide ini.

#### Worked Example

**Problem**

Membawa model risiko Pankreatitis Akut dari evaluasi ke kondisi penggunaan nyata.

**Given**

Model telah melewati evaluasi.

**Steps**

1. Uji model pada kasus nyata secara real time.
2. Komunikasikan pengetahuan kepada tim bisnis/manajemen rumah sakit.
3. Lakukan penyuluhan kepada petugas klinis tentang interpretasi hasil keluaran model.
4. Gunakan keluaran untuk membantu identifikasi pasien berisiko tinggi dan perancangan tindakan intervensi.
5. Kumpulkan umpan balik pengguna untuk penyempurnaan serta evaluasi dampak.

**Result**

Model memasuki penggunaan nyata dengan proses komunikasi, edukasi, dan feedback.

#### Visual Content

**Type:** Case-study deployment steps

**Description:** Bullet list berfokus pada real-time testing, komunikasi ke manajemen rumah sakit, penyuluhan ke petugas klinis, dan pengumpulan feedback.

**Educational purpose:** Menunjukkan aktivitas deployment dan adopsi model dalam konteks rumah sakit.

#### Notes

Tidak ada catatan tambahan.

### Slide 39 — Deploying a Data/AI Application

#### Lecturer Content

- **It may function, but you can’t sell this yet**
- **Now you can sell it!**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Slide membandingkan output aplikasi yang hanya berfungsi dengan output yang sudah dikemas sebagai produk/aplikasi yang lebih siap digunakan/dipasarkan.

#### Visual Content

**Type:** Before/after deployment/productization comparison

**Description:**

- Bagian atas menampilkan tangkapan layar jendela command prompt/terminal sebagai ilustrasi "It may function, but you can’t sell this yet".
- Bagian bawah menampilkan contoh antarmuka web dan aplikasi ponsel yang lebih polished sebagai ilustrasi "Now you can sell it!".

**Educational purpose:** Menekankan perbedaan antara prototype/artefak teknis yang berfungsi dan aplikasi yang dipresentasikan sebagai produk siap pengguna.

#### Notes

> [USE ORIGINAL SLIDE IMAGE — Slide 39: Dua contoh antarmuka di bagian bawah bersifat visual; detail desain tidak perlu direkonstruksi dari teks saja.]

### Slide 40 — The Double Loop

#### Lecturer Content

Judul: **The Double Loop**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** Side-by-side lifecycle diagrams

**Description:** Slide menempatkan dua siklus berdampingan.

**Kiri — CRISP-DM:**

- Business Understanding
- Data Understanding
- Data Preparation
- Modeling
- Evaluation
- Deployment
- Data di tengah

**Kanan — The AI Product Development Lifecycle (AIPDL):**

1. **Ideation** — "Mapping AI’s unique capabilities to the right pain point"
2. **Opportunity** — "Assessing the idea’s market fit potential"
3. **Concept / Prototype** — "Scope out the work, training the model(s) & integrate them onto the experience"
4. **AI Lifecycle** — ikon/chip sebagai tahap berikutnya dalam loop
5. **Testing & Analysis** — "Gathering feedback to ensure minimum viable quality & validate hypotheses"
6. **Roll-out** — "Productizing the AI solution, ready for user access."

Teks tambahan yang terlihat:

- "Reiterate as much needed while exploring for PMF"
- "0-to-1 products need more time here then 1-to-n products"
- "Proceed when reaching MVQ"

**Educational purpose:** Menunjukkan "double loop": lifecycle data-science/model (CRISP-DM) dan lifecycle pengembangan produk AI sebagai dua proses yang saling relevan dalam deployment/productization.

#### Notes

> [VISUAL REFERENCE REQUIRED — Slide 40: Urutan panah pada AIPDL, posisi tahap 4, serta hubungan antara loop produk dan ikon "AI Lifecycle" merupakan bagian visual penting.]

> [REVIEW NOTE — Slide 40: Diagram kanan memuat watermark/sumber kecil yang tidak sepenuhnya terbaca pada render; atribusi persis diagram sebaiknya diverifikasi dari slide asli bila diperlukan.]

### Slide 41 — AI Enhanced Humans >> AI or Humans Alone

#### Lecturer Content

Judul: **AI Enhanced Humans >> AI or Humans Alone**

Sumber yang dicantumkan:

- https://humansintheloop.org/
- https://www.titanml.co/glossary/human-in-the-loop

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh numerik pada slide ini.

#### Visual Content

**Type:** Human-in-the-loop cycle diagram

**Diagram title:** **Responsible AI With Humans In The Loop**

**Important labels and flow:**

- **Dataset**
- **Validation of Data by Human**
- **Optimized Data**
- **AI Model**
- **Validation of Output by Human**
- **System Output**
- **Human Correction**

Panah membentuk siklus antara dataset, validasi manusia, model AI, validasi output, system output, dan feedback/correction oleh manusia.

**Educational purpose:** Menunjukkan peran manusia dalam validasi data, validasi keluaran, koreksi, dan iterasi sistem AI.

#### Notes

Tidak ada catatan tambahan.

## 6. Data Reimagined

### Slide 42 — Outline: Data Reimagined

#### Lecturer Content

Outline:

- Motivasi di Balik Sains Data
- Pengertian dan Lingkup Sains Data
- Metodologi Sains Data
- Studi Kasus
- **Data Reimagined**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh pada slide ini.

#### Visual Content

**Type:** Section transition / outline highlight

**Description:** Bar "Data Reimagined" diberi warna aktif; topik lainnya dibuat abu-abu.

**Educational purpose:** Menandai dimulainya bagian "Data Reimagined".

#### Notes

Tidak ada catatan tambahan.

### Slide 43 — Studi Kasus: Bodies as Data

#### Lecturer Content

Berikut adalah cuplikan dataset “Human Body Measurement”

Dataset seperti ini umumnya disebut dengan **dataset tabular**.

#### Table

| ID | Age | Height (cm) | Weight (kg) | BMI | Body Fat (%) | Muscle Mass (kg) | Heart Rate (bpm) | Daily Steps | Sleep Hours |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 25 | 175 | 68 | 22.2 | 15.0 | 32.5 | 72 | 8000 | 7.5 |
| 2 | 17 | 160 | 75 | 29.3 | 25.5 | 28.0 | 80 | 5000 | 6.0 |
| 3 | 23 | 170 | 82 | 28.4 | 23.0 | 31.5 | 76 | 6000 | 6.8 |
| 4 | 24 | 180 | 90 | 27.8 | 20.0 | 35.0 | 65 | 9000 | 8.0 |
| 5 | 19 | 165 | 70 | 25.7 | 22.0 | 29.5 | 85 | 4000 | 5.5 |
| 6 | 22 | 178 | 74 | 23.4 | 17.0 | 33.0 | 70 | 10000 | 7.2 |

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Dataset “Human Body Measurement” menjadi contoh **dataset tabular**.

#### Visual Content

**Type:** Tabular dataset

**Description:** Tabel memiliki 10 kolom: ID, Age, Height, Weight, BMI, Body Fat, Muscle Mass, Heart Rate, Daily Steps, dan Sleep Hours; terdapat enam baris contoh individu.

**Educational purpose:** Menunjukkan bagaimana karakteristik tubuh dapat direpresentasikan sebagai data tabular.

#### Notes

Tidak ada catatan tambahan.

### Slide 44 — Studi Kasus: Bodies as Data — rekomendasi kebugaran/diet

#### Lecturer Content

Apa analisis yang bisa kita lakukan pada dataset “Human Body Measurement”?

**1. Bisakah kita membuat rekomendasi rencana kebugaran atau diet yang dipersonalisasi berdasarkan statistik tubuh?**

**Hasil dan Diskusi:**  
Data bisa dikategorisasi menjadi tiga kelompok

- **Kelompok 1:** BMI tinggi, Body fat tinggi  
  Rekomendasi: Fokus pada penurunan **kadar lemak**, tingkatkan olahraga kardio & sesuaikan diet untuk menurunkan kalori
- **Kelompok 2:** BMI tinggi, Body fat normal  
  Rekomendasi: Fokus mempertahankan **masa otot**, bisa melakukan *strength training* dan makanan seimbang gizi dengan cukup protein
- **Kelompok 3:** BMI normal, Body fat rendah  
  Rekomendasi: Fokus meningkatkan **endurance**, lakukan gabungan latihan kardio dan kekuatan, fokus pada pembentukan otot.

#### Equations

Tidak ada persamaan pada slide ini.

#### Worked Example

**Problem**

Membuat rekomendasi rencana kebugaran atau diet yang dipersonalisasi berdasarkan statistik tubuh.

**Given**

Variabel BMI dan Body Fat Percentage dari dataset "Human Body Measurement".

**Steps**

1. Kelompokkan data komposisi tubuh.
2. Identifikasi tiga kelompok berdasarkan kombinasi BMI dan Body fat.
3. Berikan rekomendasi berbeda untuk tiap kelompok sebagaimana tercantum pada slide.

**Result**

Tiga kelompok dan tiga fokus rekomendasi: penurunan kadar lemak, mempertahankan masa otot, dan meningkatkan endurance/pembentukan otot.

#### Visual Content

**Type:** Scatter plot / clustering visualization

**Plot title:** **Clustering of Body Composition for Fitness Plan**

**Axes:**

- X-axis: BMI
- Y-axis: Body Fat Percentage (%)

**Important labels:**

- Kelompok 1
- Kelompok 2
- Kelompok 3
- Legend: Centroids (ditandai dengan X merah)

Titik data ditampilkan dengan warna berbeda dan tiga centroid merah besar menandai pusat kelompok.

**Educational purpose:** Memvisualisasikan pengelompokan komposisi tubuh yang digunakan untuk membentuk rekomendasi kebugaran/diet.

#### Notes

- Istilah "masa otot" dipertahankan sesuai slide.

### Slide 45 — Studi Kasus: Bodies as Data — ide analisis lain

#### Lecturer Content

Apa analisis yang bisa kita lakukan pada dataset “Human Body Measurement”?

2. Bisakah kita memprediksi BMI seseorang dan mengkategorikan individu menjadi kurang berat badan, normal, kelebihan berat badan, dan obesitas?  
   → Regresi, Klasifikasi, Clustering

2. Bisakah jumlah langkah harian memprediksi massa otot dan persentase lemak tubuh?  
   → Regresi

2. Bagaimana persentase lemak tubuh dan massa otot berubah seiring bertambahnya usia?  
   → Time-series forecasting

2. Dan masih banyak lagi…

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh pasangan pertanyaan → pendekatan:

- Prediksi BMI dan kategori berat badan → Regresi, Klasifikasi, Clustering
- Langkah harian → massa otot/persentase lemak tubuh → Regresi
- Perubahan lemak tubuh dan massa otot terhadap usia → Time-series forecasting

#### Visual Content

**Type:** Analysis-idea list

**Description:** Tiga pertanyaan analitik dan satu penutup ditampilkan sebagai daftar; semua item bernomor "2." pada slide.

**Educational purpose:** Menunjukkan beragam tugas analitik yang dapat dibayangkan dari satu dataset tabular.

#### Notes

- Penomoran "2." yang berulang dipertahankan sesuai slide.
- > [REVIEW NOTE — Slide 45: "Time-series forecasting" dipasangkan dengan pertanyaan perubahan terhadap usia, tetapi slide tidak menjelaskan apakah data yang tersedia bersifat longitudinal/time-series. Pernyataan dipertahankan apa adanya.]

### Slide 46 — Studi Kasus: Words as Data

#### Lecturer Content

**Data seperti ini biasa disebut sebagai data tekstual**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh yang digunakan adalah teks dari *Harry Potter and the Deathly Hallows* karya J.K. Rowling beserta visualisasi "happiness" sepanjang buku.

#### Visual Content

**Type:** Text excerpt + narrative sentiment/happiness timeline

**Description:**

- Di kiri terdapat gambar halaman bertajuk **CHAPTER ONE — The Dark Lord Ascending**.
- Di tengah/kanan terdapat grafik berjudul **Harry Potter and the Deathly Hallows by J.K. Rowling**.
- X-axis: **PERCENTAGE OF BOOK**.
- Y-axis menampilkan skala **HAPPS**.
- Garis/area kuning memperlihatkan nilai happiness yang berubah sepanjang buku.

**Important labels visible on the graph:**

- HAPPIEST 6.64
- AVERAGE 5.45
- LEAST HAPPY 4.38
- HARRY AT THE WEASLEYS
- HEDWIG, MOODY DIE, GEORGE INJURED
- WEDDING BROKEN UP BY DEATHEATERS
- HORCRUX LOCKET DESTROYED, RON LEAVES
- BETRAYED BY XENOPHILIUS
- HERMIONE TORTURED BY BELLATRIX
- ESCAPE MALFOY MANOR
- HUFFLEPUFF CUP HORCRUX DESTROYED
- DUMBLEDORE'S ARMY ASSEMBLED
- BATTLE AT HOGWARTS
- VOLDEMORT KILLED
- HAPPY EVER AFTER

**Educational purpose:** Menunjukkan bahwa teks dapat diperlakukan sebagai data dan diubah menjadi seri/ukuran kuantitatif sepanjang dokumen.

#### Notes

> [USE ORIGINAL SLIDE IMAGE — Slide 46: Grafik memuat banyak anotasi kecil; daftar di atas mencakup label utama yang terbaca, tetapi gambar asli diperlukan untuk reproduksi visual lengkap.]

### Slide 47 — Studi Kasus: Words as Data — sliding-window hedonometrics

#### Lecturer Content

Referensi:

Šiljak, Harun. (2022). Networks of Twin Peaks: The Dale Cooper Effect. The Mathematical Intelligencer. 45. 1-7. 10.1007/s00283-022-10187-w.

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Contoh alur mengubah teks menjadi kurva average happiness menggunakan analisis hedonometrik.

#### Visual Content

**Type:** Text-analysis pipeline diagram

**Description and important labels:**

1. **Base text from Project Gutenberg**
2. Teks dibagi menjadi **Uniform length segments of the text**.
3. Sebuah **sliding window across text** bergerak melintasi segmen.
4. Setiap window dianalisis dengan **Hedonometric analysis**.
5. Hasil diplot sebagai **Average happiness** terhadap **% of text**.

**Educational purpose:** Menjelaskan secara visual bagaimana teks panjang dapat disegmentasi dan dianalisis secara sliding window untuk menghasilkan ukuran happiness sepanjang teks.

#### Notes

Tidak ada catatan tambahan.

### Slide 48 — Studi Kasus: Words as Data — ide analisis tekstual

#### Lecturer Content

Apa analisis yang bisa kita lakukan pada dataset tekstual?

1. Media 1 vs Media 2, mana yang pro dan kontra pemerintah? Apakah mereka menggunakan frasa/kata yang berbeda secara konsisten? Dapatkah kata-kata yang digunakan media dalam berita diubah menjadi data? Apa yang mungkin terungkap dari hal ini tentang pers Indonesia?
2. Bagaimana kata-kata diasosiasikan untuk kelompok umur yang berbeda di Facebook?

Kelompok umur yang ditampilkan:

- 19 - 22 y.o.
- 23 - 29 y.o.
- 30 - 65 y.o.

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Dua contoh analisis tekstual:

- Perbandingan frasa/kata antar-media dan kaitannya dengan posisi pro/kontra pemerintah.
- Asosiasi kata berdasarkan kelompok umur pengguna Facebook.

#### Visual Content

**Type:** Three word clouds by age group

**Description:** Tiga word cloud ditempatkan berdampingan untuk umur 19-22, 23-29, dan 30-65 tahun.

**Prominent visible words/phrases include:**

- **19-22 y.o.:** semester, campus, class/classes, study, fucking, fucksemester, 21st, apartment, exam, week
- **23-29 y.o.:** at_work, officebeer, weddingdays_off, home, hubby, money, pay, company, enjoying, apartment
- **30-65 y.o.:** my_kids, family, daughter, son, fb_friends, love, god, prayer, children, friends

**Educational purpose:** Mengilustrasikan bahwa distribusi/asosiasi kata dapat berbeda menurut kelompok umur dan dapat dieksplorasi sebagai data.

#### Notes

> [USE ORIGINAL SLIDE IMAGE — Slide 48: Word cloud berisi banyak kata kecil. Daftar di atas hanya mencatat kata/frasa yang paling menonjol dan terbaca; gunakan gambar asli jika semua token diperlukan.]

### Slide 49 — Studi Kasus: Pictures as Data

#### Lecturer Content

**Data citra satelit** di samping digunakan untuk memprediksi **GDP** suatu negara dengan menghitung perkembangan **penggunaan lampu/cahaya** sebagai indikator **perkembangan aktivitas ekonomi**.

Referensi:

Henderson JV, Storeygard A, Weil DN. **MEASURING ECONOMIC GROWTH FROM OUTER SPACE.** Am Econ Rev. 2012 Apr;102(2):994-1028. doi: 10.1257/aer.102.2.994. PMID: 25067841; PMCID: PMC4108272.

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Citra satelit malam digunakan sebagai contoh data gambar yang dapat menjadi indikator aktivitas ekonomi.

#### Visual Content

**Type:** Two satellite/night-light maps

**Description:** Dua peta area yang sama ditampilkan bertumpuk dan diberi label tahun **1997** dan **1998**. Warna menunjukkan intensitas "Digital Number" dengan legenda:

- High: 63
- Low: 0

Peta juga menampilkan skala 0, 50, 100, 200 km dan label **Universal Transverse Mercator projection**.

**Educational purpose:** Menunjukkan bahwa intensitas cahaya pada citra satelit dapat diekstrak sebagai data untuk mengindikasikan perkembangan aktivitas ekonomi dan memprediksi GDP.

#### Notes

> [VISUAL REFERENCE REQUIRED — Slide 49: Lokasi geografis tidak dituliskan secara eksplisit pada slide. Jangan mengidentifikasi wilayah hanya dari bentuk peta tanpa sumber tambahan.]

### Slide 50 — Lebih banyak hal yang bisa dilakukan dengan sains data!

#### Lecturer Content

**Lebih banyak hal yang bisa dilakukan dengan sains data!**

**Banyak berimajinasi → banyak eksplorasi → banyak pertanyaan → banyak ide**

#### Equations

Tidak ada persamaan pada slide ini.

#### Examples

Tidak ada contoh tambahan pada slide ini.

#### Visual Content

**Type:** Closing statement

**Description:** Kalimat penutup besar dan satu rangkaian panah konseptual di bawahnya; tidak ada diagram tambahan.

**Educational purpose:** Menutup presentasi dengan ajakan memperluas eksplorasi dan pertanyaan melalui imajinasi.

#### Notes

Tidak ada catatan tambahan.

# Extraction Review

## Items requiring manual verification

- Slide 28: Hasil render memperlihatkan tiga isian kosong (Tujuan spesifik, Pendekatan analitik, Pemilihan model), tetapi lapisan teks PDF memuat "Pemilihan model: Decision tree". Perlu verifikasi jika elemen tersembunyi/animasi harus direkonstruksi.
- Slide 40: Atribusi/watermark kecil pada diagram "The AI Product Development Lifecycle" tidak sepenuhnya terbaca; verifikasi sumber persis jika atribusi diperlukan.
- Slide 46: Grafik happiness memiliki banyak anotasi kecil; label utama sudah ditranskripsi, tetapi detail lengkap perlu pemeriksaan gambar asli.
- Slide 48: Word cloud berisi banyak token kecil; hanya kata/frasa yang menonjol dan terbaca yang dicatat.

## Important visuals requiring original slide access

- Slide 15: Hubungan geometri/tumpang tindih Data Science, Big Data, AI, Machine Learning, Neural Networks, dan Deep Learning.
- Slide 21: Arah panah dan loop pada IBM Data Science Flowchart.
- Slide 23: Arah panah internal dan loop luar pada CRISP-DM.
- Slide 26: Diagram CRISP-DM yang dipakai untuk studi kasus.
- Slide 39: Perbandingan visual terminal vs antarmuka produk.
- Slide 40: Hubungan dua lifecycle dan detail panah AIPDL.
- Slide 41: Siklus human-in-the-loop dan arah feedback/correction.
- Slide 44: Scatter plot clustering dan posisi titik/centroid.
- Slide 46: Grafik happiness sepanjang buku.
- Slide 47: Diagram sliding-window hedonometrics.
- Slide 48: Tiga word cloud kelompok umur.
- Slide 49: Dua citra satelit/night-light tahun 1997 dan 1998.

## Potentially ambiguous statements

- Slide 13: Warna highlight tampaknya berhubungan dengan kategori analitika pada Slide 11, tetapi tidak ada legenda eksplisit pada slide.
- Slide 37: Prinsip "Machine learning models always get worse over time" ditulis secara absolut pada slide dan dapat memerlukan verifikasi bila digunakan sebagai klaim umum.
- Slide 45: "Time-series forecasting" dipasangkan dengan perubahan terhadap usia, tetapi slide tidak menjelaskan apakah dataset yang dibayangkan bersifat longitudinal/time-series.
- Slide 49: Wilayah pada citra satelit tidak disebutkan namanya pada slide; identifikasi geografis tidak diinferensikan dalam ekstraksi ini.
