import { FC } from "react";
import { CringePG, Users } from "../../types/types";
import "./GauntletUserCard.css";

interface Props {
  user: Users.User;
  claims: CringePG.GauntletClaim[];
}

export const GauntletUserCard: FC<Props> = ({ user, claims }) => {
  return (
    <div className="gauntlet-card">
      <h2 className="gauntlet-card-heading">{user.name}</h2>
      <div className="gauntlet-card-games-list">
        {claims.map((n) => (
          <div className="gauntlet-card-games-list">
            <p className="gauntlet-card-games-list-item">{n.game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
