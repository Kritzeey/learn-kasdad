# Klasifikasi, regresi, dan rancangan model

## Contoh 1 · Membeli komputer atau tidak?

Pada slide 43, setiap baris adalah sebuah *record/sample/instance*. Atributnya adalah **Age**, **income**, **Student?**, dan **Credit rating**. Kolom **Buys computer?** merupakan *class label* yang ingin diprediksi untuk kasus baru. Karena hasilnya **yes/no**, ini adalah **klasifikasi** dengan nilai keluaran diskret.

<!-- source-slides: 43 -->

| Age | income | Student? | Credit rating | Buys computer? |
|---|---|---|---|---|
| <= 30 | high | no | fair | no |
| <= 30 | high | no | excellent | no |
| 31...40 | high | no | fair | yes |
| > 40 | medium | no | fair | yes |
| > 40 | low | yes | fair | yes |
| > 40 | low | yes | excellent | no |
| 31...40 | low | yes | excellent | yes |
| <= 30 | medium | no | fair | no |
| <= 30 | low | yes | fair | yes |
| > 40 | medium | yes | fair | yes |
| <= 30 | medium | yes | excellent | yes |
| 31...40 | medium | no | excellent | yes |
| 31...40 | high | yes | fair | yes |
| > 40 | medium | no | excellent | no |

**Langkah membaca contoh:** (1) pisahkan empat atribut dari kolom kelas, (2) gunakan baris berlabel sebagai data contoh, (3) pelajari model klasifikasi, (4) gunakan model untuk memperkirakan label instance baru. Slide **tidak** memberikan aturan model atau prediksi baru tertentu, sehingga tabel ini tidak boleh dibaca sebagai aturan seperti “semua pelajar akan membeli komputer”.

## Contoh 2 · Harga mobil bekas

Slide 44 menggunakan atribut mobil seperti **brand**, **model**, **year**, dan **miles**, dengan **price** sebagai target. Di sini tugasnya **regresi**: keluaran yang diprediksi berupa nilai bilangan. Slide menyebutnya “bilangan continues”; istilah itu dipertahankan di transkrip sumber.

<!-- source-slides: 44 -->

| brand | model | year | miles | price |
|---|---|---:|---:|---:|
| Chevrolet | Volt LT | 2019 | 27173 | 25655 |
| Hyundai | Elantra SE | 2017 | 76941 | 15590 |
| Subaru | Legacy | 2022 | 6811 | 33777 |

Tabel ringkas di atas menampilkan beberapa baris dari contoh dosen agar perbedaan **atribut** dan **target numerik** mudah dilihat. Seluruh 16 baris dan kolom tambahan tetap ada di transkrip sumber. Sebagian angka pada slide sangat rapat; jika diperlukan presisi pada kolom teknis kendaraan, periksa halaman PDF asli sebelum memakai data tersebut untuk perhitungan.

## Tiga elemen algoritma pemelajaran mesin

Slide 47–48 membingkai algoritma melalui tiga keputusan:

| Elemen | Pertanyaan | Contoh yang tercantum pada slide |
|---|---|---|
| **Representation** | Seperti apa model atau representasi pengetahuannya? | *Instance-based*, hyperplane, decision tree, rules, neural networks, graphical models |
| **Evaluation** | Bagaimana mutu model dibedakan? | Accuracy, precision/recall, mean average precision, mean average error, mean square error, K-L divergence, likelihood |
| **Optimization** | Bagaimana model yang baik dicari? | Greedy search, branch and bound, gradient descent, quasi-Newton, linear programming, quadratic programming |

<!-- source-slides: 47,48 -->

### Contoh pemetaan dari dosen

Jika tugasnya mengklasifikasikan apakah seseorang akan membeli komputer memakai **Multilayer Perceptron**, slide memberi pasangan berikut:

1. **Representation:** neural networks
2. **Evaluation:** Accuracy
3. **Optimization:** gradient descent

Urutan ini memisahkan **bentuk model**, **cara menilai**, dan **cara mencari parameternya**. Slide tidak menghitung nilai accuracy ataupun langkah gradient descent numerik.

<!-- source-slides: 48 -->
