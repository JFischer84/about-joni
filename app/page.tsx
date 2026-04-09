"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  type SectionType = {
    name: string;
    id: string;
  };

  const textColors = [
    "text-purple-300",
    "text-pink-300",
    "text-blue-300",
    "text-indigo-300",
    "text-fuchsia-300",
  ];

  const colors = [
    "bg-purple-400",
    "bg-pink-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-fuchsia-400",
  ];

  const shadows = [
    "shadow-purple-500/30",
    "shadow-pink-500/30",
    "shadow-blue-500/30",
    "shadow-indigo-500/30",
    "shadow-fuchsia-500/30",
  ];

  const sections = [
    { name: "About Me", id: "about" },
    { name: "Work & Skills", id: "skills" },
    { name: "Hobbies & Interests", id: "interests" },
    { name: "Fun Facts", id: "fun-facts" },
    { name: "Contact", id: "contact" },
  ];

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

  const createSection = (
    sectionId: string,
    sectionName: string,
    index: number,
  ) => (
    <section
      key={sectionId}
      id={sectionId}
      className="flex min-h-screen flex-col items-center justify-start px-6 py-20 pt-32"
    >
      <h2
        className={`mb-6 text-3xl font-bold md:text-4xl ${textColors[index]}`}
      >
        {sectionName}
      </h2>
      <p className="mx-auto max-w-2xl leading-relaxed text-gray-300">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae
      </p>
    </section>
  );

  return (
    <main className="bg-neutral-900 text-center">
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
          {sections.map(({ name, id }: SectionType, i: number) => (
            <a
              key={name}
              href={`#${id}`}
              className={`${colors[i]} rounded-xl px-6 py-3 text-white shadow-lg ${shadows[i]} transition-opacity hover:opacity-80 ${!stickyVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              {name}
            </a>
          ))}
        </div>
      </section>

      <div
        className={`fixed top-0 left-0 z-50 flex w-full justify-center gap-4 bg-neutral-900/60 px-6 py-4 backdrop-blur ${
          stickyVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {sections.map(({ name, id }: SectionType, i: number) => (
          <a
            key={name}
            href={`#${id}`}
            className={`${colors[i]} rounded-xl px-6 py-3 text-white shadow-lg ${shadows[i]} transition-opacity hover:opacity-80`}
          >
            {name}
          </a>
        ))}
      </div>

      {sections.map((section, i) => createSection(section.id, section.name, i))}
    </main>
  );
}
