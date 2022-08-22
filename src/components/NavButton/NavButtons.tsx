import "./NavButtons.css";
import { FC, useMemo } from "react";

type Props = {
  total: number;
};

const NavButtons: FC<Props> = ({ total }) => {
  const scroll: any = (n: number) => {
    const element = document.querySelector(`#card${n}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const buttons = useMemo(() => {
    let btns = [];
    for (let i = 0; i < total; i++) {
      //FIXME можно через map (второй арг у коллбека - index)
      btns.push(
        <label key={`radio${i}`}>
          <input
            className="nav-btns-input"
            type="radio"
            name="radio-btn"
            onChange={scroll(i)} //FIXME ошибоч, надо по аналогии с onClick
            id={`radio${i}`}
            onClick={() => scroll(i)}
          />
          <span className="nav-btns-span" />
        </label>
      );
    }
    return btns;
  }, [total]);

  return <div className="nav-btns-container">{buttons}</div>;
};

export default NavButtons;
