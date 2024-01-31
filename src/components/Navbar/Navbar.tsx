import { FC, useState, useCallback } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import { useSelector } from "react-redux";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import { useUser } from "../../requests/user/useUser";
import Arrow from "../../assets/icons/arrow.svg?react";
import Logo from "../../assets/icons/logo.svg?react";

const Navbar: FC = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const handleNavbarOpened = useCallback(() => setNavbarOpened(true), []);
  const handleNavbarClose = useCallback(() => setNavbarOpened(false), []);
  const user = useUser();

  if (!user) {
    return null;
  }

  return (
    <nav>
      {/* @ts-expect-error */}
      <Link to="/">
        <Logo />
      </Link>
      <div className="navbar-buttons">
        {/* @ts-expect-error */}
        <Link className="router-link nav-link" to="/quotes">
          Цитаты
        </Link>
        {/* @ts-expect-error */}
        <Link className="router-link nav-link" to="/timeline">
          Таймлайн
        </Link>
        {/* @ts-expect-error */}
        <Link className="router-link nav-link" to="/gamesaves">
          Сейвы
        </Link>
        {/* @ts-expect-error */}
        <Link className="router-link nav-link" to="/cringepg">
          КринжПГ
        </Link>
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
