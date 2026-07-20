import type { DeckEntry } from "#/lib/deck-list";

export type ScryfallCard = {
  name: string;
  type_line: string;
};

export type ClassifiedLand = DeckEntry & {
  isBasic: boolean;
};

export function classifyLands(entries: DeckEntry[], cards: ScryfallCard[]): ClassifiedLand[] {
  const entryByName = new Map(entries.map((entry) => [normalizeName(entry.name), entry]));
  const lands: ClassifiedLand[] = [];

  for (const card of cards) {
    const typeLines = card.type_line.split(" // ");
    if (!typeLines.some((typeLine) => typeLine.includes("Land"))) continue;

    const faceNames = card.name.split(" // ");
    const entry = faceNames
      .map((name) => entryByName.get(normalizeName(name)))
      .find((candidate) => candidate !== undefined);

    if (entry) {
      lands.push({
        ...entry,
        isBasic: typeLines.some((typeLine) => typeLine.includes("Basic Land")),
        name: faceNames[0] ?? card.name,
      });
    }
  }

  return lands;
}

function normalizeName(name: string): string {
  return name.toLocaleLowerCase();
}
