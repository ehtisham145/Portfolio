import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </Reveal>
  );
}
