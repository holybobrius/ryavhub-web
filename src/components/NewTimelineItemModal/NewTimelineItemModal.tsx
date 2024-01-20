import { FC, useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import "./NewTimelineItemModal.css";
import { TagList } from "../TagList/TagList";
import { usersRequest } from "../../requests/users";
import { Timeline, Users } from "../../types/types";
import { postTimelineRequest } from "../../requests/timeline";
import Cross from "../../assets/icons/cross.svg?react";

type Props = {
  visible: boolean;
  changeVisibility: () => void;
  fetchTimeline: () => void;
};

const NewTimelineItemModal: FC<Props> = (props) => {
  const [users, setUsers] = useState<Users.User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  useEffect(() => {
    usersRequest().then(({ payload }) => setUsers(payload));
  }, []);
  const { register, handleSubmit } = useForm<Timeline.TimelinePost>();
  const handleInnerFormSubmit = (data: Timeline.TimelinePost) => {
    return postTimelineRequest({ ...data, participants: selectedUsers })
      .then(() => props.fetchTimeline())
      .then(() => props.changeVisibility());
  };

  const handleClick = useCallback(
    (user: Users.User) => {
      if (selectedUsers.includes(user.id)) {
        return setSelectedUsers((selected) =>
          selected.filter((u) => user.id !== u)
        );
      }

      setSelectedUsers((p) => [...p, user.id]);
    },
    [selectedUsers]
  );

  return props.visible ? (
    <div className="modal" id="modal">
      <div className="modal-content">
        <span className="close" onClick={props.changeVisibility}>
          <Cross />
        </span>
        <form
          className="timeline-form"
          onSubmit={handleSubmit(handleInnerFormSubmit)}
        >
          <div className="textarea-box input-box">
            <label className="label" htmlFor="main">
              Событие:
            </label>
            <textarea {...register("title", { required: true })}></textarea>
          </div>
          <div className="input-box">
            <label className="label" htmlFor="location">
              Место:
            </label>
            <input
              className="input-text"
              type="text"
              {...register("location")}
            ></input>
          </div>
          <div className="input-box">
            <label className="label" htmlFor="date">
              Дата:
            </label>
            <input
              className="input-text"
              {...register("date", { required: true })}
              type="date"
            ></input>
          </div>
          <div className="participants-box">
            <label className="label" htmlFor="author">
              Участники:
            </label>
            <div className="tags-box">
              <TagList
                users={users}
                selected={selectedUsers}
                onClick={handleClick}
              />
            </div>
          </div>

          <button className="submit" type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  ) : null;
};

export default NewTimelineItemModal;
