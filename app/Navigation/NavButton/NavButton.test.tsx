import { render, screen } from "@testing-library/react";

import { NavButton } from "./NavButton";

describe("NavButton", () => {
  it("renders children", () => {
    render(
      <NavButton href="#about" className="test">
        About
      </NavButton>,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("has correct href", () => {
    render(
      <NavButton href="#about" className="test">
        About
      </NavButton>,
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "#about");
  });

  it("applies className", () => {
    render(
      <NavButton href="#about" className="test">
        About
      </NavButton>,
    );
    expect(screen.getByRole("link")).toHaveClass("test");
  });
});
