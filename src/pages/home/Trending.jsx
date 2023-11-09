import TabSwitcher from "../../components/TabSwitcher";

function Trending() {
  return (
    <section className="py-10 bg-bgBlue text-white max">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-4xl font-bold">Trending</h2>
        <TabSwitcher data={["Day", "Week"]} />
      </section>
      
    </section>
  );
}

export default Trending;
