import '../styles/GameSaves.css';
import SaveCard from "../components/SaveCard"
import styled from 'styled-components'

// Styles

const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
justify-content: space-around;
column-gap: 10px;
row-gap: 20px;
`

const SavesContainer = styled.div`
    font-family: 'Oswald', sans-serif;
    text-align: center;
`

const Heading = styled.h1`
    margin-top: 10px;
    font-size: 5rem;
    color: var(--primary);
`

export default function GameSaves() {
    return (
        <SavesContainer>
            <Heading>Сейвы</Heading>
            <CardsContainer>
                <SaveCard 
                    title="SevTech" 
                    description="2020" 
                    imageAlt="SevTech" 
                    image="https://i.imgur.com/7sNvSfH.png" 
                    size="1.1GB"
                    link="https://mega.nz/file/7o9gEBxD#T-xSiZ_dZnuR5rSGt2xFgNNnpQfvYYjXL5grHnTp100">
                </SaveCard>
                <SaveCard 
                    title="Яма 8" 
                    description="2020" 
                    imageAlt="Яма 8" 
                    image="https://i.imgur.com/KeEcV7R.png" 
                    size="2.9GB" 
                    link="https://mega.nz/file/f1UiBL7C#_2ocFW80t45HM32aw4uWlUIBtMeVmwVBhflm2V-cY1c">
                </SaveCard>
            </CardsContainer>
        </SavesContainer>
    );
}

