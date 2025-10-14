import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section style={{ display: 'grid', gap: '1.75rem', paddingBottom: '2rem' }}>
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
        I'm Nikolay Pomytkin, a New York–based engineer who led compliance and field ops workflows at Clad (YC W23),
        delivered reliability and release tooling at Capital One, and taught web development at the University of
        Maryland. I'm looking for hybrid or in-person roles in NYC.
      </motion.p>
    </section>
  );
}

export default Hero;
