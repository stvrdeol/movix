import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function CarouselComponent({ data }) {
  function scrollRight() {
    const carousel = document.querySelector("#carousel");
    let divideNum = 5;
    if (window.innerWidth < 640) {
      divideNum = 8;
    }
    carousel.scrollTo({
      left: carousel.scrollLeft + carousel.scrollWidth / divideNum,
      behavior: "smooth",
    });
  }
  function scrollLeft() {
    const carousel = document.querySelector("#carousel");
    let divideNum = 8;
    if (window.innerWidth < 640) {
      divideNum = 3;
    }
    carousel.scrollTo({
      left: carousel.scrollLeft - carousel.scrollWidth / divideNum,
      behavior: "smooth",
    });
  }
  return (
    <section
      className="overflow-hidden sm:overflow-hidden w-full scroll-smooth"
      id="carousel">
      <section className="flex overflow-x-scroll items-center h-max gap-2 sm:gap-4 max-w-none my-6 w-max ">
        {data?.results.map((result) => {
          return (
            <article key={result.id} className="sm:w-[18.25vw] w-[30vw]">
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                effect="blur"
                className="rounded-lg"
                wrapperProps={{
                  style: { transitionDelay: ".1s" },
                }}
              />
            </article>
          );
        })}
      </section>
      <button
        className=" bg-black/70 p-2 rounded-full text-2xl absolute top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2 "
        onClick={scrollLeft}>
        <AiOutlineArrowLeft />
      </button>
      <button
        className=" bg-black/70 p-2 rounded-full text-2xl absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={scrollRight}>
        <AiOutlineArrowRight />
      </button>
    </section>
  );
}

export default CarouselComponent;
