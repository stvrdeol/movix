import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import logo from "../assets/movix-logo.svg";
import SearchBar from "./SearchBar";
function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <header className="fixed backdrop-blur-sm w-full text-white py-2 bg-black/30 z-10">
      <nav className="flex items-center justify-between max  ">
        <NavLink to="/">
          <img src={logo} alt="movix logo" className="sm:w-40" />
        </NavLink>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? `font-bold text-pink`
                  : `hover:text-pink hover:font-bold`
              }>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tv"
              className={({ isActive }) =>
                isActive
                  ? `font-bold text-pink`
                  : `hover:text-pink hover:font-bold`
              }>
              TV Shows
            </NavLink>
          </li>
          <li>
            <BiSearch
              className="text-xl hover:text-pink cursor-pointer"
              onClick={() => setShowSearchBar((prev) => !prev)}
            />
          </li>
        </ul>
      </nav>
      {showSearchBar && <SearchBar setShowSearchBar={setShowSearchBar} />}
    </header>
  );
}

export default Header;
