"use client";

import { useMemo, useSyncExternalStore } from "react";

type Progress = { sections: string[]; checks: string[] };
const KEY = "kasdad-learning-progress-v1";
const EVENT = "kasdad-progress-change";
const EMPTY = '{"sections":[],"checks":[]}';

function snapshot() {
  return typeof window === "undefined"
    ? EMPTY
    : (localStorage.getItem(KEY) ?? EMPTY);
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT, callback);
  };
}

function parse(raw: string): Progress {
  try {
    const value = JSON.parse(raw) as Partial<Progress>;
    return {
      sections: Array.isArray(value.sections) ? value.sections : [],
      checks: Array.isArray(value.checks) ? value.checks : [],
    };
  } catch {
    return { sections: [], checks: [] };
  }
}

function write(update: (current: Progress) => Progress) {
  const next = update(parse(snapshot()));
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(EVENT));
}

export function useProgress() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => EMPTY);
  return useMemo(() => parse(raw), [raw]);
}

export function toggleSection(chapterId: string, sectionId: string) {
  const key = `${chapterId}/${sectionId}`;
  write((current) => ({
    ...current,
    sections: current.sections.includes(key)
      ? current.sections.filter((item) => item !== key)
      : [...current.sections, key],
  }));
}

export function completeCheck(chapterId: string, checkId: string) {
  const key = `${chapterId}/${checkId}`;
  write((current) => ({
    ...current,
    checks: current.checks.includes(key)
      ? current.checks
      : [...current.checks, key],
  }));
}
