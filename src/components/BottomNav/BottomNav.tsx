import React, { FC } from "react";
import "./BottomNav.css";
import ArrowUp from "../../assets/icons/arrowup.svg?react";
import Plus from "../../assets/icons/plus.svg?react";
import { Link } from "react-router-dom";
import CringePGAdminButton from "../../assets/icons/CringePGAdminButton.svg?react";

type Props = {
  changeVisibility?: any;
};

const QuotesNavPanel: FC<Props> = (props) => {
  const scrollToTop = () => {
    document.querySelector(".app")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isOnScrollPg = window.location.pathname === "/cringepg";

  return (
    <div className="bottom-nav-container">
      {/* @ts-expect-error */}
      <Link to="/cringepg-admin">
        <CringePGAdminButton className="cringepg-admin-button" />
      </Link>
      <button className="bottom-nav-btn" onClick={scrollToTop}>
        <ArrowUp />
      </button>
      {!isOnScrollPg && (
        <button className="bottom-nav-btn" onClick={props.changeVisibility}>
          <Plus />
        </button>
      )}
    </div>
  );
};

export default QuotesNavPanel;
