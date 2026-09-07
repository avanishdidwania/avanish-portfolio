import { socialLinks } from '@/config/Hero';

export const footerConfig = {
  developer: 'Avanish Didwania',
  text: '©',
  copyright: 'All rights reserved.',
  showVisitorCount: true,
  visitorCountPlaceholder: 0,
  links: [
    {
      name: 'llms.txt',
      href: '/llms.txt',
      label: 'llms.txt',
    },
  ],
};

export const footerSocials = socialLinks.filter((s) =>
  ['Github', 'LinkedIn'].includes(s.name),
);
