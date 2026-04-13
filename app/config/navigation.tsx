import { sectionData } from "@/app/config/sections";
import { ArrowUp } from "lucide-react";
import { NavItemType } from "@/app/Navigation/types";

export const navItems: NavItemType[] = [
  ...sectionData.map((section) => ({
    id: section.id,
    name: section.name,
    color: section.color,
    shadow: section.shadow,
  })),
  {
    id: "top",
    name: <ArrowUp />,
    color: "bg-emerald-400",
    shadow: "shadow-emerald-500/30",
  },
];
