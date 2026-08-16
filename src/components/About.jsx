import Reveal from "./Reveal";
import { profile, certifications } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-700 via-red-500 to-black dark:to-red-300 mx-auto rounded-full mb-12" />
        </Reveal>

        <div className="grid gap-3 mb-16">
          {profile.about.map((line, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-left sm:text-center">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="text-2xl font-semibold text-center mb-8">My Approach</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {profile.approach.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm hover:border-red-500 dark:hover:border-red-500 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-red-600/10">
                <h4 className="font-semibold text-red-500 dark:text-red-500 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-3">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 hover:border-red-500 dark:hover:border-red-500 transition-colors">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-sm text-neutral-600 dark:text-neutral-300">{c}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
