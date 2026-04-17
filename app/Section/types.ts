import { sectionData } from "@/app/config/sections";

export type SectionId = (typeof sectionData)[number]["id"];

export type IconType = "github" | "linkedin" | "xing";

export type SectionItem =
  | string
  | {
      label: string;
      href: string;
      icon?: IconType;
    };

export type SectionContent = {
  id: SectionId;
  text?: string;
  items?: SectionItem[];
};
