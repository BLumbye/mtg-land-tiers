import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { TierList } from "#/components/tier-list";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="mx-auto w-[calc(100%_-_40px)] max-w-360 max-[600px]:w-[calc(100%_-_24px)]">
      <section className="flex items-end justify-between gap-8 py-20 max-[700px]:items-start max-[700px]:flex-col">
        <h1 className="text-[clamp(4rem,8.5vw,8.2rem)] leading-[0.82] font-serif">
          Land tier list
        </h1>
        <Link
          className="mb-1 inline-flex flex-none items-center gap-2 rounded-full border border-[#4c5547] px-5 py-3 text-sm font-bold text-[#c8d5bd] transition hover:border-[#849577] hover:bg-[#20251e] hover:text-white"
          to="/deck-analyzer"
        >
          Check a deck <ArrowRight size={16} />
        </Link>
      </section>

      <TierList />

      <footer className="flex items-center justify-between py-[44px] pb-[50px] text-[0.68rem] font-[650] tracking-[0.08em] text-[#62685e] uppercase max-[600px]:items-start max-[600px]:gap-5">
        <span>Card data and images via Scryfall</span>
      </footer>
    </main>
  );
}
