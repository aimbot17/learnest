import { Link } from "react-router-dom";
import CustomProgressBar from "../utils/Loader/Progressbar";
import useApi from "../hooks/useApi";
import { API_BASE_URL } from "../config/Index";

const Mybatch = () => {
  const API = useApi(API_BASE_URL) as [any, boolean, boolean];
  const [data, error, loading] = API;

  if (error) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div
      className={
        "bg-[#F8F8FD] py-10 flex flex-col items-center justify-center font-bold"
      }
    >
      <div>HI UTSAV JOSHI, WELCOME TO YOUR COURSES!</div>
      <div className={"bg-white w-full px-44 py-28 mt-10"}>
        <div className={"text-lg"}>COURSES</div>
        <div className={"flex flex-col items-center justify-center mt-6"}>
          <Link to={"/watch" + `/${data?.course?.id}`}>
            <div className="w-96 bg-[#F8F8FD] rounded-xl">
              <img src={data?.course?.courseImage?.url} alt="banner" />
              <div className={"p-5"}>
                <h1 className={"text-2xl"}>{data?.course?.title}</h1>
                <h6 className={"font-normal mt-4"}>{data?.course?.keywords}</h6>
                <div>
                  <CustomProgressBar />
                </div>
                <div className="bg-btnColor py-[11px] px-[22px] w-52 text-sm text-center text-white">
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mybatch;
