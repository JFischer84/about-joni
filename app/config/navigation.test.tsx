import { navItems } from "@/app/config/navigation";
import { sectionData } from "@/app/config/sections";

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
