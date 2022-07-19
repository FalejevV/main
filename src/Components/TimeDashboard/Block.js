import styled from "styled-components";
import React from "react";
import dotsIcon from "./img/icon-ellipsis.svg";

const TopTab = styled.div`
    width:100%;
    height:60px;
    background-color: ${({ backgroundColor }) => backgroundColor || "#FF8B64"};
    position: relative;
    @media screen and (max-width:900px) {
        height:50px;
    }
`


const TabInfo = styled.div`
    width:100%;
    height:200px;
    margin-top: -15px;
    background-color: #1D204B;
    z-index: 5;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:25px;

    @media screen and (max-width:900px) {
        height:fit-content;
        padding:15px 20px;
    }

`

const TabIcon = styled.img`
    position: absolute;
    right: 10px;
    width:70px;
    top:50%;
    transform: translate(0,-50%);
`

const DotsIcon = styled.img`
    max-width: 17px;
    max-height: 25px;
    padding:10px 0px;
    transition: all 0.3s;
    cursor: pointer;
    filter: brightness(0.7);
    
    &:hover{
        filter: brightness(1.2);
    }
`


const InfoTitleContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Title = styled.div`
    color:white;
    font-size: 16px;
    font-weight: 500;
`

const HoursContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
`

const HoursText = styled.p`
    width:100%;
    font-weight: 300;
    font-size: 50px;
    color:white;
    margin-bottom: 10px;

    @media screen and (max-width:900px) {
        font-size: 30px;
    }
`

const WeekHoursText = styled.p`
    width:fit-content;
    white-space: nowrap;
    font-weight: 400;
    font-size:13px;
    color:#ACB0E2;
    @media screen and (max-width:900px) {
        font-size:11px;
    }
`

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 240px;
    width:100%;
    height:100%;
    max-height: 220px;
    border-radius: 15px;
    overflow: hidden;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;

    transition: all 0.3s;

    &:hover{
        filter: brightness(1.15);
    }

    ${({ unhovered }) => unhovered && `
        &:hover{
            filter : brightness(1);
        }
    `}

    @media screen and (max-width:900px){
        width:100%;
        max-width: none;
        height:fit-content;
        ${HoursContainer}{
            flex-direction: row;
            justify-content: space-between;
            align-items:center;
        }
    }
`

function Block(props){
    let lastWhat = "Last Month";
    if(props.interval === "daily"){
        lastWhat = "Yesterday";
    }else if(props.interval === "weekly"){
        lastWhat = "Last Week";
    }else if(props.interval === "monthly"){
        lastWhat = "Last Month";
    }

    const[unhovered,setUnhovered] = React.useState(false);

    return(
        <Container unhovered={unhovered}>
            <TopTab backgroundColor={props.backgroundColor}>
                <TabIcon src={props.icon || ""} />
            </TopTab>
            <TabInfo>
                <InfoTitleContainer>
                    <Title>{props.data.title}</Title>
                    <DotsIcon onMouseEnter={() => setUnhovered(true)} onMouseLeave={() => setUnhovered(false)} src={dotsIcon} />
                </InfoTitleContainer>
                <HoursContainer>
                    <HoursText>{props.data.timeframes[props.interval].current}hrs</HoursText>
                    <WeekHoursText>{lastWhat} - {props.data.timeframes[props.interval].previous}hrs</WeekHoursText>
                </HoursContainer>
            </TabInfo>
        </Container>
    )
}

export default Block;