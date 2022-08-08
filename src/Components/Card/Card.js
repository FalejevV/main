import React from "react";
import { CardsFlexbox, Container, ImageBackground, Page, BGPicture } from "./Card.styled";
import CardForm from "./CardForm";


import bgDesktop from "./img/bg-main-desktop.png";
import bgMobile from "./img/bg-main-mobile.png";
import InteractiveCard from "./InteractiveCard";
import InteractiveCardBack from "./InteractiveCardBack";

function Card(){
    const [cardData,setCardData] = React.useState({
        name: "",
        number : ["", 16],
        month : ["", 2],
        year : ["",2],
        cvc : ["",3]
    })

    const [alertInputs, setAlertInputs] = React.useState([]);
    const [submitted, setSubmitted] = React.useState(false);
    const [done, setDone] = React.useState(false);
    function submitForm(){
        setSubmitted(true);
    }

    function reset(){
        setAlertInputs([]);
        setSubmitted(false);
        setDone(false);
        setCardData({
            name: "",
            number : ["", 16],
            month : ["", 2],
            year : ["",2],
            cvc : ["",3]
        });
    }

    React.useEffect(() => {
        if(submitted){
            let alerts = [];
            for (const [key, value] of Object.entries(cardData)) {
                if(key !== "name"){
                    if(value[0].length !== value[1]){
                        alerts.push(key);
                    }else{
                        let num = /^[0-9.,]+$/.test(value);
                        if(!num){
                            alerts.push(key);
                        }
                    }
                }else{
                    if(value.length < 3){
                        alerts.push(key);
                    }
                }
            }
            if(alerts.length > 0){
                setAlertInputs(alerts);
            }else{
                setDone(true);
            }
            setSubmitted(false);
        }
    }, [submitted,cardData]);
    function setData(e){
        if(e.target.name === "name"){
            setCardData(prevCardData => {
                return({
                    ...prevCardData,
                    name : e.target.value,
                })
            });
        }else{
            setCardData(prevCardData => {
                return({
                    ...prevCardData,
                    [e.target.name] : [e.target.value, prevCardData[e.target.name][1]],
                })
            });
        }
    }
    return(
        <Page>
            <Container>
                <BGPicture>
                    <source media="(min-width:1060px)" srcSet={bgDesktop}></source>
                    <ImageBackground src={bgMobile} />
                </BGPicture>
                <CardsFlexbox>
                    <InteractiveCard number={cardData.number[0]} name={cardData.name} month={cardData.month[0]} year={cardData.year[0]} />
                    <InteractiveCardBack code={cardData.cvc[0]} />
                </CardsFlexbox>
                <CardForm done={done} alerts={alertInputs} reset={reset} submit={submitForm} setData={setData} data={cardData} />
            </Container>
        </Page>
    )
}

export default Card;