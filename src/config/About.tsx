import FastAPI from '@/components/technologies/FastAPI';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <Python key="python" />,
  <TypeScript key="typescript" />,
  <ReactIcon key="react" />,
  <JavaScript key="javascript" />,
  <NodeJs key="nodejs" />,
  <MongoDB key="mongodb" />,
  <PostgreSQL key="postgresql" />,
  <FastAPI key="fastapi" />,
  <LangChain key="langchain" />,
];

export const about = {
  name: 'Avanish Didwania',
  description: `I'm an AI Full Stack engineer who builds AI systems that separate fact from fiction. Specializing in GenAI, RAG pipelines, and agentic AI — turning LLMs into production tools that verify, retrieve, and reason.`,
};
