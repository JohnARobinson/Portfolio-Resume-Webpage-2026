import { Link, useLocation, useNavigate } from "react-router-dom";
import { experiences } from "../data/experience/experience";
import { ExperienceCard } from "../components/ExperienceCard";
import { projects } from "../data/projects/projects";
import { ProjectEntry } from "../components/ProjectCard";
import { devlog_entries } from "../data/devlog/devlog";
import { DevlogPreview } from "../components/DevlogPreview";
import { SkillGrid } from "../components/SkillsGrid";
import { ContactForm } from "../components/ContactForm";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main id="home" className="home">
      <section id="hero">
        <p className="section-label">Available for work & collaboration</p>
        <h1 className="section-title">John Robinson</h1>
        <p className="section-description">Web, software & game developer.</p>
        <a href="#contact" className="work-with-me-button">
          Get in Touch
        </a>
        <a
          href="#projects"
          className="take-a-look-button"
          onClick={() => window.scrollTo(0, 0)}
        >
          View Projects
        </a>
      </section>

      <SkillGrid />

      <section id="projects">
        <p className="section-label">Things I've built</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectEntry key={project.id} {...project} />
          ))}
        </div>
        <Link
          to="/projects"
          className="see-all"
          onClick={() => window.scrollTo(0, 0)}
        >
          See More Projects
        </Link>
      </section>

      <section id="experience">
        <p className="section-label">My professional journey</p>
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences
            .filter((e) => e.type === "work experience")
            .slice(0, 2)
            .map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
        </div>
        <Link
          to="/experience"
          className="see-all"
          onClick={() => window.scrollTo(0, 0)}
        >
          See Full Experience →
        </Link>
      </section>

      <section id="devlog">
        <p className="section-label">My development journey</p>
        <h2 className="section-title">Devlog</h2>
        <div className="devlog-grid">
          {devlog_entries.slice(0, 3).map((entry) => (
            <DevlogPreview key={entry.id} {...entry} />
          ))}
        </div>
        <Link
          to="/devlog"
          className={"see-all"}
          onClick={() => window.scrollTo(0, 0)}
        >
          See More Devlog Entries
        </Link>
      </section>

      <section id="contact">
        <div className="section-wrapper">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let's Work Together</h2>

          <div className="contact-content">
            <div className="contact-description">
              <p>
                Open to freelance projects, full-time roles, and interesting
                collaborations. If you've got something worth building, I'd love
                to hear about it.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:jrobinson843@gmail.com"
                  className="contact-link"
                >
                  <span className="contact-link-label">Email</span>
                  jrobinson843@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/john-robinson-357186125/"
                  className="contact-link"
                >
                  <span className="contact-link-label">LinkedIn</span>
                  https://linkedin.com/in/johnrobinson
                </a>
                <a
                  href="https://github.com/JohnARobinson"
                  className="contact-link"
                >
                  <span className="contact-link-label">GitHub</span>
                  https://github.com/JohnARobinson
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
