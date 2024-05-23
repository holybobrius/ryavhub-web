import { FC } from "react";
import SaveCard from "../../components/SaveCard/SaveCard";
import NavButtons from "../../components/NavButton/NavButtons";
import "./GameSaves.css";
import { useGamesaves } from "../../requests/gamesaves/useGamesaves";
import { SavesSection } from "./GameSaves.styles";
import { Page } from "../../components/Page/Page.styles";

const GameSaves: FC = () => {
  const gamesaves = useGamesaves();
  return (
    <SavesSection>
      {[...gamesaves].map((save) => (
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
    </SavesSection>
  );
};
export default GameSaves;
