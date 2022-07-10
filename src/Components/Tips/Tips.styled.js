import styled from "styled-components";

export const Page = styled.div`
    max-width:100vw;
    height:100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:80px;
    padding-bottom: 90px;
    background-color: #C5E4E7;
    font-family: 'Space Mono', monospace;

    @media (max-width:850px){
        justify-content: flex-start;
        gap:40px;
    }
`

export const Title = styled.h1`
    color:#406365;
    font-size: 24px;
    letter-spacing: 10px;
    text-align: center;
    padding-left: 10px;
    @media (max-width:850px){
        margin-top: 50px;
    }
`

export const Container = styled.div`
    max-width: 920px;
    max-height: 480px;
    width:100%;
    height:100%;
    background-color: white;
    border-radius: 25px;
    padding:30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:850px){
        flex-direction: column;
        max-height:unset;
        padding: 15px;
    }
`

export const CalculatorContainer = styled.div`
    width:100%;
    height:100%;
    border-radius: 15px;
    padding:17px;
    padding-right: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:25px;

    @media (max-width:850px){
        padding-right: 17px;
    }
`

export const ResultContainer = styled.div`
    width:100%;
    height:100%;
    background-color: #075154;
    border-radius: 15px;
    min-width: 400px;
    max-width:414px;
    width:100%;
    padding:40px 40px;
    display: flex;
    flex-direction: column;
    @media (max-width:850px){
        max-width: unset;
        min-width: unset;
        padding:30px 20px;
    }
`

export const ResetButton = styled.button`
    width:100%;
    height:50px;
    background-color: #0D686D;
    color:#076267;
    font-family: 'Space Mono', monospace;
    font-size:20px;
    border-radius: 5px;
    margin-top: auto;
    cursor: pointer;
    ${({ active }) => active && `
        color:#00474B;
        background-color: #26C2AD;
    `} 
`