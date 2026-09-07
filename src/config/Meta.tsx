import { Metadata } from 'next';

import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: 'Avanish Didwania - Portfolio',
  description: 'AI Full Stack Engineer Portfolio - Avanish Didwania',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '',
    github: 'avanishdidwania',
    linkedin: 'avanish-didwania',
    email: 'avanishdidwania@gmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'ai engineer',
    'genai',
    'rag',
    'react',
    'nextjs',
    'typescript',
    'python',
    heroConfig.name.toLowerCase(),
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} - ${heroConfig.title}`,
    description: `${about.description} Explore my projects, experience, and technical expertise.`,
    keywords: [
      'portfolio',
      'developer',
      'full-stack',
      'ai engineer',
      'genai',
      'rag',
      'projects',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact - Get in Touch',
    description:
      "Get in touch with me for collaborations, projects, or opportunities. I'd love to hear from you!",
    keywords: ['contact', 'hire', 'collaboration', 'internship', 'developer'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Work Experience - Professional Journey',
    description:
      'Explore my professional work experience in AI engineering, GenAI, and full-stack development.',
    keywords: [
      'work experience',
      'career',
      'professional',
      'ai engineer',
      'genai intern',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: 'Projects - My Work & Projects Portfolio',
    description:
      'Discover my projects across AI, RAG systems, full-stack applications, and open source contributions.',
    keywords: [
      'projects',
      'portfolio',
      'rag',
      'ai',
      'chrome extension',
      'full-stack',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: 'Resume - Professional CV',
    description: `View and download ${heroConfig.name}'s professional resume. Technical skills, experience, and qualifications.`,
    keywords: [
      'resume',
      'cv',
      'professional',
      'skills',
      'qualifications',
      'download',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Gears page
  '/gears': {
    title: 'Gears Used - Hardware & Tools',
    description:
      'The devices, software, and tools I use daily as an AI full-stack engineer.',
    keywords: ['gears', 'setup', 'hardware', 'tools', 'workflow'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Editor setup page
  '/setup': {
    title: 'VS Code / Kiro Setup',
    description:
      'My VS Code and Kiro editor setup — fonts, extensions, and settings for productive AI development.',
    keywords: [
      'vscode',
      'kiro',
      'editor setup',
      'extensions',
      'settings',
      'developer tools',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Games page
  '/games': {
    title: 'Games I Play',
    description: 'The games I play when not coding.',
    keywords: ['games', 'gaming', 'entertainment'],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string): Metadata {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
