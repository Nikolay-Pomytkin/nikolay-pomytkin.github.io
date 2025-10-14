import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Compliance automation at Clad',
    description:
      'Expanded vendor compliance coverage with BullMQ, Redis, and Resend powered monitoring plus mobile-friendly media and signature uploads built with Remix and React.',
    link: '#'
  },
  {
    title: 'Release resilience for Capital One',
    description:
      'Implemented GitHub Enterprise load balancing and AWS failover automation that kept release surges smooth and disaster recovery drills auditable.',
    link: '#'
  },
  {
    title: 'Clarissa.ai intelligent assistant',
    description:
      'Co-founded a React + Flask MVP that helped medical teams coordinate lending and surfaced insights for microfinance partners.',
    link: '#'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + index * 0.12, duration: 0.55, ease: 'easeOut' }
  })
};

export function ProjectSpotlight() {
  return (
    <section style={{ marginTop: 'clamp(7rem, 12vw, 10rem)' }}>
      <span className="tagline">Selected Work</span>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Work shaped by real-world operations.</h2>
        <p style={{ maxWidth: '62ch' }}>
          These initiatives highlight the resume projects I’m most proud of—from automating compliance and release
          workflows to launching a full-stack product from scratch.
        </p>
      </div>
      <div className="card-grid" style={{ marginTop: '3.5rem' }}>
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="surface-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
            custom={index}
            variants={itemVariants}
          >
            <h3 style={{ fontSize: '1.35rem' }}>{project.title}</h3>
            <p style={{ marginTop: '0.75rem' }}>{project.description}</p>
            <motion.a
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : undefined}
              rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginTop: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-accent)'
              }}
              whileHover={{ x: 4 }}
            >
              View details →
            </motion.a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProjectSpotlight;
