import Github from '@/components/svgs/Github';
import LeetCode from '@/components/svgs/LeetCode';
import LinkedIn from '@/components/svgs/LinkedIn';
import Docker from '@/components/technologies/Docker';
import FastAPI from '@/components/technologies/FastAPI';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import AgenticAI from '@/components/technologies/AgenticAI';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  JavaScript: JavaScript,
  Python: Python,
  Docker: Docker,
  LangChain: LangChain,
  AgenticAI: AgenticAI,
  FastAPI: FastAPI,
};

export const heroConfig = {
  // Personal Information
  name: 'Avanish Didwania',
  title: 'AI Full Stack Engineer',
  /** Rotating roles under the name */
  titles: [
    'AI Engineer',
    'Full Stack Developer',
    'GenAI Specialist',
    'Open Source Contributor',
  ],
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Python',
      href: 'https://www.python.org/',
      component: 'Python',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Docker',
      href: 'https://www.docker.com/',
      component: 'Docker',
    },
    {
      name: 'LangChain',
      href: 'https://www.langchain.com/',
      component: 'LangChain',
    },
    {
      name: 'Agentic AI',
      href: 'https://www.anthropic.com/',
      component: 'AgenticAI',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build <b>AI systems that separate fact from fiction</b>. Specializing in <b>GenAI</b>, RAG pipelines, and <b>{skills:6}</b> — turning LLMs into production tools that verify, retrieve, and reason. Full-stack engineer working with {skills:0}, {skills:1}, {skills:2}, and {skills:3}.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'Check my resume',
      href: '/resume/AvanishDidwania__CV.pdf',
      icon: 'CV',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/avanishdidwania',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/avanish-didwania/',
    icon: <LinkedIn />,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/avanishdidwania/',
    icon: <LeetCode />,
  },
];
