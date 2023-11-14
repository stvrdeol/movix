import { NavLink } from "react-router-dom";

function MobileMenu({ setShowMobileMenu }) {
  return (
    <ul className="sm:hidden absolute py-2 left-0 w-full top-14 bg-bgBlue">
      <li className="py-2 px-4">
        <NavLink
          to="/movies"
          onClick={() => setShowMobileMenu(false)}
          className={({ isActive }) =>
            isActive ? `font-bold text-pink` : `hover:text-pink hover:font-bold`
          }>
          Movies
        </NavLink>
      </li>
      <li className="py-2 px-4">
        <NavLink
          to="/tv-shows"
          onClick={() => setShowMobileMenu(false)}
          className={({ isActive }) =>
            isActive ? `font-bold text-pink` : `hover:text-pink hover:font-bold`
          }>
          TV Shows
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileMenu;
