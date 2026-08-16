import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiLinkedin, FiMail, FiGlobe } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";
import { profile } from "../data";
import profilePhoto from "../assets/ehtisham.jpg";

function useTypewriter(words, speed = 60, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 sm:pt-40"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60" />
          <img
            src={profilePhoto}
            alt={profile.name}
            className="relative w-full h-full object-cover object-[50%_18%] rounded-full border-4 border-white dark:border-slate-950 shadow-xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl text-indigo-500 dark:text-indigo-500 font-medium mb-4"
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight gradient-text"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-slate-600 dark:text-slate-300"
        >
          {profile.title} — {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 h-8 text-lg sm:text-xl font-mono text-indigo-500 dark:text-indigo-500"
        >
          <span>{typed}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 hover:scale-105 transition-all shadow-lg shadow-indigo-600/30"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-5 text-slate-500 dark:text-slate-400"
        >
          <a href={`mailto:${profile.email}`} className="hover:text-indigo-500 hover:scale-125 transition-all" aria-label="Email">
            <FiMail size={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href={profile.website} target="_blank" rel="noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all" aria-label="Website">
            <FiGlobe size={20} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
