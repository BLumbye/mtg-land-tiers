import { Layers3 } from "lucide-react";
import { type CSSProperties } from "react";
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

function RepresentativeCard({ card, cycle }: { card: Card; cycle?: CardCycle }) {
  if (!cycle) {
    return (
      <div className="w-42 flex-none max-[600px]:w-34">
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
    <div className="w-42 flex-none max-[600px]:w-34">
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

function TierEntry({ entry }: { entry: Card | CardCycle }) {
  if (entry.type === "card") {
    return <RepresentativeCard card={entry} />;
  }

  const representative = entry.cards.find((card) => card.name === entry.representative);

  if (!representative) {
    return null;
  }

  return <RepresentativeCard card={representative} cycle={entry} />;
}

function TierRow({ tier }: { tier: Tier }) {
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
            <TierEntry entry={entry} key={entry.type === "card" ? entry.oracleId : entry.name} />
          ))}
        </div>
      </div>
    </li>
  );
}

export function TierList() {
  return (
    <ol className="border-t border-border" aria-label="Land rankings">
      {landTiers.map((tier) => (
        <TierRow key={tier.name} tier={tier} />
      ))}
    </ol>
  );
}
