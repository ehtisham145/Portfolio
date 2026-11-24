import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { moreProjects, profile, projects } from "../data";
import { card, container, tag } from "./ui";

const linkBtn =
  "inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400";

function FeaturedProject({ project: p }) {
  const details = [
    ["Problem", p.problem],
    ["Solution", p.solution],
    ["My role", p.role],
  ];

  return (
    <article className={`${card} flex h-full flex-col p-7 transition-colors hover:border-indigo-500/50`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
        {p.subtitle}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{p.title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{p.description}</p>

      <dl className="mt-6 space-y-4 text-sm">
        {details.map(([label, text]) => (
          <div key={label}>
            <dt className="font-semibold text-slate-900 dark:text-slate-100">{label}</dt>
            <dd className="mt-1 leading-relaxed text-slate-600 dark:text-slate-400">{text}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {p.tags.map((t) => (
          <li key={t} className={tag}>
            {t}
          </li>
        ))}
      </ul>

      {(p.link || p.repo) && (
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className={linkBtn}>
              <FiExternalLink size={14} /> Live site
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className={linkBtn}>
              <FiGithub size={14} /> Source code
            </a>
          )}
        </div>
      )}
    </article>
  );
}

function SmallProject({ project: p }) {
  return (
    <article className={`${card} flex h-full flex-col p-6 transition-colors hover:border-indigo-500/50`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
        <div className="-mr-2 -mt-1 flex shrink-0 text-slate-500 dark:text-slate-400">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} source code`}
              className="rounded-md p-1.5 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <FiGithub size={17} />
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title} live site`}
              className="rounded-md p-1.5 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <FiExternalLink size={17} />
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {p.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        {p.tags.map((t) => (
          <li key={t} className={tag}>
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className={container}>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Production platforms and AI systems I've designed, built and deployed."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.05} className="h-full">
              <FeaturedProject project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">More projects</h3>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p) => (
            <Reveal key={p.title} className="h-full">
              <SmallProject project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            See all repositories on GitHub <FiArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
