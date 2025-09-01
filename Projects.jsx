import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  { title: "Machine Learning Based Network Intrusion Detection", description: "Built in Python and ML", link: "#" },
  { title: "Gas Booking Agency", description: "Biold in Python and PHP", link: "#" },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
