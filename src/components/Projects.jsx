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
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 mx-auto rounded-full mb-12" />
        </Reveal>

        <div className="grid gap-6">
          {projects.map((p, i) => {
            const fromSide = i % 2 === 0 ? -80 : 80;
            const Wrapper = p.link ? motion.a : motion.div;
            const wrapperProps = p.link
              ? { href: p.link, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: fromSide }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Wrapper
                  {...wrapperProps}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group block p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-red-500 dark:hover:border-red-500 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        {p.title}
                        {p.link && (
                          <FiExternalLink
                            size={16}
                            className="text-neutral-400 group-hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </h3>
                      <p className="text-sm text-red-500 dark:text-red-500 mt-1">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
