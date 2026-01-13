"use client";

import { useState, useEffect } from "react";
import SlideMenu from "./SlideMenu";
import { useTheme } from "next-themes";

export default function SidebarRight() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Thin Right Vertical Bar */}
      <aside
        className="fixed right-0 top-0 h-full w-[60px] bg-white border-l border-gray-200 dark:bg-[#1D1E22] dark:border-[#2B2C30] flex flex-col items-center pt-8"
      >
        {/* Hamburger Icon */}
        <button
          className="text-2xl text-gray-600 dark:text-gray-300 hover:text-yellow-400"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        {/* Theme Toggle */}
        <button
          className="mt-8 text-xl text-gray-600 dark:text-gray-300 hover:text-yellow-400"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (resolvedTheme === "dark" ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>)}
        </button>

        {/* Rotated HOME text */}
        <p className="mt-20 rotate-90 text-sm text-gray-500 dark:text-gray-400 tracking-widest">
          HOME
        </p>
      </aside>

      {/* Slide-out Menu */}
      {open && <SlideMenu close={() => setOpen(false)} />}
    </>
  );
}
