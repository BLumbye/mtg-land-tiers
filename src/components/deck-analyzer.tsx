import { AlertCircle, Check, LoaderCircle, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { landTiers, type Card } from "#/data/land-tiers";
import { parseDeckList, type DeckEntry } from "#/lib/deck-list";

type ScryfallCard = {
  name: string;
  type_line: string;
};

type ClassifiedLand = DeckEntry & {
  isBasic: boolean;
};

type Analysis = {
  lands: ClassifiedLand[];
  unresolved: DeckEntry[];
};

const tierAccents = ["#f27c68", "#e9a94f", "#d4c85c", "#7eba74", "#63a9a0"];

const tierByCardName = new Map<string, string>();
for (const tier of landTiers) {
  for (const entry of tier.cards) {
    const cards: Card[] = entry.type === "card" ? [entry] : entry.cards;
    for (const card of cards) {
      tierByCardName.set(card.name.toLocaleLowerCase(), tier.name);
    }
  }
}

async function fetchCards(entries: DeckEntry[]): Promise<Analysis> {
  const cards: ScryfallCard[] = [];
  const missingNames = new Set<string>();

  for (let index = 0; index < entries.length; index += 75) {
    const batch = entries.slice(index, index + 75);
    const response = await fetch("https://api.scryfall.com/cards/collection", {
      body: JSON.stringify({ identifiers: batch.map(({ name }) => ({ name })) }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Scryfall could not check this deck right now.");
    }

    const result = (await response.json()) as {
      data: ScryfallCard[];
      not_found?: { name?: string }[];
    };
    cards.push(...result.data);
    for (const missing of result.not_found ?? []) {
      if (missing.name) missingNames.add(missing.name.toLocaleLowerCase());
    }
  }

  const entryByName = new Map(entries.map((entry) => [entry.name.toLocaleLowerCase(), entry]));
  const lands: ClassifiedLand[] = [];

  for (const card of cards) {
    if (!card.type_line.split(" // ").some((typeLine) => typeLine.includes("Land"))) continue;
    const entry = entryByName.get(card.name.toLocaleLowerCase());
    if (entry) {
      lands.push({
        ...entry,
        isBasic: card.type_line.split(" // ").some((typeLine) => typeLine.includes("Basic Land")),
        name: card.name,
      });
    }
  }

  return {
    lands,
    unresolved: entries.filter((entry) => missingNames.has(entry.name.toLocaleLowerCase())),
  };
}

function Quantity({ value }: { value: number }) {
  return (
    <span className="grid min-w-8 place-items-center rounded-full bg-[#2b3028] px-2 py-1 text-xs font-bold text-[#d8ddd2]">
      {value}
    </span>
  );
}

export function DeckAnalyzer() {
  const [deckList, setDeckList] = useState("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const groupedResults = useMemo(() => {
    if (!analysis) return null;
    const tiers = landTiers.map((tier) => ({ ...tier, matches: [] as DeckEntry[] }));
    const basics: DeckEntry[] = [];
    const untiered: DeckEntry[] = [];

    for (const land of analysis.lands) {
      if (land.isBasic) {
        basics.push(land);
        continue;
      }

      const tierName = tierByCardName.get(land.name.toLocaleLowerCase());
      const tier = tiers.find(({ name }) => name === tierName);
      if (tier) tier.matches.push(land);
      else untiered.push(land);
    }

    return { basics, tiers, untiered };
  }, [analysis]);

  async function analyze() {
    const entries = parseDeckList(deckList);
    setError("");
    setAnalysis(null);

    if (entries.length === 0) {
      setError("Paste a deck list with one card per line, such as “1 Fountainport”.");
      return;
    }

    setIsLoading(true);
    try {
      setAnalysis(await fetchCards(entries));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "The deck could not be checked.");
    } finally {
      setIsLoading(false);
    }
  }

  const landCount = analysis?.lands.reduce((sum, land) => sum + land.quantity, 0) ?? 0;

  return (
    <div className="grid gap-12">
      <section className="grid grid-cols-[minmax(0,1.1fr)_minmax(280px,0.55fr)] gap-8 max-[800px]:grid-cols-1">
        <div>
          <label
            className="mb-3 block text-xs font-bold tracking-[0.12em] text-[#9da696] uppercase"
            htmlFor="deck-list"
          >
            Deck list
          </label>
          <textarea
            className="min-h-108 w-full resize-y rounded-xl border border-[#42483e] bg-[#181b17] p-5 font-mono text-sm leading-6 text-[#eceae3] shadow-inner outline-none transition focus:border-[#8da47a] focus:ring-3 focus:ring-[#8da47a]/15"
            id="deck-list"
            onChange={(event) => setDeckList(event.target.value)}
            placeholder={"1 Fountainport\n1 Shinka, the Bloodsoaked Keep\n15 Mountain\n1 Sol Ring"}
            spellCheck={false}
            value={deckList}
          />
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <button
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#dce9d1] px-5 py-3 text-sm font-bold text-[#192016] transition hover:bg-white disabled:cursor-wait disabled:opacity-60"
              disabled={isLoading}
              onClick={analyze}
              type="button"
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin" size={17} />
              ) : (
                <Search size={17} />
              )}
              {isLoading ? "Checking cards…" : "Analyze deck"}
            </button>
            <span className="text-xs text-[#777e72]">
              Quantities, “1x”, sideboards, and set codes are supported.
            </span>
          </div>
          {error ? (
            <p className="mt-4 flex items-center gap-2 text-sm text-[#f29b8c]" role="alert">
              <AlertCircle size={16} /> {error}
            </p>
          ) : null}
        </div>

        <aside className="self-start rounded-xl border border-[#343a31] bg-[#171a16]/80 p-6">
          <span className="text-xs font-bold tracking-[0.12em] text-[#798174] uppercase">
            How it works
          </span>
          <ol className="mt-6 grid gap-5 text-sm text-[#aeb5a9]">
            {[
              "Paste an Arena, Moxfield, or plain-text deck list.",
              "Card names are checked against Scryfall.",
              "Every land is matched to the current tier list.",
            ].map((step, index) => (
              <li className="grid grid-cols-[28px_1fr] items-start gap-3" key={step}>
                <span className="grid size-7 place-items-center rounded-full border border-[#475043] font-serif text-[#cad7be]">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      {analysis && groupedResults ? (
        <section aria-live="polite">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
            <div>
              <p className="mb-2 text-xs font-bold tracking-[0.12em] text-[#8c9585] uppercase">
                Deck results
              </p>
              <h2 className="font-serif text-4xl">
                {landCount} land {landCount === 1 ? "card" : "cards"}
              </h2>
            </div>
            <span className="text-sm text-[#7e8678]">
              {analysis.lands.length} unique lands found
            </span>
          </div>

          <div className="grid gap-3">
            {groupedResults.tiers.map((tier, index) => (
              <article
                className="grid grid-cols-[72px_1fr] overflow-hidden rounded-lg border border-border bg-[#171a16]/70"
                key={tier.name}
              >
                <div
                  className="grid place-items-center border-r border-border py-5"
                  style={{ color: tierAccents[index] }}
                >
                  <strong className="font-serif text-4xl">{tier.name}</strong>
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-xs font-bold tracking-[0.1em] text-[#8e9788] uppercase">
                      Tier {tier.name}
                    </h3>
                    <span className="text-xs text-[#666e62]">
                      {tier.matches.reduce((sum, card) => sum + card.quantity, 0)} cards
                    </span>
                  </div>
                  {tier.matches.length ? (
                    <ul className="grid gap-2">
                      {tier.matches.map((card) => (
                        <li
                          className="flex items-center justify-between gap-4 rounded-md bg-[#20241e] px-3 py-2 text-sm"
                          key={card.name}
                        >
                          <span>{card.name}</span>
                          <Quantity value={card.quantity} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="flex items-center gap-2 py-2 text-sm text-[#62695e]">
                      <X size={14} /> No lands from this tier
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-xl border border-[#536272] bg-[#171c20] p-6">
            <header className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="mb-2 text-xs font-bold tracking-[0.12em] text-[#9eb4c6] uppercase">
                  Mana base staples
                </p>
                <h3 className="font-serif text-2xl">Basic lands</h3>
              </div>
              <span className="rounded-full bg-[#29343d] px-3 py-1 text-xs font-bold text-[#c3d5e3]">
                {groupedResults.basics.reduce((sum, card) => sum + card.quantity, 0)} cards
              </span>
            </header>
            {groupedResults.basics.length ? (
              <ul className="mt-5 grid grid-cols-2 gap-2 max-[650px]:grid-cols-1">
                {groupedResults.basics.map((card) => (
                  <li
                    className="flex items-center justify-between rounded-md border border-[#313e48] bg-[#1d252b] px-3 py-2.5 text-sm"
                    key={card.name}
                  >
                    <span>{card.name}</span>
                    <Quantity value={card.quantity} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm text-[#778793]">No basic lands in this deck.</p>
            )}
          </article>

          <article className="mt-8 rounded-xl border border-[#59634f] bg-[#1a1f17] p-6">
            <header className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="mb-2 text-xs font-bold tracking-[0.12em] text-[#a9bb99] uppercase">
                  Not on the tier list
                </p>
                <h3 className="font-serif text-2xl">Untiered lands</h3>
              </div>
              <span className="rounded-full bg-[#30382a] px-3 py-1 text-xs font-bold text-[#c4d4b6]">
                {groupedResults.untiered.length} unique
              </span>
            </header>
            {groupedResults.untiered.length ? (
              <ul className="mt-5 grid grid-cols-2 gap-2 max-[650px]:grid-cols-1">
                {groupedResults.untiered.map((card) => (
                  <li
                    className="flex items-center justify-between rounded-md border border-[#343c2f] bg-[#20251d] px-3 py-2.5 text-sm"
                    key={card.name}
                  >
                    <span>{card.name}</span>
                    <Quantity value={card.quantity} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 flex items-center gap-2 text-sm text-[#9fab94]">
                <Check size={16} /> Every land in this deck has a tier.
              </p>
            )}
          </article>

          {analysis.unresolved.length ? (
            <p className="mt-5 text-xs text-[#8f9589]">
              Could not identify: {analysis.unresolved.map(({ name }) => name).join(", ")}. Check
              these card names for typos.
            </p>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
