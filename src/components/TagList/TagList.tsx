import React, { FC } from "react";
import { User } from "../../types/types";
import Tag from "../Tag/Tag";

type Props = {
  users: User[];
  selected: number[];
  onClick: (user: User) => void;
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
