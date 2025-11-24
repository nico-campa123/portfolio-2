import Hero from '@/components/Hero.jsx';
import AcademicJourney from '@/components/AcademicJourney.jsx';
import SkillsAptitudes from '@/components/SkillsAptitudes.jsx';
import Projects from '@/components/Projects.jsx';
import Contact from '@/components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="academic-skills-container">
        <AcademicJourney />
        <SkillsAptitudes />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
