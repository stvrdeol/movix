import Carousel from "../../components/Carousel";

function Recommendations({ data, loading }) {
  return (
    data?.results.length > 1 && (
      <section className="relative my-10">
        <h2 className="text-2xl">Recommendations</h2>
        <Carousel data={data} loading={loading} id={"recommendCarousel"} />
      </section>
    )
  );
}

export default Recommendations;
