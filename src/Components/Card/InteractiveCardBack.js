import React from "react";
import styled from "styled-components";

import cardBack from "./img/bg-card-back.png";

const Container = styled.div`
    background-image: url(${cardBack});
    padding:55px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Space Grotesk', sans-serif;
    max-width: 450px;
    width:100%;
    height: 250px;
    background-repeat: no-repeat;
    align-self: flex-end;
    padding-bottom: 65px;
    object-fit: cover;
    overflow: hidden;
    @media (max-width: 1060px){
        max-width: 290px;
        max-height: 160px;
        background-size: 290px 160px;
        padding:40px;
        padding-bottom: 45px;
    }
`

const CardCode = styled.p`
    color:white;
    font-size: 13px;
    letter-spacing: 3px;

    @media (max-width: 1060px){
        font-size:10px;
    }
`

function InteractiveCardBack(props){
    return(
        <Container>
            <CardCode>{props.code || "000"}</CardCode>
        </Container>
    )
}

export default InteractiveCardBack;