import SectionTitle from '../common/SectionTitle';
import X from '../svgs/X';
import ArrowUpRight from '../svgs/ArrowUpRight';
import { Link } from 'next-view-transitions';

const TWITTER_USERNAME = 'AvanishDid92442';

export default function TwitterFeed() {
  const profileUrl = `https://x.com/${TWITTER_USERNAME}`;

  return (
    <section className="pb-10">
      <SectionTitle>Building in Public</SectionTitle>

      <div className="px-6 pt-6">
        <Link
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group card-flat-interactive flex items-center gap-4 px-5 py-5"
        >
          <div className="bg-muted flex size-12 shrink-0 items-center justify-center rounded-full">
            <X className="size-5 text-foreground" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground">
                @{TWITTER_USERNAME}
              </h3>
              <span className="rounded-full border border-[var(--dashed-border)] px-2 py-0.5 text-[10px] text-muted-foreground">
                on X
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              I post what I ship, break, and learn — follow along for real-time
              updates on what I&apos;m building.
            </p>
          </div>

          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        </Link>

        <div className="mt-4 flex justify-center">
          <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            Follow on X
          </Link>
        </div>
      </div>
    </section>
  );
}
