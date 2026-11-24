import { useState } from "react";
import { FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "../data";
import { btnPrimary, btnSecondary, container } from "./ui";

const channels = [
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FiGithub, label: "GitHub", href: profile.github },
  { icon: FaWhatsapp, label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900/30">
      <div className={container}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let's build something together
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Open to freelance projects and full-time roles. Tell me what you're building and I'll
            get back to you within a day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={btnPrimary}>
              <FiMail size={16} /> {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className={btnSecondary}>
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {channels.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <Icon size={17} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
