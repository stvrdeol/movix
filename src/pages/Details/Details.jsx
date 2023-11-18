import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieDetails from "./MovieDetails";
import SeriesDetails from "./SeriesDetails";
import Cast from "./Cast"
export default function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: cast, loading: castLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <section
      className={`${
        loading ? `bg-bgBlue` : `bg-transparent`
      } text-white pt-24 pb-5 relative`}>
      <section className="max">
        <section className="fixed inset-0 bg-bgBlue -z-10">
          <img
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            alt={data?.title}
            className=" h-[100vh] w-full object-cover opacity-10"
          />
        </section>
        {mediaType == "tv" ? (
          <SeriesDetails data={data} loading={loading} crew={cast?.crew} />
        ) : (
          <MovieDetails data={data} loading={loading} crew={cast?.crew} />
        )}
        <Cast cast={cast} castLoading={castLoading} />
      </section>
    </section>
  );
}
