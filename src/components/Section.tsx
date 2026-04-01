import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type SectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, children, className }: SectionProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`rounded-xl border border-slate-200 bg-white p-6 transition-all duration-700 ease-out dark:border-slate-700 dark:bg-slate-900 motion-reduce:transition-none ${
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      } print:translate-y-0 print:opacity-100 print:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
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
