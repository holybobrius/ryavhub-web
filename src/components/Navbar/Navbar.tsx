import { FC, useState, useCallback } from "react";
import "./Navbar.css";
import { Link, useRouteMatch } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

const Navbar: FC = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const handleNavbarOpened = useCallback(() => setNavbarOpened(true), []);
  const handleNavbarClose = useCallback(() => setNavbarOpened(false), []);

  //FIXME минор, мне кажется красивше будет вынести в App.tsx сокрытие навбара
  //заюзай хук hooks/useIsAuthorized, в который убрана логика проверки юзера
  const reduxStore = useSelector<RootState>((state) => state.googleUser);

  if (reduxStore === null) {
    return null;
  }

  return (
    <nav>
      <Link to="/">
        <div className="logo" />
      </Link>
      <div className="navbar-buttons">
        <div className="separator" />
        <Link
          style={
            { textDecoration: "none" } /* FIXME можно общий класс навесить */
          }
          to="/quotes"
        >
          <a className="nav-link">цитаты</a>
        </Link>
        <div className="separator" />
        <Link style={{ textDecoration: "none" }} to="/timeline">
          <a className="nav-link">таймлайн</a>
        </Link>
        <div className="separator" />
        <Link style={{ textDecoration: "none" }} to="/gamesaves">
          <a className="nav-link">сейвы</a>
        </Link>
        <div className="separator" />
      </div>
      <div className="nav-desktop-login-container">
        <LoginButton />
      </div>
      <button className="nav-mobile-btn" onClick={handleNavbarOpened}>
        <svg //FIXME в отдельный файл
          className="nav-mobile-btn-icon"
          width="12"
          height="20"
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0895 18.943L11.094 18.9374L11.0981 18.9315C11.2092 18.7741 11.2593 18.5829 11.2372 18.3916C11.2151 18.2012 11.1234 18.027 10.9819 17.8978L10.9774 17.8935L10.9595 17.8766L10.8895 17.8107L10.6238 17.5604L9.67532 16.6665L6.79408 13.9515L3.90466 11.2286L2.94592 10.3251L2.67363 10.0685L2.60026 9.99936L11.0059 2.08892C11.0059 2.08891 11.0059 2.0889 11.0059 2.08889C11.1602 1.94373 11.25 1.74348 11.25 1.53121C11.25 1.31893 11.1602 1.11866 11.0059 0.973501C10.8521 0.828825 10.6466 0.75 10.4353 0.75C10.224 0.75 10.0186 0.828825 9.86477 0.973501L9.86462 0.973642L1.27547 9.06732L1.27533 9.06746L1.06385 9.26642L1.06381 9.26638L1.05995 9.27016C0.862836 9.46379 0.75 9.72473 0.75 9.99933C0.75 10.2739 0.862836 10.5349 1.05995 10.7285L1.05991 10.7285L1.06385 10.7322L1.27538 10.9313L1.27548 10.9313L9.86328 19.0185C9.9456 19.0982 10.0443 19.1594 10.1521 19.1988C10.2607 19.2385 10.3766 19.2553 10.492 19.2485C10.6075 19.2417 10.7206 19.2114 10.8236 19.1591C10.9266 19.1067 11.0176 19.0333 11.0895 18.943Z"
            fill="white"
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
      </button>
      {navbarOpened && <NavbarMobile onClose={handleNavbarClose} />}
    </nav>
  );
};
export default Navbar;
