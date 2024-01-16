import { Link } from "react-router-dom";
import image from "../assets/images/courseImage.jpeg";
import CustomProgressBar from "../utils/Loader/Progressbar";
import { _Id } from "../config/Index";
import { useSearchParams } from "react-router-dom";

const Mybatch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleParams() {
    setSearchParams({ courseId: _Id });
  }

  console.log(handleParams, searchParams);

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
          <Link to={"/watch/" + _Id}>
            <div className="w-96 bg-[#F8F8FD] rounded-xl">
              <img src={image} alt="banner" />
              <div className={"p-5"}>
                <h1 className={"text-2xl"}>Alpha Batch 4.0</h1>
                <h6 className={"font-normal mt-4"}>
                  Welcome Alphait! Please find your curriculum inside.
                </h6>
                {/* Completion */}
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
