"use client";

import Image from "next/image";
import ProgressBar from "./ProgressBar";
import LanguageCircle from "./LanguageCircle";

export default function SidebarLeft() {
  return (
    <aside
      className="fixed left-0 top-0 h-full w-[300px] bg-body-bg text-body-text overflow-y-auto flex flex-col px-8 py-10 shadow-[6px_0_20px_var(--shadow-outer-dark)] z-50"
    >
      {/* Profile */}
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-body-bg shadow-[10px_10px_20px_var(--shadow-outer-dark),_-10px_-10px_20px_var(--shadow-outer-light)]">
          <Image
            src="/profile.png"
            alt="Rushitaben Vachhani profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h2 className="mt-6 text-xl font-bold text-primary">
          Rushitaben Vachhani
        </h2>
        <p className="text-text-secondary text-sm text-center mt-2">
          Software Engineering Graduate Student
        </p>
        <p className="text-text-muted text-xs mt-1">
          Actively seeking internships
        </p>
      </div>

      {/* Basic Info */}
      <div className="mt-8 space-y-3 text-sm">
        <Info label="Location" value="Boston, MA" />
        <Info label="University" value="Northeastern University" />
        <Info label="Program" value="M.S. Software Engineering" />
      </div>

      <div className="my-8 h-0.5 rounded-full bg-body-bg shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)]" />

      {/* Languages */}
      <div className="flex justify-between px-2">
        <LanguageCircle percent={100} label="Gujarati" />
        <LanguageCircle percent={90} label="English" />
        <LanguageCircle percent={75} label="Hindi" />
      </div>

      <div className="my-8 h-0.5 rounded-full bg-body-bg shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)]" />

      {/* Core Skills */}
      <div className="space-y-4">
        <ProgressBar label="React / Next.js" percent={90} />
        <ProgressBar label="Node.js / Express" percent={85} />
        <ProgressBar label="Java / Spring Boot" percent={80} />
        <ProgressBar label="Python / Data Processing" percent={80} />
        <ProgressBar label="SQL / PostgreSQL" percent={85} />
      </div>

      <div className="my-8 h-0.5 rounded-full bg-body-bg shadow-[inset_2px_2px_4px_var(--shadow-inner-dark),inset_-2px_-2px_4px_var(--shadow-inner-light)]" />

      {/* Resume */}
      <a
        href="https://docs.google.com/document/d/1srg1XYpJQfZqMBG7pg0iG4KK1oHeYLFJRpb6MvhTckY/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-8 px-6 py-4 rounded-full
          text-primary font-bold
          flex items-center justify-center gap-3
          uppercase tracking-wider text-sm
          bg-body-bg
          shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
          hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
          active:scale-95
          transition-all duration-300
        "
      >
        Download Resume <i className="bi bi-download"></i>
      </a>

      {/* Social Links */}
      <div className="mt-auto flex gap-6 justify-center pt-10 pb-4">
        <SocialButton href="https://www.linkedin.com/in/rushita-vachhani" icon="bi-linkedin" label="LinkedIn" />
        <SocialButton href="https://github.com/rushita-vachhani" icon="bi-github" label="GitHub" />
      </div>
    </aside>
  );
}

/* ---------- Helper Components ---------- */

function SocialButton({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center justify-center w-12 h-12 rounded-full
        text-text-secondary
        bg-body-bg
        shadow-[6px_6px_12px_var(--shadow-outer-dark),_-6px_-6px_12px_var(--shadow-outer-light)]
        hover:text-primary hover:shadow-[inset_4px_4px_8px_var(--shadow-inner-dark),inset_-4px_-4px_8px_var(--shadow-inner-light)]
        transition-all duration-300
      "
      aria-label={label}
    >
      <i className={`bi ${icon} text-xl`}></i>
    </a>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between text-text-secondary text-sm">
      <span className="font-semibold text-body-text">{label}:</span>
      <span className="text-right">
        {value}
      </span>
    </div>
  );
}

function Tool({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-text-secondary">
      <span className="text-primary">✔</span> {text}
    </li>
  );
}
