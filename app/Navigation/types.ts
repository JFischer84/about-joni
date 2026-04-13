import { ReactNode } from "react";
import { SectionId } from "@/app/config/sections";

export type NavItemType = {
  id: SectionId | "top";
  name: string | ReactNode;
  color: string;
  shadow: string;
};
