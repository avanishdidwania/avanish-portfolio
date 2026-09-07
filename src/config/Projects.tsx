import ChatGPT from '@/components/technologies/ChatGPT';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import FastAPI from '@/components/technologies/FastAPI';
import JavaScript from '@/components/technologies/JavaScript';
import LangChain from '@/components/technologies/LangChain';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'NoLie',
    description:
      'AI-powered Chrome extension that scans news articles, YouTube videos, and live audio, extracts factual claims, and verifies them. Features an optional LangGraph Agent Mode, real-time audio fact-checking via Deepgram, a self-learning RAG cache, and AI-image detection with Gemini.',
    image: '/project/nolie.png',
    link: 'https://github.com/avanishdidwania/nolie',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'ChatGPT', icon: <ChatGPT key="groq" /> },
    ],
    github: 'https://github.com/avanishdidwania/nolie',
    live: 'https://github.com/avanishdidwania/nolie',
    details: true,
    projectDetailsPageSlug: '/projects/nolie',
    isWorking: true,
    detailContent: {
      overview:
        'NoLie is a Chrome extension (Manifest V3) that automatically scans news articles and YouTube videos, extracts factual claims, verifies them with AI, analyzes images for manipulation, and returns credibility scores. Built during a Gen AI internship focused on content credibility and misinformation detection.',
      highlightsLabel: 'NoLie features & architecture:',
      highlights: [
        'Full article + YouTube transcript scanning with one-click claim extraction (Groq, gpt-oss-120b)',
        'Optional Agent Mode: a LangGraph agent on Railway that classifies claims, checks source credibility, searches cache, runs Tavily web search, and returns a reasoning trail — with a circuit breaker that falls back after 3 failures',
        'Real-time audio fact-checking for podcasts, live streams, and reels via Deepgram Nova-2 over WebSocket',
        'Self-learning RAG cache (Supabase pgvector) with a 0.92 similarity threshold and confidence-gated storage to prevent cache poisoning',
        'AI-generated image detection and manipulation analysis with Google Gemini multimodal',
        'Source credibility scoring across 3,920+ domains using the offline MBFC dataset',
        'Credibility heatmap overlay (green/yellow/red) plus exportable HTML reports',
      ],
      outcome:
        'An ablation study on 50 claims showed the full context-aware pipeline reached 90% accuracy — a 6-point improvement over the naive baseline.',
    },
  },
  {
    title: 'DocMind',
    description:
      'Production-grade AI document intelligence platform with a skills-based architecture. An LLM intent router dispatches each query to Document Q&A, Fact Checker, or General Chat — behind Auth0 auth (MFA + RBAC), a security pipeline, self-correcting hybrid RAG, and a LangGraph agent with failover.',
    image: '/project/docmind.png',
    link: 'https://github.com/avanishdidwania/DocMind',
    technologies: [
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'https://github.com/avanishdidwania/DocMind',
    live: 'https://github.com/avanishdidwania/DocMind',
    details: true,
    projectDetailsPageSlug: '/projects/docmind',
    isWorking: true,
    detailContent: {
      overview:
        'DocMind is not just a RAG chatbot — it is a platform where capabilities are pluggable skills. An LLM-based intent router reads each query and dispatches it to Document Q&A, Fact Checker, General Chat, or a Combined mode. Answers are grounded, streamed in real-time, and secured behind enterprise authentication.',
      highlightsLabel: 'DocMind features & capabilities:',
      highlights: [
        'Skills architecture with an LLM intent router (plus keyword heuristic fallback) routing to specialized skills',
        'Self-correcting hybrid retrieval: BM25 + vector search + Reciprocal Rank Fusion, with an LLM grading chunks and reformulating + re-retrieving (max 2 attempts) on failure',
        'LangGraph agent with structural safety net: primary → retry → fallback → graceful error',
        'Auth0 authentication with enforced MFA and role-based access control (admin / member)',
        '3-stage security pipeline: input sanitizer → injection detector (18 patterns) → PII masker',
        'Multi-provider LLM factory (Groq for generation, Google for embeddings), auto-selecting PGVector or Chroma',
        'Automated LLM-as-judge evaluation for retrieval relevance and faithfulness, plus SSE streaming',
      ],
      outcome:
        'A production-first RAG platform built with real identity, security, observability, and Docker deployment — not demo-ware.',
    },
  },
  {
    title: 'LunarAlign',
    description:
      'Multi-modal, illumination-invariant image registration for ISRO Chandrayaan-2. Fuses classical CV (Phase Congruency, SIFT) with deep learning (SuperPoint + LightGlue) and MAGSAC++ to align multi-sensor lunar imagery at sub-pixel accuracy (RMSE < 1.0 px). Built for SIH 2026 (PS 26166).',
    image: '/project/lunaralign.png',
    link: 'https://github.com/avanishdidwania/LunarAlign-Multi-Modal-Illumination-Invariant-Image-Registration-for-Chandrayaan-2',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github:
      'https://github.com/avanishdidwania/LunarAlign-Multi-Modal-Illumination-Invariant-Image-Registration-for-Chandrayaan-2',
    live: 'https://github.com/avanishdidwania/LunarAlign-Multi-Modal-Illumination-Invariant-Image-Registration-for-Chandrayaan-2',
    details: true,
    projectDetailsPageSlug: '/projects/lunaralign',
    isWorking: true,
    detailContent: {
      overview:
        'LunarAlign is an end-to-end image registration system for aligning multi-sensor imagery captured by the Chandrayaan-2 orbiter. It fuses classical computer vision with modern deep learning to deliver sub-pixel accuracy across all Chandrayaan-2 sensors (OHRC, TMC-2, IIRS). Built for SIH 2026 Problem Statement 26166 (ISRO, Department of Space).',
      highlightsLabel: 'LunarAlign capabilities:',
      highlights: [
        'Phase Congruency for illumination invariance across extreme lunar lighting',
        'SuperPoint + LightGlue for robust feature matching, MAGSAC++ for threshold-free outlier rejection',
        'Sub-pixel refinement (NCC + quadratic) reaching 0.16 px RMSE on real TMC texture',
        'PDS4 label parsing and .img → GeoTIFF conversion for real Chandrayaan-2 data',
        'Content-based overlap recovery (row-profile cross-correlation + phase correlation)',
        'FastAPI backend with job pipeline and CSV / GeoJSON / GeoTIFF / PNG exports, plus a React frontend',
      ],
      outcome:
        'Validated end-to-end on real Chandrayaan-2 TMC data with 99.9% inlier ratio and RMSE as low as 0.40 px through the full web pipeline.',
    },
  },
  {
    title: 'WeatherGPT',
    description:
      'AI-powered conversational weather intelligence platform for India. A LangGraph agent answers natural-language weather queries with real-time data, geospatial reasoning (Shapely/GeoPy), streaming responses, and a PostGIS-backed data layer.',
    image: '/project/weathergpt.png',
    link: 'https://github.com/avanishdidwania/weathergpt',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'LangChain', icon: <LangChain key="langchain" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'https://github.com/avanishdidwania/weathergpt',
    live: 'https://github.com/avanishdidwania/weathergpt',
    details: true,
    projectDetailsPageSlug: '/projects/weathergpt',
    isWorking: true,
    detailContent: {
      overview:
        'WeatherGPT is a conversational weather intelligence platform for India, built around a LangGraph agent that turns natural-language questions into grounded, real-time weather answers with geospatial reasoning.',
      highlightsLabel: 'WeatherGPT features:',
      highlights: [
        'LangGraph + LangChain agent orchestration (Groq generation, Google embeddings)',
        'Geospatial reasoning with Shapely, GeoPy, and GeoAlchemy2 over a PostGIS/pgvector data layer',
        'Async FastAPI backend with SSE streaming and WebSocket support',
        'Redis caching and MQTT ingestion for live data',
        'SQLAlchemy async ORM with Alembic migrations; Kubernetes manifests for deployment',
      ],
      outcome:
        'A production-oriented, real-time conversational weather assistant tailored to Indian geography.',
    },
  },
  {
    title: 'Stock Portfolio & Market Analytics',
    description:
      'Full-stack MERN financial dashboard with JWT/BCrypt authentication, enabling users to manage equity portfolios and track real-time performance with Alpha Vantage API integration, caching, and fallback handling.',
    image: '/project/stock-dashboard.png',
    link: 'https://github.com/avanishdidwania',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/avanishdidwania',
    live: 'https://github.com/avanishdidwania',
    details: true,
    projectDetailsPageSlug: '/projects/stock-portfolio',
    isWorking: true,
    detailContent: {
      overview:
        'A full-stack MERN financial dashboard with JWT/BCrypt authentication, enabling users to manage equity portfolios and track real-time performance.',
      highlightsLabel: 'Stock Dashboard features:',
      highlights: [
        'JWT/BCrypt authentication for secure user access',
        'Real-time stock data via Alpha Vantage APIs',
        'Caching and fallback mechanisms to handle rate limits',
        'Portfolio tracking with performance visualization using Recharts',
        'Full CRUD operations for managing equity holdings',
      ],
      outcome:
        'A production-ready financial dashboard delivering real-time market analytics and portfolio management.',
    },
  },
];
