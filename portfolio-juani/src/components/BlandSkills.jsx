import React from 'react';

const BlandSkills = () => {
  return (
    <section id="bland-skills" className="bland-skills-background">
      <h2>My Skills</h2>

      <div className="skills-list">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>Frontend Development</li>
            <li>JavaScript/React</li>
            <li>HTML/CSS</li>
            <li>Version Control (Git)</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Communication</li>
            <li>Project Management</li>
            <li>Continuous Learning</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>Spanish (Native)</li>
            <li>English (Advanced)</li>
            <li>French (Basic)</li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default BlandSkills;
