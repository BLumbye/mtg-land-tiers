(() => {
  const manaSymbols = ["W", "U", "B", "R", "G"];

  const randomValue = new Uint32Array(1);
  crypto.getRandomValues(randomValue);
  const mana = manaSymbols[randomValue[0] % manaSymbols.length];

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/svg+xml";
  favicon.href = `https://svgs.scryfall.io/card-symbols/${mana}.svg`;
  document.head.append(favicon);
})();
