import React from 'react';
import { motion, type Variants } from 'framer-motion';

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

type SectionProps = React.PropsWithChildren<{ id: string; title?: string }>;

export function Section({ id, title, children }: SectionProps): React.ReactElement {
  return (
    <section id={id} className="section-spacing">
      <div className="container-responsive">
        {title && (
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            variants={variants}
            className="text-2xl font-semibold mb-8"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}


