import { render, screen, fireEvent } from "@testing-library/react";
import { MobileNav } from "./MobileNav";
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
  }
];

describe("MobileNav", () => {
  it("renders burger button", () => {
    render(
      <MobileNav
        navItems={mockNavItems}
        menuOpen={false}
        setMenuOpen={jest.fn()}
        isAtTop={false}
      />,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls setMenuOpen when burger button is clicked", () => {
    const setMenuOpen = jest.fn();

    render(
      <MobileNav
        navItems={mockNavItems}
        menuOpen={false}
        setMenuOpen={setMenuOpen}
        isAtTop={false}
      />,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(setMenuOpen).toHaveBeenCalled();
  });

  it("renders nav items when menu is open", () => {
    render(
      <MobileNav
        navItems={mockNavItems}
        menuOpen={true}
        setMenuOpen={jest.fn()}
        isAtTop={false}
      />,
    );

    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("hides top button when at top", () => {
    render(
      <MobileNav
        navItems={mockNavItems}
        menuOpen={true}
        setMenuOpen={jest.fn()}
        isAtTop={true}
      />,
    );

    const links = screen.getAllByRole("link");

    const hasTop = links.some((link) => link.getAttribute("href") === "#top");

    expect(hasTop).toBe(false);
  });

  it("calls setMenuOpen(false) when nav item is clicked", () => {
    const setMenuOpen = jest.fn();

    render(
      <MobileNav
        navItems={mockNavItems}
        menuOpen={true}
        setMenuOpen={setMenuOpen}
        isAtTop={false}
      />,
    );

    fireEvent.click(screen.getByText("About Me"));

    expect(setMenuOpen).toHaveBeenCalledWith(false);
  });
});
