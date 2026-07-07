import { FaHeart } from "react-icons/fa";

function Navbar() {
  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">

      <div className="container navbar-container">

        <div
          className="navbar-logo"
          onClick={scrollToHero}
        >
          <FaHeart />

          <span>
            Masih Suka?
          </span>
        </div>

        <button
          className="navbar-button"
          onClick={scrollToHero}
        >
          Home
        </button>

      </div>

    </header>
  );
}

export default Navbar;