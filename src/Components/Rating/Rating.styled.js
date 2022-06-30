import styled from "styled-components";

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #131518;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;

`

export const Container = styled.div`
    width:100%;
    height:100%;
    max-width: 412px;
    max-height: 416px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: 30px;

    padding:32px;

    ${({ submitted }) => submitted && `
        padding:45px;
    `}
    @media (max-width:380px){
        max-height: 600px;
        height:  fit-content;
        padding:24px;

        ${({ submitted }) => submitted && `
            padding:34px;
        `}
    }
`

export const RatingIcon = styled.svg`
    width:16.75px;
    height:18px;
    padding: 16px;

    box-sizing: content-box;
    border-radius: 50%;
    background-color: #262E38;;
    margin-bottom: 30px;

    @media (max-width:380px){
        transform: scale(0.8);
        margin-bottom: 16px;
    }
`

export const RatingCircleContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RatingCircle = styled.button`
    width:51px;
    height:51px;
    background-color: #262E38;
    cursor: pointer;
    border-radius: 50%;

    font-family: 'Overpass', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #7C8798;

    transition: all 0.3s;
    &:hover{
        background-color: #FC7614;
        color: #FFFFFF;
    }

    ${({ selected }) => selected && `
        color: #FFFFFF;
        background-color: #7C8798;
        &:hover{
            color: #FFFFFF;
            background-color: #7C8798;
        }
    `}

    margin-bottom: 32px;

    @media (max-width:380px){
        width:42px;
        height:42px;
        font-size: 14px;
        line-height: 24px;
        font-size: 14px;
        line-height: 24px;
    }
`

export const SubmitButton = styled.button`
    border:0px;
    background-color: #FC7614;
    border-radius: 22.5px;
    width:100%;
    height:45px;

    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;

    color: #FFFFFF;

    cursor: pointer;
    
    transition: all 0.3s;
    &:hover{
        color: #FC7614;
        background-color: #FFFFFF;
    }
`

export const SubmittedIcon = styled.svg`
    width:162px;
    height:108px;
    display: flex;
    margin:0 auto;
    margin-bottom: 32px;

    @media (max-width:380px){
        transform: scale(0.888);
    }
`

export const RatingResult = styled.p`
    width:193px;
    height:32px;

    background-color: #262E38;
    border-radius:22px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;

    text-align: center;
    color: #FC7614;

    margin-bottom: 32px;

    @media (max-width:380px){
        width:168px;
        font-size: 14px;
        line-height: 22px;
    }
`