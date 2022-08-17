import React from "react";
import { Container, Page, StateContainer, StateElement, StateText,TimerText, SvgCircle, TimerBackground, TimerContainer, TitlePomodoro, SettingsSvg, SettingsContainer, SettingsFog, HeaderContainer, SettingsTitle, CloseSvg, TimeSelectionContainer, TimeSelectionTitle, TimeInputContainer, FontSelectionContainer, FontSelectionTitle, FontSelectionButton, ColorSelectionContainer, ColorSelectionTitle, ColorSelectionButton, ApplySettingsButton } from "./Pomodoro.styled";
import { ThemeProvider } from "styled-components";
import TimeInput from "./TimeInput";
import checkIcon from "./img/check-solid.svg";
import startSound from "./StartSound.mp3";
import pauseSound from "./PauseSound.flac";

const startAudio = new Audio(startSound);
startAudio.volume = 0.07;
const pauseAudio = new Audio(pauseSound);
pauseAudio.volume = 0.05;

function Pomodoro(){
    const [theme,setTheme] = React.useState({
        bgColors:0,
        font:0
    });
    const [state,setState] = React.useState("pomodoro");
    const [firstLoad , setFirstLoad] = React.useState(true);
    const [timerData,setTimerData] = React.useState({
        pomodoro : {
            starter: 1500,
            now: 1500,
        },
        short : {
            starter: 300,
            now: 300,
        },
        long: {
            starter: 900,
            now: 900,
        }
    }) 

    const [breakCounter, setBreakCounter] = React.useState(0);

    const [pause,setPause] = React.useState(true);
    const [displaySettings, setDisplaySettings] = React.useState(false);
    const [finished, setFinished] = React.useState(false);

    let calcTimerStroke = timerData[state].now * 330 / timerData[state].starter -1;
    React.useEffect(() => {
        let timeout
        if(!pause && timerData[state].now > -1 && !finished){
            timeout = setTimeout(() => {
                setTimerData(prevTimerData => {
                    return {
                        ...prevTimerData,
                        [state] : {
                            starter : prevTimerData[state].starter,
                            now : prevTimerData[state].now - 1
                        }
                    }
                });
            },1000);
        }else{
            if(timerData[state].now < 0){
                if(state === "pomodoro"){
                    if(breakCounter < 4){
                        setBreakCounter(prevCounter => prevCounter+1);
                        setState("short");
                    }else if (breakCounter >= 4){
                        setBreakCounter(-1);
                        setState("long");
                    }
                }else{
                    if(breakCounter === -1){
                        setFinished(true);
                        setPause(true);
                        setState("pomodoro");
                    }else{
                        setState("pomodoro");
                    }
                }
            }
        }
        return () =>{
            if(timeout){
                clearTimeout(timeout);
            }
        }
    },[state,pause,timerData, breakCounter,finished]);

    function refillTimers(){
        setTimerData(prevTimerData => {
            return {
                ...prevTimerData,
                pomodoro : {
                    starter : prevTimerData["pomodoro"].starter,
                    now : prevTimerData["pomodoro"].starter
                },
                short : {
                    starter : prevTimerData["short"].starter,
                    now : prevTimerData["short"].starter
                },
                long: {
                    starter : prevTimerData["long"].starter,
                    now : prevTimerData["long"].starter
                }
            }
        });
    }

    React.useEffect(() => {
        if (firstLoad){
            setPause(true);
        }else{
            refillTimers();
            setPause(false);

            if (state !== "pomodoro"){
                pauseAudio.play();
            }else{
                startAudio.play();
            }

        }
    },[state, firstLoad]);

    function reset(){
        refillTimers();
        setBreakCounter(0);
        setState("pomodoro");
        setFinished(false);
        setPause(true);
    }

    function changeState(){
        if(timerData[state].now > 0 && !finished){
            setPause(prevPause => !prevPause);
        }
        if(finished){
            reset();
            setPause(false);
        }
        setFirstLoad(false);
    }

    function changeFont(index){
        setTheme(prevTheme => {
            return {
                ...prevTheme,
                font: index
            }
        })
    }

    function changeColor(index){
        setTheme(prevTheme => {
            return {
                ...prevTheme,
                bgColors: index
            }
        })
    }

    return(
        <ThemeProvider theme={theme}>
            <Page>
                <Container>
                    <TitlePomodoro>pomodoro</TitlePomodoro>
                    <StateContainer>
                        <StateElement onClick={() => setState("pomodoro")} active={state === "pomodoro"}>pomodoro</StateElement>
                        <StateElement onClick={() => setState("short")} active={state === "short"}>short break</StateElement>
                        <StateElement onClick={() => setState("long")} active={state === "long"}>long break</StateElement>
                    </StateContainer>

                    <TimerContainer>
                        <TimerBackground>
                            <SvgCircle viewBox="0 0 125 125">
                            <path fill="none" strokeLinecap="round" strokeWidth="5"
                                strokeDasharray={`${calcTimerStroke}, 330`}
                                d="M62.5 10
                                a 40 40 0 0 1 0 105
                                a 40 40 0 0 1 0 -105
                                " />
                            {timerData[state].now > 0 ? 
                            <TimerText textAnchor="middle" x="62.5" y="73" >{Math.floor(timerData[state].now / 60) < 10 ? "0" + Math.floor(timerData[state].now / 60) : Math.floor(timerData[state].now / 60)}
                            :
                            {(Math.floor(timerData[state].now % 60)) < 10 ? "0" + (Math.floor(timerData[state].now % 60)) : (Math.floor(timerData[state].now % 60))}</TimerText>


                            : <TimerText textAnchor="middle" x="62.5" y="73" >00:00</TimerText>
                            }

                            <StateText onClick={changeState} textAnchor="middle" x="65" y="98" >{finished ? "RESTART" : pause ? "START" : "PAUSE"}</StateText>

                            </SvgCircle>
                        </TimerBackground>
                    </TimerContainer>

                    <SettingsSvg onClick={() => setDisplaySettings(prevSettings => !prevSettings)}>
                        <path fill="#D7E0FF" d="M26.965 17.682l-2.927-2.317c.055-.448.097-.903.097-1.365 0-.462-.042-.917-.097-1.365l2.934-2.317a.702.702 0 00.167-.896l-2.775-4.851a.683.683 0 00-.847-.301l-3.454 1.407a10.506 10.506 0 00-2.345-1.379l-.52-3.71A.716.716 0 0016.503 0h-5.55a.703.703 0 00-.687.588l-.52 3.71c-.847.357-1.63.819-2.345 1.379L3.947 4.27a.691.691 0 00-.847.301L.325 9.422a.705.705 0 00.167.896l2.927 2.317c-.055.448-.097.903-.097 1.365 0 .462.042.917.097 1.365L.492 17.682a.702.702 0 00-.167.896L3.1 23.429a.683.683 0 00.847.301L7.4 22.323a10.506 10.506 0 002.345 1.379l.52 3.71c.056.329.34.588.687.588h5.55a.703.703 0 00.687-.588l.52-3.71c.847-.357 1.631-.819 2.346-1.379l3.454 1.407c.313.119.673 0 .847-.301l2.775-4.851a.705.705 0 00-.167-.896zM13.73 18.9c-2.685 0-4.857-2.191-4.857-4.9 0-2.709 2.172-4.9 4.857-4.9 2.684 0 4.856 2.191 4.856 4.9 0 2.71-2.172 4.9-4.856 4.9z"/>
                    </SettingsSvg>

                    {displaySettings && 
                    <>
                        <SettingsFog></SettingsFog>
                        <SettingsContainer>
                            <HeaderContainer>
                                <SettingsTitle>Settings</SettingsTitle>
                                <CloseSvg onClick={() => setDisplaySettings(false)}>
                                    <path fill="#1E213F" fillRule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"/>
                                </CloseSvg>
                            </HeaderContainer>
                            <TimeSelectionContainer>
                                <TimeSelectionTitle>TIME (MINUTES)</TimeSelectionTitle>
                                <TimeInputContainer>
                                    <TimeInput type="pomodoro" setTimerData={setTimerData} timerData={timerData} title="pomodoro"/>
                                    <TimeInput type="short" setTimerData={setTimerData} timerData={timerData} title="short break"/>
                                    <TimeInput type="long" setTimerData={setTimerData} timerData={timerData} title="long break"/>
                                </TimeInputContainer>
                            </TimeSelectionContainer>

                            <FontSelectionContainer>
                                <FontSelectionTitle>FONT</FontSelectionTitle>
                                <FontSelectionButton onClick={() => changeFont(0)} selected={theme.font === 0} font={0}>Aa</FontSelectionButton>
                                <FontSelectionButton onClick={() => changeFont(1)} selected={theme.font === 1} font={1}>Aa</FontSelectionButton>
                                <FontSelectionButton onClick={() => changeFont(2)} selected={theme.font === 2} font={2}>Aa</FontSelectionButton>
                            </FontSelectionContainer>

                            <ColorSelectionContainer>
                                <ColorSelectionTitle>COLOR</ColorSelectionTitle>
                                <ColorSelectionButton onClick={() => changeColor(0)} selected={theme.bgColors === 0} color={0} checkIcon={checkIcon}></ColorSelectionButton>
                                <ColorSelectionButton onClick={() => changeColor(1)} selected={theme.bgColors === 1} color={1} checkIcon={checkIcon}></ColorSelectionButton>
                                <ColorSelectionButton onClick={() => changeColor(2)} selected={theme.bgColors === 2} color={2} checkIcon={checkIcon}></ColorSelectionButton>
                            </ColorSelectionContainer>
                            <ApplySettingsButton onClick={() => {reset(); setDisplaySettings(false)}} color={theme.bgColors} font={theme.font}>Apply</ApplySettingsButton>
                        </SettingsContainer>
                    </>}
                </Container>
            </Page>
        </ThemeProvider>
    )
}

export default Pomodoro;