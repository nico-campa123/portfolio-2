import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

export default function App(): React.ReactElement {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Achievements />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}


