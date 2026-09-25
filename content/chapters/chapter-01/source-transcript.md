---
title: "Pengantar Kecerdasan Artifisial"
course: "CSGE603130 - Kecerdasan Artifisial dan Sains Data Dasar"
chapter: "Pengantar Kecerdasan Artifisial"
source: "[01] What is AI_updated (1)(1).pdf"
slide_count: 52
---

# Pengantar Kecerdasan Artifisial

## Learning Objectives

The slide deck does not state a separate set of learning objectives. Its **Outline** indicates that the lecture covers:

- Kecerdasan Artifisial
- Definisi Kecerdasan Artifisial
- Agen Cerdas
- Taksonomi dan Cabang KA
- Sejarah Singkat KA
- Konsep Dasar Pemelajaran Mesin
- KA di Fasilkom UI

> [TRACEABILITY NOTE: The PDF contains 52 pages. The displayed slide numbering runs 1-10 and then 12-53; displayed Slide 11 is not present in the PDF. Headings below preserve the displayed slide number and, when the numbering diverges, also state the physical PDF page number.]

## 1. Opening and Orientation

### Slide 1 — Pengantar Kecerdasan Artifisial

#### Lecturer Content

**Title:** Pengantar Kecerdasan Artifisial

**Authors / lecturers:**

- Adila Alfa Krisnadhi
- Dina Chahyati
- Fariz Darari
- Laksmita Rahadianti
- Lulu Ilmaknun Qurotaini
- Siti Aminah
- Aruni Yasmin Azizah
- Syifa Nurhayati
- Tusty Nadia Maghfira

**Course:** CSGE603130 - Kecerdasan Artifisial dan Sains Data Dasar

**Semester:** Semester Genap 2026/2027

#### Visual Content

**Type:** Title slide

**Description:** White title slide with Universitas Indonesia / Fakultas Ilmu Komputer branding and a dark blue technology-themed strip along the bottom.

**Educational purpose:** Identifies the lecture, teaching team, course code, and semester.

---

### Slide 2 — Outline

#### Lecturer Content

- Kecerdasan Artifisial
- Definisi Kecerdasan Artifisial
- Agen Cerdas
- Taksonomi dan Cabang KA
- Sejarah Singkat KA
- Konsep Dasar Pemelajaran Mesin
- KA di Fasilkom UI

#### Visual Content

**Type:** Color-coded outline list

**Description:** Seven topic bars are stacked vertically. Each bar corresponds to one lecture section.

**Educational purpose:** Shows the sequence and scope of the lecture.

---

### Slide 3 — Credits

#### Lecturer Content

- Stuart Russell & Peter Norvig, *Artificial Intelligence: A Modern Approach*, 4th ed., 2020, Chapter 2.
- Ayu Purwarianti, *Teknologi dan Aplikasi Artificial Intelligence*, Salindia Modul Pelatihan Thematic Academy, Digital Talent Scholarship, Kemenkominfo 2021.
- Gambar dan tangkapan layar hanya untuk kebutuhan penjelasan.
- Hak cipta tetap ada pada pemilik aslinya.

#### Notes

The slide explicitly states that images and screenshots are used only for explanation and that copyright remains with the original owners.

---

## 2. Kecerdasan Artifisial: *Have you heard of it?*

### Slide 4 — Kecerdasan Artifisial: *Have you heard of it?*

#### Lecturer Content

The slide introduces public reactions to the new **Program Studi Sarjana Kecerdasan Artifisial** at Fasilkom UI.

The promotional poster states:

- **Program Studi Sarjana Kecerdasan Artifisial**
- **Dibuka mulai Tahun Ajaran 2026/2027**
- **Jalur Penerimaan:**
  - Seleksi Nasional Berdasarkan Prestasi (SNBP)
  - Seleksi Nasional Berdasarkan Tes (SNBT)
  - Prestasi dan Pemerataan Kesempatan Belajar (PPKB)
  - Seleksi Jalur Prestasi (SJP)
  - SIMAK UI
- **Gelar:** Sarjana Komputer (S.Kom.)
- **Durasi:** 4 Tahun (8 Semester)
- **Persyaratan Daftar:** Lulusan SMA/sederajat dengan latar belakang akademik yang kuat, terutama pada mata pelajaran Matematika dan IPA, sebagai dasar dalam mengikuti proses pembelajaran.
- **Karir:**
  - AI scientist
  - Machine learning scientist
  - AI developer
  - AIOps engineer atau MLOps engineer
  - Big data analyst
  - Data engineer
  - Knowledge engineer
- Informasi lanjut: `https://cs.ui.ac.id`

The Instagram comments highlighted on the slide include:

- “Mana kelas prompting-nya 💔”
- “Ini diajarin cara nge-prompt ya?”

Other visible comments include reactions such as “Lah gabeda jauh sama cs trnyt” and a partially visible comment beginning “keren, tapi takut kedepannya...”.

#### Visual Content

**Type:** Screenshot of an Instagram promotional post and comments

**Description:** The left side shows the program-admission poster for the Bachelor of Artificial Intelligence program. The right side shows an Instagram comment thread, with a red rectangle emphasizing comments that equate AI study with “prompting.”

**Educational purpose:** Motivates the lecture by contrasting a formal AI degree program with casual public perceptions of AI as primarily prompt use.

> [VISUAL REFERENCE REQUIRED — Slide 4: Some non-highlighted Instagram comments are partially obscured or cropped; inspect the original slide if their exact wording is required.]

---

### Slide 5 — Kecerdasan Artifisial: *Have you heard of it?* — Public awareness

#### Lecturer Content

A screenshot shows the question:

> “Do people know about AI?”

The highlighted response reads:

> “Short answer: yes—but unevenly and often shallowly.”
>
> “Most people know *of* AI, but fewer really *understand* it. Here’s the landscape in plain terms:”

Under **General public**:

- **High awareness, low depth**
- People associate AI with things like:
  - ChatGPT / chatbots
  - Face recognition
  - Recommendation systems (Netflix, Shopee, TikTok)
- But many still think AI is either:
  - “almost human” (too magical), or
  - “just automation” (too trivial)

#### Visual Content

**Type:** ChatGPT conversation screenshot

**Description:** A dark-theme ChatGPT interface is shown. A red box highlights the two opening sentences of the response. The visible lower portion lists common public associations with AI and two oversimplified conceptions of AI.

**Educational purpose:** Frames the gap between awareness of AI and deeper understanding of AI.

#### Notes

The screenshot itself displays the interface label “ChatGPT 5.2.” This is part of the slide image and is transcribed as shown, without external verification.

---

### Slide 6 — Kecerdasan Artifisial: *Have you heard of it?* — DeepSeek social-media claims

#### Lecturer Content

Two social-media screenshots are shown with source URLs:

- `https://www.instagram.com/ecommurz/p/DFXfwXfvWcv`
- `https://x.com/trzz1412/status/1883817431145308509`

**Left screenshot (Instagram / MurzOpinion) states:**

> “China-based Deepseek released R1, a reasoning model trained on a $5.6 million budget, outperforming ChatGPT-o1 in benchmarks, which according to Epoch AI, cost at least $41 million to train.”
>
> “Deepseek not only surpassed AIs made by Western labs, but also outperformed models from major Chinese tech companies such as Bytedance, Alibaba, Tencent, and Huawei, surprising many.”

The screenshot cites: “Source: How Much Does It Cost to Train Frontier AI Models? (Epoch AI)”.

**Right screenshot (X post) headline:**

> “Deepseek AI: The Open Source Revolution from China 🇨🇳”

Visible post text says that DeepSeek has “shaken up the AI world,” claims high performance at a fraction of the cost, characterizes DeepSeek as open source, contrasts this with OpenAI, and describes the development as a “game-changer.” The image below is a meme labeled “DeepSeek” and “OpenAI.”

#### Visual Content

**Type:** Two social-media screenshots

**Description:** The left panel is a black-background infographic about DeepSeek R1 training cost and benchmark performance. The right panel is an X post with commentary about DeepSeek and a “Batman slapping Robin” meme comparing DeepSeek and OpenAI.

**Educational purpose:** Illustrates how AI developments are discussed and simplified on social media, setting up the lecturer’s emphasis on deeper technical understanding.

#### Notes

> [REVIEW NOTE — Slide 6: The quantitative and comparative statements above are claims reproduced inside social-media screenshots. They are preserved from the slide and are not independently verified here.]

---

### Slide 7 — Kecerdasan Artifisial: *Have you heard of it?* — Math background and black-box solutions

#### Lecturer Content

- Deepseek was built by super smart guys with **top math background**.
- Don’t knock math~ It’s quite important.
- Nowadays a lot of *black-box solutions* are out there – using them does not make you an AI expert.

Source URL shown on the slide:

`https://x.com/hxiao/status/1882099204044239007`

The screenshot on the left begins with the question:

> “How is Deepseek going to make money?”

A reply by Han Xiao says, in part, that DeepSeek’s holding company is a quant company, that the people involved have strong mathematics backgrounds, and that they had access to many GPUs used for trading/mining purposes; the reply describes DeepSeek as a side project for making use of those GPUs.

#### Visual Content

**Type:** X post screenshot plus three lecturer takeaways

**Description:** A large screenshot of an X discussion appears on the left. On the right, the phrase **“top math background”** is emphasized in large red text, followed by the importance of mathematics and a warning about merely using black-box tools.

**Educational purpose:** Emphasizes that AI expertise requires underlying technical foundations rather than only familiarity with ready-made tools.

> [VISUAL REFERENCE REQUIRED — Slide 7: The second reply in the X screenshot is partially visible; use the original slide image for exact transcription of the full social-media thread.]

---

### Slide 8 — Global Stance on AI

#### Lecturer Content

The map legend reports:

- **Countries with published AI strategies: 32**
- **Countries developing AI strategies: 22**

Source shown on the slide:

**2021 AI Index Report Ch. 7** (`https://aiindex.stanford.edu`)

#### Visual Content

**Type:** World map

**Description:** Countries are shaded in two blue tones to distinguish those with published AI strategies from those developing AI strategies. Many countries remain in a dark background color outside the two highlighted categories.

**Educational purpose:** Shows that national AI strategies had become a global policy phenomenon by the period represented in the 2021 AI Index Report.

---

### Slide 9 — Kecerdasan Artifisial di Indonesia

#### Lecturer Content

The diagram places **VISI INDONESIA 2045** at the top and identifies **5 BIDANG PRIORITAS KECERDASAN ARTIFISIAL**:

1. Layanan Kesehatan
2. Reformasi Birokrasi
3. Pendidikan & Riset
4. Ketahanan Pangan
5. Mobilitas & Kota Cerdas

Below these are **4 AREA FOKUS**. The visible focus areas are:

- **RISET & INOVASI INDUSTRI**  
  “Menumbuhkembangkan ekosistem kolaborasi riset dan inovasi kecerdasan artifisial guna mengakselerasi reformasi birokrasi serta industri”
- **INFRASTRUKTUR & DATA**  
  “Mewujudkan ekosistem data dan infrastruktur yang mendukung kontribusi kecerdasan artifisial untuk kepentingan negara”
- **PENGEMBANGAN TALENTA**  
  “Menyiapkan talenta kecerdasan artifisial yang berdaya saing dan berkarakter”
- **ETIKA & KEBIJAKAN**  
  “Mewujudkan kecerdasan artifisial yang beretika sesuai dengan nilai-nilai Pancasila”

#### Visual Content

**Type:** Strategy/temple diagram

**Description:** A temple-shaped diagram uses a roof labeled “VISI INDONESIA 2045,” five pillars for priority AI sectors, horizontal blocks for focus areas, and a foundation labeled “ETIKA & KEBIJAKAN.”

**Educational purpose:** Summarizes the Indonesian national AI-strategy framework shown by the lecturer, linking priority sectors to research, infrastructure/data, talent, and ethics/policy.

> [VISUAL REFERENCE REQUIRED — Slide 9: The source/citation for this strategy graphic is not visible on the slide.]

---

## 3. Definisi Kecerdasan Artifisial

### Slide 10 — Apa itu Kecerdasan Artifisial?

#### Lecturer Content

**Apa itu Kecerdasan Artifisial?**

#### Visual Content

**Type:** Section-divider slide

**Description:** Minimal slide containing only the question “Apa itu Kecerdasan Artifisial?” under the section label “Definisi Kecerdasan Artifisial.”

#### Notes

> [TRACEABILITY NOTE: The next PDF page is labeled Slide 12. A displayed Slide 11 is not present in the source PDF.]

---

### Slide 12 (PDF page 11) — What is AI?

#### Lecturer Content

- **Q. What is artificial intelligence?**
- **A.** It is the science and engineering of **making intelligent machines**, especially intelligent computer programs.
- **Q. Yes, but what is intelligence?**
- **A.** Intelligence is the **computational part of the ability to achieve goals in the world**, performed by people, many animals and some machines.
- **Q. Isn’t there a solid definition of intelligence that doesn’t depend on relating it to human intelligence?**
- **A. Not yet.** The problem is that we cannot yet characterize in general what kinds of computational procedures we want to call intelligent.

#### Visual Content

**Type:** Quotation slide with photograph

**Description:** The text is accompanied by a black-and-white photograph of John McCarthy seated at a computer terminal. Key phrases are emphasized in red.

**Educational purpose:** Introduces McCarthy’s characterization of AI and the difficulty of defining intelligence itself.

#### Notes

Citation shown on the slide:

McCarthy, J. (2007). *What is artificial intelligence?*  
`http://jmc.stanford.edu/articles/whatisai/whatisai.pdf`

---

### Slide 13 (PDF page 12) — What is AI? – Thought vs. Behavior, Human vs. Rationality

#### Lecturer Content

The slide organizes AI definitions along two dimensions: **thought vs. behavior** and **human vs. rationality**.

| | Human | Rational |
|---|---|---|
| **Thinking** | **Thinking humanly** | **Thinking rationally** |
| **Acting** | **Acting humanly** | **Acting rationally** |

**Thinking humanly**

- “The exciting new effort to make computers think ... machines with minds, in the full and literal sense.” (Haugeland, 1985)
- “[The automation of] activities that we associate with human thinking, activities such as decision-making, problem solving, learning ...” (Bellman, 1978)

**Thinking rationally**

- “The study of mental faculties through the use of computational models.” (Charniak and McDermott, 1985)
- “The study of the computations that make it possible to perceive, reason, and act.” (Winston, 1992)

**Acting humanly**

- “The art of creating machines that perform functions that require intelligence when performed by people.” (Kurzweil, 1990)
- “The study of how to make computers do things at which, at the moment, people are better.” (Rich and Knight, 1991)

**Acting rationally**

- “Computational Intelligence is the study of the design of intelligent agents.” (Poole et al., 1998)
- “AI ...is concerned with intelligent behavior in artifacts.” (Nilsson, 1998)

#### Visual Content

**Type:** Four-quadrant definition matrix

**Description:** The slide is divided into four quadrants by red lines. Each quadrant contains a heading and quotations representing a definition tradition in AI.

**Educational purpose:** Establishes four classic approaches to defining AI: thinking humanly, thinking rationally, acting humanly, and acting rationally.

---

### Slide 14 (PDF page 13) — Thinking Humanly: Cognitive modeling

#### Lecturer Content

- Menjawab “apakah mesin berpikir seperti manusia?” perlu jawaban dari “bagaimana manusia berpikir?”
  - Introspeksi: “catch our own thoughts as they go by”
  - Eksperimen psikologi: observasi perilaku manusia
  - *Brain imaging*: observasi otak manusia.
- *Cognitive science*: model komputasi dari KA + psikologi eksperimental → teori akal manusia.
  - Contoh: model *neuroimaging* → model komputasi *convolutional neural networks*.
- **Kritik (di awal)** – kebingungan: model KA *oke*, maka teori akal *oke*; atau, sebaliknya?
  - Sekarang, kedua klaim dipisah.

#### Visual Content

**Type:** Labeled human-brain diagram

**Description:** A lateral brain diagram identifies several cortical areas. It serves as an example of direct observation of the human brain used in cognitive modeling.

**Educational purpose:** Connects the “thinking humanly” approach with introspection, experimental psychology, neuroimaging, and computational cognitive models.

#### Notes

Image attribution shown on the slide:

“Original uploader: RobinH at English Wikibooks., CC BY-SA 3.0, via Wikimedia Commons.”

---

### Slide 15 (PDF page 14) — Acting humanly: Turing Test

#### Lecturer Content

- *Thought experiment* to avoid question “Can a machine think?”
- C (tester) bertanya ke A dan B beberapa pertanyaan.
- A berusaha mengelabui C hingga C mengira A manusia.
- A harus menampilkan perilaku cerdas, menyamai performa manusia dalam tugas-tugas kognitif:
  - Pemrosesan bahasa (komunikasi)
  - Representasi pengetahuan
  - Penalaran otomatis
  - Adaptasi ke situasi baru (*machine learning*)
- Pada *total Turing test*, juga perlu:
  - *Computer vision* (persepsi objek)
  - Robotika (*act upon objects*)
- **Kritik:** Pesawat terbang sukses tidak dengan meniru bagaimana burung terbang. Jadi sukses di KA tidak dengan meniru bagaimana manusia bertindak.

#### Visual Content

**Type:** Turing Test interaction diagram

**Description:** “Machine A” and “Human B” communicate with “Tester C.” The tester is shown separately and attempts to distinguish the machine from the human based on answers.

**Educational purpose:** Illustrates the behavioral criterion behind the Turing Test and the capabilities required to imitate human performance.

#### Notes

Image attribution shown on the slide:

“Image by Juan Alberto Sánchez Margallo, CC BY 2.5, via Wikimedia Commons.”

---

### Slide 16 (PDF page 15) — Thinking Rationally: “Laws of Thought”

#### Lecturer Content

- Rasionalitas: “*the right thinking*”
  - Penalaran yang tak terbantahkan
- Wujud: pendekatan **logika**
  - *Classical propositional and first-order logic*
  - Bahasa logika probabilistik untuk menangani ketidakpastian
  - Secara teori, menghasilkan model rasionalitas mencakup: informasi persepsi mentah → pemahaman tentang dunia → prediksi masa depan
- **Kritik: TIDAK menghasilkan perilaku cerdas**
  - Manusia tidak selalu rasional
  - Tak semua hal dapat diekspresikan dengan logika
  - Tidak *scalable*.

#### Equations

The slide gives four example rules of inference:

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

#### Visual Content

**Type:** Text slide with logic-rule callout

**Description:** A pale-yellow box on the right contains the four formal inference patterns. The word “logika” and the “Kritik” label are highlighted in red.

**Educational purpose:** Shows the rational-thought approach to AI using formal logic, while noting its limitations.

---

### Slide 17 (PDF page 16) — Acting rationally: Pendekatan agen rasional

#### Lecturer Content

- **“Do the right thing”** – Bertindak untuk mencapai hasil (yang diharapkan) terbaik.
- Mencakup “thinking rationally”, tapi juga perilaku yang muncul tanpa penalaran (mis: refleks jika menyenggol kompor panas).
- Lebih dapat dimodelkan secara matematis (dibandingkan yang lain) sehingga dapat dikembangkan secara ilmiah dan menjadi **model standar KA**.
- *The right thing* dinyatakan dengan tujuan yang disuplai ke agen.
  - meminimalkan fungsi biaya, memaksimalkan *reward / utility*
- *Perfect rationality* (selalu mengambil tindakan yang terbaik) bisa tidak *feasible* di lingkungan kompleks.
  - Perlu memutuskan tindakan terbaik dalam batasan/*constraint* komputasi tertentu.

#### Visual Content

**Type:** Photograph of humanoid/fictional robots

**Description:** A photograph of two recognizable science-fiction-style robots is placed on the right as an illustration of agents.

**Educational purpose:** Introduces rational agents as the standard mathematical framework used in AI.

#### Notes

Source URL shown on the slide:

`https://www.flickr.com/photos/nationalmuseumofamericanhistory/8682679829`


## 4. Agen Cerdas

### Slide 18 (PDF page 17) — Agen Cerdas

#### Lecturer Content

**Agen Cerdas**

#### Visual Content

**Type:** Section-divider slide

**Description:** Minimal slide with the section title “Agen Cerdas.”

**Educational purpose:** Marks the transition from definitions of AI to intelligent-agent concepts.

---

### Slide 19 (PDF page 18) — Agent Design

#### Lecturer Content

- *Percept* $\mathcal{P}$ adalah konten persepsi melalui sensor.
- *Percept sequence* $\mathcal{P}^*$ adalah *complete history* berisi seluruh hasil persepsi yang diperoleh agen.
- *Agent function* dapat dinyatakan secara matematis sebagai $f: \mathcal{P}^* \to \mathcal{A}$ yang memetakan *percept sequence* $\mathcal{P}^*$ ke *action* $\mathcal{A}$.
- *Agent program* adalah implementasi konkrit fungsi $f$ pada sistem tertentu.

#### Equations

$$
f: \mathcal{P}^* \to \mathcal{A}
$$

where the function maps a percept sequence to an action.

#### Visual Content

**Type:** Agent-environment block diagram

**Description:**

- An **Agent** box contains:
  - **Sensor**
  - **Agent function (program)**
  - **Actuator**
- The agent is connected to an **Environment**.
- The environment sends **Percepts** to the sensor.
- The actuator sends **Actions** to the environment.
- Internal arrows connect sensor → agent function → actuator.

**Educational purpose:** Defines the basic architecture and mathematical abstraction of an intelligent agent.

---

### Slide 20 (PDF page 19) — Rasional = “Do the right thing”????

#### Lecturer Content

- Dari mana tahu agen sudah “do the right thing”?
- Gunakan **ukuran kinerja (*performance measure*)** pada keadaan lingkungan.
- Fokus pada efek lingkungan yang diinginkan, bukan pada *action* agen.
  - Apa akibatnya jika kinerja robot *vacuum cleaner* dinilai dengan jumlah debu yang dibersihkan dalam 8 jam?
- Rasionalitas → *expected performance*.

#### Example

The lecturer uses a **robot vacuum cleaner** to motivate the design of performance measures. A performance measure that only counts the amount of dust collected over eight hours may have unintended consequences, because it evaluates an environmental outcome rather than simply whether the robot executed a particular action.

#### Visual Content

**Type:** Photograph of a robot vacuum cleaner

**Description:** A robot vacuum cleaner is shown operating in a home, near a cat.

**Educational purpose:** Provides an intuitive example for discussing how to define rational performance.

#### Notes

Photo credit shown on the slide: **Photo by YoonJae Baik on Unsplash**.

---

### Slide 21 (PDF page 20) — Lingkup Tugas *Agent*

#### Lecturer Content

- Bergantung pada tugas/*task* yang akan dilakukan agen.
- Deskripsi lingkungan = **PEAS** (contoh pengemudi taksi):
  - **Performance** = ukuran kinerja, mis: aman, cepat, tidak melanggar rambu lalin, nyaman bagi penumpang
  - **Environment** = lingkungan, mis: jalan, rambu lalin, kendaraan lain, penumpang
  - **Actuators**, mis: kemudi, gas, rem, klakson
  - **Sensors**, mis: kamera, sonar, speedometer, GPS

#### Examples

**PEAS for a taxi driver agent:**

| PEAS component | Lecturer examples |
|---|---|
| Performance | aman, cepat, tidak melanggar rambu lalin, nyaman bagi penumpang |
| Environment | jalan, rambu lalin, kendaraan lain, penumpang |
| Actuators | kemudi, gas, rem, klakson |
| Sensors | kamera, sonar, speedometer, GPS |

#### Notes

The slide uses “rambu lalin” as an abbreviation for traffic signs/rules; the wording is preserved.

---

### Slide 22 (PDF page 21) — Environment Types

#### Lecturer Content

| Environment property | Description on slide |
|---|---|
| **Fully observable (vs. partially observable)** | Sensor memberikan akses seluruh lingkungan secara lengkap. |
| **Single-agent (vs. multiagent)** | Agen bekerja sendiri (tanpa kehadiran agen lain) di lingkungan; bisa bersifat kompetitif, atau kooperatif. |
| **Deterministic (vs. nondeterministic)** | Keadaan lingkungan selanjutnya dapat ditentukan sepenuhnya dengan pasti hanya berdasarkan keadaan lingkungan sekarang dan tindakan yang dilakukan agen. Disebut stokastik jika ada nilai peluang yang dinyatakan secara eksplisit. |
| **Episodic (vs. sequential)** | Pengalaman agen terbagi ke dalam episode-episode atomik yang masing-masing terdiri dari sepasang *percept* dan *action*, dan pilihan *action* di satu episode tidak berpengaruh pada pilihan *action* di episode yang lain. |
| **Static (vs. dynamic)** | Lingkungan tidak berubah pada saat agen sedang dalam “berpikir”. *Semi-dynamic*: lingkungan tak berubah, tapi skor kinerja dapat berubah. |
| **Discrete (vs. continuous)** | Berlaku pada banyaknya *state*, kemungkinan *percepts*, pilihan *actions*, dan bagaimana variabel waktu dimodelkan. |
| **Known (vs. unknown)*** | Lebih pada pengetahuan agen (atau perancangnya) tentang “hukum fisik” dari lingkungan. *Known*: semua *outcome* atau *outcome probabilities* dapat diketahui dari setiap kemungkinan *action*. |

#### Visual Content

**Type:** Two-column comparison table

**Description:** The left column lists pairs of environment properties; the right column defines the first property in each pair and, where relevant, explains the contrasting condition.

**Educational purpose:** Provides the standard dimensions for characterizing an agent’s task environment.

---

### Slide 23 (PDF page 22) — Environment Examples

#### Lecturer Content

The slide compares three environments:

| Property | Chess with a clock | Chess without a clock | Taxi driving |
|---|---|---|---|
| Fully observable? | Yes. | Yes. | No (partial). |
| Single agent? | No. | No. | No. |
| Deterministic? | Yes. | Yes | No. |
| Episodic? | No. | No. | No. |
| Static or (semi) dynamic? | Semi-dynamic. | Yes. | No. |
| Discrete? | Yes. | Yes. | No. |

Additional points:

- Sifat “known/unknown” bukan sepenuhnya sifat lingkungan sendiri. Pemain catur bekerja pada *known environment* karena semua aturan lingkungan diketahui.
- *Known environment* dapat bersifat *partially observable* (contoh: permainan Solitaire).
- *Unknown environment* dapat bersifat *fully observable* (contoh: pada *video game* baru, layar menunjukkan seluruh keadaan lingkungan, tapi kita belum tahu apa yang terjadi ketika tombol *controller* ditekan).

#### Visual Content

**Type:** Comparison table plus explanatory bullets

**Description:** The table contrasts chess with and without a clock against taxi driving across environment dimensions.

**Educational purpose:** Applies the abstract environment taxonomy to concrete tasks.

---

### Slide 24 (PDF page 23) — Environment Exercise

#### Lecturer Content

The slide provides a blank exercise table headed **`<Fill something here>`** with the following prompts:

- Fully observable?
- Single agent?
- Deterministic?
- Episodic?
- Static or (semi-)dynamic?
- Discrete?

The slide also states:

- Dunia nyata (*real world*) bersifat **partially observable, multi-agent, non-deterministic, sequential, dynamic, continuous, dan unknown**.

#### Visual Content

**Type:** Blank classification exercise table

**Description:** Students are expected to choose a task/environment and fill in the environment properties.

**Educational purpose:** Reinforces the environment taxonomy through classification practice.

---

### Slide 25 (PDF page 24) — Tipe-tipe Dasar Program *Agent*

#### Lecturer Content

- *Simple reflex agent*
- *Model-based reflex agent*
- *Goal-based agent*
- *Utility-based agent*

These can be changed into / implemented as a **Learning Agent**.

#### Visual Content

**Type:** Concept list with bracket/annotation

**Description:** The four basic agent-program types are listed on the left. A bracket on the right points to the phrase “Bisa diubah menjadi Learning Agent.”

**Educational purpose:** Introduces the major agent-program architectures that are expanded in the following slides.

---

### Slide 26 (PDF page 25) — Simple Reflex Agent

#### Lecturer Content

- Perilaku refleks sederhana
- Kecerdasan terbatas
- Bekerja baik hanya jika lingkungan *fully observable*.

**Contoh condition-action-rule:**

> `if car-in-front-is-braking, then initiate braking`

#### Pseudocode / Rule

```text
if car-in-front-is-braking,
then initiate braking
```

#### Visual Content

**Type:** Simple reflex agent architecture diagram

**Description:**

- **Sensors** receive **Percepts** from the environment.
- The percept is represented as **“What the world is like now.”**
- A **Condition-action rules** component contributes to **“What action I should do now.”**
- **Actuators** send the selected **Actions** back to the environment.

**Educational purpose:** Shows that a simple reflex agent chooses an action directly from the current percept using condition-action rules, without maintaining an internal world model.

#### Notes

Image source shown on the slide: **DDSniper, CC0, via Wikimedia Commons**.

---

### Slide 27 (PDF page 26) — Model-based Reflex Agent

#### Lecturer Content

- *State internal* (sederhana/kompleks) merekam (sebagian) keadaan lingkungan melalui:
  - model transisi lingkungan (efek *action* atau perubahan lingkungan independen)
  - model sensor (refleksi keadaan lingkungan yang tertangkap sebagai *percept*)
- “What the world is like now” → “best guess(es)” di lingkungan yang *partially observable*.

Examples shown in red:

- “Putar setir ke kanan” → “mobil belok kanan”
- “Kamera basah” → “Droplet di citra yang tertangkap”

#### Visual Content

**Type:** Model-based reflex agent architecture diagram

**Description:**

- A **State** component stores information about the world.
- The state is updated using:
  - **How the world evolves**
  - **What my actions do**
  - new percepts from the sensors
- The updated state feeds **“What the world is like now.”**
- **Condition-action rules** are then used to select **“What action I should do now.”**
- The action is sent through **Actuators** to the environment.

**Educational purpose:** Shows how an internal model/state allows a reflex agent to operate when the environment is only partially observable.

#### Notes

Image source shown on the slide: **DDSniper, CC0, via Wikimedia Commons**.

---

### Slide 28 (PDF page 27) — Goal-based Agent

#### Lecturer Content

- Model + Informasi *goal* yang diinginkan.
- Pemilihan *action* mempertimbangkan *goal* (masa depan).
- Pencarian sekuens *action* menuju *goal* melalui **search** atau **planning**.

#### Visual Content

**Type:** Goal-based agent architecture diagram

**Description:**

The diagram extends the model-based agent with:

- current **State**
- a prediction block: **“What it will be like if I do action A”**
- explicit **Goals**
- a decision block: **“What action I should do now”**

The state is maintained using “How the world evolves” and “What my actions do,” while the goals influence selection among predicted future outcomes.

**Educational purpose:** Shows that a goal-based agent evaluates future consequences and searches/plans toward a desired state rather than responding only by reflex.

#### Notes

Source shown on the slide: **DDSniper, CC0, via Wikimedia Commons**.

---

### Slide 29 (PDF page 28) — Utility-based Agent

#### Lecturer Content

- Banyak cara menuju *goal* → pilih yang paling disukai.
  - Lebih cepat, lebih aman, lebih murah, dll.
- *Performance measure* mengukur keadaan lingkungan yang paling disukai.
- *Utility function*: internalisasi ukuran kinerja dari perspektif agen.
- Pilih *action* yang memaksimalkan *expected utility*.
- Bisa menangani lingkungan yang *partially observable* dan nondeterministik.

#### Visual Content

**Type:** Utility-based agent architecture diagram

**Description:**

The architecture includes the model-based state and future-state prediction used by a goal-based agent, but adds:

- a **Utility** component
- the question **“How happy I will be in such a state”**
- action selection based on the desirability of predicted states

**Educational purpose:** Explains how utility allows an agent to compare multiple goal-achieving alternatives, including under uncertainty.

#### Notes

Source shown on the slide: **DDSniper, CC0, via Wikimedia Commons**.

---

### Slide 30 (PDF page 29) — Learning Agent

#### Lecturer Content

- *Learning agent* lebih pada bagaimana agen terwujud, bukan pada cara memilih *action*.
- Semua (*model-based, goal-based, utility-based*) agen dapat dirancang sebagai *learning agent*.
- Komponen:
  - **Performance element**: bertugas memilih *action*
  - **Learning element**: bertugas memperbaiki *state* internal agen dengan bantuan *critic*.
  - **Problem generator**: menyarankan *action* eksploratif agar tidak “itu-itu” saja.

#### Visual Content

**Type:** Learning-agent architecture diagram

**Description:** The agent contains four named components:

- **Performance element** — produces actions/effectors.
- **Learning element** — receives knowledge and changes the performance element.
- **Critic** — receives percepts and a **Performance Standard**, then sends **feedback** to the learning element.
- **Problem Generator** — receives learning goals and sends **experiments** to the performance element.

The environment supplies **percepts** through sensors and receives **actions** through effectors.

**Educational purpose:** Separates action selection from mechanisms for improving behavior through feedback and exploration.

#### Notes

Source shown on the slide: **Utkarshraj Atmaram, Public domain, via Wikimedia Commons**.


## 5. Sejarah Singkat KA

### Slide 31 (PDF page 30) — Sejarah Singkat KA

#### Lecturer Content

**Sejarah Singkat KA**

#### Visual Content

**Type:** Section-divider slide

**Description:** Minimal section title slide.

**Educational purpose:** Marks the transition to a brief history of AI.

---

### Slide 32 (PDF page 31) — The history of AI

#### Lecturer Content

The slide reproduces an external timeline titled **“The history of AI”**:

**1940s-1950s — Foundations of AI**

> “In the 1940s, the first artificial neurons were conceptualised. The 1950s introduced us to the Turing Test and the term ‘Artificial Intelligence.’”

**1960s-1970s — Early Development**

> “The 60s and 70s brought the birth of ELIZA, simulating human conversation, and Dendral, the first expert system, showcasing the early potentials of AI.”

**1980s — AI Winter & Expert Systems**

> “The 80s faced reduced AI funding but saw the inaugural National Conference on AI. The backpropagation concept rejuvenated neural networks.”

**1990s — Revival & Emergence of ML**

> “The 90s witnessed IBM’s Deep Blue defeating chess champion Garry Kasparov and the inception of the LOOM project, laying the foundations for GenAI.”

**2000s — The Genesis of Generative AI**

> “Geoffrey Hinton propelled deep learning into the limelight, steering AI toward relentless growth and innovation.”

**2010s — Rise of AI**

> “In 2011, IBM Watson won ‘Jeopardy!’, highlighting AI’s language skills. The 2010s marked major AI milestones, including pioneering work in image recognition and the birth of GANs in 2014, followed by OpenAI’s founding in 2015.”

**2020s — GenAI Reaches New Horizons**

> “At the start of this decade, we’ve seen significant strides in GenAI, notably with OpenAI’s GPT-3 and DALL-E. 2023 welcomed advanced tools like ChatGPT-4 and Google’s Bard, alongside Microsoft’s Bing AI, enhancing accessibility and reliability of information.”

#### Visual Content

**Type:** Two-column vertical timeline infographic

**Description:** Each decade block includes a heading, a short paragraph, and an illustrative image (e.g., Alan Turing, an early-computing screenshot, a winter scene, chess, Geoffrey Hinton, IBM Watson, and an OpenAI/ChatGPT image).

**Educational purpose:** Gives a compressed decade-by-decade overview of AI history from the 1940s through the 2020s.

#### Notes

Source URL printed on the slide:

`https://www.calls9.com/blogs/the-history-of-ai-a-timeline-from-1940-to-2023`

> [REVIEW NOTE — Slide 32: The historical wording above is transcribed from the external infographic embedded in the lecturer’s slide. Some claims or labels (for example, the “LOOM project” statement and the periodization of generative AI) may require independent historical verification if used beyond faithful slide reconstruction.]

---

## 6. Taksonomi dan Cabang KA

### Slide 33 (PDF page 32) — Taksonomi KA

#### Lecturer Content

**Taksonomi KA**

#### Visual Content

**Type:** Section-divider slide

**Description:** Minimal title slide for the taxonomy/branches section.

**Educational purpose:** Marks the transition to ways of categorizing AI.

---

### Slide 34 (PDF page 33) — KA berdasarkan Lingkup Tugas (*Task Scope*)

#### Lecturer Content

| | Artificial (Narrow) Intelligence – Weak AI | Artificial General Intelligence – Strong AI |
|---|---|---|
| **Ide** | Menangani hanya satu tugas tertentu saja. Kecerdasan hanya terbatas pada tugas tersebut, dan tidak mampu melakukan tugas-tugas kompleks seperti kecerdasan manusia. | Dapat menangani semua tugas kompleks yang dilakukan manusia. Mampu menyamai (mungkin melebihi?) kecerdasan manusia. |
| **Area penerapan** | Bekerja baik dalam kasus yang mana mesin harus melakukan tugas-tugas berulang secara otomatis. | Mesin harus mampu berpikir, melakukan penalaran, dan semua fungsi yang dapat dilakukan manusia. |
| **Sifat tugas** | Berulang/repetitive, tidak melibatkan pengambilan keputusan secara otonom. | Melakukan pengambilan keputusan dan analisis secara otonom. |
| **Contoh** | Chatbot reservasi restoran, sistem klasifikasi aplikasi kredit di bank, | ??? (belum ada; masih dalam riset) |

#### Visual Content

**Type:** Two-column comparison table

**Description:** Narrow/Weak AI and General/Strong AI are compared across idea, application area, task nature, and examples.

**Educational purpose:** Distinguishes task-specific AI from the concept of human-level general intelligence.

---

### Slide 35 (PDF page 34) — Artificial General Intelligence (AGI)

#### Lecturer Content

- AGI is a type of intelligence that is flexible and general that can outperform humans at most (if not all) intellectual tasks.
- ChatGPT is as an early yet still incomplete version of AGI.

#### Visual Content

**Type:** AGI capability diagram

**Description:** A central hexagon labeled **Artificial General Intelligence** is surrounded by six capability labels:

- Creativeness
- Abstract Thinking
- Transfer Learning
- Following common Sense in making decision
- Comprehension of cause and effects
- Background Knowledge

**Educational purpose:** Depicts the slide’s conception of broad, transferable capabilities associated with AGI.

#### Notes

Source URLs shown on the slide:

- `https://insights.daffodilsw.com/blog/the-emergence-of-artificial-general-intelligence-a-breakthrough-in-intelligent-systems`
- `https://cloud.google.com/discover/what-is-artificial-general-intelligence?hl=en`

> [REVIEW NOTE — Slide 35: The statement “ChatGPT is as an early yet still incomplete version of AGI” is preserved verbatim from the slide and is a claim that may require qualification or verification.]

---

### Slide 36 (PDF page 35) — KA berdasarkan ranah/domain permasalahan

#### Lecturer Content

- Contoh subbidang KA berdasarkan ranah permasalahan:
  - *natural language processing* – fokus pada teks bahasa,
  - *speech processing* – fokus pada sinyal bicara
  - *image processing/computer vision* – fokus pada citra/video,
  - *knowledge representation and reasoning* – fokus pada representasi pengetahuan berbasis bahasa logika formal
  - dan lain-lain …
- Banyak ranah permasalahan KA yang membutuhkan paduan dari beberapa subbidang tersebut.
  - pengenalan bahasa isyarat – dari citra/video ke teks bahasa, dan sebaliknya

#### Educational purpose

Shows that AI can also be categorized by problem domain, and that real applications often combine multiple subfields.

---

### Slide 37 (PDF page 36) — AI Taxonomy

#### Lecturer Content

- You can always find someone to debate you on this.

#### Visual Content

**Type:** Nested/overlapping taxonomy diagram

**Description:**

- A large oval labeled **Artificial Intelligence (AI)** contains:
  - **Symbolic AI**
  - **Machine Learning**
- A smaller **Deep Learning** circle is placed inside the Machine Learning region.
- Symbolic AI and Machine Learning visually overlap within AI.

**Educational purpose:** Provides a deliberately simplified taxonomy while explicitly warning that taxonomic boundaries are debatable.

---

### Slide 38 (PDF page 37) — AI, Big Data and Data Science

#### Lecturer Content

The visual labels the following concepts:

- Artificial Intelligence
- Machine Learning
- Neural Networks
- Deep Learning
- Data Science
- Big Data

#### Visual Content

**Type:** Overlapping and nested set diagram

**Description:**

- **Artificial Intelligence** is shown as a large circle.
- **Machine Learning** is nested within AI.
- **Neural Networks** is nested within Machine Learning.
- **Deep Learning** is nested within Neural Networks.
- Separate large circles labeled **Data Science** and **Big Data** overlap each other and overlap portions of the AI/ML hierarchy.

**Educational purpose:** Illustrates that AI, machine learning, neural networks, and deep learning form nested concepts in this diagram, while Data Science and Big Data overlap but are not identical to the AI hierarchy.

---

## 7. Konsep Dasar Pemelajaran Mesin

### Slide 39 (PDF page 38) — Konsep Dasar Pemelajaran Mesin

#### Lecturer Content

**Konsep Dasar Pemelajaran Mesin**

#### Visual Content

**Type:** Section-divider slide

**Description:** Minimal title slide introducing the machine-learning section.

---

### Slide 40 (PDF page 39) — Traditional Programming vs. Machine Learning

#### Lecturer Content

The slide contrasts two computational flows.

**Traditional programming:**

```text
Data + Program -> Computer -> Output
```

**Machine Learning:**

```text
Data + Output -> Computer -> Program
```

#### Visual Content

**Type:** Two process diagrams

**Description:** In the top diagram, **Data** and **Program** enter a **Computer**, which produces **Output**. In the bottom diagram, **Data** and **Output** enter a **Computer**, which produces a **Program**.

**Educational purpose:** Presents machine learning as learning a program/model from data and desired outputs, in contrast to executing a manually supplied program on data.

---

### Slide 41 (PDF page 40) — Types of Machine Learning

#### Lecturer Content

The infographic divides **Machine Learning** into three major types:

1. **Unsupervised Learning**
   - **Dimensionality Reduction**
     - Meaningful Compression
     - Structure Discovery
     - Big data Visualisation
     - Feature Elicitation
   - **Clustering**
     - Recommender Systems
     - Targetted Marketing
     - Customer Segmentation
2. **Supervised Learning**
   - **Classification**
     - Image Classification
     - Customer Retention
     - Identity Fraud Detection
     - Diagnostics
   - **Regression**
     - Advertising Popularity Prediction
     - Weather Forecasting
     - Market Forecasting
     - Estimating life expectancy
     - Population Growth Prediction
3. **Reinforcement Learning**
   - Real-time decisions
   - Game AI
   - Robot Navigation
   - Skill Acquisition
   - Learning Tasks

#### Visual Content

**Type:** “Types of ML/DL” concept infographic

**Description:** A central “Machine Learning” node branches into Unsupervised Learning, Supervised Learning, and Reinforcement Learning. Each branch contains subtypes and example applications.

**Educational purpose:** Gives an overview of major machine-learning paradigms and representative tasks/applications.

#### Notes

A small source credit at the bottom reads approximately: **“source nvidia via @mikeguindazzi”**.

---

### Slide 42 (PDF page 41) — Supervised (Inductive) learning

#### Lecturer Content

- Diberikan data training, contoh respons yang benar diberikan ke algoritma.
- Algoritmanya melakukan generalisasi sehingga dapat memberikan respon yang benar untuk semua kemungkinan input (termasuk yang tidak termasuk dalam data training.

#### Visual Content

**Type:** “How Supervised Machine Learning Works” infographic

**Description:**

- **Step 1:** “Provide the machine learning algorithm categorized or ‘labeled’ input and output data from it learn.” The illustration shows labeled examples of cats.
- **Step 2:** “Feed the machine new, unlabeled information to see if it gets new data appropriately. If not, continue refining the algorithm.” The illustration shows a new input being assigned to cats/non-cats.
- The lower portion identifies problem types to which supervised learning is suited:
  - **Classification** — sorting items into categories
  - **Regression** — identifying real values (dollars, weight, etc.)

**Educational purpose:** Shows that supervised learning uses labeled input/output examples and generalizes to unseen inputs.

#### Notes

Source URLs shown on the slide:

- `https://medium.com/@jorgesleonel/supervised-learning-c16823b00c13`
- `https://www.lotus-qa.com/data-annotation-guide/`

> [REVIEW NOTE — Slide 42: The final parenthesis in the lecturer bullet “(termasuk yang tidak termasuk dalam data training.” is unmatched on the slide; the wording is preserved rather than silently repaired.]

---

### Slide 43 (PDF page 42) — Classification

#### Lecturer Content

- **Data:** Himpunan records (atau samples, atau instances) yang terdiri dari:
  - **attributes:** $A_1, A_2, \ldots, A_k$.
  - **class:** setiap sample diberi label dengan kelas tertentu
- **Goal:** mempelajari *classification model* dari data yang dapat digunakan untuk memprediksi kelas dari instances baru yang belum diketahui kelasnya.
- Prediksi bernilai *discrete*.

#### Worked Example

**Problem**

Contoh: memprediksi seseorang beli komputer atau tidak.

**Given**

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

**Result / learning target**

Learn a classification model that predicts the discrete class **Buys computer? = yes/no** for new instances.

#### Visual Content

**Type:** Classification definition plus labeled training-data table

**Description:** The right-side table highlights several rows in red and circles the target column **“Buys computer?”**, visually emphasizing the class label to be predicted.

**Educational purpose:** Demonstrates the structure of a supervised classification dataset: input attributes plus a discrete class label.

---

### Slide 44 (PDF page 43) — Regression

#### Lecturer Content

- **Klasifikasi** mencoba memprediksi **kelas** dari suatu instance data, sedangkan **regresi** mencoba memprediksi suatu **nilai (bilangan continues)**.

#### Worked Example

**Problem**

Contoh: **Memprediksi Harga Mobil Bekas**

**Given**

The slide shows a used-car dataset. The final column, **price**, is the regression target.

| brand | model | year | miles | Horse power | torque | engine_capacity | fuel_capacity | num_cylinder | num_seat | num_owners | price |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Chevrolet | Volt LT | 2019 | 27173 | 149 | 294 | 15 | 89 | 4 | 5 | 3 | 25655 |
| Hyundai | Elantra SE | 2017 | 76941 | 146 | 132 | 2 | 14 | 4 | 5 | 2 | 15590 |
| Ford | Focus | 2014 | 97027 | 159 | 146 | 2 | 124 | 4 | 5 | 3 | 13590 |
| Honda | Civic | 2016 | 95396 | 158 | 138 | 15 | 124 | 4 | 5 | 2 | 20590 |
| Hyundai | Elantra SE | 2019 | 28405 | 147 | 132 | 2 | 14 | 4 | 5 | 3 | 16787 |
| Honda | Civic | 2016 | 61459 | 158 | 138 | 2 | 124 | 4 | 5 | 2 | 18277 |
| Subaru | Legacy | 2022 | 6811 | 182 | 176 | 25 | 185 | 4 | 5 | 1 | 33777 |
| Honda | Clarity | 2018 | 29674 | 212 | 99 | 15 | 7 | 4 | 5 | 1 | 26999 |
| Volkswagen | Jetta | 2019 | 25044 | 147 | 184 | 14 | 132 | 4 | 5 | 1 | 22491 |
| Volkswagen | Jetta | 2017 | 26215 | 150 | 184 | 14 | 145 | 4 | 5 | 2 | 17500 |
| Honda | Civic | 2015 | 25939 | 143 | 129 | 18 | 132 | 4 | 5 | 1 | 19450 |
| Honda | Civic | 2019 | 32270 | 174 | 162 | 15 | 124 | 4 | 5 | 1 | 22688 |
| Honda | Civic | 2018 | 19950 | 158 | 138 | 2 | 124 | 4 | 5 | 1 | 22988 |
| Honda | Accord | 2020 | 19719 | 192 | 192 | 15 | 148 | 4 | 5 | 1 | 26988 |
| Honda | Civic | 2020 | 16076 | 174 | 162 | 15 | 124 | 4 | 5 | 1 | 24498 |
| Subaru | Impreza | 2019 | 28214 | 152 | 145 | 2 | 132 | 4 | 5 | 1 | 22360 |

**Result / learning target**

Predict the continuous **price** value rather than a discrete class.

#### Visual Content

**Type:** Regression definition plus tabular used-car dataset

**Description:** The **price** header is circled in red to identify the numerical target variable.

**Educational purpose:** Contrasts regression with classification using a concrete numerical prediction task.

#### Notes

> [REVIEW NOTE — Slide 44: Some dataset headers and numeric fields are visually compressed (for example `engine_capacity`, `fuel_capacity`, and values such as `15`, `89`, `124`). They are transcribed exactly as displayed/extracted; punctuation such as decimal points, if intended in the source dataset, is not added. The lecturer also uses the phrase “bilangan continues,” which is preserved verbatim.]

---

### Slide 45 (PDF page 44) — Unsupervised Learning

#### Lecturer Content

- Diberikan data training, contoh respons yang benar tidak diberikan ke algoritma.
- Algoritmanya mengidentifikasi kemiripan antar input sehingga yang mirip akan dikelompokkan (*clustered*) bersama.

#### Visual Content

**Type:** “How Unsupervised Machine Learning Works” infographic

**Description:**

- **Step 1:** provides uncategorized/unlabeled input data to a machine-learning algorithm.
- **Step 2:** observes and learns from patterns the machine identifies.
- The illustration shows mixed animal images being separated into **Similar Group 1** and **Similar Group 2**.
- A right-hand panel lists problems to which it is suited:
  - **Clustering** — identifying similarities in groups
  - **Anomaly Detection** — identifying abnormalities in data

**Educational purpose:** Shows unsupervised learning as pattern discovery without supplied correct-response labels.

#### Notes

Source shown on the slide:

`https://www.lotus-qa.com/data-annotation-guide/`

---

### Slide 46 (PDF page 45) — Clustering: Fraud Detection

#### Lecturer Content

**Clustering: Fraud Detection**

No additional lecturer bullet text is shown; the slide communicates through example diagrams.

#### Visual Content

**Type:** Fraud/anomaly-detection workflow and clustering scatterplots

**Description:**

- **Left workflow:** “Anomaly Detection for Potential Frauds.” Inputs include:
  - Timing Metrics (Total Service Time), Item Count
  - Business + Customer + 3rd party data attributes
  - Time Features (Time, Daypart, Event)
- These feed an **Anomaly Detection** process containing **Machine learning Models (Unsupervised)** and **Explainability**.
- The output is **Identify Anomalous Data Points (Accounts / Transactions / Restaurants / Delivery Patterns etc.)**.
- A feedback arrow is labeled **Feedback for Active Learning**.
- **Upper-right plot:** labeled **DBSCAN for Anomaly Detection**, showing several dense clusters and isolated points.
- **Lower-right plot:** captioned **Fig 6: Anomaly Detection with K-Means Clustering**, showing clusters and points marked as normal data/noise.

**Educational purpose:** Gives fraud detection as an application of clustering and unsupervised anomaly detection.

#### Notes

Source URLs shown on the slide:

- `https://blog.gopenai.com/unsupervised-fraud-detection-algorithms-detecting-the-unknown-9075b4447c68`
- `https://viso.ai/computer-vision/fraud-detection-using-computer-vision/`

> [VISUAL REFERENCE REQUIRED — Slide 46: Fine-grained labels inside the embedded diagrams are small; use the original slide image if pixel-level reproduction of every embedded label is needed.]

---

### Slide 47 (PDF page 46) — Key Elements of Machine Learning

#### Lecturer Content

- There are a good number of machine learning algorithms in use by data scientists today. In fact, some research indicates that there are perhaps tens of thousands. In addition, hundreds of new algorithms are put forward for use every year.
- Based on popular opinion, all machine learning algorithms today are made up of three components:
  - **Representation:** what the model looks like; how knowledge is represented.
  - **Evaluation:** how good models are differentiated; how programs are evaluated.
  - **Optimization:** the process for finding good models; how programs are generated.

#### Visual Content

**Type:** Three-component funnel/overlap diagram

**Description:** Three overlapping circles labeled **Representation**, **Evaluation**, and **Optimization** flow downward into the word **Learning**.

**Educational purpose:** Introduces a general framework for thinking about machine-learning algorithms as a combination of representation, evaluation, and optimization.

#### Notes

Citation shown on the slide:

Pedro Domingos, *A Few Useful Things to Know About Machine Learning*, CACM 55(10), 2012.

---

### Slide 48 (PDF page 47) — Key Elements of Machine Learning: Examples

#### Lecturer Content

The slide lists examples for the three components:

| Representation | Evaluation | Optimization |
|---|---|---|
| Instance-based | Accuracy | Greedy Search |
| Hyperplane | Precision, Recall | Branch and Bound |
| Decision Tree | Mean Avg Precision | Gradient descent |
| Set of Rules | Mean Average Error | Quasi-Newton |
| Neural Networks | Mean Square Error | Linear Programming |
| Graphical Models | K-L divergence | Quadratic Programming |
|  | Likelihood |  |

Example statement on the slide:

- Contoh: Anda mengklasifikasikan seseorang akan membeli komputer atau tidak, menggunakan model Multilayer Perceptron → **Representation:** neural networks, **Evaluation:** Accuracy, **Optimization:** gradient descent.

#### Worked Example

**Problem**

Classify whether someone will buy a computer.

**Given**

- Model: Multilayer Perceptron

**Mapping to the three key elements**

1. **Representation:** neural networks
2. **Evaluation:** Accuracy
3. **Optimization:** gradient descent

#### Visual Content

**Type:** Three-column table

**Description:** Blue-headed columns enumerate concrete choices for representation, evaluation, and optimization.

**Educational purpose:** Turns the abstract three-component framework into specific machine-learning design choices.


## 8. KA di Fasilkom UI

### Slide 49 (PDF page 48) — KA di Fasilkom UI

#### Lecturer Content

**KA di Fasilkom UI**

#### Visual Content

**Type:** Section-divider slide

**Description:** Minimal title slide introducing AI-related teaching and activities at Fasilkom UI.

---

### Slide 50 (PDF page 49) — KA di Fasilkom UI: Course/topic map

#### Lecturer Content

The slide presents a map of AI/data-related courses or subject areas at Fasilkom UI and lists the content associated with each area.

#### Kecerdasan Artifisial & Sains Data Dasar

- Intro to AI & DS
- Data preparation basics, dimensionality reduction (PCA)
- Clustering basics (K-means, hierarchical)
- Basic tree-based models (CART, random forest)
- Basic nearest neighbor classifier/regressor
- Simple probabilistic model (Naive Bayes)
- Simple linear models
- Basic neural networks
- Model evaluation basics (metrics, bias-variance tradeoff)
- Imbalanced classification

#### Pemelajaran Dalam (Deep Learning)

- Decision theory
- Optimization algorithm
- Linear models (linear regression, logistic regression, softmax regression, ridge & lasso regression)
- Deep fully-connected neural networks
- Deep convolutional neural networks
- Recurrent neural networks (vanilla RNN, GRU, LSTM)
- Attention mechanism & transformers

#### Pemelajaran Mesin (Machine Learning)

- Linear models, Maximum margin classification. Classification errors regularization. Logistic & Linear regression;
- Active learning. Kernels. Kernel regression; Support vector machine (SVM).
- Model selection. Model selection criteria;
- Description length. Feature selection;
- Combining classifiers. Boosting; Margin and complexity. Margin and generalization;
- Mixtures Model; Expectation maximization (EM) Algorithm. EM regularization;
- Markov models. Hidden Markov models (HMMs);
- Bayesian networks. Learning bayesian networks; Probabilistic inference.

#### Graf Pengetahuan (Knowledge Graph)

- Graph data model
- Persistent identifiers (URI)
- Resource Description Framework (RDF)
- Querying RDF data with SPARQL
- RDF semantics (RDFS)
- Linked data publishing
- Ontology & vocabularies
- Lightweight vocabulary: SKOS
- Ontology language OWL:
- RDF data validation with SHACL

#### Temu-balik Informasi (Information Retrieval)

- Intro to IR
- Indexing: inverted index, dictionary, external memory indexing, distributed indexing, dynamic indexing
- Phrase queries & proximity search
- Index construction, tokenization, normalization
- Index compression
- Ranked retrieval, Vector space model, BM 25
- Query processing, expansion
- Learning to rank, PageRank

#### Pengolahan Bahasa Manusia (Natural Language Processing)

- Regular expression
- Tokenization, stemming, lemmatization
- N-gram language model
- Vector semantics & embeddings
- Neural language models
- POS tagging, Named entity recognition
- Constituency & dependency parsing
- Logical representation of sentence meaning
- Coreference resolution
- Discourse coherence, Machine translation, Information extraction, question answering
- Chatbot & dialog systems

#### Penambangan Data (Data Mining)

- Data Mining Process; Statistical Limits on Data Mining;
- Pattern mining; Frequent Itemsets;
- Similarity & Distances; Cluster Analysis (Advanced Concept);
- Outlier Analysis;
- Text Mining; Human Annotation;
- Mining Discrete Sequences; Graph Mining;
- Social Network Analysis; Graph Representation

#### Computer Vision

- Computer vision tasks, human vision, perception, image understanding, color vision, color images, image acquisition, 2D to 3D transformation, digital image anatomy,
- Point operators, edge detection, subsampling and super-resolution, morphological processing,
- Frequency domain, Discrete Fourier Transform, Wavelet Transform, Frequency Filtering,
- Monocular vs binocular, Stereo vision, photometric and multi-view stereo,
- Image Features, Feature selection and enhancement, Feature matching,
- RANSAC, image alignment, Template matching, SIFT,
- Convolutional neural networks,
- Image classification and object detection in images,
- Image segmentation, image restoration, Image translation,
- Autoencoders, Generative Models, Image Synthesis, Image Generation,

#### Pemrograman Logika (Logic Programming)

- Clause pada program logika: fakta, rule, query; Objek data pada Prolog;
- Semantik deklaratif program logika & logical entailment;
- Semantik prosedural program logika & resolusi;
- List, operator, dan aritmetika pada Prolog;
- Cut pada Prolog; Negasi pada Prolog;
- Operasi pada struktur data;
- Predikat dinamis dan pengumpulan solusi pada Prolog;
- Manipulasi term dan input/output pada Prolog;
- Difference list; Last call optimization dan accumulator

#### Representasi Pengetahuan dan Penalaran (Knowledge Representation & Reasoning)

- First-Order Logic,
- representation knowledge and entailment, resolusi,
- production systems, structured descriptions,
- default reasoning, probabilistic reasoning,
- explanation and diagnosis, reasoning about actions.

#### Pemrosesan Bahasa Lisan (Spoken Language Processing)

- Pengenalan Pemrosesan Bahasa Lisan;
- Speech Theory; Fonetik Akustik;
- Automatic Speech Recognition (Speech-to-text);
- Speech Synthesis (Text-to-speech);
- Spoken Language Dialogue system

#### Robotika

- Robotika: permasalahan, tantangan dan aplikasi;
- Lokomosi pada robot berkaki dan beroda, UAV; Kinematika robot;
- Sensor pada robot; Ekstraksi fitur dan representasi fitur pada robot;
- Lokalisasi dan representasi peta pada robot;
- Path Planning; Aplikasi pendeteksi objek pada robot; Implementasi robot menggunakan perangkat lunak simulasi

#### Inteligensi Bisnis

- Decision Support System and Business Intelligence
- Decision Making, Modelling, and Support
- Business Reporting and Visual Analytics
- Business Performance Management
- Data Warehouse, Business Intelligence Case Study
- Model-Based Decision: Multi-Criteria Optimization
- Data Mining for Business Intelligence

#### Pengelolaan Data Besar (Big Data Management)

- Introduction to Big Data and Data Analytics
- Introduction to HDFS, Big Data Ecosystem
- Classification and Regression
- Data Preprocessing for Analytics
- Clustering Techniques
- Apache Spark, Big Data Management and Maturity Model, NoSQL, Big Data Tech Presentation.

#### Analitika Media Sosial

- social media text analytics
- social network analysis
- location-based analysis
- social media user profiling

#### Visual Content

**Type:** Multi-panel curriculum/topic map

**Description:** The slide is densely packed with color-coded rectangular boxes. Blue/green boxes contain AI, machine learning, deep learning, knowledge graph, information retrieval, NLP, data mining, computer vision, logic programming, knowledge representation and reasoning, spoken-language processing, and robotics. Pink/red boxes contain business intelligence, big-data management, and social-media analytics.

**Educational purpose:** Shows the breadth of AI- and data-related subject matter taught at Fasilkom UI and how the introductory course sits among more specialized courses.

> [VISUAL REFERENCE REQUIRED — Slide 50: This is a dense curriculum map. The textual lists above preserve the readable course-topic content, but the original slide should be retained for exact spatial relationships and color grouping.]

---

### Slide 51 (PDF page 50) — KA di Fasilkom UI: AI Center of Excellence

#### Lecturer Content

The slide shows the **Universitas Indonesia AI Center of Excellence**.

Visible website/navigation text includes:

- AI Center of Excellence
- HOME
- PEOPLE
- NEWS
- PUBLICATIONS
- CONTACT
- UNIVERSITAS INDONESIA
- Powered by: **ePSindo** and **NVIDIA**

#### Visual Content

**Type:** Website screenshot

**Description:** A screenshot of the AI Center of Excellence website. The left side contains the Universitas Indonesia and “AI Center of Excellence” logos. A large green hero banner on the right shows a group photograph and the text “UNIVERSITAS INDONESIA,” “Powered by,” and partner logos including NVIDIA.

**Educational purpose:** Highlights an institutional AI center at Universitas Indonesia / Fasilkom UI.

---

### Slide 52 (PDF page 51) — KA di Fasilkom UI: Sahabat-AI

#### Lecturer Content

The slide prominently displays the name:

**Sahabat-AI**

Visible background event text is partially cropped but includes:

- “…endence and Sovereignty in Artificial Intell…”
- “… AI Ecosystems, Unlocking Global Opportuniti…”

#### Visual Content

**Type:** Event photograph

**Description:** A group of people stands on a stage in front of a large colorful backdrop dominated by the **Sahabat-AI** logo/name. Universitas Indonesia / Fakultas Ilmu Komputer branding appears at the upper left of the event backdrop.

**Educational purpose:** Shows an AI ecosystem/community initiative associated with the institutional AI activities presented in this section.

> [UNCLEAR — Slide 52: The event title at the top of the photograph is cropped on both sides. Only the visible fragments above are transcribed; the missing words are not inferred.]

---

### Slide 53 (PDF page 52) — KA di Fasilkom UI: Prodi Sarjana Kecerdasan Artifisial

#### Lecturer Content

The website screenshot prominently states:

**Prodi Sarjana Kecerdasan Artifisial**

**Telah Dibuka untuk Penerimaan Mahasiswa Baru TA 2026/2027**

Button text:

**Baca Selengkapnya**

Visible Faculty of Computer Science website navigation:

- Beranda
- Akademik
- Penelitian
- Kemahasiswaan
- Berita
- Agenda
- Tentang
- Kontak

#### Visual Content

**Type:** Fasilkom UI website screenshot

**Description:** The hero image shows a human face and a wireframe/digital face facing each other. The headline announces the Bachelor of Artificial Intelligence program and admissions for academic year 2026/2027.

**Educational purpose:** Concludes the lecture by connecting the covered AI topics to the new undergraduate Artificial Intelligence program at Fasilkom UI.

---

# Extraction Review

## Items requiring manual verification

- **Slide 4:** Some Instagram comments are partially obscured/cropped; only clearly visible comments were transcribed.
- **Slide 6:** Claims about DeepSeek training cost, benchmark performance, openness, and comparisons with other systems are reproduced from social-media screenshots and were not independently verified.
- **Slide 7:** The lower social-media reply is only partially visible; exact full wording requires the original slide image.
- **Slide 9:** The national AI-strategy graphic does not show a visible source citation on the slide.
- **Slide 32:** The external AI-history infographic contains claims/periodization that may require historical verification if used as factual material outside this transcription.
- **Slide 35:** The statement “ChatGPT is as an early yet still incomplete version of AGI” is preserved verbatim and may require qualification/verification.
- **Slide 42:** One lecturer bullet contains an unmatched opening parenthesis; it was preserved rather than silently corrected.
- **Slide 44:** Several dataset field values are visually compact and may omit punctuation present in the underlying dataset; the values were preserved exactly as displayed/extracted.
- **Slide 52:** The event title is cropped in the photograph and cannot be fully transcribed without another source.
- **Slide numbering:** The PDF has 52 physical pages, while displayed slide numbering skips 11 and ends at 53.

## Important visuals requiring original slide access

- **Slide 4:** Instagram promotion/comments screenshot, especially obscured comments.
- **Slide 6:** Social-media screenshots and meme, for exact small text.
- **Slide 7:** X/Twitter thread, especially the partially visible follow-up reply.
- **Slide 9:** Indonesian AI strategy temple diagram, for exact spatial hierarchy.
- **Slide 14:** Detailed labeled brain illustration.
- **Slides 19, 26-30:** Agent architecture diagrams, if exact arrow routing or graphical layout must be reconstructed.
- **Slide 32:** AI history timeline images and exact infographic layout.
- **Slides 37-38:** Taxonomy/set diagrams, where overlap and nesting are visually meaningful.
- **Slide 41:** Types-of-machine-learning infographic, for exact spatial grouping and source credit.
- **Slide 42:** Supervised-learning infographic.
- **Slide 45:** Unsupervised-learning infographic.
- **Slide 46:** Fraud/anomaly-detection diagrams and scatterplots with small embedded labels.
- **Slide 50:** Dense Fasilkom UI curriculum/topic map, for exact color grouping and relative placement.
- **Slides 51-53:** Institutional website/event screenshots.

## Potentially ambiguous statements

- **Slide 6:** The social-media claims are presented visually and are not clearly distinguished on-slide as verified facts versus commentary.
- **Slide 32:** Some historical claims in the embedded timeline may be simplified or contestable; they are preserved as written.
- **Slide 34:** AGI is described as potentially matching or exceeding human intelligence, with “???” for examples because the slide says none currently exist and the area remains in research.
- **Slide 35:** The relationship asserted between ChatGPT and AGI is potentially ambiguous/contestable and has been explicitly flagged above.
- **Slide 44:** The lecturer phrase “bilangan continues” appears to be a wording/typing issue, but it was intentionally not normalized.

