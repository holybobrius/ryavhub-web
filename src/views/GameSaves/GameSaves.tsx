import { FC } from "react";
import SaveCard from "../../components/SaveCard/SaveCard";
import NavButtons from "../../components/NavButton/NavButtons";
import "./GameSaves.css";
import { useGamesaves } from "../../requests/gamesaves/useGamesaves";

const GameSaves: FC = () => {
  const gamesaves = useGamesaves();
  return (
    <section className="section-saves">
      {gamesaves.map((save) => (
        <SaveCard
          key={save.id}
          title={save.name}
          description={save.year.toString()}
          imageAlt={save.name}
          images={save.imgs}
          size={save.size}
          link={save.download_link}
          total={gamesaves.length}
          index={gamesaves.indexOf(save)}
        />
      ))}
      <NavButtons total={gamesaves.length} />
    </section>
  );
};
export default GameSaves;
