import { Link } from "react-router-dom";

export function DevlogPost({
  title,
  url,
  description,
  tags,
  highlights = [],
  text,
  date,
}) {
  return (
    <Link to={url} className="devlog-post">
      <span className="devlog-title">{title}</span>
      <span className="devlog-date">{date}</span>

      {/* One-line context — keep this short */}
      <p className="devlog-description">{description}</p>
      <p className="devlog-text">{text}</p>
      <div className="devlog-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
