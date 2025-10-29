import React from 'react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A concise summary of what this project does and why it’s cool.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Data Explorer',
    description: 'Interactive dashboards and charts for exploring interesting datasets.',
    tags: ['TypeScript', 'D3', 'Vite'],
  },
  {
    title: 'API Toolkit',
    description: 'A lightweight toolkit for working with APIs and caching.',
    tags: ['Node', 'Express', 'Redis'],
  },
  {
    title: 'ML Playground',
    description: 'Exploring simple ML concepts with visual demos.',
    tags: ['Python', 'Flask', 'Pandas'],
  },
];

export function Projects(): React.ReactElement {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl font-semibold mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="card-surface p-5 hover:translate-y-[-2px] transition-transform"
            >
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


