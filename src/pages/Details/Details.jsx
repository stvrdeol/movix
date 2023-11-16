import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./Cast";
import MovieDetails from "./MovieDetails";

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
        <MovieDetails data={data} loading={loading} crew={cast?.crew} />
        <Cast cast={cast} castLoading={castLoading} />
      </section>
    </section>
  );
}
