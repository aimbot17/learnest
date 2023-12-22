import React, { useState, useEffect } from "react";

const CustomProgressBar:React.FC = () => {
  const [progress, setProgress] = useState<number>(10);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress < 100 ? prevProgress + 1 : 100
  //     );
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="progress-bar-container mt-8 mb-3">
      <div>
        {`${progress}% Complete`}
        <div className="w-full bg-white transition-all ease-in-out duration-500 mt-2">
          <div
            style={{ width: `${progress}%` }}
            className="bg-[#6674cc] h-2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CustomProgressBar;
