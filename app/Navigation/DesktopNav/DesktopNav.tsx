import { NavButton } from "@/app/Navigation/NavButton/NavButton";
import React from "react";
import { NavItemType } from "@/app/Navigation/types";

type DesktopNavProps = {
  navItems: NavItemType[];
  navRef: React.RefObject<HTMLDivElement | null>;
  stickyVisible: boolean;
};

export const DesktopNav = ({
  navRef,
  stickyVisible,
  navItems,
}: DesktopNavProps) => {
  const renderNavItems = (isHero = false) =>
    navItems.map(({ name, id, color, shadow }) => (
      <NavButton
        key={id}
        href={`#${id}`}
        className={`${color} ${shadow} ${
          isHero && id === "top" && !stickyVisible ? "invisible" : ""
        }`}
      >
        {name}
      </NavButton>
    ));

  return (
    <>
      <div
        ref={navRef}
        className="mt-8 hidden flex-wrap justify-center gap-4 md:flex"
      >
        {renderNavItems(true)}
      </div>
      <div
        className={`fixed top-0 left-0 z-50 hidden w-full justify-center gap-4 bg-neutral-900/60 px-6 py-4 backdrop-blur md:flex ${
          stickyVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {renderNavItems(false)}
      </div>
    </>
  );
};
