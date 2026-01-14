"use client";

import Image from "next/image";
import ProgressBar from "./ProgressBar";
import LanguageCircle from "./LanguageCircle";

export default function SidebarLeft() {
  return (
    <aside
      className="fixed left-0 top-0 h-full w-[300px] bg-sidebar-bg text-sidebar-text border-r border-sidebar-border overflow-y-auto flex flex-col px-8 py-10"
    >
      {/* Profile */}
      <div className="text-center">
        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sidebar-border shadow-lg">
          <Image
            src="/profile.png"
            alt="Rushitaben Vachhani profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h2 className="mt-4 text-xl font-semibold">
          Rushitaben Vachhani
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          Software Engineering Graduate Student
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
          Actively seeking internships
        </p>
      </div>

      {/* Basic Info */}
      <div className="mt-8 space-y-3 text-sm">
        <Info label="Location" value="Boston, MA" />
        <Info label="University" value="Northeastern University" />
        <Info label="Program" value="M.S. Software Engineering" />
      </div>

      <div className="border-b border-sidebar-border my-6" />

      {/* Languages */}
      <div className="flex justify-between px-2">
        <LanguageCircle percent={100} label="Gujarati" />
        <LanguageCircle percent={90} label="English" />
        <LanguageCircle percent={75} label="Hindi" />
      </div>

      <div className="border-b border-sidebar-border my-6" />

      {/* Core Skills */}
      <div className="space-y-4">
        <ProgressBar label="React / Next.js" percent={90} />
        <ProgressBar label="Node.js / Express" percent={85} />
        <ProgressBar label="Java / Spring Boot" percent={80} />
        <ProgressBar label="Python / Data Processing" percent={80} />
        <ProgressBar label="SQL / PostgreSQL" percent={85} />
      </div>

      <div className="border-b border-sidebar-border my-6" />

      {/* Tools & Technologies */}
      <ul className="space-y-2 text-sm">
        <Tool text="React, TypeScript, Tailwind CSS" />
        <Tool text="Node.js, REST APIs, Spring Boot" />
        <Tool text="Python, Pandas, ML Basics" />
        <Tool text="Docker, Git, GitHub" />
        <Tool text="AWS, CI/CD (basic exposure)" />
      </ul>

      {/* Resume */}
      <a
        href="https://docs.google.com/document/d/1srg1XYpJQfZqMBG7pg0iG4KK1oHeYLFJRpb6MvhTckY/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-yellow-500 dark:text-yellow-400 font-semibold flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-300 uppercase tracking-wider text-sm"
      >
        Download Resume ⬇
      </a>

      {/* Social Links */}
      <div className="mt-auto flex gap-5 justify-center text-gray-500 dark:text-gray-400 text-xl pt-10">
        <a
          href="https://www.linkedin.com/in/rushita-vachhani"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/rushita-vachhani"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400"
          aria-label="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </aside>
  );
}

/* ---------- Helper Components ---------- */

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
      <span className="font-semibold">{label}:</span>
      <span className="text-gray-800 dark:text-gray-400 text-right">
        {value}
      </span>
    </div>
  );
}

function Tool({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-gray-600 dark:text-gray-300">
      <span className="text-yellow-400">✔</span> {text}
    </li>
  );
}
