import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/5 glass"
    >
      <div className="container-responsive flex items-center justify-between h-16">
        <a href="#home" className="text-white font-semibold tracking-tight">
          <span className="accent-text">&#9679;</span> Juani
        </a>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center gap-6 text-sm text-white/80"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </motion.nav>
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-white/5"
        >
          <div className="container-responsive py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-white/85 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}


