import Carousel from "../../components/Carousel";
function Similar({ data, loading }) {
  return (
    data?.results.length > 1 && (
      <section className="relative my-10">
        <h2 className="text-2xl">Similar</h2>
        <Carousel data={data} loading={loading} id={"similarCarousel"} />
      </section>
    )
  );
}

export default Similar;
