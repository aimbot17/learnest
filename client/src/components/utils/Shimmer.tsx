import React from "react";

const PlayerShimmer: React.FC = () => {
  return (
    <div className="flex text-white w-full h-full">
      <div className="w-3/12  bg-sidebarHeader"></div>
      <div className="w-9/12 h-screen"></div>
    </div>
  );
};

export default PlayerShimmer;
