import { FC } from "react";
import * as Styled from './LockedHome.style'
import LoginButton from "../../components/LoginButton/LoginButton";
import backgroundImg from '../../assets/images/background.png'


const LockedHome: FC = () => {
    return (
        <Styled.HomeContainer style={{backgroundImage: `url(${backgroundImg})`}}>
            <Styled.Half>
                <Styled.MemeCard src={require("../../assets/images/sadface.png")}>
                </Styled.MemeCard>
            </Styled.Half>
            <Styled.Half>
                <Styled.InfoWrapper>
                    <Styled.InfoTitle>
                        РявХаб
                    </Styled.InfoTitle>
                    <Styled.InfoText>
                            Дружище, дальше придется залогиниться
                    </Styled.InfoText>
                    <LoginButton />
                </Styled.InfoWrapper>
            </Styled.Half>
        </Styled.HomeContainer>
    );
}
export default LockedHome