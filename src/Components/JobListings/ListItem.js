import React from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
const Container = styled.div`
    width:100%;
    height:152px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:24px;
    padding:32px 25px;
    padding-top: 40px;
    background: #FFFFFF;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    border-radius: 5px;

    border-left: 5px solid white;

    ${({ featured }) => featured && `
        border-left: 5px solid #5CA5A5;
    `}

    font-family: 'League Spartan', sans-serif;

    @media screen and (max-width:950px) {
        flex-direction: column;
        height:fit-content;
        align-items: flex-start;
        margin-bottom: 15px;
    }
    position: relative;
`

const LogoImage = styled.img`
    @media screen and (max-width:950px) {
        width:50px;
        height:50px;
        position: absolute;
        left: 20px;
        top:-25px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:8px;

`

const TitleTab = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:8px;
    margin-bottom: 3px;
`

const Title = styled.p`
    padding-right: 10px;
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 17px;

    color: #5CA5A5;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        filter:brightness(1.1);
    }

    @media screen and (max-width:950px) {
        font-size: 16px;
    }
`

const Tag = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;

    text-align: center;
    letter-spacing: -0.107692px;
    text-transform: uppercase;
    padding:5px 8px;
    padding-top: 6px;
    border-radius: 20px;
    color: #FFFFFF;

    background-color: ${({ backgroundColor }) => backgroundColor || "#5CA5A5"};
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        filter:brightness(1.1);
    }
`

const JobName = styled.p`
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #2B3939; 
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        color: #5CA5A5;
    }

    @media screen and (max-width:950px) {
        font-size: 16px;
    }
`

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap:19.5px;
`

const DesctiptionText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: -0.138462px;

    color: #7C8F8F;

    @media screen and (max-width:950px) {
        font-size: 15px;
    }
`

const DescriptionDivider = styled.div`
    width:4px;
    height: 4px;
    background-color: #B7C4C4;
    border-radius: 50%;
`

const SearchTagContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: auto;
    gap:30px;
    @media screen and (max-width:950px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        gap:20px;
        padding-left: 10px;
    }
`

const SearchTag = styled.p`
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: -0.123077px;
    z-index: 2;
    color: #5CA5A5;
    cursor: pointer;
    transition: all 0.3s;
    &:before{
        transition: all 0.3s;
        z-index: -1;
        content: "";
        padding:3px 10px;
        position: absolute;
        left:-10px;
        top:50%;
        transform: translate(0,-50%);
        background: #5CA5A5;
        width:100%;
        height:100%;
        mix-blend-mode: normal;
        opacity: 0.1;
        border-radius: 4px;
    }

    &:hover{
        color:white;

        &:before{
            opacity: 1;
        }
    }

    @media screen and (max-width:950px) {
        margin-right: 15px;
    }
`
const HR = styled.hr`
    width:100%;
    height:1px;
    background-color: #868C8B;

`

function ListItem(props){
    function getSearchTags(){
        let tags = []
        tags.push(props.data.role);
        tags.push(props.data.level);
        tags.push(...props.data.languages);
        return tags;
    }
    return(
        <Container featured={props.data.featured}>
            <LogoImage src={require(props.data.logo + "")} />

            <InfoContainer>
                <TitleTab>
                    <Title>{props.data.company}</Title>
                    {props.data.new && <Tag>NEW!</Tag>}
                    {props.data.featured && <Tag backgroundColor="#2B3939;">FEATURED</Tag>}
                </TitleTab>
                <JobName>{props.data.position}</JobName>
                <DescriptionContainer>
                    <DesctiptionText>{props.data.postedAt}</DesctiptionText>
                    <DescriptionDivider></DescriptionDivider>
                    <DesctiptionText>{props.data.contract}</DesctiptionText>
                    <DescriptionDivider></DescriptionDivider>
                    <DesctiptionText>{props.data.location}</DesctiptionText>
                </DescriptionContainer>
            </InfoContainer>
            {props.hr && <HR/>}
            <SearchTagContainer>
                {getSearchTags().map(item => <SearchTag key={nanoid()} onClick={() => props.addTag(item)}>{item}</SearchTag>)}
            </SearchTagContainer>
        </Container>
    )
}

export default ListItem;