import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    width:100%;
    height:fit-content;
    flex-direction: column;
    gap:5px;
    position: relative;
    font-family: 'Space Mono', monospace;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InputTitle = styled.p`
    color:#607D79;
    font-size: 16px;
`
const AlertText = styled(InputTitle)`
    color:red;
    opacity:0.6;
`

const Input = styled.input`
    background-color: #F3F8FB;
    text-align: right;
    padding: 10px;
    padding-left: 30px;
    width: 100%;
    height:50px;
    border-radius: 5px;
    color:#115153;
    font-size: 25px;
    font-weight: 700;
    font-family: 'Space Mono', monospace;

`
const PlaceholderIcon = styled.img`
    position: absolute;
    bottom: 15px;
    left:15px;
    pointer-events: none;
    height:20px;
`
function InputField(props){
    let shown = false;
    try{
        if(props.value === "0"){
            shown = true;
        }
    }catch{

    }
    return(
        <InputContainer marginBottom={props.marginBottom}>
            <TitleContainer>
                <InputTitle>{props.title}</InputTitle>
                {shown && <AlertText>Can't be zero</AlertText>}
            </TitleContainer>
            <Input placeholder="0" value={props.value} onChange={(e) => props.onChange(e,props.name)} type="text" />
            <PlaceholderIcon src={props.icon} />
        </InputContainer>
    )
}

export default InputField;
