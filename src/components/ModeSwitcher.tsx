import { CV_MODES } from "../types/mode";
import type { CVMode } from "../types/mode";

type ModeSwitcherProps = {
  mode: CVMode;
  setMode: (mode: CVMode) => void;
};

const labels = {
  manager: "Manager",
  techLead: "Tech Lead",
  iam: "IAM Specialist",
};

export function ModeSwitcher({ mode, setMode }: ModeSwitcherProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 print:hidden">
      <p className="text-sm font-medium text-slate-700">CV Lens</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {CV_MODES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition ${
              mode === item
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {labels[item]}
          </button>
        ))}
      </div>
    </div>
  );
}
