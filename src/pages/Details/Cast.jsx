import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CastAvatar from "../../assets/avatar.png";
import Skeleton from "../../components/Skeleton";

function Cast({ cast, castLoading }) {
  return (
    <section className="my-10">
      {cast && <h2 className="text-2xl">Top Cast</h2>}
      {castLoading && (
        <>
          <h2 className="text-2xl">Top Cast</h2>
          <section className="mt-4 flex gap-6 overflow-hidden">
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
            <article className="space-y-2">
              <Skeleton classNames={`w-40 h-40 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
              <Skeleton classNames={`w-40 h-2 rounded-full`} />
            </article>
          </section>
        </>
      )}
      {!castLoading && cast?.cast?.length > 0 && (
        <section className="cast overflow-auto scroll-smooth">
          <section className="flex mt-5 gap-4 w-max">
            {cast.cast.map((actor) => {
              return (
                <article key={actor.id} className="text-center">
                  <LazyLoadImage
                    threshold={250}
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                        : CastAvatar
                    }
                    effect="blur"
                    className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover top object-center mx-auto"
                    wrapperProps={{
                      style: { transitionDelay: ".1s" },
                    }}
                  />
                  <p className="heading mt-2">{actor.original_name}</p>
                  <p className="result">{actor.character}</p>
                </article>
              );
            })}
          </section>
        </section>
      )}
    </section>
  );
}

export default Cast;
