# Mengapa sains data?

## Mulai dari pertanyaan

Kuliah membuka dengan pertanyaan yang mungkin dicari jawabannya melalui data. Contohnya: kata kunci apa yang paling sering dicari di Google; halaman internet apa yang paling sering dikunjungi dan berapa lama; apa yang sedang *trend* di X, Instagram, TikTok, dan Youtube; berapa harga saham PT. Pantai Indah Kapuk Dua Tbk besok; bagaimana sentimen tentang DeepSeek di media sosial; mengapa pengguna *e-commerce* meninggalkan keranjang sebelum *checkout*; dan lagu apa yang akan direkomendasikan kepada pengguna A besok. Pertanyaan tersebut berbeda: ada yang meminta ringkasan, penjelasan, perkiraan, atau rekomendasi.

<!-- source-slides: 3,4,5 -->

> **Intuisi · penjelasan tambahan.** Menyebut sebuah pertanyaan belum berarti kita sudah memiliki data, model, atau jawaban yang dapat dipercaya. Slide 8 justru meminta kita memeriksa semua keputusan itu.

## Dari informasi ke jawaban

Diagram *learning agent* pada slide 6 membedakan dua aktivitas. Pada **pelatihan**, representasi dibentuk dari kumpulan informasi; **Data input** dan **Expected output** masuk ke **Train model**, yang menghasilkan **Model**. Pada **penggunaan**, sebuah **query** masuk ke **Run inference**, yang memakai model dan mengembalikan **Inferred answer**. Diagram ini adalah skema konseptual, bukan algoritma pelatihan terperinci.

<!-- source-slides: 6 -->

Slide berikutnya menambahkan pertanyaan praktis: dari mana data diperoleh dan apakah tersedia; apakah data cocok; representasi apa yang sesuai (misalnya teks atau gambar); bagaimana menilai hasil inferensi; bagaimana jika data berubah; dan adakah efek prediksi yang tidak diinginkan. Karena itulah kuliah menuntut **“serangkaian metode yang tertib dan sistematis.”**

<!-- source-slides: 8,9 -->

## Enam ciri Big Data pada slide

Slide 7 menyebut ketersediaan data masif sebagai **Big Data** dan merinci enam cirinya. Istilah Inggris dipertahankan agar mudah dicocokkan dengan PDF.

| Ciri | Makna yang diberikan slide |
|---|---|
| **Volume** | Data terakumulasi sangat besar, dari terabyte sampai satuan yang lebih besar. |
| **Velocity** | Data dihasilkan sangat cepat, misalnya per detik atau per menit. |
| **Variety** | Ragam data terstruktur, semi-terstruktur, dan tidak terstruktur seperti teks, suara, citra, dan video. |
| **Veracity** | Kesesuaian data dengan fakta makin sulit ditakar. |
| **Value** | Kemampuan menghasilkan nilai, seperti profit, manfaat sosial, atau kepuasan pelanggan. |
| **Variability** | Variasi penggunaan data dalam pelbagai aplikasi. |

<!-- source-slides: 7 -->

**Pegangan sebelum lanjut:** banyaknya data memperbesar peluang pertanyaan, sekaligus membuat pemilihan data, representasi, evaluasi, dan dampak sistem menjadi bagian dari pekerjaan.

<!-- source-slides: 7,8,9 -->
