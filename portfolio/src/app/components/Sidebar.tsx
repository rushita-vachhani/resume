"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed left-0 top-0 flex h-screen w-64 flex-col
                 border-r border-gray-300 bg-white text-gray-900
                 dark:border-[#2f3033] dark:bg-darkBg dark:text-white
                 px-6 py-8"
    >
      {/* Profile */}
      <div className="text-center">
        <Image
          src="/profile.jpg"
          alt="Harshit Vachhani"
          width={110}
          height={110}
          className="mx-auto rounded-full border border-gray-300 dark:border-gray-600"
        />
        <h2 className="mt-3 text-lg font-semibold">Harshit Vachhani</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Full Stack Developer
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block rounded-md px-4 py-2 text-sm font-medium transition
                ${
                  isActive
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-gray-100 dark:hover:bg-[#242529]"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Theme toggle */}
      <ThemeToggle />
    </aside>
  );
}
