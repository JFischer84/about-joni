import { ReactNode } from "react";

type NavButtonPropsType = {
  children: string | ReactNode;
  className: string;
  href: string;
  onClick?: () => void;
};

export const NavButton = ({
  children,
  className,
  href,
  onClick,
}: NavButtonPropsType) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center justify-center rounded-xl px-6 py-3 text-white shadow-lg transition-opacity hover:opacity-80 ${className}`}
  >
    {children}
  </a>
);
