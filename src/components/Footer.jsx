import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800 text-center">
      <p className="text-sm text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
}
