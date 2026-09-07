export interface Game {
  title: string;
  studio: string;
  genre: string;
  image: string;
  description: string;
}

/**
 * Games I enjoy or have completed — a mix of open-world, souls-like,
 * racing, and competitive shooters.
 */
export const games: Game[] = [
  {
    title: 'Elden Ring',
    studio: 'FromSoftware',
    genre: 'Souls-like / Open World',
    image: '/games/elden-ring.jpg',
    description:
      'The pinnacle of open-world design and challenge. Every boss is a lesson in patience and adaptation — it rewards learning systems deeply, then executing under pressure.',
  },
  {
    title: 'Sekiro: Shadows Die Twice',
    studio: 'FromSoftware',
    genre: 'Souls-like / Action',
    image: '/games/sekiro.jpg',
    description:
      'Pure skill expression. The posture-and-parry combat is the most satisfying loop in gaming once it clicks — relentless, precise, and unforgiving in the best way.',
  },
  {
    title: 'Red Dead Redemption 2',
    studio: 'Rockstar Games',
    genre: 'Open World / Action-Adventure',
    image: '/games/rdr2.jpg',
    description:
      'A living, breathing world with unmatched detail and one of the best-told stories in the medium. I lose hours just existing in it.',
  },
  {
    title: 'Minecraft',
    studio: 'Mojang Studios',
    genre: 'Sandbox / Survival',
    image: '/games/minecraft.jpg',
    description:
      'Endless creativity and systems to tinker with. Redstone, automation, and building — it scratches the same itch as engineering a good project.',
  },
  {
    title: 'Forza Horizon 5',
    studio: 'Playground Games',
    genre: 'Racing / Open World',
    image: '/games/forza-horizon-5.jpg',
    description:
      'The best arcade racer for pure flow. Gorgeous open world, satisfying handling, and a perfect unwind after a long coding session.',
  },
  {
    title: 'Resident Evil 2 Remake',
    studio: 'Capcom',
    genre: 'Survival Horror',
    image: '/games/re2.jpg',
    description:
      'A masterclass remake — tense resource management, tight level design, and that constant dread of Mr. X on your tail.',
  },
  {
    title: 'Resident Evil 3 Remake',
    studio: 'Capcom',
    genre: 'Survival Horror / Action',
    image: '/games/re3.jpg',
    description:
      'Faster and more action-leaning than RE2, with the Nemesis relentlessly hunting you across Raccoon City. Pure adrenaline.',
  },
  {
    title: 'Resident Evil Requiem',
    studio: 'Capcom',
    genre: 'Survival Horror',
    image: '/games/re-requiem.jpg',
    description:
      'The next chapter in the RE saga — highly anticipated, and exactly the kind of atmospheric horror I keep coming back to.',
  },
  {
    title: 'VALORANT',
    studio: 'Riot Games',
    genre: 'Tactical FPS',
    image: '/games/valorant.jpg',
    description:
      'Precise gunplay meets agent abilities. Competitive, mechanical, and endlessly improvable — the aim-and-strategy grind I keep coming back to.',
  },
  {
    title: 'Rainbow Six Siege',
    studio: 'Ubisoft',
    genre: 'Tactical FPS',
    image: '/games/r6.jpg',
    description:
      'Destruction, map knowledge, and split-second decisions. The most tactical shooter I play — every round is a puzzle of angles and utility.',
  },
];
