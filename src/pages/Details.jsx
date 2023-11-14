import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import useFetch from "../hooks/useFetch";

export default function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  return (
    <section className="bg-bgBlue text-white pt-24 pb-5 relative -z-10">
      <section className="max">
        {loading && (
          <section className="space-y-2 ">
            <Skeleton classNames={`rounded-lg h-[60vh] `} />
            <section className="space-y-2">
              <Skeleton classNames={`rounded-lg h-4 `} />
              <section className="flex gap-3">
                <Skeleton classNames={`rounded-lg h-4 w-20`} />
                <Skeleton classNames={`rounded-lg h-4 w-20`} />
              </section>
              <section className="flex gap-3">
                <Skeleton classNames={`h-20 w-20 rounded-full`} />
                <Skeleton classNames={` h-20 w-20 rounded-full`} />
              </section>
              <Skeleton classNames={`rounded-lg h-4 `} />
              <Skeleton classNames={`rounded-lg h-4 `} />
              <Skeleton classNames={`rounded-lg h-4 `} />
              <Skeleton classNames={`rounded-lg h-4 `} />
            </section>
          </section>
        )}
        {!loading && data && (
          <section>
            <section className="fixed inset-0">
              <img
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={data.title}
                className=" h-[100vh] w-full object-cover opacity-5"
              />
            </section>
            <article className="sm:w-2/4">
              <LazyLoadImage
                threshold={250}
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                effect="blur"
                className="rounded-lg"
                wrapperProps={{
                  style: { transitionDelay: ".1s" },
                }}
              />
              <section>
                <p>{data.title}</p>
              </section>
            </article>
          </section>
        )}
      </section>
    </section>
  );
}
