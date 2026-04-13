import { sectionData } from "./sectionData";

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
});
