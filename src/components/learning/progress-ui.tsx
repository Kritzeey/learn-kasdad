"use client";

import { Check, Circle } from "lucide-react";
import { toggleSection, useProgress } from "@/features/progress/progress";

export function ProgressMeter({
  chapterId,
  sectionIds,
  compact = false,
}: {
  chapterId: string;
  sectionIds: string[];
  compact?: boolean;
}) {
  const { sections } = useProgress();
  const done = sectionIds.filter((id) =>
    sections.includes(`${chapterId}/${id}`),
  ).length;
  const percent = Math.round((done / Math.max(sectionIds.length, 1)) * 100);
  return (
    <div
      className={`progress-meter ${compact ? "progress-meter--compact" : ""}`}
    >
      <div className="progress-meter__label">
        <span>Progres belajar</span>
        <strong>
          {done}/{sectionIds.length} bagian
        </strong>
      </div>
      <div
        className="progress-meter__track"
        role="progressbar"
        aria-valuenow={done}
        aria-valuemin={0}
        aria-valuemax={sectionIds.length}
        aria-label="Bagian selesai"
      >
        <span style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function CompletionButton({
  chapterId,
  sectionId,
}: {
  chapterId: string;
  sectionId: string;
}) {
  const { sections } = useProgress();
  const completed = sections.includes(`${chapterId}/${sectionId}`);
  return (
    <button
      className={`completion-button ${completed ? "is-complete" : ""}`}
      aria-pressed={completed}
      onClick={() => toggleSection(chapterId, sectionId)}
    >
      {completed ? <Check size={18} /> : <Circle size={18} />}
      {completed ? "Selesai dipelajari" : "Tandai bagian selesai"}
    </button>
  );
}
