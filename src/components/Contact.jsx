import { motion } from "framer-motion";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "../data";

const links = [
  { icon: FiMail, label: "Email", href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 mx-auto rounded-full mb-6" />
          <p className="text-neutral-600 dark:text-neutral-400 mb-10">
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
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg hover:shadow-red-600/20 transition-all"
              >
                <Icon size={18} className="text-red-500" />
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
