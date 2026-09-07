'use client';

import SectionTitle from '../common/SectionTitle';
import { Link } from 'next-view-transitions';
import { useEffect, useRef } from 'react';

const TWITTER_USERNAME = 'AvanishDid92442';

export default function TwitterFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pb-10">
      <SectionTitle>Building in Public</SectionTitle>

      <div className="flex flex-col gap-4 px-6 pt-6">
        <p className="text-muted-foreground text-sm">
          I share my progress, learnings, and thoughts on{' '}
          <Link
            href={`https://x.com/${TWITTER_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            X (Twitter)
          </Link>
          . Follow along for real-time updates on what I&apos;m building.
        </p>

        <div
          ref={containerRef}
          className="overflow-hidden rounded-xl border border-[var(--dashed-border)]"
        >
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-chrome="noheader nofooter noborders transparent"
            data-height="400"
            data-dnt="true"
            href={`https://twitter.com/${TWITTER_USERNAME}`}
          >
            Loading tweets...
          </a>
        </div>

        <div className="text-center">
          <Link
            href={`https://x.com/${TWITTER_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Follow me on X →
          </Link>
        </div>
      </div>
    </section>
  );
}
