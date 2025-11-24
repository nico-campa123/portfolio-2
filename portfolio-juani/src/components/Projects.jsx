
import React from 'react';

const ProjectCard = ({ title, description, githubLink, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
      githubLink: 'https://github.com/yourusername/project-one',
      image: '/src/assets/images/placeholder.jpg',
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
      githubLink: 'https://github.com/yourusername/project-two',
      image: '/src/assets/images/placeholder.jpg',
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
