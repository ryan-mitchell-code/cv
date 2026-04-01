import { skills } from "../data/skills";
import { Section } from "../components/Section";
import type { CVMode } from "../types/mode";

type SkillsSectionProps = {
  mode: CVMode;
};

export function SkillsSection({ mode }: SkillsSectionProps) {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills
          .filter((skill) => !skill.modes || skill.modes.includes(mode))
          .map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          >
            {skill.name}
          </span>
          ))}
      </div>
    </Section>
  );
}
