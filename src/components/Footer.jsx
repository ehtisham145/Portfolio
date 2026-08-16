import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
      <p className="text-sm text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
}
