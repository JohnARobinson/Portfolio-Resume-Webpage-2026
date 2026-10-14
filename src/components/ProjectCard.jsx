export function ProjectEntry({
  title,
  category,
  description,
  image,
  tags,
  highlights = [],
  link_title,
  link,
}) {
  return (
    <div className={`project-card`} id={`project-card ${title}`}>
      <div className="project-header">
        <p className="project-category">{category}</p>
        <span className="project-name">{title}</span>
      </div>

      {/* One-line context — keep this short */}
      <p className="project-description">{description}</p>

      {/* Tech tags — map turns the array into JSX elements.
          key={tag} is required by React when rendering lists —
          it helps React track which items changed. */}

      <img
        src={image}
        alt=""
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="project-tags">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`project-tag ${
              highlights.includes(tag) ? "highlighted" : ""
            }`}
          >
            {tag}
          </span>
        ))}

        <div className="project-link">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link_title}
          </a>
        </div>
      </div>
    </div>
  );
}
