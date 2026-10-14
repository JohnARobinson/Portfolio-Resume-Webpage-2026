export function ExperienceCard({
  title,
  company,
  period,
  description,
  tags,
  highlights = [],
}) {
  return (
    <div className="experience-card">
      <span className="experience-period">{period}</span>
      <div className="experience-body">
        <p className="experience-title">{title}</p>
        <p className="experience-company">{company}</p>

        {/* One-line context — keep this short */}
        <p className="experience-description">{description}</p>

        <div className="experience-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
