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
          <div
            key={`${experience.company}-${experience.role}-${experience.start}`}
            className="space-y-2"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className="text-base font-medium text-slate-900">
                  {experience.role}
                </p>
                <p className="text-sm text-slate-600">{experience.company}</p>
              </div>

              <p className="text-sm font-medium text-slate-700">
                {experience.start} - {experience.end}
              </p>
            </div>

            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {experience.achievements
                .filter(
                  (achievement) =>
                    !achievement.modes || achievement.modes.includes(mode),
                )
                .map((achievement) => (
                  <li key={achievement.text}>{achievement.text}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
