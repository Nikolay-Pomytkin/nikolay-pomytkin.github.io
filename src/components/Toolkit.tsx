import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Languages',
    items: 'TypeScript/JavaScript, Java, Python, Go, SQL, Ruby, Bash'
  },
  {
    title: 'Frontend',
    items: 'React, Remix, Angular, React Router, Vite'
  },
  {
    title: 'Backend',
    items: 'Node.js/Express, Spring Boot, Flask, FastAPI'
  },
  {
    title: 'Databases & Storage',
    items: 'PostgreSQL, MongoDB, S3'
  },
  {
    title: 'DevOps & Tools',
    items: 'AWS (EC2, RDS, Lambda, ECS, S3, Route 53), Docker, GitHub, Jenkins, Terraform'
  },
  {
    title: 'Testing & Libraries',
    items: 'Vitest, JUnit, Pytest, Selenium, Cypress, Chart.js, React Query, Zod'
  }
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + index * 0.08, duration: 0.4, ease: 'easeOut' }
  })
};

export function Toolkit() {
  return (
    <section>
      <span className="tagline">Toolkit</span>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Skills refined in production.</h2>
        <p style={{ maxWidth: '62ch' }}>
          Every tool listed here comes directly from the resume—languages, frameworks, and platforms I’ve used to ship
          compliant, resilient software.
        </p>
      </div>
      <div className="card-grid" style={{ marginTop: '2.5rem' }}>
        {skills.map((skill, index) => (
          <motion.article
            key={skill.title}
            className="surface-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={index}
            variants={variants}
          >
            <h3 style={{ fontSize: '1.2rem' }}>{skill.title}</h3>
            <p style={{ marginTop: '0.75rem' }}>{skill.items}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Toolkit;
