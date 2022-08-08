import React from "react";
import styled from "styled-components";

import cardFrontImage from "./img/bg-card-front.png";
import cardLogo from "./img/card-logo.svg";

const CardContainer = styled.div`
    max-width: 450px;
    width:100%;
    max-height:250px;
    height:100%;
    background-image: url(${cardFrontImage});
    background-repeat: no-repeat;
    padding:30px;
    font-family: 'Space Grotesk', sans-serif;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 1060px){
        max-width: 290px;
        max-height: 160px;
        background-size: 290px 160px;
        position: absolute;
        top:90px;
        padding:20px;
    }

`

const CardLogo = styled.img`
    cursor: pointer;
    max-width:84px;
    max-height:47px;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.05);
    }
    margin-bottom: 65px;

    @media (max-width: 1060px){
        max-width: 55px;
        max-height:33px;
        margin-bottom: 35px;
    }
`

const CardNumber = styled.p`
    font-size: 27px;
    color:white;
    letter-spacing: 4px;
    margin-bottom: 28px;

    @media (max-width: 1060px){
        font-size:18px;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }
`

const CardNameDateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CardName = styled.p`
    text-transform: uppercase;
    color:white;
    font-size: 13px;
    letter-spacing: 3px;

    @media (max-width: 1060px){
        font-size:9px;
    }

`

const CardDate = styled(CardName)`
    
`

function InteractiveCard(props){
    let fixedNumber = "";
        props.number.split("").forEach(char => {
            if (char >= '0' && char <= '9') {
                fixedNumber += char;
            }else{
                fixedNumber = "";
                return;
            }
            if(fixedNumber.trim().replace(/\s/g, '').length % 4 === 0){
                fixedNumber += " ";
            }
        });
    
    return(
        <CardContainer>
            <CardLogo src={cardLogo} />
            <CardNumber>{fixedNumber || "0000 0000 0000 0000"}</CardNumber>
            <CardNameDateContainer>
                <CardName>{props.name || "Jane Appleseed"}</CardName>
                <CardDate>{props.month || "00"}/{props.year || "00"}</CardDate>
            </CardNameDateContainer>
        </CardContainer>
    )
}

export default InteractiveCard;