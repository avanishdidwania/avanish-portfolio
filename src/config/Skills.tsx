import AgenticAI from '@/components/technologies/AgenticAI';
import ChatGPT from '@/components/technologies/ChatGPT';
import CSS from '@/components/technologies/CSS';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import Git from '@/components/technologies/Git';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import HuggingFace from '@/components/technologies/HuggingFace';
import Java from '@/components/technologies/Java';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import SQL from '@/components/technologies/SQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import type { ReactNode } from 'react';

export interface SkillItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export const skills: SkillItem[] = [
  // ── Languages ──
  {
    name: 'Python',
    href: 'https://www.python.org/',
    icon: <Python />,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: <TypeScript />,
  },
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: <JavaScript />,
  },
  {
    name: 'Java',
    href: 'https://www.java.com/',
    icon: <Java />,
  },
  {
    name: 'C++',
    href: 'https://isocpp.org/',
    icon: <TypeScript />,
  },
  {
    name: 'SQL',
    href: 'https://en.wikipedia.org/wiki/SQL',
    icon: <SQL />,
  },

  // ── AI / ML ──
  {
    name: 'LangChain',
    href: 'https://www.langchain.com/',
    icon: <LangChain />,
  },
  {
    name: 'LangGraph',
    href: 'https://www.langchain.com/langgraph',
    icon: <LangChain />,
  },
  {
    name: 'Agentic AI',
    href: 'https://www.anthropic.com/research',
    icon: <AgenticAI />,
  },
  {
    name: 'RAG',
    href: 'https://www.pinecone.io/learn/retrieval-augmented-generation/',
    icon: <ChatGPT />,
  },
  {
    name: 'LLM APIs',
    href: 'https://console.groq.com/',
    icon: <ChatGPT />,
  },
  {
    name: 'Hugging Face',
    href: 'https://huggingface.co/',
    icon: <HuggingFace />,
  },

  // ── Frontend ──
  {
    name: 'React',
    href: 'https://react.dev/',
    icon: <ReactIcon />,
  },
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    icon: <NextJs />,
  },
  {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    icon: <TailwindCss />,
  },
  {
    name: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: <Html />,
  },
  {
    name: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: <CSS />,
  },

  // ── Backend ──
  {
    name: 'FastAPI',
    href: 'https://fastapi.tiangolo.com/',
    icon: <FastAPI />,
  },
  {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    icon: <NodeJs />,
  },
  {
    name: 'Express.js',
    href: 'https://expressjs.com/',
    icon: <ExpressJs />,
  },

  // ── Databases ──
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    icon: <PostgreSQL />,
  },
  {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    icon: <MongoDB />,
  },
  {
    name: 'Supabase',
    href: 'https://supabase.com/',
    icon: <PostgreSQL />,
  },
  {
    name: 'Redis',
    href: 'https://redis.io/',
    icon: <Redis />,
  },

  // ── Tools & DevOps ──
  {
    name: 'Git',
    href: 'https://git-scm.com/',
    icon: <Git />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: <Github />,
  },
  {
    name: 'Docker',
    href: 'https://www.docker.com/',
    icon: <Docker />,
  },
  {
    name: 'Vercel',
    href: 'https://vercel.com/',
    icon: <Vercel />,
  },
  {
    name: 'Postman',
    href: 'https://www.postman.com/',
    icon: <Postman />,
  },
];
