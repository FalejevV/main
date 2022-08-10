import React from "react";
import styled from "styled-components";
import closeIcon from "./img/icon-close.svg";
import rulesImage from "./img/image-rules.svg";

const DarkenPage = styled.div`
    position: absolute;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    background-color: black;
    opacity: 0.65;
    z-index: 999;
`

const Container = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    width:400px;
    height:415px;
    background-color: #FFFFFF;
    border-radius: 10px;
    z-index: 1000;
    padding:25px 35px;

    @media (max-width:560px){
        width:100vw;
        height:100vh;
        align-items: center;
        justify-content: center;
        gap:50px;
    }
`

const TitleContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: auto;

    @media (max-width:560px){
        flex:unset;
    }
`

const RulesTitle = styled.p`
    font-family: 'Barlow Semi Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #3B4262;
    padding-bottom: 10px;
    @media (max-width:560px){
        width:100%;
        text-align: center;
    }
`

const CloseButton = styled.img`
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        filter: saturate(1000%);
    }

    @media (max-width:560px){
        position: absolute;
        bottom:50px;
        left:50%;
        transform: translateX(-50%);
    }
`

const RulesInfoImage = styled.img`

`



function RPSRules(props){
    return (
        <>
            <DarkenPage></DarkenPage>
            <Container>
                <TitleContainer>
                    <RulesTitle>RULES</RulesTitle>
                    <CloseButton onClick={props.close} src={closeIcon} />
                </TitleContainer>
                <RulesInfoImage src={rulesImage}/>
            </Container>
        </>
    )
}

export default RPSRules;