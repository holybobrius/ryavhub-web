import {FC, useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'
import LoginButton from "../components/LoginButton";
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
    height: 450px;
    /* meme possibility */
`;

const BioCard = styled.div`
    color: #fff;
    font-family: 'Basis Grotesque Pro';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const LockedHome: FC = () => {
    return (
        <HomeContainer>
            <Half>
                <MemeCard src="https://i.imgur.com/HQZtu5A.png">
                </MemeCard>
            </Half>
            <Half>
                <BioCard>
                    <BioCardTitle>
                        РявХаб
                    </BioCardTitle>
                    <BioCardText>
                        {<p>
                            Дружище, дальше придется залогиниться.
                        </p>}
                        <div>
                            <LoginButton />
                        </div>
                    </BioCardText>
                </BioCard>
            </Half>
        </HomeContainer>
    );
}
export default LockedHome