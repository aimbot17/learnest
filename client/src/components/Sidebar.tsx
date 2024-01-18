import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import useApi from "../hooks/useApi";
import { API_BASE_URL } from "../config/Index";

interface Course {
  title?: string;
}

interface SidebarProps {
  courseId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ courseId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const API = useApi(API_BASE_URL + "?contents&path-player") as [
    object,
    boolean,
    boolean
  ];
  const [data, error, loading] = API;

  useEffect(() => {
    const videoTimeout = setTimeout(() => {
      const video = data?.course?.videos;
      console.log(video);
    }, 2000);
  }, [API]);

  const toggleSidebar = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${
          isOpen && "w-3/12"
        } h-screen transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <div className={"ml-auto flex flex-col text-white p-5 bg-[#333A46]"}>
          {isOpen ? (
            <>
              <div className={"flex items-center justify-between"}>
                <Link
                  to={"/mybatch"}
                  className={"flex items-center justify-center gap-2 text-sm"}
                >
                  <ArrowLeft size={20} />
                  Back to dashboard
                </Link>
                <CaretDoubleLeft size={25} onClick={toggleSidebar} />
              </div>
              <div className={"mt-5 text-2xl text-white"}></div>
            </>
          ) : (
            <CaretDoubleRight size={25} onClick={toggleSidebar} />
          )}
        </div>
        <div>
          <Sidebar_Data />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const Sidebar_Data = ({}) => {
  return (
    <div>
      <h1>{console.log()}</h1>
    </div>
  );
};
