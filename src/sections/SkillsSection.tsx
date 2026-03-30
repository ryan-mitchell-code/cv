import { skills } from "../data/skills";
import { Section } from "../components/Section";

export function SkillsSection() {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
