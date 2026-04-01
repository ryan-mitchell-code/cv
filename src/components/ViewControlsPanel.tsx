import { useState } from "react";
import { ModeSwitcher } from "./ModeSwitcher";
import type { CVMode } from "../types/mode";

const segBase =
  "rounded-md border px-3 py-1.5 text-sm font-medium transition";
const segOn =
  "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900";
const segOff =
  "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700";

type ViewControlsPanelProps = {
  mode: CVMode;
  setMode: (mode: CVMode) => void;
  isDark: boolean;
  setIsDark: (value: boolean | ((prev: boolean) => boolean)) => void;
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M18 6L6 18M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </>
      )}
    </svg>
  );
}

export function ViewControlsPanel({
  mode,
  setMode,
  isDark,
  setIsDark,
}: ViewControlsPanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="print:hidden">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          aria-expanded={open}
          aria-controls="view-controls-panel"
          id="view-controls-menu-button"
        >
          <MenuIcon open={open} />
          <span>{open ? "Close" : "View options"}</span>
        </button>
      </div>

      {open ? (
        <div
          id="view-controls-panel"
          role="region"
          aria-labelledby="view-controls-menu-button"
          className="mt-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            View &amp; display
          </p>

          <div className="mt-5 space-y-5">
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                CV lens
              </p>
              <div className="mt-2">
                <ModeSwitcher
                  mode={mode}
                  setMode={setMode}
                  variant="plain"
                  showLabel={false}
                />
              </div>
            </div>

            <div className="border-t border-slate-200 pt-5 dark:border-slate-700">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Appearance
              </p>
              <div
                className="mt-2 flex flex-wrap gap-2"
                role="group"
                aria-label="Color theme"
              >
                <button
                  type="button"
                  onClick={() => setIsDark(false)}
                  className={`${segBase} ${!isDark ? segOn : segOff}`}
                  aria-pressed={!isDark}
                >
                  Light
                </button>
                <button
                  type="button"
                  onClick={() => setIsDark(true)}
                  className={`${segBase} ${isDark ? segOn : segOff}`}
                  aria-pressed={isDark}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
