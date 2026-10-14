import { Link } from "react-router-dom";
import { skillsList } from "../data/skills/skillsList";

export function SkillGrid() {
  return (
    <section id="skills" className="section">
      <div className="section-wrap">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>

        {/* Grid of skill boxes */}
        <div className="skills-box-grid">
          {skillsList.map((skill) => (
            <div key={skill.id} className="skill-box">
              <span className="skill-box-dot" />
              {skill.label}
            </div>
          ))}
        </div>

        {/* Link to full skills page */}
        <Link
          to="/skills"
          className="see-all"
          onClick={() => window.scrollTo(0, 0)}
        >
          View full skillset →
        </Link>
      </div>
    </section>
  );
}
