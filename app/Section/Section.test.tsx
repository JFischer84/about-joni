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

  it("renders text when provided", () => {
    render(
      <Section
        id="about"
        name="About Me"
        textColor="text-red-500"
        text="Hello I am Joni"
      />,
    );

    expect(screen.getByText("Hello I am Joni")).toBeInTheDocument();
  });

  it("does not render text when not provided", () => {
    const { container } = render(
      <Section id="about" name="About Me" textColor="text-red-500" />,
    );

    expect(container.querySelector("p")).not.toBeInTheDocument();
  });

  it("renders string items correctly", () => {
    render(
      <Section
        id="skills"
        name="Skills"
        textColor="text-blue-500"
        items={["React", "TypeScript"]}
      />,
    );

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders link items correctly", () => {
    render(
      <Section
        id="links"
        name="Links"
        textColor="text-blue-500"
        items={[
          { label: "GitHub", href: "https://github.com" },
          { label: "Portfolio", href: "https://example.com" },
        ]}
      />,
    );

    const githubLink = screen.getByText("GitHub");
    const portfolioLink = screen.getByText("Portfolio");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest("a")).toHaveAttribute(
      "href",
      "https://github.com",
    );

    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink.closest("a")).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  it("renders mixed string and link items", () => {
    render(
      <Section
        id="mixed"
        name="Mixed"
        textColor="text-purple-500"
        items={["React", { label: "GitHub", href: "https://github.com" }]}
      />,
    );

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("does not render list when items are not provided", () => {
    const { container } = render(
      <Section id="empty" name="Empty" textColor="text-gray-500" />,
    );

    expect(container.querySelector("ul")).not.toBeInTheDocument();
  });
});
