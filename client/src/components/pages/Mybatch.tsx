import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/400x0_05e2153f1e10cdbe245ce6ae493910e9.jpeg";
import CustomProgressBar from "../layout/Progressbar";

const Mybatch = () => {
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
          <Link to={"/watch" + `/${sa}`}>
            <div className="w-96 bg-[#F8F8FD] rounded-xl">
              <img src={image} alt="banner" />
              <div className={"p-5"}>
                <h1 className={"text-2xl"}>Alpha Batch 4.0</h1>
                <h6 className={"font-normal mt-4"}>
                  Welcome Alphait! Please find your curriculum inside.
                </h6>
                {/* Completion */}
                <CustomProgressBar />
                <div className="bg-[#6674cc] py-[11px] px-[22px] w-52 text-sm text-center text-white">
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
