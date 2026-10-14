import { NavLink, Outlet } from "react-router-dom";
import { projects } from "../data/projects/projects";
import { ProjectEntry } from "../components/ProjectCard";
import { ProjectList } from "../components/ProjectList";
import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <section id="projects-page" className="projects-page">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-page-grid">
          <div className="project-list">
            <h2 className="section-title-devlog-entry-list">Projects</h2>
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={`#project-card ${project.title}`}
                  className="project-list-link"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </div>
          <div className="project-cards">
            {projects.map((project) => (
              <ProjectEntry key={project.id} id={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
