import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../../store/homeSlice";
import { fetchData } from "../../utils/api";
import Banner from "./Banner";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Trending from "./Trending";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchGenres() {
      const movieGenres = await fetchData(`/genre/movie/list`);
      const tvGenres = await fetchData(`/genre/tv/list`);
      const genres = [...movieGenres.genres, ...tvGenres.genres];
      dispatch(getGenres(genres));
    }
    fetchGenres();
  }, [dispatch]);
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
