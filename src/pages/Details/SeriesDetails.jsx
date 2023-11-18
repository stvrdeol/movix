import Skeleton from "../../components/Skeleton";

function SeriesDetails({ data, loading }) {
  return (
    <>
      {!loading && (
        <section className="space-y-2 sm:flex gap-4">
          <section
            className="h-[70vh] flex-none mb-8 mx-auto"
            style={{ aspectRatio: "1/1.5" }}>
            <Skeleton classNames={`rounded-lg h-full w-full`} />
          </section>
          <section className="space-y-2  flex-1">
            <Skeleton classNames={`rounded-lg h-4 `} />
            <section className="flex gap-3 ">
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
    </>
  );
}

export default SeriesDetails;
