import { education } from "../data/education";
import { Section } from "../components/Section";

export function EducationSection() {
  return (
    <Section title="Education">
      <div className="space-y-6 print:space-y-4">
        {education.map((entry) => (
          <div
            key={`${entry.institution}-${entry.degree}-${entry.start}`}
            className="space-y-3 print:space-y-2 education-item"
          >
            <p className="text-base font-semibold text-slate-800 dark:text-slate-300">
              {entry.institution}
            </p>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="space-y-1">
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {entry.degree}
                </p>
                {entry.grade ? (
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {entry.grade}
                  </p>
                ) : null}
              </div>
              <p className="text-sm text-slate-500 shrink-0 dark:text-slate-400">
                {entry.start} - {entry.end}
              </p>
            </div>

            {entry.highlights?.length ? (
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 print:space-y-0.5 dark:text-slate-400">
                {entry.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            <div className="space-y-3 border-b border-slate-200 pb-4 last:border-none print:pb-2 dark:border-slate-700" />
          </div>
        ))}
      </div>
    </Section>
  );
}
