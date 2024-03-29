import "./SaveCard.css";
import { FC } from "react";
import DownloadIcon from "../../assets/icons/download-icon.svg?react";

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
  return (
    <div
      className={`save-card ${index % 2 !== 0 ? "inverted" : ""}`}
      id={`card${index}`}
    >
      {index % 2 === 0 ? "" : ""}
      <div className="text-box">
        <p className="save-title">{title}</p>
        <div className="info-box">
          <div className="separator" />
          <div className="info-item">
            <span>Год</span>
            <p>{description}</p>
          </div>
          <div className="separator" />
          <div className="info-item">
            <span>Версия</span>
            <p>1.16</p>
          </div>
          <div className="separator" />
          <div className="info-item">
            <span>Размер</span>
            <p>{size}</p>
          </div>
          <div className="separator" />
        </div>
        <a
          href={link}
          className={link ? "download-btn" : "download-btn-blocked"}
        >
          {link ? "Скачать" : "Нельзя скачать("}
          {link && <DownloadIcon />}
        </a>
      </div>
      <div className={`imgs-box`}>
        <img className="primary-img save-img" src={images[0]} alt={imageAlt} />
        <img
          className="secondary-img save-img"
          src={images[1]}
          alt={imageAlt}
        />
        <img
          className="secondary-img save-img"
          src={images[2]}
          alt={imageAlt}
        />
        <img
          className="secondary-img save-img"
          src={images[3]}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};
export default SaveCard;
