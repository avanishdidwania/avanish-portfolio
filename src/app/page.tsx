import SectionDivider from '@/components/common/SectionDivider';
import { Quote } from '@/components/common/Quote';
import AboutMe from '@/components/landing/AboutMe';
import Education from '@/components/landing/Education';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Newsletter from '@/components/landing/Newsletter';
import Work from '@/components/landing/Projects';
import Skills from '@/components/landing/Skills';
import TwitterFeed from '@/components/landing/TwitterFeed';
import React from 'react';

export default function page() {
  return (
    <main>
      <div className="content-column content-column-dashed relative mx-auto">
        <Hero />

        {/* Titled sections own their top/bottom rules — no extra dividers between them */}
        <Experience />
        <Work />
        <Skills />
        <Education />
        <TwitterFeed />
        <AboutMe />
        <Newsletter />

        <SectionDivider />
        <Quote />
      </div>
    </main>
  );
}
