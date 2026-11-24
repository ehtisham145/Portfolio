import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";
import { container } from "./ui";

function Point({ point }) {
  if (typeof point === "string") return point;
  return (
    <>
      <span className="font-semibold text-slate-800 dark:text-slate-200">{point.label}:</span>{" "}
      {point.text}
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-24 dark:bg-slate-900/30">
      <div className={container}>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been shipping"
          description="Building and running production systems for real clients, from first commit to live servers."
        />

        <ol className="relative ml-1.5 max-w-3xl space-y-12 border-l border-slate-200 dark:border-slate-800">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.role}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo-500 bg-white dark:bg-slate-950"
              />
              <Reveal delay={i * 0.05}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {job.role}{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">· {job.company}</span>
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.location}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="relative pl-5 leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.65em] h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-600"
                      />
                      <Point point={point} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
