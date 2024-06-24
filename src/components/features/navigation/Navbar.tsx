import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../common/Button";
import Image from "../../common/Image";
import BurgerMenu from "./BurgerMenu";

/***
 * Composant Barre de Navigation
 * @returns {JSX.Element}
 */
const Navbar = (): JSX.Element => {
  const navigate = useNavigate();

  const [activeNavbar, setActiveNavbar] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setToggleNav((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && toggleNav) {
        setToggleNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggleNav]);

  useEffect(() => {
    const handleGhangeBackground = () => {
      if (window.scrollY >= 40) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    };

    window.addEventListener("scroll", handleGhangeBackground);
    return () => window.removeEventListener("scroll", handleGhangeBackground);
  }, []);

  return (
    <nav
      className={`navbar ${activeNavbar ? "active" : ""} ${toggleNav ? "show-nav" : ""} `}
    >
      <Link to="/" className="relative z-20 h-12">
        <Image src="img-logo" alt="logo" style="h-full object-cover" />
      </Link>

      <ul className="navbar-links">
        <li className="navbar-item slide-1">
          <Link to="/about-me">À propos de moi</Link>
        </li>
        <li className="navbar-item slide-2">
          <Link to="/projects">Projets</Link>
        </li>
        <li className="navbar-item slide-3">
          <Link to="/gallery">Gallerie</Link>
        </li>
        <li className="navbar-item slide-4">
          <Button
            type="button"
            onClick={() => navigate("/contact")}
            style="text-xl md:text-xs"
          >
            Me contacter
          </Button>
        </li>
      </ul>

      <BurgerMenu onClick={handleToggleMenu} />
    </nav>
  );
};

export default Navbar;
