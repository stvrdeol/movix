import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NoPoster from "../../assets/no-poster.png";
import Skeleton from "../../components/Skeleton";
function MovieDetails({
  data,
  loading,
  crew,
  setShowVideo,
  setVideoId,
  videos,
}) {
  function pathColor(value) {
    if (value >= 7) {
      return `#008000`;
    } else if (value >= 5) {
      return `#FFA500`;
    } else {
      return `red`;
    }
  }
  const trailer =
    videos?.results?.filter((video) => video.type == "Trailer") || "error";
  function getDirectors() {
    const filterDirectors = crew?.filter((crew) => crew.job == "Director");
    const directors = filterDirectors?.map((writer) => writer.name).slice(0, 2);
    return directors?.join(",") || "N/A";
  }
  function getWriters() {
    const filterWriters = crew?.filter(
      (crew) =>
        crew.job == "Screenplay" || crew.job == "Story" || crew.job == "Writer"
    );
    const writers = filterWriters?.map((writer) => writer.name).slice(0, 2);
    return writers?.join(",") || "N/A";
  }
  function formatDateString(inputDateString) {
    const date = new Date(inputDateString);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }
  function convertToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const hoursString = hours > 0 ? `${hours}h` : "";
    const minutesString = minutes > 0 ? `${minutes}m` : "";

    return `${hoursString} ${minutesString}`.trim();
  }
  return (
    <>
      {loading && (
        <section className="space-y-2 sm:flex gap-4">
          <section
            className="h-[70vh] flex-none mb-8 mx-auto"
            style={{ aspectRatio: "1/1.5" }}>
            <Skeleton classNames={`rounded-lg h-full w-full`} />
          </section>
          <section className="space-y-2  flex-1">
            <Skeleton classNames={`rounded-lg h-4 `} />
            <section className="flex gap-3 ">
              <Skeleton classNames={`rounded-lg h-4 w-20`} />
              <Skeleton classNames={`rounded-lg h-4 w-20`} />
            </section>
            <section className="flex gap-3">
              <Skeleton classNames={`h-20 w-20 rounded-full`} />
              <Skeleton classNames={` h-20 w-20 rounded-full`} />
            </section>
            <Skeleton classNames={`rounded-lg h-4 `} />
            <Skeleton classNames={`rounded-lg h-4 `} />
            <Skeleton classNames={`rounded-lg h-4 `} />
            <Skeleton classNames={`rounded-lg h-4 `} />
          </section>
        </section>
      )}

      {!loading && data && (
        <section className="">
          <section className="fixed inset-0 bg-bgBlue -z-10">
            <img
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt={data.title}
              className=" h-[100vh] w-full object-cover opacity-10"
            />
          </section>
          <article className="sm:flex items-start gap-5">
            <section className="">
              <LazyLoadImage
                threshold={250}
                src={
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                    : NoPoster
                }
                effect="blur"
                className="rounded-xl h-[80vh] object-cover mx-auto"
                wrapperProps={{
                  style: { transitionDelay: ".1s" },
                }}
              />
            </section>
            <section className="flex-1">
              <section className="mt-5 sm:mt-0">
                <p className="text-2xl sm:text-4xl font-semibold">
                  {data.title} ({formatDateString(data.release_date).slice(-4)})
                </p>
                <p className="italic sm:text-lg  text-[#7B8490]">
                  {data.tagline}
                </p>
              </section>
              <section className="flex items-center gap-2 mt-4">
                {data.genres.map((genre) => {
                  return (
                    <p
                      key={genre.id}
                      className=" p-0.5 px-1 text-xs w-max bg-pink rounded-md">
                      {genre.name}
                    </p>
                  );
                })}
              </section>
              <section className="my-8 flex gap-5 items-center">
                <CircularProgressbar
                  value={data.vote_average.toFixed(1)}
                  maxValue={10}
                  text={data.vote_average.toFixed(1)}
                  styles={buildStyles({
                    textSize: "40px",
                    fontStyle: "bold",
                    pathColor: `${pathColor(data.vote_average)}`,
                    textColor: "white",
                    trailColor: "#041226",
                    backgroundColor: "#041226",
                  })}
                  className=" w-16 sm:w-20 rounded-full "
                />
                {trailer?.length > 0 && (
                  <section
                    className="flex items-center gap-2 hover:text-pink cursor-pointer transition-all duration-1000"
                    onClick={() => {
                      setShowVideo(true);
                      setVideoId(trailer[0]?.key);
                    }}>
                    <FaRegPlayCircle className="text-6xl sm:text-[5rem]  " />
                    <span className="text-xl">Watch Trailer</span>
                  </section>
                )}
              </section>
              <section>
                <h2 className="text-2xl font-semibold sm:text-3xl">OverView</h2>
                <p className="mt-2">{data.overview}</p>
              </section>
              <section className="mt-8">
                <section className="flex justify-between sm:justify-start gap-3">
                  <article className="sm:flex gap-2 items-center">
                    <p className="heading">Status:</p>
                    <p className="result">{data.status}</p>
                  </article>
                  <article className="sm:flex gap-2 items-center ">
                    <p className="heading">Release Date:</p>
                    <p className="result">
                      {formatDateString(data.release_date)}
                    </p>
                  </article>
                  <article className="sm:flex gap-2 items-center">
                    <p className="heading">Runtime:</p>
                    <p className="result">
                      {convertToHoursAndMinutes(data.runtime) || "N/A"}
                    </p>
                  </article>
                </section>
                <hr className=" h-0.5 w-full my-4" />
                <section>
                  <article className="flex items-center gap-2">
                    <p className="heading">Director:</p>
                    <p className="result">{getDirectors()}</p>
                  </article>
                  <hr className=" h-0.5 w-full my-4" />
                  <article className="flex items-center gap-2">
                    <p className="heading">Writer:</p>
                    <p className="result">{getWriters()}</p>
                  </article>
                  <hr className=" h-0.5 w-full my-4" />
                </section>
                <section className="flex justify-between sm:justify-start  gap-3">
                  <article className="sm:flex gap-2 items-center">
                    <p className="heading">Budget:</p>
                    <p className="result">
                      ${data.budget.toLocaleString() || "N/A"}
                    </p>
                  </article>
                  <article className="sm:flex gap-2 items-center ">
                    <p className="heading">Revenue:</p>
                    <p className="result">
                      ${data.revenue.toLocaleString() || "N/A"}
                    </p>
                  </article>
                  <article className="sm:flex gap-2 items-center ">
                    <p className="heading">Profit:</p>
                    <p className="result">
                      ${(data.revenue - data.budget).toLocaleString() || "N/A"}
                    </p>
                  </article>
                </section>
                <hr className=" h-0.5 w-full my-4" />
              </section>
            </section>
          </article>
        </section>
      )}
    </>
  );
}

export default MovieDetails;
