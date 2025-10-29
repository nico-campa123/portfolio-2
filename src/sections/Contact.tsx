import React from 'react';
import { motion } from 'framer-motion';

export function Contact(): React.ReactElement {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-responsive">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-4"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-2xl"
        >
          Let’s connect. I’m open to opportunities, collaborations, and interesting ideas.
        </motion.p>
        <div className="mt-6 flex gap-4">
          <a href="https://github.com/your-username" className="underline text-white/85 hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:you@example.com" className="underline text-white/85 hover:text-white">
            Email
          </a>
          <a href="#" className="underline text-white/85 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}


