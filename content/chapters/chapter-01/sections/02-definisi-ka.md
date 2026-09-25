# Empat cara memandang KA

## Apa itu kecerdasan artifisial?

John McCarthy menggambarkan KA sebagai ilmu dan rekayasa untuk **membuat mesin cerdas**, terutama program komputer cerdas. Dalam kutipan yang sama, kecerdasan adalah bagian komputasional dari kemampuan mencapai tujuan di dunia. Ia juga mengakui belum ada definisi tunggal yang kokoh tentang prosedur komputasional mana yang patut disebut cerdas.

<!-- source-slides: 12 -->

> **Intuisi · penjelasan tambahan.** “Cerdas” dapat dinilai dari proses di dalam sistem atau dari perilakunya; ukuran pembandingnya dapat berupa manusia atau rasionalitas. Dua pilihan ini menghasilkan empat sudut pandang.

## Matriks 2 × 2

| Fokus | Mengacu pada manusia | Mengacu pada rasionalitas |
|---|---|---|
| **Berpikir** | *Thinking humanly* | *Thinking rationally* |
| **Bertindak** | *Acting humanly* | *Acting rationally* |

Matriks pada slide 13 memperlihatkan tradisi definisi KA, bukan empat tahap yang harus dijalani berurutan. Slide mengutip Haugeland dan Bellman untuk *thinking humanly*; Charniak–McDermott dan Winston untuk *thinking rationally*; Kurzweil dan Rich–Knight untuk *acting humanly*; serta Poole dkk. dan Nilsson untuk *acting rationally*.

<!-- source-slides: 13 -->

### 1. Berpikir seperti manusia

Pendekatan *cognitive modeling* bertanya bagaimana manusia berpikir. Sumber pengamatan pada slide: **introspeksi**, **eksperimen psikologi**, dan **brain imaging**. *Cognitive science* memadukan model komputasi dari KA dengan psikologi eksperimental untuk membangun teori tentang akal manusia. Dosen mengingatkan agar keberhasilan model KA dan kebenaran teori tentang pikiran manusia dinilai sebagai klaim yang terpisah.

<!-- source-slides: 14 -->

### 2. Bertindak seperti manusia

Pada *Turing Test*, penguji **C** mengajukan pertanyaan kepada **A** (mesin) dan **B** (manusia); A berusaha membuat C mengira A manusia. Slide menyebut kebutuhan pemrosesan bahasa, representasi pengetahuan, penalaran otomatis, serta adaptasi atau *machine learning*. *Total Turing Test* juga menambahkan *computer vision* dan robotika.

Kritik yang diberikan dosen: keberhasilan pesawat terbang tidak bergantung pada peniruan cara burung terbang. Dengan analogi itu, keberhasilan KA tidak harus dinilai hanya melalui peniruan tindakan manusia.

<!-- source-slides: 15 -->

### 3. Berpikir rasional

Pendekatan *laws of thought* memodelkan penalaran yang benar melalui logika proposisional, logika orde pertama, dan bahasa logika probabilistik untuk ketidakpastian. Empat pola inferensi pada slide adalah:

$$
((p \to q) \land p) \vdash q
$$

$$
((p \to q) \land \neg q) \vdash \neg p
$$

$$
((p \to q) \land (q \to r)) \vdash (p \to r)
$$

$$
((p \lor q) \land \neg p) \vdash q
$$

Di sini $p$, $q$, dan $r$ menyatakan proposisi; $\vdash$ menandai kesimpulan yang dapat diturunkan dari premis. Kritik pada slide berbunyi **“TIDAK menghasilkan perilaku cerdas”**: manusia tidak selalu rasional, tidak semua hal mudah dinyatakan sebagai logika, dan skala komputasinya dapat menjadi masalah.

<!-- source-slides: 16 -->

### 4. Bertindak rasional

Pendekatan **agen rasional** mengarah pada tindakan untuk mencapai hasil yang diharapkan paling baik: *“do the right thing.”* Tujuan agen dapat dinyatakan sebagai meminimalkan biaya atau memaksimalkan *reward/utility*. Pendekatan ini juga memuat tindakan efektif yang tidak memerlukan penalaran panjang, seperti refleks saat menyentuh kompor panas.

Slide menyebut pendekatan agen rasional sebagai model standar KA karena lebih mudah dimodelkan secara matematis. Namun, **rasionalitas sempurna** mungkin tidak layak di lingkungan kompleks; keputusan tetap harus dibuat di bawah batasan komputasi.

<!-- source-slides: 17 -->
