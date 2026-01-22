"use client";

import { useState, useEffect, useCallback } from "react";

type Section = {
  id: string;
  label: string;
};

const sections: Section[] = [
  { id: "hero", label: "Start" },
  { id: "doges", label: "Doges" },
  { id: "about", label: "About" },
];

export default function ScrollProgress() {
  const [activeId, setActiveId] = useState<string>("hero");

  // 1. Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 2. Scroll Handler
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // 3. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      const currentIndex = sections.findIndex((s) => s.id === activeId);
      if (currentIndex === -1) return;
      if (e.key === "ArrowDown") {
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        scrollToSection(sections[nextIndex].id);
      } else if (e.key === "ArrowUp") {
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToSection(sections[prevIndex].id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId, scrollToSection]);

  return (
    <>
      {/* MOBILE / TABLET NAV */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 flex lg:hidden items-center gap-4 px-4 py-3 bg-neutral-900/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl max-w-[90vw]">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-center p-2 focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            <div
              className={`w-3 h-3 rotate-45 border transition-all duration-300 ${
                activeId === section.id
                  ? "bg-amber-400 border-amber-400 scale-125 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                  : "bg-transparent border-white/50"
              }`}
            />
          </button>
        ))}
      </nav>

      <nav className="fixed top-1/2 -translate-y-1/2 z-100 hidden lg:flex flex-col items-center gap-6 lg:left-6 lg:scale-75 lg:origin-left xl:left-8 xl:scale-100 transition-transform duration-300">
        <div className="absolute top-6 bottom-6 left-7 w-1 bg-white/20 -z-10 rounded-full" />

        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center p-2 focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            <div className="relative flex items-center justify-center w-12 h-12">
              <div
                className={`absolute inset-0 rounded-full blur-lg transition-all duration-500 ${
                  activeId === section.id
                    ? "bg-amber-400/80 opacity-100 scale-150"
                    : "bg-white/0 opacity-0 scale-50"
                }`}
              />

              <div
                className={`w-6 h-6 rotate-45 border-2 transition-all duration-300 ${
                  activeId === section.id
                    ? "bg-amber-400 border-amber-400 scale-110 shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                    : "bg-black border-white group-hover:bg-white group-hover:scale-110"
                }`}
              />
            </div>

            <span
              className={`absolute left-20 text-lg font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeId === section.id
                  ? "text-amber-400 opacity-100 translate-x-0"
                  : "text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
