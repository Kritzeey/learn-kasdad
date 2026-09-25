# Lima arsitektur agen

Empat tipe dasar program agen pada slide 25 adalah **simple reflex**, **model-based reflex**, **goal-based**, dan **utility-based**. Semuanya dapat diwujudkan sebagai **learning agent**. Bedanya terutama informasi yang dipakai saat memilih tindakan.

<!-- source-slides: 25 -->

## Dari reaksi ke pilihan

| Tipe | Informasi untuk memilih tindakan | Ciri pada kuliah |
|---|---|---|
| **Simple reflex** | *Percept* saat ini dan aturan kondisi–tindakan | Terbatas; bekerja baik ketika lingkungan *fully observable*. |
| **Model-based reflex** | *Percept* saat ini, keadaan internal, model transisi, dan model sensor | Membuat perkiraan keadaan pada lingkungan *partially observable*. |
| **Goal-based** | Model serta informasi *goal* | Mempertimbangkan masa depan; mencari rangkaian tindakan lewat *search* atau *planning*. |
| **Utility-based** | Prediksi hasil serta fungsi *utility* | Membandingkan beberapa cara mencapai tujuan, termasuk di bawah ketidakpastian. |
| **Learning agent** | Umpan balik dan eksplorasi yang memperbaiki agen | Menjelaskan bagaimana agen berubah, bukan satu aturan pemilihan tindakan tersendiri. |

<!-- source-slides: 26,27,28,29,30 -->

### Simple reflex

Aturan kondisi–tindakan di slide 26 berbunyi:

```text
if car-in-front-is-braking,
then initiate braking
```

Tindakan dipilih langsung dari apa yang teramati kini. Tanpa memori keadaan, informasi yang tersembunyi dapat membuat pilihan ini tidak cukup.

<!-- source-slides: 26 -->

### Model-based reflex

Agen menyimpan **state internal** sebagai perkiraan sebagian keadaan lingkungan. Pembaruannya menggunakan **model transisi** (bagaimana dunia berubah dan apa efek tindakan) serta **model sensor** (bagaimana keadaan menghasilkan *percept*). Contoh di slide: memutar setir ke kanan → mobil belok kanan; kamera basah → tetesan tampak pada citra. State internal menjadi *best guess* tentang keadaan kini.

<!-- source-slides: 27 -->

### Goal-based

Dengan sebuah *goal*, agen memprediksi “seperti apa dunia jika saya memilih tindakan A”, lalu mencari urutan tindakan yang membawa ke tujuan. **Search** dan **planning** adalah dua pendekatan yang disebut slide.

<!-- source-slides: 28 -->

### Utility-based

Bila beberapa rute mencapai tujuan, agen dapat memilih yang lebih cepat, lebih aman, atau lebih murah. *Utility function* menginternalisasi penilaian hasil dari sudut pandang agen. Pilihan diarahkan untuk memaksimalkan **expected utility**. Slide menyebut pendekatan ini dapat menangani lingkungan *partially observable* dan nondeterministik.

<!-- source-slides: 29 -->

### Learning agent

Diagram slide 30 memisahkan empat komponen:

1. **Performance element** memilih tindakan.
2. **Critic** menilai pengalaman terhadap *performance standard* dan memberi umpan balik.
3. **Learning element** memakai umpan balik untuk memperbaiki keadaan atau kemampuan internal agen.
4. **Problem generator** menyarankan tindakan eksploratif agar agen mendapat pengalaman baru.

> **Intuisi · penjelasan tambahan.** “Belajar” menjawab bagaimana perilaku agen membaik seiring pengalaman; “goal-based” atau “utility-based” menjawab dasar pemilihan tindakan saat ini. Karena itu, kedua deskripsi dapat berlaku bersamaan pada satu agen.

<!-- source-slides: 30 -->
