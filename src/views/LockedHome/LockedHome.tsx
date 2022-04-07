import { FC } from "react";
import * as Styled from './LockedHome.style'
import LoginButton from "../../components/LoginButton/LoginButton";


const LockedHome: FC = () => {
    return (
        <Styled.HomeContainer>
            <Styled.Half>
                <Styled.MemeCard src="https://i.imgur.com/HQZtu5A.png">
                </Styled.MemeCard>
            </Styled.Half>
            <Styled.Half>
                <Styled.BioCard>
                    <Styled.BioCardTitle>
                        РявХаб
                    </Styled.BioCardTitle>
                    <Styled.BioCardText>
                        {<p>
                            Дружище, дальше придется залогиниться.
                        </p>}
                        <div>
                            <LoginButton />
                        </div>
                    </Styled.BioCardText>
                </Styled.BioCard>
            </Styled.Half>
        </Styled.HomeContainer>
    );
}
export default LockedHome