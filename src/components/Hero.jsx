import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { profile, resumeUrl, stats } from "../data";
import profilePhoto from "../assets/ehtisham.webp";
import { btnPrimary, btnSecondary, container } from "./ui";

const socials = [
  { icon: FiGithub, label: "GitHub", href: profile.github },
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FiMail, label: "Email", href: `mailto:${profile.email}` },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 -z-10 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/10"
      />

      <div className={`${container} grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]`}>
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {profile.availability}
          </motion.p>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-3 text-xl font-semibold text-indigo-600 sm:text-2xl dark:text-indigo-400"
          >
            {profile.title}
          </motion.p>

          <motion.p
            {...fadeUp(0.15)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btnPrimary}>
              View my work <FiArrowRight size={16} />
            </a>
            {resumeUrl ? (
              <a href={resumeUrl} target="_blank" rel="noreferrer" className={btnSecondary}>
                <FiDownload size={16} /> Download resume
              </a>
            ) : (
              <a href="#contact" className={btnSecondary}>
                Get in touch
              </a>
            )}
          </motion.div>

          <motion.div
            {...fadeUp(0.25)}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin size={15} /> {profile.location}
            </span>
            <span className="flex items-center gap-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-lg p-2 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-60 sm:w-72 lg:w-full lg:max-w-sm"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-3 rotate-3 rounded-3xl border border-indigo-500/20 bg-indigo-500/10"
          />
          <img
            src={profilePhoto}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-3xl border border-slate-200 object-cover object-[50%_18%] shadow-xl dark:border-slate-800"
          />
        </motion.div>
      </div>

      <div className={container}>
        <motion.dl
          {...fadeUp(0.3)}
          className="mt-16 flex flex-wrap gap-x-20 gap-y-6 border-t border-slate-200 pt-8 dark:border-slate-800"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                {s.value}
              </dd>
              <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
