import React from 'react';
import './Project.css';
// Card component for displaying project links
function ProjectCard({ title, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Project</a>
    </div>
  );
}

// Project component displaying project cards
export default function Project() {
  // Sample project data
  const projects = [
    { title: 'PASS-X-Your-OWN-Password-Manager', link: 'https://github.com/SomsubhroChakraborty/PASS-X-Your-OWN-Password-Manager' },
    { title: 'SuperHero_Card', link: 'https://github.com/SomsubhroChakraborty/SuperHero_Card' },
    { title: 'QR-code-generator', link: 'https://github.com/SomsubhroChakraborty/QR-code-generator' },
    { title: 'Tic-Tac-Toe-game', link: 'https://github.com/SomsubhroChakraborty/Tic-Tac-Toe-game' },
    { title: 'Weather-app', link: 'https://github.com/SomsubhroChakraborty/Weather-app' },
    { title: 'Hackerman-', link: 'https://github.com/SomsubhroChakraborty/Hackerman--fun-project' },
    { title: 'Nutra-X', link: 'https://github.com/SomsubhroChakraborty/Nutra-X' },
    { title: 'Syllabus-Manager', link: 'https://github.com/SomsubhroChakraborty/Syllabus-Manager' },
    
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} link={project.link} />
        ))}
      </div>
    </div>
  );
}
