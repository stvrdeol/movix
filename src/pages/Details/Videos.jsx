import ReactPlayer from "react-player";

function Videos({ videos, videosLoading: loading }) {
  console.log(videos);
  return (
    <div>
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=zDNaUi2cjv4"}
        width={"300px"}
        height={"200px"}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              controls: 1,
            },
          },
        }}
        playIcon={null}
      />
    </div>
  );
}

export default Videos;
