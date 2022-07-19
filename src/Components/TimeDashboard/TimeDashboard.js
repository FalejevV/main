import React from "react";
import Block from "./Block";
import { BlockGrid, Container, Page } from "./TimeDashboard.styled";
import iExcercise from "./img/icon-exercise.svg";
import iPlay from "./img/icon-play.svg";
import iSelfCare from './img/icon-self-care.svg';
import iSocial from './img/icon-social.svg';
import iStudy from './img/icon-study.svg';
import iWork from './img/icon-work.svg';
import LargeBlock from "./LargeBlock";
import avatarImage from "./img/image-jeremy.png"
import data from "./data.json";

function TimeDashboard(){
    const [interval, setInterval] = React.useState("weekly");

    return(
        <Page>
            <Container>
                <LargeBlock interval={interval} setInterval={setInterval} name="Jeremy Robson" avatar={avatarImage}/>
                <BlockGrid>
                    <Block interval={interval} data={data[0]} icon={iWork} backgroundColor="#FF8B64"/>
                    <Block interval={interval} data={data[1]} icon={iPlay} backgroundColor="#56C2E6"/>
                    <Block interval={interval} data={data[2]} icon={iStudy} backgroundColor="#FF5E7D"/>
                    <Block interval={interval} data={data[3]} icon={iExcercise} backgroundColor="#4BCF83"/>
                    <Block interval={interval} data={data[4]} icon={iSocial} backgroundColor="#7235D1"/>
                    <Block interval={interval} data={data[5]} icon={iSelfCare} backgroundColor="#F1C75B"/>
                </BlockGrid>
            </Container>
        </Page>
    )
}

export default TimeDashboard;