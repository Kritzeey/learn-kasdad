"use client";

import { useState } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import type { Check } from "@content/types";
import { completeCheck, useProgress } from "@/features/progress/progress";

export function KnowledgeCheck({
  chapterId,
  checks,
}: {
  chapterId: string;
  checks: Check[];
}) {
  return (
    <section className="checks" aria-labelledby="checks-title">
      <div className="section-heading-row">
        <span className="eyebrow">Uji pemahaman</span>
        <h2 id="checks-title">Coba tanpa melihat catatan</h2>
        <p>Jawaban dan alasan baru muncul saat kamu meminta hasilnya.</p>
      </div>
      <div className="check-grid">
        {checks.map((check, index) => (
          <CheckCard
            key={check.id}
            chapterId={chapterId}
            check={check}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

function CheckCard({
  chapterId,
  check,
  number,
}: {
  chapterId: string;
  check: Check;
  number: number;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const { checks } = useProgress();
  const reviewed = checks.includes(`${chapterId}/${check.id}`);
  const correct = selected === check.correctIndex;

  return (
    <div className="check-card">
      <div className="check-card__top">
        <span>PERTANYAAN {String(number).padStart(2, "0")}</span>
        {reviewed && (
          <span className="reviewed">
            <CheckCircle2 size={14} /> Ditinjau
          </span>
        )}
      </div>
      <h3>{check.prompt}</h3>
      <div
        className="check-options"
        role="radiogroup"
        aria-label={check.prompt}
      >
        {check.options.map((option, index) => (
          <label
            key={option}
            className={`check-option ${selected === index ? "is-selected" : ""} ${revealed && index === check.correctIndex ? "is-correct" : ""}`}
          >
            <input
              type="radio"
              name={check.id}
              checked={selected === index}
              disabled={revealed}
              onChange={() => setSelected(index)}
            />
            <span className="check-option__letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span>{option}</span>
          </label>
        ))}
      </div>
      {!revealed ? (
        <button
          className="button button--dark"
          disabled={selected === null}
          onClick={() => {
            setRevealed(true);
            completeCheck(chapterId, check.id);
          }}
        >
          Lihat jawaban
        </button>
      ) : (
        <div className="check-feedback" role="status">
          <strong>
            {correct
              ? "Tepat."
              : `Jawaban: ${check.options[check.correctIndex]}`}
          </strong>
          <p>{check.explanation}</p>
          <span>Rujukan: slide {check.sourceSlides.join(", ")}</span>
          {!correct && (
            <button
              className="text-button"
              onClick={() => {
                setSelected(null);
                setRevealed(false);
              }}
            >
              <RotateCcw size={14} /> Coba lagi
            </button>
          )}
        </div>
      )}
    </div>
  );
}
