import styled, { keyframes } from "styled-components";
import { Page } from "../Page/Page.styles";

const slideIn = keyframes`
  from {
    background-position: -100% 0;
  }
  to {
    background-position: 0 0;
  }
`;

export const SaveCardContainer = styled.div<{ url: string }>`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ImagesContainer = styled.div<{
  currIndex: number;
  imagesCount: number;
}>`
  translate: calc(-${(props) => props.currIndex} * 100vw);
  display: flex;
  overflow-x: hidden;
  width: calc(${(props) => props.imagesCount} * 100vw);
  transition: 300ms ease;
`;

export const SaveCardContentContainer = styled(Page)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-bottom: 9rem;
  width: 100%;
  align-items: end;
  position: relative;
`;

export const TitleBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 1380px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  width: 100vw;
  height: 35rem;

  filter: blur(57.25px);
`;

export const GameSaveInfoContainer = styled.div`
  display: flex;
  padding: 2.2rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  gap: 2rem;
  flex-direction: column;
  height: fit-content;
  z-index: 999;
`;

export const GameSaveInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameSaveInfoItem = styled.div`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SaveCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const SaveCardTitle = styled.h2`
  font-size: 15.2rem;
  margin: 0;
  font-weight: 900;
  align-self: end;
  z-index: 99;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1440px) {
    font-size: 12rem;
  }
`;

export const SaveCardTextInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SaveCardTextInfoItem = styled.div`
  width: 14.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
`;

export const SaveCardTextInfoDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 1rem 0;
`;

export const SaveCardTextInfoLabel = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const SaveCardTextInfoValue = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const DownloadButton = styled.button`
  padding: 1.6rem 0;
  background-color: transparent;
  outline: none;
  width: 100%;
  justify-content: center;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const CarouselContainer = styled.div`
  grid-column: 2 / 3;
  width: 49vw;
`;
