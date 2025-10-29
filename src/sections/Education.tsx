import React from 'react';
import { motion } from 'framer-motion';

type Edu = {
  degree: string;
  institution: string;
  year: string;
};

const education: Edu[] = [
  { degree: 'B.S. in Computer Science', institution: 'Sample University', year: '2020 - 2024' },
  { degree: 'Exchange Program', institution: 'Tech Institute', year: '2023' },
];

export function Education(): React.ReactElement {
  return (
    <section id="education" className="section-spacing">
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8"
        >
          Education
        </motion.h2>

        <ol className="relative border-s border-white/10 ml-4">
          {education.map((e, idx) => (
            <motion.li
              key={e.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="mb-8 ml-6"
            >
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: 'var(--color-accent)' }}></span>
              <h3 className="text-base font-semibold">{e.degree}</h3>
              <p className="text-white/70 text-sm">{e.institution}</p>
              <p className="text-white/60 text-xs mt-1">{e.year}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}


