import { createFileRoute } from "@tanstack/react-router";

import { TierList } from "#/components/tier-list";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="mx-auto w-[calc(100%_-_40px)] max-w-360 max-[600px]:w-[calc(100%_-_24px)]">
      <section className="py-20">
        <h1 className="text-[clamp(4rem,8.5vw,8.2rem)] leading-[0.82] font-serif">
          Land tier list
        </h1>
      </section>

      <TierList />

      <footer className="flex items-center justify-between py-[44px] pb-[50px] text-[0.68rem] font-[650] tracking-[0.08em] text-[#62685e] uppercase max-[600px]:items-start max-[600px]:gap-5">
        <span>Card data and images via Scryfall</span>
      </footer>
    </main>
  );
}
