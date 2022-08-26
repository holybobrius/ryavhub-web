import React, { FC } from "react";
import { Users } from "../../types/types";
import Tag from "../Tag/Tag";

type Props = {
  users: Users.User[];
  selected: number[];
  onClick: (user: Users.User) => void;
};

export const TagList: FC<Props> = ({ users, selected, onClick }) => (
  <>
    {users.map((user) => (
      <Tag
        key={user.id}
        user={user}
        active={selected.includes(user.id)}
        onClick={onClick}
        clickable
      />
    ))}
  </>
);
