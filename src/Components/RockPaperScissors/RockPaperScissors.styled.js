import styled from "styled-components";

export const Page = styled.div`
    background: radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%);
    min-width: 100vw;
    max-width: 100vw;
    overflow: hidden;
    min-height: 100vh;
    max-height: 100vh;
    padding:40px;
    gap:64px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Barlow Semi Condensed', sans-serif;
    padding:20px;
`

export const Header = styled.div`
    width:100%;
    max-width:700px;
    height:150px;

    border: 3px solid rgba(255, 255, 255, 0.289199);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:18px 24px;
    gap:20px;

    @media (max-width:560px){
        padding:10px;
        height:96px;
    }
`

export const Title = styled.h1`
    color:white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 38px;
    line-height: 31px;

    @media (max-width:560px){
        font-size: 21px;
        line-height: 16px;
    }

`

export const Score = styled.div`
    width:150px;
    height:114px;
    background: linear-gradient(0deg, #F3F3F3 0%, #FFFFFF 100%);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;

    @media (max-width:560px){
        width:80px;
        height:72px;
    }

`

export const ScoreText = styled.p`
    color: #2A45C2;
    font-size: 16px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 1.5625px;

    @media (max-width:560px){
        font-size: 10px;
        line-height: 12px;
    }


`

export const ScoreValue = styled.p`
    color:#565468;
    letter-spacing: 3px;
    font-size: 57px;
    font-weight: 700;
    line-height: 45px;

    @media (max-width:560px){
        font-size: 40px;
        line-height: 40px;
    }

`

export const PickGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px 200px;
    row-gap: 25px;
    column-gap: 60px;
    padding:30px;
    z-index: 10;
    justify-items: center;
    align-items: center;
    background-image: url(${({ bgImage }) => bgImage || ""});
    background-repeat: no-repeat;
    background-position: 50% 55%;

    @media (max-width:560px){
        grid-template-columns: 130px 130px;
        grid-template-rows: 130px 130px;
        background-position: 50% 70%;
        background-size: 70%;
    }
`

export const RulesButton = styled.button`
    background-color: transparent;
    border: 1px solid lightgrey;
    padding:10px 40px;

    color:white;
    position:absolute;
    font-size: 16px;
    letter-spacing: 3px;
    bottom : 32px;
    right:32px;
    border-radius: 8px;
    cursor:pointer;
    transition: all 0.3s;
    &:hover{
        background-color: white;
        color:black;
    }

    @media (max-width:560px){
        left:50%;
        transform: translateX(-50%);
    }
`