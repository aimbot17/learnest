import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/videoplayer.component";

import { useLocation } from "react-router-dom";

const Video_Player_Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className={"flex w-full h-full"}>
      <Sidebar />
      <VideoPlayer />
    </div>
  );
};

export default Video_Player_Layout;
