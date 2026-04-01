import { experiences } from "../data/experience";
import { Section } from "../components/Section";
import type { CVMode } from "../types/mode";

type ExperienceSectionProps = {
  mode: CVMode;
};

export function ExperienceSection({ mode }: ExperienceSectionProps) {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.company} className="space-y-3 experience-item">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-300">
              {experience.company}
            </p>

            <div className="space-y-2">
              {experience.roles.map((role, index) => (
                <div
                  key={`${experience.company}-${role.title}-${role.start}-${role.end}`}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <p
                    className={
                      index === 0
                        ? "text-base font-semibold text-slate-900 dark:text-slate-100"
                        : "text-sm text-slate-600 dark:text-slate-400"
                    }
                  >
                    {role.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {role.start} - {role.end}
                  </p>
                </div>
              ))}
            </div>

            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
              {experience.achievements
                .filter(
                  (achievement) =>
                    !achievement.modes || achievement.modes.includes(mode)
                )
                .map((achievement) => (
                  <li key={achievement.text}>{achievement.text}</li>
                ))}
            </ul>
            <div className="space-y-3 border-b border-slate-200 pb-4 last:border-none dark:border-slate-700" />
          </div>
        ))}
      </div>
    </Section>
  );
}
