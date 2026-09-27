import { useEffect, useState } from "react";

function Navbar() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <nav className="navbar">

      <div className="navbar-logo">
        AI Team Manager
      </div>


      <div className="navbar-user">

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>


        <span>👤</span>

        <span>Team Member</span>

      </div>

    </nav>
  );
}

export default Navbar;