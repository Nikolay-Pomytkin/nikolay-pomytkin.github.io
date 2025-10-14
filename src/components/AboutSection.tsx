import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Impact at Clad (YC W23)',
    description:
      'Shipped compliance automation, mobile upload flows, and analytics optimizations that keep thousands of vendor requirements tracked in real time.'
  },
  {
    title: 'Reliability at Capital One',
    description:
      'Balanced GitHub Enterprise load, drove cross-region disaster recovery tests, and modernized internal tooling to accelerate delivery.'
  },
  {
    title: 'Educator & community builder',
    description:
      'Head TA and instructor for UMD computer science courses and director for Bitcamp, supporting thousands of students and sponsors.'
  }
];

const variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + index * 0.08, duration: 0.45, ease: 'easeOut' }
  })
};

export function AboutSection() {
  return (
    <section style={{ marginTop: 'clamp(7rem, 12vw, 10rem)' }}>
      <span className="tagline">About</span>
      <div className="surface-card" style={{ display: 'grid', gap: '1.75rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Grounded in practical systems and thoughtful collaboration.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{ maxWidth: '64ch' }}
          >
            My work spans end-to-end product features, infrastructure automation, and teaching. Whether modernizing
            compliance workflows, scaling cloud platforms, or mentoring future engineers, I focus on measurable
            outcomes and clear communication.
          </motion.p>
        </div>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
              variants={variants}
            >
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{highlight.title}</h3>
              <p style={{ margin: 0 }}>{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
