import { navItems } from "@/app/Navigation/navData";
import { sectionData } from "@/app/Section/sectionData";

describe("navData", () => {
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
