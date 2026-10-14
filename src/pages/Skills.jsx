import { skillCategories, tools } from "../data/skills/skills";
import { SkillCard } from "../components/SkillCard";
import "./Skills.css";

export default function Skills() {
  return (
    <main_skills>
      <section id="skills_page" className="skills-page">
        <h1 className="skills-title">Skills & Expertise</h1>
        <p className="skills-blurb">
          A broad stack built across web, software, and game development — with
          a particular love for systems that are both functional and
          well-crafted.
        </p>
        <div className="categories">
          {skillCategories.map((category) => (
            // Spread operator passes all object properties as props
            // { id: 1, icon: "⌨", name: "...", ... }
            // becomes icon="⌨" name="..." etc.
            <SkillCard key={category.id} {...category} />
          ))}
        </div>
        {/* ── Tools grid ── */}
        <div className="tools-section">
          <div className="tools-header">
            <span className="tools-label">Tools &amp; Software</span>
          </div>
          <div className="tools-grid">
            {tools.map((tool) => (
              <div key={tool} className="tool-item">
                <span className="tool-dot" />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main_skills>
  );
}
