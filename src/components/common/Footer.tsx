'use client';

import DashedHorizontalRule from '@/components/common/DashedHorizontalRule';
import { footerConfig, footerSocials } from '@/config/Footer';
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from 'react';

function formatOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function Footer() {
  const [visitors, setVisitors] = useState(footerConfig.visitorCountPlaceholder);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        // Only count once per browser session to avoid inflating on refresh
        const alreadyCounted =
          sessionStorage.getItem('visitor-counted') === '1';
        const res = await fetch('/api/visitor-count', {
          method: alreadyCounted ? 'GET' : 'POST',
        });
        const data = await res.json();
        if (!cancelled && typeof data.count === 'number') {
          setVisitors(data.count);
          if (!alreadyCounted) sessionStorage.setItem('visitor-counted', '1');
        }
      } catch {
        // Silently keep the placeholder if the request fails
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="content-column content-column-dashed mx-auto">
      <DashedHorizontalRule />

      {/* Social / link bar */}
      <div className="flex items-center justify-center gap-0">
        {footerConfig.links.map((link) => (
          <React.Fragment key={link.name}>
            <Link
              href={link.href}
              className="px-4 py-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
            <span
              aria-hidden="true"
              className="h-4 w-px bg-[var(--dashed-border)] opacity-60"
            />
          </React.Fragment>
        ))}
        {footerSocials.map((social, i) => (
          <React.Fragment key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.name}
            >
              <span className="size-4">{social.icon}</span>
            </a>
            {i < footerSocials.length - 1 && (
              <span
                aria-hidden="true"
                className="h-4 w-px bg-[var(--dashed-border)] opacity-60"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <DashedHorizontalRule />

      {/* Copyright + visitor count */}
      <div className="flex flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          {footerConfig.text} {new Date().getFullYear()} {footerConfig.developer}
          . {footerConfig.copyright}
        </p>
        {footerConfig.showVisitorCount && visitors > 0 && (
          <p className="text-xs text-muted-foreground">
            You&apos;re the{' '}
            <strong className="text-foreground">
              {formatOrdinal(visitors)}
            </strong>{' '}
            visitor
          </p>
        )}
      </div>
    </div>
  );
}
