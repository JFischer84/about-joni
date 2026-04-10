import { ReactNode } from "react";

type NavButtonType = {
  children: string | ReactNode;
  className: string;
  href: string;
};

export const NavButton = ({ children, className, href }: NavButtonType) => (
  <a
    href={href}
    className={`rounded-xl px-6 py-3 text-white shadow-lg transition-opacity hover:opacity-80 ${className}`}
  >
    {children}
  </a>
);
