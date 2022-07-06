import styled from "styled-components";

const textColor = ["white", "black", "#FEDF37"];
const equalNSlider = ["#D13F30", "#C85401", "#00DECF"];
const calculatorBody = ["#252D44", "#D5CCCD", "#1E0836"];
const display = ["#181F32", "#EEEEEE", "#1E0836"];
const background = ["#3B4664", "#E6E6E6", "#17062A"];
const buttons = ["#E7E5D9", "#E5E4DF", "#331B4D"];
const buttonBorder = ["#ABA6A2", "#A39A91", "#86209D"];
const buttonText = ["#444A58", "black", "#FEDF37"];

const accentButton = ["#647299", "#3A8088", "#56077C"];
const accentBorder = ["#414D75", "#2F5B64", "#A924D7"];
const equalBorder = ["#8F2316", "#893A02", "#6DFAF1"];
const equalText = ["white", "white", "black"];

export const Page = styled.div`
    background-color: ${({ themeId }) => background[themeId] || "white"};
    width:100vw;
    min-height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    transition: all 0.3s;
`
export const Container = styled.div`
    max-width:540px;
    width:100%;
    display: flex;
    flex-direction:column;
    gap:30px;
    padding:20px;
`
export const TopBar = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`

export const Text = styled.p`
    color: ${({ themeId }) => textColor[themeId] || "white"};
    font-size: ${({ fontSize }) => fontSize || "16px"};
    padding-bottom: ${(paddingBottom) => paddingBottom || "0px"};
    flex: ${({ flex }) => flex || "0 1 auto"};
    transition: all 0.3s;
`

export const ThemeControllerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    flex-direction: column;
    gap:5px;
    margin-left:40px;
    margin-right: 10px;
    cursor:pointer;
`

export const ThemeNumbers = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const ThemeSlider = styled.div`
    width:140%;
    height:20px;
    background-color: ${({ themeId }) => calculatorBody[themeId] || "white"};
    filter:brightness(0.9);
    border-radius: 15px;
    position:relative;
    transition: all 0.3s;
    &:after{
        transition: all 0.3s;
        content:"";
        width:15px;
        height:15px;
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        border-radius:50%;
        background-color: transparent;
    };

    &:hover{
        &:after{
            filter:brightness(1.4);
        }
    }
    ${({ themeId }) => {
        if(themeId === 0) {
            return `
                &:after{
                    left:5px;
                    transform:translate(0px, -50%);
                    background-color: ${equalNSlider[themeId]};
                }
            `
        }else if(themeId === 1) {
            return `
                &:after{
                    background-color: ${equalNSlider[themeId]};
                }
            `
        }else if(themeId === 2) {
            return `
                &:after{
                    left:auto;
                    right:5px;
                    transform:translate(0px, -50%);
                    background-color: ${equalNSlider[themeId]};
                }
            `
        }
    }}
`

export const Display = styled.div`
    color: ${({ themeId }) => textColor[themeId] || "white"};
    font-size: ${({ fontSize }) => fontSize || "16px"};
    padding-bottom: ${(paddingBottom) => paddingBottom || "0px"};
    flex: ${({ flex }) => flex || "0 1 auto"};
    transition: all 0.3s;
    width:100%;
    height:130px;
    background-color: ${({ themeId }) => display[themeId] || "white"};
    border-radius: 15px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    font-size:55px;
    padding: 10px 35px;
    padding-top:15px;
    position: relative;

    @media (max-width: 450px){
        height:100px;
    }
`

export const KeyboardContainer = styled.div`
    display:grid;
    justify-content: space-between;
    align-items: space-between;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(5,1fr);
    height: 480px;
    width:100%;
    background-color: ${({ themeId }) => calculatorBody[themeId] || "white"};
    border-radius: 15px;
    transition: all 0.3s;
    gap:25px;
    padding:25px;

    @media (max-width: 450px){
        gap:10px;
    }
`

export const Button = styled.button`
    width:100%;
    height:100%;
    background-color: ${({ themeId }) => buttons[themeId] || "white"};
    border-radius: 15px;
    border-bottom: 4px solid ${({ themeId }) => buttonBorder[themeId] || "white"};
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top:8px;
    font-size: 38px;
    font-weight: 800;
    font-family: 'League Spartan', sans-serif;
    color: ${({ themeId }) => buttonText[themeId] || "white"};
    transition: all 0.3s;
    ${({ doubleSize }) => doubleSize && `
        grid-column: span 2;
    `}
    ${({ accentColor, themeId }) => accentColor && `
        background-color: ${accentButton[themeId]};
        border-bottom: 4px solid ${accentBorder[themeId]};
        color: white;
        font-size:30px;
    `}

    ${({ mainButton,themeId }) => mainButton && `
        background-color: ${equalNSlider[themeId]};
        border-bottom: 4px solid ${equalBorder[themeId]};
        color: ${equalText[themeId]};
    `}

    &:hover{
        filter:brightness(1.4);
    }
`

export const OperationIndicator = styled.p`
    position: absolute;
    left:10px;
    top:50%;
    transform: translate(0,-50%);
    color: gray;
`