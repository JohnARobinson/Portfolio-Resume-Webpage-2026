export function ProjectList({
  title,
  category,
  description,
  tags,
  highlights = [],
  link_title,
  link,
}) {
  return (
    <div className="Project-List">
      <div className="project-list-name">
        <a
          href={link}
          className="project-list-name"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
}
