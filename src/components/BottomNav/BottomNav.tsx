import React, { FC } from "react";
import "./BottomNav.css";
import ArrowUp from "../../assets/icons/arrowup.svg?react";
import Plus from "../../assets/icons/plus.svg?react";

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
        <ArrowUp />
      </button>
      <button className="bottom-nav-btn" onClick={props.changeVisibility}>
        <Plus />
      </button>
    </div>
  );
};

export default QuotesNavPanel;
