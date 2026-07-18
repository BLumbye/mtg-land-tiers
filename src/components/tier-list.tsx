import { Layers3 } from "lucide-react";
import { type CSSProperties } from "react";
import { Button, Tooltip, TooltipTrigger } from "react-aria-components";

import { landTiers, type Card, type CardCycle, type Tier } from "#/data/land-tiers";

const tierDetails = {
  "5": {
    title: "Format defining",
    description: "The most powerful options available.",
    accent: "#f27c68",
  },
  "4": {
    title: "Excellent",
    description: "Reliable choices with a small opportunity cost.",
    accent: "#e9a94f",
  },
  "3": {
    title: "Strong",
    description: "Good options that reward the right supporting deck.",
    accent: "#d4c85c",
  },
  "2": {
    title: "Situational",
    description: "Useful in a narrower strategy or metagame.",
    accent: "#7eba74",
  },
  "1": {
    title: "Fringe",
    description: "Playable, but usually outclassed by another option.",
    accent: "#63a9a0",
  },
} as const;

function RepresentativeCard({ card, cycle }: { card: Card; cycle?: CardCycle }) {
  if (!cycle) {
    return (
      <div className="land-card-shell">
        <article className="land-card" aria-label={card.name}>
          <CardImage card={card} />
          <CardCaption />
        </article>
      </div>
    );
  }

  return (
    <div className="land-card-shell">
      <TooltipTrigger closeDelay={150} delay={150} shouldCloseOnPress={false}>
        <Button
          aria-label={`${card.name}, representative of ${cycle.name}`}
          className="land-card land-card--button"
        >
          <CardImage card={card} />
          <CardCaption cycle={cycle} />
        </Button>
        <Tooltip className="cycle-popover" offset={12} placement="bottom start">
          <header className="cycle-popover__header">
            <span className="cycle-popover__icon">
              <Layers3 aria-hidden="true" size={15} />
            </span>
            <div>
              <p>{cycle.name}</p>
              <span>{cycle.cards.length} cards in this cycle</span>
            </div>
          </header>
          <ul className="cycle-popover__cards">
            {cycle.cards.map((cycleCard) => (
              <li key={cycleCard.oracleId}>
                <span>{cycleCard.name}</span>
                {cycleCard.oracleId === card.oracleId ? <em>Representative</em> : null}
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
      className="land-card__image"
      decoding="async"
      loading="lazy"
      src={card.imageUrl}
    />
  );
}

function CardCaption({ cycle }: { cycle?: CardCycle }) {
  return (
    <span className="land-card__caption">
      {cycle ? (
        <>
          <span>{cycle.name}</span>
          <small>{cycle.cards.length} cards</small>
        </>
      ) : (
        <span>Individual land</span>
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

function TierRow({ tier, index }: { tier: Tier; index: number }) {
  const details = tierDetails[tier.name as keyof typeof tierDetails];

  return (
    <li className="tier-row" style={{ "--tier-accent": details.accent } as CSSProperties}>
      <div className="tier-rank" aria-label={`Tier ${tier.name}`}>
        <span className="tier-rank__number">0{index + 1}</span>
        <strong>{tier.name}</strong>
      </div>

      <div className="tier-content">
        <div className="tier-copy">
          <h2>{details.title}</h2>
          <p>{details.description}</p>
        </div>
        <div className="tier-cards">
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
    <ol className="tier-list" aria-label="Land rankings">
      {landTiers.map((tier, index) => (
        <TierRow key={tier.name} tier={tier} index={index} />
      ))}
    </ol>
  );
}
