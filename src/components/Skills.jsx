import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 mx-auto rounded-full mb-12" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 h-full">
                <h3 className="font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-50 text-red-600 dark:bg-red-600/10 dark:text-red-400 border border-red-200 dark:border-red-600/30 cursor-default transition-shadow hover:shadow-md hover:shadow-red-600/20"
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
