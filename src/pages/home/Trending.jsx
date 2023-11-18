import { useState } from "react";
// import CarouselComponent from "../../components/CarouselComponent";
import TabSwitcher from "../../components/TabSwitcher";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/Carousel";

function Trending() {
  // const imageURL = "https://image.tmdb.org/t/p/w500";
  const [trending, setTrending] = useState("day");
  const { data, loading, error } = useFetch(`/trending/all/${trending}`);

  return (
    <section className="py-10 text-white max  relative">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold">Trending</h2>
        <TabSwitcher
          data={["Day", "Week"]}
          setTab={setTrending}
          id={"trendingCarousel"}
        />
      </section>
      {/* <CarouselComponent
        data={data}
        loading={loading}
        error={error}
        id={"trendingCarousel"}
      /> */}
      <Carousel
        data={data}
        loading={loading}
        error={error}
        id={"trendingCarousel"}
      />
    </section>
  );
}

export default Trending;
