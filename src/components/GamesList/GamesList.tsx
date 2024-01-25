import { FC } from "react";
import { CringePG } from "../../types/types";
import { useUsers } from "../../requests/users/useUsers";
import { GauntletUserCard } from "../GauntletUserCard/GauntletUserCard";
import "./GamesList.css";

interface Props {
  claims: CringePG.GauntletClaim[];
}

export const GamesList: FC<Props> = ({ claims }) => {
  const users = useUsers();

  console.log(
    users.filter((user) => user.gauntlet),
    claims
  );

  return (
    <div className="games-list-container">
      {users
        .filter((user) => user.gauntlet)
        .map((n) => (
          <GauntletUserCard
            user={n}
            claims={claims.filter((claim) => claim.user.id === n.id).reverse()}
          />
        ))}
    </div>
  );
};
