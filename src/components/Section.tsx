import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className }: SectionProps) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 ${
        className ?? ""
      }`}
    >
      <h2 className="text-xl font-semibold text-slate-900 print:text-lg dark:text-slate-100">
        {title}
      </h2>
      <div className="mt-4 print:mt-2">{children}</div>
    </section>
  );
}
