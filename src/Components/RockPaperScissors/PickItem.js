import React from "react";
import styled from "styled-components";

import rockIcon from "./img/icon-rock.svg";
import scissorsIcon from "./img/icon-scissors.svg";
import paperIcon from "./img/icon-paper.svg";

export const PickImage = styled.img`
    width:73px;
    height:86px;
    padding-bottom: 4px;
    padding-right: 4px;

    ${({ large }) => large && `
        width:113px;
        height:126px;
    `}

    @media (max-width:560px){
        width:60px;
        height:60px;
    }
`

export const PickElement = styled.div`
    width:152px;
    height:152px;
    padding:40px;
    object-fit: contain;
    background-color:white;
    border-radius: 50%;
    position: relative;
    border-top: 8px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after{
        position: absolute;
        content:"";
        width:200px;
        height:200px;
        border-radius: 50%;
        top:calc(50% - 4px);
        left:50%;
        transform: translate(-50%,-50%);
        background-color: ${({ borderColor }) => borderColor || "red"};
        z-index: -1;
    }

    &:before{
        transition: all 0.3s;
        position: absolute;
        content:"";
        width:240px;
        height:240px;
        border-radius: 50%;
        top:calc(50% - 4px);
        left:50%;
        transform: translate(-50%,-50%);
        background-color: transparent;
        z-index: -1;
    }

    ${({ hover }) => hover && `
        cursor: pointer;
        &:hover{
            &:before{
                background-color: rgba(255, 255, 255, 0.05);
            }
        }

        @media (max-width:560px){
            &:before{
                width:170px;
                height:170px;
            }
        }
    `};


    ${({ doSpan }) => doSpan && `
        grid-column: 1 / span 2;
    `}

    
    ${({ large }) => large && `
        width:240px;
        height:240px;

        &:after{
            width:300px;
            height:300px;
        }
    `};


    @media (max-width:560px){
        width:100px;
        height:100px;
        &:after{
            width:130px;
            height:130px;
        }
    }
`

export const WinnerFlash = styled.div`
    width:450px;
    height:450px;
    background-color: rgba(255, 255, 255, 0.06);
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    z-index: -1;
    
    &:before{
        content: "";
        width:600px;
        height:600px;
        background-color: rgba(255, 255, 255, 0.06);
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        border-radius: 50%;
    }

    &:after{
        content: "";
        width:750px;
        height:750px;
        background-color: rgba(255, 255, 255, 0.06);
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        border-radius: 50%;
    }


    @media (max-width:560px){
        width:180px;
        height:180px;

        &:before{
            width:220px;
            height:220px;
        }

        &:after{
            width:270px;
            height:270px;
        }
    }
`

const pickColors = {
    paper : "#4664F4",
    scissors : "#EB9F0E",
    rock: "#DB2E4D"
}

function PickItem(props){
    let pickImage = props.pick === "paper" ? paperIcon : props.pick === "scissors" ? scissorsIcon : rockIcon;
    function pickMe(value){
        if(props.clickable){
            props.setPick(value);
        }
    }
    return(
        <PickElement large={props.large} hover={props.hover} doSpan={props.doSpan} borderColor={pickColors[props.pick]} onClick={() => pickMe(props.pick)}>
            <PickImage large={props.large} src={pickImage} />
            {props.winner && <WinnerFlash></WinnerFlash>}
        </PickElement>
    )
}

export default PickItem;