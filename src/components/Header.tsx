import { NavLink } from "react-router-dom";

export function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },

    { name: "Resume", href: "/resume" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-950/80 border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-white">
            James Moore
          </NavLink>

          <nav className="flex items-center gap-6">
            {navigation.map((item) => (
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-purple-400 ${
                    isActive ? "text-purple-400" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
