"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { sectionContent, sectionData } from "@/app/config/sections";
import { Section } from "@/app/Section/Section";

import { DesktopNav } from "@/app/Navigation/DesktopNav/DesktopNav";
import { MobileNav } from "@/app/Navigation/MobileNav/MobileNav";
import { useStickyNav } from "@/app/Hooks/useStickyNav";
import { useIsAtTop } from "@/app/Hooks/useIsAtTop";
import { navItems } from "@/app/config/navigation";

export default function Home() {
  const navRef = useRef<HTMLDivElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const stickyVisible = useStickyNav(navRef);
  const isAtTop = useIsAtTop();

  return (
    <main id="top" className="bg-neutral-900 text-center">
      <MobileNav
        navItems={navItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isAtTop={isAtTop}
      />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Image
          src="/images/me.webp"
          alt="Portrait of me"
          width={192}
          height={192}
          className="mb-8 h-64 w-64 rounded-full object-cover shadow-lg ring-1 ring-purple-400/50 drop-shadow-[0_0_12px_rgba(168,85,247,0.2)] transition-transform duration-300 hover:scale-105"
        />
        <h1 className="mb-4 text-5xl font-bold text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
          Hi, my name is Joni 👋
        </h1>

        <p className="mb-6 text-lg text-gray-300">
          Full-Stack Developer focused on TypeScript & React
        </p>

        <div className={menuOpen ? "hidden md:flex" : ""}>
          <DesktopNav
            navItems={navItems}
            navRef={navRef}
            stickyVisible={stickyVisible}
          />
        </div>
      </section>
      {sectionData.map(({ id, name, textColor }) => {
        const content = sectionContent.find((c) => c.id === id);
        return (
          <Section
            key={id}
            id={id}
            name={name}
            textColor={textColor}
            text={content ? content.text : ""}
            items={content ? content.items : []}
          />
        );
      })}
    </main>
  );
}
