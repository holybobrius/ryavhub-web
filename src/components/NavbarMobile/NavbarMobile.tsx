import { FC } from "react";
import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import quotesSvg from "../../assets/icons/quotes.svg";
import timelineSvg from "../../assets/icons/timeline.svg";
import savesSvg from "../../assets/icons/saves.svg";
import LoginButton from "../LoginButton/LoginButton";

type Props = {
  onClose: () => void;
};

const NavbarMobile: FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="navbar-mobile">
        <div className="navbar-mobile-item">
          <img src={quotesSvg} />
          <Link className="router-link nav-link" to="/quotes">
            цитаты
          </Link>
        </div>
        <div className="separator" />
        <div className="navbar-mobile-item">
          <img src={timelineSvg} />
          <Link className="router-link nav-link" to="/timeline">
            таймлайн
          </Link>
        </div>
        <div className="separator"></div>
        <div className="navbar-mobile-item">
          <img src={savesSvg} />
          <Link className="router-link nav-link" to="/gamesaves">
            сейвы
          </Link>
        </div>
        <div className="separator"></div>
        <div className="navbar-mobile-item">
          <LoginButton /> {/*TODO: Logout styles*/}
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
