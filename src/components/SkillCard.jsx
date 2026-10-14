export function SkillCard({
  name,
  blurb,
  tags,
  Languages,
  Frameworks,
  Methodologies = [],
}) {
  return (
    <div className="cat-card">
      {/* Header: icon + title side by side */}
      <div className="cat-header">
        <span className="cat-name">{name}</span>
      </div>

      {/* One-line context — keep this short */}
      <p className="cat-blurb">{blurb}</p>

      {/* Tech tags — map turns the array into JSX elements.
          key={tag} is required by React when rendering lists —
          it helps React track which items changed. */}
      <div className="tech-tags">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`tech-tag ${
              Languages.includes(tag)
                ? "Languages"
                : Frameworks.includes(tag)
                  ? "Frameworks"
                  : Methodologies.includes(tag)
                    ? "Methodologies"
                    : ""
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
