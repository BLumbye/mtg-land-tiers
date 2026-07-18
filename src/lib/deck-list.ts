export type DeckEntry = {
  name: string;
  quantity: number;
};

const deckLinePattern = /^(?:SB:\s*)?(\d+)\s*x?\s+(.+?)\s*$/i;
const setSuffixPattern = /\s+\([A-Z0-9]{2,8}\)\s+[A-Z0-9-]+(?:\s+\*F\*)?$/i;

export function parseDeckList(deckList: string): DeckEntry[] {
  const entries = new Map<string, DeckEntry>();

  for (const rawLine of deckList.split(/\r?\n/)) {
    const line = rawLine.trim();
    const match = line.match(deckLinePattern);

    if (!match) {
      continue;
    }

    const quantity = Number(match[1]);
    const name = match[2]?.replace(setSuffixPattern, "").trim();

    if (!name || !Number.isSafeInteger(quantity) || quantity <= 0) {
      continue;
    }

    const key = name.toLocaleLowerCase();
    const existing = entries.get(key);

    if (existing) {
      existing.quantity += quantity;
    } else {
      entries.set(key, { name, quantity });
    }
  }

  return [...entries.values()];
}
