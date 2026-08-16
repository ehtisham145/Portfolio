import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGlobe } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data";

const links = [
  { icon: FiMail, label: "Email", href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FiGlobe, label: "E-Numerak", href: profile.website },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            Open to collaboration, freelance work, and full-time opportunities.
            If you're building something that matters — let's talk.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
              >
                <Icon size={18} className="text-indigo-500" />
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
