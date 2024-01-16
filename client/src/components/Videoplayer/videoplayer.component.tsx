interface VideoPlayerProps {
  courseId?: string;
}

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

export default VideoPlayer;