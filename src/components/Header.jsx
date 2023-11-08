import { NavLink } from "react-router-dom";
import logo from "../assets/movix-logo.svg";
function Header() {
  return (
    <header className="fixed backdrop-blur-sm w-full text-white py-2 bg-black/30 z-10">
      <nav className="flex items-center justify-between max  ">
        <NavLink to="/">
          <img src={logo} alt="movix logo" className="sm:w-40" />
        </NavLink>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Tv Shows</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
