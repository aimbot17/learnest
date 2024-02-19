import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

const Sidebar = () => {
  return (
    <>
      <div
        className={`w-3/12 h-screen transition-all duration-500 ease-in-out overflow-hidden`}
      >
        {/* Sidebar Heading */}
        <div className={"ml-auto flex flex-col text-white p-5 bg-[#333A46]"}>
          <div className={"flex items-center"}>
            <Link
              to={"/mybatch"}
              className={"flex items-center justify-center gap-2 text-sm"}
            >
              <ArrowLeft size={20} />
              Back to dashboard
            </Link>
          </div>
        </div>
        {/* Sidebar Data */}
        <div></div>
      </div>
    </>
  );
};

export default Sidebar;
