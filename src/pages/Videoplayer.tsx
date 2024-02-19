import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/videoplayer.component";

const PlayerLayout = () => {
  return (
    <div className={"flex w-full h-full"}>
      <Sidebar />
      <VideoPlayer />
    </div>
  );
};

export default PlayerLayout;
