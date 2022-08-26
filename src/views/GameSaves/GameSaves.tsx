import { FC, useState, useEffect } from "react";
import SaveCard from "../../components/SaveCard/SaveCard";
import axios from "axios";
import NavButtons from "../../components/NavButton/NavButtons";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import LockedHome from "../LockedHome/LockedHome";
import { gamesavesRequest } from "../../requests/gamesaves";
import { Gamesaves } from "../../types/types";
import "./GameSaves.css";

const GameSaves: FC = () => {
  const [saves, setSaves] = useState<Gamesaves.Gamesave[]>([]);
  useEffect(() => {
    gamesavesRequest().then(({ payload }) => setSaves(payload.reverse()));
  }, []);

  return (
    <section className="section-saves">
      {saves.map((save) => (
        <SaveCard
          key={save.id}
          title={save.name}
          description={save.year.toString()}
          imageAlt={save.name}
          images={save.imgs}
          size={save.size}
          link={save.download_link}
          total={saves.length}
          index={saves.indexOf(save)}
        />
      ))}
      <NavButtons total={saves.length} />
    </section>
  );
};
export default GameSaves;
