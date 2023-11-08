import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
function Banner() {
  const [query, setQuery] = useState("");
  const [bgImg, setBgImg] = useState(null);
  const navigate = useNavigate();
  const { data } = useFetch("/movie/popular");
  console.log(data);

  function onSubmit(e) {
    e.preventDefault();
    console.log(query);
    setQuery("");
    navigate("/search/" + query);
  }

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 20);
    const bg = data?.results[randomNum]?.backdrop_path;
    setBgImg("https://image.tmdb.org/t/p/original" + bg);
  }, [data]);
  return (
    <section
      className="h-screen bg-cover bg-no-repeat text-white pt-10"
      style={{ backgroundImage: `url(${bgImg})` }}>
      {/* <img src={bgImg} alt="poster" /> */}
      <h1>Welcome</h1>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie or tv show..."
          required
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Banner;
