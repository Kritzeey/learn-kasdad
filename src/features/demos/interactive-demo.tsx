"use client";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Layers3, MousePointer2 } from "lucide-react";
import type { DemoId } from "@content/manifest";
import { computerRecords } from "@content/chapters/chapter-01/examples";
import { CrispCaseExplorer } from "./crisp-case-explorer";

const demoCopy: Record<DemoId, { title: string; description: string }> = {
  environment: {
    title: "Bandingkan lingkungan",
    description:
      "Pilih tugas untuk melihat klasifikasi yang tercetak pada slide 23.",
  },
  "agent-architecture": {
    title: "Lihat apa yang ditambah tiap agen",
    description:
      "Pilih arsitektur untuk mengikuti informasi yang dipakai sebelum agen bertindak.",
  },
  dataset: {
    title: "Baca data sebagai model",
    description:
      "Sembunyikan target untuk merasakan perbedaan atribut dan label.",
  },
  "crisp-case": {
    title: "Telusuri enam tahap pada satu kasus",
    description:
      "Pilih tahap CRISP-DM untuk melihat bagaimana kuliah menerapkannya pada contoh pankreatitis akut.",
  },
};

export function InteractiveDemo({ id }: { id: DemoId }) {
  return (
    <section className="demo-wrap" aria-labelledby="demo-title">
      <div className="section-heading-row">
        <span className="eyebrow">Eksplorasi interaktif</span>
        <h2 id="demo-title">{demoCopy[id].title}</h2>
        <p>{demoCopy[id].description}</p>
      </div>
      {id === "environment" && <EnvironmentExplorer />}
      {id === "agent-architecture" && <ArchitectureExplorer />}
      {id === "dataset" && <DatasetExplorer />}
      {id === "crisp-case" && <CrispCaseExplorer />}
    </section>
  );
}

const environments = [
  {
    name: "Catur + jam",
    description: "Dua pemain; waktu mengubah skor meski papan belum berubah.",
    values: [
      "Fully observable",
      "Multiagent",
      "Deterministic",
      "Sequential",
      "Semi-dynamic",
      "Discrete",
    ],
  },
  {
    name: "Catur tanpa jam",
    description: "Dua pemain; keadaan menunggu langkah berikutnya.",
    values: [
      "Fully observable",
      "Multiagent",
      "Deterministic",
      "Sequential",
      "Static",
      "Discrete",
    ],
  },
  {
    name: "Taksi",
    description:
      "Pengemudi berhadapan dengan lalu lintas dan keadaan yang tak seluruhnya terlihat.",
    values: [
      "Partially observable",
      "Multiagent",
      "Nondeterministic",
      "Sequential",
      "Dynamic",
      "Continuous",
    ],
  },
] as const;
const dimensions = [
  "Observabilitas",
  "Jumlah agen",
  "Kepastian",
  "Ketergantungan waktu",
  "Perubahan lingkungan",
  "Nilai keadaan/tindakan",
];

function EnvironmentExplorer() {
  const [selected, setSelected] = useState(0);
  const environment = environments[selected];
  return (
    <div className="demo-card">
      <div
        className="segmented-control"
        role="group"
        aria-label="Pilih lingkungan"
      >
        {environments.map((item, index) => (
          <button
            key={item.name}
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="environment-summary">
        <div className="demo-icon">
          <Layers3 size={21} />
        </div>
        <div>
          <strong>{environment.name}</strong>
          <p>{environment.description}</p>
        </div>
      </div>
      <div className="property-grid">
        {dimensions.map((dimension, index) => (
          <div className="property" key={dimension}>
            <span>{dimension}</span>
            <strong>{environment.values[index]}</strong>
          </div>
        ))}
      </div>
      <p className="demo-caption">
        Klasifikasi sesuai slide 23. Sifat known/unknown dibahas terpisah di
        bawah tabel aslinya.
      </p>
    </div>
  );
}

const architectures = [
  {
    name: "Simple reflex",
    slide: 26,
    caption: "Langsung memakai aturan kondisi–tindakan dari percept kini.",
    nodes: ["Percept kini", "Aturan kondisi–tindakan", "Action"],
  },
  {
    name: "Model-based",
    slide: 27,
    caption:
      "State internal dan model membantu memperkirakan keadaan yang tak terlihat.",
    nodes: [
      "Percept + state lama",
      "Model transisi & sensor",
      "State kini",
      "Aturan",
      "Action",
    ],
  },
  {
    name: "Goal-based",
    slide: 28,
    caption: "Prediksi masa depan dibandingkan dengan tujuan.",
    nodes: [
      "State kini",
      "Prediksi akibat action",
      "Goal",
      "Search / planning",
      "Action",
    ],
  },
  {
    name: "Utility-based",
    slide: 29,
    caption:
      "Beberapa hasil dinilai dengan utility; agen memilih expected utility terbaik.",
    nodes: [
      "State kini",
      "Prediksi hasil",
      "Utility",
      "Bandingkan pilihan",
      "Action",
    ],
  },
  {
    name: "Learning agent",
    slide: 30,
    caption: "Umpan balik dan eksplorasi memperbaiki performance element.",
    nodes: [
      "Percept",
      "Critic + feedback",
      "Learning element",
      "Performance element",
      "Action",
    ],
  },
] as const;

function ArchitectureExplorer() {
  const [selected, setSelected] = useState(0);
  const item = architectures[selected];
  return (
    <div className="demo-card architecture-demo">
      <div className="architecture-tabs" role="tablist" aria-label="Tipe agen">
        {architectures.map((architecture, index) => (
          <button
            key={architecture.name}
            role="tab"
            aria-selected={selected === index}
            onClick={() => setSelected(index)}
          >
            {architecture.name}
          </button>
        ))}
      </div>
      <div className="architecture-content" role="tabpanel">
        <div className="architecture-flow">
          {item.nodes.map((node, index) => (
            <div className="flow-fragment" key={node}>
              <div
                className={`flow-node ${index === item.nodes.length - 1 ? "flow-node--last" : ""}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{node}</strong>
              </div>
              {index < item.nodes.length - 1 && (
                <ArrowRight
                  className="flow-arrow"
                  size={18}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <p>{item.caption}</p>
        <span className="demo-caption">
          Alur disederhanakan untuk belajar · berdasarkan slide {item.slide}
        </span>
      </div>
    </div>
  );
}

function DatasetExplorer() {
  const [showLabels, setShowLabels] = useState(true);
  const [student, setStudent] = useState<"all" | "yes" | "no">("all");
  const rows = computerRecords.filter(
    (record) => student === "all" || record.student === student,
  );
  const yesCount = rows.filter((row) => row.buys === "yes").length;
  return (
    <div className="demo-card dataset-demo">
      <div className="dataset-toolbar">
        <div className="filter-group">
          <label htmlFor="student-filter">Student?</label>
          <select
            id="student-filter"
            value={student}
            onChange={(event) =>
              setStudent(event.target.value as "all" | "yes" | "no")
            }
          >
            <option value="all">Semua</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <button
          className="button button--outline"
          onClick={() => setShowLabels(!showLabels)}
        >
          {showLabels ? <EyeOff size={16} /> : <Eye size={16} />}
          {showLabels ? "Sembunyikan label" : "Tampilkan label"}
        </button>
      </div>
      <div className="dataset-stats">
        <div>
          <strong>{rows.length}</strong>
          <span>baris terlihat</span>
        </div>
        <div>
          <strong>{showLabels ? yesCount : "—"}</strong>
          <span>kelas yes</span>
        </div>
        <div>
          <strong>{showLabels ? rows.length - yesCount : "—"}</strong>
          <span>kelas no</span>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>income</th>
              <th>Student?</th>
              <th>Credit rating</th>
              <th className="target-column">
                Buys computer? <small>target</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${student}-${index}`}>
                <td>{row.age}</td>
                <td>{row.income}</td>
                <td>{row.student}</td>
                <td>{row.credit}</td>
                <td className="target-column">
                  {showLabels ? (
                    <span className={`label-pill label-pill--${row.buys}`}>
                      {row.buys}
                    </span>
                  ) : (
                    <span aria-label="label disembunyikan">?</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="demo-caption">
        <MousePointer2 size={13} /> Data dan urutan baris dari slide 43. Menutup
        label hanya mengubah tampilan, bukan menjalankan model atau membuat
        prediksi.
      </p>
    </div>
  );
}
