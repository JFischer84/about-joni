import { sectionData, navItems } from "./sectionData";

describe("sectionData", () => {
  it("has stable ids", () => {
    expect(sectionData.map((s) => s.id)).toEqual([
      "about",
      "skills",
      "interests",
      "fun-facts",
      "contact",
    ]);
  });

  it("navItems includes all section ids", () => {
    const sectionIds = sectionData.map((s) => s.id);
    const navIds = navItems.map((n) => n.id);

    sectionIds.forEach((id) => {
      expect(navIds).toContain(id);
    });
  });

  it("navItems includes top", () => {
    expect(navItems.map((n) => n.id)).toContain("top");
  });
});
