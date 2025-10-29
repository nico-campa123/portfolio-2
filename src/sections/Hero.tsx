import React from 'react';
import { motion } from 'framer-motion';

export function Hero(): React.ReactElement {
  return (
    <section id="home" className="section-spacing">
      <div className="container-responsive pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-white/60">Welcome</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight">
            Hi, I’m <span className="accent-text">[Your Name]</span>, a developer passionate about building things.
          </h1>
          <p className="mt-5 text-white/70">
            I craft clean, performant web experiences with a focus on delightful interactions and thoughtful design.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded-lg font-medium" style={{ backgroundColor: 'var(--color-accent)', color: '#0b1220' }}>
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2 rounded-lg font-medium border border-white/10 hover:border-white/20">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


