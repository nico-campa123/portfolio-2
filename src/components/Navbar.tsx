import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

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
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 glass">
      <div className="container-responsive flex items-center justify-between h-16">
        <a href="#home" className="text-white font-semibold tracking-tight">
          <span className="accent-text">&#9679;</span> Juani
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5">
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
        </div>
      )}
    </header>
  );
}


