import { NavButton } from "@/app/Navigation/NavButton/NavButton";
import { navItems } from "@/app/Navigation/navData";

type StickyNavPropsType = {
  stickyVisible: boolean;
};

export const StickyNav = ({ stickyVisible }: StickyNavPropsType) => (
  <div
    className={`fixed top-0 left-0 z-50 hidden w-full justify-center gap-4 bg-neutral-900/60 px-6 py-4 backdrop-blur md:flex ${
      stickyVisible ? "opacity-100" : "pointer-events-none opacity-0"
    }`}
  >
    {navItems.map(({ name, id, color, shadow }) => (
      <NavButton key={id} href={`#${id}`} className={`${color} ${shadow}`}>
        {name}
      </NavButton>
    ))}
  </div>
);
