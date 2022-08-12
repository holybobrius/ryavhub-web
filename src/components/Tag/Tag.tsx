import { FC } from "react";
import "./Tag.css";

interface Props {
  text: string;
}

const Tag: FC<Props> = (props) => {
  return (
    <div className="tag">
      <p className="tag-text">{props.text}</p>
    </div>
  );
};

export default Tag;
