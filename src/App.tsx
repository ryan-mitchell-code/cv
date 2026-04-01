import { ExperienceSection } from "./sections/ExperienceSection";
import { ProfileSection } from "./sections/ProfileSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ViewControlsPanel } from "./components/ViewControlsPanel";
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
        <ViewControlsPanel
          mode={mode}
          setMode={setMode}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <ProfileSection mode={mode} />
        <SkillsSection mode={mode} />
        <ExperienceSection mode={mode} />
        <PublicationsSection />
      </div>
    </div>
  );
}

export default App;
