import React from "react";
import { Header, Page, PickGrid, RulesButton, Score, ScoreText, ScoreValue, Title } from "./RockPaperScissors.styled";

import triangleImage from "./img/bg-triangle.svg";
import Round from "./RockPaperScissorsRound";
import PickItem from "./PickItem";
import RPSRules from "./RPSRules";

function RockPaperScissors(){
    const [myPick, setMyPick] = React.useState("");
    const [housePick, setHousePick] = React.useState("");
    const [scoreCounter, setScoreCounter] = React.useState(0);
    const [rules, setRules] = React.useState(false);

    return(
        <Page>
            <Header>
                <Title>ROCK <br/> PAPER <br/> SCISSORS</Title>
                <Score>
                    <ScoreText>SCORE</ScoreText>
                    <ScoreValue>{scoreCounter}</ScoreValue>
                </Score>
            </Header>
            {myPick === "" ?
            <>
                <PickGrid bgImage={triangleImage}>
                    <PickItem hover clickable pick="paper" setPick={setMyPick}/>
                    <PickItem hover clickable pick="scissors" setPick={setMyPick}/>
                    <PickItem hover clickable doSpan pick="rock" setPick={setMyPick}/>
                </PickGrid>
            </>
            :

            <>
                <Round setPlayerPick={setMyPick} setScore={setScoreCounter} housePick={housePick} setHousePick={setHousePick} playerPick={myPick} />
            </>

            }
            {rules && <RPSRules close={() => setRules(false)} />}
            <RulesButton onClick={() => setRules(true)}>RULES</RulesButton>
        </Page>
    )
}

export default RockPaperScissors;