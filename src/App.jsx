
import Hero from './components/Hero';
import AcademicJourney from './components/AcademicJourney';
import SkillsAptitudes from './components/SkillsAptitudes';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
