import {FC} from "react";
import styled from 'styled-components'

// Styles
const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    
`;

const Half = styled.div`
    height: 100%; width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MemeCard = styled.img`
    width: 350px;
    height: 450px;
    /* meme possibility */
`;

const Blue = styled.div`
    height: 50%; 
    background-color: blue;
`;

const Yellow = styled.div`
    height: 50%; 
    background-color: yellow;
`;

const BioCard = styled.div`
    color: #fff;
    font-family: 'Basis Grotesque Pro';
    display: flex;
    flex-direction: column;
`;

const BioCardTitle = styled.div`
    font-size: 8rem;
    font-weight: bold;
`;

const BioCardText = styled.div`
    text-align: center;
    font-size: 1.5rem;
`;

const GenerateButton = styled.button`
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    border-style: none;
    border: 1px solid #aaa;
    color: #aaa;
    border-radius: 15px;
    padding: 7px;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
        background-color: #aaa;
        color: #191B1F;
    }
`;

const Home: FC = () => {
    return (
        <HomeContainer>
            <Half>
                <MemeCard src="https://i.imgur.com/aXyJDID.png">
                </MemeCard>
            </Half>
            <Half>
                <BioCard>
                    <BioCardTitle>
                        РявХаб
                    </BioCardTitle>
                    <BioCardText>
                        <p>
                            Место для истории
                        </p>
                        <GenerateButton>Сгенерировать цитату</GenerateButton>
                    </BioCardText>
                </BioCard>
            </Half>
        </HomeContainer>
    );
}
export default Home
