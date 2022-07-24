import styled from "styled-components";

export const Page = styled.div`
    background-color: #1E1E2A;
    max-width: 100vw;
    width:100vw;
    min-height: 100vh;
    font-family: 'Red Hat Text', sans-serif;
`

export const Container = styled.div`
    padding-top: 140px;
    max-width: 1440px;
    height: fit-content;
    margin: 0 auto;
    background-image: url(${({ backgroundImage }) => backgroundImage || ""});
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:after{
        content: "";
        width:100%;
        max-width: 1440px;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        opacity: 0.2;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,196,255,0) 0%, rgba(91,0,36,0.2648460067620799) 100%); 
    }
`

export const LaunchTitle = styled.h1`
    font-size: 20px;
    color:white;
    letter-spacing: 9px;
    text-align: center;
    margin-bottom: 105px;

    @media screen and (max-width: 800px){
        font-size: 18px;
        padding:10px;
    }

`
export const TimerContainer = styled.div`
    display: flex;
    max-width: 690px;
    width:100%;
    max-height: 180px;
    height:100%;
    overflow: hidden;
    margin-bottom: 150px;
    justify-content: center;
    gap:35px;
    align-items: center;

    @media screen and (max-width: 800px){
        gap:15px;
    }
`

export const MountainsImage = styled.img`
    width:100%;
    z-index: 2;
    height:200px;
    @media screen and (max-width: 1440px){
        object-fit: cover;
    }
`

export const SocialIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 70px;
    left:50%;
    z-index: 20;
    transform: translate(-50%,0);
    gap:30px;
`

export const SocialIcon = styled.svg`
    width:24px;
    height:24px;
    cursor: pointer;
    transition: all 0.3s;
    path{
        transition: all 0.3s;
    }
    &:hover{
        path{
            fill:#F36283;
        }
    }
`
