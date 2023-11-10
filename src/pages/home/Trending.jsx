import CarouselComponent from "../../components/CarouselComponent";
import TabSwitcher from "../../components/TabSwitcher";
import useFetch from "../../hooks/useFetch";

function Trending() {
  // const imageURL = "https://image.tmdb.org/t/p/w500";

  const { data, loading, error } = useFetch("/trending/all/day");

  return (
    <section className="py-10 text-white max relative">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold">Trending</h2>
        <TabSwitcher data={["Day", "Week"]} />
      </section>

      <CarouselComponent data={data} />
    </section>
  );
}

export default Trending;
