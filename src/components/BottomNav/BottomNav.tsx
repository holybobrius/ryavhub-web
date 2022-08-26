import React, { FC } from "react";
import "./BottomNav.css";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrowup.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

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
