import React from "react";
import styled from "styled-components";

import crossIcon from "./img/icon-remove.svg";
import { nanoid } from "nanoid";
import { keyframes } from 'styled-components'

const fadeId = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Container = styled.div`
    width:100%;
    max-width: 1110px;
    height: 72px;
    background: #FFFFFF;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    border-radius: 5px;
    position: absolute;
    top:120px;
    padding: 25px 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'League Spartan';

    opacity: 0;
    animation: ${fadeId} 0.3s ease-in;
    animation-fill-mode: forwards;

    @media screen and (max-width:950px) {
        height: fit-content;
        position: relative;
        top:-40px;
        width:calc(100% - 40px);
        padding:25px 20px;
    }

`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:16px;

    @media screen and (max-width:950px) {
        gap:15px;
    }

`
const SearchTag = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    gap:11px;

    border-radius: 4px;
    overflow: hidden;
    background-color:  #eff6f6;
`

const TagText = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding-left: 10px;
    letter-spacing: -0.123077px;
    color: #5CA5A5;
`

const TagClose = styled.img`
    background-color: #5CA5A5;
    padding:9px;
    transition: all 0.3s;
    &:hover{
        background-color: #2B3939;
    }
`

const ClearButton = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.123077px;
    margin-left: auto;
    color: #7C8F8F;
    cursor: pointer;

    transition: all 0.3s;
    &:hover{
        color:#5CA5A5;
    }

    @media screen and (max-width:950px) {
        padding-right: 10px;
    }
`

function SearchBar(props){
    return(
        <Container>
            <TagContainer>
                {props.tags.map(item => 
                    <SearchTag key={nanoid()}>
                        <TagText>{item}</TagText>
                        <TagClose onClick={() => props.removeTag(item)} src={crossIcon}/>
                    </SearchTag>
                )}
            </TagContainer>
            <ClearButton onClick={props.clearTags}>Clear</ClearButton>
        </Container>
    )
}

export default SearchBar;