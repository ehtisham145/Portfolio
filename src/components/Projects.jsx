import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-2">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mb-12" />
        </Reveal>

        <div className="grid gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      {p.title}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </h3>
                    <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
