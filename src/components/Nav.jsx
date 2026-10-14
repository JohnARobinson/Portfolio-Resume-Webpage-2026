import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Helper: returns 'active' class if this path is current
  const active = (path) => (pathname === path ? "active" : "");

  function goToSection(sectionId) {
    if (pathname === "/") {
      // Already on home — just scroll
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home first, then scroll after the page renders
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay lets the home page mount first
    }
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
        JR<span>.</span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link
            to="/skills"
            className={active("/skills")}
            onClick={() => window.scrollTo(0, 0)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={active("/projects")}
            onClick={() => window.scrollTo(0, 0)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className={active("/experience")}
            onClick={() => window.scrollTo(0, 0)}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/devlog"
            className={active("/devlog")}
            onClick={() => window.scrollTo(0, 0)}
          >
            Devlog
          </Link>
        </li>
        <li>
          <button onClick={() => goToSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}
