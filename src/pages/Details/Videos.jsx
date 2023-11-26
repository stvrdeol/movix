import { FaRegPlayCircle } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Skeleton from "../../components/Skeleton";

function Videos({ videos, videosLoading: loading, setShowVideo, setVideoId }) {
  return (
    <section className="my-10">
      {videos?.results?.length > 0 && (
        <h2 className="text-2xl">Official Videos</h2>
      )}
      {loading && (
        <>
          <h2 className="text-2xl">Official Videos</h2>
          <section className="mt-4 flex gap-6 overflow-hidden">
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-60 h-40 `} />
              <Skeleton classNames={`w-60 h-2 `} />
            </article>
          </section>
        </>
      )}
      {!loading && videos && (
        <section className="cast overflow-auto scroll-smooth">
          <section className="flex mt-5 gap-4 w-max ">
            {videos?.results?.reverse().map((video) => {
              return (
                <article
                  onClick={() => {
                    setShowVideo(true);
                    setVideoId(video?.key);
                  }}
                  key={video.id}
                  className="w-40 md:w-60 cursor-pointer relative hover:text-pink hover:opacity-70 transition-all duration-500">
                  <LazyLoadImage
                    threshold={250}
                    src={`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`}
                    effect="blur"
                    className="rounded-md "
                    wrapperProps={{
                      style: { transitionDelay: ".1s" },
                    }}
                  />
                  <p className="mt-2 text-white">{video.name}</p>
                  <FaRegPlayCircle className="text-4xl absolute inset-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2  " />
                </article>
              );
            })}
          </section>
        </section>
      )}
    </section>
  );
}

export default Videos;
