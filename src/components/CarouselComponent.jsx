import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function CarouselComponent({ data }) {
  console.log(data);
  function scrollRight() {
    const carousel = document.querySelector("#carousel");

    carousel.scrollTo({
      left: carousel.scrollLeft + carousel.scrollWidth / 5,
      behavior: "smooth",
    });
  }
  function scrollLeft() {
    const carousel = document.querySelector("#carousel");

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
  return (
    <section className="overflow-auto w-full scroll-smooth" id="carousel">
      <section className="flex items-center h-max gap-2 sm:gap-4 max-w-none my-6 w-max ">
        {data?.results.map((result) => {
          return (
            <article key={result.id} className="sm:max-w-[17vw] md:w w-[25vw]">
              <section className="relative">
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                  effect="blur"
                  className="rounded-lg relative max-w-full"
                  wrapperProps={{
                    style: { transitionDelay: ".1s" },
                  }}
                />
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
              <p className="mt-10 font-medium sm:text-lg md:text-xl">
                {result.title || result.name || "No Title"}
              </p>
              <p className="mt-1 text-[#7B8490]">
                {result.release_date || result.first_air_date || "No Info"}
              </p>
            </article>
          );
        })}
      </section>
      <button
        className="sm:block hidden bg-black/70 p-2 rounded-full text-2xl absolute top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2 "
        onClick={scrollLeft}>
        <AiOutlineArrowLeft />
      </button>
      <button
        className="sm:block hidden bg-black/70 p-2 rounded-full text-2xl absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={scrollRight}>
        <AiOutlineArrowRight />
      </button>
    </section>
  );
}

export default CarouselComponent;