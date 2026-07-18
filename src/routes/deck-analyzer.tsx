import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { DeckAnalyzer } from "#/components/deck-analyzer";

export const Route = createFileRoute("/deck-analyzer")({
  component: DeckAnalyzerPage,
  head: () => ({ meta: [{ title: "Deck Analyzer — Land Index" }] }),
});

function DeckAnalyzerPage() {
  return (
    <main className="mx-auto w-[calc(100%_-_40px)] max-w-310 pb-16 max-[600px]:w-[calc(100%_-_24px)]">
      <header className="py-12 sm:py-16">
        <Link
          className="mb-10 inline-flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-[#8d9587] uppercase transition hover:text-white"
          to="/"
        >
          <ArrowLeft size={15} /> Tier list
        </Link>
        <p className="mb-4 text-xs font-bold tracking-[0.14em] text-[#89947f] uppercase">
          Deck tools
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.88]">Land check</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#9ca496]">
          Paste a deck list to see which lands it contains, how they rank, and which ones are still
          missing from the tier list.
        </p>
      </header>

      <DeckAnalyzer />
    </main>
  );
}
