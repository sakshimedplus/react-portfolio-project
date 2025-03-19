import "../index.css"

const projects = [
  {
    id: 1,
    title: "Job Portal",
    description: "A job portal built with React, Express, and MongoDB.",
    
  },
  {
    id: 2,
    title: "HRMS",
    description:
      "An employee management system using Django and React.js.",
   
  },
  {
    id: 3,
    title: "OHS",
    description:
      "A store cash deposit tracking system using Django and Angular.",
  
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
