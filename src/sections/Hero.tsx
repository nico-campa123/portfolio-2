import React from 'react';
import { motion } from 'framer-motion';

export function Hero({ className }: { className?: string }): React.ReactElement {
  return (
    <section id="home" className={`section-spacing ${className || ''}`}>
      <div className="container-responsive pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-white/60"
          >
            Welcome
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-3 text-4xl sm:text-5xl font-semibold leading-tight"
          >
            Hola, soy <span className="accent-text">Nicolas Campanario</span>, un desarrollador apasionado por crear cosas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-5 text-white/70"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex gap-3"
          >
            <a href="#projects" className="px-5 py-2 rounded-lg font-medium" style={{ backgroundColor: 'var(--color-accent)', color: '#0b1220' }}>
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2 rounded-lg font-medium border border-white/10 hover:border-white/20">
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


