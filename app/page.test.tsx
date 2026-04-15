import { ComponentProps } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "./page";

jest.mock("next/image", () => {
  const MockedImage = (props: ComponentProps<"img">) => {
    return <img {...props} />;
  };

  MockedImage.displayName = "MockedNextImage";

  return MockedImage;
});

jest.mock("@/app/Hooks/useStickyNav", () => ({
  useStickyNav: () => false,
}));

jest.mock("@/app/Hooks/useIsAtTop", () => ({
  useIsAtTop: () => true,
}));

describe("Home page", () => {
  it("renders hero content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /hi, my name is joni/i }),
    ).toBeInTheDocument();

    expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument();

    expect(screen.getByAltText("Portrait of me")).toBeInTheDocument();
  });

  it("renders navigation", () => {
    render(<Home />);

    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });

  it("renders all sections", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Work & Skills" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Hobbies & Interests" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Fun Facts" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Contact" }),
    ).toBeInTheDocument();
  });

  it("toggles mobile menu visibility", () => {
    render(<Home />);

    const button = screen.getByRole("button");
    const menu = screen.getByTestId("mobile-menu");

    expect(menu).toHaveClass("opacity-0");

    fireEvent.click(button);
    expect(menu).toHaveClass("opacity-100");

    fireEvent.click(button);
    expect(menu).toHaveClass("opacity-0");
  });
});
