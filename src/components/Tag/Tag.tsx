import { FC } from "react";
import { Users } from "../../types/types";
import "./Tag.css";

type Props = {
  user: any;
  clickable?: boolean;
  active?: boolean;
  onClick?: (user: Users.User) => void;
};

const Tag: FC<Props> = ({ user, onClick, clickable, active }) => (
  <div
    className={`tag ${clickable ? "clickable" : ""} ${
      //FIXME https://www.npmjs.com/package/classnames
      active ? "active" : ""
    }`}
    onClick={() => onClick?.(user)}
  >
    <p className="tag-text">{user.name}</p>
  </div>
);

export default Tag;
