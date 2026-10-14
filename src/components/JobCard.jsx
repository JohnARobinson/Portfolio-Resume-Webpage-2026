export function ExperienceCard({
  title,
  company,
  period,
  description,
  tags,
  highlights = [],
}) {
  return (
    <div className="job-card">
      <div className="job-header">
        <span className="job-name">{title}</span>
        <p className="job-company">{company}</p>
        <p className="job-period">{period}</p>
      </div>
      <div className="job-body">
        <p className="job-description">{description}</p>
      </div>
    </div>
  );
}
