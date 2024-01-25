import { Button, Checkbox, Input, Select } from "antd";
import "./CringePgAdmin.css";
import { ChangeEvent, useState } from "react";
import { CringePG } from "../../types/types";
import { useUsers } from "../../requests/users/useUsers";
import { useUser } from "../../requests/user/useUser";
import { useCringePG } from "../../requests/cringepg/useCringePG";

const { TextArea } = Input;

export const CringePgAdmin = () => {
  const users = useUsers();
  const user = useUser();
  const { addNewClaim, addNewGame } = useCringePG();

  const initialClaimState: CringePG.ClaimedGaunletGame = {
    game_id: 0,
    user_id: user?.id ?? 0,
    status: CringePG.GameStatus.new,
    comment: "",
  };

  const initialGameState: CringePG.GauntletNewGame = {
    name: "",
    owners: [],
  };

  const [claim, setClaim] =
    useState<CringePG.ClaimedGaunletGame>(initialClaimState);

  const [game, setGame] = useState<CringePG.GauntletNewGame>(initialGameState);

  const handleGameNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGame({ ...game, name: event.target.value });
  };

  const handleGameOwnerChange = (checkedValues: string[]) => {
    setGame({ ...game, owners: checkedValues.map((n) => +n) });
  };

  const handleClaimGameNameChange = (value: string) => {
    setClaim({ ...claim, game_id: +value });
  };

  const handleClaimGameOwnerChange = (value: string) => {
    setClaim({ ...claim, user_id: +value });
  };

  const handleClaimGameStatusChange = (value: string) => {
    setClaim({ ...claim, status: value });
  };

  const handleClaimGameCommentChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setClaim({ ...claim, comment: event.target.value });
  };

  const { allGames } = useCringePG();

  const handleSendClaim = () => {
    addNewClaim(claim);
    setClaim(initialClaimState);
  };

  const handleSendGame = () => {
    addNewGame(game);
    setGame(initialGameState);
  };

  const usersItems = users
    .filter((n) => n.gauntlet && n.name !== "Сусанин")
    .map((n) => ({
      value: n.id.toString(),
      label: n.name,
    }));

  const statusOptions = [
    {
      value: "new",
      label: "Новая",
    },
    {
      value: "completed",
      label: "Пройдена",
    },
    {
      value: "coop",
      label: "Кооп",
    },
    {
      value: "dropped",
      label: "Дропнуто",
    },
    {
      value: "waitlisted",
      label: "В очереди",
    },
    {
      value: "rerolled",
      label: "Тех. реролл",
    },
  ];

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <section className="cringe-pg">
      <div className={"admin-forms-container"}>
        <h4>Добавить claim</h4>
        <Select
          filterOption={filterOption}
          showSearch
          style={{ width: 400 }}
          onChange={handleClaimGameNameChange}
          options={[...allGames]
            .sort((a, b) =>
              a.name
                .toLocaleLowerCase()
                .localeCompare(b.name.toLocaleLowerCase())
            )
            .map((n) => ({
              value: n.id.toString(),
              label: n.name,
            }))}
        />
        <div className="inputs-container">
          <div className="inputs-container-item">
            <label>Челик</label>
            <Select
              options={usersItems}
              style={{ width: 180 }}
              onChange={handleClaimGameOwnerChange}
            />
          </div>
          <div className="inputs-container-item">
            <label>Статус</label>
            <Select
              options={statusOptions}
              defaultValue="new"
              style={{ width: 180 }}
              onChange={handleClaimGameStatusChange}
            />
          </div>
        </div>
        <TextArea
          style={{ width: 400 }}
          autoSize
          placeholder="Комментарий"
          onChange={handleClaimGameCommentChange}
        />
        <Button
          type="primary"
          size={"large"}
          className="send-game"
          style={{ width: 400 }}
          onClick={handleSendClaim}
        >
          Отправить
        </Button>
      </div>
      <div className={"admin-forms-container"}>
        <h4>Добавить game</h4>
        <Input
          size="large"
          style={{ width: 400 }}
          placeholder="Название видеоразвлечения"
          onChange={handleGameNameChange}
        />
        <div className="inputs-container-item">
          <label>Чиё</label>
          <Checkbox.Group
            options={usersItems}
            style={{ color: "#fff" }}
            className={"users-checkboxes"}
            onChange={handleGameOwnerChange}
          />
        </div>
        <Button
          type="primary"
          size={"large"}
          className="send-game"
          style={{ width: 400 }}
          onClick={handleSendGame}
        >
          Отправить
        </Button>
      </div>
    </section>
  );
};
