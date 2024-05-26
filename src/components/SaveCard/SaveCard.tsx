import "./SaveCard.css";
import { FC, useState } from "react";
import DownloadIcon from "../../assets/icons/download-icon.svg?react";
import { Carousel, Image } from "antd";
import {
  CarouselContainer,
  DownloadButton,
  GameSaveInfoContainer,
  GameSaveInfoItem,
  GameSaveInfoTextContainer,
  ImagesContainer,
  SaveCardContainer,
  SaveCardContentContainer,
  SaveCardTextContainer,
  SaveCardTextInfoContainer,
  SaveCardTextInfoDivider,
  SaveCardTextInfoItem,
  SaveCardTextInfoLabel,
  SaveCardTextInfoValue,
  SaveCardTitle,
  TitleBackground,
} from "./SaveCard.styles";

type Props = {
  title: string;
  description: string;
  size: string;
  link: string | undefined;
  images: string[];
  imageAlt: string;
  total: number;
  index: number;
};

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SaveCard: FC<Props> = ({
  title,
  description,
  size,
  link,
  images,
  imageAlt,
  total,
  index,
}) => {
  const [currImage, setCurrImage] = useState(0);
  const onClick = () => {
    if (currImage === images.length - 1) {
      setCurrImage(0);
    } else {
      setCurrImage(currImage + 1);
    }
  };
  return (
    <div
      id={`card${index}`}
      style={{
        width: "100vw",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <ImagesContainer currIndex={currImage} imagesCount={images.length}>
        {images.map((n) => (
          <Image
            key={n}
            preview={false}
            style={{
              border: "none",
              height: "100vh",
              width: "100vw",
            }}
            src={n}
          />
        ))}
      </ImagesContainer>
      <SaveCardContainer url={images[currImage]}>
        <SaveCardContentContainer>
          <TitleBackground />
          <SaveCardTitle>{title}</SaveCardTitle>
          <GameSaveInfoContainer>
            <GameSaveInfoTextContainer>
              <GameSaveInfoItem>
                <SaveCardTextInfoValue>Год окончания</SaveCardTextInfoValue>
                <SaveCardTextInfoLabel>{description}</SaveCardTextInfoLabel>
              </GameSaveInfoItem>
              <SaveCardTextInfoDivider />
              <GameSaveInfoItem>
                <SaveCardTextInfoValue>Версия сейва</SaveCardTextInfoValue>
                <SaveCardTextInfoLabel>1.16</SaveCardTextInfoLabel>
              </GameSaveInfoItem>
              <SaveCardTextInfoDivider />
              <GameSaveInfoItem>
                <SaveCardTextInfoValue>Размер файла</SaveCardTextInfoValue>
                <SaveCardTextInfoLabel>{size}</SaveCardTextInfoLabel>
              </GameSaveInfoItem>
            </GameSaveInfoTextContainer>
            <a href={link} target={"_blank"} rel={"noreferrer"}>
              <DownloadButton>Скачать</DownloadButton>
            </a>
          </GameSaveInfoContainer>
        </SaveCardContentContainer>
      </SaveCardContainer>
    </div>
  );
};
export default SaveCard;
