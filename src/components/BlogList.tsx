import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Automating compliance at Clad (YC W23)',
    summary:
      'Design notes on BullMQ- and Redis-backed tracking that keeps thousands of vendor requirements current and actionable.',
    date: 'May 2025'
  },
  {
    title: 'Smoothing release surges at Capital One',
    summary:
      'How load balancing our automated PR platform and scripting AWS failovers cut GitHub Enterprise strain during peak launches.',
    date: 'March 2024'
  },
  {
    title: 'Teaching web apps at the University of Maryland',
    summary:
      'Lessons from designing the Python & Flask curriculum and coordinating 10 TAs across foundational CS courses.',
    date: 'September 2022'
  }
];

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + index * 0.1, duration: 0.45, ease: 'easeOut' }
  })
};

export function BlogList() {
  return (
    <section style={{ display: 'grid', gap: '3rem' }}>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <span className="tagline">Writing</span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', lineHeight: 1.1 }}
        >
          Notes on shipping dependable products and communities.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ maxWidth: '62ch' }}
        >
          Essays, field notes, and talks focused on the systems thinking and collaboration behind my resume highlights.
        </motion.p>
      </div>
      <div style={{ display: 'grid', gap: '1.75rem' }}>
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            className="surface-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={index}
            variants={variants}
          >
            <span style={{ fontWeight: 500, color: 'var(--color-muted)' }}>{post.date}</span>
            <h2 style={{ fontSize: '1.6rem', marginTop: '0.5rem' }}>{post.title}</h2>
            <p style={{ marginTop: '0.75rem' }}>{post.summary}</p>
            <motion.a
              href="#"
              style={{
                display: 'inline-flex',
                gap: '0.35rem',
                alignItems: 'center',
                marginTop: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-accent)'
              }}
              whileHover={{ x: 4 }}
            >
              Read soon →
            </motion.a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
