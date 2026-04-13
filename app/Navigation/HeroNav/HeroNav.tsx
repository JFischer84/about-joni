import { NavButton } from "@/app/Navigation/NavButton/NavButton";
import React from "react";
import { navItems } from "@/app/Navigation/navData";

type HeroNavPropsType = {
  navRef: React.RefObject<HTMLDivElement | null>;
  stickyVisible: boolean;
};

export const HeroNav = ({ navRef, stickyVisible }: HeroNavPropsType) => (
  <div
    ref={navRef}
    className="mt-8 hidden flex-wrap justify-center gap-4 md:flex"
  >
    {navItems.map(({ name, id, color, shadow }) => (
      <NavButton
        key={id}
        href={`#${id}`}
        className={`${color} ${shadow} ${
          id === "top" && !stickyVisible ? "invisible" : ""
        }`}
      >
        {name}
      </NavButton>
    ))}
  </div>
);
