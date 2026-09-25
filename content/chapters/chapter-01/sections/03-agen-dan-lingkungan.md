# Agen, kinerja, dan lingkungan

## Satu putaran agen

Sebuah **agen** menerima *percept* dari lingkungan melalui sensor, memprosesnya, lalu mengirim *action* lewat aktuator. *Percept* $\mathcal{P}$ adalah isi persepsi saat tertentu. *Percept sequence* $\mathcal{P}^{*}$ adalah seluruh riwayat persepsi yang telah diperoleh.

Fungsi agen memetakan riwayat itu ke tindakan:

$$
f: \mathcal{P}^{*} \to \mathcal{A}
$$

$\mathcal{A}$ adalah himpunan tindakan. **Agent program** merupakan implementasi konkret fungsi $f$ pada sistem tertentu. Alurnya: **lingkungan → sensor → fungsi/program agen → aktuator → lingkungan**.

<!-- source-slides: 19 -->

## “Tindakan yang benar” perlu ukuran

Kita menguji agen dengan **performance measure** pada keadaan lingkungan yang diinginkan. Slide 20 menggunakan robot *vacuum cleaner* untuk mengajukan pertanyaan: apa akibatnya jika kinerja hanya dinilai dari jumlah debu yang dikumpulkan selama delapan jam? Ukuran yang dipilih dapat mengarahkan perilaku yang tidak sesuai dengan tujuan sebenarnya. Rasionalitas berkaitan dengan **expected performance**.

<!-- source-slides: 20 -->

## PEAS: mendeskripsikan tugas

Kerangka **PEAS** mengikat rancangan agen pada tugasnya. Contoh dosen adalah pengemudi taksi:

| Komponen | Pertanyaan | Contoh pada slide |
|---|---|---|
| **P · Performance** | Hasil apa yang dinilai? | Aman, cepat, tidak melanggar rambu lalin, nyaman bagi penumpang |
| **E · Environment** | Di mana agen bekerja? | Jalan, rambu lalin, kendaraan lain, penumpang |
| **A · Actuators** | Bagaimana ia bertindak? | Kemudi, gas, rem, klakson |
| **S · Sensors** | Apa yang ia amati? | Kamera, sonar, speedometer, GPS |

<!-- source-slides: 21 -->

## Sifat lingkungan

Satu tugas dapat dijelaskan melalui beberapa sumbu berikut. Kata di sisi kiri tabel mengikuti istilah slide; sisi kanannya menjelaskan kebalikannya.

| Sumbu | Arti sisi pertama | Sisi sebaliknya |
|---|---|---|
| **Fully observable / partially observable** | Sensor memberi akses lengkap ke keadaan lingkungan. | Sebagian keadaan tidak teramati. |
| **Single-agent / multiagent** | Agen bekerja sendiri. | Agen lain hadir; interaksi bisa kompetitif atau kooperatif. |
| **Deterministic / nondeterministic** | Keadaan berikutnya dipastikan oleh keadaan kini dan tindakan. | Hasil tidak sepenuhnya pasti; *stochastic* menyatakan peluang secara eksplisit. |
| **Episodic / sequential** | Tiap pasangan percept–action merupakan episode yang mandiri. | Pilihan kini berpengaruh pada pilihan berikutnya. |
| **Static / dynamic** | Lingkungan tidak berubah saat agen berpikir. | Lingkungan berubah; *semi-dynamic* berarti skor berubah meski lingkungannya tetap. |
| **Discrete / continuous** | Keadaan, persepsi, tindakan, atau waktu dapat dibedakan secara terpisah. | Salah satunya dapat berubah kontinu. |
| **Known / unknown** | Akibat atau peluang akibat dari tindakan diketahui. | Agen/perancang belum mengetahui hukumnya. |

<!-- source-slides: 22 -->

### Contoh dari kuliah

| Sifat | Catur dengan jam | Catur tanpa jam | Mengemudi taksi |
|---|---|---|---|
| Fully observable? | Ya | Ya | Tidak (parsial) |
| Single agent? | Tidak | Tidak | Tidak |
| Deterministic? | Ya | Ya | Tidak |
| Episodic? | Tidak | Tidak | Tidak |
| Static / (semi) dynamic? | Semi-dynamic | Ya | Tidak |
| Discrete? | Ya | Ya | Tidak |

Sifat **known/unknown** merujuk pada pengetahuan agen mengenai aturan, bukan semata-mata keadaan lingkungan. Slide memberi contoh Solitaire sebagai *known* tetapi *partially observable*, serta permainan video baru yang layar penuhnya terlihat tetapi akibat tombolnya belum diketahui.

<!-- source-slides: 23 -->

> **Latihan pada slide 24.** Pilih sebuah tugas, lalu isi keenam sifat lingkungan yang tercantum pada tabel latihan. Slide menyebut dunia nyata secara umum sebagai *partially observable, multi-agent, non-deterministic, sequential, dynamic, continuous,* dan *unknown*. Gunakan eksplorasi di bawah untuk membandingkan tiga contoh yang memang diklasifikasikan dosen.

<!-- source-slides: 24 -->
