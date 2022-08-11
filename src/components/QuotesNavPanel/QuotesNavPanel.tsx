import { FC } from "react";
import * as Styled from "./QuotesNavPanel.style";

interface Props {
  changeVisibility: any;
}

const QuotesNavPanel: FC<Props> = (props) => {
  const scrollToTop = () => {
    document.querySelector(".app")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(window);
  };

  return (
    <Styled.QuotesNavContainer>
      <Styled.QuotesNavButton onClick={scrollToTop}>
        &uarr;
      </Styled.QuotesNavButton>
      <Styled.QuotesNavButton onClick={props.changeVisibility}>
        +
      </Styled.QuotesNavButton>
    </Styled.QuotesNavContainer>
  );
};

export default QuotesNavPanel;
