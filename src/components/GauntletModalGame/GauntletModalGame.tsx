import { FC, useState } from "react";
import { CringePG } from "../../types/types";
import { GameStatus } from "../GameStatus/GameStatus";
import TextArea from "antd/es/input/TextArea";
import CommentIcon from "../../assets/icons/CommentIcon.svg?react";
import { useUser } from "../../requests/user/useUser";
import Delete from "../../assets/icons/Delete.svg?react";
import SencComment from "../../assets/icons/SendComment.svg?react";
import { Dropdown, MenuProps } from "antd";

interface Props {
  claim: CringePG.GauntletClaim;
  index: number;
}

export const GauntletModalGame: FC<Props> = ({ claim, index }) => {
  const [commentVisible, setCommentVisible] = useState(false);
  const user = useUser();

  const checkIfCurrentUser = (userId: number) => {
    return user?.id === userId;
  };

  const items: MenuProps["items"] = [
    {
      label: <GameStatus status={"new"} />,
      key: "new",
    },
    {
      label: <GameStatus status={"completed"} />,
      key: "completed",
    },
    {
      label: <GameStatus status={"dropped"} />,
      key: "dropped",
    },
    {
      label: <GameStatus status={"rerolled"} />,
      key: "rerolled",
    },
    {
      label: <GameStatus status={"coop"} />,
      key: "coop",
    },
    {
      label: <GameStatus status={"waitlisted"} />,
      key: "waitlisted",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "1.2rem" }}>
      <div className="gauntlet-modal-games-list-item">
        <div className="gauntlet-modal-games-list-item-game-container">
          <div
            className="gauntlet-modal-games-list-item-name-container"
            onClick={() => setCommentVisible(!commentVisible)}
          >
            <p className="gauntlet-modal-games-list-item-text index">
              {`${index}.`}
            </p>
            <p className="gauntlet-modal-games-list-item-text">
              {claim.game.name}
              {!!claim.comment && (
                <div style={{ display: "inline", marginLeft: "8px" }}>
                  <CommentIcon />
                </div>
              )}
            </p>
          </div>
          <div className="gauntlet-modal-game-status-container">
            {checkIfCurrentUser(claim.user.id) ? (
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <div className="gauntlet-modal-game-status-container">
                  <GameStatus status={claim.status} />
                </div>
              </Dropdown>
            ) : (
              <div className="gauntlet-modal-game-status-container">
                <GameStatus status={claim.status} />
              </div>
            )}
          </div>
        </div>
        <div className={`comment-container ${commentVisible ? "" : "hidden"}`}>
          <TextArea
            className="comment-textarea"
            autoSize
            placeholder="Прошёл игру? Мнение!"
            value={claim.comment}
            disabled={!checkIfCurrentUser(claim.user.id)}
          />
          {checkIfCurrentUser(claim.user.id) && (
            <button className="gauntlet-send-comment-button">
              <SencComment />
            </button>
          )}
        </div>
      </div>
      {checkIfCurrentUser(claim.user.id) && (
        <button className="gauntlet-delete-game-button">
          <Delete />
        </button>
      )}
    </div>
  );
};
