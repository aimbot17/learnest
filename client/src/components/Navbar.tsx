import { Ncomponents } from "../config/data";
import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, setSearchParams);

  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-center p-4 bg-white">
        <nav className="flex items-center justify-between w-full max-w-6xl">
          <Link to={"/"}>
            <img src={Ncomponents[0]?.img} alt="Logo" className="h-11" />
          </Link>
          <ul className="flex gap-6 items-center">
            {Ncomponents.map((el) => (
              <li key={el.index}>
                <Link
                  to={`/${el.routes}`}
                  aria-current={
                    window.location.pathname === `/${el.routes}`
                      ? "page"
                      : undefined
                  }
                >
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
