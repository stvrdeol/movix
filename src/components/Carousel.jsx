import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

function Carousel({ loading, data, id }) {
  function scrollRight() {
    const carousel = document.querySelector(`#${id}`);
    carousel.scrollTo({
      left: carousel.scrollLeft + carousel.scrollWidth / 5,
      behavior: "smooth",
    });
  }
  function scrollLeft() {
    const carousel = document.querySelector(`#${id}`);
    carousel.scrollTo({
      left: carousel.scrollLeft - carousel.scrollWidth / 5,
      behavior: "smooth",
    });
  }

  function pathColor(value) {
    if (value >= 7) {
      return `#008000`;
    } else if (value >= 5) {
      return `#FFA500`;
    } else {
      return `red`;
    }
  }

  function formatDateString(inputDateString) {
    const date = new Date(inputDateString);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }

  const genres = useSelector((state) => state?.home?.genres);

  function showGenres(genreIDs) {
    const [genre1, genre2] = genreIDs;
    const genreNames = genres
      .filter((genre) => genre.id === genre1 || genre.id === genre2)
      .map((genre) => genre.name);
    return genreNames;
  }
  return (
    <>
      <section
        className="sm:overflow-hidden overflow-auto w-full max-w-none gap-[1%] flex mt-5"
        id={id}>
        {loading && (
          <>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
            <article
              className="sm:w-[24%] w-[40%] flex-none space-y-2 flex flex-col"
              style={{ aspectRatio: "1/1.5" }}>
              <Skeleton classNames={`w-full h-full rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
              <Skeleton classNames={`w-full h-3 rounded-lg`} />
            </article>
          </>
        )}
        {data &&
          data?.results?.map((result) => {
            const genres = showGenres(result.genre_ids);
            return (
              <article
                key={result.id}
                className="sm:w-[24%] w-[40%] flex-none h-max">
                <Link
                  to={
                    result.first_air_date
                      ? `/details/tv/${result.id}`
                      : `/details/movie/${result.id}`
                  }
                  className="h-full w-full">
                  <section className="relative">
                    <LazyLoadImage
                      threshold={250}
                      src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                      effect="blur"
                      className="rounded-lg w-full"
                      wrapperProps={{
                        style: { transitionDelay: ".1s" },
                      }}
                      style={{ aspectRatio: "1/1.5" }}
                    />
                    <section className="hidden absolute text-xs md:flex gap-2 bottom-2 right-1 w-1/2 justify-end flex-wrap">
                      {genres[0] && (
                        <p className=" p-1 w-max bg-pink rounded-md">
                          {genres[0]}
                        </p>
                      )}
                      {genres[0] !== genres[1] && genres[1] && (
                        <p className="p-1 w-max rounded-md  bg-pink">
                          {genres[1]}
                        </p>
                      )}
                    </section>
                    <section className="w-12  absolute -bottom-6 left-3">
                      <CircularProgressbar
                        value={result.vote_average.toFixed(1)}
                        maxValue={10}
                        text={result.vote_average.toFixed(1)}
                        styles={buildStyles({
                          textSize: "40px",
                          fontStyle: "bold",
                          pathColor: `${pathColor(result.vote_average)}`,
                          textColor: "black",
                          trailColor: "#d6d6d6",
                          backgroundColor: "#3e98c7",
                        })}
                        className="bg-white rounded-full p-0.5"
                      />
                    </section>
                  </section>
                  <section>
                    <p className="mt-10 font-medium sm:text-lg md:text-xl  truncate">
                      {result.title || result.name || "No Title"}
                    </p>
                    <p className="mt-1 text-[#7B8490]">
                      {result.release_date
                        ? formatDateString(result.release_date)
                        : formatDateString(result.first_air_date) || "No info"}
                    </p>
                  </section>
                </Link>
              </article>
            );
          })}
      </section>
      <section className="flex justify-between">
        <button
          onClick={scrollLeft}
          className="sm:block hidden bg-black/50 p-2 rounded-full text-2xl absolute top-[40%] left-12 transform -translate-x-1/2 translate-y-1/2">
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          className="sm:block hidden bg-black/50 p-2 rounded-full text-2xl absolute top-[40%] right-3 transform -translate-x-1/2 translate-y-1/2">
          <AiOutlineArrowRight />
        </button>
      </section>
    </>
  );
}

export default Carousel;
