import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Section } from "./Section";

describe("Section", () => {
  it("renders title", () => {
    render(<Section id="about" name="About Me" textColor="text-red-500" />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("has correct id", () => {
    const { container } = render(
      <Section id="about" name="About Me" textColor="text-red-500" />,
    );
    expect(container.querySelector("section")).toHaveAttribute("id", "about");
  });
});
