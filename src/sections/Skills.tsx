import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  logo: string;
};

const skills: Skill[] = [
  { name: 'JavaScript', logo: 'https://via.placeholder.com/40/F7DF1E/000000?text=JS' },
  { name: 'TypeScript', logo: 'https://via.placeholder.com/40/3178C6/FFFFFF?text=TS' },
  { name: 'React', logo: 'https://via.placeholder.com/40/61DAFB/000000?text=React' },
  { name: 'TailwindCSS', logo: 'https://via.placeholder.com/40/38B2AC/FFFFFF?text=TW' },
  { name: 'Node.js', logo: 'https://via.placeholder.com/40/339933/FFFFFF?text=Node' },
  { name: 'Python', logo: 'https://via.placeholder.com/40/3776AB/FFFFFF?text=Py' },
  { name: 'Git', logo: 'https://via.placeholder.com/40/F05032/FFFFFF?text=Git' },
  { name: 'Framer Motion', logo: 'https://via.placeholder.com/40/CC3399/FFFFFF?text=FM' },
  { name: 'Vite', logo: 'https://via.placeholder.com/40/646CFF/FFFFFF?text=Vite' },
];

export function Skills({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="skills" className={`section-spacing ${className || ''}`}>
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
            <div key={s.name} className="card-surface px-4 py-3 text-sm text-white/85 flex items-center gap-3">
              <img src={s.logo} alt={s.name} className="h-6 w-6" />
              {s.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


