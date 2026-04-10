import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./page";

describe("Home page", () => {
  it("renders navigation links", () => {
    render(<Home />);
    expect(
      screen.getAllByRole("link", { name: "About Me" }).length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByRole("link", { name: "Work & Skills" }).length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByRole("link", { name: "Hobbies & Interests" }).length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByRole("link", { name: "Fun Facts" }).length,
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByRole("link", { name: "Contact" }).length,
    ).toBeGreaterThan(0);
  });

  it("links have correct hrefs", () => {
    render(<Home />);

    const aboutLink = screen.getAllByText("About Me")[0];
    expect(aboutLink).toHaveAttribute("href", "#about");
  });
});
