import { ArrowUp } from "lucide-react";
import { ReactNode } from "react";

export type SectionId = (typeof sectionData)[number]["id"];

export type NavItemType = {
  id: SectionId | "top";
  name: string | ReactNode;
  color: string;
  shadow: string;
};

export const sectionData = [
  {
    id: "about",
    name: "About Me",
    color: "bg-purple-400",
    textColor: "text-purple-300",
    shadow: "shadow-purple-500/30",
  },
  {
    id: "skills",
    name: "Work & Skills",
    color: "bg-pink-400",
    textColor: "text-pink-300",
    shadow: "shadow-pink-500/30",
  },
  {
    id: "interests",
    name: "Hobbies & Interests",
    color: "bg-blue-400",
    textColor: "text-blue-300",
    shadow: "shadow-blue-500/30",
  },
  {
    id: "fun-facts",
    name: "Fun Facts",
    color: "bg-indigo-400",
    textColor: "text-indigo-300",
    shadow: "shadow-indigo-500/30",
  },
  {
    id: "contact",
    name: "Contact",
    color: "bg-fuchsia-400",
    textColor: "text-fuchsia-300",
    shadow: "shadow-fuchsia-500/30",
  },
] as const;

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
