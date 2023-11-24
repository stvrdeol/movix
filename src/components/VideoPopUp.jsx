import ReactPlayer from "react-player";

function VideoPopUp({ setShowVideo, videoId }) {
  return (
    <section className="fixed inset-0 grid place-items-center bg-black/60" onClick={()=> setShowVideo(false)}>
      <section className="w-[100vw] sm:w-full sm:h-[70vh] max relative aspect-video  grid place-items-center ">
        <button
          className="text-2xl absolute -top-8 right-4"
          onClick={() => setShowVideo(false)}>
          X
        </button>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width={"100%"}
          height={"100%"}
          controls
        />
      </section>
    </section>
  );
}

export default VideoPopUp;
