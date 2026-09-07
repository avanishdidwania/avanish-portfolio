import Code from '@/components/svgs/Code';
import Gear from '@/components/svgs/Gear';
import React from 'react';

export interface AboutMeItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

/** Gamepad icon for Games card */
function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

export const aboutMeItems: AboutMeItem[] = [
  {
    title: 'Gears Used',
    description: 'Productivity tools and gear I use to get work done.',
    href: '/gears',
    icon: <Gear className="size-4" />,
  },
  {
    title: 'VS Code / Kiro Setup',
    description: 'Editor setup I use daily.',
    href: '/setup',
    icon: <Code className="size-4" />,
  },
  {
    title: 'Games',
    description: 'Games I enjoy or have completed.',
    href: '/games',
    icon: <GamepadIcon className="size-4" />,
  },
];
