import React, { FC } from "react";
import { ReactSVG } from "react-svg";
import arrowSvg from "../../assets/icons/arrowup.svg";
import plusSvg from "../../assets/icons/plus.svg";
import "./BottomNav.css";

type Props = {
  changeVisibility: any;
};

const QuotesNavPanel: FC<Props> = (props) => {
  const scrollToTop = () => {
    document.querySelector(".app")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bottom-nav-container">
      <button className="bottom-nav-btn" onClick={scrollToTop}>
        <img src={arrowSvg} />
        {/* TODO: a way to customize svg without straight up pasting it to jsx */}
      </button>
      <button className="bottom-nav-btn" onClick={props.changeVisibility}>
        <img src={plusSvg} />
        {/* TODO: a way to customize svg without straight up pasting it to jsx */}
      </button>
    </div>
  );
};

export default QuotesNavPanel;
