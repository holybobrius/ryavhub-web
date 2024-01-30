import { FC, useState } from "react";
import { CringePG, Users } from "../../types/types";
import "./GauntletUserCard.css";
import { GameStatus } from "../GameStatus/GameStatus";
import OpenGauntletCard from "../../assets/icons/OpenGauntletCard.svg?react";
import { Modal } from "antd";
import { GauntletUserModal } from "../GauntletUserModal/GauntletUserModal";

interface Props {
  user: Users.User;
  claims: CringePG.GauntletClaim[];
}

export const GauntletUserCard: FC<Props> = ({ user, claims }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div className="gauntlet-card">
      <div className="gauntlet-card-heading-container">
        <h2 className="gauntlet-card-heading">{user.name}</h2>
        <button className="gauntlet-card-open-button" onClick={open}>
          <OpenGauntletCard className="button-icon" />
        </button>
      </div>
      <div className="games-count-container">
        <p className="games-count-item">{`Пройдено: ${
          claims.filter((n) => n.status === "completed" || n.status === "coop")
            .length
        }`}</p>
        <p className="games-count-item">{`Дропнуто: ${
          claims.filter((n) => n.status === "dropped").length
        }`}</p>
      </div>
      <div className="gauntlet-card-games-list">
        {claims.map((n, index) => (
          <div className="gauntlet-card-games-list-item">
            <p className="gauntlet-card-games-list-item-index">{`${
              claims.length - index
            }.`}</p>
            <p className="gauntlet-card-games-list-item-name">{n.game.name}</p>
            <div className="game-status-wrapper">
              <GameStatus status={n.status} />
            </div>
          </div>
        ))}
      </div>
      <div className="gradient-container"></div>
      <Modal
        open={isOpen}
        onCancel={close}
        width={1004}
        footer={null}
        closeIcon={null}
        style={{ right: "218px" }}
      >
        <GauntletUserModal claims={claims} user={user} />
      </Modal>
    </div>
  );
};
