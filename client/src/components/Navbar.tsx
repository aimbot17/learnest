import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CaretDown, UserCircle } from "phosphor-react";
import Logo from "../assets/images/apnacollege.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/course",
      label: "Courses",
      icon: <CaretDown size={13} />,
      subItems: [
        { path: "/course/math", label: "Alpha Plus 2.0(Java DSA)" },
        { path: "/course/science", label: "Science" },
        { path: "/course/science", label: "Science" },
      ],
    },
    {
      path: "/resources",
      label: "Resources",
      icon: <CaretDown size={13} />,
      subItems: [
        { path: "/course/science", label: "T" },
        { path: "/course/math", label: "Alpha Plus 2.0(Java DSA)" },
        { path: "/course/science", label: "Science" },
      ],
    },
    { path: "/mybatch", label: "My Batch" },
    { path: "/auth", label: "Login", icon: <UserCircle size={30} /> },
  ];

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);
    setResourcesDropdownOpen(false);
  };

  const handleResourcesDropdownToggle = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
    setCoursesDropdownOpen(false);
  };

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-center p-4 bg-white">
        <nav className="flex items-center justify-between w-full max-w-6xl">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-11" />
          </Link>
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.subItems ? (
                  <div
                    onClick={
                      item.path === "/course"
                        ? handleCoursesDropdownToggle
                        : handleResourcesDropdownToggle
                    }
                    className="cursor-pointer relative"
                  >
                    <div className="flex gap-2 items-center justify-center font-semibold text-gray-700 text-base">
                      <span>{item.label}</span>
                      {item.icon && <span>{item.icon}</span>}
                    </div>
                    {item.path === "/course"
                      ? isCoursesDropdownOpen && (
                          <ul className="dropdown">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  to={subItem.path}
                                  aria-current={
                                    location.pathname === subItem.path
                                      ? "page"
                                      : undefined
                                  }
                                >
                                  <span>{subItem.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )
                      : isResourcesDropdownOpen && (
                          <ul className="dropdown">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  to={subItem.path}
                                  aria-current={
                                    location.pathname === subItem.path
                                      ? "page"
                                      : undefined
                                  }
                                >
                                  <span>{subItem.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    aria-current={
                      location.pathname === item.path ? "page" : undefined
                    }
                  >
                    <div className="flex gap-2 items-center justify-center font-semibold text-gray-700 text-base">
                      <span>{item.label}</span>
                      {item.icon && <span>{item.icon}</span>}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
