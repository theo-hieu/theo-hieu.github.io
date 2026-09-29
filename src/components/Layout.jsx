import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-container footer-content">
          <p>© {new Date().getFullYear()} Theodore Nguyen</p>
          <div className="footer-links" aria-label="Social links">
            <a href="https://www.linkedin.com/in/theodore-n" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/theo-hieu" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
