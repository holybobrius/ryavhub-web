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

const MemeCard = styled.div`
    width: 350px;
    height: 450px;
    /* meme possibility */
    display: flex;
    flex-direction: column;
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
    color: #669335;
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
`;

const BioCardTitle = styled.div`
    font-size: 5rem;
`;

const BioCardText = styled.div`

`;

const Home: FC = () => {
    return (
        <HomeContainer>
            <Half>
                <MemeCard>
                    <Blue />
                    <Yellow />
                </MemeCard>
            </Half>
            <Half>
                <BioCard>
                    <BioCardTitle>
                        РявХаб
                    </BioCardTitle>
                    <BioCardText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla iaculis justo a mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <p>
                            Duis lacinia accumsan ullamcorper. Vivamus a sapien fringilla sapien convallis vestibulum sed non sapien. Praesent auctor, est nec dignissim rhoncus, mauris ex scelerisque est, eu vestibulum nulla tellus quis dolor.
                        </p>
                        <p>
                            Vestibulum a interdum urna. Cras luctus ligula tincidunt nulla pellentesque auctor. Quisque vehicula venenatis tortor vel efficitur.
                        </p>
                    </BioCardText>
                </BioCard>
            </Half>
        </HomeContainer>
    );
}
export default Home
