function Skeleton({ classNames }) {
  return (
    <section className={`${classNames} animate-pulse relative bg-[#1c4b91]/20`}>
      <section
        className="h-full w-1/12 bg-gray-100 blur-sm opacity-5  absolute"
        id="animate"></section>
    </section>
  );
}

export default Skeleton;
