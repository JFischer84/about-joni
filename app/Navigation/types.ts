import { ReactNode } from "react";
import { SectionId } from "@/app/Section/sectionData";

export type NavItemType = {
  id: SectionId | "top";
  name: string | ReactNode;
  color: string;
  shadow: string;
};
