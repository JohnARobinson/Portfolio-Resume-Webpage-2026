import { experiences } from "../data/experience/experience";
import { ExperienceCard } from "../components/JobCard";
import "./Experience.css";

export default function Experience() {
  return (
    <main>
      <section id="experience-page" className="experience-page">
        <h1>Experience</h1>
        <div className="experience-page-grid">
          <div className="experience-cards">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
