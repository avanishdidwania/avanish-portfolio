export interface Achievement {
  title: string;
  organization: string;
  date: string;
  href?: string;
  icon?: 'trophy' | 'medal' | 'star';
}

export const achievements: Achievement[] = [
  {
    title: 'Active LeetCode problem solver — consistent DSA practice',
    organization: 'LeetCode',
    date: 'Ongoing',
    href: 'https://leetcode.com/u/avanishdidwania/',
    icon: 'medal',
  },
  {
    title: 'Open Source Contributor — Submitty (RPI)',
    organization: 'Submitty',
    date: 'May 2026',
    href: 'https://github.com/Submitty/Submitty/pull/12868',
    icon: 'trophy',
  },
  {
    title: 'Built production AI systems — NoLie, DocMind',
    organization: 'Personal Projects',
    date: '2026',
    href: '/projects',
    icon: 'star',
  },
];

/** Legacy certificate gallery data (used on certificates page if needed) */
export const certificates: { file: string; title: string; issuer: string; date: string }[] = [];

const achievementsConfig = {
  achievements,
  certificates,
};

export default achievementsConfig;
