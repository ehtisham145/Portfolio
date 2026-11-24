import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";
import { container } from "./ui";

const socials = [
  { icon: FiGithub, label: "GitHub", href: profile.github },
  { icon: FiLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FiMail, label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className={`${container} flex flex-col items-center justify-between gap-4 sm:flex-row`}>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-lg p-2 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <Icon size={17} />
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 rounded-lg border border-slate-200 p-2 transition-colors hover:text-slate-900 dark:border-slate-800 dark:hover:text-white"
          >
            <FiArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
