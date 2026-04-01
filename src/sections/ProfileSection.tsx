import { profile } from "../data/profile";
import type { CVMode } from "../types/mode";

type ProfileSectionProps = {
  mode: CVMode;
};

export function ProfileSection({ mode }: ProfileSectionProps) {
  const summary = profile.summaries
    .filter((item) => !item.modes || item.modes.includes(mode))
    .map((item) => item.text)
    .join(" ");

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        {profile.name}
      </h1>
      <p className="mt-1 text-lg font-medium text-slate-700 dark:text-slate-300">
        {profile.title}
      </p>
      <div className="mt-2 text-sm text-slate-700 print:text-black dark:text-slate-300">
        {profile.links.map((link, index) => (
          <span key={link.url} className="inline print:block">
            {index > 0 && (
              <span className="mx-2 text-slate-400 print:hidden">|</span>
            )}

            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-slate-900"
            >
              {link.label}
            </a>

            {/* 👇 Show URL in print only */}
            <span className="ml-1 hidden text-xs text-slate-600 print:inline dark:text-slate-500">
              ({link.url.replace("https://", "")})
            </span>
          </span>
        ))}
      </div>
      <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {summary}
      </p>
    </section>
  );
}
