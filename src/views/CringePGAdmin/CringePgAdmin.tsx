import { Button, Input, Select } from "antd";
import "./CringePgAdmin.css";
import { useState } from "react";
import { CringePG } from "../../types/types";
import { useUsers } from "../../requests/users/useUsers";
import { useUser } from "../../requests/user/useUser";
import { useCringePG } from "../../requests/cringepg/useCringePG";

export const CringePgAdmin = () => {
  const users = useUsers();
  const user = useUser();

  const initialGameState: CringePG.ClaimedGaunletGame = {
    game_id: 0,
    user_id: user?.id ?? 0,
    status: CringePG.GameStatus.New,
    comment: "",
  };

  const [game, setGame] =
    useState<CringePG.ClaimedGaunletGame>(initialGameState);

  const { allGames } = useCringePG();

  const { TextArea } = Input;

  const usersItems = users
    .filter((n) => n.gauntlet && n.name !== "Сусанин")
    .map((n) => ({
      value: n.id,
      label: n.name,
    }));

  const statusOptions = [
    {
      value: "New",
      label: "Новая",
    },
    {
      value: "Completed",
      label: "Пройдена",
    },
    {
      value: "Coop",
      label: "Кооп",
    },
    {
      value: "Dropped",
      label: "Дропнуто",
    },
    {
      value: "Waitlisted",
      label: "В очереди",
    },
    {
      value: "Rerolled",
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
        <h4>Добавить игру</h4>
        <Select
          filterOption={filterOption}
          showSearch
          style={{ width: 400 }}
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
            <Select options={usersItems} style={{ width: 180 }} />
          </div>
          <div className="inputs-container-item">
            <label>Статус</label>
            <Select
              options={statusOptions}
              defaultValue="new"
              style={{ width: 180 }}
            />
          </div>
        </div>
        <TextArea style={{ width: 400 }} autoSize placeholder="Комментарий" />
        <Button
          type="primary"
          size={"large"}
          className="send-game"
          style={{ width: 400 }}
        >
          Отправить
        </Button>
      </div>
    </section>
  );
};
