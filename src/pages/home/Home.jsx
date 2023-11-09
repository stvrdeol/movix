import Banner from "./Banner";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Trending from "./Trending";

function Home() {
  return (
    <section className="min-h-screen">
      <Banner />
      <section className="bg-bgBlue">
        <Trending />
        <Popular />
        <TopRated />
      </section>
    </section>
  );
}

export default Home;
