import { ChevronDown, ChevronUp, Layers3, Search, X } from "lucide-react";
import { type CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import { Button, Tooltip, TooltipTrigger } from "react-aria-components";

import { landTiers, type Card, type CardCycle, type Tier } from "#/data/land-tiers";

const tierDetails = {
  "5": {
    accent: "#f27c68",
  },
  "4": {
    accent: "#e9a94f",
  },
  "3": {
    accent: "#d4c85c",
  },
  "2": {
    accent: "#7eba74",
  },
  "1": {
    accent: "#63a9a0",
  },
} as const;

const noMatchingEntries = new Set<string>();

type SearchState = "active" | "match" | undefined;

function RepresentativeCard({
  card,
  cycle,
  searchState,
}: {
  card: Card;
  cycle?: CardCycle;
  searchState?: SearchState;
}) {
  const wrapperClassName = `relative w-42 flex-none rounded-xl transition-[box-shadow] max-[600px]:w-34 ${
    searchState === "active"
      ? "ring-3 ring-[#f5e87d] ring-offset-5 ring-offset-[#11150f] shadow-[0_0_28px_rgb(245_232_125_/_28%)]"
      : searchState === "match"
        ? "ring-2 ring-[#c8bc68]/75 ring-offset-3 ring-offset-[#11150f]"
        : ""
  }`;

  if (!cycle) {
    return (
      <div className={wrapperClassName} data-active-search-match={searchState === "active"}>
        <article
          className="w-full transition-all hover:-translate-y-1 hover:brightness-105 focus-visible:-translate-y-1 focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--tier-accent) focus-visible:brightness-105"
          aria-label={card.name}
        >
          <CardImage card={card} />
          <CardCaption />
        </article>
      </div>
    );
  }

  return (
    <div className={wrapperClassName} data-active-search-match={searchState === "active"}>
      <TooltipTrigger closeDelay={150} delay={150} shouldCloseOnPress={false}>
        <Button
          aria-label={`${card.name}, representative of ${cycle.name}`}
          className="w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left transition-all hover:-translate-y-1 hover:brightness-105 focus-visible:-translate-y-1 focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--tier-accent) focus-visible:brightness-105"
        >
          <CardImage card={card} />
          <CardCaption cycle={cycle} />
        </Button>
        <Tooltip
          className="z-50 m-0 max-h-[min(540px,calc(100vh-24px))] w-[min(760px,calc(100vw-24px))] origin-(--trigger-anchor-point) overflow-auto rounded-[14px] border border-[#454b42] bg-[rgb(25_28_24_/_97%)] p-0 text-[#eceae3] shadow-[0_24px_70px_rgb(0_0_0_/_52%)] outline-none data-[entering]:animate-cycle-popover-in data-[exiting]:animate-cycle-popover-out"
          offset={12}
          placement="bottom start"
        >
          <header className="flex items-center gap-3 border-b border-[#393e36] p-4">
            <span className="grid size-8 flex-none place-items-center rounded-full bg-[#30372d] text-[#bdcfac]">
              <Layers3 aria-hidden="true" size={15} />
            </span>
            <div>
              <p className="m-0 font-serif text-base">{cycle.name}</p>
              <span className="mt-[3px] block text-[0.68rem] text-[#838a7e]">
                {cycle.cards.length} cards in this cycle
              </span>
            </div>
          </header>
          <ul className="m-0 grid list-none grid-cols-5 gap-2.5 p-3 max-[700px]:grid-cols-4 max-[540px]:grid-cols-3 max-[400px]:grid-cols-2">
            {cycle.cards.map((cycleCard) => (
              <li className="min-w-0" key={cycleCard.oracleId}>
                <CardImage card={cycleCard} />
              </li>
            ))}
          </ul>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}

function CardImage({ card }: { card: Card }) {
  return (
    <img
      alt={card.name}
      className="block aspect-488/680 w-full rounded-[4.7%/3.4%] bg-[#252923] object-cover shadow-2xl"
      decoding="async"
      loading="lazy"
      src={card.imageUrl}
    />
  );
}

function CardCaption({ cycle }: { cycle?: CardCycle }) {
  return (
    <span className="flex min-w-0 items-center justify-between gap-2 px-0.75 pt-2.5 text-[0.62rem] font-bold tracking-[0.08em] text-[#9ca397] uppercase">
      {cycle ? (
        <>
          <span className="truncate">{cycle.name}</span>
          <small className="flex-none font-[inherit] text-[#656c61]">
            {cycle.cards.length} cards
          </small>
        </>
      ) : (
        <span className="truncate">Individual land</span>
      )}
    </span>
  );
}

function entryKey(entry: Card | CardCycle) {
  return entry.type === "card" ? entry.oracleId : entry.name;
}

function TierEntry({ entry, searchState }: { entry: Card | CardCycle; searchState?: SearchState }) {
  if (entry.type === "card") {
    return <RepresentativeCard card={entry} searchState={searchState} />;
  }

  const representative = entry.cards.find((card) => card.name === entry.representative);

  if (!representative) {
    return null;
  }

  return <RepresentativeCard card={representative} cycle={entry} searchState={searchState} />;
}

function TierRow({
  activeMatch,
  matchingEntries,
  tier,
}: {
  activeMatch?: string;
  matchingEntries: Set<string>;
  tier: Tier;
}) {
  const details = tierDetails[tier.name as keyof typeof tierDetails];

  return (
    <li
      className="grid min-h-60 grid-cols-[minmax(108px,0.18fr)_1fr] border-b border-border max-[900px]:grid-cols-[88px_minmax(0,1fr)] max-[600px]:grid-cols-[64px_minmax(0,1fr)]"
      style={{ "--tier-accent": details.accent } as CSSProperties}
    >
      <div
        className="relative flex h-full items-center justify-center overflow-hidden border-r border-border after:absolute after:right-0 after:left-0 after:bottom-0 after:h-1 after:bg-(--tier-accent)"
        aria-label={`Tier ${tier.name}`}
      >
        <strong className="font-serif text-[clamp(4.8rem,9vw,8rem)] leading-1 text-(--tier-accent) max-[600px]:text-[3.8rem]">
          {tier.name}
        </strong>
      </div>

      <div className="min-w-0 py-7 pl-8 max-[900px]:pl-6 max-[600px]:py-5.5 max-[600px]:pl-4.5">
        <div className="flex min-w-0 gap-3 overflow-x-auto pt-2 pr-5 pb-3 scrollbar-thumb-[#464c42] scrollbar-track-transparent scrollbar-thin">
          {tier.cards.map((entry) => (
            <TierEntry
              entry={entry}
              key={entryKey(entry)}
              searchState={
                activeMatch === entryKey(entry)
                  ? "active"
                  : matchingEntries.has(entryKey(entry))
                    ? "match"
                    : undefined
              }
            />
          ))}
        </div>
      </div>
    </li>
  );
}

export function TierList() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedMatch, setSelectedMatch] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const matchingEntryKeys = useMemo(() => {
    if (!normalizedQuery) return [];

    return landTiers.flatMap((tier) =>
      tier.cards
        .filter((entry) => {
          const cards = entry.type === "card" ? [entry] : entry.cards;
          return cards.some((card) => card.name.toLocaleLowerCase().includes(normalizedQuery));
        })
        .map(entryKey),
    );
  }, [normalizedQuery]);
  const activeMatch = matchingEntryKeys[selectedMatch];
  const matchingEntries = useMemo(() => new Set(matchingEntryKeys), [matchingEntryKeys]);

  const openSearch = () => {
    setIsSearchOpen(true);
    requestAnimationFrame(() => {
      searchInputRef.current?.focus();
      searchInputRef.current?.select();
    });
  };

  const moveMatch = (direction: 1 | -1) => {
    if (matchingEntryKeys.length === 0) return;
    setSelectedMatch(
      (current) => (current + direction + matchingEntryKeys.length) % matchingEntryKeys.length,
    );
  };

  useEffect(() => {
    const handleFindShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "f") {
        event.preventDefault();
        openSearch();
      } else if (event.key === "Escape" && isSearchOpen) {
        event.preventDefault();
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleFindShortcut);
    return () => window.removeEventListener("keydown", handleFindShortcut);
  }, [isSearchOpen]);

  useEffect(() => {
    if (!activeMatch || !isSearchOpen) return;

    document.querySelector<HTMLElement>('[data-active-search-match="true"]')?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [activeMatch, isSearchOpen]);

  return (
    <>
      <div className="flex justify-end pb-4">
        <Button
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#424a3e] bg-transparent px-4 py-2 text-xs font-bold text-[#aeb9a5] transition hover:border-[#75826d] hover:bg-[#1d221b] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#9baa8f]"
          onPress={openSearch}
        >
          <Search aria-hidden="true" size={14} />
          Search cards
          <kbd className="ml-1 rounded border border-[#3c4338] bg-[#191d17] px-1.5 py-0.5 font-sans text-[0.6rem] text-[#737b6e]">
            Ctrl F
          </kbd>
        </Button>
      </div>

      {isSearchOpen ? (
        <form
          className="fixed top-4 right-4 z-60 flex items-center gap-1 rounded-xl border border-[#4b5248] bg-[rgb(24_28_23_/_98%)] p-1.5 shadow-[0_18px_55px_rgb(0_0_0_/_45%)] max-[520px]:right-3 max-[520px]:left-3"
          onSubmit={(event) => {
            event.preventDefault();
            moveMatch(1);
          }}
          role="search"
        >
          <Search aria-hidden="true" className="ml-2 flex-none text-[#818b7a]" size={15} />
          <label className="sr-only" htmlFor="card-search">
            Search card names
          </label>
          <input
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent px-1.5 py-2 text-sm text-[#eceae3] outline-none placeholder:text-[#666e62] sm:w-56"
            id="card-search"
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedMatch(0);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" && event.shiftKey) {
                event.preventDefault();
                moveMatch(-1);
              }
            }}
            placeholder="Card name…"
            ref={searchInputRef}
            value={query}
          />
          <output
            aria-live="polite"
            className="w-10 flex-none text-center text-[0.68rem] tabular-nums text-[#858d80]"
          >
            {matchingEntryKeys.length === 0
              ? "0/0"
              : `${selectedMatch + 1}/${matchingEntryKeys.length}`}
          </output>
          <Button
            aria-label="Previous match"
            className="grid size-8 cursor-pointer place-items-center rounded-lg text-[#929b8b] hover:bg-[#343a31] hover:text-white disabled:cursor-default disabled:opacity-35"
            isDisabled={matchingEntryKeys.length === 0}
            onPress={() => moveMatch(-1)}
            type="button"
          >
            <ChevronUp aria-hidden="true" size={16} />
          </Button>
          <Button
            aria-label="Next match"
            className="grid size-8 cursor-pointer place-items-center rounded-lg text-[#929b8b] hover:bg-[#343a31] hover:text-white disabled:cursor-default disabled:opacity-35"
            isDisabled={matchingEntryKeys.length === 0}
            onPress={() => moveMatch(1)}
            type="button"
          >
            <ChevronDown aria-hidden="true" size={16} />
          </Button>
          <Button
            aria-label="Close search"
            className="grid size-8 cursor-pointer place-items-center rounded-lg text-[#929b8b] hover:bg-[#343a31] hover:text-white"
            onPress={() => setIsSearchOpen(false)}
            type="button"
          >
            <X aria-hidden="true" size={16} />
          </Button>
        </form>
      ) : null}

      <ol className="border-t border-border" aria-label="Land rankings">
        {landTiers.map((tier) => (
          <TierRow
            activeMatch={isSearchOpen ? activeMatch : undefined}
            key={tier.name}
            matchingEntries={isSearchOpen ? matchingEntries : noMatchingEntries}
            tier={tier}
          />
        ))}
      </ol>
    </>
  );
}
