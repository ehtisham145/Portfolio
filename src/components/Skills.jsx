import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mb-12" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 h-full">
                <h3 className="font-semibold mb-4 text-slate-800 dark:text-slate-100">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 cursor-default transition-shadow hover:shadow-md hover:shadow-indigo-500/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
