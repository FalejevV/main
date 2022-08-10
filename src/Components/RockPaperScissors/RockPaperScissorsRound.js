import React from "react";
import styled, {keyframes} from "styled-components";
import PickItem from "./PickItem";

const GameGrid = styled.div`
    display: grid;
    grid-template-columns: 250px 250px;
    grid-template-rows: 100px 300px;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    z-index: 10;
    column-gap: 120px;

    ${({ stretch }) => stretch && `
        grid-template-columns: 250px 200px 250px;


        @media (max-width:1000px){
            grid-template-columns: 60px 140px 60px;
        }


        @media (max-width:560px){
            grid-template-columns: 150px 150px;
            grid-template-rows: 32px 150px;
        }
    `};
    

    @media (max-width:560px){
        padding-top: 79px;
        grid-template-columns: 150px 150px;
        column-gap: 40px;
        grid-template-rows: 32px 150px;
    }
`
const PickText = styled.p`
    font-family: 'Barlow Semi Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    white-space: nowrap;
    /* identical to box height, or 133% */
    letter-spacing: 3px;

    color: #FFFFFF;

    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);

    @media (max-width:560px){
        font-size: 15px;
        line-height: 32px;
        grid-row: 2;
    }
`

const PendingAnimation = keyframes`
    0%{
        background-color: #4664F4;
    }
    33%{
        background-color: #EB9F0E;
    }
    66%{
        background-color: #DB2E4D;
    }
    100%{
        background-color: #4664F4;
    }
`


const PendingPick = styled.div`
    width:225px;
    height:225px;
    border-radius: 50%;
    opacity: 0.2;

    animation: 1s ${PendingAnimation} infinite ease-in;

    @media (max-width:1000px){
        width:160px;
        height:160px;
    }
    @media (max-width:560px){
        width:100px;
        height:100px;
    }
`

const WinContainer = styled.div`
    padding-top: 35px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap:15px;
    @media (max-width:560px){
        grid-row:3;
        grid-column: span 2;
        padding-top: 0px;
    }
`

const WinText = styled.p`
    font-family: 'Barlow Semi Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 67px;
    text-align: center;
    white-space: nowrap;
    color: #FFFFFF;

    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
`
const PlayAgainButton = styled.button`
    font-family: 'Barlow Semi Condensed';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.5px;

    color: #3B4262;

    background-color: white;

    padding: 10px 45px;
    border-radius: 7px;
    cursor: pointer;

    transition: all 0.3s;
    &:hover{
        color:#DB2E4D;
    }
`

const BlackDiv = styled.div`
    @media (max-width:560px){
        display: none;
    }
`
const picks = ["rock", "paper", "scissors"];

function getWinner(playerPick,housePick){
    if(playerPick === "rock"){
        if(housePick === "scissors"){
            return 1;
        }
        if(housePick === "paper"){
            return -1;
        }
        return 0;
    }else if (playerPick === "paper"){
        if(housePick === "rock"){
            return 1;
        }
        if(housePick === "scissors"){
            return -1;
        }
        else return 0;
    }else if (playerPick === "scissors"){
        if( housePick === "rock"){
            return -1;
        }
        if(housePick === "paper"){
            return 1;
        }
        return 0;
    }
}


function Round(props){
    let setHousePick = props.setHousePick;
    let housePick = props.housePick;
    let setScore = props.setScore;
    let playerPick = props.playerPick;
    let [roundFinished, setRoundFinished] = React.useState(false);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function nextRound(){
        setRoundFinished(false);
        setHousePick("");
        props.setPlayerPick("");
    }

    React.useEffect(() => {
        if(housePick === ""){
            setTimeout(() => {
                let randomPick = getRandomInt(3);
                setHousePick(picks[randomPick]);
                setRoundFinished(true);
            }, 2200); 
        }else{
            if(roundFinished){
                if(getWinner(playerPick,housePick) === 1){
                    setScore(prevScore => prevScore + 1);
                }else if(getWinner(playerPick,housePick) === -1){
                    setScore(prevScore => prevScore - 1);
                }
                setRoundFinished(false);
            }
        }
    }, [housePick, setHousePick, roundFinished, setScore, playerPick]);


    return(
        <GameGrid stretch={props.housePick !== ""}>
            <PickText>YOU PICKED</PickText>
            {props.housePick !== "" && <BlackDiv></BlackDiv>}
            <PickText>THE HOUSE PICKED</PickText>
            <PickItem winner={getWinner(playerPick,housePick) === 1} large pick={props.playerPick}/>
            {props.housePick !== "" && 
                <WinContainer>
                    <WinText>{getWinner(playerPick,housePick) === 1 ? "YOU WIN" : getWinner(playerPick,housePick) === -1 ? "YOU LOSE" : "TIE"}</WinText>
                    <PlayAgainButton onClick={nextRound}>PLAY AGAIN</PlayAgainButton>
                </WinContainer>
            }
            
            {props.housePick === "" ? 
                <PendingPick></PendingPick>
            :
                <PickItem large pick={props.housePick} winner={getWinner(playerPick,housePick) === -1} />
            }
        </GameGrid>
    )
}

export default Round;