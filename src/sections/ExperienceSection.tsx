import { experiences } from "../data/experience";

export function ExperienceSection() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">Experience</h2>

      <div className="mt-4 space-y-6">
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
              {experience.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

