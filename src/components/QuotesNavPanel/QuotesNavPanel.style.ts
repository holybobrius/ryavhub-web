import styled from "styled-components";

export const QuotesNavButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  font-size: 28px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #fff;
    border: 1px solid #fff;
  }
  margin-right: 240px;
`;

export const QuotesNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  position: fixed;
  left: 3vw;
  top: 80vh;
`;
