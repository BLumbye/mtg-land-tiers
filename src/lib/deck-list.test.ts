import { describe, expect, it } from "vite-plus/test";

import { parseDeckList } from "./deck-list";

describe("parseDeckList", () => {
  it("parses quantities and combines duplicate card names", () => {
    expect(parseDeckList("7 Mountain\n8 Mountain\n1 Fountainport")).toEqual([
      { name: "Mountain", quantity: 15 },
      { name: "Fountainport", quantity: 1 },
    ]);
  });

  it("accepts common export formats and skips headings", () => {
    expect(
      parseDeckList("Commander\n1x Zada, Hedron Grinder\nSB: 2 War Room\n1 Fountainport (BLB) 253"),
    ).toEqual([
      { name: "Zada, Hedron Grinder", quantity: 1 },
      { name: "War Room", quantity: 2 },
      { name: "Fountainport", quantity: 1 },
    ]);
  });
});
