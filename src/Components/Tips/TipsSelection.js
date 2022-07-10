import styled from "styled-components";
import React from "react";

const TipsContainer = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    gap:15px;
`

const TipsTitle = styled.p`
    font-family: 'Space Mono', monospace;
    color:#607D79;
    font-size: 16px;
`

const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(60px,1fr));
    grid-template-rows: repeat(2, 1fr);

    column-gap: 15px;
    row-gap: 15px;

    @media (max-width:850px){
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, minmax(60px,1fr));
    }
`

const TipButton = styled.div`
    background-color: #00474B;
    padding:20px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    height:50px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    ${({ selected }) => selected && `
        background-color:#26C2AD;
        color:#00474B;
    `}
`

const TipInput = styled.input`
    background-color: #F6F7FB;
    border-radius: 5px;
    text-align: center;
    font-size: 25px;
    font-family: 'Space Mono', monospace;
    color:#00474B;
    &::placeholder{
        font-size: 23px;
        color:#4E6263;
        font-family: 'Space Mono', monospace;
        text-align: center;
    }
`

function TipsSelection(props){
    return(
        <TipsContainer>
            <TipsTitle>Select Tip %</TipsTitle>
            <ButtonGrid>
                <TipButton selected={props.value === "5"} onClick={(e) => props.onClick("5")}>5%</TipButton>
                <TipButton selected={props.value === "10"} onClick={(e) => props.onClick("10")}>10%</TipButton>
                <TipButton selected={props.value === "15"} onClick={(e) => props.onClick("15")}>15%</TipButton>
                <TipButton selected={props.value === "25"} onClick={(e) => props.onClick("25")}>25%</TipButton>
                <TipButton selected={props.value === "50"} onClick={(e) => props.onClick("50")}>50%</TipButton>
                <TipInput onChange={(e) => props.setCustomTip(e)} value={props.customValue} placeholder="Custom" type="text"/>
            </ButtonGrid>
        </TipsContainer>
    )
}

export default TipsSelection;