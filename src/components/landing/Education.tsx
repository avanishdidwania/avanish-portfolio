'use client';

import SectionTitle from '../common/SectionTitle';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'JIS University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    location: 'West Bengal, India',
    period: '2024 – 2028',
    cgpa: '8.73/10',
  },
];

export default function Education() {
  return (
    <section className="pb-10">
      <SectionTitle>Education</SectionTitle>

      <div className="flex flex-col gap-3 px-6 pt-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="card-flat-interactive flex items-start gap-4 px-4 py-4"
          >
            <div className="bg-muted flex shrink-0 items-center justify-center rounded-md p-2.5">
              <GraduationCap className="size-5 text-foreground" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <h3 className="text-sm font-semibold text-foreground">
                {edu.institution}
              </h3>
              <p className="text-xs text-muted-foreground">{edu.degree}</p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  {edu.location}
                </span>
              </div>

              <p className="mt-1 text-xs text-muted-foreground">
                CGPA:{' '}
                <span className="font-medium text-foreground">{edu.cgpa}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
