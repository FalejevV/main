import styled from "styled-components";

const themeBGColors = ["#F87070", "#70F3F8", "#D881F8"];
const themeFonts = ["'Kumbh Sans', sans-serif", "'Roboto Slab', serif", "'Space Mono', monospace"];

export const Page = styled.div`
    max-width: 100vw;
    width:100%;
    background-color: #1E213F;
    min-height: 100vh;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 450px;
    padding: 48px 20px;
    margin: 0 auto;
    gap:45px;
`

export const TitlePomodoro = styled.h1`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;

    color: #D7E0FF;
`

export const StateContainer = styled.div`
    max-width: 373px;
    width:100%;
    height:63px;
    background: #161932;
    border-radius: 31.5px;
    padding:8px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StateElement = styled.div`
    width:32%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    background-color: transparent;
    color: #D7E0FF;
    opacity:0.4;
    border-radius: 26.5px;
    font-family: ${({ theme }) => themeFonts[theme.font] || "arial"};
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;

    &:hover{
        opacity:1;
    }
    ${({ active,theme }) => active && `
        color: #1E213F;
        background-color: ${themeBGColors[theme.bgColors] || "white"};
        opacity:1;

        &:hover{
            opacity:1;
        }
    `}

    @media (max-width: 470px){
        font-size: 12px;
    }

`

export const TimerContainer = styled.div`
    width:410px;
    height:410px;
    background: linear-gradient(315deg, #2E325A 0%, #0E112A 100%);
    box-shadow: -50px -50px 100px #272C5A, 50px 50px 100px #121530;
    border-radius: 50%;
    padding: 22px;
    margin-bottom: 10px;
    transition: all 0.3s;
    @media (max-width: 470px){
        width:300px;
        height:300px;
    }
`

export const TimerBackground = styled.div`
    background-color: #161932;
    width:100%;
    height:100%;
    border-radius: 50%;
`
export const SvgCircle = styled.svg`
    width:100%;
    height:100%;
    border-radius: 50%;
    transition: all 0.3s;
    
    path{
        stroke: ${({ theme }) => themeBGColors[theme.bgColors] || "white"};
    }
`
export const TimerText = styled.text`
    fill:#D7E0FF;
    font-family: ${({ theme }) => themeFonts[theme.font] || "arial"};
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    letter-spacing: -1px;
    user-select: none;
`

export const StateText = styled.text`
    font-family: ${({ theme }) => themeFonts[theme.font] || "arial"};
    font-weight: 700;
    font-size: 5px;
    line-height: 20px;
    letter-spacing: 5px;
    fill: #D7E0FF;
    user-select: none;
    
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        fill:#F87070;
    }
`

export const SettingsSvg = styled.svg`
    width:48px;
    height:48px;
    cursor: pointer;
    padding:10px;
    opacity:0.5;
    transition: all 0.3s;

    &:hover{
        opacity:1;
    }
`


export const SettingsFog = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    min-height: 100vh;
    height:100%;
    background-color: black;
    opacity: 0.6;
`

export const SettingsContainer = styled.div`
    max-width: 540px;
    max-height: 464px;
    width:100%;
    height:100%;

    background: #FFFFFF;
    border-radius: 25px;

    position: absolute;
    top:155px;
    left:50%;
    transform: translateX(-50%);
    padding:34px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.3s;

    @media (max-width: 530px){
        max-width:330px;
        padding:25px 30px;
        max-height: 550px;
        top:45px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    position: relative;
    padding-bottom: 25px;
    margin-bottom: 28px;
    &:after{
        content: "";
        width:calc(70px + 100%);
        height:1px;
        background-color: #E3E1E1;
        position: absolute;
        bottom: 0;
        left:-35px;
    }

    @media (max-width: 530px){
        &:after{
            width:calc(55px + 100%);
            left:-27px;
        }
        margin-bottom: 18px;
        padding-bottom: 18px;
    }
`

export const SettingsTitle = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;

    color: #161932;
    user-select: none;

    @media (max-width: 530px){
        font-size: 24px;
    }
`

export const CloseSvg = styled.svg`
    width:14px;
    height:14px;
    opacity: 0.5;
    cursor: pointer;
    transition:  all 0.3s;
    &:hover{
        opacity: 1;
        transform: scale(1.4);
    }
`

export const TimeSelectionContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`

export const TimeSelectionTitle = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 5px;

    color: #161932;
    padding-bottom: 19px;
    @media (max-width: 530px){
        text-align: center;
    }
`

export const TimeInputContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    position: relative;
    padding-bottom: 25px;
    &:after{
        position: absolute;
        left:0;
        bottom: 0;
        content: "";
        width:100%;
        height:1px;
        background-color: #E3E1E1;
    }

    @media (max-width: 530px){
        flex-direction: column;
        gap:10px;

        padding-bottom: 20px;
    }

`

export const FontSelectionContainer = styled.div`
    padding-top: 25px;
    width:100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    gap:16px;
    position: relative;
    padding-bottom: 25px;
    &:after{
        position: absolute;
        left:0;
        bottom: 0;
        content: "";
        width:100%;
        height:1px;
        background-color: #E3E1E1;
    }

    @media (max-width: 530px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 20px 1fr;
        justify-content: center;
        justify-items: center;
        gap:15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
`

export const FontSelectionTitle = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 5px;
    flex:auto;

    color: #161932;
    @media (max-width: 530px){
        grid-column: 1/4;
        text-align: center;
    }
`

export const FontSelectionButton = styled.button`
    background-color: #EFF1FA;
    width: 40px;
    height: 40px;

    font-family: ${({ font }) => themeFonts[font] || "sans-serif"};
    font-style: normal;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: #1E213F;

    mix-blend-mode: normal;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    ${({ selected }) => selected && `
        background-color:black;
        color:white;
    `}
`

export const ColorSelectionContainer = styled(FontSelectionContainer)`
    &:after{
        background-color: transparent;
    }
`

export const ColorSelectionTitle = styled(FontSelectionTitle)`

`

export const ColorSelectionButton = styled(FontSelectionButton)`
    background-color:${({ color }) => themeBGColors[color] || "red"};
    position:relative;
    ${({ selected,checkIcon }) => selected && `
        &:after{
            width:15px;
            content:url(${checkIcon});
            position:absolute;
            top:32%;
            left:50%;
            transform:translate(-50%);
        }
    `}
`

export const ApplySettingsButton = styled.button`
    max-width:140px;
    width:100%;
    padding:15px 0px;
    transition:all 0.3s;
    font-family: ${({ font }) => themeFonts[font] || "arial"};
    background-color: ${({ color }) => themeBGColors[color] || "white"};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    /* identical to box height */
    text-align: center;

    color: #FFFFFF;

    border-radius: 25px;
    position:absolute;
    bottom:-20px;
    left:50%;
    transform:translateX(-50%);
    
    cursor:pointer;
    &:hover{
        filter:brightness(1.3);
    }
`