import React from "react";
import styled from "styled-components";
import iconComplete from "./img/icon-complete.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width:100%;
    height:fit-content;
    font-family: 'Space Grotesk', sans-serif;
    position:relative;
`
const InputTitle = styled.p`
    text-transform: uppercase;
    color:black;
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 10px;
    position:relative;
    ${({ displayAlert, alertText }) => displayAlert && `
        &:after{
            position:absolute;
            content: "${alertText}";
            bottom:-75px;
            left:0px;
            color:#BD6B6D;
            font-size:11px;
            text-transform:none;
            letter-spacing:0px;
        }
    `}
`

const InputField = styled.input`
    height: 45px;
    width: ${({ width }) => width || "100%"};
    border:1px solid #DFDFDF;
    border-radius:7px;
    padding:15px;
    font-size: 17px;
    letter-spacing: 1px;
    position:relative;
    display:inline;
    font-family: 'Space Grotesk', sans-serif;
    &::placeholder{
        font-family: 'Space Grotesk', sans-serif;
        color:gray;
    }
    margin-bottom: 30px;
    transition: all 0.3s;
    ${({ outline }) => outline && `
        margin-bottom:40px;
        border:1px solid #BD6B6D;
    `};
`

const TextFlexbox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:100%;

    ${InputTitle}{
        width:50%;
    }
`

const InputFlexbox = styled.div`
    display: flex;  
    width:100%;
    gap:15px;
    ${InputField}{
        width:20%;

        margin-bottom: 40px;
        &:last-child{
            flex:auto;
        }
    }
`

const SubmitButton = styled.button`
    background-color: #220930;
    width:100%;
    height: 55px;
    color:white;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    border-radius: 7px;
    cursor: pointer;
`

const IconComplete = styled.img`
    margin-bottom: 30px;
`

const CompleteContainer = styled(Container)`
    justify-content: center;
    align-items: center;
`

const ThankYouText = styled.p`
    font-size: 28px;
    letter-spacing: 4px;
    color:black;
    margin-bottom: 20px;
`

const CompleteText = styled.p`
    color:#A9A7AC;
    font-size:16px;
    margin-bottom: 50px;
`


function CardForm(props){
    return(
        <Container>
            {props.done ? 
            
            <CompleteContainer>
                <IconComplete src={iconComplete}/>
                <ThankYouText>THANK YOU!</ThankYouText>
                <CompleteText>
                    We've added your card details
                </CompleteText>
                <SubmitButton onClick={props.reset}>Confirm</SubmitButton>
            </CompleteContainer>

            :

            <>
                <InputTitle alertText="Invalid name" displayAlert={props.alerts.includes("name")} >Cardholder Name</InputTitle>
                <InputField outline={props.alerts.includes("name")} type="text" placeholder="e.g Jane Appleseed" value={props.name} name="name" onChange={(e) => props.setData(e)}/>

                <InputTitle alertText="Wrong format, numbers only" displayAlert={props.alerts.includes("number")}>Card Number</InputTitle>
                <InputField outline={props.alerts.includes("number")} maxLength={16} type="text" placeholder="e.g 1234 5678 9123 0000" name="number" value={props.number} onChange={(e) => props.setData(e)} />

                <TextFlexbox>
                    <InputTitle alertText="Can't be blank" displayAlert={props.alerts.includes("month") || props.alerts.includes("year")} >Exp. Date (mm/yy)</InputTitle>
                    <InputTitle alertText="Wrong format" displayAlert={props.alerts.includes("cvc")}>CVC</InputTitle>
                </TextFlexbox>

                <InputFlexbox>
                    <InputField outline={props.alerts.includes("month")} maxLength={2} placeholder="MM" name="month" value={props.month} onChange={(e) => props.setData(e)}/>
                    <InputField outline={props.alerts.includes("year")} maxLength={2} placeholder="YY" name="year" value={props.year} onChange={(e) => props.setData(e)}/>

                    <InputField outline={props.alerts.includes("cvc")} maxLength={3} placeholder="e.g. 123" name="cvc" value={props.cvc} onChange={(e) => props.setData(e)}/>
                </InputFlexbox>

                <SubmitButton onClick={props.submit}>Confirm</SubmitButton>
            </>
            }
        </Container>
    )
}

export default CardForm;