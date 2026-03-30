import { profile } from "../data/profile";

export function ProfileSection() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <h1 className="text-3xl font-bold text-slate-900">{profile.name}</h1>
      <p className="mt-1 text-lg font-medium text-slate-700">{profile.title}</p>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {profile.summary}
      </p>
    </section>
  );
}
