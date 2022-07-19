import styled from "styled-components";
import React from "react";

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 230px;
    width:100%;
    height: 470px;
    border-radius: 15px;
    overflow: hidden;
    font-family: 'Rubik', sans-serif;

    @media screen and (max-width:900px) {
        flex-direction:column;
        max-width:500px;
        height:fit-content
    }   

    
`
const ProfileTab = styled.div`
    padding:30px 25px;
    width:100%;
    height:350px;
    margin-bottom: -20px;
    background-color: #5746EA;
    z-index: 5;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:900px) {
        flex-direction:row;
        max-width:500px;
        justify-content: center;
        align-items: center;
        gap:15px;
        height:fit-content;
        min-height: 150px;
        padding:10px 10px;
        height: fit-content;
    } 
`
const Avatar = styled.img`
    border-radius: 50%;
    width:75px;
    height:75px;
    border: 3px solid white;
    margin-bottom: 35px; 
    @media screen and (max-width:900px) {
        margin-bottom: 0;
    }
`

const ForText = styled.p`
    font-weight: 400;
    color:white;
    font-size: 13px;
    text-align: left;
    width:100%;
    opacity: 0.5;
    margin-bottom: 5px;
`

const ProfileName = styled.h2`
    color:white;
    font-weight: 300;
    font-size: 36px;
    text-align: left;
    width:100%;
    @media screen and (max-width:900px) {
        font-size: 30px;
    }
    @media screen and (max-width:400px) {
        font-size: 20px;
    }
`

const TabToggle = styled.div`
    width:100%;
    height:200px;
    margin-top: -15px;
    background-color: #1D204B;
    z-index: 4;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    gap:20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:30px 30px;
    padding-top: 65px;

    @media screen and (max-width:900px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding:15px;
        padding-top:55px;
    }
`

const ToggleText = styled.p`
    font-weight: 400;
    color:#5A5C98;
    font-size: 16px;
    text-align: left;
    width:100%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        color:white;
    }
    ${({ selected }) => selected && `
        color:white;
    `}

    @media screen and (max-width:900px) {
        text-align: center;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

function LargeBlock(props){
    return(
        <Container>
            <ProfileTab>
                <Avatar src={props.avatar} />

                <TextContainer>
                    <ForText>Report for</ForText>
                    <ProfileName>
                        {props.name}
                    </ProfileName>
                </TextContainer>
            </ProfileTab>
            <TabToggle>
                <ToggleText onClick={() => props.setInterval("daily")} selected={props.interval === "daily"}>Daily</ToggleText>
                <ToggleText onClick={() => props.setInterval("weekly")} selected={props.interval === "weekly"}>Weekly</ToggleText>
                <ToggleText onClick={() => props.setInterval("monthly")} selected={props.interval === "monthly"}>Monthly</ToggleText>
            </TabToggle>
        </Container>
    )
}

export default LargeBlock;