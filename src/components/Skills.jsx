import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";
import { card, container } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900/30">
      <div className={container}>
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack"
          description="The tools I use day to day to build, test and run software in production."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Reveal key={category} className="h-full">
              <div className={`${card} h-full p-6`}>
                <h3 className="font-semibold text-slate-900 dark:text-white">{category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-slate-200 px-2.5 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>      </div>
    </section>
  );
}
