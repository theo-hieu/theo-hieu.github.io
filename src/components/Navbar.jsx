import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav site-container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Theo Nguyen home">
          <span>Theo Nguyen</span>
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
