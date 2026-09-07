import Image from 'next/image';
import React from 'react';

import { games, type Game } from '@/config/Games';

import DashedHorizontalRule from '../common/DashedHorizontalRule';

function chunkPairs<T>(items: T[]): T[][] {
  const pairs: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }
  return pairs;
}

function GameCard({ game }: { game: Game }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={game.image}
          alt={`${game.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 21rem"
        />
      </div>
      <div className="space-y-2 px-5 py-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground">
            {game.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">
            {game.studio}
          </span>
        </div>
        <span className="inline-block w-fit rounded-full border border-dashed border-[var(--dashed-border)] px-2.5 py-1 text-[10px] uppercase tracking-wide text-muted-foreground">
          {game.genre}
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {game.description}
        </p>
      </div>
    </article>
  );
}

/** 2-column game cover grid with dashed vertical + horizontal dividers */
export default function GamesGrid() {
  const rows = chunkPairs(games);

  return (
    <div className="w-full">
      {rows.map((row, rowIndex) => (
        <React.Fragment key={row.map((g) => g.title).join('-')}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {row.map((game, colIndex) => (
              <div
                key={game.title}
                className={
                  colIndex === 0 && row.length > 1
                    ? 'sm:border-r sm:border-dashed sm:border-[var(--dashed-border)]'
                    : undefined
                }
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
          {rowIndex < rows.length - 1 && <DashedHorizontalRule />}
        </React.Fragment>
      ))}
    </div>
  );
}
