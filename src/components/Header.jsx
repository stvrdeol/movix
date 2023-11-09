import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/movix-logo.svg";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header
      className={`fixed backdrop-blur-sm w-full transition-all text-white py-2 ${
        showMobileMenu ? `bg-bgBlue` : `bg-black/30`
      }  z-10`}>
      <nav className="flex items-center justify-between max  ">
        <NavLink to="/">
          <img src={logo} alt="movix logo" className="sm:w-40" />
        </NavLink>
        <ul className="flex gap-5 items-center">
          <li className="hidden sm:block">
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
          <li className="hidden sm:block">
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
              onClick={() => {
                setShowSearchBar((prev) => !prev);
                setShowMobileMenu(false);
              }}
            />
          </li>
          <li className="sm:hidden">
            {!showMobileMenu ? (
              <GiHamburgerMenu
                className="text-xl hover:text-pink cursor-pointer"
                onClick={() => {
                  setShowMobileMenu((prev) => !prev);
                  setShowSearchBar(false);
                }}
              />
            ) : (
              <IoCloseOutline
                className=" text-2xl hover:text-pink cursor-pointer"
                onClick={() => setShowMobileMenu((prev) => !prev)}
              />
            )}
          </li>
        </ul>
        {showMobileMenu && <MobileMenu />}
      </nav>
      {showSearchBar && (
        <SearchBar
          setShowSearchBar={setShowSearchBar}
          setShowMobileMenu={setShowMobileMenu}
        />
      )}
    </header>
  );
}

export default Header;
