import { FC, useState } from "react";
import { CringePG, Users } from "../../types/types";
import "./GauntletUserModal.css";
import { GameStatus } from "../GameStatus/GameStatus";
import { Input } from "antd";
import { GauntletModalGame } from "../GauntletModalGame/GauntletModalGame";

interface Props {
  user: Users.User;
  claims: CringePG.GauntletClaim[];
}

export const GauntletUserModal: FC<Props> = ({ claims, user }) => {
  return (
    <div>
      <div className="gauntlet-modal-heading">
        <h2 className="gauntlet-modal-user-name">{user.name}</h2>
        <div className="gauntlet-modal-games-count-container">
          <p className="gauntlet-modal-games-count-item">{`Пройдено: ${
            claims.filter(
              (n) => n.status === "completed" || n.status === "coop"
            ).length
          }`}</p>
          <p className="gauntlet-modal-games-count-item">{`Дропнуто: ${
            claims.filter((n) => n.status === "dropped").length
          }`}</p>
        </div>
      </div>
      <div className="gauntlet-modal-games-list">
        {claims.map((claim, index) => (
          <GauntletModalGame claim={claim} index={claims.length - index} />
        ))}
      </div>
    </div>
  );
};
