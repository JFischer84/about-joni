import { render, screen } from "@testing-library/react";
import { DesktopNav } from "./DesktopNav";
import React from "react";
import { NavItemType } from "@/app/Navigation/types";

const mockNavItems: NavItemType[] = [
  {
    id: "about",
    name: "About Me",
    color: "bg-purple-400",
    shadow: "shadow",
  },
  {
    id: "top",
    name: "Top",
    color: "bg-green-400",
    shadow: "shadow",
  },
];

describe("DesktopNav", () => {
  const mockRef = { current: null };

  it("renders all nav items twice (hero + sticky)", () => {
    render(
      <DesktopNav
        navItems={mockNavItems}
        navRef={mockRef}
        stickyVisible={false}
      />,
    );

    const aboutLinks = screen.getAllByText("About Me");
    expect(aboutLinks).toHaveLength(2);
  });

  it("hides top button in hero nav when not sticky", () => {
    render(
      <DesktopNav
        navItems={mockNavItems}
        navRef={mockRef}
        stickyVisible={false}
      />,
    );

    const topLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "#top");

    const hasInvisible = topLinks.some((link) =>
      link.className.includes("invisible"),
    );

    expect(hasInvisible).toBe(true);
  });

  it("shows top button in both navs when stickyVisible is true", () => {
    render(
      <DesktopNav
        navItems={mockNavItems}
        navRef={mockRef}
        stickyVisible={true}
      />,
    );

    const topLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "#top");

    const allVisible = topLinks.every(
      (link) => !link.className.includes("invisible"),
    );

    expect(allVisible).toBe(true);
  });
});
