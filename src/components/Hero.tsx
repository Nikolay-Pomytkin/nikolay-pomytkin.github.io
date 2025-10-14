import { motion } from 'framer-motion';

const headline = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const words = ['Engineer', 'Builder', 'Community', 'Leader'];

export function Hero() {
  return (
    <section style={{ display: 'grid', gap: '1.75rem' }}>
      <span className="tagline">Software Engineer · NYC</span>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ fontSize: 'clamp(2.75rem, 8vw, 4.75rem)', lineHeight: 1.05 }}
      >
        I turn complex operations into dependable products.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ maxWidth: '54ch' }}
      >
        I’m Nikolay Pomytkin, a New York–based engineer who led compliance and field ops workflows at Clad (YC W23),
        delivered reliability and release tooling at Capital One, and taught web development at the University of
        Maryland. I’m looking for hybrid or in-person roles in NYC.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}
      >
        {words.map((word, index) => (
          <motion.span
            key={word}
            custom={index}
            variants={headline}
            style={{
              padding: '0.45rem 0.85rem',
              borderRadius: '999px',
              background: 'rgba(37, 99, 235, 0.08)',
              color: 'rgba(37, 99, 235, 0.9)',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
