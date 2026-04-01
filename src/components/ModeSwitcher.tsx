import { CV_MODES } from "../types/mode";
import type { CVMode } from "../types/mode";

const buttonBase =
  "rounded-md border px-3 py-1.5 text-sm font-medium transition";
const buttonActive =
  "border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900";
const buttonInactive =
  "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700";

type ModeSwitcherProps = {
  mode: CVMode;
  setMode: (mode: CVMode) => void;
  /** Omit outer card; use inside a parent panel */
  variant?: "card" | "plain";
  showLabel?: boolean;
};

const labels = {
  manager: "Manager",
  techLead: "Tech Lead",
  iam: "IAM Specialist",
};

export function ModeSwitcher({
  mode,
  setMode,
  variant = "card",
  showLabel = true,
}: ModeSwitcherProps) {
  const buttons = (
    <div className="flex flex-wrap gap-2">
      {CV_MODES.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setMode(item)}
          className={`${buttonBase} ${
            mode === item ? buttonActive : buttonInactive
          }`}
        >
          {labels[item]}
        </button>
      ))}
    </div>
  );

  if (variant === "plain") {
    if (!showLabel) {
      return <div>{buttons}</div>;
    }
    return (
      <div className="space-y-3">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          CV Lens
        </p>
        {buttons}
      </div>
    );
  }

  const inner = (
    <>
      {showLabel ? (
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          CV Lens
        </p>
      ) : null}
      <div className={showLabel ? "mt-3" : ""}>{buttons}</div>
    </>
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 print:hidden dark:border-slate-700 dark:bg-slate-900">
      {inner}
    </div>
  );
}
