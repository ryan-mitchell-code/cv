import { ExperienceSection } from "./sections/ExperienceSection";
import { ProfileSection } from "./sections/ProfileSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="mx-auto max-w-3xl space-y-8">
        <ProfileSection />
        <ExperienceSection />
      </div>
    </div>
  );
}

export default App;
