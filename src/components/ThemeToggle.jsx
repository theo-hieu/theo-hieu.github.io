import { useEffect, useState } from "react";

const STORAGE_KEY = "theo-portfolio-theme";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-pressed={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <i className="fa-solid fa-sun theme-icon" aria-hidden="true" />
      <span className="theme-track" aria-hidden="true">
        <span className="theme-thumb" />
      </span>
      <i className="fa-solid fa-moon theme-icon" aria-hidden="true" />
    </button>
  );
}
