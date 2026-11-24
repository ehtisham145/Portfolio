import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";
import { card, container } from "./ui";

const facts = [
  { label: "Based in", value: profile.location },
  {
    label: "Education",
    value: `${profile.education.degree}, ${profile.education.school} (${profile.education.status})`,
  },
  { label: "Focus", value: profile.focus.join(" · ") },
  { label: "Availability", value: profile.availability },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className={container}>
        <SectionHeading eyebrow="About" title="Engineer first, from idea to production" />

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className={`${card} divide-y divide-slate-200 dark:divide-slate-800`}>
              {facts.map((f) => (
                <div key={f.label} className="px-6 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-200">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
