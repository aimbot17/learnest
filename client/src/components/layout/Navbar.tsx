import React from "react";
import { Ncomponents } from "../../config/data";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-lg z-10">
      <div className="flex items-center justify-center p-4 bg-white">
        <nav className="flex items-center justify-between w-full max-w-6xl">
          <Link to={"/"}>
            <img src={Ncomponents[0]?.img} alt="Logo" className="h-11" />
          </Link>
          <ul className="flex gap-6 items-center">
            {Ncomponents.map((el) => (
              <li key={el.index}>
                <Link to={`/` + el.routes}>
                  <div
                    className={`flex gap-2 items-center justify-center font-semibold text-gray-700 text-base cursor-pointer `}
                  >
                    <span>{el?.name}</span>
                    <span>{el?.icon}</span>
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
