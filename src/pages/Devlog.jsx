import { devlog_entries } from "../data/devlog/devlog";
import { DevlogPost } from "../components/DevlogPost";
import { Link } from "react-router-dom";
import "./Devlog.css";

export default function Devlog() {
  return (
    <section id="devlog-page" className="devlog-page">
      <h1>Devlogs</h1>
      <div className="devlog-page-description">
        <p>
          Welcome to my devlog! Here I'll be sharing my development journey and
          insights.
        </p>
      </div>
      <div className="devlog-page-grid">
        <div className="devlog-page-list">
          <h2 className="section-title-devlog-entry-list">Devlog Entries</h2>
          {devlog_entries.map((DevlogPost) => (
            <li key={DevlogPost.id}>
              <Link to={DevlogPost.url} className="devlog-list-link">
                {DevlogPost.title}
              </Link>
            </li>
          ))}
        </div>
        <div className="devlog-cards">
          {devlog_entries.map((entry) => (
            <DevlogPost key={entry.id} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
