import { ChangeEvent, FC, useState } from "react";
import { CringePG } from "../../types/types";
import { GameStatus } from "../GameStatus/GameStatus";
import TextArea from "antd/es/input/TextArea";
import CommentIcon from "../../assets/icons/CommentIcon.svg?react";
import { useUser } from "../../requests/user/useUser";
import Delete from "../../assets/icons/Delete.svg?react";
import SencComment from "../../assets/icons/SendComment.svg?react";
import { Dropdown, MenuProps } from "antd";
import { useCringePG } from "../../requests/cringepg/useCringePG";

interface Props {
  claim: CringePG.GauntletClaim;
  index: number;
}

export const GauntletModalGame: FC<Props> = ({ claim, index }) => {
  const [commentVisible, setCommentVisible] = useState(false);
  const [updatedClaim, setUpdatedClaim] = useState(claim);
  const { updateStatus, updateComment } = useCringePG();
  const user = useUser();

  const checkIfCurrentUser = (userId: number) => {
    return user?.id === userId;
  };

  const handleStatusUpdate = async (
    id: number,
    status: string | CringePG.GameStatus
  ) => {
    await updateStatus(id, status);
    setUpdatedClaim({ ...claim, status });
  };

  const handleCommentUpdate = (id: number) => {
    updateComment(id, updatedClaim.comment);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div onClick={() => handleStatusUpdate(claim.id, "new")}>
          <GameStatus status={"new"} />
        </div>
      ),
      key: "new",
    },
    {
      label: (
        <div onClick={() => handleStatusUpdate(claim.id, "completed")}>
          <GameStatus status={"completed"} />
        </div>
      ),
      key: "completed",
    },
    {
      label: (
        <div onClick={() => handleStatusUpdate(claim.id, "dropped")}>
          <GameStatus status={"dropped"} />
        </div>
      ),
      key: "dropped",
    },
    {
      label: (
        <div onClick={() => handleStatusUpdate(claim.id, "rerolled")}>
          <GameStatus status={"rerolled"} />
        </div>
      ),
      key: "rerolled",
    },
    {
      label: (
        <div onClick={() => handleStatusUpdate(claim.id, "coop")}>
          <GameStatus status={"coop"} />
        </div>
      ),
      key: "coop",
    },
    {
      label: (
        <div onClick={() => handleStatusUpdate(claim.id, "waitlisted")}>
          <GameStatus status={"waitlisted"} />
        </div>
      ),
      key: "waitlisted",
    },
  ];

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedClaim({ ...claim, comment: e.target.value });
  };

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
              {!!updatedClaim.comment && (
                <div style={{ display: "inline", marginLeft: "8px" }}>
                  <CommentIcon />
                </div>
              )}
            </p>
          </div>
          <div className="gauntlet-modal-game-status-container">
            {checkIfCurrentUser(updatedClaim.user.id) ? (
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <div className="gauntlet-modal-game-status-container">
                  <GameStatus status={updatedClaim.status} />
                </div>
              </Dropdown>
            ) : (
              <div className="gauntlet-modal-game-status-container">
                <GameStatus status={updatedClaim.status} />
              </div>
            )}
          </div>
        </div>
        <div className={`comment-container ${commentVisible ? "" : "hidden"}`}>
          <TextArea
            className="comment-textarea"
            autoSize
            placeholder="Прошёл игру? Мнение!"
            value={updatedClaim.comment}
            disabled={!checkIfCurrentUser(updatedClaim.user.id)}
            onChange={handleCommentChange}
          />
          {checkIfCurrentUser(updatedClaim.user.id) && (
            <button
              className="gauntlet-send-comment-button"
              onClick={() => handleCommentUpdate(claim.id)}
            >
              <SencComment className="button-icon comment" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
