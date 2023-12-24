import Sidebar from "./Sidebar";
import useCallApi from "../../hooks/useCallApi";
import { API_BASE_URL } from "../../config/Index.ts";
import Shimmer from "../utils/Shimmer";
import { useParams } from "react-router-dom";

interface VideoPlayerProps {
  courseId?: string;
}

const PlayerLayout = () => {
  const API = useCallApi(API_BASE_URL) as [object, boolean, boolean];
  const [data, error, loading] = API;
  const { courseId } = useParams();

  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <>
        <Shimmer />
      </>
    );
  }

  return (
    <div className={"flex w-full h-full"}>
      <Sidebar sidebar={data} courseId={courseId || "sasasas"} />
      <VideoPlayer courseId={courseId ?? ""} />
    </div>
  );
};

export default PlayerLayout;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ courseId }) => {
  return (
    <video
      id="player"
      className={`w-9/12 flex text-stone-50 h-screen ml-auto justify-center`}
      controls
    >
      {courseId}
    </video>
  );
};
