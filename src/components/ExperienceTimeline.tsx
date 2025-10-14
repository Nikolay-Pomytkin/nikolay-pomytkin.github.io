import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Clad (YC W23)',
    role: 'Software Engineer',
    period: 'Nov 2024 – May 2025',
    summary:
      'Led end-to-end features across vendor compliance, inventory, and field ops using Remix, React, TypeScript, and Postgres; automated requirement tracking with BullMQ, Redis, and Resend and delivered mobile upload flows and faster analytics.'
  },
  {
    company: 'Capital One',
    role: 'Senior Associate SWE · Delivery Experience',
    period: 'Aug 2023 – Oct 2024',
    summary:
      'Implemented load balancing inside the automated PR platform to cut GitHub Enterprise peak load ~40% and replaced manual disaster-recovery runbooks with Node.js AWS failover automation.'
  },
  {
    company: 'Capital One',
    role: 'Associate SWE · Cloud Infrastructure Automation',
    period: 'Aug 2022 – Aug 2023',
    summary:
      'Migrated internal tooling to TypeScript and Vite, upgraded React Router and Vitest to stabilize CI, and shipped an AWS provisioning app with auditability plus a metrics dashboard for resource compliance.'
  },
  {
    company: 'University of Maryland',
    role: 'Head TA & Instructor',
    period: '2019 – 2022',
    summary:
      'Led Object-Oriented Programming courses with 10 TAs, wrote and graded assessments, and designed the “Building Web Apps with Python & Flask” syllabus and projects.'
  },
  {
    company: 'DTCC',
    role: 'Infrastructure Engineering Intern',
    period: 'Summer 2019',
    summary:
      'Built a Python/Flask tool to run scripts and view logs across 100+ servers, saving support admins hours each day while hardening monitoring for timely reporting.'
  }
];

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.12,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export function ExperienceTimeline() {
  return (
    <section style={{ marginTop: 'clamp(7rem, 12vw, 10rem)' }}>
      <span className="tagline">Experience</span>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Building reliable systems with measurable impact.
        </h2>
        <p style={{ maxWidth: '60ch' }}>
          Each role deepened how I approach resilient platforms, developer velocity, and mentorship—grounded in the
          outcomes highlighted on my resume.
        </p>
      </div>
      <div style={{ marginTop: '3.5rem', display: 'grid', gap: '1.25rem' }}>
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            className="surface-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={index}
            variants={variants}
          >
            <header style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'baseline' }}>
              <h3 style={{ fontSize: '1.5rem' }}>{experience.company}</h3>
              <span style={{ fontWeight: 500, color: 'var(--color-muted)' }}>{experience.period}</span>
            </header>
            <p style={{ marginTop: '0.75rem', color: 'rgba(15, 23, 42, 0.75)' }}>
              <strong style={{ color: 'var(--color-text)' }}>{experience.role}</strong> — {experience.summary}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
