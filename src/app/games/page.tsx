import GamesGrid from '@/components/games/GamesGrid';
import PageBackTitle from '@/components/common/PageBackTitle';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/games'),
};

export default function GamesPage() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <PageBackTitle href="/#about-me">Games</PageBackTitle>
        <GamesGrid />
      </div>
    </main>
  );
}
