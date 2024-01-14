import { FC, useState, useCallback } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const Navbar: FC = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const handleNavbarOpened = useCallback(() => setNavbarOpened(true), []);
  const handleNavbarClose = useCallback(() => setNavbarOpened(false), []);

  const reduxStore = useSelector<RootState>((state) => state.googleUser);

  if (reduxStore === null && window.location.hostname !== 'localhost') {
    return null;
  }

  return (
    <nav>
      <Link to="/">
        <div className="logo" />
      </Link>
      <div className="navbar-buttons">
        <div className="separator" />
        <Link className="router-link nav-link" to="/quotes">
          цитаты
        </Link>
        <div className="separator" />
        <Link className="router-link nav-link" to="/timeline">
          таймлайн
        </Link>
        <div className="separator" />
        <Link className="router-link nav-link" to="/gamesaves">
          сейвы
        </Link>
        <div className="separator" />
      </div>
      <div className="nav-desktop-login-container">
        <LoginButton />
      </div>
      <button className="nav-mobile-btn" onClick={handleNavbarOpened}>
        <Arrow />
      </button>
      {navbarOpened && <NavbarMobile onClose={handleNavbarClose} />}
    </nav>
  );
};
export default Navbar;
