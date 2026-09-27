import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "📊",
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "📁",
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: "✅",
    },
    {
      name: "Team",
      path: "/team",
      icon: "👥",
    },
    {
      name: "AI Assistant",
      path: "/ai-assistant",
      icon: "🤖",
    },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        Workspace
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              location.pathname === item.path
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>
          </Link>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;