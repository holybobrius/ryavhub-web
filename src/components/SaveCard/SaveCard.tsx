import * as Styled from "./SaveCard.style";
import "./SaveCard.css";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  size: string;
  link: string;
  images: string[];
  imageAlt: string;

  total: number;
  index: number;
}
const SaveCard: FC<Props> = (props) => {
  return (
    <div
      className={`save-card ${props.index % 2 !== 0 ? "inverted" : ""}`}
      id={`card${props.index}`}
    >
      {props.index % 2 === 0 ? "" : ""}
      <div className="text-box">
        <p className="save-title">{props.title}</p>
        <div className="info-box">
          <div className="separator" />
          <div className="info-item">
            <span>Год</span>
            <p>{props.description}</p>
          </div>
          <div className="separator" />
          <div className="info-item">
            <span>Версия</span>
            <p>1.16</p>
          </div>
          <div className="separator" />
          <div className="info-item">
            <span>Размер</span>
            <p>{props.size}</p>
          </div>
          <div className="separator" />
        </div>
        <a href={props.link} className="download-btn">
          Скачать
          <svg
            className="download-icon"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 5.58584V26H0V0.00872152C0.0767665 0.00465147 0.116313 0 0.15993 0C2.61413 0 5.06833 0.00193811 7.52254 0.00581434C7.6427 0.016631 7.75469 0.0712671 7.83716 0.159313C9.38567 1.83927 10.929 3.52407 12.467 5.21372C12.5662 5.33171 12.6912 5.42529 12.8324 5.4872C12.9736 5.5491 13.1272 5.57768 13.2812 5.57072C17.4111 5.56375 21.5402 5.56258 25.6685 5.56723C25.7813 5.56782 25.8907 5.58177 26 5.58584ZM13.4586 19.7688V19.4478C13.4586 16.2581 13.4586 13.0685 13.4586 9.87915C13.4586 9.51459 13.2841 9.29772 13.002 9.29365C12.72 9.28958 12.5443 9.51285 12.5414 9.87508C12.5414 9.93322 12.5414 9.99137 12.5414 10.0495V19.7223L12.4623 19.7513C12.4084 19.6752 12.3501 19.6022 12.2879 19.5327C11.3678 18.6098 10.4466 17.6884 9.52428 16.7686C9.4498 16.6883 9.36445 16.6188 9.27072 16.5622C8.97528 16.3999 8.6025 16.6139 8.631 16.9471C8.65841 17.1181 8.73995 17.2758 8.86362 17.3971C10.082 18.6315 11.3114 19.8548 12.5379 21.0811C12.9003 21.4427 13.0968 21.4433 13.4568 21.084C14.6824 19.8583 15.9089 18.6317 17.1364 17.4041C17.2112 17.3368 17.2752 17.2584 17.326 17.1715C17.4225 16.9808 17.4027 16.7889 17.2445 16.6383C17.0986 16.4988 16.9183 16.4534 16.7328 16.5622C16.6399 16.62 16.5545 16.6891 16.4786 16.768C15.5481 17.694 14.6205 18.6208 13.6958 19.5484C13.6325 19.6095 13.5656 19.6688 13.4586 19.7688Z"
              fill="white"
            />
            <path
              d="M25.9989 5C25.8932 4.99445 25.7875 4.98336 25.6812 4.98336C21.7552 4.98336 17.8291 4.9848 13.9031 4.98767C13.8152 4.99281 13.7274 4.97505 13.647 4.93584C13.5666 4.89663 13.4958 4.83709 13.4404 4.7621C12.9749 4.18644 12.497 3.6225 12 3.02589C12.061 3.0135 12.1225 3.00486 12.1844 3H25.9022C25.9348 3 25.9674 3.00555 26 3.00801L25.9989 5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <div className={`imgs-box`}>
        <img
          className="primary-img save-img"
          src={props.images[0]}
          alt={props.imageAlt}
        />
        <img
          className="secondary-img save-img"
          src={props.images[1]}
          alt={props.imageAlt}
        />
        <img
          className="secondary-img save-img"
          src={props.images[2]}
          alt={props.imageAlt}
        />
        <img
          className="secondary-img save-img"
          src={props.images[3]}
          alt={props.imageAlt}
        />
      </div>
    </div>
    // <Styled.CardContainer id={`card${props.index}`}>
    //     <Styled.Images>
    //         <Styled.PrimaryImage src={props.images[0]} alt={props.imageAlt}/>
    //         <Styled.SecondaryImages>
    //             <Styled.SecondaryImage src={props.images[1]}/>
    //             <Styled.SecondaryImage src={props.images[2]}/>
    //             <Styled.SecondaryImage src={props.images[3]}/>
    //         </Styled.SecondaryImages>
    //     </Styled.Images>
    //     <Styled.Info>
    //         <Styled.TextInfo>
    //             <Styled.SaveName>{props.title}</Styled.SaveName>
    //             <Styled.SaveYear>{props.description}</Styled.SaveYear>
    //             {/*<button onClick={onClick}>1</button>
    //             <button onClick={onClick}>2</button>
    //             <button onClick={onClick}>3</button>*/}
    //         </Styled.TextInfo>
    //         <a href={props.link} target="_blank" rel="noreferrer">
    //             <Styled.DownloadButton>СКАЧАТЬ ({props.size})</Styled.DownloadButton>
    //         </a>
    //     </Styled.Info>
    // </Styled.CardContainer>
  );
};
export default SaveCard;
