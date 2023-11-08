import logo from "../assets/movix-logo.svg";
function Header() {
  return (
    <header className="fixed backdrop-blur-sm w-full text-white">
      <nav>
        <img src={logo} alt="" />
      </nav>
    </header>
  );
}

export default Header;
