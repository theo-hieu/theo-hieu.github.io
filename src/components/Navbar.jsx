import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-semibold" to="/">
          Home
        </Link>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" to="/experience">
            Experience
          </Link>
        </div>
      </div>
    </nav>
  );
}
