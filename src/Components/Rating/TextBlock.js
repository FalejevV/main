import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`    
    display: flex;
    flex-direction: column;
    gap:15px;
    margin-bottom: 24px;

    ${({ center }) => center && `
        align-items: center;
        text-align: center;
    `}
`

const Title = styled.h1`
    font-family: 'Overpass', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;

    color: #FFFFFF;

    @media (max-width:380px){
        font-size: 24px;
        line-height: 30px;
    }
`

const Info = styled.p`
    font-family: 'Overpass', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;

    color: #969FAD;


    @media (max-width:380px){
        font-size: 14px;
        line-height: 22px;
    }
`

function TextBlock(props){
    return(
        <TextContainer center={props.center}>
            <Title>{props.title}</Title>
            <Info>{props.info}</Info>
        </TextContainer>
    )
}

export default TextBlock;