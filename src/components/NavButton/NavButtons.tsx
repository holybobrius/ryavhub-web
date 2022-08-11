import "./NavButtons.css";
import { FC, useMemo } from "react";

interface Props {
  total: number;
}

const NavButtons: FC<Props> = (props) => {
  const scroll: any = (n: number) => {
    const element = document.querySelector(`#card${n}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const buttons = useMemo(() => {
    let btns = [];
    for (let i = 0; i < props.total; i++) {
      btns.push(
        <label key={`radio${i}`}>
          <input
            className="nav-btns-input"
            type="radio"
            name="radio-btn"
            onChange={scroll(i)}
            id={`radio${i}`}
            onClick={() => scroll(i)}
          />
          <span className="nav-btns-span" />
        </label>
      );
    }
    return btns;
  }, [props.total]);
  return <div className="nav-btns-container">{buttons}</div>;
};

export default NavButtons;
