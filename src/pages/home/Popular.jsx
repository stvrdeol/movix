import { useState } from "react";
import Carousel from "../../components/Carousel";
import TabSwitcher from "../../components/TabSwitcher";
import useFetch from "../../hooks/useFetch";

function Popular() {
  const [popular, setPopular] = useState("movie");
  const { data, loading, error } = useFetch(`/${popular}/popular`);
  return (
    <section className="py-10 text-white max  relative">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold">What&apos;s Popular</h2>
        <TabSwitcher
          data={["Movies", "TV Shows"]}
          setTab={setPopular}
          id={"popularCarousel"}
        />
      </section>

      <Carousel
        data={data}
        loading={loading}
        error={error}
        id={"popularCarousel"}
      />
    </section>
  );
}

export default Popular;
