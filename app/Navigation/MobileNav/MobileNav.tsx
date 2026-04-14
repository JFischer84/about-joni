"use client";

import { NavButton } from "@/app/Navigation/NavButton/NavButton";
import { Dispatch, SetStateAction, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavItemType } from "@/app/Navigation/types";

type MobileNavPropsType = {
  navItems: NavItemType[];
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isAtTop: boolean;
};

export const MobileNav = ({
  navItems,
  menuOpen,
  setMenuOpen,
  isAtTop,
}: MobileNavPropsType) => {
  const [isAtTopSnapshot, setIsAtTopSnapshot] = useState(isAtTop);

  const handleToggleMenu = () => {
    if (!menuOpen) {
      setIsAtTopSnapshot(isAtTop);
    }
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleToggleMenu}
        className="fixed top-4 right-4 z-60 rounded-lg bg-neutral-800/80 p-2 text-white md:hidden"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-neutral-900/80 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {navItems
          .filter((item) => !(item.id === "top" && isAtTopSnapshot))
          .map(({ name, id, color, shadow }) => (
            <NavButton
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`${color} ${shadow} w-64 text-center text-lg`}
            >
              {name}
            </NavButton>
          ))}
      </div>
    </>
  );
};
