import { FiAward, FiBookOpen, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { certifications, profile } from "../data";
import { card, container } from "./ui";

export default function Credentials() {
  const { education } = profile;

  return (
    <section id="credentials" className="py-24">
      <div className={container}>
        <SectionHeading eyebrow="Credentials" title="Education & certifications" />

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <Reveal className="h-full">
            <div className={`${card} h-full p-6`}>
              <FiBookOpen size={22} className="text-indigo-600 dark:text-indigo-400" />
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{education.school}</p>
              <p className="mt-3 inline-block rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {education.status}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${card} group flex h-full items-start gap-4 p-5 transition-colors hover:border-indigo-500/50`}
                  >
                    <FiAward size={20} className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                        {c.name}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                        {c.issuer}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:underline dark:text-indigo-400">
                        Verify credential <FiExternalLink size={12} />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
