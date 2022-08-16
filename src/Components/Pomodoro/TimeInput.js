import React from "react";
import styled from "styled-components";
import arrowUp from "./img/icon-arrow-up.svg";
import arrowDown from "./img/icon-arrow-down.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 140px;
    width:100%;
`
const InputTitle = styled.p`
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    width:100%;
    color: #1E213F;

    mix-blend-mode: normal;
    opacity: 0.4;
    padding-bottom: 5px;
`

const InputFieldContainer = styled.div`
    width:100%;
    height:100%;
    max-width:140px;
    max-height:48px;
    position: relative;

    &:after{
        content: "";
        position: absolute;
        width:40px;
        height:100%;
        right:0;
        top:0;
    }
`

const ArrowUp = styled.img`
    position: absolute;
    right:15px;
    top:35%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.3;
    z-index: 5;
    transition: all 0.3s;
    &:hover{
        opacity: 1;
    }
`

const ArrowDown = styled.img`
    position: absolute;
    right:15px;
    bottom:20%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 5;
    opacity: 0.3;

    transition: all 0.3s;
    &:hover{
        opacity: 1;
    }
`
const InputField = styled.input`
    width:100%;
    height:48px;
    background-color: #EFF1FA;
    border-radius: 10px;
    padding:15px;
    &:focus{
        outline: none;
    }

    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #1E213F;
`

function TimeInput(props){
    function checkInput(event){
        let inputOk = true;
        event.target.value.split("").forEach(char => {
            if(isNaN(char) || char === "." || char === ","){
                inputOk = false;
            }
        });
        if(inputOk){
            props.setTimerData(prevTimerData => {
                return {
                    ...prevTimerData,
                    [props.type] : {
                        starter : Number(event.target.value) * 60,
                        now : Number(event.target.value) * 60
                    }
                }
            })
        }
    }

    function incrementDecrement(value){
        props.setTimerData(prevTimerData => {
            return {
                ...prevTimerData,
                [props.type] : {
                    starter : prevTimerData[props.type].starter + (value*60),
                    now : prevTimerData[props.type].starter + (value * 60),
                }
            }
        })
    }
    return(
        <Container>
            <InputTitle>{props.title}</InputTitle>
            <InputFieldContainer>
                <InputField onChange={(e) => checkInput(e)} value={props.timerData[props.type].starter / 60} type="text"/>
                <ArrowUp src={arrowUp} onClick={() => incrementDecrement(1)}/>
                <ArrowDown src={arrowDown} onClick={() => incrementDecrement(-1)} />
            </InputFieldContainer>
        </Container>
    )
}

export default TimeInput;