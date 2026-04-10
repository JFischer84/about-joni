"use client";

import { useEffect, useState, useRef } from "react";
import { navItems, NavItemType, sectionData } from "@/app/sectionData";
import { Section } from "@/app/Section/Section";
import { NavButton } from "@/app/NavButton/NavButton";

export default function Home() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <main id="top" className="bg-neutral-900 text-center">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 text-5xl font-bold text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
          Hi, my name is Joni 👋
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          I am a Frontend Developer with focus on TypeScript & React
        </p>
        <div
          ref={navRef}
          className="top-0 mt-8 flex flex-wrap justify-center gap-4"
        >
          {navItems.map(({ name, id, color, shadow }: NavItemType) => (
            <NavButton
              className={`${color} ${shadow} ${id === "top" && !stickyVisible ? "invisible" : ""}`}
              href={`#${id}`}
              key={id}
            >
              {name}
            </NavButton>
          ))}
        </div>
      </section>

      <div
        className={`fixed top-0 left-0 z-50 flex w-full justify-center gap-4 bg-neutral-900/60 px-6 py-4 backdrop-blur ${
          stickyVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navItems.map(({ name, id, color, shadow }: NavItemType) => (
          <NavButton className={`${color} ${shadow}`} href={`#${id}`} key={id}>
            {name}
          </NavButton>
        ))}
      </div>

      {sectionData.map(({ id, name, textColor }) => (
        <Section key={id} id={id} name={name} textColor={textColor} />
      ))}
    </main>
  );
}
