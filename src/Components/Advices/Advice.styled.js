import styled from "styled-components";

export const Page = styled.div`
    background-color: #202632;
    width:100vw;
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    padding:10px;
`

export const AdviceContainer = styled.div`
    width:540px;
    height:fit-content;
    background-color: #313A49;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    padding:50px;
    position:relative;

    @media (max-width: 450px){
        padding:45px 30px;
    }
`

export const AdviceNumber = styled.p`
    color:#53FFAB;
    font-weight: 800;
    font-size: 13px;
    letter-spacing:4px;
    margin-bottom: 23px;

    @media (max-width: 450px){
        font-size: 10px;
    }
`

export const AdviceText = styled.p`
    color:#CFE4E9;
    font-weight: 800;
    font-size: 27px;
    text-align: center;
    line-height: 38px;
    margin-bottom: 45px;

    @media (max-width: 450px){
        font-size: 25px;
        margin-bottom: 25px;
    }
`

export const DecorationContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    gap:10px;
    margin-bottom: 20px;
`

export const HR = styled.hr`
    width:100%;
    height:1px;
    background-color: white;
    opacity:0.2;
`

export const BrickDecoration = styled.div`
    width:13px;
    height:16px;
    background-color: white;
    border-radius:5px;
`

export const AdviceButton = styled.button`
    width:65px;
    height:65px;
    background-color: #53FFAB;
    border-radius:50%;
    position:absolute;
    bottom:-32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    transition: all 0.3s;
    &:hover{
        -webkit-box-shadow: 0px 0px 50px 7px rgba(83,255,171,0.46); 
        box-shadow: 0px 0px 50px 7px rgba(83,255,171,0.46); 
    }
`

export const DiceIcon = styled.img`

`