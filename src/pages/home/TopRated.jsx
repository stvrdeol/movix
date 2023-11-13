import { useState } from "react";
import CarouselComponent from "../../components/CarouselComponent";
import TabSwitcher from "../../components/TabSwitcher";
import useFetch from "../../hooks/useFetch";

function TopRated() {
  const [topRated, setTopRated] = useState("movie");
  const { data, loading, error } = useFetch(`/${topRated}/top_rated`);
  return (
    <section className="py-10 text-white max  relative">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold">Top Rated</h2>
        <TabSwitcher
          data={["Movies", "TV Shows"]}
          setTab={setTopRated}
          id={"popularCarousel"}
        />
      </section>
      <CarouselComponent
        data={data}
        loading={loading}
        error={error}
        id={"topRatedCarousel"}
      />
    </section>
  );
}

export default TopRated;
