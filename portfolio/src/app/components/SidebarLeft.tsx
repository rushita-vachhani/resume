"use client";

import Image from "next/image";
import ProgressBar from "./ProgressBar";
import LanguageCircle from "./LanguageCircle";

export default function SidebarLeft() {
  return (
    <aside
      className="fixed left-0 top-0 h-full w-[300px] bg-white text-gray-900 border-r border-gray-200 dark:bg-[#1D1E22] dark:text-white dark:border-[#2B2C30] overflow-y-auto flex flex-col px-8 py-10"
    >
      {/* Profile */}
      <div className="text-center">
        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg">
          <Image
            src="/profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-4 text-xl font-semibold">Harshit Vachhani</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Full Stack Developer</p>
      </div>

      {/* Basic Info */}
      <div className="mt-8 space-y-3 text-sm">
        <Info label="Residence" value="USA" />
        <Info label="City" value="Boston" />
        <Info label="Age" value="26" />
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 my-6" />

      {/* Languages */}
      <div className="flex justify-between px-2">
        <LanguageCircle percent={100} label="Gujarati" />
        <LanguageCircle percent={90} label="English" />
        <LanguageCircle percent={70} label="Hindi" />
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 my-6" />

      {/* Skills */}
      <div className="space-y-4">
        <ProgressBar label="React JS" percent={95} />
        <ProgressBar label="Next JS" percent={90} />
        <ProgressBar label="React Native" percent={85} />
        <ProgressBar label="Node.js" percent={80} />
        <ProgressBar label="Firebase / Supabase" percent={85} />
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 my-6" />

      {/* Tools */}
      <ul className="space-y-2 text-sm">
        <Tool text="Bootstrap, Material UI" />
        <Tool text="Tailwind, Sass" />
        <Tool text="Webpack, Vite" />
        <Tool text="Git & GitHub" />
      </ul>

      {/* Download CV */}
      <button className="mt-6 text-yellow-500 dark:text-yellow-400 font-semibold flex items-center gap-2 hover:text-yellow-600 dark:hover:text-yellow-300 uppercase tracking-wider text-sm">
        DOWNLOAD CV ⬇
      </button>

      {/* Social Icons */}
      <div className="mt-auto flex gap-5 justify-center text-gray-500 dark:text-gray-400 text-xl pt-10">
        <i className="bi bi-linkedin hover:text-yellow-400"></i>
        <i className="bi bi-github hover:text-yellow-400"></i>
        {/* <i className="bi bi-twitter hover:text-yellow-400"></i> */}
      </div>
    </aside>
  );
}

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between text-gray-600 dark:text-gray-300 text-sm">
      <span className="font-semibold">{label}:</span>
      <span className="text-gray-800 dark:text-gray-400">{value}</span>
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
