import { useState } from "react";

const CustomProgressBar = () => {
  const [progress, setProgress] = useState<number>(10);

  const handledata = () => {
    setProgress(90);
  };

  return (
    <div className="progress-bar-container mt-8 mb-3">
      <div>
        {`${progress}% Complete`}
        <div className="w-full bg-white transition-all ease-in-out duration-500 mt-2">
          <div
            style={{ width: `${progress}%` }}
            className="bg-[#6674cc] h-2"
            onClick={handledata}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CustomProgressBar;
