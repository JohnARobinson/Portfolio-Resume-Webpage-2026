import { Link } from "react-router-dom";

export function DevlogPreview({
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
      <p className="devlog-date">{date}</p>
      <p className="devlog-title">{title}</p>

      {/* One-line context — keep this short */}
      <p className="devlog-description">{description}</p>
    </Link>
  );
}
