function Ratings({ value = 5 }) {
  return (
    <section
      className={`bg-white text-black w-10 h-10 rounded-full grid place-items-center`}>
      <section>{value}</section>
    </section>
  );
}

export default Ratings;
