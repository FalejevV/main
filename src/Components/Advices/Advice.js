import React from "react";
import { AdviceButton, AdviceContainer, AdviceNumber, AdviceText, BrickDecoration, DecorationContainer, DiceIcon, HR, Page } from "./Advice.styled";
import diceIcon from "./img/icon-dice.svg";

function Advice(){
    const [advice,setAdvice] = React.useState({
        "id" : "117",
        "advice": "It is easy to sit up and take notice, what's difficult is getting up and taking action."
    })

    function fetchAdvice(){
        fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 150)}`)
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
            .catch(error => fetchAdvice());
    }
    return(
        <Page>
            <AdviceContainer>
                <AdviceNumber>ADVICE #{advice.id}</AdviceNumber>
                <AdviceText>
                    “{advice.advice}”
                </AdviceText>
                <DecorationContainer>
                    <HR/>
                        <BrickDecoration/>
                        <BrickDecoration/>
                    <HR/>
                </DecorationContainer>
                <AdviceButton onClick={fetchAdvice}>
                    <DiceIcon src={diceIcon} alt="dice-icon" />
                </AdviceButton>
            </AdviceContainer>
        </Page>
    )
}

export default Advice;