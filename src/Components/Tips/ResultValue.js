import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    margin-bottom: 30px;

    @media (max-width:850px){
        margin-bottom: 10px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const Title = styled.p`
    color:white;
    font-family: 'Space Mono', monospace;
    font-size: 16px;
`
const SubTitle = styled.p`
    font-family: 'Space Mono', monospace;
    color:#25C5AD;
    opacity: 0.6;
    font-size: 13px;
`

const ResultText = styled.p`
    color:#21C3AC;
    font-family: 'Space Mono', monospace;
    font-size: 48px;

    @media (max-width:850px){
        font-size:35px;
    }
`

function ResultValue(props){
    return(
        <Container fat={props.fat || false}>
            <TextContainer>
                <Title>{props.title}</Title>
                <SubTitle>{props.subtitle}</SubTitle>
            </TextContainer>
            <ResultText>{props.result}</ResultText>
        </Container>
    )
}

export default ResultValue;