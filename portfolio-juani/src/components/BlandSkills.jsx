import React from 'react';

const BlandSkills = () => {
  return (
    <section id="bland-skills" className="bland-skills-background">
      <h2>Mis habilidades</h2>

      <div className="skills-list">
        <div className="skill-category">
          <h3>Tecnicas</h3>
          <ul>
            <li>Estructural</li>
            <li>Gestor de obra</li>
            <li>Hidraulico</li>
            <li>Administrativo</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Blandas</h3>
          <ul>
            <li>Trabajo en equipo</li>
            <li>Creativo</li>
            <li>Liderazgo</li>
            <li>Innovador</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Idiomas</h3>
          <ul>
            <li>Español</li>
            <li>Ingles</li>
            <li>Frances</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default BlandSkills;
