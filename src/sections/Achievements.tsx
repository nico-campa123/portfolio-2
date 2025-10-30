import React from 'react';
import { motion } from 'framer-motion';

type Entry = {
  title: string;
  body: string;
  year: string;
};

const entries: Entry[] = [
  { title: 'Hackathon XYZ - Finalist', body: 'Built a prototype in 24h solving X with Y.', year: '2024' },
  { title: 'Code Jam - Top 5%', body: 'Solved algorithmic challenges under time pressure.', year: '2023' },
  { title: 'Open Source Contribution', body: 'Contributed features and docs to a popular library.', year: '2022' },
];

export function Achievements({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="achievements" className={`section-spacing ${className || ''}`}>
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8"
        >
          Competitions & Achievements
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="card-surface p-5"
            >
              <div className="text-white/60 text-xs uppercase tracking-wide">{e.year}</div>
              <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{e.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


