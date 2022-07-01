import React from "react";
import styled from "styled-components";

const Bar = styled.div`
    width:80%;
    height: ${({ height }) => `calc(${Math.floor(height*100)/100}*100%)` || "10px"};

    border-radius: 5px;
    background-color: #EC755D;
    position: relative;
    cursor: pointer;

    transition: all 0.3s;

    ${({ topOne, selected }) => {
        if(topOne && selected){
            return `
                background-color: #B4DFE5;
            `
        }else if (topOne && !selected){
            return `
                background-color: #76B5BC;
            `
        }else if (!topOne && selected){
            return `
                background-color: #FF9B87;
            `
        }
    }};
`

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width:70px;
    height:140px;
    font-family: 'DM Sans', sans-serif;
    gap:10px;
    cursor: pointer; 

    &:hover{
        ${Bar}{
            background-color: #FF9B87;

            ${({selected, topOne}) => {
                if (selected && topOne){
                    return `
                        background-color: #B4DFE5;
                    `;  
                }else if(selected && topOne === false){
                    return `
                        background-color: #FF9B87;
                    `
                }else if(selected === false && topOne){
                    return `
                        background-color: #B4DFE5;
                    `
                }
            }};

        }
    }
`



const BarValue = styled.p`
    width:65px;
    min-height:35px;
    max-height:35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #372111;
    color:white;
    position:absolute;
    left:50%;
    transform: translate(-50%);
    top:-43px;
    font-weight: 700;
    cursor: pointer;

    z-index: 1000;
`

const BarName = styled.p`
    color:#b9b3ad;
    font-size: 15px;
    position: absolute;
    left:50%;
    transform: translate(-50%);
    bottom:-30px;

    @media (max-width: 400px){
        font-size:13px;
    }
`

function ChartBar(props){
    const [hovered,setHovered] = React.useState(false);
    return(
        <BarContainer topOne={props.height === 1} selected={props.selected} onClick={props.onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Bar topOne={props.height === 1} selected={props.selected} height={props.height}>
                {hovered || props.selected ? <BarValue>${props.value}</BarValue> : ""}
                <BarName>{props.name}</BarName>
            </Bar>
        </BarContainer>
    )
}

export default ChartBar;