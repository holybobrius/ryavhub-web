import { FC } from "react";
import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import QuotesIcon from "../../assets/icons/quotes.svg?react";
import TimelineIcon from "../../assets/icons/timeline.svg?react";
import SavesIcon from "../../assets/icons/saves.svg?react";
import LogoutIcon  from "../../assets/icons/logout.svg?react";
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
          <QuotesIcon />
          <Link className="router-link nav-link" to="/quotes">
            цитаты
          </Link>
        </div>
        <div className="separator" />
        <div className="navbar-mobile-item">
          <TimelineIcon />
          <Link className="router-link nav-link" to="/timeline">
            таймлайн
          </Link>
        </div>
        <div className="separator"></div>
        <div className="navbar-mobile-item">
          <SavesIcon />
          <Link className="router-link nav-link" to="/gamesaves">
            сейвы
          </Link>
        </div>
        <div className="separator"></div>
        <div className="navbar-mobile-item">
          <LogoutIcon />
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
