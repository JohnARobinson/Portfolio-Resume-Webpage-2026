import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { devlog_entries } from "../data/devlog/devlog";
import { DevlogPost } from "../components/DevlogPost";
import "./DevlogEntry.css";

export default function DevlogEntry() {
  const { slug } = useParams(); // gets "devlog-4" from the URL

  // Find the matching post by slug
  const post = devlog_entries.find((p) => p.url === `/devlog/${slug}`);

  const renderers = {
    text: (DevlogPost) => <p>{DevlogPost.content}</p>,
    image: (DevlogPost) => <img src={DevlogPost.src} alt={DevlogPost.alt} />,
    // Add more renderers for other block types as needed
  };

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="devlog-entry-wrap">
      <h1 className="section-title-devlog-entry">{post.title}</h1>
      <h2 className="section-subtitle-devlog-entry">Devlog #{post.id}</h2>
      <div className="devlog-entry-grid">
        <div className="devlog-entry-list">
          <h2 className="section-title-devlog-entry-list">Devlog Entries</h2>
          {devlog_entries.map((DevlogPost) => (
            <li key={DevlogPost.id}>
              <Link to={DevlogPost.url}>{DevlogPost.title}</Link>
            </li>
          ))}
        </div>

        <div className="devlog-entry-content">
          <p className="section-label">{post.date}</p>

          <devlog_entries className="devlog-entry-description">
            {post.description}
          </devlog_entries>
          <div className="post-content">
            {post.blocks.map((block, index) => {
              const Renderer = renderers[block.type];
              return Renderer ? <Renderer key={index} {...block} /> : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
