import { describe, expect, it } from "vite-plus/test";

import { classifyLands } from "#/lib/scryfall-cards";

describe("classifyLands", () => {
  it("matches a double-faced Scryfall card to its front-face deck name", () => {
    expect(
      classifyLands(
        [{ name: "Clearwater Pathway", quantity: 2 }],
        [
          {
            name: "Clearwater Pathway // Murkwater Pathway",
            type_line: "Land // Land",
          },
        ],
      ),
    ).toEqual([{ name: "Clearwater Pathway", quantity: 2, isBasic: false }]);
  });

  it("matches a deck entry using the back-face name", () => {
    expect(
      classifyLands(
        [{ name: "Murkwater Pathway", quantity: 1 }],
        [
          {
            name: "Clearwater Pathway // Murkwater Pathway",
            type_line: "Land // Land",
          },
        ],
      ),
    ).toEqual([{ name: "Clearwater Pathway", quantity: 1, isBasic: false }]);
  });
});
