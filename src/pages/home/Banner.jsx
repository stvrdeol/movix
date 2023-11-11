import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
function Banner() {
  const [query, setQuery] = useState("");
  const [bgImg, setBgImg] = useState(null);
  const navigate = useNavigate();
  const randomNum = Math.floor(Math.random() * 100);
  const { data, loading,  } = useFetch("/movie/popular", {
    page: randomNum,
  });


  function onSubmit(e) {
    e.preventDefault();
    console.log(query);
    setQuery("");
    navigate("/search/" + query);
  }

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 20);
    const bg = data?.results[randomNum]?.backdrop_path;
    setBgImg("https://image.tmdb.org/t/p/original" + bg);
  }, [data]);
  return (
    <section
      className={`h-[80vh] sm:h-screen  text-white pt-14 relative flex flex-col items-center justify-center text-center ${
        loading ? `bg-bgBlue` : `bg-bgBlue/40`
      }`}>
      {!loading && (
        <>
          <section className="h-full  absolute w-full inset-0 -z-10 bg-bgBlue">
            <LazyLoadImage
              src={bgImg}
              className="h-full object-cover overflow-clip object-top w-full sm:h-screen"
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: ".1s" },
              }}
            />
          </section>
        </>
      )}
      <section className=" max  w-full max-w-3xl">
        <h1 className="text-5xl font-bold sm:text-7xl ">Welcome</h1>
        <p className="text-xl mb-6 font-medium">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <form onSubmit={onSubmit} className="flex w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie or tv show..."
            required
            className="flex-1 py-2 rounded-s-full px-5 outline-none text-black sm:py-4 sm:px-8"
          />
          <button
            type="submit"
            className="py-2 px-5 sm:px-8 bg-gradient-to-r from-[#F89E00] to-[#DA2F68] rounded-e-full">
            Search
          </button>
        </form>
      </section>
      <section
        className="h-20 w-full absolute bottom-0"
        style={{
          background:
            "linear-gradient(180deg,rgba(4,21,45,0) 0%,#04152d 79.17%)",
        }}></section>
    </section>
  );
}

export default Banner;
