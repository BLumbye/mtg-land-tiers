import { createFileRoute } from "@tanstack/react-router";
import { Layers3, Sparkles } from "lucide-react";

import { TierList } from "#/components/tier-list";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Land Index home">
          <span className="brand__mark">
            <Layers3 aria-hidden="true" size={18} strokeWidth={1.8} />
          </span>
          <span>Land Index</span>
        </a>
        <span className="example-badge">
          <Sparkles aria-hidden="true" size={13} />
          27 land cycles
        </span>
      </header>

      <section className="hero">
        <p className="eyebrow">A field guide to better mana</p>
        <div className="hero__heading">
          <h1>Land tier list</h1>
          <p>
            A clean, scannable ranking of the lands shaping the format. Hover a cycle card to see
            every land it represents.
          </p>
        </div>
      </section>

      <TierList />

      <footer className="site-footer">
        <span>Land Index</span>
        <span>Card data and images via Scryfall</span>
      </footer>
    </main>
  );
}
