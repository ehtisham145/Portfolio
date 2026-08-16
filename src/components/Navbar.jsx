import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-lg gradient-text">
          Ehtisham.dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-red-500 dark:hover:text-red-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
