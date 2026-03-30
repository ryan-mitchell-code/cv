import { ExperienceSection } from "./sections/ExperienceSection";
import { ProfileSection } from "./sections/ProfileSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ModeSwitcher } from "./components/ModeSwitcher";
import { useState } from "react";
import type { CVMode } from "./types/mode";

function App() {
  const [mode, setMode] = useState<CVMode>("manager");

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-3xl space-y-8">
        <ModeSwitcher mode={mode} setMode={setMode} />

        <ProfileSection mode={mode} />
        <SkillsSection mode={mode} />
        <ExperienceSection mode={mode} />
      </div>
    </div>
  );
}

export default App;
