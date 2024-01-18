import Sidebar from "../components/Sidebar";
import useApi from "../hooks/useApi";
import { API_BASE_URL } from "../config/Index";
import Shimmer from "../utils/Loader/Shimmer";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/videoplayer.component";

const PlayerLayout = () => {
  const API = useApi(API_BASE_URL) as [object, boolean, boolean];
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
      <div>
        <Shimmer />
      </div>
    );
  }

  return (
    <div className={"flex w-full h-full"}>
      <Sidebar courseId={courseId || "course_id"} />
      <VideoPlayer courseId={courseId ?? ""} />
    </div>
  );
};

export default PlayerLayout;
