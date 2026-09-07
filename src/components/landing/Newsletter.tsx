'use client';

import { newsletterConfig } from '@/config/Newsletter';
import React, { FormEvent, useState } from 'react';

import SectionTitle from '../common/SectionTitle';

export default function Newsletter() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'done'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Hello from your portfolio');
    const body = encodeURIComponent(message);
    // Opens the visitor's default mail client with a pre-filled email
    window.location.href = `mailto:${newsletterConfig.email}?subject=${subject}&body=${body}`;
    setStatus('done');
    setMessage('');
  };

  return (
    <section id="get-in-touch" className="pb-10">
      <SectionTitle>{newsletterConfig.heading}</SectionTitle>
      <div className="hatch-bg px-6 py-6">
        <p className="mb-4 text-sm text-muted-foreground">
          {newsletterConfig.description}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={newsletterConfig.placeholder}
            className="w-full flex-1 rounded-lg border border-dashed border-[var(--dashed-border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20"
          />
          <button type="submit" className="view-all-btn shrink-0 justify-center">
            {newsletterConfig.buttonText}
          </button>
        </form>
        {status === 'done' && (
          <p className="mt-2 text-xs text-muted-foreground">
            Opening your email app — thanks for reaching out!
          </p>
        )}
      </div>
    </section>
  );
}
