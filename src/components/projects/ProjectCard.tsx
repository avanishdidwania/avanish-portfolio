'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import PlayCircle from '../svgs/PlayCircle';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

function getProjectHost(project: Project): string {
  if (project.projectDetailsPageSlug) {
    const slug = project.projectDetailsPageSlug.replace(/^\/projects\//, '');
    return `${slug}.app`;
  }
  return `${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}.dev`;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const projectHref = project.details
    ? project.projectDetailsPageSlug
    : project.link || project.live;

  const previewContent = (
    <div className="overflow-hidden rounded-xl border border-neutral-300/80 bg-neutral-100/90 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-neutral-400 group-hover:shadow-md dark:border-neutral-800 dark:bg-[#151515] dark:group-hover:border-neutral-700 dark:group-hover:shadow-black/50">
      {/* Sleek Browser Window Header */}
      <div className="flex h-8 items-center justify-between border-b border-neutral-200/90 bg-neutral-200/40 px-3 transition-colors group-hover:bg-neutral-200/70 dark:border-neutral-800/80 dark:bg-neutral-900/60 dark:group-hover:bg-neutral-900/90">
        {/* Window controls (traffic dots) */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full border border-red-500/40 bg-red-400/80 dark:bg-red-500/70" />
          <span className="size-2 rounded-full border border-amber-500/40 bg-amber-400/80 dark:bg-amber-500/70" />
          <span className="size-2 rounded-full border border-emerald-500/40 bg-emerald-400/80 dark:bg-emerald-500/70" />
        </div>

        {/* Minimalist address pill */}
        <div className="flex items-center gap-1 rounded-md border border-neutral-300/60 bg-white/70 px-2 py-0.5 text-[10.5px] font-mono text-neutral-600 transition-colors group-hover:border-neutral-400/80 dark:border-neutral-800 dark:bg-black/50 dark:text-neutral-400 dark:group-hover:text-neutral-300">
          <span className="size-1.5 rounded-full bg-emerald-500/80" />
          <span className="max-w-[130px] truncate">{getProjectHost(project)}</span>
        </div>

        {/* Action arrow indicator */}
        <div className="flex w-8 justify-end">
          <ArrowUpRight className="size-3.5 text-neutral-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-800 dark:text-neutral-500 dark:group-hover:text-neutral-200" />
        </div>
      </div>

      {/* Edge-to-edge screenshot viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
        <Image
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          draggable={false}
          priority={index < 2}
        />

        {/* Subtle hover gradient reflection */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Video trigger overlay if video is provided */}
        {project.video && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  className="flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white backdrop-blur-md transition-transform duration-300 hover:scale-110"
                >
                  <PlayCircle />
                </button>
              </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-4xl border-0 p-0">
              <div className="aspect-video w-full">
                <video
                  className="h-full w-full rounded-lg object-cover"
                  src={project.video}
                  autoPlay
                  loop
                  controls
                />
              </div>
              <DialogTitle className="sr-only">{project.title}</DialogTitle>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );

  return (
    <div className="group flex h-full w-full flex-col gap-3">
      {/* Clickable preview container */}
      {project.video ? (
        previewContent
      ) : (
        <Link
          href={projectHref}
          {...(!project.details
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className="block"
        >
          {previewContent}
        </Link>
      )}

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1.5 px-0.5">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={projectHref}
            {...(!project.details
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="text-foreground text-[1.1rem] font-bold leading-tight transition-colors group-hover:text-foreground/80"
          >
            {project.title}
          </Link>
          <div className="flex shrink-0 items-center gap-1.5">
            {project.isWorking ? (
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
            ) : (
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-red-500" />
              </span>
            )}
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {project.isWorking ? 'Live' : 'Building'}
            </span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm font-normal text-neutral-500 dark:text-neutral-400">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}

        <Link
          href={projectHref}
          {...(!project.details
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className="mt-auto flex items-center gap-1 pt-1.5 text-sm font-normal text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-200"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-45"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
