import { Section } from "../components/Section";
import { publications } from "../data/publications";

export function PublicationsSection() {
  return (
    <Section title="Publications">
      <div className="space-y-6">
        {publications.map((publication) => (
          <article key={publication.title} className="space-y-2">
            <h3 className="text-base font-semibold leading-snug text-slate-900 dark:text-slate-100">
              {publication.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {publication.description}
            </p>
            {publication.link ? (
              <p className="text-sm text-slate-700 print:text-black dark:text-slate-300">
                <span className="inline print:block">
                  <a
                    href={publication.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    {publication.link.label}
                  </a>
                  <span className="ml-1 hidden text-xs text-slate-600 print:inline dark:text-slate-500">
                    ({publication.link.url.replace("https://", "")})
                  </span>
                </span>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
