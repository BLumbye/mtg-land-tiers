import type { CardName } from "./oracle-ids";

export const imageUrls = {
  "Cabal Coffers":
    "https://cards.scryfall.io/normal/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.jpg?1783926775",
  "Ancient Tomb":
    "https://cards.scryfall.io/normal/front/b/d/bd3d4b4b-cf31-4f89-8140-9650edb03c7b.jpg?1783933762",
  "Three Tree City":
    "https://cards.scryfall.io/normal/front/5/6/56f88a48-cced-4a9d-8c19-e4f105f0d8a2.jpg?1783910782",
  "Nykthos, Shrine to Nyx":
    "https://cards.scryfall.io/normal/front/8/3/834b27a0-dfd7-4f96-8cde-cacac4b24acc.jpg?1783939713",
  "Phyrexian Tower":
    "https://cards.scryfall.io/normal/front/0/b/0b47f6d2-9f65-47a4-bfc4-15619befe53d.jpg?1783911207",
  "Commercial District":
    "https://cards.scryfall.io/normal/front/b/f/bf220c06-3cce-4bdd-aa58-83940c223e9c.jpg?1783912825",
  "Elegant Parlor":
    "https://cards.scryfall.io/normal/front/7/2/72c6d541-e2cb-4d6e-acac-90a8f53b7006.jpg?1783912824",
  "Hedge Maze":
    "https://cards.scryfall.io/normal/front/5/2/5260f8ae-805b-4eae-badf-62de0f768867.jpg?1783912824",
  "Lush Portico":
    "https://cards.scryfall.io/normal/front/c/1/c17816e8-28b1-4295-a637-efb0e5c18873.jpg?1783912824",
  "Meticulous Archive":
    "https://cards.scryfall.io/normal/front/6/5/652236c2-84ef-45e4-b5fc-ed6170bc3d6c.jpg?1783912824",
  "Raucous Theater":
    "https://cards.scryfall.io/normal/front/b/5/b598c93e-dae1-4d71-a9e4-917abf76d2d0.jpg?1783912823",
  "Shadowy Backstreet":
    "https://cards.scryfall.io/normal/front/6/9/69c1b656-1d67-499c-bf0f-417682a86c7d.jpg?1783912827",
  "Thundering Falls":
    "https://cards.scryfall.io/normal/front/1/7/17260fff-b239-4af4-9306-3236ae3fa5a5.jpg?1783912822",
  "Undercity Sewers":
    "https://cards.scryfall.io/normal/front/2/b/2b5801fb-2026-4f25-98bc-ebb2f99684b9.jpg?1783912822",
  "Underground Mortuary":
    "https://cards.scryfall.io/normal/front/f/6/f6ca59cd-8779-4a84-a54b-e863b79c61f0.jpg?1783912822",
  "Crypt of Agadeem":
    "https://cards.scryfall.io/normal/front/1/8/18adafe6-de67-4101-8b39-b53ab695ec4a.jpg?1783906990",
  "Cavern of Souls":
    "https://cards.scryfall.io/normal/front/3/a/3aad15a2-8a1b-4460-9b06-e85863081878.jpg?1783913719",
  "Cabal Stronghold":
    "https://cards.scryfall.io/normal/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.jpg?1783934950",
  "Talon Gates of Madara":
    "https://cards.scryfall.io/normal/front/d/e/de92facf-762b-4a23-8d5e-bb673b0500c0.jpg?1783911414",
  "Uthros, Titanic Godcore":
    "https://cards.scryfall.io/normal/front/1/1/11da39d6-cfa6-498d-91b1-11454cc7e5a3.jpg?1783905913",
  "Evendo, Waking Haven":
    "https://cards.scryfall.io/normal/front/2/f/2fa09104-acbe-4410-b101-2fe6ac28efde.jpg?1783905915",
  "City of Brass":
    "https://cards.scryfall.io/normal/front/c/2/c21565d0-fc40-4d89-9b27-87c03385e0af.jpg?1783904153",
  "Yavimaya, Cradle of Growth":
    "https://cards.scryfall.io/normal/front/4/e/4e4b6e22-93b2-4896-bba5-0ceaa5d8ea3c.jpg?1783926791",
  "Hall of Heliod's Generosity":
    "https://cards.scryfall.io/normal/front/f/0/f08dfd99-59fa-4a6c-bd69-c647f639de4d.jpg?1783909573",
  "Otawara, Soaring City":
    "https://cards.scryfall.io/normal/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.jpg?1783923816",
  "Boseiju, Who Endures":
    "https://cards.scryfall.io/normal/front/2/1/2135ac5a-187b-4dc9-8f82-34e8d1603416.jpg?1783923818",
  "Indatha Triome":
    "https://cards.scryfall.io/normal/front/2/b/2b74bb81-fb9a-40e5-a941-e517430b52f5.jpg?1783931001",
  "Jetmir's Garden":
    "https://cards.scryfall.io/normal/front/2/6/26d40e03-6de4-4373-9fbf-04c1dd79e995.jpg?1783923058",
  "Ketria Triome":
    "https://cards.scryfall.io/normal/front/a/2/a249b1f4-2b22-4b67-a207-e0c4ae95d2e1.jpg?1783931001",
  "Raffine's Tower":
    "https://cards.scryfall.io/normal/front/a/2/a2c56479-4bee-4edb-80d7-4af010b7c793.jpg?1783923055",
  "Raugrin Triome":
    "https://cards.scryfall.io/normal/front/0/2/02138fbb-3962-4348-8d31-faaefba0b8b2.jpg?1783931001",
  "Savai Triome":
    "https://cards.scryfall.io/normal/front/7/4/748e6a61-9c1f-4225-9f04-e54002f63ac3.jpg?1783931000",
  "Spara's Headquarters":
    "https://cards.scryfall.io/normal/front/7/3/7363f1fb-9af3-4212-921f-d59533faf0e5.jpg?1783923052",
  "Xander's Lounge":
    "https://cards.scryfall.io/normal/front/5/4/54f449ff-4025-465e-9ec5-a5cf42c4c9d3.jpg?1783923052",
  "Zagoth Triome":
    "https://cards.scryfall.io/normal/front/c/c/cc520518-2063-4b57-a0d4-10cf62a7175e.jpg?1783930997",
  "Ziatora's Proving Ground":
    "https://cards.scryfall.io/normal/front/7/5/75fdce80-e338-4a50-bdc6-786511feaeef.jpg?1783923052",
  "Arid Mesa":
    "https://cards.scryfall.io/normal/front/2/5/25ac5405-df7b-4097-914a-022cb18e20d4.jpg?1783926797",
  "Bloodstained Mire":
    "https://cards.scryfall.io/normal/front/5/7/579743fe-f71e-4cb2-8629-d6b02ed1591d.jpg?1783911241",
  "Flooded Strand":
    "https://cards.scryfall.io/normal/front/8/f/8f85e12c-196b-4459-b81f-0c9c854e9f57.jpg?1783911240",
  "Marsh Flats":
    "https://cards.scryfall.io/normal/front/9/d/9db3ba6d-eb7f-4f5b-9a3b-c6239c3baa42.jpg?1783926796",
  "Misty Rainforest":
    "https://cards.scryfall.io/normal/front/8/8/88231c0d-0cc8-44ec-bf95-81d1710ac141.jpg?1783926795",
  "Polluted Delta":
    "https://cards.scryfall.io/normal/front/6/e/6e288374-2b71-4ace-b1d2-a19fee6cb4af.jpg?1783911240",
  "Scalding Tarn":
    "https://cards.scryfall.io/normal/front/7/1/71e491c5-8c07-449b-b2f1-ffa052e6d311.jpg?1783926793",
  "Verdant Catacombs":
    "https://cards.scryfall.io/normal/front/9/4/94c229ea-90da-4aa0-bfda-b162fb3b5b8b.jpg?1783926791",
  "Windswept Heath":
    "https://cards.scryfall.io/normal/front/b/d/bd1d13f7-fd38-4f0b-a8e0-1eac78668117.jpg?1783911233",
  "Wooded Foothills":
    "https://cards.scryfall.io/normal/front/4/e/4e11ea8a-f895-438d-a3b7-f070238e4161.jpg?1783911232",
  "Blood Crypt":
    "https://cards.scryfall.io/normal/front/1/b/1b7eb998-3ec0-4cbc-a416-5a1e3e5a7316.jpg?1784036817",
  "Breeding Pool":
    "https://cards.scryfall.io/normal/front/6/3/63e4dc07-c742-41bd-8301-861637908fd1.jpg?1784036820",
  "Godless Shrine":
    "https://cards.scryfall.io/normal/front/8/f/8fbd1ae0-3d4c-492a-a1ea-85a95fa3d7b6.jpg?1784036826",
  "Hallowed Fountain":
    "https://cards.scryfall.io/normal/front/b/7/b7285986-7e08-4969-86ef-452dc5bfdd9f.jpg?1784036830",
  "Overgrown Tomb":
    "https://cards.scryfall.io/normal/front/a/d/ad7e18e2-c033-4b6c-86e8-d0e5cc824cfd.jpg?1784036836",
  "Sacred Foundry":
    "https://cards.scryfall.io/normal/front/a/7/a7758cc6-4e18-48a5-8720-5f42b5cd9d31.jpg?1784036842",
  "Steam Vents":
    "https://cards.scryfall.io/normal/front/a/8/a83903c7-fd51-4526-aed2-359e946fea36.jpg?1784036844",
  "Stomping Ground":
    "https://cards.scryfall.io/normal/front/1/e/1ee8255a-44f6-4faa-9843-15432bf751ea.jpg?1784065855",
  "Temple Garden":
    "https://cards.scryfall.io/normal/front/b/9/b9b0589d-f327-46a7-8bac-06b7654c547a.jpg?1784036854",
  "Watery Grave":
    "https://cards.scryfall.io/normal/front/5/5/5525d6a6-e532-4047-9da4-bfae7927fecc.jpg?1784036860",
  "Bountiful Promenade":
    "https://cards.scryfall.io/normal/front/f/0/f0b11ba3-68ba-4067-af40-2a55e31b395e.jpg?1783903209",
  "Luxury Suite":
    "https://cards.scryfall.io/normal/front/3/c/3c409d1e-f634-44a2-8fcf-dcdcb0babc3f.jpg?1783903199",
  "Morphic Pool":
    "https://cards.scryfall.io/normal/front/4/8/48e40927-dd87-42ed-b805-0ae8ba81f5fb.jpg?1783922655",
  "Rejuvenating Springs":
    "https://cards.scryfall.io/normal/front/c/4/c4565a7b-a0ed-4a7f-ad48-7745c56d141b.jpg?1783903196",
  "Sea of Clouds":
    "https://cards.scryfall.io/normal/front/d/4/d4fb722f-40af-4bd1-b660-e8186b98f233.jpg?1783922655",
  "Spectator Seating":
    "https://cards.scryfall.io/normal/front/4/c/4c62dcfc-4bc8-4551-b3c7-9eec26be3362.jpg?1783903192",
  "Spire Garden":
    "https://cards.scryfall.io/normal/front/4/8/48444c3e-2068-4961-a9cd-9398052e5bd6.jpg?1783904149",
  "Training Center":
    "https://cards.scryfall.io/normal/front/7/8/78a39d22-5e3b-4ba0-b728-dbf16b61fc8f.jpg?1783915582",
  "Undergrowth Stadium":
    "https://cards.scryfall.io/normal/front/f/2/f25aa8aa-e2f7-4634-8a96-2082e76c6503.jpg?1783904148",
  "Vault of Champions":
    "https://cards.scryfall.io/normal/front/c/a/cafd7db6-b04e-4fa2-bccd-981211132a93.jpg?1783915582",
  "Multiversal Passage":
    "https://cards.scryfall.io/normal/front/f/5/f5fb426a-5618-4dd4-9c51-0cc847be8c1d.jpg?1783905299",
  "Prismatic Vista":
    "https://cards.scryfall.io/normal/front/e/3/e37da81e-be12-45a2-9128-376f1ad7b3e8.jpg?1783933066",
  "Archway of Innovation":
    "https://cards.scryfall.io/normal/front/6/a/6a90f9e6-9251-4203-9599-cc4032a5e6e1.jpg?1783911242",
  "The World Tree":
    "https://cards.scryfall.io/normal/front/a/7/a70cb6d9-3955-4064-917b-11dec26440c5.jpg?1783928169",
  "Pillar of the Paruns":
    "https://cards.scryfall.io/normal/front/4/c/4c66bacf-ad9a-40c3-a2b7-464be8d4dd24.jpg?1783921782",
  "Eiganjo, Seat of the Empire":
    "https://cards.scryfall.io/normal/front/c/3/c375a022-5b57-496d-a802-e4ea8376e9e4.jpg?1783923818",
  "Command Beacon":
    "https://cards.scryfall.io/normal/front/4/3/435e9678-9ff3-4e5d-8061-3f806e1c2ed2.jpg?1783906993",
  "Ancient Ziggurat":
    "https://cards.scryfall.io/normal/front/1/3/136f1e4e-ca24-45cb-a39c-4dd159bb1488.jpg?1783904528",
  "Karn's Bastion":
    "https://cards.scryfall.io/normal/front/2/2/22017ec2-3552-4865-af76-dba042b141f5.jpg?1783906011",
  "Shinka, the Bloodsoaked Keep":
    "https://cards.scryfall.io/normal/front/d/2/d2d5f30e-cc3a-46c1-82a9-2cd73705b2f5.jpg?1783944272",
  Arena:
    "https://cards.scryfall.io/normal/front/e/5/e5b7afa9-e07a-4a84-a41f-7a8bc5c1d274.jpg?1783943260",
  Fountainport:
    "https://cards.scryfall.io/normal/front/6/5/658cfcb7-81b7-48c6-9dd2-1663d06108cf.jpg?1783910785",
  "War Room":
    "https://cards.scryfall.io/normal/front/0/7/0775b4be-881c-4832-8954-d961064315b6.jpg?1783903712",
  "Minas Tirith":
    "https://cards.scryfall.io/normal/front/b/3/b38b6760-616f-4b11-8ce7-ac1223c7fd53.jpg?1783916236",
  "Abandoned Air Temple":
    "https://cards.scryfall.io/normal/front/9/c/9c0433f9-8f1e-4a19-a83f-a41925f1b1a9.jpg?1783904914",
  "Gavony Township":
    "https://cards.scryfall.io/normal/front/c/e/ce46c4e2-a515-41d7-8d70-d20cf4925996.jpg?1783917097",
  "Terrain Generator":
    "https://cards.scryfall.io/normal/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.jpg?1783922360",
  "Nesting Grounds":
    "https://cards.scryfall.io/normal/front/c/2/c25ad164-4076-496d-833c-d607391b1ac8.jpg?1783904523",
  "Reflecting Pool":
    "https://cards.scryfall.io/normal/front/1/8/18a1b3f5-473d-45ca-be0d-e67e77ba30ce.jpg?1783922656",
  "Meteor Crater":
    "https://cards.scryfall.io/normal/front/0/4/043a2299-1cfc-4732-a10a-58c773b9992c.jpg?1783945599",
  "Gemstone Caverns":
    "https://cards.scryfall.io/normal/front/7/f/7f273641-c5f3-48bc-b89e-3cff52d26a0b.jpg?1783927750",
  Swarmyard:
    "https://cards.scryfall.io/normal/front/b/8/b89329f2-d386-40a7-9098-6d80beeb8843.jpg?1783927748",
  "Eclipsed Realms":
    "https://cards.scryfall.io/normal/front/a/1/a174f0db-8b4f-4c37-9583-44c92d37b9c0.jpg?1783904396",
  "Unclaimed Territory":
    "https://cards.scryfall.io/normal/front/d/3/d3782952-3839-4a94-95bc-716611d3ece6.jpg?1783903190",
  "Secluded Courtyard":
    "https://cards.scryfall.io/normal/front/c/0/c0d17d04-cf0b-4918-bfec-b34b0d98a602.jpg?1783903197",
  "Plaza of Heroes":
    "https://cards.scryfall.io/normal/front/9/6/96fe4b9b-d766-463b-a6df-345ebebfc17c.jpg?1783903197",
  "Tainted Field":
    "https://cards.scryfall.io/normal/front/c/6/c6eeab6f-a738-4005-91c2-a5f81df5c569.jpg?1783909567",
  "Tainted Isle":
    "https://cards.scryfall.io/normal/front/7/0/70e8e7e2-e9ea-4358-805e-c5110c8d8443.jpg?1783909566",
  "Tainted Peak":
    "https://cards.scryfall.io/normal/front/7/e/7e6f1a55-0fec-4b94-9640-9110ca8d0212.jpg?1783909566",
  "Tainted Wood":
    "https://cards.scryfall.io/normal/front/3/d/3da7ab6b-b10a-4786-b1eb-92de7e66690e.jpg?1783909564",
  "Blazemire Verge":
    "https://cards.scryfall.io/normal/front/d/1/d151c8e2-d715-470d-868a-f45191db9fa0.jpg?1783909431",
  "Bleachbone Verge":
    "https://cards.scryfall.io/normal/front/5/2/52dcdabd-a186-45fe-9fee-6c0f1afeaf16.jpg?1783907843",
  "Floodfarm Verge":
    "https://cards.scryfall.io/normal/front/d/5/d53ed0db-1199-44b3-8eda-8189dfcf53d1.jpg?1783909428",
  "Gloomlake Verge":
    "https://cards.scryfall.io/normal/front/8/3/83f510b7-4cbd-4883-9c26-c8824bc668ac.jpg?1783909428",
  "Hushwood Verge":
    "https://cards.scryfall.io/normal/front/e/c/ec288d76-c1f5-471b-8a53-504f88469c1b.jpg?1783909428",
  "Riverpyre Verge":
    "https://cards.scryfall.io/normal/front/5/7/57a93a71-d77c-417f-85d0-cd420f573331.jpg?1783907841",
  "Sunbillow Verge":
    "https://cards.scryfall.io/normal/front/9/4/94ed132f-b818-4dbf-9b4a-e5acb067e0a4.jpg?1783907839",
  "Thornspire Verge":
    "https://cards.scryfall.io/normal/front/7/e/7e1cdc03-6faa-4138-9a52-caafbe34fb59.jpg?1783909426",
  "Wastewood Verge":
    "https://cards.scryfall.io/normal/front/5/c/5ceacc7d-d407-4f82-af58-9bdf8426924e.jpg?1783907837",
  "Willowrush Verge":
    "https://cards.scryfall.io/normal/front/7/5/758d93d5-3f66-4395-a928-000485396c87.jpg?1783907837",
  "Barkchannel Pathway":
    "https://cards.scryfall.io/normal/front/b/6/b6de14ae-0132-4261-af00-630bf15918cd.jpg?1783928184",
  "Blightstep Pathway":
    "https://cards.scryfall.io/normal/front/0/c/0ce39a19-f51d-4a35-ae80-5b82eb15fcff.jpg?1783928185",
  "Branchloft Pathway":
    "https://cards.scryfall.io/normal/front/0/5/0511e232-2a72-40f5-a400-4f7ebc442d17.jpg?1783929314",
  "Brightclimb Pathway":
    "https://cards.scryfall.io/normal/front/d/2/d24c3d51-795d-4c01-a34a-3280fccd2d78.jpg?1783929313",
  "Clearwater Pathway":
    "https://cards.scryfall.io/normal/front/b/4/b4b99ebb-0d54-4fe5-a495-979aaa564aa8.jpg?1783929316",
  "Cragcrown Pathway":
    "https://cards.scryfall.io/normal/front/d/a/da57eb54-5199-4a56-95f7-f6ac432876b1.jpg?1783929311",
  "Darkbore Pathway":
    "https://cards.scryfall.io/normal/front/8/7/87a4e5fe-161f-42da-9ca2-67c8e8970e94.jpg?1783928184",
  "Hengegate Pathway":
    "https://cards.scryfall.io/normal/front/7/e/7ef37cb3-d803-47d7-8a01-9c803aa2eadc.jpg?1783928182",
  "Needleverge Pathway":
    "https://cards.scryfall.io/normal/front/6/5/6559047e-6ede-4815-a3a0-389062094f9d.jpg?1783929311",
  "Riverglide Pathway":
    "https://cards.scryfall.io/normal/front/2/6/2668ac91-6cda-4f81-a08d-4fc5f9cb35b2.jpg?1783929311",
  "Tarnation Vista":
    "https://cards.scryfall.io/normal/front/9/6/962552a1-ec34-49e2-a23d-85dfb405d5e0.jpg?1783911995",
  "Dark Fortress":
    "https://cards.scryfall.io/normal/front/c/1/c16fd43c-7c47-4c1b-860f-91146532e89d.jpg?1783902885",
  "Gathering Place":
    "https://cards.scryfall.io/normal/front/0/8/081cdbd0-5081-4a9e-90ba-f5baf4ac137e.jpg?1783902886",
  "Gleaming Bastion":
    "https://cards.scryfall.io/normal/front/c/9/c9131bf5-17e3-4aa6-97ed-ed6426b247d0.jpg?1783902884",
  "Hidden Lair":
    "https://cards.scryfall.io/normal/front/0/7/0742ddb6-71ed-444e-91ad-84f876725a4a.jpg?1783902883",
  "Training Compound":
    "https://cards.scryfall.io/normal/front/c/9/c91e28db-307f-462a-88aa-581d10e77f10.jpg?1783902882",
  "Adagia, Windswept Bastion":
    "https://cards.scryfall.io/normal/front/c/6/c634273a-94b0-4104-9d10-ae522ece1fc7.jpg?1783905918",
  "Starting Town":
    "https://cards.scryfall.io/normal/front/f/c/fc7d1912-7e27-49ef-bd98-375d975a42b0.jpg?1783906546",
  "Horizon of Progress":
    "https://cards.scryfall.io/normal/front/5/a/5ae3a9c8-194e-421b-b77d-9c8784442651.jpg?1783911415",
  "Spire of Industry":
    "https://cards.scryfall.io/normal/front/3/5/35e9ec06-a848-4230-84a2-19cb8034e0f0.jpg?1783906004",
  "Sunhome, Fortress of the Legion":
    "https://cards.scryfall.io/normal/front/4/e/4ebb97da-e4d5-41ba-9a70-2a1de91f513c.jpg?1783911868",
  "Turbulent Fen":
    "https://cards.scryfall.io/normal/front/9/7/9737159b-256c-4004-ba5f-0417c35e1b30.jpg?1783903846",
  "Turbulent Moor":
    "https://cards.scryfall.io/normal/front/d/a/da54562d-8c09-4728-bb2b-ae8d464106b8.jpg?1783903847",
  "Turbulent Springs":
    "https://cards.scryfall.io/normal/front/a/2/a25cb813-aa6d-469c-aa29-61ffa32267f2.jpg?1783903847",
  "Turbulent Steppe":
    "https://cards.scryfall.io/normal/front/c/0/c0c73dd5-0a88-4a94-9c01-c1473433e46f.jpg?1783903845",
  "Turbulent Wilderness":
    "https://cards.scryfall.io/normal/front/b/6/b6ca755c-4b17-450b-b995-bfec8a55396f.jpg?1783903845",
  "Deathcap Glade":
    "https://cards.scryfall.io/normal/front/7/8/78897104-80e1-4d8a-9958-145b40f679e8.jpg?1783903621",
  "Deserted Beach":
    "https://cards.scryfall.io/normal/front/c/8/c819de09-dac2-407a-98c8-775865e9bdf8.jpg?1783908057",
  "Dreamroot Cascade":
    "https://cards.scryfall.io/normal/front/e/f/ef662b92-5a7f-48c9-bcc1-14b55e091aef.jpg?1783903621",
  "Haunted Ridge":
    "https://cards.scryfall.io/normal/front/3/2/32f1e668-89b8-4f82-afc1-6c3efb1fef3b.jpg?1783908057",
  "Overgrown Farmland":
    "https://cards.scryfall.io/normal/front/6/4/644fb0ed-f434-4cc4-b7e9-a60db5ece2b7.jpg?1783906975",
  "Rockfall Vale":
    "https://cards.scryfall.io/normal/front/d/c/dcdea659-ecaf-4abe-be0f-64e105abb104.jpg?1783906974",
  "Shattered Sanctum":
    "https://cards.scryfall.io/normal/front/5/a/5aa0c810-3b7d-4661-979e-e84fb327742d.jpg?1783903618",
  "Shipwreck Marsh":
    "https://cards.scryfall.io/normal/front/1/5/156df6eb-1ac9-4954-bf93-b1668096b8bd.jpg?1783908058",
  "Stormcarved Coast":
    "https://cards.scryfall.io/normal/front/b/d/bd3ae4fa-4c97-410a-8c0a-bd203342595d.jpg?1783903618",
  "Sundown Pass":
    "https://cards.scryfall.io/normal/front/b/3/b34000e9-ff20-4fb4-9d0b-03a172a92457.jpg?1783903618",
  "Bojuka Bog":
    "https://cards.scryfall.io/normal/front/5/5/55b5b094-9d2d-4d96-b90c-78fecdae725a.jpg?1783903734",
  "Fabled Passage":
    "https://cards.scryfall.io/normal/front/6/2/62ef854d-ec9e-443d-a4ba-4b2875ed3fe7.jpg?1783903202",
  "Arcane Sanctum":
    "https://cards.scryfall.io/normal/front/c/7/c75eeb97-3249-4762-84b0-387f27fb255f.jpg?1783909581",
  "Crumbling Necropolis":
    "https://cards.scryfall.io/normal/front/d/2/d28542af-936f-44e5-a4e3-119f23c9f0d6.jpg?1783903203",
  "Frontier Bivouac":
    "https://cards.scryfall.io/normal/front/4/8/48810b27-0646-4ff9-9d4d-c6d09b2e0267.jpg?1783904530",
  "Jungle Shrine":
    "https://cards.scryfall.io/normal/front/0/b/0b1a84b6-4202-4413-80ed-4142c51e619a.jpg?1783904523",
  "Mystic Monastery":
    "https://cards.scryfall.io/normal/front/b/c/bc23343a-3a01-4975-8430-17bf15fa639d.jpg?1783903198",
  "Nomad Outpost":
    "https://cards.scryfall.io/normal/front/a/6/a68fbeaa-941f-4d53-becd-f93ed22b9a54.jpg?1783907273",
  "Opulent Palace":
    "https://cards.scryfall.io/normal/front/f/0/f0001153-dbcb-44e5-99be-2c186c9b10b0.jpg?1783904523",
  "Sandsteppe Citadel":
    "https://cards.scryfall.io/normal/front/e/7/e7482def-e87e-4a7f-9c18-7859483b2a66.jpg?1783904520",
  "Savage Lands":
    "https://cards.scryfall.io/normal/front/4/2/428df1ff-e13e-48a3-bcc9-301bdc9470fb.jpg?1783903002",
  "Seaside Citadel":
    "https://cards.scryfall.io/normal/front/b/6/b681599f-aa7a-4b3a-a36a-dc6d70fd6a11.jpg?1783904517",
  "Path of Ancestry":
    "https://cards.scryfall.io/normal/front/8/3/836b8f52-10d2-4716-9f7b-38fb23bc68de.jpg?1783903197",
  "Ancient Amphitheater":
    "https://cards.scryfall.io/normal/front/c/6/c68137c5-c2f9-4b0d-ac4b-12c519854166.jpg?1783934693",
  "Auntie's Hovel":
    "https://cards.scryfall.io/normal/front/0/9/098685c9-cd85-4279-a3b5-b495485bba35.jpg?1783942848",
  "Gilt-Leaf Palace":
    "https://cards.scryfall.io/normal/front/c/c/cc4bbbb5-4218-4b2a-9ca2-de4d5f5dda19.jpg?1783942847",
  "Secluded Glen":
    "https://cards.scryfall.io/normal/front/9/e/9e4afa65-7933-4a64-b50f-a9a9f832b112.jpg?1783942847",
  "Wanderwine Hub":
    "https://cards.scryfall.io/normal/front/c/c/ccec69de-7203-4810-a8ec-8748705ee3a2.jpg?1783942845",
  "Great Hall of the Biblioplex":
    "https://cards.scryfall.io/normal/front/4/2/42d92674-2664-411c-b9c5-b04da7c845f4.jpg?1783903620",
  "Adarkar Wastes":
    "https://cards.scryfall.io/normal/front/4/2/42e0aa15-639a-4e88-9bd8-ce5e7c7d7649.jpg?1783906017",
  "Battlefield Forge":
    "https://cards.scryfall.io/normal/front/c/4/c47c1bf5-f11e-4f86-b20b-5d899a11dc56.jpg?1783903735",
  Brushland:
    "https://cards.scryfall.io/normal/front/1/8/18d236ce-3b78-403a-b5f9-4fb44123d85b.jpg?1783920007",
  "Caves of Koilos":
    "https://cards.scryfall.io/normal/front/a/8/a8a57915-5226-4d3c-ae8e-a55c50f3c131.jpg?1783903734",
  "Karplusan Forest":
    "https://cards.scryfall.io/normal/front/6/7/67198b97-bac2-480f-aea8-12841e8884de.jpg?1783906010",
  "Llanowar Wastes":
    "https://cards.scryfall.io/normal/front/2/6/266316d3-3bbc-4283-aab8-69629855909f.jpg?1783903726",
  "Shivan Reef":
    "https://cards.scryfall.io/normal/front/e/1/e13d0982-2542-4770-8e93-637478a0f84a.jpg?1783903720",
  "Sulfurous Springs":
    "https://cards.scryfall.io/normal/front/e/e/eedb9df2-20d3-4cfd-8aed-336edc37d5a9.jpg?1783906003",
  "Underground River":
    "https://cards.scryfall.io/normal/front/5/e/5e50c8d5-6b22-4fc6-87ea-3d7d77ced17f.jpg?1783909555",
  "Yavimaya Coast":
    "https://cards.scryfall.io/normal/front/f/4/f4c1500b-1f4c-4d33-810c-25e3bb0a4666.jpg?1783903712",
  "Fiery Islet":
    "https://cards.scryfall.io/normal/front/a/3/a3aab13c-9d9d-4507-ae5d-da979990ae1b.jpg?1783933068",
  "Horizon Canopy":
    "https://cards.scryfall.io/normal/front/9/3/93f7c880-9bae-4d29-b7b6-b6be6b2ffa89.jpg?1783935503",
  "Nurturing Peatland":
    "https://cards.scryfall.io/normal/front/2/7/2744ac83-a79f-4042-8720-688b5adda382.jpg?1783933066",
  "Silent Clearing":
    "https://cards.scryfall.io/normal/front/a/c/ac07e230-0297-4e1d-bdfe-119010e0ad8e.jpg?1783933066",
  "Sunbaked Canyon":
    "https://cards.scryfall.io/normal/front/c/3/c36820fa-ee86-4206-9a0d-737a67cf5208.jpg?1783933065",
  "Waterlogged Grove":
    "https://cards.scryfall.io/normal/front/0/a/0ab6bfbd-d2e1-4c4c-9f91-6f69c5b8e3bb.jpg?1783933063",
  "Frostboil Snarl":
    "https://cards.scryfall.io/normal/front/a/e/ae705a26-5371-4236-904c-fe3e58b4721d.jpg?1783903201",
  "Furycalm Snarl":
    "https://cards.scryfall.io/normal/front/a/f/afc12892-4978-4442-ace5-c4dea5c0ee00.jpg?1783903200",
  "Necroblossom Snarl":
    "https://cards.scryfall.io/normal/front/4/3/4355ba23-de6a-4f18-baf4-82ae47cc2965.jpg?1783903729",
  "Shineshadow Snarl":
    "https://cards.scryfall.io/normal/front/7/a/7a198106-4d31-4e10-884a-bdf2316f8088.jpg?1783903721",
  "Vineglimmer Snarl":
    "https://cards.scryfall.io/normal/front/4/4/445bd162-b523-45f4-83d0-ffc702fc1fac.jpg?1783903715",
  "Clifftop Retreat":
    "https://cards.scryfall.io/normal/front/4/a/4a7f7767-1959-4812-8654-0a22634096b1.jpg?1783903206",
  "Dragonskull Summit":
    "https://cards.scryfall.io/normal/front/d/2/d20e433a-eb62-4301-bc20-bfe27468b033.jpg?1783903203",
  "Drowned Catacomb":
    "https://cards.scryfall.io/normal/front/e/b/ebea49ab-e5cf-46d9-ae35-226a7321ede0.jpg?1783903205",
  "Glacial Fortress":
    "https://cards.scryfall.io/normal/front/d/6/d673a2d5-0c61-48dc-8c8d-06f0c7b6b8bf.jpg?1783903199",
  "Hinterland Harbor":
    "https://cards.scryfall.io/normal/front/8/9/892451a1-5527-4857-84f8-62028d147489.jpg?1783903199",
  "Isolated Chapel":
    "https://cards.scryfall.io/normal/front/7/8/78814c92-b52c-462a-866f-3e7da9db9f70.jpg?1783903727",
  "Rootbound Crag":
    "https://cards.scryfall.io/normal/front/4/2/42d174e5-b8c2-45eb-8e08-1b94fc27cbee.jpg?1783903194",
  "Sulfur Falls":
    "https://cards.scryfall.io/normal/front/c/7/c762f475-7e58-4477-839b-b3c55434b88f.jpg?1783903193",
  "Sunpetal Grove":
    "https://cards.scryfall.io/normal/front/e/8/e83092ee-4a90-4eac-915f-3fd01b7d9bd0.jpg?1783903191",
  "Woodland Cemetery":
    "https://cards.scryfall.io/normal/front/4/d/4d6f6c96-f813-4864-b4e1-b2a0aa8be1e8.jpg?1783903713",
  "Canopy Vista":
    "https://cards.scryfall.io/normal/front/3/6/369e6485-fbc7-45f9-ac9d-2e26dd94f2d5.jpg?1783903209",
  "Cinder Glade":
    "https://cards.scryfall.io/normal/front/e/c/ec93087a-5728-40e8-8625-a1d175d5252c.jpg?1783903207",
  "Prairie Stream":
    "https://cards.scryfall.io/normal/front/b/2/b2e133b4-2263-4ac2-8d16-7bf307d5e104.jpg?1783903196",
  "Smoldering Marsh":
    "https://cards.scryfall.io/normal/front/d/7/d707c477-440f-417c-970a-0e7426a58045.jpg?1783903193",
  "Sunken Hollow":
    "https://cards.scryfall.io/normal/front/3/a/3a8eef9b-9b03-42cd-a27a-07021bf0b33f.jpg?1783903191",
  "Cascade Bluffs":
    "https://cards.scryfall.io/normal/front/2/2/22acccd2-4e9d-46de-a060-863b08152e50.jpg?1783903736",
  "Fetid Heath":
    "https://cards.scryfall.io/normal/front/f/4/f465ded8-0d38-42ac-bafc-a12185013c5d.jpg?1783903732",
  "Fire-Lit Thicket":
    "https://cards.scryfall.io/normal/front/1/9/1927d645-ca43-4b8e-9932-7e70acca7aa6.jpg?1783930083",
  "Flooded Grove":
    "https://cards.scryfall.io/normal/front/d/f/df797e0d-8ae2-4fdb-a33d-4ba7852b0172.jpg?1783903731",
  "Graven Cairns":
    "https://cards.scryfall.io/normal/front/7/4/74a13fea-4f48-428b-b42b-4ba63d4752ed.jpg?1783909574",
  "Mystic Gate":
    "https://cards.scryfall.io/normal/front/6/f/6f99714f-43bc-4048-b650-97dfef4c10fe.jpg?1783915384",
  "Rugged Prairie":
    "https://cards.scryfall.io/normal/front/6/b/6bd21c9e-de16-4ee9-ae16-6e82b490109d.jpg?1783903721",
  "Sunken Ruins":
    "https://cards.scryfall.io/normal/front/9/1/9181d30d-4f8e-421f-89b8-149ed8000fb2.jpg?1783930080",
  "Twilight Mire":
    "https://cards.scryfall.io/normal/front/3/c/3cc8186b-b46f-46c0-8dfb-9e423e430048.jpg?1783903716",
  "Wooded Bastion":
    "https://cards.scryfall.io/normal/front/3/6/36b591ec-0231-4b91-a132-eb3aedfdf8fa.jpg?1783930080",
  "Canyon Slough":
    "https://cards.scryfall.io/normal/front/5/8/587cc3ba-75c2-46a0-bd44-6f953fe1eb01.jpg?1783903208",
  "Fetid Pools":
    "https://cards.scryfall.io/normal/front/5/f/5fa4556f-2fdc-42e6-98cb-291cee2ca3ac.jpg?1783903202",
  "Irrigated Farmland":
    "https://cards.scryfall.io/normal/front/9/9/996b4484-a701-409a-822c-aa19be89a2c6.jpg?1783903199",
  "Scattered Groves":
    "https://cards.scryfall.io/normal/front/6/b/6bd38442-854d-43b1-a80c-9d841c3a304d.jpg?1783903194",
  "Sheltered Thicket":
    "https://cards.scryfall.io/normal/front/a/d/ad7f87dd-1c43-4b6f-9d68-cc09ef76dbc2.jpg?1783904519",
  "Abandoned Campground":
    "https://cards.scryfall.io/normal/front/e/e/ee0565f5-ebdb-43f9-bbb4-0485b1968937.jpg?1783909431",
  "Bleeding Woods":
    "https://cards.scryfall.io/normal/front/c/b/cb224874-aff5-461f-82ee-89b06663231a.jpg?1783909429",
  "Etched Cornfield":
    "https://cards.scryfall.io/normal/front/f/8/f8900b89-0e10-4602-bba2-da8d60ea5885.jpg?1783909428",
  "Lakeside Shack":
    "https://cards.scryfall.io/normal/front/a/9/a9367acd-393a-4966-ba60-af2ecd4e7596.jpg?1783909428",
  "Murky Sewer":
    "https://cards.scryfall.io/normal/front/6/0/6098d8be-4e3f-455d-8799-91435bf45a1c.jpg?1783909427",
  "Neglected Manor":
    "https://cards.scryfall.io/normal/front/1/1/11cf1531-8a3c-4e28-a114-d3a342b33bb6.jpg?1783909428",
  "Peculiar Lighthouse":
    "https://cards.scryfall.io/normal/front/3/a/3a6e40c0-e70e-4353-a920-9851cfac71dd.jpg?1783909428",
  "Raucous Carnival":
    "https://cards.scryfall.io/normal/front/3/6/3604a211-9bf7-474e-bd78-32a862f4259c.jpg?1783909427",
  "Razortrap Gorge":
    "https://cards.scryfall.io/normal/front/9/8/98d0d067-b52d-47ec-ba7b-8cfcd716c0e5.jpg?1783909427",
  "Strangled Cemetery":
    "https://cards.scryfall.io/normal/front/c/1/c1ce9250-bdbe-4c77-9243-6db9ffffe69b.jpg?1783909426",
  "Thriving Bluff":
    "https://cards.scryfall.io/normal/front/8/2/82c96473-d7b9-48dc-9569-cdb649c78463.jpg?1783903090",
  "Thriving Grove":
    "https://cards.scryfall.io/normal/front/e/e/eef65ebc-12d6-4438-a908-2a0c28329124.jpg?1783903090",
  "Thriving Heath":
    "https://cards.scryfall.io/normal/front/b/b/bb089097-1eed-4e72-a715-579ddd8307a0.jpg?1783903089",
  "Thriving Isle":
    "https://cards.scryfall.io/normal/front/5/8/58a3b5a5-eba0-4b4e-869a-5387ec7dd2b8.jpg?1783903089",
  "Thriving Moor":
    "https://cards.scryfall.io/normal/front/5/d/5d5eea5f-b9e8-4a10-8e7f-c42493a728cd.jpg?1783903088",
  "Bloodfell Caves":
    "https://cards.scryfall.io/normal/front/1/d/1dde3c68-6f29-4c00-b668-c25ac9e3e13b.jpg?1783907281",
  "Blossoming Sands":
    "https://cards.scryfall.io/normal/front/0/a/0a9df994-e0f4-4919-af99-4f643eb9199c.jpg?1783907282",
  "Dismal Backwater":
    "https://cards.scryfall.io/normal/front/0/8/082b52c9-c46e-44d3-b723-546ba528e07b.jpg?1783907280",
  "Jungle Hollow":
    "https://cards.scryfall.io/normal/front/e/a/ea13440b-3f7b-4182-9541-27c1fa3121e5.jpg?1783907280",
  "Rugged Highlands":
    "https://cards.scryfall.io/normal/front/3/1/31261eca-28ad-407c-84ef-0c124d0d7451.jpg?1783907274",
  "Scoured Barrens":
    "https://cards.scryfall.io/normal/front/b/4/b4b47b80-69ed-44b0-afa0-ca90206dc16d.jpg?1783907273",
  "Swiftwater Cliffs":
    "https://cards.scryfall.io/normal/front/c/a/ca53fb19-b8ca-485b-af1a-5117ae54bfe3.jpg?1783907271",
  "Thornwood Falls":
    "https://cards.scryfall.io/normal/front/e/b/ebb502c2-5fd0-46a9-b77d-010f4a942056.jpg?1783907271",
  "Tranquil Cove":
    "https://cards.scryfall.io/normal/front/1/c/1c4efa6c-4f29-41cd-a728-bf0e479ace05.jpg?1783907271",
  "Wind-Scarred Crag":
    "https://cards.scryfall.io/normal/front/4/9/4912e4d0-b16a-4aa6-a583-3430d26bd591.jpg?1783907269",
  "Blackcleave Cliffs":
    "https://cards.scryfall.io/normal/front/f/7/f75715ce-744f-409c-aeb1-e66eb9186a74.jpg?1783909578",
  "Blooming Marsh":
    "https://cards.scryfall.io/normal/front/8/6/861caabb-0573-4e94-8b03-342f90465064.jpg?1783911773",
  "Botanical Sanctum":
    "https://cards.scryfall.io/normal/front/c/c/cc18d5f4-a56a-4f7d-9f56-ccc92cbfb7f7.jpg?1783911772",
  "Concealed Courtyard":
    "https://cards.scryfall.io/normal/front/b/7/b75df1f0-0513-40e4-a449-454f75de6434.jpg?1783911773",
  "Copperline Gorge":
    "https://cards.scryfall.io/normal/front/7/8/78b0f36b-7d8c-4e77-adc2-a4dad93a81d5.jpg?1783917981",
  "Darkslick Shores":
    "https://cards.scryfall.io/normal/front/c/4/c49305d1-ac95-43ea-b02d-c3c7205bcda6.jpg?1783911882",
  "Inspiring Vantage":
    "https://cards.scryfall.io/normal/front/8/5/85df6b6a-2dcf-4828-a4a8-e07d52e1fddd.jpg?1783911772",
  "Razorverge Thicket":
    "https://cards.scryfall.io/normal/front/d/f/df1233de-4449-4c32-944b-e19bed666324.jpg?1783903196",
  "Seachrome Coast":
    "https://cards.scryfall.io/normal/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1783917980",
  "Spirebluff Canal":
    "https://cards.scryfall.io/normal/front/5/9/59a04e16-a767-4112-ab01-6ca1b09c286c.jpg?1783911772",
  "Azorius Chancery":
    "https://cards.scryfall.io/normal/front/5/0/50ef0ac3-e911-4d67-a751-8d86160ae843.jpg?1783909580",
  "Boros Garrison":
    "https://cards.scryfall.io/normal/front/7/6/76ec3366-98f3-4903-8f7b-cfcdd60e3be1.jpg?1783912508",
  "Dimir Aqueduct":
    "https://cards.scryfall.io/normal/front/8/4/84bf9d60-64b8-4209-acfe-e07eefc6bf1f.jpg?1783909578",
  "Golgari Rot Farm":
    "https://cards.scryfall.io/normal/front/4/2/42486edd-24b7-4299-84fa-50559917b2a8.jpg?1783904527",
  "Gruul Turf":
    "https://cards.scryfall.io/normal/front/f/1/f19d2b68-1415-4a0c-bb68-cfacb611c4d2.jpg?1783904526",
  "Izzet Boilerworks":
    "https://cards.scryfall.io/normal/front/b/f/bfac9395-7ca5-48dd-ab83-7c26ada12f61.jpg?1783911875",
  "Orzhov Basilica":
    "https://cards.scryfall.io/normal/front/9/c/9c7c08fc-b6ee-498c-8ab6-fd6be27c9d97.jpg?1783909569",
  "Rakdos Carnarium":
    "https://cards.scryfall.io/normal/front/2/0/20c799a9-ab94-46e6-9111-00505e071c41.jpg?1783904522",
  "Selesnya Sanctuary":
    "https://cards.scryfall.io/normal/front/f/d/fdc53c6a-8e28-4314-9bcf-b31b6c6f56d7.jpg?1783912503",
  "Simic Growth Chamber":
    "https://cards.scryfall.io/normal/front/2/1/212d97c5-c144-483b-b42e-00623477e928.jpg?1783909568",
  "Temple of Abandon":
    "https://cards.scryfall.io/normal/front/d/2/d2ce0759-6b24-41a6-8a24-16cf44dfc162.jpg?1783906966",
  "Temple of Deceit":
    "https://cards.scryfall.io/normal/front/e/1/e18748ce-e52e-4cd1-89d4-cd2578a0d574.jpg?1783908897",
  "Temple of Enlightenment":
    "https://cards.scryfall.io/normal/front/d/d/dd139d4d-3a40-4015-93de-c838c64156c6.jpg?1783906003",
  "Temple of Epiphany":
    "https://cards.scryfall.io/normal/front/c/c/cc63cd97-de9e-4d31-babb-aaad1277169e.jpg?1783903716",
  "Temple of Malady":
    "https://cards.scryfall.io/normal/front/1/c/1ca36218-db87-4e44-8606-2a516504ed20.jpg?1783903717",
  "Temple of Malice":
    "https://cards.scryfall.io/normal/front/d/7/d78eccc4-1500-43f1-94f5-b39c160b6381.jpg?1783908896",
  "Temple of Mystery":
    "https://cards.scryfall.io/normal/front/2/5/258077cf-edef-40fe-ab46-03c965ebe990.jpg?1783903715",
  "Temple of Plenty":
    "https://cards.scryfall.io/normal/front/d/e/de1f7e5e-a503-4f99-91a1-2fdabb7d5e89.jpg?1783906962",
  "Temple of Silence":
    "https://cards.scryfall.io/normal/front/f/7/f7d3770f-cde6-4e29-8cbf-fe841634a5d7.jpg?1783903716",
  "Temple of Triumph":
    "https://cards.scryfall.io/normal/front/d/0/d0e763f7-25b8-444f-8722-614297d0663f.jpg?1783903716",
  "Darkwater Catacombs":
    "https://cards.scryfall.io/normal/front/0/3/03fbf51d-f622-4629-a228-a03ce7caf500.jpg?1783906991",
  "Mossfire Valley":
    "https://cards.scryfall.io/normal/front/2/9/29208018-8079-44bc-b33b-21cda4709bf2.jpg?1783906978",
  "Shadowblood Ridge":
    "https://cards.scryfall.io/normal/front/d/7/d7af1d6b-ff13-4886-a212-4a6e09153475.jpg?1783909568",
  "Skycloud Expanse":
    "https://cards.scryfall.io/normal/front/0/3/03f8c846-d80c-49a4-a562-e817cd0c6096.jpg?1783906004",
  "Sungrass Prairie":
    "https://cards.scryfall.io/normal/front/8/4/841f369e-6532-469c-8565-78094b33a3d9.jpg?1783903191",
} satisfies Record<CardName, string>;
