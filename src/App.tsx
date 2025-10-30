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
        <Hero className="bg-section-dark" />
        <Projects className="bg-section-alt" />
        <Achievements className="bg-section-dark" />
        <div className="flex flex-col md:flex-row justify-between">
          <Education className="md:w-1/2 bg-section-alt" />
          <Skills className="md:w-1/2 bg-section-alt" />
        </div>
        <Contact />
      </main>
    </div>
  );
}


