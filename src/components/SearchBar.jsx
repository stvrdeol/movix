import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function SearchBar({ setShowSearchBar, setShowMobileMenu }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    console.log(query);
    setQuery("");
    navigate("/search/" + query);
    setShowSearchBar(false);
    setShowMobileMenu(false);
  }
  return (
    <section className="absolute bg-white text-black w-full ">
      <form className="flex py-4 max" onSubmit={onSubmit}>
        <input
          type="text"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-2 outline-none"
          placeholder="Search for a movie or tv show..."
          required
        />
        <button onClick={() => setShowSearchBar((prev) => !prev)} type="button">
          <IoCloseOutline className="font-bold text-2xl" />
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
