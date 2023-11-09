import TabSwitcher from "../../components/TabSwitcher";

function TopRated() {
  return (
    <section className="py-10 bg-bgBlue text-white max">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold"> Top Rated</h2>
        <TabSwitcher data={["Movies", "TV Showa"]} />
      </section>
    </section>
  );
}

export default TopRated;
