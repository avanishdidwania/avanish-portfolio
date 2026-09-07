import Docker from '@/components/technologies/Docker';
import FastAPI from '@/components/technologies/FastAPI';
import LangChain from '@/components/technologies/LangChain';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export type EmploymentType = 'Full Time' | 'Internship' | 'Freelance' | 'Contract';

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
  employmentType?: EmploymentType;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    employmentType: 'Internship',
    company: 'Naviga Technology Solutions',
    position: 'Gen AI Intern',
    location: 'Remote',
    image: '/company/naviga.png',
    description: [
      'Built NoLie, a Chrome extension for AI-powered content credibility and fact verification, as part of a Generative AI internship focused on misinformation detection.',
      'Designed a claim extraction and verification pipeline using Groq (Llama 3.3 70B), achieving 90% accuracy on a 50-claim evaluation set — a 6-point improvement over naive prompting via context-aware verification and hallucination cross-verification.',
      'Built real-time audio fact-checking (Deepgram Nova-2) and a self-learning RAG cache (Supabase pgvector) that serves semantically similar verified claims instantly, with confidence-gated storage to prevent cache poisoning.',
      'Integrated Google Gemini multimodal API for AI-generated image detection, and built a source credibility scoring system using the MBFC dataset (3,920+ domains).',
    ],
    startDate: 'July 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'LangChain',
        href: 'https://www.langchain.com/',
        icon: <LangChain />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'FastAPI',
        href: 'https://fastapi.tiangolo.com/',
        icon: <FastAPI />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
    ],
    website: '#',
    github: 'https://github.com/avanishdidwania',
  },
  {
    isCurrent: false,
    employmentType: 'Contract',
    company: 'Submitty (Rensselaer Polytechnic Institute)',
    position: 'Open Source Contributor',
    location: 'Remote',
    image: '/company/submitty.png',
    description: [
      'Fixed a forum notification bug causing cluttered email/homepage alerts, and applied the existing previewText() helper to truncate notification content for readability and consistency.',
      'Submitted Pull Request #12868 to the official Submitty GitHub repository following open-source contribution and code review practices.',
    ],
    startDate: 'May 2026',
    endDate: 'May 2026',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
    ],
    website: 'https://submitty.org/',
    github: 'https://github.com/Submitty/Submitty',
  },
];
