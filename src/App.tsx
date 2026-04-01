import { ExperienceSection } from "./sections/ExperienceSection";
import { ProfileSection } from "./sections/ProfileSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ModeSwitcher } from "./components/ModeSwitcher";
import { useEffect, useState } from "react";
import type { CVMode } from "./types/mode";

function App() {
  const [mode, setMode] = useState<CVMode>("manager");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 text-slate-900 dark:bg-slate-950 dark:text-slate-100 print:bg-white print:text-black">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800 print:hidden">
          <ModeSwitcher mode={mode} setMode={setMode} />

          <button
            type="button"
            onClick={() => setIsDark((d) => !d)}
            className="rounded-md border px-3 py-1.5 text-sm font-medium transition
      border-slate-300 bg-white text-slate-700 hover:bg-slate-100
      dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            aria-label={isDark ? "Use light theme" : "Use dark theme"}
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>

        <ProfileSection mode={mode} />
        <SkillsSection mode={mode} />
        <ExperienceSection mode={mode} />
        <PublicationsSection />
      </div>
    </div>
  );
}

export default App;
