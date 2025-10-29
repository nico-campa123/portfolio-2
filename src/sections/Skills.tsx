import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'TailwindCSS',
  'Node.js',
  'Python',
  'Git',
  'Framer Motion',
  'Vite',
];

export function Skills(): React.ReactElement {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8"
        >
          Skills & Aptitudes
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          {skills.map((s) => (
            <div key={s} className="card-surface px-4 py-3 text-sm text-white/85">
              {s}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


