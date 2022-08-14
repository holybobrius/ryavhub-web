import { FC, useState } from "react";
import "./Tag.css";

interface Props {
  text: any;
  handleClick?: any;
  user?: any;
  clickable?: boolean;
}

const Tag: FC<Props> = (props) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  return (
    <div
      className={`tag ${props.clickable ? "clickable" : ""} ${
        active ? "active" : ""
      }`}
      onClick={toggleActive}
    >
      <p className="tag-text">{props.text}</p>
    </div>
  );
};

export default Tag;
