import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CaretDown, UserCircle } from "phosphor-react";
import Logo from "../assets/images/apnacollege.png";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/mybatch");
  };

  const handleCoursesDropdownToggle = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);
    setResourcesDropdownOpen(false);
  };

  const handleResourcesDropdownToggle = () => {
    setResourcesDropdownOpen(!isResourcesDropdownOpen);
    setCoursesDropdownOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/course",
      label: "Courses",
      onClick: handleCoursesDropdownToggle,
    },
    {
      path: "/resources",
      label: "Resources",
      onClick: handleResourcesDropdownToggle,
    },
    { path: "/mybatch", label: "My Batch" },
    {
      path: "/auth",
      label: "Login",
      icon: <UserCircle size={30} />,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-center p-4 bg-white">
        <nav className="flex items-center justify-between w-full max-w-6xl">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-11" />
          </Link>
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.path} onClick={item.onClick}>
                <Link to={item.path} className="cursor-pointer relative">
                  <div className="flex gap-2 items-center justify-center font-semibold text-gray-700 text-base">
                    <span>{item.label}</span>
                    {item.icon && <span>{item.icon}</span>}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
